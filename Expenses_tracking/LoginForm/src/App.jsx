import Dashboard from "./components/Dashboard";
import TransactionForm from "./components/TransactionForm";
import FilterBar from "./components/FilterBar";
import TransactionList from "./components/TransactionList";

function App() {
    return (
        <>
            {/* The dashboard shows the total balance at the top */}
            <Dashboard />
            <TransactionForm />
            
            {/* The filter bar sits right above the transaction list */}
            <FilterBar />
            <TransactionList />
        </>
    );
}

export default App;