import TransactionItem from './TransactionItem';
import { useTransactionStore } from '../store/transactionStore'; //We need to import the useTransactionStore to use the transactions state

export default function TransactionList() { //We don't need to pass the props here cause we already use zustand
  const transactions = useTransactionStore((state) => state.transactions); //This will get the transactions state from the store
  const filterType = useTransactionStore((state) => state.filterType); // We also need to grab the current filter!

  // Before we render, we filter the array. 
  // If filterType is 'all', we keep it. Otherwise, we check if the transaction type matches the filter.
  const filteredTransactions = transactions.filter((transaction) => {
    if (filterType === 'all') return true;
    return transaction.type === filterType;
  }); 

  return (
    <div className="transaction-list">
      <h3>Recent Transactions</h3>
      {filteredTransactions.length === 0 ? (  //This will check the transactions if its empty or not if true dsiplay No transactions yet else display existed transactions list
        <p>No transactions yet</p>
      ) : (
        filteredTransactions.map((transaction) => ( //This will loop through the transactions array and display each transaction using TransactionItem component
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))
      )}
    </div>
  );
}
