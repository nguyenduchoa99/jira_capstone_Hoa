import React from 'react'
import { useRoutes } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout/AuthLayout'
import MainLayout from '../components/MainLayout/MainLayout'
import Login from '../modules/Authentication/Login/Login'
import Register from '../modules/Authentication/Register/Register'
const Routers = () => {
    const routing = useRoutes([
        {
            path:'/',
            element:<MainLayout />,
            children:[
                {
                    
                }
            ]
        },
        {
            path: '/',
            element: <AuthLayout />,
            children: [
                {
                    path: '/login',
                    element: <Login />,
                },
                {
                    path:'/register',
                    element:<Register />
                }
            ]
        }
    ])
    return routing;
}

export default Routers