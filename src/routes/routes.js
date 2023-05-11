import Basket from "../pages/Basket";
import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";

export const routes = [
    {
        path:'/',
        element:<MainRoot/>,
        children:[
            {
                path:'',
                element:<Home/>
            },
            {
                path:'/basket',
                element:<Basket/>
            }
        ]

    }
]