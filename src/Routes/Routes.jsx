import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import CalTrack from "../Pages/CalTrack/CalTrack";
import Home from "../Pages/Home/Home";
import BmiCal from "../Pages/CalTrack/BmiCal/BmiCal";
import SickFood from "../Pages/SickBasedFood/SickFood";
import Signup from "../Pages/Registration/SignUp/SignUp";
import LogIn from "../Pages/Registration/LogIn/LogIn";
import Profile from "../Pages/Profile/Profile";
import Diet from "../Pages/FoodClass/Diet";
import NutryProducts from "../Pages/NutryProduct/NutryProducts";
import AdminLayout from "../Layout/AdminLayout";
import AdminHome from "../Pages/AdminPages/AdminHome/AdminHome";
import UserDetails from "../Pages/AdminPages/UserDetails/UserDetails";

import LearnMore from "../Pages/About/LearnMore";
import AdminFoodAdd from "../Pages/AdminPages/AdminFoodAdd/AdminFoodAdd";
import SuggesstionDoc from "../Pages/FoodClass/SuggesstionDoc/SuggesstionDoc";


export const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/about",
            element: <LearnMore/>,
         },
         {
            path: "/caltrack",
            element: <CalTrack />,
         },
         {
            path: "/bmical",
            element: <BmiCal />,
         },
         {
            path: "/signup",
            element: <Signup />,

         },
         {
            path: "/login",
            element: <LogIn />,
         },
         {
            path: "/profile",
            element: <Profile />,
         },
         {
            path: "/diet",
            element: <Diet />,
         },
         {
            path: "/suggestions",
            element: <SuggesstionDoc/>
         },
         {
            path: "/nutryproducts",
            element: <NutryProducts />,
         },


         {
            path: "/sickfood",
            element: <SickFood />,
         },

         {
            path: "/admin",
            element: <AdminLayout />,
            children: [
               {
                  path: "adminhome",
                  element: <AdminHome />,
               },
               {
                  path: "adminfood",
                  element: <AdminFoodAdd/>,
               },
               
               {
                  path: "userdetails",
                  element: <UserDetails/>,
               },

            ]
         }

      ],

   }
])
