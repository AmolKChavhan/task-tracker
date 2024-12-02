import Navbar from "./components/navbar/navbar";
import TaskManager from "./components/taskManager/TaskManager";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <TaskManager />
      </main>
    </div>
  );
};

export default App;
