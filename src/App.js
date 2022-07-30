import { Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import NotificationContainer from "./components/notificationContainer/NotificationContainer";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <Routes>
        { routes.map((route, index) => <Route key={index} path={route.path} element={route.element} />)}
      </Routes>
      <NotificationContainer />
    </div>
  );
}

export default App;
