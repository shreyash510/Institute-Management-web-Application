import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAxios } from '../../helper';

export const getAllStaff = createAsyncThunk(
  'staff/getStaffList',
  async (model, thunkAPi) => {
    try {
      const response = await getAxios().get('/staff');
      return response.data
    } catch (error) {
      return thunkAPi.rejectWithValue(error);
    }
  }
);

export const staffSignIn = createAsyncThunk(
  'staff/signInStaff',
  async (model, thunkAPi) => {
    try {
      const response = await getAxios().post('/staff/signin', model);
      await thunkAPi.dispatch(getAllStaff())
      return response
    } catch (error) {
      return thunkAPi.rejectWithValue(error)
    }
  }
)

export const staffDelete = createAsyncThunk(
  'staff/delStaff',
  async (model, thunkAPi)=>{
    try{
      const response = await getAxios().delete(`/staff/${model}/delete`);
      await thunkAPi.dispatch(getAllStaff());
      return response;
    }catch(error){
      return thunkAPi.rejectWithValue(error)
    }
  }
)

export const staffUpdate = createAsyncThunk(
  'staff/updateStaff',
  async (model, thunkAPi)=>{
    try{
      const response = await getAxios().put(`/staff/${model.courseId}/update`,model);
      await thunkAPi.dispatch(getAllStaff());
      return response;
    }catch(error){
      return thunkAPi.rejectWithValue(error)
    }
  }
)