import {
  BrowserRouter as Router,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Hello, { HelloPerson } from "./components/Hello";
import { Header } from "./components/Header";
import { Helloo } from "./components/Helloo";
import Car from "./components/Car";
import Login from "./components/Login";
import App from "./App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "hello",
        element: <Hello />,
      },
      {
        path: "helloo",
        element: <Helloo />,
      },
      {
        path: "car",
        element: <Car />,
      },
      {
        path: "show-group",
        element: <ShowGroup />,
      },
      {
        path: "add-group",
        element: <AddGroup />,
      },
      {
        path: "edit-group",
        element: <EditGroup />,
      },
    ],
  },
]);

function RouteWeb() {
  return <RouterProvider routes={router} />;
}
export default RouteWeb;
