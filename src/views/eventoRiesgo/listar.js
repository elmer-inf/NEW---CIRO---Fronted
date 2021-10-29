import React, { Fragment, useState, useEffect } from 'react'
import BreadCrumbs from '@components/breadcrumbs'
import { Card, CardHeader, CardBody, CardTitle, Button, Col, Label, Row, Badge} from 'reactstrap'
import { Plus, AlertCircle, Check, Pause, X } from 'react-feather'
import BootstrapTable from 'react-bootstrap-table-next';
import ActionFormatter from '../../../src/reusable/ActionFormatter';

import Select from 'react-select'
import { useHistory } from 'react-router-dom'
import { getTablaDescripcionNivel, getTablaLista } from './controller/EventoController'
import { buildSelectTwo } from '../../functions/Function'
import Alert from 'reactstrap/lib/Alert';

const AdministracionEventosRiesgos = () => {

  const [rowTable, setRowTable] = useState(null)

  const columns = [
    {
        dataField: 'id',
        text: 'Id',
        sort: true,
        //hidden: true
    }, {
        dataField: 'codigo',
        text: 'Código',
        sort: true,
        //hidden : (cell,row) => row.clave === null ? true : false
       /*  filter: customFilter(),
        filterRenderer: (onFilter, column) =>
            <CFilterText placeholder={'Buscar'} onFilter={handleOnFilter} column={column} handleChildClick={handleChildClick} />, */
        //headerFormatter: typeFormatter,
    }, {
        dataField: 'tipoEvento',
        text: 'Tipo',
        sort: true,
       /*  filter: customFilter(),
        filterRenderer: (onFilter, column) =>
            <CFilterText placeholder={'Buscar'} onFilter={handleOnFilter} column={column} handleChildClick={handleChildClick} />, */
        //headerFormatter: typeFormatter
    }, {
        dataField: 'fechaIni',
        text: 'Fecha inicio',
        sort: true,
       /*  filter: customFilter(),
        filterRenderer: (onFilter, column) =>
            <CFilterText placeholder={'Buscar'} onFilter={handleOnFilter} column={column} handleChildClick={handleChildClick} />, */
        //headerFormatter: typeFormatter
    }, {
         dataField: 'fechaDesc',
         text: 'Fecha descubrimiento',
         sort: true,
        /*  filter: textFilter({
             className: 'test-classname',
             placeholder: 'Buscar',
         }),
         align: 'right', */
         //headerFormatter: typeFormatter
     }, {
        dataField: 'areaID.nombre',
        text: 'Área',
        sort: true,
       /*  filter: textFilter({
            className: 'test-classname',
            placeholder: 'Buscar',
        }),
        align: 'right', */
        //headerFormatter: typeFormatter
    }, {
        dataField: 'cargoId.nombre',
        text: 'Cargo involucrado',
        sort: true,
       /*  filter: textFilter({
            className: 'test-classname',
            placeholder: 'Buscar',
        }),
        align: 'right', */
        //headerFormatter: typeFormatter
    }, {
        dataField: 'estadoRegistro',
        text: 'Estado',
        sort: true,
        formatter: colorEstado
       /*  filter: textFilter({
            className: 'test-classname',
            placeholder: 'Buscar',
        }),
        align: 'right', */
        //headerFormatter: typeFormatter
    }, {
        dataField: 'acciones',
        text: 'Acciones',
        formatter: (cell, row) => actionFormatter(cell, row)
    }
  ]

  function colorEstado(cell, row) {
    if (cell == 'Observado') {
      return (
        <Badge color='light-danger'>
          <Pause size={15} className='align-middle'/>
          <span className='align-middle ml-25'>{ cell }</span>
        </Badge>
      );
    }
    if (cell == 'Autorizado') {
      return (
        <Badge color='light-success'>
          <Check size={15} className='align-middle'/>
          <span className='align-middle ml-25'>{ cell }</span>
        </Badge>
      );
    }
    if (cell == 'Pendiente') {
      return (
        <Badge color='light-warning'>
          <AlertCircle size={15} className='align-middle'/>
          <span className='align-middle ml-25'>{ cell }</span>
        </Badge>
      );
    }
    if (cell == 'Descartado') {
      return (
        <Badge color='danger'>
          <X size={15} className='align-middle'/>
          <span className='align-middle ml-25'>{ cell }</span>
        </Badge>
      );
    }

    return (
      <span>{ cell }</span>
    );
  }

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
        //const options = buildSelectTwo(res.data, 'id', 'codigo', false)
        console.log('El response de tabla: ', res.data)
        //console.log('options : ', options)
        setTablaListaOptions(res.data)
      }).catch((error) => {
        console.log('Error: ', error)
        //notificationToast('error', Messages.notification.notOk)
      })
  }

  useEffect(() => {
    callApi()
  }, [])


  /* LISTA TABLA DESCRIPCION despendiento de seleccion tabla lista*/
/*   const handleSelectOnChange = (result) => {
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
  } */


  return (
    <div id='' className='table-hover-animation'>
      <Fragment>
        <BreadCrumbs breadCrumbTitle='Listado de Eventos de Riesgo' breadCrumbParent='Eventos de Riesgo' breadCrumbActive='Listado de Eventos de Riesgo' />
        <Row>
          
          <Col sm='12'>
            <Card>
              <CardHeader>
                <CardTitle>Eventos de Riesgo</CardTitle>
                <Button className='ml-2' color='primary' onClick={redirect}>
                  <Plus size={15} />
                  <span className='align-middle ml-50'>Registrar</span>
                </Button>
              </CardHeader>
              <CardBody className='pb-4'>
              <BootstrapTable
                  bootstrap4={true}
                  sort={ { dataField: 'id', order: 'desc' } }
                  noDataIndication={'No se encontraron resultados'}
                  keyField='id'
                  data={tablaListaOptions}
                  columns={columns}
                  bordered={false}
                  striped={true}
                  hover={false}
                  condensed={false}
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
