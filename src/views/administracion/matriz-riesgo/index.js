import { useContext } from 'react'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import { Card, CardHeader, CardTitle, CardBody, CardText } from 'reactstrap'
import '@styles/react/libs/charts/apex-charts.scss' 

const AdministracionMatrizRiesgos = () => {
  const { colors } = useContext(ThemeColors)    

  return (
    <div id=''>
      <Card>
        <CardHeader>
          <CardTitle>Matriz de riesgos</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText></CardText>
        </CardBody>
      </Card>
    </div>
  )
}

export default AdministracionMatrizRiesgos
