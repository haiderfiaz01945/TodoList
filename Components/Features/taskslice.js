// Features/taskslice.js
import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload); // Add the new task to the tasks array
    },
  },
});

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;
