import { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Card, CardTitle, CardHeader, CardBody, Button } from 'reactstrap'
import { Plus } from 'react-feather'
import TablaEntidad from './TablaEntidad'
import TablaCargo from './TablaCargo'
import { useHistory } from 'react-router-dom'
//import { Link } from 'react-router-dom'
const PillsVertical = () => {
  const [active, setActive] = useState('1')
  const toggle = tab => {
    setActive(tab)
  }
 
  const history = useHistory()

  const redirect = () => { 
    history.push('/administracion/registrar')
  }

  return (
    <Row>
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
