import NotFound from 'views/sessions/NotFound'
import sessionRoutes from 'views/sessions/SessionRoutes'
import MatxLayout from '../components/MatxLayout/MatxLayout'
import homeRoutes from 'views/home/HomeRoutes'
import { Navigate } from 'react-router-dom'
import MenuRoutes from 'views/menuitems/MenuRoutes'

export const AllPages = () => {
    const all_routes = [
        {
            element: <MatxLayout />,
            children: [...homeRoutes],
        },
        ...sessionRoutes,
        {
            path: '/',
            element: <Navigate to="Home" />,
        },
        {
            element: <MatxLayout />,
            children: [...MenuRoutes],
        },
        ...sessionRoutes,
        {
            path: '/menuitems',
            element: <Navigate to="Menu" />,
        },
        {
            path: '*',
            element: <NotFound />,
        }
    ]
    return all_routes
}
