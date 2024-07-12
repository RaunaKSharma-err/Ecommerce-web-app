import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cart from './pages/cart-page.tsx';
import { CategoryProvider } from './context/categoryProvider.tsx';

let ReactRoot = ReactDOM.createRoot(document.getElementById('root')!);

let allRoutes = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },{
    path:'cart',
    element:<Cart/>
  }
])

ReactRoot.render(
  <React.StrictMode>
    <CategoryProvider>
    <RouterProvider router={allRoutes}/>
    </CategoryProvider>
  </React.StrictMode>,
)
