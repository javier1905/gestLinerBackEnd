const { Router } = require('express')
const router = Router()

//TODO: LISTA DE TIPOS DE PERSONA
router.get('/list' , async ( req , res ) => {
    try{
        const {abrirConexionPOOL,cerrarConexionPOOL} = require('../conexiones/sqlServer')
        const {Request} = require('mssql')
        const conexion = await abrirConexionPOOL('ListaTiposPersona')
        const myRequest = new Request (conexion)
        const result = await myRequest.execute('pa_listaTiposPersona')
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

//TODO: INSERTA TIPO DE PERSONA

router.post ('/insert' , async (req , res) => {
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const {nombreTipoPersona} = req.body
        const conexion = await abrirConexionPOOL('insertTipoPersona')
        const { Request , VarChar } = require('mssql')
        const myRequest = new Request (conexion)
        myRequest.input('nombreTipoPersona' , VarChar , nombreTipoPersona )
        const result = await myRequest.execute ('pa_insertTipoPersona')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({ mensaje:'Tipo de persona guardada exitosamente',opOK:true})
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

//TODO: UPDATE TIPO DE PERSONA

router.put('/update',async(req,res)=>{
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const {nombreTipoPersona,idTipoPersona} = req.body        
        const conexion = await abrirConexionPOOL('updateTipoPersona')
        const mssql = require('mssql')
        const myRequest = new mssql.Request (conexion)
        myRequest.input('nombreTipoPersona' , mssql.VarChar , nombreTipoPersona )
        myRequest.input('idTipoPersona' , mssql.Int , idTipoPersona )
        const result = await myRequest.execute ('pa_updateTipoPersona')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({ mensaje:'Tipo de persona modificada exitosamente',opOK:true})
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

//TODO: DELETE TIPO DE PERSONA

router.post('/delete',async(req,res)=>{
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const {idTipoPersona} = req.body        
        const conexion = await abrirConexionPOOL('deleteTipoPersona')
        const mssql = require('mssql')
        const myRequest = new mssql.Request (conexion)
        myRequest.input('idTipoPersona' , mssql.Int , idTipoPersona )
        const result = await myRequest.execute ('pa_deleteTipoPersona')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({ mensaje:'Tipo de persona eliminada exitosamente',opOK:true})
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