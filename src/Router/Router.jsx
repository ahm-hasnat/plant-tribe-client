import React from 'react';
import { createBrowserRouter } from "react-router";
import MainLayout from '../Layouts/MainLayout';
import Errorpage from '../Pages/ErrorPage/Errorpage';
import Home from '../Pages/Home/Home';
import Signin from '../Pages/Auth/Signin';
import Register from '../Pages/Auth/Register';
import ForgetPass from '../Pages/Auth/ForgetPass';
import ShareTips from '../Pages/ShareTips/ShareTips';
import BrowseTips from '../Pages/BrowseTips/BrowseTips';
import TipDetails from '../Pages/TipDetails/TipDetails';
import MyTips from '../Pages/Mytips/MyTips';


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
          {
            element: <ShareTips></ShareTips>,
            path :'/sharetips',
          },
          {
            path : '/browsetips',
            element: <BrowseTips></BrowseTips>,
            loader: ()=> fetch('http://localhost:3000/publictips')
          },
          {
            path : '/details/:id',
            element : <TipDetails></TipDetails>,
            loader: ()=> fetch('http://localhost:3000/publictips')
          },
          {
            path : '/mytips',
            element:<MyTips></MyTips>,
            loader: ()=> fetch('http://localhost:3000/alltips')

          }

   ]
  },
  {
   path:"/error",
   element:<Errorpage></Errorpage>
  },
  {
    path:'/signin',
     element:<Signin></Signin>
  },
  {
    path:'/register',
     element:<Register></Register>
  },
  {
    path:'/forget',
     element:<ForgetPass></ForgetPass>
  },

]);

