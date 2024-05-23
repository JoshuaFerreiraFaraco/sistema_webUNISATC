import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx";
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Products from "./routes/Products.jsx";
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home";
import EditForm from './routes/EditForm.jsx';
import Info from './components/Info.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path:'/',
                element: <Home />
            },
            {
                path:'/products',
                element: <Products />
            },
            {
                path:'/products/:id',
                element: <EditForm />
            },
            {
                path:'/products/:id/info',
                element: <Info />
            }
        ]
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)