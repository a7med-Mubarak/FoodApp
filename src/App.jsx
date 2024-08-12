import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import CategoriesList from './modules/Categories/components/CategoriesList/CategoriesList';
import ProtectedRoute from './modules/Shared/components/ProtectedRoute/ProtectedRoute';
import ForgetPass from './modules/Authentication/components/ForgetPass/ForgetPass';
import MasterLayout from './modules/Shared/components/MasterLayout/MasterLayout';
import ResetPass from './modules/Authentication/components/ResetPass/ResetPass';
import RecipesList from './modules/Recipes/components/RecipesList/RecipesList';
import Register from './modules/Authentication/components/Register/Register';
import AuthLayout from './modules/Shared/components/AuthLayout/AuthLayout';
import UsersList from './modules/Users/Components/UsersList/UsersList';
import NotFound from './modules/Shared/components/NotFounf/NotFound';
import Login from './modules/Authentication/components/Login/Login';
import Home from './modules/Home/components/Home/Home';
import { jwtDecode } from 'jwt-decode';
import RecipeData from './modules/Recipes/components/RecipeData/RecipeData';
import VerifyAcc from './modules/Authentication/components/VerifyAcc/VerifyAcc';

function App() {
  const [loginData, setLoginData] = useState(null);
  const saveLoginData = () => {
    let encodedToken = localStorage.getItem("token");
    let decodedToken = jwtDecode(encodedToken);
    setLoginData(decodedToken)    
  }

  const routes = createBrowserRouter([
    {
      path: "",
      element: <AuthLayout/>,
      errorElement:<NotFound/>,
      children: [
        {index: true, element:<Login saveLoginData={saveLoginData}/>},
        {path: "login", element:<Login saveLoginData={saveLoginData}/>},
        {path: "forgetPass", element:<ForgetPass/>},
        {path: "resetPass", element:<ResetPass/>},
        {path: "register", element:<Register/>},
        {path: "verifyacc", element:<VerifyAcc/>},
      ],
    },
    {
      path: "dashboard",
      element:(
        <ProtectedRoute>
          <MasterLayout loginData={loginData} />
        </ProtectedRoute>
      ),
      errorElement:<NotFound/>,
      children: [
        {index: true, element:<Home/>},
        {path: "home", element:<Home/>},
        {path: "recipesList", element:<RecipesList/>},
        {path: "recipedata", element:<RecipeData/>},
        {path: "categoriesList", element:<CategoriesList/>},
        {path: "usersList", element:<UsersList/>},
      ],
    }
  ])

  return <>
        <ToastContainer/>
        <RouterProvider router={routes} />
  </>
}

export default App;
