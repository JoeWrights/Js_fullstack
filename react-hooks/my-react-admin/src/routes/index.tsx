import { lazy, FC } from 'react'
import { useRoutes, Route } from 'react-router-dom'
import LayoutPage from '@/layouts/Layout';

const User = lazy(() => import(/* webpackChunkName: "RouterDemo1"*/ '@/pages/RouterDemo1'))
const Dashboard = lazy(() => import(/* webpackChunkName: "Dashboard"*/ '@/pages/Dashboard'))

const routes = [
  {
    path: '/',
    element: <Route element={<LayoutPage></LayoutPage>}></Route>,
    children: [
      {
        path: '/dashboard',
        element: <Route element={<Dashboard></Dashboard>}></Route>
      },
      {
        path: '/user',
        element: <Route element={<User></User>}></Route>
      },
      {
        path: '/user/:id',
        element: <Route element={<User></User>}></Route>
      }
    ]
  }
]

const RenderRoutes: FC = () => {
  return useRoutes(routes)
}

export default RenderRoutes
