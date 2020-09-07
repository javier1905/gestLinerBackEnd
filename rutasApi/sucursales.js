const { Router } = require('express')
const router = Router()

//TODO: LISTA SUCURSALES
router.get('/list' , async ( req , res ) => {
    try{
        const {abrirConexionPOOL,cerrarConexionPOOL} = require('../conexiones/sqlServer')
        const {Request} = require('mssql')
        const conexion = await abrirConexionPOOL('ListaSucursales')
        const myRequest = new Request (conexion)
        const result = await myRequest.execute('pa_listaSucursales')
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

//TODO: INSERTA SUCURSAL

router.post ('/insert' , async (req , res) => {
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const { idDireccion , nombreSucursal } = req.body
        const conexion = await abrirConexionPOOL('insertSucursal')
        const { Request , VarChar , Int } = require('mssql')
        const myRequest = new Request (conexion)
        myRequest.input('idDireccion' , Int , idDireccion )
        myRequest.input('nombreSucursal' , VarChar , nombreSucursal )
        const result = await myRequest.execute ('pa_insertSucursal')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({ mensaje:'Sucursal guardada exitosamente',opOK:true})
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

//TODO: UPDATE SUCURSAL

router.put('/update',async(req,res)=>{
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const {idSucursal,idDireccion,nombreSucursal} = req.body        
        const conexion = await abrirConexionPOOL('updateSucursal')
        const mssql = require('mssql')
        const myRequest = new mssql.Request (conexion)
        myRequest.input('idSucursal' , mssql.Int , idSucursal )
        myRequest.input('idDireccion' , mssql.Int , idDireccion )
        myRequest.input('nombreSucursal' , mssql.VarChar , nombreSucursal )
        const result = await myRequest.execute ('pa_updateSucursal')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({ mensaje:'Sucursal modificada exitosamente',opOK:true})
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

//TODO: DELETE SUCURSAL

router.post('/delete',async(req,res)=>{
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const {idSucursal} = req.body        
        const conexion = await abrirConexionPOOL('deleteSucursal')
        const mssql = require('mssql')
        const myRequest = new mssql.Request (conexion)
        myRequest.input('idSucursal' , mssql.Int , idSucursal )
        const result = await myRequest.execute ('pa_deleteSucursal')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({ mensaje:'Sucursal eliminada exitosamente',opOK:true})
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