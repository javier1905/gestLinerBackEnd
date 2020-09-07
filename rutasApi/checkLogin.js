const jwt = require('jsonwebtoken')
const {secret} = require('../CONFIG')

module.exports = function (req , res ,next) {
    if (req.path !== '/api/logueo') {
        if( !req.headers.authorization) {
            res.status(200).json({mensaje : 'No envio el token en el headers', logOK:false})
        }
        else{
            const token = req.headers.authorization.split(' ')[1]
            jwt.verify(token ,secret , ( e , datos )=> {
                if ( e ) { res.status(200).json({mensaje : e.message , otro : 'error  en la commprobacion token',logOK:false}) }
                else { return next() }
            } )
        }
    }
    else { return next() }
}