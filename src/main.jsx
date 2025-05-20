import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layouts/MainLayout.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import App from './App.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';

// Define placeholder components for the protected routes
const AddTask = () => <div className="min-h-[60vh] flex justify-center items-center"><h2 className="text-3xl font-bold">Add Task Page (Protected)</h2></div>;
const MyTasks = () => <div className="min-h-[60vh] flex justify-center items-center"><h2 className="text-3xl font-bold">My Tasks Page (Protected)</h2></div>;
const BrowseTasks = () => <div className="min-h-[60vh] flex justify-center items-center"><h2 className="text-3xl font-bold">Browse Tasks Page</h2></div>;
const Profile = () => <div className="min-h-[60vh] flex justify-center items-center"><h2 className="text-3xl font-bold">Profile Page (Protected)</h2></div>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "browse-tasks",
        element: <BrowseTasks />,
      },
      {
        path: "add-task",
        element: <PrivateRoute><AddTask /></PrivateRoute>,
      },
      {
        path: "my-tasks",
        element: <PrivateRoute><MyTasks /></PrivateRoute>,
      },
      {
        path: "profile",
        element: <PrivateRoute><Profile /></PrivateRoute>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </StrictMode>
);