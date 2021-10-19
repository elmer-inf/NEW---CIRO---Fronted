//import CIcon from '@coreui/icons-react';
import React from 'react'
//import { Button } from 'reactstrap';
//import { icons } from 'src/assets/icons';
import { CDropdown, CDropdownMenu, CDropdownToggle, CDropdownItem, CTooltip } from '@coreui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faEdit, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';



const ActionFormatter = ({ cell, row, detailFunction, editFunction }) => {
    //console.log("row, ",  row);
    //const detailIcon = ["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M268.279,496c-67.574,0-130.978-26.191-178.534-73.745S16,311.293,16,243.718A252.252,252.252,0,0,1,154.183,18.676a24.44,24.44,0,0,1,34.46,28.958,220.12,220.12,0,0,0,54.8,220.923A218.746,218.746,0,0,0,399.085,333.2h0a220.2,220.2,0,0,0,65.277-9.846,24.439,24.439,0,0,1,28.959,34.461A252.256,252.256,0,0,1,268.279,496ZM153.31,55.781A219.3,219.3,0,0,0,48,243.718C48,365.181,146.816,464,268.279,464a219.3,219.3,0,0,0,187.938-105.31,252.912,252.912,0,0,1-57.13,6.513h0a250.539,250.539,0,0,1-178.268-74.016,252.147,252.147,0,0,1-67.509-235.4Z' class='ci-primary'/>"];
    //const editIcon = ["512 512", "<path fill='var(--ci-primary-color, currentColor)' d='M29.663,482.25l.087.087a24.847,24.847,0,0,0,17.612,7.342,25.178,25.178,0,0,0,8.1-1.345l142.006-48.172,272.5-272.5A88.832,88.832,0,0,0,344.334,42.039l-272.5,272.5L23.666,456.541A24.844,24.844,0,0,0,29.663,482.25Zm337.3-417.584a56.832,56.832,0,0,1,80.371,80.373L411.5,180.873,331.127,100.5ZM99.744,331.884,308.5,123.127,388.873,203.5,180.116,412.256,58.482,453.518Z' class='ci-primary'/>'"];

    return (
        <div>
            <CDropdown variant="btn-group">
                <CTooltip content="Más opciones" placement="top" >
                    <CDropdownToggle color="secondary" style={{ fontSize: '10px' }}>
                        <FontAwesomeIcon icon={faEllipsisV} />
                    </CDropdownToggle>
                </CTooltip>
                <CDropdownMenu>
                    <CDropdownItem onClick={() => {
                        // props.deleteRow(props.row)
                        detailFunction(row)
                    }} >
                        <FontAwesomeIcon icon={faExternalLinkAlt} />&nbsp; Detalles
                    </CDropdownItem>

                    <CDropdownItem href="#" onClick={() => {
                        editFunction(row)
                    }} >
                        <FontAwesomeIcon icon={faEdit} />&nbsp; Editar
                    </CDropdownItem>
                </CDropdownMenu>
            </CDropdown>
        </div>

    )
}

export default ActionFormatter


/*   <div>
           <Button color="secondary" outline style={{ textAling: 'center' }} onClick={() => detailFunction(row)}>{/* <CIcon content = {icons.cilNotes}  size={'sm'}/> }/
           <FontAwesomeIcon icon={faSave} />
           </Button>&nbsp;&nbsp;
           <Button color="info" outline style={{ textAling: 'center' }} onClick={() => editFunction(row)}>{/* <CIcon content = {editIcon}  size={'sm'}/> /}
               <FontAwesomeIcon icon={faTimesCircle} />
           </Button>
       </div> */