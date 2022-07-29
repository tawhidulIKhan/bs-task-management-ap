import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import endpoints from './config/endpoints';
import GuestRoute from "./container/GuestRoute";
import PrivateRoute from "./container/PrivateRoute";
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Members from './pages/Members';
import TaskCreate from './pages/TaskCreate';
import TaskDetails from "./pages/TaskDetails";
import Tasks from './pages/Tasks';
import 'react-toastify/dist/ReactToastify.css';
import MemberCreate from "./pages/MemberCreate";
import MemberDetails from "./pages/MemberDetails";

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
        <Route path={endpoints.TASKS_DETAILS} element={
          <PrivateRoute>
            <TaskDetails />
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
         <Route path={endpoints.MEMBERS_DETAILS} element={
          <PrivateRoute>
            <MemberDetails />
          </PrivateRoute>
        } />
        <Route path={endpoints.MEMBERS_CREATE} element={
          <PrivateRoute>
            <MemberCreate />
          </PrivateRoute>
        } />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
