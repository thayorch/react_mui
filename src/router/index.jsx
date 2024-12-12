import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
// import ErrorPage from "../components/ErrorPage";
import Root from '../layouts/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
    // errorElement: <ErrorPage />,
  },
]);

export default router;
