import axios from 'axios'
import { HOSTURI } from '../../../../config'
//import AuthService from 'src/views/authentication/AuthService';

const HOST = HOSTURI.endpoint_ciro
//const Auth = new AuthService();
//const header = Auth.getHeader();

//console.log('new header: ', header)

export const getTablaLista = async () => { 
    const uri = HOST.concat('v1/tablaLista/listar')
    const response = await axios.get(uri)
    return response
}


export const getTablaDescripcionNivel = async (idTabla) => { 
    const uri = HOST.concat('v1/tablaDescripcion/listarNivel1/',idTabla)
    const response = await axios.get(uri)
    return response
}

/**
 * This function do a request in order to save a Usuario Model.
 * @param  {Object} data
 */
 export const postListDescripcion = (data) => {
    const uri = HOST.concat('v1/tablaDescripcion/registrar')
    return axios.post(uri, data);

}



/**
 * This function do a request in order to save a Usuario Model.
 * @param  {Object} data
 */
 export const putListDescripcion = (id,data) => {
    const uri = HOST.concat('v1/tablaDescripcion/editar/'+id)
    return axios.PUT(uri, data);

}
