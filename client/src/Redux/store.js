import { configureStore } from '@reduxjs/toolkit';
import studentSlice from './slice/student';
import courseSlice from './slice/courseSlice';

const store = configureStore({
    reducer: {
        student: studentSlice.reducer,
        course : courseSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  // composeEnhancers: composeEnhancers(),
});


export default store;