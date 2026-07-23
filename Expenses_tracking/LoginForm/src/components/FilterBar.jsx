import { useTransactionStore } from '../store/transactionStore';

export default function FilterBar() {
  // We grab both the current filter word, AND the function to change it from our store
  const filterType = useTransactionStore((state) => state.filterType);
  const setFilterType = useTransactionStore((state) => state.setFilterType);

  return (
    <div className="filter-bar">
      <label>Filter By: </label>
      {/* We use a dropdown (select) here. Whenever the user clicks a new option, 
          onChange triggers and runs our setFilterType function with the new value! */}
      <select 
        value={filterType} 
        onChange={(e) => setFilterType(e.target.value)}
      >
        <option value="all">All Transactions</option>
        <option value="income">Income Only</option>
        <option value="expense">Expense Only</option>
      </select>
    </div>
  );
}
