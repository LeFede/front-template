import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Hello</h1>,
    errorElement: <h1>Not found</h1>,
    children: [],
  },
])
