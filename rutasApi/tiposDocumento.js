const { Router } = require('express')
const router = Router()

//TODO: LISTA DE TIPOS DE DOCUMENTO
router.get('/list' , async ( req , res ) => {
    try{
        const {abrirConexionPOOL,cerrarConexionPOOL} = require('../conexiones/sqlServer')
        const {Request} = require('mssql')
        const conexion = await abrirConexionPOOL('ListaTiposDocumento')
        const myRequest = new Request (conexion)
        const result = await myRequest.execute('pa_listaTiposDocumento')
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

//TODO: INSERTA TIPO DE DOCUMENTO

router.post ('/insert' , async (req , res) => {
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const {nombreTipoDocumento} = req.body
        const conexion = await abrirConexionPOOL('insertTipoDocumento')
        const { Request , VarChar } = require('mssql')
        const myRequest = new Request (conexion)
        myRequest.input('nombreTipoDocumento' , VarChar , nombreTipoDocumento )
        const result = await myRequest.execute ('pa_insertTipoDocumento')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({ mensaje:'Tipo de documento guardado exitosamente',opOK:true})
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

//TODO: UPDATE TIPO DE DOCUMENTO

router.put('/update',async(req,res)=>{
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const {nombreTipoDocumento,idTipoDocumento} = req.body        
        const conexion = await abrirConexionPOOL('updateTipoDocumento')
        const mssql = require('mssql')
        const myRequest = new mssql.Request (conexion)
        myRequest.input('nombreTipoDocumento' , mssql.VarChar , nombreTipoDocumento )
        myRequest.input('idTipoDocumento' , mssql.Int , idTipoDocumento )
        const result = await myRequest.execute ('pa_updateTipoDocumento')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({ mensaje:'Tipo de documento modificado exitosamente',opOK:true})
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

//TODO: DELETE TIPO DE DOCUMENTO

router.post('/delete',async(req,res)=>{
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const {idTipoDocumento} = req.body        
        const conexion = await abrirConexionPOOL('deleteTipoDocumento')
        const mssql = require('mssql')
        const myRequest = new mssql.Request (conexion)
        myRequest.input('idTipoDocumento' , mssql.Int , idTipoDocumento )
        const result = await myRequest.execute ('pa_deleteTipoDocumento')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({ mensaje:'Tipo de documento eliminado exitosamente',opOK:true})
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