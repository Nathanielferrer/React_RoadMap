import { useState, useMemo } from "react";

const productsData = [
    { id: 1, name: "iPhone 15", price: 999 },
    { id: 2, name: "Samsung S24", price: 899 },
    { id: 3, name: "MacBook Air", price: 1299 },
    { id: 4, name: "iPad Pro", price: 1099 },
];

export default function Ecommerce() {
    const [search, setSearch] = useState("");
    const [darkMode, setDarkMode] = useState(false);

    // ✅ useMemo caches the result of filtering
    // It only re-runs when "search" changes
    const filteredProducts = useMemo(() => {

        // 🔁 This runs ONLY when:
        // - first render
        // - search state changes
        console.log("Filtering products...");

        // 📦 Step 1: We take the full product list (productsData)
        return productsData.filter((product) => {

            // 🔤 Step 2: Convert product name to lowercase
            // so search becomes case-insensitive (Apple = apple)
            const productName = product.name.toLowerCase();

            // 🔍 Step 3: Convert search input to lowercase too
            const searchText = search.toLowerCase();

            // 🎯 Step 4: Check if product name includes the search text
            // Example:
            // "iphone 15".includes("ip") → true
            return productName.includes(searchText);
        });

    }, [search]); // 👈 Dependency array:
    // useMemo will ONLY recompute when "search" changes

    return (
        <div style={{ background: darkMode ? "#111" : "#fff", color: darkMode ? "#fff" : "#000" }}>
            <button onClick={() => setDarkMode(!darkMode)}>
                Toggle Dark Mode
            </button>

            <input
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {filteredProducts.map((product) => (
                <div key={product.id}>
                    {product.name} - ${product.price}
                </div>
            ))}
        </div>
    );
}