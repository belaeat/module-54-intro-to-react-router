import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './Home/Home';
import First from './components/First/First';
import Friends from './components/Friends/Friends';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Posts from './components/Posts/Posts';
import PostDetail from './components/PostDetail/PostDetail';

/* const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: '/about',
    element: <About></About>
  },
  {
    path: '/contact',
    element: <Contact></Contact>
  }
]); */

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [

      {
        path: '/',
        element: <First></First>
      },

      {
        path: 'friends',
        element: <Friends></Friends>,

        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },

      {
        /* ':' diye dynamic vabe route set kore*/

        path: 'friend/:friendID',
        element: <FriendDetail></FriendDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendID}`)
      },

      {
        path: 'posts',
        element: <Posts></Posts>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      },

      {
        path: 'post/:postID',
        element: <PostDetail></PostDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`)
      },

      {
        path: 'about',
        element: <About></About>
      },

      {
        path: 'contact',
        element: <Contact></Contact>
      },

      // 404 not found
      {
        path: '*',
        element: <div>404 Not Found</div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
