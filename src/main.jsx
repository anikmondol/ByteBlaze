
import ReactDOM from 'react-dom/client'
import './index.css'

import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Bookmarks from './pages/Bookmarks'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/bookmarks',
        element: <Bookmarks></Bookmarks>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
