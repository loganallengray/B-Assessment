import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';
import { ICollateral } from './interfaces';

export interface CollateralsState {
    value: ICollateral[];
    status: 'idle' | 'loading' | 'failed';
}

const initialState: CollateralsState = {
    value: [
        { id: 1, name: "Car Keys", worth: 200, description: "Belongs to a Ferrari." },
        { id: 2, name: "Left Shoe", worth: 60, description: "Kinda stinks." },
        { id: 1, name: "Phone", worth: 500, description: "Cracked screen, but still works." },
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

export const collateralsSlice = createSlice({
    name: 'collateral',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {}
});

// export const { increment, decrement, incrementByAmount } = collateralsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.collaterals.value)`
export const selectCollaterals = (state: RootState) => state.collaterals.value;

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

export default collateralsSlice.reducer;
