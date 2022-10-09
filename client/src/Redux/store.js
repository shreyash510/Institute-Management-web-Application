import { configureStore } from '@reduxjs/toolkit';
import studentSlice from './slice/student';
import courseSlice from './slice/courseSlice';
import staffSlice from './slice/staffSlice'

const store = configureStore({
    reducer: {
        student: studentSlice.reducer,
        course : courseSlice.reducer,
        staff : staffSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  // composeEnhancers: composeEnhancers(),
});


export default store;