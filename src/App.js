import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './Components/reducer';
import TaskForm from './TaskForm/TaskManageForm';
import TaskList from './Components/TaskList';

const store = configureStore({
  reducer: reducer
});

function App(){
  return(
    <Provider store={store}>
    <TaskForm />
    <TaskList />
  </Provider>
  )
}

export default App;
