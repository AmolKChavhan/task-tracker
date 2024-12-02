import { createSlice } from "@reduxjs/toolkit";
import { loadFromLocalStorage, saveToLocalStorage } from "../localStorageUtils";

const initialState = loadFromLocalStorage("projectData") || {
  boards: [
    { id: "1", title: "To Do" },
    { id: "2", title: "In Progress" },
    { id: "3", title: "Done" },
  ],
  tasks: [],
  selectedTasks: [],
};

const tasksCreation = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      saveToLocalStorage("projectData", state);
    },
    editTask: (state, action) => {
      const { taskId, updatedTask } = action.payload;
      const index = state.tasks.findIndex((task) => task.id === taskId);
      if (index !== -1) {
        state.tasks[index] = updatedTask;
        state.tasks[index].completed = false;
        saveToLocalStorage("projectData", state);
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      saveToLocalStorage("projectData", state);
    },
    updateTaskBoard: (state, action) => {
      const { taskId, newBoardId } = action.payload;
      const task = state.tasks.find((task) => task.id === taskId);
      if (task && task.boardId !== newBoardId) {
        task.boardId = newBoardId;
        saveToLocalStorage("projectData", state);
      }
    },

    setSelectedTasks: (state, action) => {
      state.selectedTasks = action.payload;
    },
  },
});

export const {
  addTask,
  editTask,
  deleteTask,
  updateTaskBoard,
  setSelectedTasks,
} = tasksCreation.actions;

export default tasksCreation.reducer;
