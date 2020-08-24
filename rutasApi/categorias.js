const { Router } = require('express')
const router = Router()

//TODO: LISTA DE CATEGORIAS
router.get('/list' , async ( req , res ) => {
    try{
        const {abrirConexionPOOL,cerrarConexionPOOL} = require('../conexiones/sqlServer')
        const {Request} = require('mssql')
        const conexion = await abrirConexionPOOL('ListaCategorias')
        const myRequest = new Request (conexion)
        const result = await myRequest.execute('pa_listaCategorias')
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

//TODO: INSERTA CATEGORA

router.post ('/insert' , async (req , res) => {
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const { nombreCategoria , descripcionCategoria } = req.body
        const conexion = await abrirConexionPOOL('insertCategoria')
        const { Request , VarChar } = require('mssql')
        const myRequest = new Request (conexion)
        myRequest.input('nombreCategoria' , VarChar , nombreCategoria )
        myRequest.input('descripcionCategoria' , VarChar , descripcionCategoria )
        const result = await myRequest.execute ('pa_insertCategoria')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({ mensaje:'Categoria guardada exitosamente'})
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

//TODO: UPDATE CATEGORIA

router.put('/update',async(req,res)=>{
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const {nombreCategoria,descripcionCategoria,idCategoria} = req.body        
        const conexion = await abrirConexionPOOL('updateCategoria')
        const mssql = require('mssql')
        const myRequest = new mssql.Request (conexion)
        myRequest.input('nombreCategoria' , mssql.VarChar , nombreCategoria )
        myRequest.input('descripcionCategoria' , mssql.VarChar , descripcionCategoria )
        myRequest.input('idCategoria' , mssql.Int , idCategoria )
        const result = await myRequest.execute ('pa_updateCategoria')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({ mensaje:'Categoria modificada exitosamente'})
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

//TODO: DELETE CAT6EGORIA

router.post('/delete',async(req,res)=>{
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const {idCategoria} = req.body        
        const conexion = await abrirConexionPOOL('deleteCategoria')
        const mssql = require('mssql')
        const myRequest = new mssql.Request (conexion)
        myRequest.input('idCategoria' , mssql.Int , idCategoria )
        const result = await myRequest.execute ('pa_deleteCategoria')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({ mensaje:'Categoria eliminada exitosamente'})
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