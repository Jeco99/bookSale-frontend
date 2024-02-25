import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "../src/assets/index.css";


import ErrorPage from "./pages.jsx/errorPage.jsx";
import Dashboard from "./pages.jsx/dashboard.jsx";
import ManageBook from "./pages.jsx/managebook.jsx";
import Add_BookForm from "./component/add_book/add_book.jsx";
import MainPage from "./pages.jsx/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/dashboard",
        element: <Dashboard/>,
      },
      {
        path: "/addbook",
        element: <Add_BookForm />,
      },
      {
        path: "/managebook",
        element: <ManageBook />,
      },
    ]
  },
  // {
  //   path: "/dashboard",
  //   element: <Dashboard />,
  //   errorElement: <ErrorPage />,
  //   children:[
  //     {
  //       path: "/addbook",
  //       element: <AddBook />,
  //     },
  //     {
  //       path: "/managebook",
  //       element: <ManageBook />,
  //     },
  //   ]
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);