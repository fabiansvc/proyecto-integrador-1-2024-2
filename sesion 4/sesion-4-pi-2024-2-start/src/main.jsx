import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import RecyCling from "./pages/recycling/Recycling";
import Page404 from "./pages/page-404/Page404";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/recycling", element: <RecyCling /> },
  { path: "*", element: <Page404 /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
