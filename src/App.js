import React, { useState } from 'react';
// import {createWithAllDetails} from 'firebase/auth'
// import { auth } from './firebase-config';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './Components/reducer';
import TaskForm from './TaskForm/TaskManageForm';
import TaskList from './Components/TaskList';

const store = configureStore({
  reducer: reducer
});

function App(){
  // const [Title , setTitle] =useState("")
  // const [Description , setDescription] =useState("")
  // const [Priority , setPriority] = useState("");
  // const [DueDate , setDueDate] = useState("");

  // const Titles = async () => {
  //   try{
  //  const user =  await createWithAllDetails(auth , Title)
  //  console.log(user);
  //   }catch (error) {
  //     console.log(error.message)
  //   }
  // }

  // const Descriptions = async () => {}
  
  // const Prioritys = async () => {}

  // const DueDates = async () => {}
  

  return(
    <Provider store={store}>
    <TaskForm />
    <TaskList />
  </Provider>
  )
}

export default App;
