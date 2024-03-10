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
import { BookLoader as bookData } from "./utils/dataExtract.js";

// import DeleteBook from "./component/deletebook/deletebook.jsx";
import LogIn_Page from "./pages.jsx/logIn.jsx";

const router = createBrowserRouter([
  {
    path:'/',
    element: <LogIn_Page />,
    errorElement: <ErrorPage />,
  
  },
  {
    path: ":id/dashboard",
    element: <MainPage/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path: ":id/dashboard",
        element: <Dashboard/>,
      },
      {
        path: "addbook",
        element: <Add_BookForm />,
      },
      {
        path: "managebook",
        element: <ManageBook />,
        loader: bookData,
      },
      // {
      //   path:":_id/deletebook",
      //   element: <DeleteBook />
      // }
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