import { create } from 'zustand';

//Zustand is a global State or Memory of the App where we can store the data and access it anywhere
//This is to avoid the App.jsx become responsible for holding all the shared state(data) and passing it as a props to the other components
//Avoid props Drilling
export const useTransactionStore = create((set) => ({
  transactions: [], //Initial state
  filterType: 'all', // We add a new state here to keep track of what the user wants to see ('all', 'income', or 'expense')

  addTransaction: (transaction) =>  //This is the function that will add the transaction to the state
    set((state) => ({   //The set is similar to updating of useState
      transactions: [...state.transactions, transaction], //This will add the new transaction to the state
    })),

  deleteTransaction: (id) =>
    set((state) => ({
      transactions: state.transactions.filter((transaction) => transaction.id !== id) //This will remove the transaction with the given id
    })),

  setFilterType: (type) => // This function allows components to change our filter string (filterType)
    set(() => ({ // The set function allows us to update the state (This has no State since its not responsible to hold the old data )
      filterType: type // This will update the filterType to the new value
    }))
}));
