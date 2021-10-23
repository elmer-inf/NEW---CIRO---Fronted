import React from 'react'
import { UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import { MoreVertical, Edit, Trash, Eye, Plus } from 'react-feather'

const ActionFormatter = ({ cell, row, detailFunction, editFunction }) => {

    return (
      <div>
        <UncontrolledDropdown>
          <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
            <MoreVertical size={15} />
          </DropdownToggle>
          <DropdownMenu right>
            {/* <DropdownItem
              onClick={() => {
              // props.deleteRow(props.row)
              detailFunction(row) }}>
              <Eye className='mr-50' size={15} /> <span className='align-middle'>Mostrar</span>
            </DropdownItem> */}
            <DropdownItem 
                onClick={() => {
                editFunction(row) }}>
              <Edit className='mr-50' size={15} /> <span className='align-middle'>Editar</span>
            </DropdownItem>
            <DropdownItem href='/' onClick={e => e.preventDefault()}>
              <Trash className='mr-50' size={15} /> <span className='align-middle'>Eliminar</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    )
}

export default ActionFormatter