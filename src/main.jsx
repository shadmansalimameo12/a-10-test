import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layouts/MainLayout.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Auth/Login.jsx';
import Register from './Components/Auth/Register.jsx';
import NotFound from './Components/Shared/NotFound.jsx';
import AuthProvider from './contexts/AuthContext';
import PrivateRoute from './routes/PrivateRoute';

// These will be implemented later but we need to add routes for them
const AddTask = () => <div className="container mx-auto py-10 px-4"><h1 className="text-2xl font-bold">Add Task (Coming Soon)</h1></div>;
const BrowseTasks = () => <div className="container mx-auto py-10 px-4"><h1 className="text-2xl font-bold">Browse Tasks (Coming Soon)</h1></div>;
const MyTasks = () => <div className="container mx-auto py-10 px-4"><h1 className="text-2xl font-bold">My Posted Tasks (Coming Soon)</h1></div>;
const TaskDetails = () => <div className="container mx-auto py-10 px-4"><h1 className="text-2xl font-bold">Task Details (Coming Soon)</h1></div>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/add-task",
        element: <PrivateRoute><AddTask /></PrivateRoute>
      },
      {
        path: "/browse-tasks",
        element: <BrowseTasks />
      },
      {
        path: "/my-tasks",
        element: <PrivateRoute><MyTasks /></PrivateRoute>
      },
      {
        path: "/task/:id",
        element: <PrivateRoute><TaskDetails /></PrivateRoute>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);