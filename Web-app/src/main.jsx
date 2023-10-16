import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Register from "./pages/register.jsx";
import Login from "./pages/login.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chat from "./pages/chat.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: "error",
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
