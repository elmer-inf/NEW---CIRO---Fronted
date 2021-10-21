import React, { useState, useEffect } from 'react'
import { useFormik } from "formik"
import * as Yup from "yup"
import { useHistory } from 'react-router-dom'
import { CInputReact } from '../../../reusable/CInputReact'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Col,
  Form,
  Button,
  CustomInput,
  Label
} from 'reactstrap'
import { CSelectReact } from '../../../reusable/CSelectReact'
import { getTablaLista } from './../evento-riesgo/controller/AdminEventoController';
import { buildSelectTwo } from '../../../functions/Function'

/**
 * 
 * @param handleOnSubmit : function 
 * 
 * @description handleOnSubmit es una funcionm que se recibe del prop y es usada para realizar el post request (guardar regiustros) 
 * @returns 
 */

const HorizontalForm = ({ initialValuess, optionToSelect, handleOnSubmit }) => {

  const history = useHistory()
  const [tablaListaOptions, setTablaListaOptions] = useState([])

  const redirect = (e) => {
    e.preventDefault()
    history.push('../../evento-riesgo/listar')
  }

  const formik = useFormik({
    initialValues: initialValuess,
    validationSchema: Yup.object().shape(
      {
        tablaLista: Yup.mixed().required('Valor requerido'),
        clave: Yup.string().min(2).max(50), //.required('Valores requeridos')
        nombre: Yup.string().min(2).max(500).required('Valor requerido'),
        descripcion: Yup.string().min(2).max(1000),

      }
    ),
    onSubmit: values => {
      console.log(values)

      const data = {
        ...values,
        tablaLista: values.tablaLista.value,
        nivel2_id: 0,
        nivel3_id: 0
      }
      console.log('data_____:', data)
      handleOnSubmit(data)
    }
  })

  const callApi = () => {
    getTablaLista()
      .then(res => {
        const options = buildSelectTwo(res.data, 'id', 'nombre_tabla', false)
        console.log('el resposnse de tablaa:: ', res)
        setTablaListaOptions(options)

      }).catch((error) => {
        console.log('Error al crear el modelo Persona: ', error)
        //notificationToast('error', Messages.notification.notOk)
      })
  }
  // Cycle life
  useEffect(() => {
    callApi()
  }, [])

  return (
    <Card>
      <CardHeader>
        {/* <CardTitle tag='h4'>Horizontal Form</CardTitle> */}
      </CardHeader>

      <CardBody>
        <Form onSubmit={formik.handleSubmit} autoComplete="off">

          <FormGroup row>
            <Label sm='3' for='clave'>
              Clave
            </Label>
            <Col sm='9'>
              <CSelectReact
                label={"Nivel 1"}
                type={"select"}
                id={'tablaLista'}
                placeholder={'Seleccione tablalista'}
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
                row={5}
              />
            </Col>
          </FormGroup>

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
export default HorizontalForm
