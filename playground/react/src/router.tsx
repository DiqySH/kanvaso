import { createBrowserRouter, RouteObject } from "react-router";
import PenReact from "./pages/PenReact";
import Home from "./pages/Home";
import PenCanvasReact from "./pages/PenCanvasReact";
import PenVanilla from "./pages/PenVanilla";
import Game from "./pages/Game";

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
  {
    path: "/Game",
    element: <Game />,
  },
];

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  ...pages,
]);
