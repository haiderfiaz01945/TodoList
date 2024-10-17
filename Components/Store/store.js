import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../Features/taskslice'; // We will create this in the next step



const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;
