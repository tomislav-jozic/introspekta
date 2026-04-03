import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Approach } from "./components/Approach";
import { Services } from "./components/Services";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";

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
      { path: "kontakt", Component: Contact },
    ],
  },
]);
