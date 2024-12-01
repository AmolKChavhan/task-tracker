import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask, deleteTask } from '../redux/initialState';

const TaskOperations = ({ task, isEditing, setIsEditing }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');
  const [deadline, setDeadline] = useState(task?.deadline || '');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      dispatch(
        editTask({
          taskId: task.id,
          updatedTask: { title, description, deadline },
        })
      );
      setIsEditing(false);
    } else {
      const newTask = {
        id: Date.now().toString(),
        title,
        description,
        deadline,
        assignedTo: '',
        boardId: '1',
      };
      dispatch(addTask(newTask));
    }

    setTitle('');
    setDescription('');
    setDeadline('');
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div>
      {isEditing ? <h3>Edit Task</h3> : <h3>Add Task</h3>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <button type="submit">{isEditing ? 'Save' : 'Add Task'}</button>
      </form>
      {isEditing && <button onClick={handleDelete}>Delete Task</button>}
    </div>
  );
};

export default TaskOperations;
