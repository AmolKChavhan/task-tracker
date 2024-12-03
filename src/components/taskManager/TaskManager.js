import { useState, useEffect } from "react";
import Button from "../button/Button";
import TaskForm from "../taskForm/TaskForm";
import Board from "../board/Board";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedTasks,
  updateTaskBoard,
  deleteTask,
} from "../../redux/initialState";
import "./TaskManager.css";
import { FaEdit, FaPlus, FaTrashAlt } from "react-icons/fa";

const TaskManager = () => {
  const { boards, tasks, selectedTasks } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    dispatch(setSelectedTasks([]));
  }, [dispatch]);

  const handleCheckboxChange = (taskId) => {
    if (selectedTasks.includes(taskId)) {
      dispatch(setSelectedTasks(selectedTasks.filter((id) => id !== taskId)));
    } else {
      dispatch(setSelectedTasks([...selectedTasks, taskId]));
    }
  };

  const handleDeleteTask = () => {
    selectedTasks.forEach((taskId) => {
      dispatch(deleteTask(taskId));
    });
    dispatch(setSelectedTasks([]));
  };

  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData("taskId", taskId);
  };

  const handleDrop = (e, boardId) => {
    const taskId = e.dataTransfer.getData("taskId");
    const task = tasks.find((task) => task.id === taskId);

    if (task && task.boardId !== boardId) {
      dispatch(updateTaskBoard({ taskId, newBoardId: boardId }));
    }
    e.preventDefault();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleModalOpen = () => {
    if (selectedTasks.length === 1) {
      setModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setModalOpen(false);
    dispatch(setSelectedTasks([]));
  };

  return (
    <div id="task-manager">
      <div className="task-actions">
        <Button
          onClick={() => setModalOpen(true)}
          type="add"
          disabled={selectedTasks.length > 0}
          icon={FaPlus}
        >
          Add Task
        </Button>
        <Button
          onClick={handleModalOpen}
          type="edit"
          disabled={selectedTasks.length !== 1}
          icon={FaEdit}
        >
          Edit Task
        </Button>
        <Button
          onClick={handleDeleteTask}
          type="delete"
          disabled={selectedTasks.length === 0}
          icon={FaTrashAlt}
        >
          Delete Task
        </Button>
      </div>

      <div className="boards-container">
        {boards.map((board) => (
          <Board
            key={board.id}
            boards={board}
            tasks={tasks.filter((task) => task.boardId === board.id)}
            onCheckboxChange={handleCheckboxChange}
            selectedTasks={selectedTasks}
            handleDragStart={handleDragStart}
            handleDrop={handleDrop}
            handleDragOver={handleDragOver}
          />
        ))}
      </div>

      {isModalOpen && (
        <TaskForm onClose={handleModalClose} taskId={selectedTasks[0]} />
      )}
    </div>
  );
};

export default TaskManager;
