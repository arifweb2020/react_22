/**
 * Redux Slice/State for score card report.
 *
 * Author : Arif
 */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    status: null,
    isLoading: true,
    message: "",
    data: [],
};

/**
* Async Thunk for send OTP 
*/
export const userAsync = createAsyncThunk(
    "user/fetchUser",
    async (args) => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const res1 = await res.json()
            return res1
        }
        catch (err) {
            alert("some thing wend wrong")
        }

    }
);


export const ReduxSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(userAsync.pending, (state) => {
                state.data = null;
                state.isLoading = true;
                state.status = null;
            })
            .addCase(userAsync.fulfilled, (state, action) => {
                // merging new state with initialState to preserve the default values where no data received
                state.data = action.payload;
                state.isLoading = false;
                state.status = "SUCCESS";
            })
            .addCase(userAsync.rejected, (state, action) => {
                // action.error.message is available in rejected status only.
                //  console.error(
                //      "API ERROR : invoice login error" + action.error.message
                //  );
                state.message = action.error.message;
                state.data = null;
                state.isLoading = false;
                state.status = "REJECTED";
            })

    },
});

export default ReduxSlice.reducer;
