import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import TaskManager from "./components/taskManager/TaskManager";
import About from "./components/about/About";
import ContactUs from "./components/contact/contactus";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <TaskManager />
              </main>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
