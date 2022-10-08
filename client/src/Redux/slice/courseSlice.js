import { createSlice } from "@reduxjs/toolkit";

import {
    getAllCourse,
    addCourse,
    deleteCourse,
    updateCourse
} from '../thunk/courseThunk';

const initialState = {
    courseData: [],
}

const courseSlice = createSlice({
    name: "CourseSlice",
    reducers: {},
    initialState,
    extraReducers: {
        // Get All Course Data

        [getAllCourse.pending]: (state, action) => {
            state.loading = true;
        },
        [getAllCourse.fulfilled]: (state, action) => {
            state.loading = false;
            state.courseData = action.payload.data;
        },
        [getAllCourse.rejected]: (state, action) => {
            state.loading = false;
        },

        // Add new Course

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
