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
    editTask: (state, action) => {
      const { index, updatedTask } = action.payload;
      console.log(action.payload,"updateTask");
      state.tasks[index] = updatedTask;
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    loadTasks: (state, action) => {
      state.tasks = action.payload;
    }
  }
});



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
      case 'EDIT_TASK':
        const { index, updatedTask } = action.payload;
        const updatedTasks = state.tasks.map((task, idx) => {
          if (idx === index) {
            return updatedTask;
          }
          return task;
        });
        return {
          ...state,
          tasks: updatedTasks
        };
  
    default:
      return state;
  }
};



export const { addTask, deleteTask, toggleCompletion, editTask, loadTasks } = taskSlice.actions;
export default taskSlice.reducer;
