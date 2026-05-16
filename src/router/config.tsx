import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import About from "../pages/about/page";
import Programs from "../pages/programs/page";
import News from "../pages/news/page";
import Partners from "../pages/partners/page";
import Contact from "../pages/contact/page";
import Donate from "../pages/donate/page";
import Report from "../pages/report/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/programs",
    element: <Programs />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/partners",
    element: <Partners />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/donate",
    element: <Donate />,
  },
  {
    path: "/report",
    element: <Report />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;