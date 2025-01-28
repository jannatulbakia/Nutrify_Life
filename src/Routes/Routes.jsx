import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import CalTrack from "../Pages/CalTrack/CalTrack";
import Home from "../Pages/Home/Home";
import BmiCal from "../Pages/CalTrack/BmiCal/BmiCal";
import FoodCal from "../Pages/CalTrack/FoodCalCnt/FoodCal";
import SickFood from "../Pages/SickBasedFood/SickFood";
import Signup from "../Pages/Registration/SignUp/SignUp";
import LogIn from "../Pages/Registration/LogIn/LogIn";
import Profile from "../Pages/Profile/Profile";
import Diet from "../Pages/FoodClass/Diet";
import NutryProducts from "../Pages/NutryProduct/NutryProducts";


export const router =  createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>,
             },
            {
               path:"/caltrack",
               element:<CalTrack/>,
            },
            {
                path:"/bmical",
                element:<BmiCal/>,
             },
             {
                path:"/foodcal",
                element:<FoodCal/>,
             },
             {
               path:"/signup",
               element:<Signup/>,

            },
            {
               path: "/login",
               element: <LogIn/>,
             },
            {
               path:"/profile",
               element:<Profile/>,
            },
            {
               path:"/diet",
               element:<Diet/>,
            },
            {
               path:"/nutryproducts",
               element:<NutryProducts/>,
            },


             {
                path:"/sickfood",
                element:<SickFood/>,
             }
            
        ]
    }
])
