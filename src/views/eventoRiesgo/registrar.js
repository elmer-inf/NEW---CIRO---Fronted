import { useRef, useState } from 'react'
import Wizard from '@components/wizard'
import { ArrowRight } from 'react-feather'
import Address from './seccionFormulario/ImportesRelacionados'
import SocialLinks from './seccionFormulario/RiesgosRelacionados'
import PersonalInfo from './seccionFormulario/CategoriaNegocio'
import AccountDetails from './seccionFormulario/DatosIniciales'
import {Row, Col} from 'reactstrap'

const EventoRiesgoRegistrar = () => {
  const [stepper, setStepper] = useState(null)
  const ref = useRef(null)

  const steps = [
    {
      id: 'account-details',
      title: 'Datos Iniciales',
      //subtitle: 'Enter Your Account Details.',
      content: <AccountDetails stepper={stepper} type='wizard-horizontal' className='justify-content-center' />
    },
    {
      id: 'personal-info',
      title: 'Categoria y Línea de Negocio',
      //subtitle: 'Add Personal Info',
      content: <PersonalInfo stepper={stepper} type='wizard-horizontal' className='justify-content-center' />
    },
    {
      id: 'step-address',
      title: 'Importes Relacionados',
      //subtitle: 'Add Address',
      content: <Address stepper={stepper} type='wizard-horizontal' className='justify-content-center' />
    },
    {
      id: 'social-links',
      title: 'Riesgos Relacionados',
      //subtitle: 'Add Social Links',
      content: <SocialLinks stepper={stepper} type='wizard-horizontal' className='justify-content-center' />
    }
  ]

  return (
    <div className='horizontal-wizard justify-content-end'>
          <Wizard instance={el => setStepper(el)} ref={ref} steps={steps} />
    </div>
  )
}

export default EventoRiesgoRegistrar
