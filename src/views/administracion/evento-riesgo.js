import { Fragment, useEffect } from 'react'
import { Row, Col, Card, CardTitle, CardHeader, CardBody} from 'reactstrap'
import BreadCrumbs from '@components/breadcrumbs'
import PillsVertical from '../../components/PillsVertical'

  const AdministracionEventosRiesgos = () => {

  return (
    <div id=''>
    <Card>
      <CardHeader>
        <CardTitle>Administracion de Eventos de Riesgos</CardTitle>
      </CardHeader>
      <CardBody>
        <PillsVertical />
      </CardBody>
    </Card>
    </div>
  )
}

export default AdministracionEventosRiesgos
