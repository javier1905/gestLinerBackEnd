/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./CONFIG.js":
/*!*******************!*\
  !*** ./CONFIG.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  secret: 'masterSoft2020'
};

/***/ }),

/***/ "./conexiones/sqlServer.js":
/*!*********************************!*\
  !*** ./conexiones/sqlServer.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const mssql = __webpack_require__(/*! mssql */ "mssql");

if (true) {
  __webpack_require__(/*! colors */ "colors");
}

var URI;

if (true) {
  // URI = {
  //     user: 
  //     password: 
  //     database: 
  //     port:1433,
  //     server:'
  //     options:{
  //         appName:
  //         enableArithAbort:true,
  //         encrypt:false
  //     }
  //     ,
  //     connectionTimeOut:150000,
  //     driver:'tedious',
  //     stream:false,
  //     pool:{
  //         max:20,
  //         min:0,
  //         idleTimeoutMillis:30000,
  //     }
  //VJ7300
  // }
  URI = {
    user: 'gestLine_SQLLogin_1',
    password: 'ltp6xmup3t',
    database: 'gestLineDB',
    server: 'gestLineDB.mssql.somee.com',
    options: {
      appName: 'masterSoft-API',
      enableArithAbort: true,
      encrypt: false
    },
    connectionTimeOut: 150000,
    driver: 'tedious',
    stream: false,
    pool: {
      max: 20,
      min: 0,
      idleTimeoutMillis: 30000
    }
  };
} else {}

var ConexionSQL = {
  abrirConexion: undefined,
  cerrarConexion: undefined,
  abrirConexionPOOL: undefined,
  cerrarConexionPOOL: undefined
}; // var conexion
// ConexionSQL.abrirConexion = async function (){
//     await mssql.connect(URI)
//     .then(pool=>{
//         if(pool._connected){
//             if(process.env.NODE_ENV === 'development'){
//                 console.log('Conecion SQL SERVER'.blue,' ABIERTA'.green)
//                 conexion = pool
//             }
//         }
//         else{
//             console.log('Error de Conexion',pool._connected)
//         }
//     })
// }
// ConexionSQL.cerrarConexion = async function (){
//     await conexion.close()
//     if(process.env.NODE_ENV === 'development'){
//         console.log('Conecion SQL SERVER'.blue,' CERRADA'.green)
//     }
// }

const conexiones = {};

ConexionSQL.abrirConexionPOOL = async name => {
  if (!Object.prototype.hasOwnProperty.call(conexiones, name)) {
    const newConexion = new mssql.ConnectionPool(URI);
    const close = newConexion.close.bind(newConexion);

    newConexion.close = (...args) => {
      delete conexiones[name];
      return close(...args);
    };

    await newConexion.connect();
    conexiones[name] = newConexion;
    return conexiones[name];
  }
};

ConexionSQL.cerrarConexionPOOL = () => {
  return Promise.all(Object.values(conexiones).map(pool => {
    return pool.close();
  }));
};

module.exports = ConexionSQL;

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(/*! express */ "express");

const cors = __webpack_require__(/*! cors */ "cors");

var morgan;

if (true) {
  __webpack_require__(/*! colors */ "colors");

  morgan = __webpack_require__(/*! morgan */ "morgan");
} // console.log(process.env.NODE_ENV)


const servidor = express();
servidor.use(cors()); // middelware

servidor.use(express.json());
servidor.use(express.urlencoded({
  extended: true
})); // servidor.use(require('./rutasApi/authAccesos/authAllRouter'))

if (true) {
  servidor.use(morgan('dev'));
}

servidor.use('/api/logueo', __webpack_require__(/*! ./rutasApi/Logueo */ "./rutasApi/Logueo.js")); // servidor.use('/api/authRouterReact/admin',require('./rutasApi/authAccesosReact/authAdminRouterReact'))
// servidor.use('/api/authRouterReact/nivel1',require('./rutasApi/authAccesosReact/authNivel1RouterReact'))
// servidor.use('/api/authRouterReact/nivel2',require('./rutasApi/authAccesosReact/authNivel2RouterReact'))
// servidor.use('/api/authRouterReact/nivel3',require('./rutasApi/authAccesosReact/authNivel3RouterReact'))
// servidor.use('/api/authRouterReact/nivel4',require('./rutasApi/authAccesosReact/authNivel4RouterReact'))
// servidor.use('/api/authRouterReact/nivel5',require('./rutasApi/authAccesosReact/authNivel5RouterReact'))
// servidor.use('/api/usuarios',require('./rutasApi/authAccesos/authAdminRouter'),require('./rutasApi/usuarios'))

servidor.use('/api/usuarios', __webpack_require__(/*! ./rutasApi/usuarios */ "./rutasApi/usuarios.js"));
servidor.use('/api/categorias', __webpack_require__(/*! ./rutasApi/categorias */ "./rutasApi/categorias.js"));
servidor.use('/api/autentificasion', __webpack_require__(/*! ./rutasApi/Autentificasion */ "./rutasApi/Autentificasion.js")); //
//Settings

servidor.set('port', process.env.PORT || 5000);
servidor.listen(servidor.get('port'), (m, e) => {
  if (e) {
    console.log(e);
  } else {
    if (true) {
      console.log('Servidor corriendo en el PUERTO'.yellow, servidor.get('port'));
    } else {}
  }
});

/***/ }),

/***/ "./rutasApi/Autentificasion.js":
/*!*************************************!*\
  !*** ./rutasApi/Autentificasion.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Router = __webpack_require__(/*! express */ "express");

const jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

const CONFIG = __webpack_require__(/*! ../CONFIG */ "./CONFIG.js");

const router = Router();
router.get('/', (req, res) => {
  if (!req.headers.authorization) {
    res.status(403).json({
      mensaje: 'No envio el Token en el headers'
    });
  } else {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, CONFIG.secret, (e, d) => {
      if (e) {
        res.status(403).json({
          mensaje: e.name
        });
      } else {
        res.status(200).json(d);
      }
    });
  }
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/Logueo.js":
/*!****************************!*\
  !*** ./rutasApi/Logueo.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt"); // const Usuario = require('../esquemasMongo/esquemaUsuarios')


const {
  secret
} = __webpack_require__(/*! ../CONFIG */ "./CONFIG.js");

const jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

const {
  token
} = __webpack_require__(/*! morgan */ "morgan");

const router = Router();
router.post('/', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    usuario,
    pw
  } = req.body;

  const {
    Request,
    VarChar
  } = __webpack_require__(/*! mssql */ "mssql");

  try {
    const conexion = await abrirConexionPOOL('logueoUsuario');
    const myRequest = new Request(conexion);
    myRequest.input('usuario', VarChar, usuario);
    const result = await myRequest.execute('pa_login');

    if (result) {
      cerrarConexionPOOL();

      if (result.rowsAffected[0] === 0) {
        res.status(200).json({
          mensaje: 'Usuario inexistente '
        });
      } else {
        if (!bcrypt.compareSync(pw, result.recordset[0].pw)) {
          res.status(200).json({
            mensaje: 'Password incorrecta '
          });
        } else {
          const user = {
            nombreUsuario: result.recordset[0].nombreUsuario,
            apellidoUsuario: result.recordset[0].apellidoUsuario,
            usuario: result.recordset[0].usuario
          };
          jwt.sign(user, __webpack_require__(/*! ../CONFIG */ "./CONFIG.js").secret, {
            expiresIn: 14400
          }, (error, token) => {
            if (error) {
              res.status(200).json({
                mensaje: 'Error al generar el token'
              });
            } else {
              res.status(200).json({
                token
              });
            }
          });
        }
      }
    } else {
      cerrarConexionPOOL();
      res.status(200).json(result);
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(403).json({
      mensaje: e.message
    });
  }
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/categorias.js":
/*!********************************!*\
  !*** ./rutasApi/categorias.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router(); //TODO: LISTA DE CATEGORIAS

router.get('/list', async (req, res) => {
  try {
    const {
      abrirConexionPOOL,
      cerrarConexionPOOL
    } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

    const {
      Request
    } = __webpack_require__(/*! mssql */ "mssql");

    const conexion = await abrirConexionPOOL('ListaCategorias');
    const myRequest = new Request(conexion);
    const result = await myRequest.execute('pa_listaCategorias');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json(result.recordset);
    } else {
      cerrarConexionPOOL();
      res.status(403).json({
        mensaje: 'Error en el resultado'
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(403).json({
      mensaje: e.message
    });
  }
}); //TODO: INSERTA CATEGORA

router.post('/insert', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const {
      nombreCategoria,
      descripcionCategoria
    } = req.body;
    const conexion = await abrirConexionPOOL('insertCategoria');

    const {
      Request,
      VarChar
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('nombreCategoria', VarChar, nombreCategoria);
    myRequest.input('descripcionCategoria', VarChar, descripcionCategoria);
    const result = await myRequest.execute('pa_insertCategoria');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Categoria guardada exitosamente'
      });
    } else {
      cerrarConexionPOOL();
      res.status(403).json({
        mensaje: 'Error al inesperado'
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(403).json({
      mensaje: e.message
    });
  }
}); //TODO: UPDATE CATEGORIA

router.put('/update', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const {
      nombreCategoria,
      descripcionCategoria,
      idCategoria
    } = req.body;
    const conexion = await abrirConexionPOOL('updateCategoria');

    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new mssql.Request(conexion);
    myRequest.input('nombreCategoria', mssql.VarChar, nombreCategoria);
    myRequest.input('descripcionCategoria', mssql.VarChar, descripcionCategoria);
    myRequest.input('idCategoria', mssql.Int, idCategoria);
    const result = await myRequest.execute('pa_updateCategoria');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Categoria modificada exitosamente'
      });
    } else {
      cerrarConexionPOOL();
      res.status(403).json({
        mensaje: 'Error al inesperado'
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(403).json({
      mensaje: e.message
    });
  }
}); //TODO: DELETE CAT6EGORIA

router.post('/delete', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const {
      idCategoria
    } = req.body;
    const conexion = await abrirConexionPOOL('deleteCategoria');

    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new mssql.Request(conexion);
    myRequest.input('idCategoria', mssql.Int, idCategoria);
    const result = await myRequest.execute('pa_deleteCategoria');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Categoria eliminada exitosamente'
      });
    } else {
      cerrarConexionPOOL();
      res.status(403).json({
        mensaje: 'Error al inesperado'
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(403).json({
      mensaje: e.message
    });
  }
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/usuarios.js":
/*!******************************!*\
  !*** ./rutasApi/usuarios.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const bcryp = __webpack_require__(/*! bcrypt */ "bcrypt");

const router = Router(); // ! insertar usuario

router.post('/insert', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    nombreUsuario,
    apellidoUsuario,
    usuario,
    pw
  } = req.body;

  try {
    const conexion = await abrirConexionPOOL('insertUsuario');

    const {
      Request,
      VarChar
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('nombreUsuario', VarChar, nombreUsuario);
    myRequest.input('apellidoUsuario', VarChar, apellidoUsuario);
    myRequest.input('usuario', VarChar, usuario);
    myRequest.input('pw', VarChar, bcryp.hashSync(pw, 10));
    const result = await myRequest.execute('pa_insertUsuario');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Usuario insertado correctamente '
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(403).json({
      mensaje: e.message
    });
  }
}); // // ! listado de usuarios
// router.get('/',async (req,res)=>{
//     const { abrirConexionPOOL , cerrarConexionPOOL} = require ('../conexiones/sqlServer')
//     try{
//         const conexion = await abrirConexionPOOL( 'liastaUsuario')
//         const mssql = require('mssql')
//         const myRequest = new mssql.Request(conexion)
//         const result = await myRequest.execute('pa_listaUsuarios')
//         if(result){
//             cerrarConexionPOOL()
//             res.json(result.recordset)
//         }
//         else{
//             cerrarConexionPOOL()
//             res.status(404).json({status: 403,mensaje:e.message})
//         }
//     }
//     catch(e){
//         cerrarConexionPOOL()
//         res.status(404).json({status: 403,mensaje:e.message})
//     }
// })
// //! lista de perfiles
// router.get('/perfiles',async (req,res)=>{
//     const { abrirConexionPOOL , cerrarConexionPOOL} = require ('../conexiones/sqlServer')
//     try{
//         const conexion = await abrirConexionPOOL( 'listaPerfiles')
//         const mssql = require('mssql')
//         const myRequest = new mssql.Request(conexion)
//         const result = await myRequest.execute('pa_listaPerfiles')
//         if(result){
//             cerrarConexionPOOL()
//             res.json(result.recordset)
//         }
//         else{
//             cerrarConexionPOOL()
//             res.status(404).json({status: 403,mensaje:e.message})
//         }
//     }
//     catch(e){
//         cerrarConexionPOOL()
//         res.status(404).json({status: 403,mensaje:e.message})
//     }
// })
// //! consulta usuario por id
// router.get('/:id',async (req,res)=>{
//     const id = req.params.id
//     const { abrirConexionPOOL , cerrarConexionPOOL} = require ('../conexiones/sqlServer')
//     try{
//         const conexion = await abrirConexionPOOL( 'getUsexId')
//         const mssql = require('mssql')
//         const myRequest = new mssql.Request(conexion)
//         myRequest.input('idUsuario' , mssql.Int , id)
//         const query = `select
//         u.id as idUsuario ,
//         u.userName as userName ,
//         u.email as email ,
//         u.nombre as nombreUsuario ,
//         u.apellido as apellidoUsuario ,
//         p.id as idPerfil ,
//         p.nombre as nombrePerfil
//         from usuarios u
//         join perfiles p on p.id = u.id_perfil
//         where u.id = @idUsuario`
//         const result = await myRequest.query(query)
//         if(result){
//             cerrarConexionPOOL()
//             res.json(result.recordset)
//         }
//         else{
//             cerrarConexionPOOL()
//             res.status(404).json({status: 403,mensaje:e.message})
//         }
//     }
//     catch(e){
//         cerrarConexionPOOL()
//         res.status(404).json({status: 403,mensaje:e.message})
//     }
// })
// //!guarda usuario
// router.post('/',async (req,res)=>{
//     const {abrirConexionPOOL , cerrarConexionPOOL} = require('../conexiones/sqlServer')
//     const  {userName,password,email,nombre,apellido,idPerfil} = req.body
//     try{
//         const conexion = await abrirConexionPOOL('saveUser')
//         const mssql = require ('mssql')
//         const myRequest = new mssql.Request(conexion)
//         const pw = bcryp.hashSync(password,10)
//         console.log(pw)
//         myRequest.input('userName' , mssql.VarChar , userName)
//         myRequest.input('password' , mssql.VarChar , pw)
//         myRequest.input('email' , mssql.VarChar , email)
//         myRequest.input('nombre' , mssql.VarChar , nombre)
//         myRequest.input('apellido' , mssql.VarChar , apellido)
//         myRequest.input('idPerfil' , mssql.Int , idPerfil)
//         const result = await myRequest.execute('pa_insertUsuarios')
//         if(result){
//             cerrarConexionPOOL()
//             console.log(result)
//             res.status(200).json({ mensaje: 'usuario insertado correctamente !' })
//         }
//     }
//     catch(err){
//         cerrarConexionPOOL()
//         res.status(403).json({error:err.message})
//     }
// })
// router.put('/', async (req,res)=>{
//     const {abrirConexionPOOL , cerrarConexionPOOL} = require('../conexiones/sqlServer')
//     const  {userName,password,email,nombre,apellido,idPerfil , idUsuario} = req.body
//     try{
//         const conexion = await abrirConexionPOOL('updateUser')
//         const mssql = require ('mssql')
//         const myRequest = new mssql.Request(conexion)
//         myRequest.input('userName' , mssql.VarChar , userName)
//         myRequest.input('password' , mssql.VarChar , bcryp.hashSync(password))
//         myRequest.input('email' , mssql.VarChar , email)
//         myRequest.input('nombre' , mssql.VarChar , nombre)
//         myRequest.input('apellido' , mssql.VarChar , apellido)
//         myRequest.input('idPerfil' , mssql.Int , idPerfil)
//         myRequest.input('idUsuario' , mssql.Int , idUsuario)
//         const result = await myRequest.execute('pa_updateUsuarios')
//         if(result){
//             cerrarConexionPOOL()
//             console.log(result)
//             res.status(200).json({ mensaje: 'usuario insertado correctamente !' })
//         }
//     }
//     catch(e){
//         cerrarConexionPOOL()
//         res.status(403).json({error:err.message})
//     }
// })

module.exports = router;

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),

/***/ "colors":
/*!*************************!*\
  !*** external "colors" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("colors");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "mssql":
/*!************************!*\
  !*** external "mssql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mssql");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ09ORklHLmpzIiwid2VicGFjazovLy8uL2NvbmV4aW9uZXMvc3FsU2VydmVyLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL0F1dGVudGlmaWNhc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9Mb2d1ZW8uanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvY2F0ZWdvcmlhcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS91c3Vhcmlvcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb2xvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1zc3FsXCIiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInNlY3JldCIsIm1zc3FsIiwicmVxdWlyZSIsInByb2Nlc3MiLCJVUkkiLCJ1c2VyIiwicGFzc3dvcmQiLCJkYXRhYmFzZSIsInNlcnZlciIsIm9wdGlvbnMiLCJhcHBOYW1lIiwiZW5hYmxlQXJpdGhBYm9ydCIsImVuY3J5cHQiLCJjb25uZWN0aW9uVGltZU91dCIsImRyaXZlciIsInN0cmVhbSIsInBvb2wiLCJtYXgiLCJtaW4iLCJpZGxlVGltZW91dE1pbGxpcyIsIkNvbmV4aW9uU1FMIiwiYWJyaXJDb25leGlvbiIsInVuZGVmaW5lZCIsImNlcnJhckNvbmV4aW9uIiwiYWJyaXJDb25leGlvblBPT0wiLCJjZXJyYXJDb25leGlvblBPT0wiLCJjb25leGlvbmVzIiwibmFtZSIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIm5ld0NvbmV4aW9uIiwiQ29ubmVjdGlvblBvb2wiLCJjbG9zZSIsImJpbmQiLCJhcmdzIiwiY29ubmVjdCIsIlByb21pc2UiLCJhbGwiLCJ2YWx1ZXMiLCJtYXAiLCJleHByZXNzIiwiY29ycyIsIm1vcmdhbiIsInNlcnZpZG9yIiwidXNlIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsInNldCIsImVudiIsIlBPUlQiLCJsaXN0ZW4iLCJnZXQiLCJtIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ5ZWxsb3ciLCJSb3V0ZXIiLCJqd3QiLCJDT05GSUciLCJyb3V0ZXIiLCJyZXEiLCJyZXMiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInN0YXR1cyIsIm1lbnNhamUiLCJ0b2tlbiIsInNwbGl0IiwidmVyaWZ5IiwiZCIsImJjcnlwdCIsInBvc3QiLCJ1c3VhcmlvIiwicHciLCJib2R5IiwiUmVxdWVzdCIsIlZhckNoYXIiLCJjb25leGlvbiIsIm15UmVxdWVzdCIsImlucHV0IiwicmVzdWx0IiwiZXhlY3V0ZSIsInJvd3NBZmZlY3RlZCIsImNvbXBhcmVTeW5jIiwicmVjb3Jkc2V0Iiwibm9tYnJlVXN1YXJpbyIsImFwZWxsaWRvVXN1YXJpbyIsInNpZ24iLCJleHBpcmVzSW4iLCJlcnJvciIsIm1lc3NhZ2UiLCJub21icmVDYXRlZ29yaWEiLCJkZXNjcmlwY2lvbkNhdGVnb3JpYSIsInB1dCIsImlkQ2F0ZWdvcmlhIiwiSW50IiwiYmNyeXAiLCJoYXNoU3luYyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtR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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBaEcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCZ0UsTUFBakIsQzs7Ozs7Ozs7Ozs7QUN2S0EsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgc2VjcmV0OidtYXN0ZXJTb2Z0MjAyMCdcclxufSIsImNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKTtcclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpeyByZXF1aXJlKCdjb2xvcnMnKSB9XHJcblxyXG52YXIgVVJJXHJcblxyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbiAgICAvLyBVUkkgPSB7XHJcbiAgICAvLyAgICAgdXNlcjogXHJcbiAgICAvLyAgICAgcGFzc3dvcmQ6IFxyXG4gICAgLy8gICAgIGRhdGFiYXNlOiBcclxuICAgIC8vICAgICBwb3J0OjE0MzMsXHJcbiAgICAvLyAgICAgc2VydmVyOidcclxuICAgIC8vICAgICBvcHRpb25zOntcclxuICAgIC8vICAgICAgICAgYXBwTmFtZTpcclxuICAgIC8vICAgICAgICAgZW5hYmxlQXJpdGhBYm9ydDp0cnVlLFxyXG4gICAgLy8gICAgICAgICBlbmNyeXB0OmZhbHNlXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgICxcclxuICAgIC8vICAgICBjb25uZWN0aW9uVGltZU91dDoxNTAwMDAsXHJcbiAgICAvLyAgICAgZHJpdmVyOid0ZWRpb3VzJyxcclxuICAgIC8vICAgICBzdHJlYW06ZmFsc2UsXHJcbiAgICAvLyAgICAgcG9vbDp7XHJcbiAgICAvLyAgICAgICAgIG1heDoyMCxcclxuICAgIC8vICAgICAgICAgbWluOjAsXHJcbiAgICAvLyAgICAgICAgIGlkbGVUaW1lb3V0TWlsbGlzOjMwMDAwLFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vVko3MzAwXHJcbiAgICAvLyB9XHJcbiAgICBVUkkgPSB7XHJcbiAgICAgICAgdXNlcjogJ2dlc3RMaW5lX1NRTExvZ2luXzEnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnbHRwNnhtdXAzdCcsXHJcbiAgICAgICAgZGF0YWJhc2U6ICdnZXN0TGluZURCJyxcclxuICAgICAgICBzZXJ2ZXI6J2dlc3RMaW5lREIubXNzcWwuc29tZWUuY29tJyxcclxuICAgICAgICBvcHRpb25zOntcclxuICAgICAgICAgICAgYXBwTmFtZTonbWFzdGVyU29mdC1BUEknLFxyXG4gICAgICAgICAgICBlbmFibGVBcml0aEFib3J0OnRydWUsXHJcbiAgICAgICAgICAgIGVuY3J5cHQ6ZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgLFxyXG4gICAgICAgIGNvbm5lY3Rpb25UaW1lT3V0OjE1MDAwMCxcclxuICAgICAgICBkcml2ZXI6J3RlZGlvdXMnLFxyXG4gICAgICAgIHN0cmVhbTpmYWxzZSxcclxuICAgICAgICBwb29sOntcclxuICAgICAgICAgICAgbWF4OjIwLFxyXG4gICAgICAgICAgICBtaW46MCxcclxuICAgICAgICAgICAgaWRsZVRpbWVvdXRNaWxsaXM6MzAwMDAsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmVsc2V7XHJcbiAgICBVUkkgPSB7XHJcbiAgICAgICAgdXNlciA6IHByb2Nlc3MuZW52LlVTRVJTUUwgLFxyXG4gICAgICAgIHBhc3N3b3JkIDogcHJvY2Vzcy5lbnYuUEFTU1dPUkRTUUwgLFxyXG4gICAgICAgIGRhdGFiYXNlIDogcHJvY2Vzcy5lbnYuREFUQUJBU0VTUUwgLFxyXG4gICAgICAgIHNlcnZlciA6IHByb2Nlc3MuZW52LlNFUlZFUlNRTCAsXHJcbiAgICAgICAgb3B0aW9ucyA6IHtcclxuICAgICAgICAgICAgZW5hYmxlQXJpdGhBYm9ydCA6IHRydWUgLFxyXG4gICAgICAgICAgICBlbmNyeXB0IDogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59XHJcblxyXG52YXIgQ29uZXhpb25TUUwgPSB7IGFicmlyQ29uZXhpb246dW5kZWZpbmVkLCBjZXJyYXJDb25leGlvbjp1bmRlZmluZWQsIGFicmlyQ29uZXhpb25QT09MOnVuZGVmaW5lZCwgY2VycmFyQ29uZXhpb25QT09MOnVuZGVmaW5lZCB9XHJcbi8vIHZhciBjb25leGlvblxyXG4vLyBDb25leGlvblNRTC5hYnJpckNvbmV4aW9uID0gYXN5bmMgZnVuY3Rpb24gKCl7XHJcbi8vICAgICBhd2FpdCBtc3NxbC5jb25uZWN0KFVSSSlcclxuLy8gICAgIC50aGVuKHBvb2w9PntcclxuLy8gICAgICAgICBpZihwb29sLl9jb25uZWN0ZWQpe1xyXG4vLyAgICAgICAgICAgICBpZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ29uZWNpb24gU1FMIFNFUlZFUicuYmx1ZSwnIEFCSUVSVEEnLmdyZWVuKVxyXG4vLyAgICAgICAgICAgICAgICAgY29uZXhpb24gPSBwb29sXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgZWxzZXtcclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGRlIENvbmV4aW9uJyxwb29sLl9jb25uZWN0ZWQpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSlcclxuLy8gfVxyXG4vLyBDb25leGlvblNRTC5jZXJyYXJDb25leGlvbiA9IGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4vLyAgICAgYXdhaXQgY29uZXhpb24uY2xvc2UoKVxyXG4vLyAgICAgaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdDb25lY2lvbiBTUUwgU0VSVkVSJy5ibHVlLCcgQ0VSUkFEQScuZ3JlZW4pXHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbmNvbnN0IGNvbmV4aW9uZXMgPSB7fVxyXG5cclxuQ29uZXhpb25TUUwuYWJyaXJDb25leGlvblBPT0wgPSBhc3luYyBuYW1lID0+e1xyXG4gICAgaWYoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjb25leGlvbmVzLG5hbWUpKXtcclxuICAgICAgICBjb25zdCBuZXdDb25leGlvbiA9IG5ldyBtc3NxbC5Db25uZWN0aW9uUG9vbChVUkkpXHJcbiAgICAgICAgY29uc3QgY2xvc2UgPSBuZXdDb25leGlvbi5jbG9zZS5iaW5kKG5ld0NvbmV4aW9uKVxyXG4gICAgICAgIG5ld0NvbmV4aW9uLmNsb3NlID0gKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICAgICAgZGVsZXRlIGNvbmV4aW9uZXNbbmFtZV1cclxuICAgICAgICAgICAgcmV0dXJuIGNsb3NlKC4uLmFyZ3MpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IG5ld0NvbmV4aW9uLmNvbm5lY3QoKVxyXG4gICAgICAgIGNvbmV4aW9uZXNbbmFtZV0gPSBuZXdDb25leGlvblxyXG4gICAgICAgIHJldHVybiBjb25leGlvbmVzW25hbWVdXHJcbiAgICB9XHJcbn1cclxuXHJcbkNvbmV4aW9uU1FMLmNlcnJhckNvbmV4aW9uUE9PTCA9ICgpID0+e1xyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC52YWx1ZXMoY29uZXhpb25lcykubWFwKChwb29sKT0+e1xyXG4gICAgICAgIHJldHVybiBwb29sLmNsb3NlKClcclxuICAgIH0pKVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gQ29uZXhpb25TUUwiLCJjb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IGNvcnMgPSByZXF1aXJlKCdjb3JzJylcclxudmFyIG1vcmdhblxyXG5cclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xyXG4gICAgcmVxdWlyZSgnY29sb3JzJylcclxuICAgIG1vcmdhbiA9IHJlcXVpcmUoJ21vcmdhbicpXHJcbn1cclxuLy8gY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuTk9ERV9FTlYpXHJcblxyXG5jb25zdCBzZXJ2aWRvciA9IGV4cHJlc3MoKVxyXG5zZXJ2aWRvci51c2UoY29ycygpKVxyXG5cclxuLy8gbWlkZGVsd2FyZVxyXG5cclxuc2Vydmlkb3IudXNlKGV4cHJlc3MuanNvbigpKVxyXG5zZXJ2aWRvci51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHtleHRlbmRlZDogdHJ1ZX0pKVxyXG4vLyBzZXJ2aWRvci51c2UocmVxdWlyZSgnLi9ydXRhc0FwaS9hdXRoQWNjZXNvcy9hdXRoQWxsUm91dGVyJykpXHJcblxyXG5cclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgKSB7ICBzZXJ2aWRvci51c2UobW9yZ2FuKCdkZXYnKSkgfVxyXG5cclxuc2Vydmlkb3IudXNlKCcvYXBpL2xvZ3VlbycscmVxdWlyZSgnLi9ydXRhc0FwaS9Mb2d1ZW8nKSlcclxuLy8gc2Vydmlkb3IudXNlKCcvYXBpL2F1dGhSb3V0ZXJSZWFjdC9hZG1pbicscmVxdWlyZSgnLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhBZG1pblJvdXRlclJlYWN0JykpXHJcbi8vIHNlcnZpZG9yLnVzZSgnL2FwaS9hdXRoUm91dGVyUmVhY3Qvbml2ZWwxJyxyZXF1aXJlKCcuL3J1dGFzQXBpL2F1dGhBY2Nlc29zUmVhY3QvYXV0aE5pdmVsMVJvdXRlclJlYWN0JykpXHJcbi8vIHNlcnZpZG9yLnVzZSgnL2FwaS9hdXRoUm91dGVyUmVhY3Qvbml2ZWwyJyxyZXF1aXJlKCcuL3J1dGFzQXBpL2F1dGhBY2Nlc29zUmVhY3QvYXV0aE5pdmVsMlJvdXRlclJlYWN0JykpXHJcbi8vIHNlcnZpZG9yLnVzZSgnL2FwaS9hdXRoUm91dGVyUmVhY3Qvbml2ZWwzJyxyZXF1aXJlKCcuL3J1dGFzQXBpL2F1dGhBY2Nlc29zUmVhY3QvYXV0aE5pdmVsM1JvdXRlclJlYWN0JykpXHJcbi8vIHNlcnZpZG9yLnVzZSgnL2FwaS9hdXRoUm91dGVyUmVhY3Qvbml2ZWw0JyxyZXF1aXJlKCcuL3J1dGFzQXBpL2F1dGhBY2Nlc29zUmVhY3QvYXV0aE5pdmVsNFJvdXRlclJlYWN0JykpXHJcbi8vIHNlcnZpZG9yLnVzZSgnL2FwaS9hdXRoUm91dGVyUmVhY3Qvbml2ZWw1JyxyZXF1aXJlKCcuL3J1dGFzQXBpL2F1dGhBY2Nlc29zUmVhY3QvYXV0aE5pdmVsNVJvdXRlclJlYWN0JykpXHJcbi8vIHNlcnZpZG9yLnVzZSgnL2FwaS91c3VhcmlvcycscmVxdWlyZSgnLi9ydXRhc0FwaS9hdXRoQWNjZXNvcy9hdXRoQWRtaW5Sb3V0ZXInKSxyZXF1aXJlKCcuL3J1dGFzQXBpL3VzdWFyaW9zJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS91c3VhcmlvcycscmVxdWlyZSgnLi9ydXRhc0FwaS91c3VhcmlvcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvY2F0ZWdvcmlhcycgLCByZXF1aXJlKCcuL3J1dGFzQXBpL2NhdGVnb3JpYXMnKSApXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9hdXRlbnRpZmljYXNpb24nLHJlcXVpcmUoJy4vcnV0YXNBcGkvQXV0ZW50aWZpY2FzaW9uJykpXHJcbi8vXHJcblxyXG4vL1NldHRpbmdzXHJcbnNlcnZpZG9yLnNldCgncG9ydCcscHJvY2Vzcy5lbnYuUE9SVCB8fCA1MDAwKVxyXG5cclxuc2Vydmlkb3IubGlzdGVuKHNlcnZpZG9yLmdldCgncG9ydCcpLChtLGUpPT57XHJcbiAgICBpZihlKXtjb25zb2xlLmxvZyhlKX1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlcnZpZG9yIGNvcnJpZW5kbyBlbiBlbCBQVUVSVE8nLnllbGxvdyxzZXJ2aWRvci5nZXQoJ3BvcnQnKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlcnZpZG9yIGNvcnJpZW5kbyBlbiBlbCBQVUVSVE8nLHNlcnZpZG9yLmdldCgncG9ydCcpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkiLCJjb25zdCBSb3V0ZXIgPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJylcclxuY29uc3QgQ09ORklHID0gcmVxdWlyZSgnLi4vQ09ORklHJylcclxuXHJcbmNvbnN0IHJvdXRlcj1Sb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5nZXQoJy8nLChyZXEscmVzKT0+e1xyXG5cclxuICAgIGlmKCFyZXEuaGVhZGVycy5hdXRob3JpemF0aW9uKXtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonTm8gZW52aW8gZWwgVG9rZW4gZW4gZWwgaGVhZGVycyd9KVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uLnNwbGl0KCcgJylbMV07XHJcbiAgICAgICAgand0LnZlcmlmeSh0b2tlbixDT05GSUcuc2VjcmV0LChlLGQpPT57XHJcbiAgICAgICAgICAgIGlmKGUpe1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5uYW1lfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0pXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyOyIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IGJjcnlwdCA9cmVxdWlyZSgnYmNyeXB0JylcclxuLy8gY29uc3QgVXN1YXJpbyA9IHJlcXVpcmUoJy4uL2VzcXVlbWFzTW9uZ28vZXNxdWVtYVVzdWFyaW9zJylcclxuY29uc3Qge3NlY3JldH0gPSByZXF1aXJlKCcuLi9DT05GSUcnKVxyXG5jb25zdCBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKVxyXG5jb25zdCB7IHRva2VuIH0gPSByZXF1aXJlKCdtb3JnYW4nKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxuXHJcblxyXG5yb3V0ZXIucG9zdCAoICcvJyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGNvbnN0IHsgdXN1YXJpbyAsIHB3IH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSAoJ21zc3FsJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoJ2xvZ3Vlb1VzdWFyaW8nKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCd1c3VhcmlvJyAsIFZhckNoYXIgLCB1c3VhcmlvIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2xvZ2luJylcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIGlmKHJlc3VsdC5yb3dzQWZmZWN0ZWRbMF0gPT09IDAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbiAoIHsgbWVuc2FqZSA6ICdVc3VhcmlvIGluZXhpc3RlbnRlICcgfSApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoICFiY3J5cHQuY29tcGFyZVN5bmMoIHB3ICwgcmVzdWx0LnJlY29yZHNldFswXS5wdyApICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKCB7IG1lbnNhamUgOiAnUGFzc3dvcmQgaW5jb3JyZWN0YSAnIH0gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlVXN1YXJpbyA6IHJlc3VsdC5yZWNvcmRzZXRbMF0ubm9tYnJlVXN1YXJpbyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvVXN1YXJpbyA6IHJlc3VsdC5yZWNvcmRzZXRbMF0uYXBlbGxpZG9Vc3VhcmlvICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpbyA6IHJlc3VsdC5yZWNvcmRzZXRbMF0udXN1YXJpb1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBqd3Quc2lnbiggdXNlciAsIHJlcXVpcmUoJy4uL0NPTkZJRycpLnNlY3JldCAsIHsgZXhwaXJlc0luIDogMTQ0MDAgfSAgLCAgICggZXJyb3IgLCB0b2tlbiApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBlcnJvciApIHsgcmVzLnN0YXR1cygyMDApLmpzb24gKCB7IG1lbnNhamUgOiAnRXJyb3IgYWwgZ2VuZXJhciBlbCB0b2tlbicgfSApICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3Rva2VufSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uIChyZXN1bHQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamUgOiBlLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59IClcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxuLy9UT0RPOiBMSVNUQSBERSBDQVRFR09SSUFTXHJcbnJvdXRlci5nZXQoJy9saXN0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHthYnJpckNvbmV4aW9uUE9PTCxjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdMaXN0YUNhdGVnb3JpYXMnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSgncGFfbGlzdGFDYXRlZ29yaWFzJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0LnJlY29yZHNldClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamUgOiAnRXJyb3IgZW4gZWwgcmVzdWx0YWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplIDogZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogSU5TRVJUQSBDQVRFR09SQVxyXG5cclxucm91dGVyLnBvc3QgKCcvaW5zZXJ0JyAsIGFzeW5jIChyZXEgLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBub21icmVDYXRlZ29yaWEgLCBkZXNjcmlwY2lvbkNhdGVnb3JpYSB9ID0gcmVxLmJvZHlcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdpbnNlcnRDYXRlZ29yaWEnKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgfSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmVDYXRlZ29yaWEnICwgVmFyQ2hhciAsIG5vbWJyZUNhdGVnb3JpYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdkZXNjcmlwY2lvbkNhdGVnb3JpYScgLCBWYXJDaGFyICwgZGVzY3JpcGNpb25DYXRlZ29yaWEgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfaW5zZXJ0Q2F0ZWdvcmlhJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidDYXRlZ29yaWEgZ3VhcmRhZGEgZXhpdG9zYW1lbnRlJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJ30pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogVVBEQVRFIENBVEVHT1JJQVxyXG5cclxucm91dGVyLnB1dCgnL3VwZGF0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge25vbWJyZUNhdGVnb3JpYSxkZXNjcmlwY2lvbkNhdGVnb3JpYSxpZENhdGVnb3JpYX0gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgndXBkYXRlQ2F0ZWdvcmlhJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmVDYXRlZ29yaWEnICwgbXNzcWwuVmFyQ2hhciAsIG5vbWJyZUNhdGVnb3JpYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdkZXNjcmlwY2lvbkNhdGVnb3JpYScgLCBtc3NxbC5WYXJDaGFyICwgZGVzY3JpcGNpb25DYXRlZ29yaWEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRDYXRlZ29yaWEnICwgbXNzcWwuSW50ICwgaWRDYXRlZ29yaWEgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfdXBkYXRlQ2F0ZWdvcmlhJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidDYXRlZ29yaWEgbW9kaWZpY2FkYSBleGl0b3NhbWVudGUnfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBERUxFVEUgQ0FUNkVHT1JJQVxyXG5cclxucm91dGVyLnBvc3QoJy9kZWxldGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtpZENhdGVnb3JpYX0gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnZGVsZXRlQ2F0ZWdvcmlhJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZENhdGVnb3JpYScgLCBtc3NxbC5JbnQgLCBpZENhdGVnb3JpYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9kZWxldGVDYXRlZ29yaWEnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J0NhdGVnb3JpYSBlbGltaW5hZGEgZXhpdG9zYW1lbnRlJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJ30pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3QgYmNyeXAgPSByZXF1aXJlKCdiY3J5cHQnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbi8vICEgaW5zZXJ0YXIgdXN1YXJpb1xyXG5cclxucm91dGVyLnBvc3QgKCAnL2luc2VydCcgLCBhc3luYyAocmVxLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSAoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGNvbnN0IHsgbm9tYnJlVXN1YXJpbyAsIGFwZWxsaWRvVXN1YXJpbyAsIHVzdWFyaW8gLCBwdyB9ID0gcmVxLmJvZHlcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnaW5zZXJ0VXN1YXJpbycpXHJcbiAgICAgICAgY29uc3Qge1JlcXVlc3QgLCBWYXJDaGFyIH0gPSByZXF1aXJlICgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCdub21icmVVc3VhcmlvJyAsIFZhckNoYXIgLCBub21icmVVc3VhcmlvKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoJ2FwZWxsaWRvVXN1YXJpbycgLCBWYXJDaGFyICwgYXBlbGxpZG9Vc3VhcmlvKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoJ3VzdWFyaW8nICwgVmFyQ2hhciAsIHVzdWFyaW8pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICgncHcnICwgVmFyQ2hhciAsIGJjcnlwLmhhc2hTeW5jKHB3ICwgMTApIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSggJ3BhX2luc2VydFVzdWFyaW8nIClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oIHsgbWVuc2FqZSA6ICdVc3VhcmlvIGluc2VydGFkbyBjb3JyZWN0YW1lbnRlICcgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5cclxuXHJcbi8vIC8vICEgbGlzdGFkbyBkZSB1c3Vhcmlvc1xyXG4vLyByb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuLy8gICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSAoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuLy8gICAgIHRyeXtcclxuLy8gICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCAnbGlhc3RhVXN1YXJpbycpXHJcbi8vICAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbi8vICAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QoY29uZXhpb24pXHJcbi8vICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX2xpc3RhVXN1YXJpb3MnKVxyXG4vLyAgICAgICAgIGlmKHJlc3VsdCl7XHJcbi8vICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbi8vICAgICAgICAgICAgIHJlcy5qc29uKHJlc3VsdC5yZWNvcmRzZXQpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGVsc2V7XHJcbi8vICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbi8vICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtzdGF0dXM6IDQwMyxtZW5zYWplOmUubWVzc2FnZX0pXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgY2F0Y2goZSl7XHJcbi8vICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7c3RhdHVzOiA0MDMsbWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG4vLyAvLyEgbGlzdGEgZGUgcGVyZmlsZXNcclxuLy8gcm91dGVyLmdldCgnL3BlcmZpbGVzJyxhc3luYyAocmVxLHJlcyk9PntcclxuLy8gICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSAoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuLy8gICAgIHRyeXtcclxuLy8gICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCAnbGlzdGFQZXJmaWxlcycpXHJcbi8vICAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbi8vICAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QoY29uZXhpb24pXHJcbi8vICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX2xpc3RhUGVyZmlsZXMnKVxyXG4vLyAgICAgICAgIGlmKHJlc3VsdCl7XHJcbi8vICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbi8vICAgICAgICAgICAgIHJlcy5qc29uKHJlc3VsdC5yZWNvcmRzZXQpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGVsc2V7XHJcbi8vICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbi8vICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtzdGF0dXM6IDQwMyxtZW5zYWplOmUubWVzc2FnZX0pXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgY2F0Y2goZSl7XHJcbi8vICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7c3RhdHVzOiA0MDMsbWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG4vLyAvLyEgY29uc3VsdGEgdXN1YXJpbyBwb3IgaWRcclxuLy8gcm91dGVyLmdldCgnLzppZCcsYXN5bmMgKHJlcSxyZXMpPT57XHJcbi8vICAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWRcclxuLy8gICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSAoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuLy8gICAgIHRyeXtcclxuLy8gICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCAnZ2V0VXNleElkJylcclxuLy8gICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuLy8gICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdChjb25leGlvbilcclxuLy8gICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVXN1YXJpbycgLCBtc3NxbC5JbnQgLCBpZClcclxuLy8gICAgICAgICBjb25zdCBxdWVyeSA9IGBzZWxlY3RcclxuLy8gICAgICAgICB1LmlkIGFzIGlkVXN1YXJpbyAsXHJcbi8vICAgICAgICAgdS51c2VyTmFtZSBhcyB1c2VyTmFtZSAsXHJcbi8vICAgICAgICAgdS5lbWFpbCBhcyBlbWFpbCAsXHJcbi8vICAgICAgICAgdS5ub21icmUgYXMgbm9tYnJlVXN1YXJpbyAsXHJcbi8vICAgICAgICAgdS5hcGVsbGlkbyBhcyBhcGVsbGlkb1VzdWFyaW8gLFxyXG4vLyAgICAgICAgIHAuaWQgYXMgaWRQZXJmaWwgLFxyXG4vLyAgICAgICAgIHAubm9tYnJlIGFzIG5vbWJyZVBlcmZpbFxyXG4vLyAgICAgICAgIGZyb20gdXN1YXJpb3MgdVxyXG4vLyAgICAgICAgIGpvaW4gcGVyZmlsZXMgcCBvbiBwLmlkID0gdS5pZF9wZXJmaWxcclxuLy8gICAgICAgICB3aGVyZSB1LmlkID0gQGlkVXN1YXJpb2BcclxuLy8gICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkocXVlcnkpXHJcbi8vICAgICAgICAgaWYocmVzdWx0KXtcclxuLy8gICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICAgICAgcmVzLmpzb24ocmVzdWx0LnJlY29yZHNldClcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgZWxzZXtcclxuLy8gICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oe3N0YXR1czogNDAzLG1lbnNhamU6ZS5tZXNzYWdlfSlcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICBjYXRjaChlKXtcclxuLy8gICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4vLyAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtzdGF0dXM6IDQwMyxtZW5zYWplOmUubWVzc2FnZX0pXHJcbi8vICAgICB9XHJcbi8vIH0pXHJcblxyXG4vLyAvLyFndWFyZGEgdXN1YXJpb1xyXG4vLyByb3V0ZXIucG9zdCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbi8vICAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4vLyAgICAgY29uc3QgIHt1c2VyTmFtZSxwYXNzd29yZCxlbWFpbCxub21icmUsYXBlbGxpZG8saWRQZXJmaWx9ID0gcmVxLmJvZHlcclxuLy8gICAgIHRyeXtcclxuLy8gICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdzYXZlVXNlcicpXHJcbi8vICAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlICgnbXNzcWwnKVxyXG4vLyAgICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0KGNvbmV4aW9uKVxyXG4vLyAgICAgICAgIGNvbnN0IHB3ID0gYmNyeXAuaGFzaFN5bmMocGFzc3dvcmQsMTApXHJcbi8vICAgICAgICAgY29uc29sZS5sb2cocHcpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCd1c2VyTmFtZScgLCBtc3NxbC5WYXJDaGFyICwgdXNlck5hbWUpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdwYXNzd29yZCcgLCBtc3NxbC5WYXJDaGFyICwgcHcpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdlbWFpbCcgLCBtc3NxbC5WYXJDaGFyICwgZW1haWwpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmUnICwgbXNzcWwuVmFyQ2hhciAsIG5vbWJyZSlcclxuLy8gICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2FwZWxsaWRvJyAsIG1zc3FsLlZhckNoYXIgLCBhcGVsbGlkbylcclxuLy8gICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkUGVyZmlsJyAsIG1zc3FsLkludCAsIGlkUGVyZmlsKVxyXG4vLyAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlKCdwYV9pbnNlcnRVc3VhcmlvcycpXHJcbi8vICAgICAgICAgaWYocmVzdWx0KXtcclxuLy8gICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4vLyAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6ICd1c3VhcmlvIGluc2VydGFkbyBjb3JyZWN0YW1lbnRlICEnIH0pXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgY2F0Y2goZXJyKXtcclxuLy8gICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4vLyAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHtlcnJvcjplcnIubWVzc2FnZX0pXHJcbi8vICAgICB9XHJcbi8vIH0pXHJcblxyXG4vLyByb3V0ZXIucHV0KCcvJywgYXN5bmMgKHJlcSxyZXMpPT57XHJcbi8vICAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4vLyAgICAgY29uc3QgIHt1c2VyTmFtZSxwYXNzd29yZCxlbWFpbCxub21icmUsYXBlbGxpZG8saWRQZXJmaWwgLCBpZFVzdWFyaW99ID0gcmVxLmJvZHlcclxuLy8gICAgIHRyeXtcclxuLy8gICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCd1cGRhdGVVc2VyJylcclxuLy8gICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUgKCdtc3NxbCcpXHJcbi8vICAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QoY29uZXhpb24pXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCd1c2VyTmFtZScgLCBtc3NxbC5WYXJDaGFyICwgdXNlck5hbWUpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdwYXNzd29yZCcgLCBtc3NxbC5WYXJDaGFyICwgYmNyeXAuaGFzaFN5bmMocGFzc3dvcmQpKVxyXG4vLyAgICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZW1haWwnICwgbXNzcWwuVmFyQ2hhciAsIGVtYWlsKVxyXG4vLyAgICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlJyAsIG1zc3FsLlZhckNoYXIgLCBub21icmUpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdhcGVsbGlkbycgLCBtc3NxbC5WYXJDaGFyICwgYXBlbGxpZG8pXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFBlcmZpbCcgLCBtc3NxbC5JbnQgLCBpZFBlcmZpbClcclxuLy8gICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVXN1YXJpbycgLCBtc3NxbC5JbnQgLCBpZFVzdWFyaW8pXHJcbi8vICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX3VwZGF0ZVVzdWFyaW9zJylcclxuLy8gICAgICAgICBpZihyZXN1bHQpe1xyXG4vLyAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbi8vICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTogJ3VzdWFyaW8gaW5zZXJ0YWRvIGNvcnJlY3RhbWVudGUgIScgfSlcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICBjYXRjaChlKXtcclxuLy8gICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4vLyAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHtlcnJvcjplcnIubWVzc2FnZX0pXHJcbi8vICAgICB9XHJcbi8vIH0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29sb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1zc3FsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=