// imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import Hello from "./hello";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "hello",
    element: <Hello />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
