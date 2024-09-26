import { createBrowserRouter } from "react-router-dom";

/* Components */
import App from "./App";
import MainLayout from "./components/layout/MainLayout";
import ListHome from "./pages/ListHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/:type",
        element: <ListHome />,
      },
    ],
  },
  {
    path: "/townhome",
    element: <App />
  }
]);
