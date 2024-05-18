import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./routes/LandingPage";
import Discover from "./routes/Discover";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import ErrorPage from "./routes/ErrorPage";

import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/discover",
    element: <Discover />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
