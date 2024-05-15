import "./App.css";
import AddDiscussion from "./pages/AddDiscussion";
import AddProject from "./pages/AddProject";
// import Calendar from "./pages/Calendar";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import Discussions from "./pages/Discussions";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Projects from "./pages/Projects";
// import Settings from "./pages/Settings";
import Signup from "./pages/Signup";
// import TaskList from "./pages/TaskList";
import "./styles/tailwind.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import WhiteBoards from "./pages/WhiteBoards";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/dashboard/profile" element={<Profile />} />
        {/* <Route exact path="/dashboard/settings" element={<Settings />} />
        <Route exact path="/dashboard/calendar" element={<Calendar />} />
        <Route exact path="/dashboard/tasks" element={<TaskList />} /> */}
        <Route exact path="/dashboard/discussion" element={<Discussions />} />
        <Route exact path="/dashboard/whiteboards" element={<WhiteBoards />} />
        <Route exact path="/dashboard/chat" element={<Chat />} />
        <Route
          exact
          path="/dashboard/adddiscussion"
          element={<AddDiscussion />}
        />
        <Route exact path="/dashboard/projects" element={<Projects />} />
        <Route exact path="/dashboard/addproject" element={<AddProject />} />
        {/* <Route exact path="/project" element={<Projects />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
