const Router = require('express')
const jwt = require('jsonwebtoken')
const CONFIG = require('../CONFIG')

const router=Router()

router.get('/',(req,res)=>{
    const token = req.headers.authorization.split(' ')[1]
    jwt.verify(token,CONFIG.secret,(e,d)=>{
        if(e){ res.status(200).json({mensaje:e.name,logOK:false})}
        else{ res.status(200).json({usuario:d,logOK:true}) }
    })    
})
module.exports = router