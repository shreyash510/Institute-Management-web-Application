import { configureStore } from '@reduxjs/toolkit';
import studentSlice from './slice/student';
import courseSlice from './slice/courseSlice';
import staffSlice from './slice/staffSlice'
import authSlice from './slice/authSlice';

const store = configureStore({
    reducer: {
        student: studentSlice.reducer,
        course : courseSlice.reducer,
        staff : staffSlice.reducer,
        auth : authSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  // composeEnhancers: composeEnhancers(),
});


export default store;