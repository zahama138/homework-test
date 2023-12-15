import type { RouteObject } from "react-router-dom";
import Home from "./pages/home";
import Following from "./pages/following";
import NotFound from "./pages/notFound";
import HOMEPAGE from "./global";

const routes: RouteObject[] = [
  {
    path: HOMEPAGE + "/",
    element: <Home />,
    children: [],
  },
  {
    path: "/following",
    element: <Following />,
    children: [],
  },
  {
    path: "*",
    element: </*NotFound*/Following />,
    children: [],
  },
];

export default routes;
