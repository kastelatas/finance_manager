import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import billsService from "@/services/billsService";

export const getBills = createAsyncThunk("bills/getBills", async userId => {
  const response = await billsService.getBills(userId);
  return response;
});

export const createBills = createAsyncThunk("bills/createBills", async bill => {
  const response = await billsService.createBill(bill);
  return response;
});

const billsSlice = createSlice({
  name: "bills",
  initialState: {
    bills: [],
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getBills.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getBills.fulfilled, (state, action) => {
      state.loading = false;
      state.bills = action.payload;
    });
    builder.addCase(getBills.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(createBills.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createBills.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(createBills.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default billsSlice;
