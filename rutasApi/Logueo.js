const { Router } = require('express')
const bcrypt = require('bcrypt')
const { secret } = require('../CONFIG')
const jwt = require('jsonwebtoken')
const { token } = require('morgan')
const router = Router()

router.post('/', async (req, res) => {
	const { abrirConexionPOOL, cerrarConexionPOOL } = require('../conexiones/sqlServer')
	const { usuario, pw } = req.body
	const { Request, VarChar } = require('mssql')
	try {
		const conexion = await abrirConexionPOOL('logueoUsuario')
		const myRequest = new Request(conexion)
		myRequest.input('usuario', VarChar, usuario)
		const result = await myRequest.execute('pa_login')
		if (result) {
			cerrarConexionPOOL()
			if (result.rowsAffected[0] === 0) {
				res.status(200).json({ mensaje: 'Usuario inexistente ', opOK: false })
			} else {
				if (!bcrypt.compareSync(pw, result.recordset[0].pw)) {
					res.status(200).json({ mensaje: 'Password incorrecta ', opOK: false })
				} else {
					const r = result.recordset[0]
					const user = {
						idUsuario: r.idUsuario,
						nombreUsuario: r.nombreUsuario,
						apellidoUsuario: r.apellidoUsuario,
						usuario: r.usuario,
					}
					jwt.sign(user, require('../CONFIG').secret, { expiresIn: 14400 }, (error, token) => {
						if (error) {
							res.status(200).json({ mensaje: 'Error al generar el token', opOK: false })
						} else {
							res.status(200).json({ token, opOK: true })
						}
					})
				}
			}
		} else {
			cerrarConexionPOOL()
			res.status(200).json(result)
		}
	} catch (e) {
		cerrarConexionPOOL()
		res.status(403).json({ mensaje: e.message })
	}
})

module.exports = router
