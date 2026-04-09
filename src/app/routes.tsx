import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";

// Home stays eager so the landing page paints immediately. All other
// routes are split into their own chunks and fetched on navigation.
const About = lazy(() => import("./components/About").then((m) => ({ default: m.About })));
const Approach = lazy(() => import("./components/Approach").then((m) => ({ default: m.Approach })));
const Services = lazy(() => import("./components/Services").then((m) => ({ default: m.Services })));
const Blog = lazy(() => import("./components/Blog").then((m) => ({ default: m.Blog })));
const BlogPost = lazy(() => import("./components/BlogPost").then((m) => ({ default: m.BlogPost })));
const Contact = lazy(() => import("./components/Contact").then((m) => ({ default: m.Contact })));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "o-meni", Component: About },
      { path: "pristup", Component: Approach },
      { path: "usluge", Component: Services },
      { path: "blog", Component: Blog },
      { path: "blog/:slug", Component: BlogPost },
      { path: "kontakt", Component: Contact },
    ],
  },
]);
