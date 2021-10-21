import { Fragment } from 'react'
import BreadCrumbs from '@components/breadcrumbs'
import { Card, CardTitle, CardBody, CardText, Row, Col } from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'
import Formulario from './Formulario'
import { postListDescripcion } from '../evento-riesgo/controller/AdminEventoController'
//import { postAdminEvento } from '../registrar/controller/AdminEventoController'

const AdministracionRegistrar = () => {
 
  const history = useHistory()
  const formValueInitial = {
      tablaLista: null,
      nombre: '',
      clave: 0,
      descripcion: ''
  }

  const notificationToast = (type, mensaje) => {
    switch (type) {
      case 'error':
        toast.error(mensaje, {
          position: "top-right",
          autoClose: Messages.notification.autoClose,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true
        })
        break
      case 'success':
        toast.success(mensaje, {
          position: "top-right",
          autoClose: Messages.notification.autoClose,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true
        })
        break
      default:
        toast(mensaje, {
          position: "top-right",
          autoClose: Messages.notification.autoClose,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true
        })
    }
    setTimeout(() => {
      history.push('/manage/people')
      setSpin(false)
    }, Messages.notification.timeReload)
  }

  const handleOnSubmit = (dataToRequest) =>{

    postListDescripcion(dataToRequest)
    .then(response => {
      console.log('response : ', response);

    }).catch((error) => {
      console.log('Error al crear el modelo Persona: ', error)
      //notificationToast('error', Messages.notification.notOk)
    })

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
          <ToastContainer
            position="top-center"
            autoClose={8000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
      </Fragment>
    </div>
  )
}
export default AdministracionRegistrar
