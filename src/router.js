import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SingleMovie from "./Pages/SingleMovie";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/item/:id",
    element: <SingleMovie />,
  },
]);
export default function Router() {
  return <RouterProvider router={routes} />;
}
