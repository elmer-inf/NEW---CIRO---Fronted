import * as yup from 'yup'
import { Fragment } from 'react'
import classnames from 'classnames'
import { isObjEmpty } from '@utils'
import { useForm } from 'react-hook-form'
import { useFormik } from "formik"
import * as Yup from "yup"
import { ArrowLeft, ArrowRight } from 'react-feather'
import { yupResolver } from '@hookform/resolvers/yup'
import { Form, Label, Input, FormGroup, Row, Col, Button } from 'reactstrap'
import { CInputReact } from '../../../reusable/CInputReact'


const AccountDetails = ({ stepper, type }) => {
  const SignupSchema = yup.object().shape({
    [`username-${type}`]: yup.string().required(),
    [`email-${type}`]: yup.string().email().required(),
    [`password-val-${type}`]: yup.string().required(),
    'confirm-password-val': yup
      .string()
      .required()
      .oneOf([yup.ref(`password-val-${type}`), null], 'Passwords must match')
  })

  const { register, errors, handleSubmit, trigger } = useForm({
    resolver: yupResolver(SignupSchema)
  })

  const onSubmit = () => {
    trigger()
    if (isObjEmpty(errors)) {
      stepper.next()
    }
  }

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Datos Iniciales</h5>
        {/* <small className='text-muted'>Enter Your Account Details.</small> */}
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <FormGroup tag={Col} md='6' lg='3'>
            <Label className='form-label'>
              Fecha inicio
            </Label>
            {/* <CInputReact
              type={"text"}
              id={'descripcion'}
              placeholder={'Descripción'}
              value={formik.values.descripcion}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              touched={formik.touched.descripcion}
              errors={formik.errors.descripcion}
              rows={5}
            /> */}
            <Input
              name={`username-${type}`}
              id={`username-${type}`}
              placeholder='johndoe'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors[`username-${type}`] })}
            />
          </FormGroup>
          <FormGroup tag={Col} md='6' lg='3'>
            <Label className='form-label'>
              Hora inicio
            </Label>
            <Input
              name={`username-${type}`}
              id={`username-${type}`}
              placeholder='johndoe'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors[`username-${type}`] })}
            />
          </FormGroup>
          <FormGroup tag={Col} md='6' lg='3'>
            <Label className='form-label'>
              Fecha descubrimiento
            </Label>
            <Input
              name={`username-${type}`}
              id={`username-${type}`}
              placeholder='johndoe'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors[`username-${type}`] })}
            />
          </FormGroup>
          <FormGroup tag={Col} md='6' lg='3'>
            <Label className='form-label'>
              Hora descubrimiento
            </Label>
            <Input
              name={`username-${type}`}
              id={`username-${type}`}
              placeholder='johndoe'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors[`username-${type}`] })}
            />
          </FormGroup>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button.Ripple color='secondary' className='btn-prev' outline disabled>
            <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button.Ripple>
          <Button.Ripple type='submit' color='primary' className='btn-next'>
            <span className='align-middle d-sm-inline-block d-none'>Next</span>
            <ArrowRight size={14} className='align-middle ml-sm-25 ml-0'></ArrowRight>
          </Button.Ripple>
        </div>
      </Form>
    </Fragment>
  )
}

export default AccountDetails
