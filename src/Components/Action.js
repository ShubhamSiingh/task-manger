export const addTask = (task) => {
    return {
      type: 'ADD_TASK',
      payload: task
    };
  };
  
  

  export const editTask = (index, updatedTask) => {
    return {
      type: 'EDIT_TASK',
      payload: {
        index,
        updatedTask
      }
    };
  };
  