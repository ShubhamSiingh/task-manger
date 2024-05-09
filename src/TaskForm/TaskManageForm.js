import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTask ,editTask } from '../Components/reducer';
import './TaskManageForm.css';


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
        dispatch(editTask({ ...taskToEdit, title, description, priority, dueDate, completionStatus }));
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
      <div  className="form-container"> {/* Apply the CSS class */}
         <h2 className="form-title">{taskToEdit ? 'Edit Task' : 'Add Task'}</h2>
        <form onSubmit={handleSubmit} className="form"> 
          <label className="form-label"> 
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-input"
              required
            />
          </label>
          <br />
          <label className="form-label"> 
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-input" 
              required
            />
          </label>
          <br />
          <label className="form-label"> 
            Priority:
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="form-input"
              required
            >
              <option value="">Select Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </label>
          <br />
          <label className="form-label"> 
            Due Date:
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="form-input" 
              required
            />
          </label>
          <br />
          <button type="submit" className="submit-button">{taskToEdit ? 'Update' : 'Submit'}</button>
        </form>
      </div>
    );
  }
  
  export default TaskManageForm;