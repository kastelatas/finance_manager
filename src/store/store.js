import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice";
import balancesSlice from "./BalancesSlice";
import billsSlice from "./BillsSlice";
import goalsSlice from "./GoalsSlice";
import settingsSlice from "./SettingsSlice";
import transactionsSlice from "./TransactionSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    balances: balancesSlice.reducer,
    bills: billsSlice.reducer,
    goals: goalsSlice.reducer,
    settings: settingsSlice.reducer,
    transactions: transactionsSlice.reducer,
  },
});

export default store;
