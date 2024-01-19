import "./App.css";
import HomePage from "./Pages/HomePage/Home";
import PreviewPage from "./Pages/PreviewPage/Preview";
import LoginPage from "./Pages/LoginPage/Login";
import RegisterPage from "./Pages/RegisterPage/Register"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/Home",
      element: <HomePage />,
    },
    {
      path: "/preview",
      element: <PreviewPage />,
    },
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/Register",
      element: <RegisterPage />,
    },
  ]);

   return <RouterProvider router={router} /> ;
}

export default App;
