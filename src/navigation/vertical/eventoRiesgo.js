import { Home, Circle, Calendar } from 'react-feather'

export default [
  {
    id: 'eventoRiesgo',
    title: 'Eventos de riesgo',
    icon: <Calendar size={20} />,
    //badge: 'light-warning', 
    badgeText: '2',
    children: [
      {
        id: 'riesgos-listar',
        title: 'Listar',
        icon: <Circle size={12} />,
        navLink: '/evento-riesgo/listar'
      },
      {
        id: 'riesgos-registrar',
        title: 'Registrar',
        icon: <Circle size={12} />,
        navLink: '/evento-riesgo/registrar'
      }
    ]
  }
] 
