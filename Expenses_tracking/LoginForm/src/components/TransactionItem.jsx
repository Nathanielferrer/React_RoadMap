import { useTransactionStore } from "../store/transactionStore";   //import the useTransactionStore to use the parent function

export default function TransactionItem({ transaction }) { //I just recive 1 prop
  const deleteTransaction = useTransactionStore(state => state.deleteTransaction)
  
  return (
    <div className="transaction-item">
      <p>Category: {transaction.category}</p>
      <p>Amount: ₱{transaction.amount}</p>
      <p>Date: {transaction.date}</p>
      <p>Type: {transaction.type}</p>

      <button onClick={() => deleteTransaction(transaction.id)}>Delete</button> 
    </div>
  );
}
