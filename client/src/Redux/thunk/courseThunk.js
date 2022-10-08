import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAxios } from "../../helper";

export const getAllCourse = createAsyncThunk(
  "course/getAllcourse",
  async (model, thunkAPi) => {
    try {
      let res = await getAxios().get("/course");
      return res;
    } catch (error) {
      //console.log(error);
      return thunkAPi.rejectWithValue(error);
    }
  }
);

export const addCourse = createAsyncThunk(
  "course/addCourse",
  async (model, thunkAPi) => {
    try {
      let res = await getAxios().post("/course/add", model);
      await thunkAPi.dispatch(getAllCourse())
      return res;
    } catch (error) {
      // //console.log(error);
      return thunkAPi.rejectWithValue(error);
    }
  }
);

export const deleteCourse = createAsyncThunk(
  "course/delCourse",
  async (model, thunkAPi) => {
    try {
      let res = await getAxios().delete(
        `/course/${model}/delete`
      );
      thunkAPi.dispatch(getAllCourse())
      return res.data;
    } catch (error) {
      //console.log(error);
      return thunkAPi.rejectWithValue(error);
    }
  }
);

export const updateCourse = createAsyncThunk(
  "course/updateCourse",
  async (model, thunkAPi) => {
    try {
      let res = await getAxios().put(
        `/course/${model.courseId}/update`, model
      );
      thunkAPi.dispatch(getAllCourse())
      return res.data;
    } catch (error) {
      //console.log(error);
      return thunkAPi.rejectWithValue(error);
    }
  }
)