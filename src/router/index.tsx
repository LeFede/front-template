import { Test } from '@/components'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Test />,
    errorElement: <h1>Not Found</h1>,
    children: [],
  },
])
