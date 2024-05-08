import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTask ,updateTask } from '../Components/reducer';

function TaskManageForm({ taskToEdit }) {
    const [title, setTitle] = useState(taskToEdit ? taskToEdit.title : '');
    const [description, setDescription] = useState(taskToEdit ? taskToEdit.description : '');
    const [priority, setPriority] = useState(taskToEdit ? taskToEdit.priority : '');
    const [dueDate, setDueDate] = useState(taskToEdit ? taskToEdit.dueDate : '');
    const [completionStatus, setCompletionStatus] = useState(taskToEdit ? taskToEdit.completionStatus : false);
  
    const dispatch = useDispatch();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (taskToEdit) {
        dispatch(updateTask({ ...taskToEdit, title, description, priority, dueDate, completionStatus }));
      } else {
        dispatch(addTask({ title, description, priority, dueDate, completionStatus }));
      }
      setTitle('');
      setDescription('');
      setPriority('');
      setDueDate('');
      setCompletionStatus(false);
    };
  
    useEffect(() => {
      if (taskToEdit) {
        setTitle(taskToEdit.title);
        setDescription(taskToEdit.description);
        setPriority(taskToEdit.priority);
        setDueDate(taskToEdit.dueDate);
        setCompletionStatus(taskToEdit.completionStatus);
      }
    }, [taskToEdit]);
  
    return (
      <div>
        <h2>{taskToEdit ? 'Edit Task' : 'Add Task'}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Priority:
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              required
            >
              <option value="">Select Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </label>
          <br />
          <label>
            Due Date:
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Completion Status:
            <input
              type="checkbox"
              checked={completionStatus}
              onChange={(e) => setCompletionStatus(e.target.checked)}
            />
          </label>
          <br />
          <button type="submit">{taskToEdit ? 'Update' : 'Submit'}</button>
        </form>
      </div>
    );
  }
  
  export default TaskManageForm;