import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';
import { IBudget } from './interfaces';

export interface BudgetsState {
    value: IBudget[];
    status: 'idle' | 'loading' | 'failed';
}

const initialState: BudgetsState = {
    value: [
        { id: 1, name: "Forestry Budget", limit: 1000, currentAmount: 100 },
        { id: 2, name: "Transportation Budget", limit: 600, currentAmount: 750 },
        { id: 3, name: "Lunch Budget", limit: 250, currentAmount: 15 },
    ],
    status: 'idle',
};

// export const incrementAsync = createAsyncThunk(
//     'counter/fetchCount',
//     async (amount: number) => {
//         const response = await fetchCount(amount);
//         // The value we return becomes the `fulfilled` action payload
//         return response.data;
//     }
// );

export const budgetsSlice = createSlice({
    name: 'budget',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {}
});

// export const { increment, decrement, incrementByAmount } = budgetsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.budget.value)`
export const selectBudgets = (state: RootState) => state.budgets.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd =
//     (amount: number): AppThunk =>
//         (dispatch, getState) => {
//             const currentValue = selectCount(getState());
//             if (currentValue % 2 === 1) {
//                 dispatch(incrementByAmount(amount));
//             }
//         };

export default budgetsSlice.reducer;
