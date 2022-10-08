import { createSlice } from "@reduxjs/toolkit";

import {
    getAll,
    addStudent,
    deleteStudent,
    updateStudent
} from '../thunk/studentThunk';

const initialState = {
    studentData: [],
}

const studentSlice = createSlice({
    name: "StudentSlice",
    reducers: {},
    initialState,
    extraReducers: {
        // Get All Customers Data

        [getAll.pending]: (state, action) => {
            state.loading = true;
        },
        [getAll.fulfilled]: (state, action) => {
            state.loading = false;
            state.studentData = action.payload.data;
        },
        [getAll.rejected]: (state, action) => {
            state.loading = false;
        },

        // Add new Student


        [addStudent.pending]: (state, action) => {
            state.loading = true;
        },
        [addStudent.fulfilled]: (state, action) => {
            state.loading = false;
            state.studentResponse = action.payload.data;
        },
        [addStudent.rejected]: (state, action) => {
            state.loading = false;
            state.usernameError = action.payload.response.data;
        },

        // Delete Student record

        [deleteStudent.pending]: (state, action) => {
            state.loading = true;
        },
        [deleteStudent.fulfilled]: (state, action) => {
            state.loading = false;
            state.studentResponse = action.payload.data;
        },
        [deleteStudent.rejected]: (state, action) => {
            state.loading = false;
            state.usernameError = action.payload.response.data;
        },

        // update student record

        [updateStudent.pending]: (state, action) => {
            state.loading = true;
        },
        [updateStudent.fulfilled]: (state, action) => {
            state.loading = false;
            state.studentResponse = action.payload.data;
        },
        [updateStudent.rejected]: (state, action) => {
            state.loading = false;
            state.usernameError = action.payload.response.data;
        },

    },
});

export default studentSlice;
