import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAxios } from "../../helper";

export const getAll = createAsyncThunk(
  "student/getAll",
  async (model, thunkAPi) => {
    try {
      let res = await getAxios().get("/student");
      return res;
    } catch (error) {
      //console.log(error);
      return thunkAPi.rejectWithValue(error);
    }
  }
);

export const addStudent = createAsyncThunk(
  "student/addStudent",
  async (model, thunkAPi) => {
    try {
      let res = await getAxios().post("/student/signin", model);
      await thunkAPi.dispatch(getAll())
      return res;
    } catch (error) {
      // //console.log(error);
      return thunkAPi.rejectWithValue(error);
    }
  }
);

export const deleteStudent = createAsyncThunk(
  "student/delStudent",
  async (model, thunkAPi) => {
    try {
      let res = await getAxios().delete(
        `/student/${model}/delete`
      );
      return res.data;
    } catch (error) {
      //console.log(error);
      return thunkAPi.rejectWithValue(error);
    }
  }
);

export const updateStudent = createAsyncThunk(
  "student/updateStudent",
  async (model, thunkAPi) => {
    try {
      let res = await getAxios().put(
        `/student/${model.studentId}/update`, model
      );
      return res.data;
    } catch (error) {
      //console.log(error);
      return thunkAPi.rejectWithValue(error);
    }
  }
)