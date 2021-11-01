import React, { useState, useEffect } from 'react'
import { useFormik } from "formik"
import * as Yup from "yup"
import { useHistory } from 'react-router-dom'
import { CInputReact } from '../../../../reusable/CInputReact'
import { Card, CardHeader, CardBody, FormGroup, Col, Form, Button, Label } from 'reactstrap'
import { CSelectReact } from '../../../../reusable/CSelectReact'
import { getTablaLista, getTablaDescripcionNivel, getTablaDescripcionNivel2 } from '../controller/AdminEventoController';
import { buildSelectTwo } from '../../../../functions/Function'
import Select from 'react-select'

/**
 * @param handleOnSubmit : function 
 * @description handleOnSubmit es una funcionm que se recibe del prop y es usada para realizar el post request (guardar registros) 
 * @returns 
 */

const AdministracionFormularioEvento = ({ initialValuess, optionToSelect, handleOnSubmit }) => {
  console.log('-initialValuess>>>>>>', initialValuess)
  const history = useHistory()

  const formik = useFormik({
    initialValues: initialValuess,
    validationSchema: Yup.object().shape(
      {
        tablaLista: Yup.mixed().required('Campo obligatorio'),
        clave: Yup.string().min(2).max(50).nullable(),
        nombre: Yup.string().min(2).max(500).required('Campo obligatorio'),
        descripcion: Yup.string().min(2).max(1000).nullable(),
        nivel2_id: Yup.mixed(),
        nivel3_id: Yup.mixed(),
      }
    ),

    onSubmit: values => {
      const data = {
        ...values,
        tablaLista: values.tablaLista.value,
        nivel2_id: (values.nivel2_id !== null) ? values.nivel2_id.value : 0,
        nivel3_id: (values.nivel3_id !== null) ? values.nivel3_id.value : 0
      }
      console.log('datos que se enviaran:', values)
      console.log('datos que se data:', data)
      handleOnSubmit(data)
    }
  })

  /* LISTA LAS TABLAS LISTA*/
  const [tablaListaOptions, setTablaListaOptions] = useState([])

  const callApi = () => {
    getTablaLista()
      .then(res => {
        const options = buildSelectTwo(res.data, 'id', 'nombre_tabla', true)
        //console.log('El response de tabla: ', res.data)
        //console.log('options : ', options)
        setTablaListaOptions(options)
      }).catch((error) => {
        //console.log('Error: ', error)
        //notificationToast('error', Messages.notification.notOk)
      })
  }

  useEffect(() => {
    callApi();
    
  }, []) //Llama unsa sola vez


  /* LISTA TABLA DESCRIPCION NIVEL 2 */
  const [dataApi2, setDataApi] = useState([])

  const callApi2 = (idTablaDes) => {
    getTablaDescripcionNivel(idTablaDes)
      .then(res => {
        const options = buildSelectTwo(res.data, 'id', 'nombre', true)
        //console.log('El response de tabla call api 2: ', res.data)
        //console.log('options : ', options)
        setDataApi(options)
      }).catch((error) => {
        //console.log('Error: ', error)
        //notificationToast('error', Messages.notification.notOk)
      })
  }

  const resetValues = () => {
    formik.setFieldValue('nivel2_id', null, false);
    formik.setFieldValue('nivel3_id', null, false)
  }

  useEffect(() => {
   if( formik.values.tablaLista !== null){
    //console.log('formik.values.tablaLista::: ', formik.values.tablaLista.value);
    const idnivel2 = formik.values.tablaLista.nivel2;
    callApi2(idnivel2);
    resetValues();
   }
  }, [formik.values.tablaLista])

  useEffect(() => {
    if( formik.values.tablaLista !== null){
     //console.log('formik.values.tablaLista::: ', formik.values.tablaLista.value);
     console.log('efect 2: ',formik.values.tablaLista.nivel2 )
     const idnivel2 = formik.values.tablaLista.nivel2;
     callApi2(idnivel2);
    }
   }, [])

   
  /* LISTA TABLA DESCRIPCION NIVEL 3 */
  const [dataApi3, setDataApi3] = useState([])

  const callApi3 = (idTablaDes) => {
    getTablaDescripcionNivel(idTablaDes)
      .then(res => {
        const options = buildSelectTwo(res.data, 'id', 'nombre', true)
        //console.log('El response de tabla: ', res.data)
        //console.log('options : ', options)
        setDataApi3(options)
      }).catch((error) => {
        //console.log('Error: ', error)
        //notificationToast('error', Messages.notification.notOk)
      })
  }

  useEffect(() => {
   if( formik.values.tablaLista !== null){
    //console.log('formik.values.tablaLista::: ', formik.values.tablaLista.value);
    const idnivel3 = formik.values.tablaLista.nivel3;
    callApi3(idnivel3);
    resetValues();
   }
  }, [formik.values.tablaLista])

  return (
    <Card>
      <CardHeader>
        {/* <CardTitle tag='h4'>Horizontal Form</CardTitle> */}
      </CardHeader>
      <CardBody>

        <Form onSubmit={formik.handleSubmit} autoComplete="off">
          <FormGroup row>
            <Label sm='3' for='tabla'>
              Tabla
            </Label>
            <Col sm='9'>
              <CSelectReact
                type={"select"}
                id={'tablaLista'}
                placeholder={'Seleccionar . . . '}
                value={formik.values.tablaLista}
                onChange={formik.setFieldValue}
                onBlur={formik.setFieldTouched}
                error={formik.errors.tablaLista}
                touched={formik.touched.tablaLista}
                options={tablaListaOptions}
              />
            </Col>
          </FormGroup>


          <FormGroup row>
            <Label sm='3' for='clave'>
              Clave
            </Label>
            <Col sm='9'>
              <CInputReact
                type={"text"}
                id={'clave'}
                placeholder={'Clave'}
                value={formik.values.clave}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                touched={formik.touched.clave}
                errors={formik.errors.clave}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='nombre'>
              Nombre
            </Label>
            <Col sm='9'>
              <CInputReact
                type={"text"}
                id={'nombre'}
                placeholder={'Nombre'}
                value={formik.values.nombre}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                touched={formik.touched.nombre}
                errors={formik.errors.nombre}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='descripcion'>
              Descripción
            </Label>
            <Col sm='9'>
              <CInputReact
                type={"textarea"}
                id={'descripcion'}
                placeholder={'Descripción'}
                value={formik.values.descripcion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                touched={formik.touched.descripcion}
                errors={formik.errors.descripcion}
                rows={5}
              />
            </Col>
          </FormGroup>

          { (formik.values.tablaLista !== null && (formik.values.tablaLista.value == 4 || formik.values.tablaLista.value == 6)) ? // Para nivel 2
            <FormGroup row>
              <Label sm='3' for='nivel2_id'>
                { (formik.values.tablaLista !== null && (formik.values.tablaLista.value == 4 )) ? 'Área': null }
                { (formik.values.tablaLista !== null && (formik.values.tablaLista.value == 6 )) ? 'Categoria de tipo de Evento': null }
              </Label>
              <Col sm='9'>
                <CSelectReact
                  type={"select"}
                  id={'nivel2_id'}
                  placeholder={'Seleccionar . . . '}
                  value={formik.values.nivel2_id}
                  onChange={formik.setFieldValue}
                  onBlur={formik.setFieldTouched}
                  error={formik.errors.nivel2_id}
                  touched={formik.touched.nivel2_id}
                  options={dataApi2}
                />
              </Col>
            </FormGroup>
          : null }

          { (formik.values.tablaLista !== null && (formik.values.tablaLista.value == 7)) ? // para  nivel 2 y 3
            <FormGroup row>
              <Label sm='3' for='nivel2_id'>
                { (formik.values.tablaLista !== null && (formik.values.tablaLista.value == 7 )) ? 'Categoria de tipo de Evento': null }
              </Label>
              <Col sm='9'>
                <CSelectReact
                  type={"select"}
                  id={'nivel2_id'}
                  placeholder={'Seleccionar . . . '}
                  value={formik.values.nivel2_id}
                  onChange={formik.setFieldValue}
                  onBlur={formik.setFieldTouched}
                  error={formik.errors.nivel2_id}
                  touched={formik.touched.nivel2_id}
                  options={dataApi2}
                />
              </Col>

              <Label sm='3' for='nivel3'>
                { (formik.values.tablaLista !== null && (formik.values.tablaLista.value == 7 )) ? 'Sub evento - Basilea': null }
              </Label>
              <Col sm='9'>
                <CSelectReact
                  type={"select"}
                  id={'nivel3_id'}
                  placeholder={'Seleccionar . . . '}
                  value={formik.values.nivel3_id}
                  onChange={formik.setFieldValue}
                  onBlur={formik.setFieldTouched}
                  error={formik.errors.nivel3_id}
                  touched={formik.touched.nivel3_id}
                  options={dataApi3}
                />
              </Col>
            </FormGroup>
          : null }


          <FormGroup className='mb-0' row>
            <Col className='d-flex' md={{ size: 9, offset: 3 }}>
              <Button
                className='mr-1'
                color="primary"
                type="submit"
                disabled={formik.isSubmitting}
              >
                Guardar
              </Button>

              <Button
                outline color='secondary'
                onClick={() => { formik.handleReset() }}
                disabled={!formik.dirty || formik.isSubmitting}
              >
                Limpiar
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  )
}
export default AdministracionFormularioEvento
