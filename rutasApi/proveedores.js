const { Router } = require('express')
const router = Router()

//TODO: LISTA DE PROVEEDORES
router.get('/list' , async ( req , res ) => {
    try{
        const {abrirConexionPOOL,cerrarConexionPOOL} = require('../conexiones/sqlServer')
        const {Request} = require('mssql')
        const conexion = await abrirConexionPOOL('ListaProveedores')
        const myRequest = new Request (conexion)
        const result = await myRequest.execute('pa_listaProveedores')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({list:result.recordset,opOK:true})
        }
        else{
            cerrarConexionPOOL()
            res.status(200).json({mensaje : 'Error en el resultado',opOK:false})
        }
    }
    catch (e) {
        cerrarConexionPOOL()
        res.status(200).json({mensaje : e.message,opOK:false})
    }
})

//TODO: INSERTA PROVEEDOR

router.post ('/insert' , async (req , res) => {
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const { nombreProveedor,apellidoProveedor,idTipoDocumento,nroDocProveedor,
            idTipoContribullente,nroCuitCuilProveedor,idDireccion,idTipoPersona
        } = req.body
        const conexion = await abrirConexionPOOL('insertProveedor')
        const { Request , VarChar , Int } = require('mssql')
        const myRequest = new Request (conexion)
        myRequest.input('nombreProveedor' , VarChar , nombreProveedor )
        myRequest.input('apellidoProveedor' , VarChar , apellidoProveedor )
        myRequest.input('idTipoDocumento' , Int , idTipoDocumento )
        myRequest.input('nroDocProveedor' , VarChar , nroDocProveedor )
        myRequest.input('idTipoContribullente' , Int , idTipoContribullente )
        myRequest.input('nroCuitCuilProveedor' , Int , nroCuitCuilProveedor )
        myRequest.input('idDireccion' , Int , idDireccion )
        myRequest.input('idTipoPersona' , Int , idTipoPersona )
        const result = await myRequest.execute ('pa_insertProveedor')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({ mensaje:'Proveedor guardado exitosamente',opOK:true})
        }
        else{
            cerrarConexionPOOL()
            res.status(200).json({mensaje:'Error al inesperado',opOK:false})
        }
    }
    catch(e){
        cerrarConexionPOOL()
        res.status(200).json({mensaje:e.message,opOK:false})
    }
})

//TODO: UPDATE PROVEEDOR

router.put('/update',async(req,res)=>{
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const { idProveedor,nombreProveedor,apellidoProveedor,idTipoDocumento,nroDocProveedor,
            idTipoContribullente,nroCuitCuilProveedor,idDireccion,idTipoPersona
        } = req.body        
        const conexion = await abrirConexionPOOL('updateProveedor')
        const mssql = require('mssql')
        const myRequest = new mssql.Request (conexion)
        myRequest.input('idProveedor' , mssql.Int , idProveedor )
        myRequest.input('nombreProveedor' , mssql.VarChar , nombreProveedor )
        myRequest.input('apellidoProveedor' , mssql.VarChar , apellidoProveedor )
        myRequest.input('idTipoDocumento' , mssql.Int , idTipoDocumento )
        myRequest.input('nroDocProveedor' , mssql.VarChar , nroDocProveedor )
        myRequest.input('idTipoContribullente' , Int , idTipoContribullente )
        myRequest.input('nroCuitCuilProveedor' , mssql.Int , nroCuitCuilProveedor )
        myRequest.input('idDireccion' , mssql.Int , idDireccion )
        myRequest.input('idTipoPersona' , mssql.Int , idTipoPersona )
        const result = await myRequest.execute ('pa_updateProveedor')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({ mensaje:'Proveedor modificado exitosamente',opOK:true})
        }
        else{
            cerrarConexionPOOL()
            res.status(200).json({mensaje:'Error al inesperado',opOK:false})
        }
    }
    catch(e){
        cerrarConexionPOOL()
        res.status(200).json({mensaje:e.message,opOK:false})
    }
})

//TODO: DELETE PROVEEDOR

router.post('/delete',async(req,res)=>{
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const {idProveedor} = req.body        
        const conexion = await abrirConexionPOOL('deleteProveedor')
        const mssql = require('mssql')
        const myRequest = new mssql.Request (conexion)
        myRequest.input('idProveedor' , mssql.Int , idProveedor )
        const result = await myRequest.execute ('pa_deleteProveedor')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({ mensaje:'Proveedor eliminado exitosamente',opOK:true})
        }
        else{
            cerrarConexionPOOL()
            res.status(200).json({mensaje:'Error al inesperado',opOK:false})
        }
    }
    catch(e){
        cerrarConexionPOOL()
        res.status(200).json({mensaje:e.message,opOK:false})
    }
})

module.exports = router