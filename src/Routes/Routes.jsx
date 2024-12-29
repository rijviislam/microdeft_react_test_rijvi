// src/Routes/Routes.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../page/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/register",
    element: <Register />,
  },
]);

export { router };
