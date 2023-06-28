import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import transactionsService from "@/services/transactionsService";

export const getTransaction = createAsyncThunk(
  "transactions/getTransaction",
  async userId => {
    const response = await transactionsService.getTransaction(userId);
    return response;
  }
);

export const createTransaction = createAsyncThunk(
  "transactions/createTransaction",
  async transaction => {
    const response = await transactionsService.createTransaction(transaction);
    return response;
  }
);

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: {
    transactions: [],
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTransaction.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getTransaction.fulfilled, (state, action) => {
      state.loading = false;
      state.transactions = action.payload;
    });
    builder.addCase(getTransaction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(createTransaction.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createTransaction.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(createTransaction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default transactionsSlice;
