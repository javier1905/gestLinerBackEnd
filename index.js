const express = require('express')
const cors = require('cors')
var morgan

if(process.env.NODE_ENV === 'development'){
    require('colors')
    morgan = require('morgan')
}
// console.log(process.env.NODE_ENV)

const servidor = express()
servidor.use(cors())

// middelware

servidor.use(express.json())
servidor.use(express.urlencoded({extended: true}))
// servidor.use(require('./rutasApi/authAccesos/authAllRouter'))


if(process.env.NODE_ENV === 'development' ) {  servidor.use(morgan('dev')) }

servidor.use('/api/logueo',require('./rutasApi/Logueo'))
// servidor.use('/api/authRouterReact/admin',require('./rutasApi/authAccesosReact/authAdminRouterReact'))
// servidor.use('/api/authRouterReact/nivel1',require('./rutasApi/authAccesosReact/authNivel1RouterReact'))
// servidor.use('/api/authRouterReact/nivel2',require('./rutasApi/authAccesosReact/authNivel2RouterReact'))
// servidor.use('/api/authRouterReact/nivel3',require('./rutasApi/authAccesosReact/authNivel3RouterReact'))
// servidor.use('/api/authRouterReact/nivel4',require('./rutasApi/authAccesosReact/authNivel4RouterReact'))
// servidor.use('/api/authRouterReact/nivel5',require('./rutasApi/authAccesosReact/authNivel5RouterReact'))
// servidor.use('/api/usuarios',require('./rutasApi/authAccesos/authAdminRouter'),require('./rutasApi/usuarios'))
servidor.use('/api/usuarios',require('./rutasApi/usuarios'))
servidor.use('/api/categorias' , require('./rutasApi/categorias'))
servidor.use('/api/unidadesMedida' , require('./rutasApi/unidadesMedida'))
servidor.use('/api/direcciones' , require('./rutasApi/direcciones'))
servidor.use('/api/marcas' , require('./rutasApi/marcas'))
servidor.use('/api/productos' , require('./rutasApi/productos'))
servidor.use('/api/articulos' , require('./rutasApi/articulos'))
servidor.use('/api/tiposDocumento' , require('./rutasApi/tiposDocumento'))
servidor.use('/api/tiposPersona' , require('./rutasApi/tiposPersona'))
servidor.use('/api/tiposContribullente' , require('./rutasApi/tiposContribullente'))
servidor.use('/api/autentificasion',require('./rutasApi/Autentificasion'))
//

//Settings
servidor.set('port',process.env.PORT || 5000)

servidor.listen(servidor.get('port'),(m,e)=>{
    if(e){console.log(e)}
    else {
        if(process.env.NODE_ENV === 'development'){
            console.log('Servidor corriendo en el PUERTO'.yellow,servidor.get('port'))
        }
        else{
            console.log('Servidor corriendo en el PUERTO',servidor.get('port'))
        }
    }
})