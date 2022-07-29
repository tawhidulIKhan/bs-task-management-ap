import { Route, Routes } from "react-router-dom";
import endpoints from './config/endpoints';
import GuestRoute from "./container/GuestRoute";
import PrivateRoute from "./container/PrivateRoute";
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Members from './pages/Members';
import TaskCreate from './pages/TaskCreate';
import Tasks from './pages/Tasks';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
        <Route path={endpoints.LOGIN} element={
          <GuestRoute>
            <Login />
          </GuestRoute>
        } />
        <Route path={endpoints.TASKS} element={
          <PrivateRoute>
            <Tasks />
          </PrivateRoute>
        } />
        <Route path={endpoints.TASKS_CREATE} element={
          <PrivateRoute>
            <TaskCreate />
          </PrivateRoute>
        } />
        <Route path={endpoints.MEMBERS} element={
          <PrivateRoute>
            <Members />
          </PrivateRoute>
        } />
      </Routes>
    </div>
  );
}

export default App;
