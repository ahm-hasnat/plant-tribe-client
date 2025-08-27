import React from 'react';
import { createBrowserRouter } from "react-router";
import MainLayout from '../Layouts/MainLayout';
import Errorpage from '../Pages/ErrorPage/Errorpage';
import Home from '../Pages/Home/Home';

export const router = createBrowserRouter([
  {
    path: "/",
   element:<MainLayout></MainLayout>,
   errorElement:<Errorpage></Errorpage>,
   children:[
          {
            index:true,
            path:"/",
            element:<Home></Home>,
            loader : ()=> fetch('http://localhost:3000/gardeners')
          },

   ]
  },
  {
   path:"/error",
   element:<Errorpage></Errorpage>
  }
]);

