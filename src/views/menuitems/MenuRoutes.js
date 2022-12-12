import React, { lazy } from 'react'
import Loadable from 'components/Loadable/Loadable'

const Menu = Loadable(lazy(() => import('./Menuitems')))

const employeeRoutes = [
    {
        path: '/menuitems',
        element: < Menu/>,
    },
  
]

export default employeeRoutes