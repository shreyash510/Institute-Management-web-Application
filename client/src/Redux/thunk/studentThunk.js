import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAxios } from "../../helper";

export const getAll = createAsyncThunk(
  "student/getAll",
  async (model, thunkAPi) => {
    try {
      let res = await getAxios().get("/student");
      return res;
    } catch (error) {
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
      await thunkAPi.dispatch(getAll())
      alert("Data Deleted succesfully!");
      return res.data;
    } catch (error) {
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
      await thunkAPi.dispatch(getAll());
      alert("data updated succesfully")
      return res.data;
    } catch (error) {
      return thunkAPi.rejectWithValue(error);
    }
  }
)