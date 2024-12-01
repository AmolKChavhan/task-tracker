import React from 'react';

const Task = ({ task }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('taskId', task.id);
  };

  return (
    <div className="task" draggable onDragStart={handleDragStart}>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
    </div>
  );
};

export default Task;
