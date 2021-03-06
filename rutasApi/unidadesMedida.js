const { Router } = require('express')
const router = Router()

//TODO: LISTA DE UNIDADES DE MEDIDA
router.get('/list' , async ( req , res ) => {
    try{
        const {abrirConexionPOOL,cerrarConexionPOOL} = require('../conexiones/sqlServer')
        const {Request} = require('mssql')
        const conexion = await abrirConexionPOOL('ListaUnidadesMedida')
        const myRequest = new Request (conexion)
        const result = await myRequest.execute('pa_listaUnidadesMedia')
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

//TODO: INSERTA UNIDAD DE MEDIDA

router.post ('/insert' , async (req , res) => {
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const { nombreUnidadMedida , descripcionUnidadMedida } = req.body
        const conexion = await abrirConexionPOOL('insertUnidadMadida')
        const { Request , VarChar } = require('mssql')
        const myRequest = new Request (conexion)
        myRequest.input('nombreUnidadMedida' , VarChar , nombreUnidadMedida )
        myRequest.input('descripcionUnidadMedida' , VarChar , descripcionUnidadMedida )
        const result = await myRequest.execute ('pa_insertUnidadMedida')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({ mensaje:'Unidade de medida guardada exitosamente',opOK:true})
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

//TODO: UPDATE UNIDAD DE MEDIDA

router.put('/update',async(req,res)=>{
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const {nombreUnidadMedida,descripcionUnidadMedida,idUnidadMedida} = req.body        
        const conexion = await abrirConexionPOOL('updateUnidadMedida')
        const mssql = require('mssql')
        const myRequest = new mssql.Request (conexion)
        myRequest.input('nombreUnidadMedida' , mssql.VarChar , nombreUnidadMedida )
        myRequest.input('descripcionUnidadMedida' , mssql.VarChar , descripcionUnidadMedida )
        myRequest.input('idUnidadMedida' , mssql.Int , idUnidadMedida )
        const result = await myRequest.execute ('pa_updateUnidadMedida')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({ mensaje:'Unidad de medida modificada exitosamente',opOK:true})
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

//TODO: DELETE UNIDAD MEDIDA

router.post('/delete',async(req,res)=>{
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const {idUnidadMedida} = req.body        
        const conexion = await abrirConexionPOOL('deleteUnidadMedida')
        const mssql = require('mssql')
        const myRequest = new mssql.Request (conexion)
        myRequest.input('idUnidadMedida' , mssql.Int , idUnidadMedida )
        const result = await myRequest.execute ('pa_deleteUnidadMedida')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({ mensaje:'Unidad de medida eliminada exitosamente',opOK:true})
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