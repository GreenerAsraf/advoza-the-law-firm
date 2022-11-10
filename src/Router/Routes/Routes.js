import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import Reviews from "../../Pages/Reviews/Reviews";
import Services from "../../Pages/Services/Services";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";





const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>, 
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login', 
          element: <Login></Login>
        },
        {
          path: '/signup', 
          element: <SignUp></SignUp>
        },
        {
          path: '/blog', 
          element: <Blog></Blog>
        },
        {
          path: '/services', 
          element: <Services></Services>
        },
        {
          path: '/checkout/:id',
          element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
          loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        { path: '/orders',
        element:  <Orders></Orders>  
        },
        { path: '/reviews',
        element: <Reviews></Reviews> 
        },
        { path: '/addService',
        element:  <AddService></AddService>  
        },
      ]
    }
  ]);

  export default router;