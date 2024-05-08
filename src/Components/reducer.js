import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: []
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = action.payload;
      state.tasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    deleteTask: (state, action) => {
      const index = action.payload;
      state.tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    toggleCompletion: (state, action) => {
      const index = action.payload;
      state.tasks[index].completionStatus = !state.tasks[index].completionStatus;
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    updateTask: (state, action) => {
      const { index, updatedTask } = action.payload;
      state.tasks[index] = updatedTask;
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    loadTasks: (state, action) => {
      state.tasks = action.payload;
    }
  }
});

export const { addTask, deleteTask, toggleCompletion, updateTask, loadTasks } = taskSlice.actions;
export default taskSlice.reducer;
