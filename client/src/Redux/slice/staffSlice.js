import { createSlice } from '@reduxjs/toolkit';
import { getAllStaff, staffSignIn, staffDelete, staffUpdate } from '../thunk/staffThunk';

const initialState = {
    staffData: [],
    staffResponce : []

}

const getStaffSlice = createSlice({
    name: 'staffSlice',
    reducers: {},
    initialState,
    extraReducers: {
        // Get All Staff Data

        [getAllStaff.pending]: (state, action) => {
            state.loading = true;
        },
        [getAllStaff.fulfilled]: (state, action) => {
            state.loading = false;
            state.staffData = action.payload;
        },
        [getAllStaff.rejected]: (state, action) => {
            state.loading = false;
        },

        //signIn new Staff Data

        [staffSignIn.pending] : (state, action) =>{
            state.loading = true;
        },
        [staffSignIn.fulfilled]:(state, action)=>{
            state.loading = false;
            state.staffResponce = action.payload;
        },
        [staffSignIn.rejected]: (state, action)=>{
            state.loading = false;
        },

        // delete staff info

        [staffDelete.pending] : (state, action) =>{
            state.loading = true;
        },
        [staffDelete.fulfilled]:(state, action)=>{
            state.loading = false;
            state.staffResponce = action.payload;
        },
        [staffDelete.rejected]: (state, action)=>{
            state.loading = false;
        },

        
        // Update staff info

        [staffUpdate.pending] : (state, action) =>{
            state.loading = true;
        },
        [staffUpdate.fulfilled]:(state, action)=>{
            state.loading = false;
            state.staffResponce = action.payload;
        },
        [staffUpdate.rejected]: (state, action)=>{
            state.loading = false;
        }
    }
})

export default getStaffSlice;