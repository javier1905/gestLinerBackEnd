const { Router } = require('express')
const router = Router()

//TODO: LISTA DE MARCAS
router.get('/list' , async ( req , res ) => {
    try{
        const {abrirConexionPOOL,cerrarConexionPOOL} = require('../conexiones/sqlServer')
        const {Request} = require('mssql')
        const conexion = await abrirConexionPOOL('ListaMarcas')
        const myRequest = new Request (conexion)
        const result = await myRequest.execute('pa_listaMarcas')
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

//TODO: INSERTA MARCA

router.post ('/insert' , async (req , res) => {
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const {nombreMarca} = req.body
        const conexion = await abrirConexionPOOL('insertMarca')
        const { Request , VarChar } = require('mssql')
        const myRequest = new Request (conexion)
        myRequest.input('nombreMarca' , VarChar , nombreMarca )
        const result = await myRequest.execute ('pa_insertMarca')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({ mensaje:'Marca guardada exitosamente'})
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

//TODO: UPDATE MARCA

router.put('/update',async(req,res)=>{
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const {nombreMarca,idMarca} = req.body        
        const conexion = await abrirConexionPOOL('updateMarca')
        const mssql = require('mssql')
        const myRequest = new mssql.Request (conexion)
        myRequest.input('nombreMarca' , mssql.VarChar , nombreMarca )
        myRequest.input('idMarca' , mssql.Int , idMarca )
        const result = await myRequest.execute ('pa_updateMarca')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({ mensaje:'Marca modificada exitosamente'})
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

//TODO: DELETE MARCA

router.post('/delete',async(req,res)=>{
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const {idMarca} = req.body        
        const conexion = await abrirConexionPOOL('deleteMarca')
        const mssql = require('mssql')
        const myRequest = new mssql.Request (conexion)
        myRequest.input('idMarca' , mssql.Int , idMarca )
        const result = await myRequest.execute ('pa_deleteMarca')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({ mensaje:'Marca eliminada exitosamente'})
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