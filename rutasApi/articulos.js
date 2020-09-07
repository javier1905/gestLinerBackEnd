const { Router } = require('express')
const router = Router()

//TODO: LISTA DE ARTICULOS
router.get('/list' , async ( req , res ) => {
    try{
        const {abrirConexionPOOL,cerrarConexionPOOL} = require('../conexiones/sqlServer')
        const {Request} = require('mssql')
        const conexion = await abrirConexionPOOL('ListaArticulos')
        const myRequest = new Request (conexion)
        const result = await myRequest.execute('pa_listaArticulos')
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
        res.status(403).json({mensaje : e.message,opOK:false})
    }
})

//TODO: INSERTA ARTICULO

router.post ('/insert' , async (req , res) => {
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const { nombreArticulo,descripcionArticulo,pesoArticulo,codProvedorArticulo,
            codInternoArticulo,idUnidadMedida,idCategoria,idMarca
        } = req.body
        const conexion = await abrirConexionPOOL('insertArticulo')
        const { Request , VarChar , Real , Int } = require('mssql')
        const myRequest = new Request (conexion)
        myRequest.input('nombreArticulo' , VarChar , nombreArticulo )
        myRequest.input('descripcionArticulo' , VarChar , descripcionArticulo )
        myRequest.input('pesoArticulo' , Real , pesoArticulo )
        myRequest.input('codProvedorArticulo' , Int , codProvedorArticulo )
        myRequest.input('codInternoArticulo' , Int , codInternoArticulo )
        myRequest.input('idUnidadMedida' , Int , idUnidadMedida )
        myRequest.input('idCategoria' , Int , idCategoria )
        myRequest.input('idMarca' , Int , idMarca )
        const result = await myRequest.execute ('pa_insertArticulo')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({ mensaje:'Articulo guardado exitosamente',opOK:true})
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

//TODO: UPDATE ARTICULO

router.put('/update',async(req,res)=>{
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const { idArticulo,nombreArticulo,descripcionArticulo,pesoArticulo,codProvedorArticulo,
            codInternoArticulo,idUnidadMedida,idCategoria,idMarca
        } = req.body        
        const conexion = await abrirConexionPOOL('updateArticulo')
        const mssql = require('mssql')
        const myRequest = new mssql.Request (conexion)
        myRequest.input('idArticulo' , mssql.Int , idArticulo )
        myRequest.input('nombreArticulo' , mssql.VarChar , nombreArticulo )
        myRequest.input('descripcionArticulo' , mssql.VarChar , descripcionArticulo )
        myRequest.input('pesoArticulo' , mssql.Real , pesoArticulo )
        myRequest.input('codProvedorArticulo' , mssql.Int , codProvedorArticulo )
        myRequest.input('codInternoArticulo' , mssql.Int , codInternoArticulo )
        myRequest.input('idUnidadMedida' , mssql.Int , idUnidadMedida )
        myRequest.input('idCategoria' , mssql.Int , idCategoria )
        myRequest.input('idMarca' , mssql.Int , idMarca )
        const result = await myRequest.execute ('pa_updateArticulo')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({ mensaje:'Arcticulo modificado exitosamente',opOK:true})
        }
        else{
            cerrarConexionPOOL()
            res.status(200).json({mensaje:'Error al inesperado', opOK:false})
        }
    }
    catch(e){
        cerrarConexionPOOL()
        res.status(200).json({mensaje:e.message,opOK:false})
    }
})

//TODO: DELETE ARTICULO

router.post('/delete',async(req,res)=>{
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const {idArticulo} = req.body        
        const conexion = await abrirConexionPOOL('deleteArticulo')
        const mssql = require('mssql')
        const myRequest = new mssql.Request (conexion)
        myRequest.input('idArticulo' , mssql.Int , idArticulo )
        const result = await myRequest.execute ('pa_deleteArticulo')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({ mensaje:'Articulo eliminado exitosamente',opOK:true})
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