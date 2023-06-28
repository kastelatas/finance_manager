import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import balancesSerive from "@/services/balancesSerive";

export const getBalances = createAsyncThunk(
  "balances/getBalances",
  async userId => {
    const response = await balancesSerive.getBalances(userId);
    return response;
  }
);

export const getBalance = createAsyncThunk(
  "balances/getBalance",
  async ({ userId, balanceId }) => {
    const response = await balancesSerive.getBalance(userId, balanceId);
    return response;
  }
);

export const createBalance = createAsyncThunk(
  "balances/createBalance",
  async balance => {
    const response = await balancesSerive.createBalance(balance);
    return response;
  }
);

export const updateBalance = createAsyncThunk(
  "balances/updateBalance",
  async balance => {
    const response = await balancesSerive.updateBalance(balance);
    return response;
  }
);

export const removeBalance = createAsyncThunk(
  "balances/removeBalance",
  async id => {
    const response = await balancesSerive.removeBalance(id);
    return response;
  }
);

const balancesSlice = createSlice({
  name: "balances",
  initialState: {
    balances: [],
    balance: {},
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getBalances.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getBalances.fulfilled, (state, action) => {
      state.loading = false;
      state.balances = action.payload;
    });
    builder.addCase(getBalances.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getBalance.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getBalance.fulfilled, (state, action) => {
      state.loading = false;
      state.balance = action.payload[0];
    });
    builder.addCase(getBalance.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(createBalance.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createBalance.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(createBalance.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(updateBalance.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateBalance.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(updateBalance.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(removeBalance.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(removeBalance.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(removeBalance.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default balancesSlice;
