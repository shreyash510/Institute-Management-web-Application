import { configureStore } from '@reduxjs/toolkit';
import studentSlice from './slice/student';

const store = configureStore({
    reducer: {
        student: studentSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  // composeEnhancers: composeEnhancers(),
});


export default store;