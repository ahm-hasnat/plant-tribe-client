import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Errorpage from "../Pages/ErrorPage/Errorpage";
import Home from "../Pages/Home/Home";
import Signin from "../Pages/Auth/Signin";
import Register from "../Pages/Auth/Register";

import ShareTips from "../Pages/ShareTips/ShareTips";
import BrowseTips from "../Pages/BrowseTips/BrowseTips";
import TipDetails from "../Pages/TipDetails/TipDetails";
import MyTips from "../Pages/Mytips/MyTips";
import ExploreGardeners from "../Components/Gardeners/ExploreGardeners";
import PrivateRoute from "../AuthProvider/PrivateRoute";
import Auth from "../Pages/Auth/Auth";
import ResetPass from "../Pages/Auth/ResetPass";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://plant-tribe-server.onrender.com/gardeners"),
      },
      {
        element: (
          <PrivateRoute>
            <ShareTips></ShareTips>
          </PrivateRoute>
        ),
        path: "/sharetips",
      },
      {
        path: "/browsetips",
        element: <BrowseTips></BrowseTips>,
        loader: () => fetch("https://plant-tribe-server.onrender.com/publictips"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <TipDetails></TipDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("https://plant-tribe-server.onrender.com/publictips"),
      },
      {
        path: "/mytips",
        element: (
          <PrivateRoute>
            <MyTips></MyTips>
          </PrivateRoute>
        ),
        loader: () => fetch("https://plant-tribe-server.onrender.com/alltips"),
      },
      {
        path: "/explore",
        element: <ExploreGardeners></ExploreGardeners>,
        loader: () => fetch("https://plant-tribe-server.onrender.com/allgardeners"),
      }
      
    ],
  },
  {
   path : '/auth',
   element : <Auth/>,
   children:[

    
      {
        path: "/auth/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/forget",
        element: <ResetPass></ResetPass>,
      },
    
   ]
  },
  {
    path: "/error",
    element: <Errorpage></Errorpage>,
  },
]);
