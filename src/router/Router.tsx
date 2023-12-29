import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import Admin from "../pages/Admin";
import SignupPage from "../pages/SignupPage";
import LogInPage from "../pages/LogInPage";
import Logout from "../components/Logout";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "admin", element: <Admin /> },
      { path: "sign-up", element: <SignupPage /> },
      { path: "log-in", element: <LogInPage /> },
      { path: "log-out", element: <Logout /> },
    ],
  },
]);
