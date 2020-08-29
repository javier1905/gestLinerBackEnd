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
            res.status(200).json({ mensaje:'Tipo de persona guardada exitosamente'})
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
            res.status(200).json({ mensaje:'Tipo de persona modificada exitosamente'})
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
            res.status(200).json({ mensaje:'Tipo de persona eliminada exitosamente'})
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