import Task from "../task/Task";
import "./Board.css";

const Board = ({
  boards,
  tasks,
  onCheckboxChange,
  selectedTasks,
  handleDragStart,
  handleDrop,
  handleDragOver,
}) => {
  return (
    <div
      className="board"
      onDrop={(e) => handleDrop(e, boards.id)}
      onDragOver={handleDragOver}
    >
      <div className="board-header">
        <h2>{boards.title}</h2>
      </div>
      <div className="task-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onCheckboxChange={onCheckboxChange}
            isChecked={selectedTasks.includes(task.id)}
            handleDragStart={handleDragStart}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
