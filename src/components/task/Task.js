import "./Task.css";

const Task = ({ task, onCheckboxChange, isChecked, handleDragStart }) => {
  if (!task) return null;

  return (
    <div
      className="task"
      draggable
      onDragStart={(e) => handleDragStart(e, task.id)}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => onCheckboxChange(task.id)}
        className="task-checkbox"
        id={`checkbox-${task.id}`}
      />
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
      </div>
    </div>
  );
};

export default Task;
