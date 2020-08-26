const { Router } = require('express')
const router = Router()

//TODO: LISTA DE DIRECCIONES
router.get('/list' , async ( req , res ) => {
    try{
        const {abrirConexionPOOL,cerrarConexionPOOL} = require('../conexiones/sqlServer')
        const {Request} = require('mssql')
        const conexion = await abrirConexionPOOL('ListaDirecciones')
        const myRequest = new Request (conexion)
        const result = await myRequest.execute('pa_listaDirecciones')
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

//TODO: INSERTA DIRECCION

router.post ('/insert' , async (req , res) => {
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const{ 
                calleDireccion , 
                alturaDireccion , 
                codigoPostalDireccion , 
                barrioDireccion , 
                otrosDatosDireccion 
             } = req.body
        const conexion = await abrirConexionPOOL('insertDireccion')
        const { Request , VarChar , Int } = require('mssql')
        const myRequest = new Request (conexion)
        myRequest.input('calleDireccion' , VarChar , calleDireccion )
        myRequest.input('alturaDireccion' , Int , alturaDireccion )
        myRequest.input('codigoPostalDireccion' , Int , codigoPostalDireccion )
        myRequest.input('barrioDireccion' , VarChar , barrioDireccion )
        myRequest.input('otrosDatosDireccion' , VarChar , otrosDatosDireccion )
        const result = await myRequest.execute ('pa_insertDireccion')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({ mensaje:'Direccion guardada exitosamente'})
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

//TODO: UPDATE DIRECCION

router.put('/update',async(req,res)=>{
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const{ 
            calleDireccion , 
            alturaDireccion , 
            codigoPostalDireccion , 
            barrioDireccion , 
            otrosDatosDireccion ,
            idDireccion
         } = req.body       
        const conexion = await abrirConexionPOOL('updateDireccion')
        const mssql = require('mssql')
        const myRequest = new mssql.Request (conexion)
        myRequest.input('calleDireccion' , mssql.VarChar , calleDireccion )
        myRequest.input('alturaDireccion' , mssql.Int , alturaDireccion )
        myRequest.input('codigoPostalDireccion' , mssql.Int , codigoPostalDireccion )
        myRequest.input('barrioDireccion' , mssql.VarChar , barrioDireccion )
        myRequest.input('otrosDatosDireccion' , mssql.VarChar , otrosDatosDireccion )
        myRequest.input('idDireccion' , mssql.Int , idDireccion )
        const result = await myRequest.execute ('pa_updateDireccion')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({ mensaje:'Direccion modificada exitosamente'})
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

//TODO: DELETE DIRECION

router.post('/delete',async(req,res)=>{
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const {idDireccion} = req.body        
        const conexion = await abrirConexionPOOL('deleteDireccion')
        const mssql = require('mssql')
        const myRequest = new mssql.Request (conexion)
        myRequest.input('idDireccion' , mssql.Int , idDireccion )
        const result = await myRequest.execute ('pa_deleteDireccion')
        if(result) {
            cerrarConexionPOOL()
            res.status(200).json({ mensaje:'Direccion eliminada exitosamente'})
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