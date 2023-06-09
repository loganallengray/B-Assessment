import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import budgetsReducer from './models/budgetsSlice';
import collateralsReducer from './models/collateralsSlice';
import loansReducer from './models/loansSlice';

export const store = configureStore({
  reducer: {
    budgets: budgetsReducer,
    collaterals: collateralsReducer,
    loans: loansReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
