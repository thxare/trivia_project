import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import { TriviaApp } from "./triviaApp";

const root = ReactDOM.createRoot(document.getElementById("app"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <TriviaApp />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
