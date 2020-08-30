const { Router } = require('express')
const router = Router()

//TODO: LISTA DE CLIENTES
router.get('/list' , async ( req , res ) => {
    try{
        const {abrirConexionPOOL,cerrarConexionPOOL} = require('../conexiones/sqlServer')
        const {Request} = require('mssql')
        const conexion = await abrirConexionPOOL('ListaClientes')
        const myRequest = new Request (conexion)
        const result = await myRequest.execute('pa_listaClientes')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json(result.recordset)
        }
        else{
            cerrarConexionPOOL()
            res.status(403).json({mensaje : 'Error en el resultado'})
        }
    }
    catch (e) {
        cerrarConexionPOOL()
        res.status(403).json({mensaje : e.message})
    }
})

//TODO: INSERTA CLIENTE

router.post ('/insert' , async (req , res) => {
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const { nombreCliente,apellidoCliente,idTipoDocumento,nroDoc,
            idTipoContribullente,nroCuitCuil,idDireccion,idTipoPersona
        } = req.body
        const conexion = await abrirConexionPOOL('insertCliente')
        const { Request , VarChar , Int } = require('mssql')
        const myRequest = new Request (conexion)
        myRequest.input('nombreCliente' , VarChar , nombreCliente )
        myRequest.input('apellidoCliente' , VarChar , apellidoCliente )
        myRequest.input('idTipoDocumento' , Int , idTipoDocumento )
        myRequest.input('nroDoc' , VarChar , nroDoc )
        myRequest.input('idTipoContribullente' , Int , idTipoContribullente )
        myRequest.input('nroCuitCuil' , Int , nroCuitCuil )
        myRequest.input('idDireccion' , Int , idDireccion )
        myRequest.input('idTipoPersona' , Int , idTipoPersona )
        const result = await myRequest.execute ('pa_insertCliente')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({ mensaje:'Cliente guardado exitosamente'})
        }
        else{
            cerrarConexionPOOL()
            res.status(403).json({mensaje:'Error al inesperado'})
        }
    }
    catch(e){
        cerrarConexionPOOL()
        res.status(403).json({mensaje:e.message})
    }
})

//TODO: UPDATE CLIENTE

router.put('/update',async(req,res)=>{
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const { idCliente,nombreCliente,apellidoCliente,idTipoDocumento,nroDoc,
            idTipoContribullente,nroCuitCuil,idDireccion,idTipoPersona
        } = req.body        
        const conexion = await abrirConexionPOOL('updateCliente')
        const mssql = require('mssql')
        const myRequest = new mssql.Request (conexion)
        myRequest.input('idCliente' , mssql.Int , idCliente )
        myRequest.input('nombreCliente' , mssql.VarChar , nombreCliente )
        myRequest.input('apellidoCliente' , mssql.VarChar , apellidoCliente )
        myRequest.input('idTipoDocumento' , mssql.Int , idTipoDocumento )
        myRequest.input('nroDoc' , mssql.VarChar , nroDoc )
        myRequest.input('idTipoContribullente' , Int , idTipoContribullente )
        myRequest.input('nroCuitCuil' , mssql.Int , nroCuitCuil )
        myRequest.input('idDireccion' , mssql.Int , idDireccion )
        myRequest.input('idTipoPersona' , mssql.Int , idTipoPersona )
        const result = await myRequest.execute ('pa_updateCliente')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({ mensaje:'Cliente modificado exitosamente'})
        }
        else{
            cerrarConexionPOOL()
            res.status(403).json({mensaje:'Error al inesperado'})
        }
    }
    catch(e){
        cerrarConexionPOOL()
        res.status(403).json({mensaje:e.message})
    }
})

//TODO: DELETE CLIENTE

router.post('/delete',async(req,res)=>{
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const {idCliente} = req.body        
        const conexion = await abrirConexionPOOL('deleteCliente')
        const mssql = require('mssql')
        const myRequest = new mssql.Request (conexion)
        myRequest.input('idCliente' , mssql.Int , idCliente )
        const result = await myRequest.execute ('pa_deleteCliente')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({ mensaje:'Cliente eliminado exitosamente'})
        }
        else{
            cerrarConexionPOOL()
            res.status(403).json({mensaje:'Error al inesperado'})
        }
    }
    catch(e){
        cerrarConexionPOOL()
        res.status(403).json({mensaje:e.message})
    }
})

module.exports = router