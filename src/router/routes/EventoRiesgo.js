import { lazy } from 'react'

const EventoRiesgoRoutes = [
  // Administracion
  {
    path: '/evento-riesgo/listar', // Submenus
    component: lazy(() => import('../../views/eventoRiesgo/listar'))
  },
  {
    path: '/evento-riesgo/registrar', // Submenus
    component: lazy(() => import('../../views/eventoRiesgo/registrar')), 
    exact: true
  }
]

export default EventoRiesgoRoutes 
 