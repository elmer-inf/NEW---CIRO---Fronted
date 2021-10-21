import React, { useState, useEffect } from 'react'
import { Fragment } from 'react'
import BreadCrumbs from '@components/breadcrumbs'
import { Card, CardHeader, CardBody, CardTitle, Button, Col, Label, Row, Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, FormGroup } from 'reactstrap'
import { MoreVertical, Edit, Trash, Eye, Plus } from 'react-feather'
import BootstrapTable from 'react-bootstrap-table-next';

import Select from 'react-select'
import { useHistory } from 'react-router-dom'
import { getTablaDescripcionNivel, getTablaLista } from './controller/AdminEventoController'
import { buildSelectTwo } from '../../../functions/Function'

import react from '@src/assets/images/icons/react.svg'
import vuejs from '@src/assets/images/icons/vuejs.svg'
import angular from '@src/assets/images/icons/angular.svg'
import bootstrap from '@src/assets/images/icons/bootstrap.svg'



const AdministracionEventosRiesgos = () => {


  const columns = [
    {
        dataField: 'id',
        text: 'Id',
        hidden: true
    },
    {
        dataField: 'clave',
        text: 'Clave',
        sort: true,
        //hidden : (cell,row) => row.clave === null ? true : false
       /*  filter: customFilter(),
        filterRenderer: (onFilter, column) =>
            <CFilterText placeholder={'Buscar'} onFilter={handleOnFilter} column={column} handleChildClick={handleChildClick} />, */
        //headerFormatter: typeFormatter,
    },
    {
        dataField: 'nombre',
        text: 'Nombre',
        sort: true,
       /*  filter: customFilter(),
        filterRenderer: (onFilter, column) =>
            <CFilterText placeholder={'Buscar'} onFilter={handleOnFilter} column={column} handleChildClick={handleChildClick} />, */
        //headerFormatter: typeFormatter
    },
    {
        dataField: 'descripcion',
        text: 'descripción',
        sort: true,
       /*  filter: customFilter(),
        filterRenderer: (onFilter, column) =>
            <CFilterText placeholder={'Buscar'} onFilter={handleOnFilter} column={column} handleChildClick={handleChildClick} />, */
        //headerFormatter: typeFormatter
    },
    {
         dataField: 'tablaLista.nombre_tabla',
         text: 'Nombrer tabla',
         sort: true,
        /*  filter: textFilter({
             className: 'test-classname',
             placeholder: 'Buscar',
         }),

         align: 'right', */
         //headerFormatter: typeFormatter
     },
    {
        dataField: 'x1',
        text: 'Acción',
        //formatter: (cell, row) => actionFormatter(cell, row)
    }
]

  const [tablaListaOptions, setTablaListaOptions] = useState([])
  const [dataApi, setDAtaApi] = useState([])







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

  const handleSelectOnChange = (result) => {
    console.log('select:  ', result)

    getTablaDescripcion(result.value);


  }


  const getTablaDescripcion = (idTabla) => {

    getTablaDescripcionNivel(idTabla)
    .then(res => {
      console.log('nivel 1: ', res.data)
      setDAtaApi(res.data)

    }).catch((error) => {
      console.log('Error al crear el modelo Persona: ', error)
      //notificationToast('error', Messages.notification.notOk)
    })

  }





  return (
    <div id=''>
      <Fragment>
        <BreadCrumbs breadCrumbTitle='Eventos de Riesgo' breadCrumbParent='Administración' breadCrumbActive='Eventos de Riesgo' />
        <Row className='pb-2 justify-content-center'>
          <Label sm='3' lg='2'>
            Seleccione tabla
          </Label>
          <Col sm='9' lg='4'>
            {/* <Select options={tablaListaOptions}/> */}
            <Select
              onChange={(e) => handleSelectOnChange(e)}
              placeholder={'Buscar . . .'}
              className='react-select'
              classNamePrefix='select'
              //defaultValue={tablaListaOptions[0]}
              options={tablaListaOptions}
              isLoading={true}
              isClearable={true}
            />
          </Col>
        </Row>

        <Row>
          <Col sm='12'>
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
              <CardBody className='pb-4'>
              <BootstrapTable
                                noDataIndication={'No se encontraron resultados'}
                                keyField='id'
                                data={dataApi}
                                columns={columns}
                                bordered={false}
                                striped={true}
                                condensed={true}
                                wrapperClasses="table-responsive"
                                //filter={filterFactory()}
                            />
              {/*   <Table className='table-hover-animation' responsive>
                  <thead>
                    <tr>
                      <th>Project</th>
                      <th>Client</th>
                      <th>Users</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img className='mr-75' src={angular} alt='angular' height='20' width='20' />
                        <span className='align-middle font-weight-bold'>Angular Project</span>
                      </td>
                      <td>Peter Charles</td>
                      <td>
                        aa
                      </td>
                      <td>
                        <Badge pill color='light-primary' className='mr-1'>
                          Active
                        </Badge>
                      </td>
                      <td>
                        <UncontrolledDropdown>
                          <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                            <MoreVertical size={15} />
                          </DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem href='/' onClick={e => e.preventDefault()}>
                              <Eye className='mr-50' size={15} /> <span className='align-middle'>Mostrar</span>
                            </DropdownItem>
                            <DropdownItem href='/' onClick={e => e.preventDefault()}>
                              <Edit className='mr-50' size={15} /> <span className='align-middle'>Editar</span>
                            </DropdownItem>
                            <DropdownItem href='/' onClick={e => e.preventDefault()}>
                              <Trash className='mr-50' size={15} /> <span className='align-middle'>Eliminar</span>
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                  </tbody>
                </Table> */}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Fragment>
    </div>
  )
}

export default AdministracionEventosRiesgos
