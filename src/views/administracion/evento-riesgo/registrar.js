import { Fragment } from 'react'
import BreadCrumbs from '@components/breadcrumbs'
import { Card, CardTitle, CardBody, CardText, Row, Col } from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'
import Formulario from './component/Formulario'
import { postListDescripcion } from './controller/AdminEventoController'

const AdministracionEventoRegistrar = () => {
 
  const history = useHistory()
  const formValueInitial = {
      tablaLista: null,
      nombre: '',
      clave: '',
      descripcion: '',
      nivel2_id: null,
      nivel3_id: null
  }

  const redirect = (e) => {
    e.preventDefault()
    history.push('../evento-riesgo')
  }

  const handleOnSubmit = (dataToRequest) =>{
    postListDescripcion(dataToRequest)
    .then(response => {
      console.log('response : ', response);
      history.push("/administracion/evento-riesgo/listar")
    }).catch((error) => {
      console.log('Error al obtener datos: ', error)
    })
  }

  return (
    <div id=''>
      <Fragment>
        <BreadCrumbs breadCrumbTitle='Registrar Parámetro de Evento de Riesgo' breadCrumbParent='Administración' breadCrumbActive='Registrar Parámetro' />

          <Formulario
            initialValuess={formValueInitial}
            optionToSelect={{}}
            handleOnSubmit={handleOnSubmit}
          />

      </Fragment>
    </div>
  )
}
export default AdministracionEventoRegistrar
