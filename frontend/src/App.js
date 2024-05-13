import "./App.css";
import Calendar from "./pages/Calendar";
import Dashboard from "./pages/Dashboard";
import Discussions from "./pages/Discussions";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Signup from "./pages/Signup";
import TaskList from "./pages/TaskList";
import "./styles/tailwind.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/calendar" element={<Calendar />} />
        <Route exact path="/tasks" element={<TaskList />} />
        <Route exact path="/discussion" element={<Discussions/>} />
        {/* <Route exact path="/project" element={<Projects />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
