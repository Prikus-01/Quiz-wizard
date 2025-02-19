import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AttemptQuiz from "./components/AttemptQuiz";
import CreateQuiz from "./components/CreateQuiz";
import "./index.css";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create-quiz",
    element: <CreateQuiz />,
  },
  {
    path: "/attempt-quiz",
    element: <AttemptQuiz />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
