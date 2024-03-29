// slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Transaction {
  type: string;
  description: string;
  amount: number;
}

interface TransactionState {
  transactions: Transaction[];
  balance: number;
}

const initialState: TransactionState = {
  transactions: [],
  balance: 0
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction(state, action: PayloadAction<Transaction>) {
      const { type, description, amount } = action.payload;
      state.transactions.push({ type, description, amount });
      state.balance += type === 'income' ? amount : -amount;
    }
  }
});

export const { addTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
