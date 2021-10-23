import React, { Fragment, useState, useEffect } from 'react'
import BreadCrumbs from '@components/breadcrumbs'
import { Card, CardTitle, CardBody, CardText, Row, Col } from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'
import Formulario from '../registrar/Formulario'
import { editTablaDescripcion, getTablaDescripcionId } from '../evento-riesgo/controller/AdminEventoController'

const AdministracionEditar = ( { match } ) => {
 
  const history = useHistory()
  const formValueInitial = {
      tablaLista: null,
      nombre: '',
      clave: '',
      descripcion: '',
      nivel2_id: null,
      nivel3_id: null
  }

 
  const [formValueToEdit, setformValueToEdit] = useState(formValueInitial)

  const [spin, setSpin] = useState(false)
  
  const handleOnSubmit = (dataToRequest) => {
    console.log(': ', dataToRequest)
    const idTabDesc = match.params.id;
    editTablaDescripcion(idTabDesc,dataToRequest)
    .then(res => {
      console.log('response : ', res);
      history.push("../../administracion/evento-riesgo")
    }).catch((error) => {
        console.log('Error al obtener datos: ', error);
    });
  }

  useEffect(() => { 
    console.log("call")
    getById();
  }, []);


  const macthed = (dataResponse) =>{

      var nivel1 = {value: dataResponse.id, label: dataResponse.nombre}
      var nivel2 = {}
      var nivel3 = {}
      
      if(dataResponse.nivel2_id !== null){
        nivel2 = {value: dataResponse.nivel2_id.id, label: dataResponse.nivel2_id.nombre}
      }
      if(dataResponse.nivel3_id !== null){
        nivel3 = {value: dataResponse.nivel3_id.id, label: dataResponse.nivel3_id.nombre}
      }


    const valores = {
  
      nombre: dataResponse.nombre,
      clave: dataResponse.clave,
      descripcion: dataResponse.descripcion,
      tablaLista: nivel1,
      nivel2: (dataResponse.nivel2_id !== null) ? nivel2 : null,
      nivel3: (dataResponse.nivel3_id !== null) ? nivel3 : null
      
   
      //nivel3_id: null
    }


      
      setformValueToEdit(valores)

}

  const getById = async () => {
    setSpin(true)

    const idParametro = match.params.id;
    await getTablaDescripcionId(idParametro)
      .then((response) => {
          console.log("API xxxxx: ", response);
          const res = response.data;
          macthed(res)
        setSpin(false)

      }).catch((error) => {
        console.log("Error: ", error);
    });
  }

  return (
    <div id=''>
      <Fragment>
        <BreadCrumbs breadCrumbTitle='Editar Parámetro de Evento de Riesgo' breadCrumbParent='Administración' breadCrumbActive='Editar Parámetro' />

        {
          spin === true 
          ? <div>{'Cargando'} </div>
          : <Formulario
          initialValuess={formValueToEdit}
          optionToSelect={{}}
          handleOnSubmit={handleOnSubmit}
        />
        }
          
      </Fragment>
    </div>
  )
}
export default AdministracionEditar
