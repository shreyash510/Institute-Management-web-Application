import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAxios } from '../../helper';

export const authLogin = createAsyncThunk(
    "auth/login",
    async (model, thunkAPi) => {
        try {
            let res = await getAxios().post('/auth/login', model);
            return res.data
        } catch (error) {
            return thunkAPi.rejectWithValue(error);
        }
    }
)