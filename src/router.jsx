import { createBrowserRouter, Link } from "react-router-dom";

/* Components */
import MainLayout from "./components/layout/MainLayout";
import ListHome from "./pages/ListHome";
import SelectType from "./pages/SelectType";
import Contact from "./pages/Contact";
import DetailHome from "./pages/DetailHome";
import HomeAdmin from "./pages/admin/Home-Admin";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";


export const router = createBrowserRouter([
  /* Client router */
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
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  /* Admin router */
  {
    path: "/admin/*",
    element: <HomeAdmin />,
  },
  /* Page not found */
  {
    path: "*",
    element: (
      <div className="text-center h-100">
        <p className="my-10">There's nothing here: 404!</p>
        <Link to="/" className="p-2 rounded-md text-white bg-blue-500">
          Go to home page
        </Link>
      </div>
    ),
  },
]);
