import { createBrowserRouter } from "react-router-dom";

/* Components */
import App from "./App";
import MainLayout from "./components/layout/MainLayout";
import ListHome from "./pages/ListHome";
import SelectType from "./pages/SelectType";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index:true,
        element: <SelectType />,
      },
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
