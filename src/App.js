import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import Board from './components/Board';
import { moveTask } from './redux/initialState';

const App = () => {
  const { boards, tasks } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDropTask = (e, boardId) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('taskId');
    dispatch(moveTask({ taskId, destinationBoardId: boardId }));
  };

  return (
    <div className="app">
      {boards.map((board) => (
        <Board
          key={board.id}
          board={board}
          tasks={tasks.filter((task) => task.boardId === board.id)}
          onDropTask={handleDropTask}
        />
      ))}
    </div>
  );
};

export default App;
