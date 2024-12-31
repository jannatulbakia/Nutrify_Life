import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import CalTrack from "../Pages/CalTrack/CalTrack";
import Home from "../Pages/Home/Home";
import BmiCal from "../Pages/CalTrack/BmiCal";
import FoodCal from "../Pages/CalTrack/FoodCalCnt/FoodCal";
import SickFood from "../Pages/SickBasedFood/SickFood";


export const router = createBrowserRouter([
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
                path:"/sickfood",
                element:<SickFood/>,
             }
            
        ]
    }
])