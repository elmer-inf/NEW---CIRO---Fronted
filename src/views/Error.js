import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import errorImg from '@src/assets/images/pages/error.svg'
import imgLogo from '@src/assets/images/logo/logo-atc.png'
import imgLogoNombre from '@src/assets/images/logo/nombre-logo.png'

import '@styles/base/pages/page-misc.scss'

const Error = () => {
  return (
    <div className='misc-wrapper'>
      <a className='brand-logo' href='/'>
        <img src={imgLogo} height='50px' />
        <img src={imgLogoNombre} height='20' className='pl-2 align-self-center'/>
        {/* <h2 className='brand-text text-primary ml-1'>Vuexy</h2> */}
      </a>
      <div className='misc-inner p-2 p-sm-3'>
        <div className='w-100 text-center'>
          <h1 className='mb-1'>Página no encontrada 🕵🏻‍♀️</h1>
          <p className='mb-2'>Oops! 😖 La URL solicitada no se encontró en este servidor.</p>
          <Button.Ripple tag={Link} to='/' color='primary' className='btn-sm-block mb-2'>
            De vuelta al Inicio
          </Button.Ripple>
          <img className='img-fluid' src={errorImg} alt='Not authorized page' />
        </div>
      </div>
    </div>
  )
}
export default Error