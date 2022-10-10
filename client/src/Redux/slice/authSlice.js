import { createSlice } from "@reduxjs/toolkit";

import { authLogin } from '../thunk/authThunk';

const initialState = {
    authData: [],
}

const authSlice = createSlice({
    name: "authLogin",
    reducers: {},
    initialState,
    extraReducers: {
        // Get All Course Data

        [authLogin.pending]: (state, action) => {
            state.loading = true;
        },
        [authLogin.fulfilled]: (state, action) => {
            state.loading = false;
            state.authData = action.payload;
            localStorage.setItem("token", action.payload.token)
        },
        [authLogin.rejected]: (state, action) => {
            state.loading = false;
        },
    }
})

export default authSlice;