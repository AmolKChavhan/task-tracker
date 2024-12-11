import React, { memo } from "react";
import "./Task.css";

const Task = ({
  boards,
  task,
  onCheckboxChange,
  isChecked,
  handleDragStart,
  handleTouchStart,
  handleTouchMove,
}) => {
  if (!task || !boards) return null;

  const { title } = boards;

  return (
    <div
      className="task"
      draggable
      onDragStart={(e) => handleDragStart(e, task.id)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {title !== "Done" && (
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => onCheckboxChange(task.id)}
          className="task-checkbox"
          id={`checkbox-${task.id}`}
        />
      )}
      <label htmlFor={`checkbox-${task.id}`} className="checkbox-label" />
      <div className="task-content">
        <h4>{task.title}</h4>
        <h3>
          <span className="deadline-label">Deadline:</span> {task.deadline}
        </h3>
        <span className="desc-label">
          Description:
          <p>{task.description}</p>
        </span>
        {title === "In Progress" && (
          <span className="update-label">
            Task Update Info:
            <p>{task.update}</p>
          </span>
        )}
      </div>
    </div>
  );
};

export default memo(Task);
