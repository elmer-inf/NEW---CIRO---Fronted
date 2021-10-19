import { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap'
import TableHoverAnimation from './TableHoverAnimation'

const PillsVertical = () => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    setActive(tab)
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
            Listado de Entidades    
              <Row>               
                <Col sm='12'>
                  <TableHoverAnimation />
                </Col>             
              </Row>
          </TabPane>
          <TabPane tabId='2'>
            Listado de Cargos
            
          </TabPane>
        </TabContent>
      </Col>
    </Row>
  )
}
export default PillsVertical
