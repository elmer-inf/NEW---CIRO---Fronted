import React from 'react'
import { useFormik } from "formik"
import * as Yup from "yup"
import { useHistory } from 'react-router-dom'
import { CInputReact } from './../../../reusable/CInputReact'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Col,
  Input,
  Form,
  Button,
  CustomInput,
  Label
} from 'reactstrap'

const HorizontalForm = ({initialValuess, optionToSelect, handleOnSubmit}) => {

  const history = useHistory()

    const redirect = (e) => {
      e.preventDefault()
      history.push('/manage/people')
    }
    const formik = useFormik({
      initialValues: initialValuess,
      validationSchema: Yup.object().shape(
        {
          clave: Yup.string().required('Valores requeridos').min(2).max(18),
          nombre: Yup.string().required('Valores requeridos').min(2).max(498),
          descripcion: Yup.string().required('Valores requeridos').min(2).max(498)
        }
      ),
      onSubmit: values => {
        console.log(values)
        const data = {
          ...values,
          clave: values.clave.toString(),
          nombre: values.nombre.toString(),
          descripcion: values.descripcion.toString()
        }
        handleOnSubmit(data)
      }
  })

  return (
    <Card>
      <CardHeader>
        {/* <CardTitle tag='h4'>Horizontal Form</CardTitle> */}
      </CardHeader>

      <CardBody>
        <Form onSubmit={formik.handleSubmit} autoComplete="off">
          <FormGroup row>
            <Col sm='12'>
              <CInputReact 
                label={"Clave"}
                type={"text"}
                id={'clave'}
                placeholder={'Clave'}
                type={'text'}
                value={formik.values.clave}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                touched={formik.touched.clave}
                errors={formik.errors.clave}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col sm='12'>
              <CInputReact 
                label={"Nombre"}
                type={"text"}
                id={'nombre' }
                placeholder={'Nombre' }
                type={'text'}
                value={formik.values.nombre}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                touched={formik.touched.nombre}
                errors={formik.errors.nombre}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col sm='12'>
              <CInputReact
                label={"Descripción"}
                type={"text"} 
                id={'descripcion'}
                placeholder={'Descripción'}
                type={'text'}
                value={formik.values.descripcion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                touched={formik.touched.descripcion}
                errors={formik.errors.descripcion}
              />
            </Col>
          </FormGroup>

          <FormGroup className='mb-0' row>
          <Col xs={12} sm={12} md={{ size: 2, order: 0, offset: 3 }}>
                        <Button
                            color="success"
                            type="submit"
                            block
                            disabled={formik.isSubmitting}
                        >
                            Guardar
                        </Button>
                    </Col>
                    <Col xs={12} sm={12} md={{ size: 2, order: 0, offset: 0 }}>
                        <Button
                            color="primary"
                            block
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
