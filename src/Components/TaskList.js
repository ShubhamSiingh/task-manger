import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, toggleCompletion, updateTask } from './reducer';
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

  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleUpdate = (task, index) => {
    setTaskToEdit({ ...task, index }); // Set taskToEdit along with its index
    setIsEdit(true)
  };

  const handleUpdateSubmit = (updatedTask) => {
    dispatch(updateTask({ index: updatedTask.index, updatedTask }));
    setTaskToEdit(null); // Reset taskToEdit after update
  };

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <strong>{task.title}</strong> - {task.description}, Priority: {task.priority}, Due Date: {task.dueDate}, Completed: {task.completionStatus ? 'Yes' : 'No'}
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handleToggleCompletion(index)}>
              {task.completionStatus ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
            <button onClick={() => handleUpdate(task, index)}>Update</button> {/* Update button */}
          </li>
        ))}
      </ul>
      {isEdit&& <TaskForm taskToEdit={taskToEdit} onSubmit={handleUpdateSubmit} />}
     
    </div>
  );
}

export default TaskList;
