import { createBrowserRouter, RouteObject } from "react-router";
import PenReact from "./pages/PenReact";
import Home from "./pages/Home";
import PenCanvasReact from "./pages/PenCanvasReact";
import PenVanilla from "./pages/PenVanilla";

export const pages: RouteObject[] = [
  {
    path: "/PenReact",
    element: <PenReact />,
  },
  {
    path: "/PenCanvasReact",
    element: <PenCanvasReact />,
  },
  {
    path: "/PenVanilla",
    element: <PenVanilla />,
  },
];

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  ...pages,
]);
