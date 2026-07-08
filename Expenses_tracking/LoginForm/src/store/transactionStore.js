import { create } from 'zustand';


export const useTransactionStore = create((set) => ({
  transactions: [],

  addTransaction: (transaction) =>
    set((state) => ({
      transactions: [...state.transactions, transaction]
    }))
}));
