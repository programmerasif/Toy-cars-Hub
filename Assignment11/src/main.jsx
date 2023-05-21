import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './Main/Main';
import Home from './Pages/Share/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Provider/AuthProvider';
import AllToy from './Pages/AllToy/AllToy';
import AddedToy from './Pages/AddAToy/AddedToy';
import React from 'react';
import ViewDetils from './Pages/ViewDetils/ViewDetils';
import MyToys from './Pages/MyToys/MyToys';
import UpdatedMyToy from './Pages/MyToys/UpdatedMyToy';
import PrivateRout from './Pages/PrivateRout/PrivateRout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/alltoy',
        element:<AllToy />
      },
      {
        path: '/addedToy',
        element: <PrivateRout><AddedToy /></PrivateRout>
      },
      {
        path:'/viewDetils/:id',
        element:<PrivateRout><ViewDetils /></PrivateRout>,
        loader: ({params}) => fetch(`http://localhost:5000/allCars/${params.id}`)
      },
      {
        path:'/viewDetilsforHom/:id',
        element:<PrivateRout><ViewDetils /></PrivateRout>,
        loader: ({params}) => fetch(`http://localhost:5000/allcarForhome/${params.id}`)
      },
      {
        path: '/myToys',
        element: <PrivateRout><MyToys /></PrivateRout>
      },
      {
        path:'/updatedToy/:id',
        element:<UpdatedMyToy />,
        loader: ({params}) => fetch(`http://localhost:5000/allCars/${params.id}`)
        
      }
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <AuthProvider >
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  </AuthProvider>

)
