const { Router } = require('express')
const router = Router()

//TODO: LISTA DE TIPOS DE CONTRIBULLENTE
router.get('/list' , async ( req , res ) => {
    try{
        const {abrirConexionPOOL,cerrarConexionPOOL} = require('../conexiones/sqlServer')
        const {Request} = require('mssql')
        const conexion = await abrirConexionPOOL('ListaTiposContribullente')
        const myRequest = new Request (conexion)
        const result = await myRequest.execute('pa_listaTiposContribullente')
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

//TODO: INSERTA TIPO DE CONTRIBULLENTE

router.post ('/insert' , async (req , res) => {
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const { nombreTipoContribullente , descripcionTipoContribullente } = req.body
        const conexion = await abrirConexionPOOL('insertTipoContribullente')
        const { Request , VarChar } = require('mssql')
        const myRequest = new Request (conexion)
        myRequest.input('nombreTipoContribullente' , VarChar , nombreTipoContribullente )
        myRequest.input('descripcionTipoContribullente' , VarChar , descripcionTipoContribullente )
        const result = await myRequest.execute ('pa_insertTipoContribullente')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({ mensaje:'Tipo de contribullente guardado exitosamente'})
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

//TODO: UPDATE TIPO DE CONTRIBULLENTE

router.put('/update',async(req,res)=>{
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const {nombreTipoContribullente,descripcionTipoContribullente,idTipoContribullente} = req.body        
        const conexion = await abrirConexionPOOL('updateTipoContribullente')
        const mssql = require('mssql')
        const myRequest = new mssql.Request (conexion)
        myRequest.input('nombreTipoContribullente' , mssql.VarChar , nombreTipoContribullente )
        myRequest.input('descripcionTipoContribullente' , mssql.VarChar , descripcionTipoContribullente )
        myRequest.input('idTipoContribullente' , mssql.Int , idTipoContribullente )
        const result = await myRequest.execute ('pa_updateTipoContribullente')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({ mensaje:'Tipo de contribullente modificado exitosamente'})
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

//TODO: DELETE TIPO DE CONTRIBULLENTE

router.post('/delete',async(req,res)=>{
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const {idTipoContribullente} = req.body        
        const conexion = await abrirConexionPOOL('deleteTipoContribullente')
        const mssql = require('mssql')
        const myRequest = new mssql.Request (conexion)
        myRequest.input('idTipoContribullente' , mssql.Int , idTipoContribullente )
        const result = await myRequest.execute ('pa_deleteTipoContribullente')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({ mensaje:'Tipo de contribullente eliminado exitosamente'})
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