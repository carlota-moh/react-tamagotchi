// imports
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  }
]);

// mount App component into index.html
ReactDOM.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
  document.getElementById("root")
);
