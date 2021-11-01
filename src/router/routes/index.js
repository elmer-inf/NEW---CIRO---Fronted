// ** Routes Imports
import AdministracionRoutes from './Administracion'
import EventoRiesgoRoutes from './EventoRiesgo'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
const DefaultRoute = '/eventoRiesgo/listar'

// ** Merge Routes
const Routes = [
    ...AdministracionRoutes,
    ...EventoRiesgoRoutes
  ]

export { DefaultRoute, TemplateTitle, Routes }