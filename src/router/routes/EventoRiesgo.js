import { lazy } from 'react'

const EventoRiesgoRoutes = [

  {
    path: '/evento-riesgo/listar', // Submenus
    component: lazy(() => import('../../views/eventoRiesgo/listar')),
    exact: true
  },
  {
    path: '/evento-riesgo/registrar', // Submenus
    component: lazy(() => import('../../views/eventoRiesgo/registrar')), 
    exact: true
  }
]

export default EventoRiesgoRoutes
