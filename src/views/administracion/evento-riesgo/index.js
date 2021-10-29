import React, { Fragment, useState, useEffect } from 'react'
import BreadCrumbs from '@components/breadcrumbs'
import { Card, CardHeader, CardBody, CardTitle, Button, Col, Label, Row} from 'reactstrap'
import { Plus } from 'react-feather'
import BootstrapTable from 'react-bootstrap-table-next';
import ActionFormatter from '../../../../src/reusable/ActionFormatter';

import Select from 'react-select'
import { useHistory } from 'react-router-dom'
import { getTablaDescripcionNivel, getTablaLista } from './controller/AdminEventoController'
import { buildSelectTwo } from '../../../functions/Function'

const AdministracionEventosRiesgos = () => {

  const [rowTable, setRowTable] = useState(null)

  const columns = [
    {
        dataField: 'id',
        text: 'Id',
        hidden: true
    }, {
        dataField: 'clave',
        text: 'Clave',
        sort: true,
        //hidden : (cell,row) => row.clave === null ? true : false
       /*  filter: customFilter(),
        filterRenderer: (onFilter, column) =>
            <CFilterText placeholder={'Buscar'} onFilter={handleOnFilter} column={column} handleChildClick={handleChildClick} />, */
        //headerFormatter: typeFormatter,
    }, {
        dataField: 'nombre',
        text: 'Nombre',
        sort: true,
       /*  filter: customFilter(),
        filterRenderer: (onFilter, column) =>
            <CFilterText placeholder={'Buscar'} onFilter={handleOnFilter} column={column} handleChildClick={handleChildClick} />, */
        //headerFormatter: typeFormatter
    }, {
        dataField: 'descripcion',
        text: 'descripción',
        sort: true,
       /*  filter: customFilter(),
        filterRenderer: (onFilter, column) =>
            <CFilterText placeholder={'Buscar'} onFilter={handleOnFilter} column={column} handleChildClick={handleChildClick} />, */
        //headerFormatter: typeFormatter
    }, {
         dataField: 'tablaLista.nombre_tabla',
         text: 'Nombrer tabla',
         sort: true,
        /*  filter: textFilter({
             className: 'test-classname',
             placeholder: 'Buscar',
         }),
         align: 'right', */
         //headerFormatter: typeFormatter
     },{
        dataField: 'acciones',
        text: 'Acciones',
        formatter: (cell, row) => actionFormatter(cell, row)
    }
  ]

  const actionFormatter = (cell, row) => {
    return <ActionFormatter cell={cell} row={row} detailFunction={detailsRow} editFunction={editRow} />
  }

  const detailsRow = (row) => {
    console.log(row)
    closeModal();
    setRowTable(row);
    //return <DetailRestForm row={row} mod={true}/>
  }
  const editRow = (row) => {
    console.log(row)
    setRowTable(row);
    history.push('/administracion/editar/' + row.id);
  }

  const [tablaListaOptions, setTablaListaOptions] = useState([])
  const [dataApi, setDAtaApi] = useState([])
  const history = useHistory()

  const redirect = () => {
    history.push('/administracion/registrar')
  }
  /* LISTA TABLA LISTA */
  const callApi = () => {
    getTablaLista()
      .then(res => {
        const options = buildSelectTwo(res.data, 'id', 'nombre_tabla', false)
        console.log('El response de tabla: ', res.data)
        console.log('options : ', options)
        setTablaListaOptions(options)
      }).catch((error) => {
        console.log('Error: ', error)
        //notificationToast('error', Messages.notification.notOk)
      })
  }

  useEffect(() => {
    callApi()
  }, [])


  /* LISTA TABLA DESCRIPCION despendiento de seleccion tabla lista*/
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
      console.log('Error: ', error)
      //notificationToast('error', Messages.notification.notOk)
    })
  }


  return (
    <div id='' className='table-hover-animation'>
      <Fragment>
        <BreadCrumbs breadCrumbTitle='Eventos de Riesgo' breadCrumbParent='Administración' breadCrumbActive='Eventos de Riesgo' />
        <Card>
          <CardBody>
            <Row className='justify-content-center'>
              <Label sm='3' lg='2' className='font-weight-bold'>
                Seleccione Tabla
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
                />
              </Col>
            </Row>
          </CardBody>
        </Card>

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
                  hover={false}
                  condensed={true}
                  wrapperClasses="table-responsive"
                  //filter={filterFactory()}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Fragment>
    </div>
  )
}

export default AdministracionEventosRiesgos
