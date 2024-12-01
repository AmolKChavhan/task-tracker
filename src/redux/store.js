import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './initialState';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;
