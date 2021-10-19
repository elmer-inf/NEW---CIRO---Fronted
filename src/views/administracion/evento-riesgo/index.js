import { Fragment } from 'react'
import BreadCrumbs from '@components/breadcrumbs'
import MenuVertical from './MenuVertical'

  const AdministracionEventosRiesgos = () => {

  return (
    <div id=''>
      <Fragment>
        <BreadCrumbs breadCrumbTitle='Eventos de Riesgo' breadCrumbParent='Administración' breadCrumbActive='Eventos de Riesgo' />
          <MenuVertical />
      </Fragment>
    </div>
  )
}

export default AdministracionEventosRiesgos
