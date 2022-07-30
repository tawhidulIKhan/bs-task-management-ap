import endpoints from "./config/endpoints";
import GuestRoute from "./container/GuestRoute";
import PrivateRoute from "./container/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import MemberCreate from "./pages/MemberCreate";
import MemberDetails from "./pages/MemberDetails";
import Members from "./pages/Members";
import TaskCreate from "./pages/TaskCreate";
import TaskDetails from "./pages/TaskDetails";
import Tasks from "./pages/Tasks";

const routes = [
    {
        path: endpoints.DASHBOARD,
        element:<PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    },
    {
        path: endpoints.LOGIN,
        element:<GuestRoute>
        <Login />
      </GuestRoute>
    },
    {
        path: endpoints.TASKS,
        element:<PrivateRoute>
        <Tasks />
      </PrivateRoute>
    },
    {
        path: endpoints.TASKS_DETAILS,
        element:<PrivateRoute>
        <TaskDetails />
      </PrivateRoute>
    },
    {
        path: endpoints.TASKS_CREATE,
        element:<PrivateRoute>
        <TaskCreate />
      </PrivateRoute>
    },
    {
        path: endpoints.MEMBERS,
        element:<PrivateRoute>
        <Members />
      </PrivateRoute>
    },
    {
        path: endpoints.MEMBERS_DETAILS,
        element:<PrivateRoute>
        <MemberDetails />
      </PrivateRoute>
    },
    {
        path: endpoints.MEMBERS_CREATE,
        element:<PrivateRoute>
        <MemberCreate />
      </PrivateRoute>
    },
]

export default routes
