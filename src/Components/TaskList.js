import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, toggleCompletion, editTask } from './reducer';
import TaskForm from '../TaskForm/TaskManageForm';

function TaskList() {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const [isEdit , setIsEdit] = useState(false)
    

  const handleDelete = (index) => {
    dispatch(deleteTask(index));
  };

  const handleToggleCompletion = (index) => {
    dispatch(toggleCompletion(index));
  };

  const [taskToEdit, setTaskToEdit] = useState();

  const handleUpdate = (task, index) => {
    console.log(task,"task");
    setTaskToEdit({ ...task, index }); 
    setIsEdit(true)
  };

  
  const handleUpdateSubmit = (updatedTask) => {
    console.log("Submitting updated task:", updatedTask);
    dispatch(editTask(updatedTask.index, updatedTask));
  };
  
  return (
    <div>
    <h2>Tasks</h2>
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className="task-item">
          <p className="task-title"><strong>{task?.title}</strong></p>
          <p className="task-description">{task?.description}</p>
          <p className="task-priority">Priority: {task?.priority}</p>
          <p className="task-due-date">Due Date: {task?.dueDate}</p>
          <p className="task-completion">Completed: {task?.completionStatus ? 'Yes' : 'No'}</p>
          <div className="task-buttons">
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handleToggleCompletion(index)}>
              {task?.completionStatus ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
            <button onClick={() => handleUpdate(task, index)}>Edit</button>
          </div>
        </li>
      ))}
    </ul>
    {isEdit && <TaskForm taskToEdit={taskToEdit} onSubmit={handleUpdateSubmit} />}
  </div>
  );
}

export default TaskList;
