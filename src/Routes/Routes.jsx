import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import CalTrack from "../Pages/CalTrack/CalTrack";
import Home from "../Pages/Home/Home";


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
            }
        ]
    }
])