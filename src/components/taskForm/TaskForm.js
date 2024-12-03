import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../../redux/initialState";
import { FaTimes } from "react-icons/fa";
import "./TaskForm.css";

const TaskForm = ({ onClose, taskId, setNotification }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const task = useMemo(() => {
    return tasks.find((t) => t.id === taskId) || {};
  }, [tasks, taskId]);

  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [deadline, setDeadline] = useState(task?.deadline || "");

  useEffect(() => {
    if (taskId) {
      setTitle(task.title || "");
      setDescription(task.description || "");
      setDeadline(task.deadline || "");
    }
  }, [taskId, task]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: taskId || Date.now().toString(),
      title,
      description,
      deadline,
      assignedTo: "",
      boardId: taskId ? task.boardId : "1",
    };

    if (taskId) {
      try {
        dispatch(editTask({ taskId, updatedTask: newTask }));
        setNotification({
          message: "Task updated successfully!",
          type: "success",
        });
      } catch (error) {
        setNotification({ message: "Failed to update task.", type: "error" });
      }
    } else {
      try {
        dispatch(addTask(newTask));
        setNotification({
          message: "Task added successfully!",
          type: "success",
        });
      } catch (error) {
        setNotification({ message: "Failed to add task.", type: "error" });
      }
    }

    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{taskId ? "Edit Task" : "Add Task"}</h3>
          <FaTimes onClick={onClose} className="close-icon" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              placeholder="Task Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Task Description">Task Description</label>
            <textarea
              id="Task Description"
              rows="4"
              placeholder="Task Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="buttons">
            <button type="submit">{taskId ? "Save" : "Add Task"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
