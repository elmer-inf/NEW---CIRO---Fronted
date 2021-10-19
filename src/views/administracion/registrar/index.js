import { Fragment } from 'react'
import BreadCrumbs from '@components/breadcrumbs'
import { Card, CardTitle, CardBody, CardText, Row, Col } from 'reactstrap'
import { useHistory } from 'react-router-dom'
import Formulario from './Formulario'
//import MenuVertical from './MenuVertical'

const AdministracionRegistrar = () => {
  //Variables
  const history = useHistory()
  const formValueInitial = {
      clave: '',
      nombre: '',
      descripcion: ''
    
  }

const handleOnSubmit = (result) => {
  console.log('LLEGO: ', result)
}

  return (
    <div id=''>
      <Fragment>
        <BreadCrumbs breadCrumbTitle='Registrar' breadCrumbParent='Administración' breadCrumbActive='Registrar' />
          <Formulario 
            initialValuess={formValueInitial}
            optionToSelect={{}}
            handleOnSubmit={handleOnSubmit}
          />
      </Fragment>
    </div>
  )
}
export default AdministracionRegistrar
