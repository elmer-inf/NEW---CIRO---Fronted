import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const AdministracionRoutes = [
  // Administracion
  {
    path: '/administracion/evento-riesgo', // Submenus
    component: lazy(() => import('../../views/administracion/evento-riesgo'))
  },
  {
    path: '/administracion/matriz-riesgo', // Submenus
    component: lazy(() => import('../../views/administracion/matriz-riesgo'))
    //exact: true
  },
  {
    path: '/administracion/matriz-oportunidad', // Submenus
    component: lazy(() => import('../../views/administracion/matriz-oportunidad'))
  },
  {
    path: '/administracion/registrar', // Submenus
    component: lazy(() => import('../../views/administracion/registrar'))
  },
  {
    path: '/administracion/editar/:id', // Submenus
    component: lazy(() => import('../../views/administracion/editar'))
  }
]

export default AdministracionRoutes 
