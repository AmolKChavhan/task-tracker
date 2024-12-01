import React, { useState } from 'react';
import Task from './Task';
import TaskOperations from './TaskOperations';

const Board = ({ board, tasks, onDropTask }) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleDragOver = (e) => e.preventDefault();

  return (
    <div
      className="board"
      onDragOver={handleDragOver}
      onDrop={(e) => onDropTask(e, board.id)}
    >
      <h3>{board.title}</h3>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
      <button onClick={() => setIsAdding(!isAdding)}>+ Add Task</button>
      {isAdding && <TaskOperations setIsEditing={setIsAdding} />}
    </div>
  );
};

export default Board;
