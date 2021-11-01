import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const AdministracionRoutes = [
  // Administracion Eventos de Riesgo
  {
    path: '/administracion/evento-riesgo/listar', // Submenus
    component: lazy(() => import('../../views/administracion/evento-riesgo/listar')),
    //exact: true
  },
  {
    path: '/administracion/evento-riesgo/registrar', // Submenus
    component: lazy(() => import('../../views/administracion/evento-riesgo/registrar')),
    //exact: true
  },
  {
    path: '/administracion/evento-riesgo/editar/:id', // Submenus
    component: lazy(() => import('../../views/administracion/evento-riesgo/editar')),
    //exact: true
  },
  // Administracion Matriz de Riesgos
  {
    path: '/administracion/matriz-riesgo', // Submenus
    component: lazy(() => import('../../views/administracion/matriz-riesgo')),
    //exact: true
  },
  // Administracion Matriz de Oportunidades
  {
    path: '/administracion/matriz-oportunidad', // Submenus
    component: lazy(() => import('../../views/administracion/matriz-oportunidad')),
    //exact: true
  }
]

export default AdministracionRoutes
