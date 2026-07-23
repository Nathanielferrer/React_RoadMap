import { useTransactionStore } from '../store/transactionStore';

export default function Dashboard() {
  // Grab the transactions array from our global state
  const transactions = useTransactionStore((state) => state.transactions);

  // We can use the array `.reduce()` method to calculate the totals.
  // This loops through all transactions and adds up the amounts based on their type.

  const totalIncome = transactions.reduce((runningTotal, transaction) => {
    // If the transaction is an income, add its amount to the total, otherwise add 0.
    return transaction.type === "income" ?
      runningTotal + Number(transaction.amount) : runningTotal;
  }, 0); // 0 is our starting number

  const totalExpense = transactions.reduce((runningTotal, transaction) => {
    // If the transaction is an expense, add its amount to the total, otherwise add 0.
    return transaction.type === "expense" ? runningTotal + Number(transaction.amount) : runningTotal;
  }, 0);

  // Balance is simply income minus expense
  const balance = totalIncome - totalExpense;

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      {/* We display our calculated numbers here! */}
      <div>
        <p><strong>Total Income:</strong> ₱{totalIncome}</p>
        <p><strong>Total Expense:</strong> ₱{totalExpense}</p>
        <p><strong>Current Balance:</strong> ₱{balance}</p>
      </div>
    </div>
  );
}
