
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';


const router = createBrowserRouter([
  
  {
    path: "/register",
    element: <Signup />
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />
  },
  {
    path: "/reset-password",
    element: <ResetPassword />
  }

] ) ;

const App = () => {
return <RouterProvider router={router} />;
}

export default App;
