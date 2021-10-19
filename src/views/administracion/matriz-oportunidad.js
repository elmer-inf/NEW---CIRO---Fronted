import { useContext } from 'react'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Media, CardText, CardLink } from 'reactstrap'

import '@styles/react/libs/charts/apex-charts.scss' 

const AdministracionMatrizOportunidad = () => {
  const { colors } = useContext(ThemeColors)    

  return (
    <div id=''>
      <Card>
        <CardHeader>
          <CardTitle>Matriz de Oportunidades</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText></CardText>
        </CardBody>
      </Card>
    </div>
  )
}

export default AdministracionMatrizOportunidad
