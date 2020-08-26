const { Router } = require('express')
const router = Router()

//TODO: LISTA DE PRODUCTOS
router.get('/list' , async ( req , res ) => {
    try{
        const {abrirConexionPOOL,cerrarConexionPOOL} = require('../conexiones/sqlServer')
        const {Request} = require('mssql')
        const conexion = await abrirConexionPOOL('ListaProductos')
        const myRequest = new Request (conexion)
        const result = await myRequest.execute('pa_listaProductos')
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

//TODO: INSERTA PRODUCTO

router.post ('/insert' , async (req , res) => {
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const { nombreProducto , descripcionProducto , precioActualProducto } = req.body
        const conexion = await abrirConexionPOOL('insertProducto')
        const { Request , VarChar , Real } = require('mssql')
        const myRequest = new Request (conexion)
        myRequest.input('nombreProducto' , VarChar , nombreProducto )
        myRequest.input('descripcionProducto' , VarChar , descripcionProducto )
        myRequest.input('precioActualProducto' , Real , precioActualProducto )
        const result = await myRequest.execute ('pa_insertProducto')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({ mensaje:'Producto guardada exitosamente'})
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

//TODO: UPDATE PRODUCTO

router.put('/update',async(req,res)=>{
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const {nombreProducto,descripcionProducto , precioActualProducto ,idProducto} = req.body        
        const conexion = await abrirConexionPOOL('updateProducto')
        const mssql = require('mssql')
        const myRequest = new mssql.Request (conexion)
        myRequest.input('nombreProducto' , mssql.VarChar , nombreProducto )
        myRequest.input('descripcionProducto' , mssql.VarChar , descripcionProducto )
        myRequest.input('precioActualProducto' , mssql.Real , precioActualProducto )
        myRequest.input('idProducto' , mssql.Int , idProducto )
        const result = await myRequest.execute ('pa_updateProducto')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({ mensaje:'Producto modificado exitosamente'})
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

//TODO: DELETE PRODUCTO

router.post('/delete',async(req,res)=>{
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const {idProducto} = req.body        
        const conexion = await abrirConexionPOOL('deleteProducto')
        const mssql = require('mssql')
        const myRequest = new mssql.Request (conexion)
        myRequest.input('idProducto' , mssql.Int , idProducto )
        const result = await myRequest.execute ('pa_deleteProducto')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({ mensaje:'Producto eliminado exitosamente'})
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