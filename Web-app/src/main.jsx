import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Register from "./pages/register.jsx";
import Login from "./pages/login.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chat from "./pages/chat.jsx";
import Quiz from "./pages/quiz.jsx";
import Dashboard from "./pages/dashboard.jsx";
import AuthLayout from "./pages/authLayout.jsx";
import authReducer from "./store.jsx";
import { Provider } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  version: "1",
};

const persistedReducer = persistReducer(persistConfig, authReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

let persistor = persistStore(store);

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
    element: (
      <AuthLayout>
        <Chat />
      </AuthLayout>
    ),
  },
  {
    path: "/quiz",
    element: (
      <AuthLayout>
        <Quiz />
      </AuthLayout>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <AuthLayout>
        <Dashboard />
      </AuthLayout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
