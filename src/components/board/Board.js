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
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
}) => {
  return (
    <div
      className="board"
      onDrop={(e) => handleDrop(e, boards.id)}
      onDragOver={handleDragOver}
      onTouchEnd={() => handleTouchEnd(boards.id)}
    >
      <div className="board-header">
        <h2>{boards.title}</h2>
      </div>
      <div className="task-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            boards={boards}
            onCheckboxChange={onCheckboxChange}
            isChecked={selectedTasks.includes(task.id)}
            handleDragStart={handleDragStart}
            handleTouchStart={() => handleTouchStart(task.id)}
            handleTouchMove={handleTouchMove}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
