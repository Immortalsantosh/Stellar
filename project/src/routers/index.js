import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import About from '../pages/About'

import Integrations from '../pages/Integrations'
import Pricing from '../pages/Pricing'
import Customers from '../pages/Customers'
import Changelog from '../pages/Changelog'



const  router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
           {
             path:"/",
            element:<Home/>,
           },
           {
            path:"/about",
           element:<About/>,
          },
          {
          path:"/Integrations",
          element:<Integrations/>,
         },
         {
         path:"/Pricing",
         element:<Pricing/>,
        },
        {
          path:"/Customers",
          element:<Customers/>,
         },
         {
          path:"Changelog",
          element:<Changelog/>,
         },
          
           
          
        ]
    }
])
export default router;