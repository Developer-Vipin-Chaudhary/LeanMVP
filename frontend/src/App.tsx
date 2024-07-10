import SingUp from "./page/SignUp";
import SingIn from "./page/SingIn";
import DashBoard from "./page/DashBoard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SingIn />,
  },
  {
    path: "/signup",
    element: <SingUp />,
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
