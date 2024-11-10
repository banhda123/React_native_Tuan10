import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    data: [],
  },
  reducers: {
    setTasks: (state, action) => {
      state.data = action.payload;
    },
    deleteTask: (state, action) => {
      state.data = state.data.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      const index = state.data.findIndex((task) => task.id === id);
      if (index !== -1) {
        state.data[index] = updatedTask;
      }
    },
  },
});

export const { setTasks, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
