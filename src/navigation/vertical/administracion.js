import { Home, Circle, Calendar } from 'react-feather'

export default [
  {
    id: 'administracion',
    title: 'Administración',
    icon: <Calendar size={20} />,
    //badge: 'light-warning',
    badgeText: '2',
    children: [
      {
        id: 'evento-riesgo',
        title: 'Eventos de Riesgo',
        icon: <Circle size={12} />,
        navLink: '/administracion/evento-riesgo' 
      },
      {
        id: 'matriz-riesgo',
        title: 'Matriz de Riesgos',
        icon: <Circle size={12} />,
        navLink: '/administracion/matriz-riesgo'
      },
      {
        id: 'matriz-oportunidad',
        title: 'Matriz de Oportunidades',
        icon: <Circle size={12} />,
        navLink: '/administracion/matriz-oportunidad'
      }
    ]
  }
] 
