// imports
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from './Root';
import Tamagotchi from "./Tamagotchi";
import PokeFormPage from './Pokeform'
import ErrorPage from "./ErrorPage";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tamagotchi",
    element: <Tamagotchi />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/pokeform",
    element: <PokeFormPage />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
