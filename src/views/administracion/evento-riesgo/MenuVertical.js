import React, { useState, useEffect } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Card, CardTitle, CardHeader, CardBody, Button, Label } from 'reactstrap'
import { Plus } from 'react-feather'
import TablaEntidad from './TablaEntidad'
import TablaCargo from './TablaCargo'
import BootstrapTable from 'react-bootstrap-table-next'
import { useHistory } from 'react-router-dom'
import { getTablaLista } from './controller/AdminEventoController'
import { buildSelectTwo } from '../../../functions/Function'
import Select from 'react-select'


const PillsVertical = () => {
  const [active, setActive] = useState('1')
  const [tablaListaOptions, setTablaListaOptions] = useState([])
  const toggle = tab => {
    setActive(tab)
  }

  const history = useHistory()

  const redirect = () => {
    history.push('/administracion/registrar')
  }
  const callApi = () => {
    getTablaLista()
      .then(res => {
        const options = buildSelectTwo(res.data, 'id', 'nombre_tabla', false)
        console.log('****: ', res.data)
        console.log('options : ', options)
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
    <Row>
      <Label sm='3'>
        Seleccione tabla
      </Label>
      <Col sm='9'>
        {/* <Select options={tablaListaOptions}/> */}
        <Select
          placeholder={'Buscar . . .'} 
          className='react-select'
          classNamePrefix='select'
          //defaultValue={tablaListaOptions[0]}
          options={tablaListaOptions}
          isLoading={true}
          isClearable={false}
        />
      </Col>

      <Col md='2' sm='12'>
        <Nav pills vertical>
          <NavItem>
            <NavLink
              active={active === '1'}
              onClick={() => {
                toggle('1')
              }}
            >
              Entidades
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={active === '2'}
              onClick={() => {
                toggle('2')
              }}
            >
              Cargos
            </NavLink>
          </NavItem>
        </Nav>
      </Col>
      <Col md='10' sm='12'>
        <TabContent activeTab={active}>
          <TabPane tabId='1'>
            <Card>
              <CardHeader>
                <CardTitle>Listado de Entidades</CardTitle>
                <Button className='ml-2' color='primary' onClick={redirect}>
                  <Plus size={15} />
                  <span className='align-middle ml-50'>Registrar</span>
                </Button>
                {/*  <Button.Ripple tag={Link} to='/apps/invoice/add' color='primary'>
                  Add Record
                </Button.Ripple> */}
              </CardHeader>
              <CardBody>
                <TablaEntidad />
              </CardBody>
            </Card>
          </TabPane>
          <TabPane tabId='2'>
            <TabPane tabId='1'>
              <Card>
                <CardHeader>
                  <CardTitle>Listado de Cargos</CardTitle>
                  <Button className='ml-2' color='primary'>
                    <Plus size={15} />
                    <span className='align-middle ml-50'>Registrar</span>
                  </Button>
                </CardHeader>
                <CardBody>
                  <TablaCargo />
                </CardBody>
              </Card>
            </TabPane>
          </TabPane>
        </TabContent>
      </Col>
    </Row>
  )
}
export default PillsVertical
