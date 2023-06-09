import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';
import { ILoan } from './interfaces';

export interface LoansState {
    value: ILoan[];
    status: 'idle' | 'loading' | 'failed';
}

const initialState: LoansState = {
    value: [
        { id: 1, paidOff: false, amount: 2000, budgetId: 1, collateralId: 2 },
        { id: 2, paidOff: true, amount: 150, budgetId: 2, collateralId: 3 },
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

export const loansSlice = createSlice({
    name: 'loan',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {}
});

// export const { increment, decrement, incrementByAmount } = loansSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.loans.value)`
export const selectLoans = (state: RootState) => state.loans.value;

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

export default loansSlice.reducer;
