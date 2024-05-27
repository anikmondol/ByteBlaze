
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
import BlogCard from './components/BlogCard'
import Content from './components/Content'
import Author from './components/Author'



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
        element: <Blogs></Blogs>,
        loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7')
      },
      {
        path: 'blog/:id',
        element: <BlogCard></BlogCard>,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params?.id}`),
        children: [
          {
            index: true,
            element: <Content></Content>,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params?.id}`)
          },
          {
            path: 'author',
            element: <Author></Author>,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params?.id}`)
          },
        ]
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
