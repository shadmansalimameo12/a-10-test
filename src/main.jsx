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
import { AuthProvider } from './Contexts/AuthContext.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';
import { Toaster } from 'react-hot-toast';

// // Define your private route pages here
// const AddTask = () => <div>Add Task Page (Protected)</div>;
// const MyTasks = () => <div>My Tasks Page (Protected)</div>;
// const BrowseTasks = () => <div>Browse Tasks Page</div>;

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
      // {
      //   path: "browse-tasks",
      //   element: <BrowseTasks />,
      // },
      // {
      //   path: "add-task",
      //   element: <PrivateRoute><AddTask /></PrivateRoute>,
      // },
      // {
      //   path: "my-tasks",
      //   element: <PrivateRoute><MyTasks /></PrivateRoute>,
      // }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
    </AuthProvider>
  </StrictMode>
);