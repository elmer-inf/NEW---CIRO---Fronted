import { lazy } from 'react'

const EventoRiesgoRoutes = [

  {
    path: '/eventoRiesgo/listar', // Submenus
    component: lazy(() => import('../../views/eventoRiesgo/listar')),
    exact: true
  },
  {
    path: '/eventoRiesgo/registrar', // Submenus
    component: lazy(() => import('../../views/eventoRiesgo/registrar')), 
    exact: true
  }
]

export default EventoRiesgoRoutes
