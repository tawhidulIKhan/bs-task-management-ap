import { Route, Routes } from "react-router-dom";
import endpoints from './config/endpoints';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Members from './pages/Members';
import TaskCreate from './pages/TaskCreate';
import Tasks from './pages/Tasks';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path={endpoints.LOGIN} element={<Login />} />
        <Route path={endpoints.TASKS} element={<Tasks />} />
        <Route path={endpoints.TASKS_CREATE} element={<TaskCreate />} />
        <Route path={endpoints.MEMBERS} element={<Members />} />
      </Routes>
    </div>
  );
}

export default App;
