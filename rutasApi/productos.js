const { Router } = require('express')
const { eachSeries } = require('async')
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

//TODO: INSERTA PRODUCTO

router.post ('/insert' , async (req , res) => {
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    const {nombreProducto,descripcionProducto,precioActualProducto,vecDetallesProducto} = req.body
    const conexion = await abrirConexionPOOL('insertProducto')
    const { Request , VarChar , Int , Real ,Transaction } = require('mssql')
    const myTransaction = new Transaction (conexion)
    myTransaction.begin( async (err) => {
        if(err) {
            myTransaction.rollback()
            cerrarConexionPOOL()
            res.status(200).json({mensaje:err.message,opOK:false})
        }
        try {
            const myRequest = new Request (myTransaction)
            myRequest.input('nombreProducto' , VarChar , nombreProducto )
            myRequest.input('descripcionProducto' , VarChar , descripcionProducto )
            myRequest.input('precioActualProducto' , Real , precioActualProducto )
            const result = await myRequest.execute ('pa_insertProducto')
            if(result.rowsAffected[0] === 0 || !result.recordset[0].idProducto){
                myTransaction.rollback()
                cerrarConexionPOOL()
                res.status(200).json({mensaje:'Producto no insertado',opOK:false})
            }
            else{                
                const idProducto = parseInt(result.recordset[0].idProducto)
                const myRequestDP = new Request (myTransaction)
                myRequestDP.input('idProducto' , Int , idProducto )
                myRequestDP.input('idArticulo' , Int , 0 )
                myRequestDP.input('cantidadDetalleProducto' , Real , 0 )
                eachSeries(vecDetallesProducto , (DP , callback )=>{  
                    myRequestDP.parameters.idArticulo.value = DP.idArticulo
                    myRequestDP.parameters.cantidadDetalleProducto.value = DP.cantidadDetalleProducto                
                    myRequestDP.execute('pa_insertDetalleProducto',(E,R)=>{if(E){ callback(E) }else{ callback()}}) 
                    },
                    errorCallBack => {
                        if(errorCallBack){
                            myTransaction.rollback()
                            cerrarConexionPOOL()
                            res.status(200).json({mensaje:errorCallBack,opOK:false})
                        }
                        else{
                            myTransaction.commit()
                            cerrarConexionPOOL()
                            res.status(200).json({mensaje:'Producto y detalles de producto guardados exitosamente',opOK:true})
                        }
                    }
                )                
            }
        }
        catch(e){
            myTransaction.rollback()
            cerrarConexionPOOL()
            res.status(403).json({mensaje:e.message,opOK:false})
        }                
    })
})

//TODO: UPDATE PRODUCTO

router.put('/update',async(req,res)=>{
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    const {nombreProducto,descripcionProducto,precioActualProducto,idProducto,vecDetallesProducto} = req.body        
    const conexion = await abrirConexionPOOL('updateProducto')
    const {Request,VarChar,Real,Int,Transaction} = require('mssql')
    const myTransaction = new Transaction(conexion)
    myTransaction.begin(async err=>{
        if(err){
            myTransaction.rollback()
            cerrarConexionPOOL()
            res.status(200).json({mensaje:err.message,opOK:false})
        }
        try {
            const myRequest = new Request (myTransaction)
            myRequest.input('nombreProducto' , VarChar , nombreProducto )
            myRequest.input('descripcionProducto' , VarChar , descripcionProducto )
            myRequest.input('precioActualProducto' , Real , precioActualProducto )
            myRequest.input('idProducto' , Int , idProducto )
            const result = await myRequest.execute ('pa_updateProducto')
            if(result.rowsAffected === 0){
                myTransaction.rollback()
                cerrarConexionPOOL()
                res.status(200).json({mensaje:'ERROR 0 filas modificadas',opOK:false})
            }
            else{
                const myRequestDP = new Request(myTransaction)
                myRequestDP.input('idProducto',Int,idProducto)
                myRequestDP.input('idArticulo',Int,0)
                myRequestDP.input('cantidadDetalleProducto',Real,0)
                eachSeries(vecDetallesProducto,(DP,callback)=>{
                    myRequestDP.parameters.idArticulo.value = DP.idArticulo
                    myRequestDP.parameters.cantidadDetalleProducto.value = DP.cantidadDetalleProducto
                    myRequestDP.execute('pa_insertDetalleProducto',(E,R)=>{
                        if(E){callback(E)}else{callback()}
                    })
                },errorCallBack=>{
                    if(errorCallBack){
                        myTransaction.rollback()
                        cerrarConexionPOOL()
                        res.status(200).json({mensaje:errorCallBack.message,opOK:false})
                    }
                    else{
                        myTransaction.commit()
                        cerrarConexionPOOL()
                        res.status(200).json({mensaje:'Producto modificado exitosamente',opOK:true})
                    }
                })
            }
        }
        catch(e){
            myTransaction.rollback()
            cerrarConexionPOOL()
            res.status(200).json({mensaje:'Error al inesperado',opOK:false})
        }
    })

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
            res.status(200).json({ mensaje:'Producto eliminado exitosamente',opOK:true})
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