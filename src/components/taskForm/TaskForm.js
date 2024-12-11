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
  const [update, setUpdate] = useState(task?.update || "");

  useEffect(() => {
    if (taskId) {
      setTitle(task.title || "");
      setDescription(task.description || "");
      setDeadline(task.deadline || "");
      setUpdate(task.update || "");
    }
  }, [taskId, task]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: taskId || Date.now().toString(),
      title,
      description,
      deadline,
      update,
      assignedTo: "",
      boardId: taskId ? task.boardId : "1",
    };

    try {
      if (taskId) {
        dispatch(editTask({ taskId, updatedTask: newTask }));
        setNotification({
          message: "Task updated successfully!",
          type: "success",
        });
      } else {
        dispatch(addTask(newTask));
        setNotification({
          message: "Task added successfully!",
          type: "success",
        });
      }
    } catch (error) {
      setNotification({
        message: taskId ? "Failed to update task." : "Failed to add task.",
        type: "error",
      });
    }

    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{taskId ? "Edit Task" : "Add Task"}</h3>
          <FaTimes onClick={onClose} className="close-icon" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Task Title</label>
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
            <label htmlFor="deadline">Date</label>
            <input
              type="date"
              id="deadline"
              placeholder="Select Date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Task Description</label>
            <textarea
              id="description"
              rows="4"
              placeholder="Task Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="update">Task Update Info</label>
            <textarea
              id="update"
              rows="2"
              placeholder="Task Update Info"
              value={update}
              onChange={(e) => setUpdate(e.target.value)}
            />
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
