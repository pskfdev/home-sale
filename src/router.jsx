import { createBrowserRouter } from "react-router-dom";

/* Components */
import MainLayout from "./components/layout/MainLayout";
import ListHome from "./pages/ListHome";
import SelectType from "./pages/SelectType";
import Contact from "./pages/Contact";
import DetailHome from "./pages/DetailHome";
import HomeAdmin from "./pages/admin/Home-Admin";


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
      {
        path: "/:type/:id",
        element: <DetailHome />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/admin-bank/*",
    element: <HomeAdmin />,
  }
]);
