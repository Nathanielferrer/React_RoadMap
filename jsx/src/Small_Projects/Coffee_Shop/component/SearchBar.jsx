
export default function SearchBar({ search, setSearch }) {
    return (
        <div>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for a product"
            />
        </div>
    )
}