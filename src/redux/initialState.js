import { createSlice } from '@reduxjs/toolkit';

import { loadFromLocalStorage, saveToLocalStorage } from '../localStorageUtils';

const initialState = loadFromLocalStorage('projectData') || {
  boards: [
    { id: '1', title: 'To Do' },
    { id: '2', title: 'In Progress' },
    { id: '3', title: 'Done' },
  ],
  tasks: [
    { id: '101', title: 'Task 1', description: 'Description 1', deadline: '', assignedTo: '', boardId: '1' },
    { id: '102', title: 'Task 2', description: 'Description 2', deadline: '', assignedTo: '', boardId: '2' },
  ],
};

const tasksCreation = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      saveToLocalStorage('projectData', state);
    },
    editTask: (state, action) => {
      const { taskId, updatedTask } = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        state.tasks[taskIndex] = { ...state.tasks[taskIndex], ...updatedTask };
        saveToLocalStorage('projectData', state);
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      saveToLocalStorage('projectData', state);
    },
    moveTask: (state, action) => {
      const { taskId, destinationBoardId } = action.payload;
      const task = state.tasks.find((t) => t.id === taskId);
      if (task) {
        task.boardId = destinationBoardId;
        saveToLocalStorage('projectData', state);
      }
    },
  },
});

export const { addTask, editTask, deleteTask, moveTask } = tasksCreation.actions;
export default tasksCreation.reducer;
