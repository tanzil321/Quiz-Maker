import { createBrowserRouter } from 'react-router-dom'
import Blog from './Components/Blog'


import ErrorPage from './Components/ErrorPage'
import Home from './Components/Home'
import Root from './Components/Root'
import Static from './Components/Static'
import Topics from './Components/Topics'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader:()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
        }
      },
      {
        path: 'home',
        element: <Home />,
        loader:()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
        }
      },
      {
        path:'topic',
        element:<Topics/>,
        loader:()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
        }
      },
      {
        path:'/topic/:idx',
        element:<Topics/>,
        loader:({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.idx}`)
        }
      },
      {
        path:'static',
        element:<Static/>,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      
      
    ],
  },
])
