import { createBrowserRouter } from "react-router-dom";

import App from "../App";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "about",
        element: <About />,
      },

      {
        path: "services",
        element: <Services />,
      },

      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default Router;
