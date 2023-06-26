import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./components/ErrorPage";
import Favorites from "./routes/Favorites";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'favorites',
    element: <Favorites />,
    errorElement: <ErrorPage />,
  },
]);

export default router;