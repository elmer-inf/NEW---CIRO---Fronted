import { lazy } from 'react'

const AdministracionRoutes = [
  // Administracion
  {
    path: '/administracion/evento-riesgo', // Submenus
    component: lazy(() => import('../../views/administracion/evento-riesgo.js'))
  },
  {
    path: '/administracion/matriz-riesgo', // Submenus
    component: lazy(() => import('../../views/administracion/matriz-riesgo.js'))
    //exact: true
  },
  {
    path: '/administracion/matriz-oportunidad', // Submenus
    component: lazy(() => import('../../views/administracion/matriz-oportunidad.js'))
  }
]

export default AdministracionRoutes 
