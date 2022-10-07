import { createSlice } from "@reduxjs/toolkit";

import {
    getAll,
    addCourse,
    deleteCourse,
    updateCourse
} from '../thunk/studentThunk';

const initialState = {
    courseData: [],
    courseResponse: []
}

const courseSlice = createSlice({
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


        [addCourse.pending]: (state, action) => {
            state.loading = true;
        },
        [addCourse.fulfilled]: (state, action) => {
            state.loading = false;
            state.courseResponse = action.payload.data;
        },
        [addCourse.rejected]: (state, action) => {
            state.loading = false;
            state.usernameError = action.payload.response.data;
        },

        // Delete Course record

        [deleteCourse.pending]: (state, action) => {
            state.loading = true;
        },
        [deleteCourse.fulfilled]: (state, action) => {
            state.loading = false;
            state.courseResponse = action.payload.data;
        },
        [deleteCourse.rejected]: (state, action) => {
            state.loading = false;
            state.usernameError = action.payload.response.data;
        },

        // update student record

        [updateCourse.pending]: (state, action) => {
            state.loading = true;
        },
        [updateCourse.fulfilled]: (state, action) => {
            state.loading = false;
            state.courseResponse = action.payload.data;
        },
        [updateCourse.rejected]: (state, action) => {
            state.loading = false;
            state.usernameError = action.payload.response.data;
        },

    },
});

export default courseSlice;
