import './App.css';
import HeaderTopbar from './components/HeaderTopbar';
import TaskList from './components/TaskList';
import CreateTask from './pages/CreateTask';
import About from './pages/About';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <HeaderTopbar />

      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/create" element={<CreateTask />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
/*
1. start End date
2. Login and SignUp
3. Ssoid and Graph
4. Payment Domain add
5. Refresh Token

*/