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
}));
servidor.use(__webpack_require__(/*! ./rutasApi/checkLogin */ "./rutasApi/checkLogin.js"));

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
servidor.use('/api/unidadesMedida', __webpack_require__(/*! ./rutasApi/unidadesMedida */ "./rutasApi/unidadesMedida.js"));
servidor.use('/api/direcciones', __webpack_require__(/*! ./rutasApi/direcciones */ "./rutasApi/direcciones.js"));
servidor.use('/api/marcas', __webpack_require__(/*! ./rutasApi/marcas */ "./rutasApi/marcas.js"));
servidor.use('/api/productos', __webpack_require__(/*! ./rutasApi/productos */ "./rutasApi/productos.js"));
servidor.use('/api/articulos', __webpack_require__(/*! ./rutasApi/articulos */ "./rutasApi/articulos.js"));
servidor.use('/api/tiposDocumento', __webpack_require__(/*! ./rutasApi/tiposDocumento */ "./rutasApi/tiposDocumento.js"));
servidor.use('/api/tiposPersona', __webpack_require__(/*! ./rutasApi/tiposPersona */ "./rutasApi/tiposPersona.js"));
servidor.use('/api/tiposContribullente', __webpack_require__(/*! ./rutasApi/tiposContribullente */ "./rutasApi/tiposContribullente.js"));
servidor.use('/api/clientes', __webpack_require__(/*! ./rutasApi/clientes */ "./rutasApi/clientes.js"));
servidor.use('/api/sucursales', __webpack_require__(/*! ./rutasApi/sucursales */ "./rutasApi/sucursales.js"));
servidor.use('/api/proveedores', __webpack_require__(/*! ./rutasApi/proveedores */ "./rutasApi/proveedores.js"));
servidor.use('/api/getuserlogin', __webpack_require__(/*! ./rutasApi/getUserLogin */ "./rutasApi/getUserLogin.js")); //
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
          mensaje: 'Usuario inexistente ',
          opOK: false
        });
      } else {
        if (!bcrypt.compareSync(pw, result.recordset[0].pw)) {
          res.status(200).json({
            mensaje: 'Password incorrecta ',
            opOK: false
          });
        } else {
          const user = {
            idUsuario: result.recordset[0].idUsuario,
            nombreUsuario: result.recordset[0].nombreUsuario,
            apellidoUsuario: result.recordset[0].apellidoUsuario,
            usuario: result.recordset[0].usuario
          };
          jwt.sign(user, __webpack_require__(/*! ../CONFIG */ "./CONFIG.js").secret, {
            expiresIn: 14400
          }, (error, token) => {
            if (error) {
              res.status(200).json({
                mensaje: 'Error al generar el token',
                opOK: false
              });
            } else {
              res.status(200).json({
                token,
                opOK: true
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

/***/ "./rutasApi/articulos.js":
/*!*******************************!*\
  !*** ./rutasApi/articulos.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router(); //TODO: LISTA DE ARTICULOS

router.get('/list', async (req, res) => {
  try {
    const {
      abrirConexionPOOL,
      cerrarConexionPOOL
    } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

    const {
      Request
    } = __webpack_require__(/*! mssql */ "mssql");

    const conexion = await abrirConexionPOOL('ListaArticulos');
    const myRequest = new Request(conexion);
    const result = await myRequest.execute('pa_listaArticulos');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        list: result.recordset,
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error en el resultado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(403).json({
      mensaje: e.message,
      opOK: false
    });
  }
}); //TODO: INSERTA ARTICULO

router.post('/insert', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const {
      nombreArticulo,
      descripcionArticulo,
      pesoArticulo,
      codProvedorArticulo,
      codInternoArticulo,
      idUnidadMedida,
      idCategoria,
      idMarca
    } = req.body;
    const conexion = await abrirConexionPOOL('insertArticulo');

    const {
      Request,
      VarChar,
      Real,
      Int
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('nombreArticulo', VarChar, nombreArticulo);
    myRequest.input('descripcionArticulo', VarChar, descripcionArticulo);
    myRequest.input('pesoArticulo', Real, pesoArticulo);
    myRequest.input('codProvedorArticulo', Int, codProvedorArticulo);
    myRequest.input('codInternoArticulo', Int, codInternoArticulo);
    myRequest.input('idUnidadMedida', Int, idUnidadMedida);
    myRequest.input('idCategoria', Int, idCategoria);
    myRequest.input('idMarca', Int, idMarca);
    const result = await myRequest.execute('pa_insertArticulo');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Articulo guardado exitosamente',
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error al inesperado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
}); //TODO: UPDATE ARTICULO

router.put('/update', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const {
      idArticulo,
      nombreArticulo,
      descripcionArticulo,
      pesoArticulo,
      codProvedorArticulo,
      codInternoArticulo,
      idUnidadMedida,
      idCategoria,
      idMarca
    } = req.body;
    const conexion = await abrirConexionPOOL('updateArticulo');

    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new mssql.Request(conexion);
    myRequest.input('idArticulo', mssql.Int, idArticulo);
    myRequest.input('nombreArticulo', mssql.VarChar, nombreArticulo);
    myRequest.input('descripcionArticulo', mssql.VarChar, descripcionArticulo);
    myRequest.input('pesoArticulo', mssql.Real, pesoArticulo);
    myRequest.input('codProvedorArticulo', mssql.Int, codProvedorArticulo);
    myRequest.input('codInternoArticulo', mssql.Int, codInternoArticulo);
    myRequest.input('idUnidadMedida', mssql.Int, idUnidadMedida);
    myRequest.input('idCategoria', mssql.Int, idCategoria);
    myRequest.input('idMarca', mssql.Int, idMarca);
    const result = await myRequest.execute('pa_updateArticulo');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Arcticulo modificado exitosamente',
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error al inesperado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
}); //TODO: DELETE ARTICULO

router.post('/delete', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const {
      idArticulo
    } = req.body;
    const conexion = await abrirConexionPOOL('deleteArticulo');

    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new mssql.Request(conexion);
    myRequest.input('idArticulo', mssql.Int, idArticulo);
    const result = await myRequest.execute('pa_deleteArticulo');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Articulo eliminado exitosamente',
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error al inesperado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
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
      res.status(200).json({
        list: result.recordset,
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error en el resultado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
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
        mensaje: 'Categoria guardada exitosamente',
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error al inesperado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
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
        mensaje: 'Categoria modificada exitosamente',
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error al inesperado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
}); //TODO: DELETE CATEGORIA

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
        mensaje: 'Categoria eliminada exitosamente',
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error al inesperado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/checkLogin.js":
/*!********************************!*\
  !*** ./rutasApi/checkLogin.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

const {
  secret
} = __webpack_require__(/*! ../CONFIG */ "./CONFIG.js");

module.exports = function (req, res, next) {
  if (req.path !== '/api/logueo') {
    if (!req.headers.authorization) {
      res.status(200).json({
        mensaje: 'No envio el token en el headers',
        logOK: false
      });
    } else {
      const token = req.headers.authorization.split(' ')[1];
      jwt.verify(token, secret, (e, datos) => {
        if (e) {
          res.status(200).json({
            mensaje: e.message,
            otro: 'error  en la commprobacion token',
            logOK: false
          });
        } else {
          return next();
        }
      });
    }
  } else {
    return next();
  }
};

/***/ }),

/***/ "./rutasApi/clientes.js":
/*!******************************!*\
  !*** ./rutasApi/clientes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router(); //TODO: LISTA DE CLIENTES

router.get('/list', async (req, res) => {
  try {
    const {
      abrirConexionPOOL,
      cerrarConexionPOOL
    } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

    const {
      Request
    } = __webpack_require__(/*! mssql */ "mssql");

    const conexion = await abrirConexionPOOL('ListaClientes');
    const myRequest = new Request(conexion);
    const result = await myRequest.execute('pa_listaClientes');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        list: result.recordset,
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error en el resultado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
}); //TODO: INSERTA CLIENTE

router.post('/insert', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const {
      nombreCliente,
      apellidoCliente,
      idTipoDocumento,
      nroDocCliente,
      idTipoContribullente,
      nroCuitCuilCliente,
      idDireccion,
      idTipoPersona
    } = req.body;
    const conexion = await abrirConexionPOOL('insertCliente');

    const {
      Request,
      VarChar,
      Int
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('nombreCliente', VarChar, nombreCliente);
    myRequest.input('apellidoCliente', VarChar, apellidoCliente);
    myRequest.input('idTipoDocumento', Int, idTipoDocumento);
    myRequest.input('nroDocCliente', VarChar, nroDocCliente);
    myRequest.input('idTipoContribullente', Int, idTipoContribullente);
    myRequest.input('nroCuitCuilCliente', Int, nroCuitCuilCliente);
    myRequest.input('idDireccion', Int, idDireccion);
    myRequest.input('idTipoPersona', Int, idTipoPersona);
    const result = await myRequest.execute('pa_insertCliente');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Cliente guardado exitosamente',
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error al inesperado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
}); //TODO: UPDATE CLIENTE

router.put('/update', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const {
      idCliente,
      nombreCliente,
      apellidoCliente,
      idTipoDocumento,
      nroDocCliente,
      idTipoContribullente,
      nroCuitCuilCliente,
      idDireccion,
      idTipoPersona
    } = req.body;
    const conexion = await abrirConexionPOOL('updateCliente');

    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new mssql.Request(conexion);
    myRequest.input('idCliente', mssql.Int, idCliente);
    myRequest.input('nombreCliente', mssql.VarChar, nombreCliente);
    myRequest.input('apellidoCliente', mssql.VarChar, apellidoCliente);
    myRequest.input('idTipoDocumento', mssql.Int, idTipoDocumento);
    myRequest.input('nroDocCliente', mssql.VarChar, nroDocCliente);
    myRequest.input('idTipoContribullente', Int, idTipoContribullente);
    myRequest.input('nroCuitCuilCliente', mssql.Int, nroCuitCuilCliente);
    myRequest.input('idDireccion', mssql.Int, idDireccion);
    myRequest.input('idTipoPersona', mssql.Int, idTipoPersona);
    const result = await myRequest.execute('pa_updateCliente');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Cliente modificado exitosamente',
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error al inesperado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
}); //TODO: DELETE CLIENTE

router.post('/delete', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const {
      idCliente
    } = req.body;
    const conexion = await abrirConexionPOOL('deleteCliente');

    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new mssql.Request(conexion);
    myRequest.input('idCliente', mssql.Int, idCliente);
    const result = await myRequest.execute('pa_deleteCliente');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Cliente eliminado exitosamente',
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error al inesperado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/direcciones.js":
/*!*********************************!*\
  !*** ./rutasApi/direcciones.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router(); //TODO: LISTA DE DIRECCIONES

router.get('/list', async (req, res) => {
  try {
    const {
      abrirConexionPOOL,
      cerrarConexionPOOL
    } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

    const {
      Request
    } = __webpack_require__(/*! mssql */ "mssql");

    const conexion = await abrirConexionPOOL('ListaDirecciones');
    const myRequest = new Request(conexion);
    const result = await myRequest.execute('pa_listaDirecciones');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        list: result.recordset,
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error en el resultado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
}); //TODO: INSERTA DIRECCION

router.post('/insert', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const {
      calleDireccion,
      alturaDireccion,
      codigoPostalDireccion,
      barrioDireccion,
      otrosDatosDireccion
    } = req.body;
    const conexion = await abrirConexionPOOL('insertDireccion');

    const {
      Request,
      VarChar,
      Int
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('calleDireccion', VarChar, calleDireccion);
    myRequest.input('alturaDireccion', Int, alturaDireccion);
    myRequest.input('codigoPostalDireccion', Int, codigoPostalDireccion);
    myRequest.input('barrioDireccion', VarChar, barrioDireccion);
    myRequest.input('otrosDatosDireccion', VarChar, otrosDatosDireccion);
    const result = await myRequest.execute('pa_insertDireccion');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Direccion guardada exitosamente',
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error al inesperado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(403).json({
      mensaje: e.message,
      opOK: false
    });
  }
}); //TODO: UPDATE DIRECCION

router.put('/update', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const {
      calleDireccion,
      alturaDireccion,
      codigoPostalDireccion,
      barrioDireccion,
      otrosDatosDireccion,
      idDireccion
    } = req.body;
    const conexion = await abrirConexionPOOL('updateDireccion');

    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new mssql.Request(conexion);
    myRequest.input('calleDireccion', mssql.VarChar, calleDireccion);
    myRequest.input('alturaDireccion', mssql.Int, alturaDireccion);
    myRequest.input('codigoPostalDireccion', mssql.Int, codigoPostalDireccion);
    myRequest.input('barrioDireccion', mssql.VarChar, barrioDireccion);
    myRequest.input('otrosDatosDireccion', mssql.VarChar, otrosDatosDireccion);
    myRequest.input('idDireccion', mssql.Int, idDireccion);
    const result = await myRequest.execute('pa_updateDireccion');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Direccion modificada exitosamente',
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error al inesperado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
}); //TODO: DELETE DIRECION

router.post('/delete', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const {
      idDireccion
    } = req.body;
    const conexion = await abrirConexionPOOL('deleteDireccion');

    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new mssql.Request(conexion);
    myRequest.input('idDireccion', mssql.Int, idDireccion);
    const result = await myRequest.execute('pa_deleteDireccion');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Direccion eliminada exitosamente',
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error al inesperado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/getUserLogin.js":
/*!**********************************!*\
  !*** ./rutasApi/getUserLogin.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Router = __webpack_require__(/*! express */ "express");

const jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

const CONFIG = __webpack_require__(/*! ../CONFIG */ "./CONFIG.js");

const router = Router();
router.get('/', (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, CONFIG.secret, (e, d) => {
    if (e) {
      res.status(200).json({
        mensaje: e.name,
        logOK: false
      });
    } else {
      res.status(200).json({
        usuario: d,
        logOK: true
      });
    }
  });
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/marcas.js":
/*!****************************!*\
  !*** ./rutasApi/marcas.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router(); //TODO: LISTA DE MARCAS

router.get('/list', async (req, res) => {
  try {
    const {
      abrirConexionPOOL,
      cerrarConexionPOOL
    } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

    const {
      Request
    } = __webpack_require__(/*! mssql */ "mssql");

    const conexion = await abrirConexionPOOL('ListaMarcas');
    const myRequest = new Request(conexion);
    const result = await myRequest.execute('pa_listaMarcas');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        list: result.recordset,
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error en el resultado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
}); //TODO: INSERTA MARCA

router.post('/insert', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const {
      nombreMarca
    } = req.body;
    const conexion = await abrirConexionPOOL('insertMarca');

    const {
      Request,
      VarChar
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('nombreMarca', VarChar, nombreMarca);
    const result = await myRequest.execute('pa_insertMarca');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Marca guardada exitosamente',
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error al inesperado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
}); //TODO: UPDATE MARCA

router.put('/update', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const {
      nombreMarca,
      idMarca
    } = req.body;
    const conexion = await abrirConexionPOOL('updateMarca');

    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new mssql.Request(conexion);
    myRequest.input('nombreMarca', mssql.VarChar, nombreMarca);
    myRequest.input('idMarca', mssql.Int, idMarca);
    const result = await myRequest.execute('pa_updateMarca');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Marca modificada exitosamente',
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error al inesperado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
}); //TODO: DELETE MARCA

router.post('/delete', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const {
      idMarca
    } = req.body;
    const conexion = await abrirConexionPOOL('deleteMarca');

    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new mssql.Request(conexion);
    myRequest.input('idMarca', mssql.Int, idMarca);
    const result = await myRequest.execute('pa_deleteMarca');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Marca eliminada exitosamente',
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error al inesperado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/productos.js":
/*!*******************************!*\
  !*** ./rutasApi/productos.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const {
  eachSeries
} = __webpack_require__(/*! async */ "async");

const router = Router(); //TODO: LISTA DE PRODUCTOS

router.get('/list', async (req, res) => {
  try {
    const {
      abrirConexionPOOL,
      cerrarConexionPOOL
    } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

    const {
      Request
    } = __webpack_require__(/*! mssql */ "mssql");

    const conexion = await abrirConexionPOOL('ListaProductos');
    const myRequest = new Request(conexion);
    const result = await myRequest.execute('pa_listaProductos');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        list: result.recordset,
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error en el resultado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(403).json({
      mensaje: e.message,
      opOK: false
    });
  }
}); //TODO: INSERTA PRODUCTO

router.post('/insert', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    nombreProducto,
    descripcionProducto,
    precioActualProducto,
    vecDetallesProducto
  } = req.body;
  const conexion = await abrirConexionPOOL('insertProducto');

  const {
    Request,
    VarChar,
    Int,
    Real,
    Transaction
  } = __webpack_require__(/*! mssql */ "mssql");

  const myTransaction = new Transaction(conexion);
  myTransaction.begin(async err => {
    if (err) {
      myTransaction.rollback();
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: err.message,
        opOK: false
      });
    }

    try {
      const myRequest = new Request(myTransaction);
      myRequest.input('nombreProducto', VarChar, nombreProducto);
      myRequest.input('descripcionProducto', VarChar, descripcionProducto);
      myRequest.input('precioActualProducto', Real, precioActualProducto);
      const result = await myRequest.execute('pa_insertProductoo');

      if (result.rowsAffected[0] === 0 || !result.recordset[0].idProducto) {
        myTransaction.rollback();
        cerrarConexionPOOL();
        res.status(200).json({
          mensaje: 'Producto no insertado',
          opOK: false
        });
      } else {
        const idProducto = parseInt(result.recordset[0].idProducto);
        const myRequestDP = new Request(myTransaction);
        myRequestDP.input('idProducto', Int, idProducto);
        myRequestDP.input('idArticulo', Int, 0);
        myRequestDP.input('cantidadDetalleProducto', Real, 0);
        eachSeries(vecDetallesProducto, (DP, callback) => {
          myRequestDP.parameters.idArticulo.value = DP.idArticulo;
          myRequestDP.parameters.cantidadDetalleProducto.value = DP.cantidadDetalleProducto;
          myRequestDP.execute('pa_insertDetalleProducto', (E, R) => {
            if (E) {
              callback(E);
            } else {
              callback();
            }
          });
        }, errorCallBack => {
          if (errorCallBack) {
            myTransaction.rollback();
            cerrarConexionPOOL();
            res.status(200).json({
              mensaje: errorCallBack,
              opOK: false
            });
          } else {
            myTransaction.commit();
            cerrarConexionPOOL();
            res.status(200).json({
              mensaje: 'Producto y detalles de producto guardados exitosamente',
              opOK: true
            });
          }
        });
      }
    } catch (e) {
      myTransaction.rollback();
      cerrarConexionPOOL();
      res.status(403).json({
        mensaje: e.message,
        opOK: false
      });
    }
  });
}); //TODO: UPDATE PRODUCTO

router.put('/update', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const {
      nombreProducto,
      descripcionProducto,
      precioActualProducto,
      idProducto
    } = req.body;
    const conexion = await abrirConexionPOOL('updateProducto');

    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new mssql.Request(conexion);
    myRequest.input('nombreProducto', mssql.VarChar, nombreProducto);
    myRequest.input('descripcionProducto', mssql.VarChar, descripcionProducto);
    myRequest.input('precioActualProducto', mssql.Real, precioActualProducto);
    myRequest.input('idProducto', mssql.Int, idProducto);
    const result = await myRequest.execute('pa_updateProducto');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Producto modificado exitosamente',
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error al inesperado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
}); //TODO: DELETE PRODUCTO

router.post('/delete', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const {
      idProducto
    } = req.body;
    const conexion = await abrirConexionPOOL('deleteProducto');

    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new mssql.Request(conexion);
    myRequest.input('idProducto', mssql.Int, idProducto);
    const result = await myRequest.execute('pa_deleteProducto');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Producto eliminado exitosamente',
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(403).json({
        mensaje: 'Error al inesperado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(403).json({
      mensaje: e.message,
      opOK: false
    });
  }
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/proveedores.js":
/*!*********************************!*\
  !*** ./rutasApi/proveedores.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router(); //TODO: LISTA DE PROVEEDORES

router.get('/list', async (req, res) => {
  try {
    const {
      abrirConexionPOOL,
      cerrarConexionPOOL
    } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

    const {
      Request
    } = __webpack_require__(/*! mssql */ "mssql");

    const conexion = await abrirConexionPOOL('ListaProveedores');
    const myRequest = new Request(conexion);
    const result = await myRequest.execute('pa_listaProveedores');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        list: result.recordset,
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error en el resultado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
}); //TODO: INSERTA PROVEEDOR

router.post('/insert', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const {
      nombreProveedor,
      apellidoProveedor,
      idTipoDocumento,
      nroDocProveedor,
      idTipoContribullente,
      nroCuitCuilProveedor,
      idDireccion,
      idTipoPersona
    } = req.body;
    const conexion = await abrirConexionPOOL('insertProveedor');

    const {
      Request,
      VarChar,
      Int
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('nombreProveedor', VarChar, nombreProveedor);
    myRequest.input('apellidoProveedor', VarChar, apellidoProveedor);
    myRequest.input('idTipoDocumento', Int, idTipoDocumento);
    myRequest.input('nroDocProveedor', VarChar, nroDocProveedor);
    myRequest.input('idTipoContribullente', Int, idTipoContribullente);
    myRequest.input('nroCuitCuilProveedor', Int, nroCuitCuilProveedor);
    myRequest.input('idDireccion', Int, idDireccion);
    myRequest.input('idTipoPersona', Int, idTipoPersona);
    const result = await myRequest.execute('pa_insertProveedor');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Proveedor guardado exitosamente',
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error al inesperado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
}); //TODO: UPDATE PROVEEDOR

router.put('/update', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const {
      idProveedor,
      nombreProveedor,
      apellidoProveedor,
      idTipoDocumento,
      nroDocProveedor,
      idTipoContribullente,
      nroCuitCuilProveedor,
      idDireccion,
      idTipoPersona
    } = req.body;
    const conexion = await abrirConexionPOOL('updateProveedor');

    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new mssql.Request(conexion);
    myRequest.input('idProveedor', mssql.Int, idProveedor);
    myRequest.input('nombreProveedor', mssql.VarChar, nombreProveedor);
    myRequest.input('apellidoProveedor', mssql.VarChar, apellidoProveedor);
    myRequest.input('idTipoDocumento', mssql.Int, idTipoDocumento);
    myRequest.input('nroDocProveedor', mssql.VarChar, nroDocProveedor);
    myRequest.input('idTipoContribullente', Int, idTipoContribullente);
    myRequest.input('nroCuitCuilProveedor', mssql.Int, nroCuitCuilProveedor);
    myRequest.input('idDireccion', mssql.Int, idDireccion);
    myRequest.input('idTipoPersona', mssql.Int, idTipoPersona);
    const result = await myRequest.execute('pa_updateProveedor');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Proveedor modificado exitosamente',
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error al inesperado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
}); //TODO: DELETE PROVEEDOR

router.post('/delete', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const {
      idProveedor
    } = req.body;
    const conexion = await abrirConexionPOOL('deleteProveedor');

    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new mssql.Request(conexion);
    myRequest.input('idProveedor', mssql.Int, idProveedor);
    const result = await myRequest.execute('pa_deleteProveedor');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Proveedor eliminado exitosamente',
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error al inesperado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/sucursales.js":
/*!********************************!*\
  !*** ./rutasApi/sucursales.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router(); //TODO: LISTA SUCURSALES

router.get('/list', async (req, res) => {
  try {
    const {
      abrirConexionPOOL,
      cerrarConexionPOOL
    } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

    const {
      Request
    } = __webpack_require__(/*! mssql */ "mssql");

    const conexion = await abrirConexionPOOL('ListaSucursales');
    const myRequest = new Request(conexion);
    const result = await myRequest.execute('pa_listaSucursales');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        list: result.recordset,
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error en el resultado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
}); //TODO: INSERTA SUCURSAL

router.post('/insert', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const {
      idDireccion,
      nombreSucursal
    } = req.body;
    const conexion = await abrirConexionPOOL('insertSucursal');

    const {
      Request,
      VarChar,
      Int
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('idDireccion', Int, idDireccion);
    myRequest.input('nombreSucursal', VarChar, nombreSucursal);
    const result = await myRequest.execute('pa_insertSucursal');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Sucursal guardada exitosamente',
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error al inesperado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
}); //TODO: UPDATE SUCURSAL

router.put('/update', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const {
      idSucursal,
      idDireccion,
      nombreSucursal
    } = req.body;
    const conexion = await abrirConexionPOOL('updateSucursal');

    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new mssql.Request(conexion);
    myRequest.input('idSucursal', mssql.Int, idSucursal);
    myRequest.input('idDireccion', mssql.Int, idDireccion);
    myRequest.input('nombreSucursal', mssql.VarChar, nombreSucursal);
    const result = await myRequest.execute('pa_updateSucursal');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Sucursal modificada exitosamente',
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error al inesperado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
}); //TODO: DELETE SUCURSAL

router.post('/delete', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const {
      idSucursal
    } = req.body;
    const conexion = await abrirConexionPOOL('deleteSucursal');

    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new mssql.Request(conexion);
    myRequest.input('idSucursal', mssql.Int, idSucursal);
    const result = await myRequest.execute('pa_deleteSucursal');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Sucursal eliminada exitosamente',
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error al inesperado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/tiposContribullente.js":
/*!*****************************************!*\
  !*** ./rutasApi/tiposContribullente.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router(); //TODO: LISTA DE TIPOS DE CONTRIBULLENTE

router.get('/list', async (req, res) => {
  try {
    const {
      abrirConexionPOOL,
      cerrarConexionPOOL
    } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

    const {
      Request
    } = __webpack_require__(/*! mssql */ "mssql");

    const conexion = await abrirConexionPOOL('ListaTiposContribullente');
    const myRequest = new Request(conexion);
    const result = await myRequest.execute('pa_listaTiposContribullente');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        list: result.recordset,
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error en el resultado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
}); //TODO: INSERTA TIPO DE CONTRIBULLENTE

router.post('/insert', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const {
      nombreTipoContribullente,
      descripcionTipoContribullente
    } = req.body;
    const conexion = await abrirConexionPOOL('insertTipoContribullente');

    const {
      Request,
      VarChar
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('nombreTipoContribullente', VarChar, nombreTipoContribullente);
    myRequest.input('descripcionTipoContribullente', VarChar, descripcionTipoContribullente);
    const result = await myRequest.execute('pa_insertTipoContribullente');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Tipo de contribullente guardado exitosamente',
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error al inesperado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
}); //TODO: UPDATE TIPO DE CONTRIBULLENTE

router.put('/update', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const {
      nombreTipoContribullente,
      descripcionTipoContribullente,
      idTipoContribullente
    } = req.body;
    const conexion = await abrirConexionPOOL('updateTipoContribullente');

    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new mssql.Request(conexion);
    myRequest.input('nombreTipoContribullente', mssql.VarChar, nombreTipoContribullente);
    myRequest.input('descripcionTipoContribullente', mssql.VarChar, descripcionTipoContribullente);
    myRequest.input('idTipoContribullente', mssql.Int, idTipoContribullente);
    const result = await myRequest.execute('pa_updateTipoContribullente');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Tipo de contribullente modificado exitosamente',
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error al inesperado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
}); //TODO: DELETE TIPO DE CONTRIBULLENTE

router.post('/delete', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const {
      idTipoContribullente
    } = req.body;
    const conexion = await abrirConexionPOOL('deleteTipoContribullente');

    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new mssql.Request(conexion);
    myRequest.input('idTipoContribullente', mssql.Int, idTipoContribullente);
    const result = await myRequest.execute('pa_deleteTipoContribullente');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Tipo de contribullente eliminado exitosamente',
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error al inesperado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/tiposDocumento.js":
/*!************************************!*\
  !*** ./rutasApi/tiposDocumento.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router(); //TODO: LISTA DE TIPOS DE DOCUMENTO

router.get('/list', async (req, res) => {
  try {
    const {
      abrirConexionPOOL,
      cerrarConexionPOOL
    } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

    const {
      Request
    } = __webpack_require__(/*! mssql */ "mssql");

    const conexion = await abrirConexionPOOL('ListaTiposDocumento');
    const myRequest = new Request(conexion);
    const result = await myRequest.execute('pa_listaTiposDocumento');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        list: result.recordset,
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error en el resultado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
}); //TODO: INSERTA TIPO DE DOCUMENTO

router.post('/insert', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const {
      nombreTipoDocumento
    } = req.body;
    const conexion = await abrirConexionPOOL('insertTipoDocumento');

    const {
      Request,
      VarChar
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('nombreTipoDocumento', VarChar, nombreTipoDocumento);
    const result = await myRequest.execute('pa_insertTipoDocumento');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Tipo de documento guardado exitosamente',
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error al inesperado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
}); //TODO: UPDATE TIPO DE DOCUMENTO

router.put('/update', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const {
      nombreTipoDocumento,
      idTipoDocumento
    } = req.body;
    const conexion = await abrirConexionPOOL('updateTipoDocumento');

    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new mssql.Request(conexion);
    myRequest.input('nombreTipoDocumento', mssql.VarChar, nombreTipoDocumento);
    myRequest.input('idTipoDocumento', mssql.Int, idTipoDocumento);
    const result = await myRequest.execute('pa_updateTipoDocumento');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Tipo de documento modificado exitosamente',
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error al inesperado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
}); //TODO: DELETE TIPO DE DOCUMENTO

router.post('/delete', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const {
      idTipoDocumento
    } = req.body;
    const conexion = await abrirConexionPOOL('deleteTipoDocumento');

    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new mssql.Request(conexion);
    myRequest.input('idTipoDocumento', mssql.Int, idTipoDocumento);
    const result = await myRequest.execute('pa_deleteTipoDocumento');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Tipo de documento eliminado exitosamente',
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error al inesperado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/tiposPersona.js":
/*!**********************************!*\
  !*** ./rutasApi/tiposPersona.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router(); //TODO: LISTA DE TIPOS DE PERSONA

router.get('/list', async (req, res) => {
  try {
    const {
      abrirConexionPOOL,
      cerrarConexionPOOL
    } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

    const {
      Request
    } = __webpack_require__(/*! mssql */ "mssql");

    const conexion = await abrirConexionPOOL('ListaTiposPersona');
    const myRequest = new Request(conexion);
    const result = await myRequest.execute('pa_listaTiposPersona');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        list: result.recordset,
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error en el resultado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
}); //TODO: INSERTA TIPO DE PERSONA

router.post('/insert', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const {
      nombreTipoPersona
    } = req.body;
    const conexion = await abrirConexionPOOL('insertTipoPersona');

    const {
      Request,
      VarChar
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('nombreTipoPersona', VarChar, nombreTipoPersona);
    const result = await myRequest.execute('pa_insertTipoPersona');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Tipo de persona guardada exitosamente',
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error al inesperado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
}); //TODO: UPDATE TIPO DE PERSONA

router.put('/update', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const {
      nombreTipoPersona,
      idTipoPersona
    } = req.body;
    const conexion = await abrirConexionPOOL('updateTipoPersona');

    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new mssql.Request(conexion);
    myRequest.input('nombreTipoPersona', mssql.VarChar, nombreTipoPersona);
    myRequest.input('idTipoPersona', mssql.Int, idTipoPersona);
    const result = await myRequest.execute('pa_updateTipoPersona');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Tipo de persona modificada exitosamente',
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error al inesperado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
}); //TODO: DELETE TIPO DE PERSONA

router.post('/delete', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const {
      idTipoPersona
    } = req.body;
    const conexion = await abrirConexionPOOL('deleteTipoPersona');

    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new mssql.Request(conexion);
    myRequest.input('idTipoPersona', mssql.Int, idTipoPersona);
    const result = await myRequest.execute('pa_deleteTipoPersona');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Tipo de persona eliminada exitosamente',
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error al inesperado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/unidadesMedida.js":
/*!************************************!*\
  !*** ./rutasApi/unidadesMedida.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router(); //TODO: LISTA DE UNIDADES DE MEDIDA

router.get('/list', async (req, res) => {
  try {
    const {
      abrirConexionPOOL,
      cerrarConexionPOOL
    } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

    const {
      Request
    } = __webpack_require__(/*! mssql */ "mssql");

    const conexion = await abrirConexionPOOL('ListaUnidadesMedida');
    const myRequest = new Request(conexion);
    const result = await myRequest.execute('pa_listaUnidadesMedia');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        list: result.recordset,
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error en el resultado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
}); //TODO: INSERTA UNIDAD DE MEDIDA

router.post('/insert', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const {
      nombreUnidadMedida,
      descripcionUnidadMedida
    } = req.body;
    const conexion = await abrirConexionPOOL('insertUnidadMadida');

    const {
      Request,
      VarChar
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('nombreUnidadMedida', VarChar, nombreUnidadMedida);
    myRequest.input('descripcionUnidadMedida', VarChar, descripcionUnidadMedida);
    const result = await myRequest.execute('pa_insertUnidadMedida');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Unidade de medida guardada exitosamente',
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error al inesperado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
}); //TODO: UPDATE UNIDAD DE MEDIDA

router.put('/update', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const {
      nombreUnidadMedida,
      descripcionUnidadMedida,
      idUnidadMedida
    } = req.body;
    const conexion = await abrirConexionPOOL('updateUnidadMedida');

    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new mssql.Request(conexion);
    myRequest.input('nombreUnidadMedida', mssql.VarChar, nombreUnidadMedida);
    myRequest.input('descripcionUnidadMedida', mssql.VarChar, descripcionUnidadMedida);
    myRequest.input('idUnidadMedida', mssql.Int, idUnidadMedida);
    const result = await myRequest.execute('pa_updateUnidadMedida');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Unidad de medida modificada exitosamente',
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error al inesperado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
    });
  }
}); //TODO: DELETE UNIDAD MEDIDA

router.post('/delete', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const {
      idUnidadMedida
    } = req.body;
    const conexion = await abrirConexionPOOL('deleteUnidadMedida');

    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new mssql.Request(conexion);
    myRequest.input('idUnidadMedida', mssql.Int, idUnidadMedida);
    const result = await myRequest.execute('pa_deleteUnidadMedida');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Unidad de medida eliminada exitosamente',
        opOK: true
      });
    } else {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error al inesperado',
        opOK: false
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
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

const router = Router(); // TODO: INSERT USUARIO

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
        mensaje: 'Usuario insertado correctamente',
        opOK: true
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(200).json({
      mensaje: e.message,
      opOK: false
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
//             res.status(404).json({status: 200,mensaje:e.message})
//         }
//     }
//     catch(e){
//         cerrarConexionPOOL()
//         res.status(404).json({status: 200,mensaje:e.message})
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
//             res.status(404).json({status: 200,mensaje:e.message})
//         }
//     }
//     catch(e){
//         cerrarConexionPOOL()
//         res.status(404).json({status: 200,mensaje:e.message})
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
//             res.status(404).json({status: 200,mensaje:e.message})
//         }
//     }
//     catch(e){
//         cerrarConexionPOOL()
//         res.status(404).json({status: 200,mensaje:e.message})
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
//         res.status(200).json({error:err.message})
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
//         res.status(200).json({error:err.message})
//     }
// })

module.exports = router;

/***/ }),

/***/ "async":
/*!************************!*\
  !*** external "async" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("async");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ09ORklHLmpzIiwid2VicGFjazovLy8uL2NvbmV4aW9uZXMvc3FsU2VydmVyLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL0xvZ3Vlby5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9hcnRpY3Vsb3MuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvY2F0ZWdvcmlhcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9jaGVja0xvZ2luLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL2NsaWVudGVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL2RpcmVjY2lvbmVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL2dldFVzZXJMb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9tYXJjYXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvcHJvZHVjdG9zLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3Byb3ZlZWRvcmVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3N1Y3Vyc2FsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvdGlwb3NDb250cmlidWxsZW50ZS5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS90aXBvc0RvY3VtZW50by5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS90aXBvc1BlcnNvbmEuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvdW5pZGFkZXNNZWRpZGEuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvdXN1YXJpb3MuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXN5bmNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb2xvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1zc3FsXCIiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInNlY3JldCIsIm1zc3FsIiwicmVxdWlyZSIsInByb2Nlc3MiLCJVUkkiLCJ1c2VyIiwicGFzc3dvcmQiLCJkYXRhYmFzZSIsInNlcnZlciIsIm9wdGlvbnMiLCJhcHBOYW1lIiwiZW5hYmxlQXJpdGhBYm9ydCIsImVuY3J5cHQiLCJjb25uZWN0aW9uVGltZU91dCIsImRyaXZlciIsInN0cmVhbSIsInBvb2wiLCJtYXgiLCJtaW4iLCJpZGxlVGltZW91dE1pbGxpcyIsIkNvbmV4aW9uU1FMIiwiYWJyaXJDb25leGlvbiIsInVuZGVmaW5lZCIsImNlcnJhckNvbmV4aW9uIiwiYWJyaXJDb25leGlvblBPT0wiLCJjZXJyYXJDb25leGlvblBPT0wiLCJjb25leGlvbmVzIiwibmFtZSIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIm5ld0NvbmV4aW9uIiwiQ29ubmVjdGlvblBvb2wiLCJjbG9zZSIsImJpbmQiLCJhcmdzIiwiY29ubmVjdCIsIlByb21pc2UiLCJhbGwiLCJ2YWx1ZXMiLCJtYXAiLCJleHByZXNzIiwiY29ycyIsIm1vcmdhbiIsInNlcnZpZG9yIiwidXNlIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsInNldCIsImVudiIsIlBPUlQiLCJsaXN0ZW4iLCJnZXQiLCJtIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ5ZWxsb3ciLCJSb3V0ZXIiLCJiY3J5cHQiLCJqd3QiLCJ0b2tlbiIsInJvdXRlciIsInBvc3QiLCJyZXEiLCJyZXMiLCJ1c3VhcmlvIiwicHciLCJib2R5IiwiUmVxdWVzdCIsIlZhckNoYXIiLCJjb25leGlvbiIsIm15UmVxdWVzdCIsImlucHV0IiwicmVzdWx0IiwiZXhlY3V0ZSIsInJvd3NBZmZlY3RlZCIsInN0YXR1cyIsIm1lbnNhamUiLCJvcE9LIiwiY29tcGFyZVN5bmMiLCJyZWNvcmRzZXQiLCJpZFVzdWFyaW8iLCJub21icmVVc3VhcmlvIiwiYXBlbGxpZG9Vc3VhcmlvIiwic2lnbiIsImV4cGlyZXNJbiIsImVycm9yIiwibWVzc2FnZSIsImxpc3QiLCJub21icmVBcnRpY3VsbyIsImRlc2NyaXBjaW9uQXJ0aWN1bG8iLCJwZXNvQXJ0aWN1bG8iLCJjb2RQcm92ZWRvckFydGljdWxvIiwiY29kSW50ZXJub0FydGljdWxvIiwiaWRVbmlkYWRNZWRpZGEiLCJpZENhdGVnb3JpYSIsImlkTWFyY2EiLCJSZWFsIiwiSW50IiwicHV0IiwiaWRBcnRpY3VsbyIsIm5vbWJyZUNhdGVnb3JpYSIsImRlc2NyaXBjaW9uQ2F0ZWdvcmlhIiwibmV4dCIsInBhdGgiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsImxvZ09LIiwic3BsaXQiLCJ2ZXJpZnkiLCJkYXRvcyIsIm90cm8iLCJub21icmVDbGllbnRlIiwiYXBlbGxpZG9DbGllbnRlIiwiaWRUaXBvRG9jdW1lbnRvIiwibnJvRG9jQ2xpZW50ZSIsImlkVGlwb0NvbnRyaWJ1bGxlbnRlIiwibnJvQ3VpdEN1aWxDbGllbnRlIiwiaWREaXJlY2Npb24iLCJpZFRpcG9QZXJzb25hIiwiaWRDbGllbnRlIiwiY2FsbGVEaXJlY2Npb24iLCJhbHR1cmFEaXJlY2Npb24iLCJjb2RpZ29Qb3N0YWxEaXJlY2Npb24iLCJiYXJyaW9EaXJlY2Npb24iLCJvdHJvc0RhdG9zRGlyZWNjaW9uIiwiQ09ORklHIiwiZCIsIm5vbWJyZU1hcmNhIiwiZWFjaFNlcmllcyIsIm5vbWJyZVByb2R1Y3RvIiwiZGVzY3JpcGNpb25Qcm9kdWN0byIsInByZWNpb0FjdHVhbFByb2R1Y3RvIiwidmVjRGV0YWxsZXNQcm9kdWN0byIsIlRyYW5zYWN0aW9uIiwibXlUcmFuc2FjdGlvbiIsImJlZ2luIiwiZXJyIiwicm9sbGJhY2siLCJpZFByb2R1Y3RvIiwicGFyc2VJbnQiLCJteVJlcXVlc3REUCIsIkRQIiwiY2FsbGJhY2siLCJwYXJhbWV0ZXJzIiwidmFsdWUiLCJjYW50aWRhZERldGFsbGVQcm9kdWN0byIsIkUiLCJSIiwiZXJyb3JDYWxsQmFjayIsImNvbW1pdCIsIm5vbWJyZVByb3ZlZWRvciIsImFwZWxsaWRvUHJvdmVlZG9yIiwibnJvRG9jUHJvdmVlZG9yIiwibnJvQ3VpdEN1aWxQcm92ZWVkb3IiLCJpZFByb3ZlZWRvciIsIm5vbWJyZVN1Y3Vyc2FsIiwiaWRTdWN1cnNhbCIsIm5vbWJyZVRpcG9Db250cmlidWxsZW50ZSIsImRlc2NyaXBjaW9uVGlwb0NvbnRyaWJ1bGxlbnRlIiwibm9tYnJlVGlwb0RvY3VtZW50byIsIm5vbWJyZVRpcG9QZXJzb25hIiwibm9tYnJlVW5pZGFkTWVkaWRhIiwiZGVzY3JpcGNpb25VbmlkYWRNZWRpZGEiLCJiY3J5cCIsImhhc2hTeW5jIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7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Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHNlY3JldDonbWFzdGVyU29mdDIwMjAnXHJcbn0iLCJjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJyk7XHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXsgcmVxdWlyZSgnY29sb3JzJykgfVxyXG5cclxudmFyIFVSSVxyXG5cclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xyXG4gICAgLy8gVVJJID0ge1xyXG4gICAgLy8gICAgIHVzZXI6IFxyXG4gICAgLy8gICAgIHBhc3N3b3JkOiBcclxuICAgIC8vICAgICBkYXRhYmFzZTogXHJcbiAgICAvLyAgICAgcG9ydDoxNDMzLFxyXG4gICAgLy8gICAgIHNlcnZlcjonXHJcbiAgICAvLyAgICAgb3B0aW9uczp7XHJcbiAgICAvLyAgICAgICAgIGFwcE5hbWU6XHJcbiAgICAvLyAgICAgICAgIGVuYWJsZUFyaXRoQWJvcnQ6dHJ1ZSxcclxuICAgIC8vICAgICAgICAgZW5jcnlwdDpmYWxzZVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICAsXHJcbiAgICAvLyAgICAgY29ubmVjdGlvblRpbWVPdXQ6MTUwMDAwLFxyXG4gICAgLy8gICAgIGRyaXZlcjondGVkaW91cycsXHJcbiAgICAvLyAgICAgc3RyZWFtOmZhbHNlLFxyXG4gICAgLy8gICAgIHBvb2w6e1xyXG4gICAgLy8gICAgICAgICBtYXg6MjAsXHJcbiAgICAvLyAgICAgICAgIG1pbjowLFxyXG4gICAgLy8gICAgICAgICBpZGxlVGltZW91dE1pbGxpczozMDAwMCxcclxuICAgIC8vICAgICB9XHJcbiAgICAvL1ZKNzMwMFxyXG4gICAgLy8gfVxyXG4gICAgVVJJID0ge1xyXG4gICAgICAgIHVzZXI6ICdnZXN0TGluZV9TUUxMb2dpbl8xJyxcclxuICAgICAgICBwYXNzd29yZDogJ2x0cDZ4bXVwM3QnLFxyXG4gICAgICAgIGRhdGFiYXNlOiAnZ2VzdExpbmVEQicsXHJcbiAgICAgICAgc2VydmVyOidnZXN0TGluZURCLm1zc3FsLnNvbWVlLmNvbScsXHJcbiAgICAgICAgb3B0aW9uczp7XHJcbiAgICAgICAgICAgIGFwcE5hbWU6J21hc3RlclNvZnQtQVBJJyxcclxuICAgICAgICAgICAgZW5hYmxlQXJpdGhBYm9ydDp0cnVlLFxyXG4gICAgICAgICAgICBlbmNyeXB0OmZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgICxcclxuICAgICAgICBjb25uZWN0aW9uVGltZU91dDoxNTAwMDAsXHJcbiAgICAgICAgZHJpdmVyOid0ZWRpb3VzJyxcclxuICAgICAgICBzdHJlYW06ZmFsc2UsXHJcbiAgICAgICAgcG9vbDp7XHJcbiAgICAgICAgICAgIG1heDoyMCxcclxuICAgICAgICAgICAgbWluOjAsXHJcbiAgICAgICAgICAgIGlkbGVUaW1lb3V0TWlsbGlzOjMwMDAwLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5lbHNle1xyXG4gICAgVVJJID0ge1xyXG4gICAgICAgIHVzZXIgOiBwcm9jZXNzLmVudi5VU0VSU1FMICxcclxuICAgICAgICBwYXNzd29yZCA6IHByb2Nlc3MuZW52LlBBU1NXT1JEU1FMICxcclxuICAgICAgICBkYXRhYmFzZSA6IHByb2Nlc3MuZW52LkRBVEFCQVNFU1FMICxcclxuICAgICAgICBzZXJ2ZXIgOiBwcm9jZXNzLmVudi5TRVJWRVJTUUwgLFxyXG4gICAgICAgIG9wdGlvbnMgOiB7XHJcbiAgICAgICAgICAgIGVuYWJsZUFyaXRoQWJvcnQgOiB0cnVlICxcclxuICAgICAgICAgICAgZW5jcnlwdCA6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufVxyXG5cclxudmFyIENvbmV4aW9uU1FMID0geyBhYnJpckNvbmV4aW9uOnVuZGVmaW5lZCwgY2VycmFyQ29uZXhpb246dW5kZWZpbmVkLCBhYnJpckNvbmV4aW9uUE9PTDp1bmRlZmluZWQsIGNlcnJhckNvbmV4aW9uUE9PTDp1bmRlZmluZWQgfVxyXG4vLyB2YXIgY29uZXhpb25cclxuLy8gQ29uZXhpb25TUUwuYWJyaXJDb25leGlvbiA9IGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4vLyAgICAgYXdhaXQgbXNzcWwuY29ubmVjdChVUkkpXHJcbi8vICAgICAudGhlbihwb29sPT57XHJcbi8vICAgICAgICAgaWYocG9vbC5fY29ubmVjdGVkKXtcclxuLy8gICAgICAgICAgICAgaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbmVjaW9uIFNRTCBTRVJWRVInLmJsdWUsJyBBQklFUlRBJy5ncmVlbilcclxuLy8gICAgICAgICAgICAgICAgIGNvbmV4aW9uID0gcG9vbFxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGVsc2V7XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBkZSBDb25leGlvbicscG9vbC5fY29ubmVjdGVkKVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH0pXHJcbi8vIH1cclxuLy8gQ29uZXhpb25TUUwuY2VycmFyQ29uZXhpb24gPSBhc3luYyBmdW5jdGlvbiAoKXtcclxuLy8gICAgIGF3YWl0IGNvbmV4aW9uLmNsb3NlKClcclxuLy8gICAgIGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZygnQ29uZWNpb24gU1FMIFNFUlZFUicuYmx1ZSwnIENFUlJBREEnLmdyZWVuKVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5jb25zdCBjb25leGlvbmVzID0ge31cclxuXHJcbkNvbmV4aW9uU1FMLmFicmlyQ29uZXhpb25QT09MID0gYXN5bmMgbmFtZSA9PntcclxuICAgIGlmKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY29uZXhpb25lcyxuYW1lKSl7XHJcbiAgICAgICAgY29uc3QgbmV3Q29uZXhpb24gPSBuZXcgbXNzcWwuQ29ubmVjdGlvblBvb2woVVJJKVxyXG4gICAgICAgIGNvbnN0IGNsb3NlID0gbmV3Q29uZXhpb24uY2xvc2UuYmluZChuZXdDb25leGlvbilcclxuICAgICAgICBuZXdDb25leGlvbi5jbG9zZSA9ICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBjb25leGlvbmVzW25hbWVdXHJcbiAgICAgICAgICAgIHJldHVybiBjbG9zZSguLi5hcmdzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBuZXdDb25leGlvbi5jb25uZWN0KClcclxuICAgICAgICBjb25leGlvbmVzW25hbWVdID0gbmV3Q29uZXhpb25cclxuICAgICAgICByZXR1cm4gY29uZXhpb25lc1tuYW1lXVxyXG4gICAgfVxyXG59XHJcblxyXG5Db25leGlvblNRTC5jZXJyYXJDb25leGlvblBPT0wgPSAoKSA9PntcclxuICAgIHJldHVybiBQcm9taXNlLmFsbChPYmplY3QudmFsdWVzKGNvbmV4aW9uZXMpLm1hcCgocG9vbCk9PntcclxuICAgICAgICByZXR1cm4gcG9vbC5jbG9zZSgpXHJcbiAgICB9KSlcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbmV4aW9uU1FMIiwiY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBjb3JzID0gcmVxdWlyZSgnY29ycycpXHJcbnZhciBtb3JnYW5cclxuXHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgIHJlcXVpcmUoJ2NvbG9ycycpXHJcbiAgICBtb3JnYW4gPSByZXF1aXJlKCdtb3JnYW4nKVxyXG59XHJcbi8vIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52Lk5PREVfRU5WKVxyXG5cclxuY29uc3Qgc2Vydmlkb3IgPSBleHByZXNzKClcclxuc2Vydmlkb3IudXNlKGNvcnMoKSlcclxuXHJcbi8vIG1pZGRlbHdhcmVcclxuXHJcbnNlcnZpZG9yLnVzZShleHByZXNzLmpzb24oKSlcclxuc2Vydmlkb3IudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7ZXh0ZW5kZWQ6IHRydWV9KSlcclxuc2Vydmlkb3IudXNlKHJlcXVpcmUoJy4vcnV0YXNBcGkvY2hlY2tMb2dpbicpKVxyXG5cclxuXHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICkgeyAgc2Vydmlkb3IudXNlKG1vcmdhbignZGV2JykpIH1cclxuXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9sb2d1ZW8nLHJlcXVpcmUoJy4vcnV0YXNBcGkvTG9ndWVvJykpXHJcbi8vIHNlcnZpZG9yLnVzZSgnL2FwaS9hdXRoUm91dGVyUmVhY3QvYWRtaW4nLHJlcXVpcmUoJy4vcnV0YXNBcGkvYXV0aEFjY2Vzb3NSZWFjdC9hdXRoQWRtaW5Sb3V0ZXJSZWFjdCcpKVxyXG4vLyBzZXJ2aWRvci51c2UoJy9hcGkvYXV0aFJvdXRlclJlYWN0L25pdmVsMScscmVxdWlyZSgnLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDFSb3V0ZXJSZWFjdCcpKVxyXG4vLyBzZXJ2aWRvci51c2UoJy9hcGkvYXV0aFJvdXRlclJlYWN0L25pdmVsMicscmVxdWlyZSgnLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDJSb3V0ZXJSZWFjdCcpKVxyXG4vLyBzZXJ2aWRvci51c2UoJy9hcGkvYXV0aFJvdXRlclJlYWN0L25pdmVsMycscmVxdWlyZSgnLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDNSb3V0ZXJSZWFjdCcpKVxyXG4vLyBzZXJ2aWRvci51c2UoJy9hcGkvYXV0aFJvdXRlclJlYWN0L25pdmVsNCcscmVxdWlyZSgnLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDRSb3V0ZXJSZWFjdCcpKVxyXG4vLyBzZXJ2aWRvci51c2UoJy9hcGkvYXV0aFJvdXRlclJlYWN0L25pdmVsNScscmVxdWlyZSgnLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDVSb3V0ZXJSZWFjdCcpKVxyXG4vLyBzZXJ2aWRvci51c2UoJy9hcGkvdXN1YXJpb3MnLHJlcXVpcmUoJy4vcnV0YXNBcGkvYXV0aEFjY2Vzb3MvYXV0aEFkbWluUm91dGVyJykscmVxdWlyZSgnLi9ydXRhc0FwaS91c3VhcmlvcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvdXN1YXJpb3MnLHJlcXVpcmUoJy4vcnV0YXNBcGkvdXN1YXJpb3MnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL2NhdGVnb3JpYXMnICwgcmVxdWlyZSgnLi9ydXRhc0FwaS9jYXRlZ29yaWFzJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS91bmlkYWRlc01lZGlkYScgLCByZXF1aXJlKCcuL3J1dGFzQXBpL3VuaWRhZGVzTWVkaWRhJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9kaXJlY2Npb25lcycgLCByZXF1aXJlKCcuL3J1dGFzQXBpL2RpcmVjY2lvbmVzJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9tYXJjYXMnICwgcmVxdWlyZSgnLi9ydXRhc0FwaS9tYXJjYXMnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3Byb2R1Y3RvcycgLCByZXF1aXJlKCcuL3J1dGFzQXBpL3Byb2R1Y3RvcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvYXJ0aWN1bG9zJyAsIHJlcXVpcmUoJy4vcnV0YXNBcGkvYXJ0aWN1bG9zJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS90aXBvc0RvY3VtZW50bycgLCByZXF1aXJlKCcuL3J1dGFzQXBpL3RpcG9zRG9jdW1lbnRvJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS90aXBvc1BlcnNvbmEnICwgcmVxdWlyZSgnLi9ydXRhc0FwaS90aXBvc1BlcnNvbmEnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3RpcG9zQ29udHJpYnVsbGVudGUnICwgcmVxdWlyZSgnLi9ydXRhc0FwaS90aXBvc0NvbnRyaWJ1bGxlbnRlJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9jbGllbnRlcycgLCByZXF1aXJlKCcuL3J1dGFzQXBpL2NsaWVudGVzJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9zdWN1cnNhbGVzJyAsIHJlcXVpcmUoJy4vcnV0YXNBcGkvc3VjdXJzYWxlcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvcHJvdmVlZG9yZXMnICwgcmVxdWlyZSgnLi9ydXRhc0FwaS9wcm92ZWVkb3JlcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvZ2V0dXNlcmxvZ2luJyxyZXF1aXJlKCcuL3J1dGFzQXBpL2dldFVzZXJMb2dpbicpKVxyXG4vL1xyXG5cclxuLy9TZXR0aW5nc1xyXG5zZXJ2aWRvci5zZXQoJ3BvcnQnLHByb2Nlc3MuZW52LlBPUlQgfHwgNTAwMClcclxuXHJcbnNlcnZpZG9yLmxpc3RlbihzZXJ2aWRvci5nZXQoJ3BvcnQnKSwobSxlKT0+e1xyXG4gICAgaWYoZSl7Y29uc29sZS5sb2coZSl9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWRvciBjb3JyaWVuZG8gZW4gZWwgUFVFUlRPJy55ZWxsb3csc2Vydmlkb3IuZ2V0KCdwb3J0JykpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWRvciBjb3JyaWVuZG8gZW4gZWwgUFVFUlRPJyxzZXJ2aWRvci5nZXQoJ3BvcnQnKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3QgYmNyeXB0ID1yZXF1aXJlKCdiY3J5cHQnKVxyXG4vLyBjb25zdCBVc3VhcmlvID0gcmVxdWlyZSgnLi4vZXNxdWVtYXNNb25nby9lc3F1ZW1hVXN1YXJpb3MnKVxyXG5jb25zdCB7c2VjcmV0fSA9IHJlcXVpcmUoJy4uL0NPTkZJRycpXHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpXHJcbmNvbnN0IHsgdG9rZW4gfSA9IHJlcXVpcmUoJ21vcmdhbicpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5cclxuXHJcbnJvdXRlci5wb3N0ICggJy8nICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgY29uc3QgeyB1c3VhcmlvICwgcHcgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyIH0gPSByZXF1aXJlICgnbXNzcWwnKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICgnbG9ndWVvVXN1YXJpbycpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoJ3VzdWFyaW8nICwgVmFyQ2hhciAsIHVzdWFyaW8gKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfbG9naW4nKVxyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgaWYocmVzdWx0LnJvd3NBZmZlY3RlZFswXSA9PT0gMCApIHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uICggeyBtZW5zYWplIDogJ1VzdWFyaW8gaW5leGlzdGVudGUgJyAsb3BPSzpmYWxzZSB9IClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICggIWJjcnlwdC5jb21wYXJlU3luYyggcHcgLCByZXN1bHQucmVjb3Jkc2V0WzBdLnB3ICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oIHsgbWVuc2FqZSA6ICdQYXNzd29yZCBpbmNvcnJlY3RhICcsb3BPSzpmYWxzZSB9IClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkVXN1YXJpbyA6IHJlc3VsdC5yZWNvcmRzZXRbMF0uaWRVc3VhcmlvICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlVXN1YXJpbyA6IHJlc3VsdC5yZWNvcmRzZXRbMF0ubm9tYnJlVXN1YXJpbyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvVXN1YXJpbyA6IHJlc3VsdC5yZWNvcmRzZXRbMF0uYXBlbGxpZG9Vc3VhcmlvICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpbyA6IHJlc3VsdC5yZWNvcmRzZXRbMF0udXN1YXJpb1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBqd3Quc2lnbiggdXNlciAsIHJlcXVpcmUoJy4uL0NPTkZJRycpLnNlY3JldCAsIHsgZXhwaXJlc0luIDogMTQ0MDAgfSAgLCAgICggZXJyb3IgLCB0b2tlbiApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBlcnJvciApIHsgcmVzLnN0YXR1cygyMDApLmpzb24gKCB7IG1lbnNhamUgOiAnRXJyb3IgYWwgZ2VuZXJhciBlbCB0b2tlbicsb3BPSzpmYWxzZSB9ICkgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7dG9rZW4sb3BPSzp0cnVlfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uIChyZXN1bHQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamUgOiBlLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59IClcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxuLy9UT0RPOiBMSVNUQSBERSBBUlRJQ1VMT1Ncclxucm91dGVyLmdldCgnL2xpc3QnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3Qge2FicmlyQ29uZXhpb25QT09MLGNlcnJhckNvbmV4aW9uUE9PTH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICAgICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ0xpc3RhQXJ0aWN1bG9zJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX2xpc3RhQXJ0aWN1bG9zJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe2xpc3Q6cmVzdWx0LnJlY29yZHNldCxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZSA6ICdFcnJvciBlbiBlbCByZXN1bHRhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZSA6IGUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogSU5TRVJUQSBBUlRJQ1VMT1xyXG5cclxucm91dGVyLnBvc3QgKCcvaW5zZXJ0JyAsIGFzeW5jIChyZXEgLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBub21icmVBcnRpY3VsbyxkZXNjcmlwY2lvbkFydGljdWxvLHBlc29BcnRpY3Vsbyxjb2RQcm92ZWRvckFydGljdWxvLFxyXG4gICAgICAgICAgICBjb2RJbnRlcm5vQXJ0aWN1bG8saWRVbmlkYWRNZWRpZGEsaWRDYXRlZ29yaWEsaWRNYXJjYVxyXG4gICAgICAgIH0gPSByZXEuYm9keVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ2luc2VydEFydGljdWxvJylcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgUmVhbCAsIEludCB9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZUFydGljdWxvJyAsIFZhckNoYXIgLCBub21icmVBcnRpY3VsbyApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdkZXNjcmlwY2lvbkFydGljdWxvJyAsIFZhckNoYXIgLCBkZXNjcmlwY2lvbkFydGljdWxvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ3Blc29BcnRpY3VsbycgLCBSZWFsICwgcGVzb0FydGljdWxvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2NvZFByb3ZlZG9yQXJ0aWN1bG8nICwgSW50ICwgY29kUHJvdmVkb3JBcnRpY3VsbyApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdjb2RJbnRlcm5vQXJ0aWN1bG8nICwgSW50ICwgY29kSW50ZXJub0FydGljdWxvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVW5pZGFkTWVkaWRhJyAsIEludCAsIGlkVW5pZGFkTWVkaWRhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkQ2F0ZWdvcmlhJyAsIEludCAsIGlkQ2F0ZWdvcmlhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkTWFyY2EnICwgSW50ICwgaWRNYXJjYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9pbnNlcnRBcnRpY3VsbycpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonQXJ0aWN1bG8gZ3VhcmRhZG8gZXhpdG9zYW1lbnRlJyxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTplLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IFVQREFURSBBUlRJQ1VMT1xyXG5cclxucm91dGVyLnB1dCgnL3VwZGF0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBpZEFydGljdWxvLG5vbWJyZUFydGljdWxvLGRlc2NyaXBjaW9uQXJ0aWN1bG8scGVzb0FydGljdWxvLGNvZFByb3ZlZG9yQXJ0aWN1bG8sXHJcbiAgICAgICAgICAgIGNvZEludGVybm9BcnRpY3VsbyxpZFVuaWRhZE1lZGlkYSxpZENhdGVnb3JpYSxpZE1hcmNhXHJcbiAgICAgICAgfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCd1cGRhdGVBcnRpY3VsbycpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRBcnRpY3VsbycgLCBtc3NxbC5JbnQgLCBpZEFydGljdWxvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZUFydGljdWxvJyAsIG1zc3FsLlZhckNoYXIgLCBub21icmVBcnRpY3VsbyApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdkZXNjcmlwY2lvbkFydGljdWxvJyAsIG1zc3FsLlZhckNoYXIgLCBkZXNjcmlwY2lvbkFydGljdWxvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ3Blc29BcnRpY3VsbycgLCBtc3NxbC5SZWFsICwgcGVzb0FydGljdWxvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2NvZFByb3ZlZG9yQXJ0aWN1bG8nICwgbXNzcWwuSW50ICwgY29kUHJvdmVkb3JBcnRpY3VsbyApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdjb2RJbnRlcm5vQXJ0aWN1bG8nICwgbXNzcWwuSW50ICwgY29kSW50ZXJub0FydGljdWxvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVW5pZGFkTWVkaWRhJyAsIG1zc3FsLkludCAsIGlkVW5pZGFkTWVkaWRhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkQ2F0ZWdvcmlhJyAsIG1zc3FsLkludCAsIGlkQ2F0ZWdvcmlhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkTWFyY2EnICwgbXNzcWwuSW50ICwgaWRNYXJjYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV91cGRhdGVBcnRpY3VsbycpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonQXJjdGljdWxvIG1vZGlmaWNhZG8gZXhpdG9zYW1lbnRlJyxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbycsIG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBERUxFVEUgQVJUSUNVTE9cclxuXHJcbnJvdXRlci5wb3N0KCcvZGVsZXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7aWRBcnRpY3Vsb30gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnZGVsZXRlQXJ0aWN1bG8nKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkQXJ0aWN1bG8nICwgbXNzcWwuSW50ICwgaWRBcnRpY3VsbyApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9kZWxldGVBcnRpY3VsbycpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonQXJ0aWN1bG8gZWxpbWluYWRvIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG4vL1RPRE86IExJU1RBIERFIENBVEVHT1JJQVNcclxucm91dGVyLmdldCgnL2xpc3QnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3Qge2FicmlyQ29uZXhpb25QT09MLGNlcnJhckNvbmV4aW9uUE9PTH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICAgICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ0xpc3RhQ2F0ZWdvcmlhcycpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlKCdwYV9saXN0YUNhdGVnb3JpYXMnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bGlzdDpyZXN1bHQucmVjb3Jkc2V0LG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplIDogJ0Vycm9yIGVuIGVsIHJlc3VsdGFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplIDogZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBJTlNFUlRBIENBVEVHT1JBXHJcblxyXG5yb3V0ZXIucG9zdCAoJy9pbnNlcnQnICwgYXN5bmMgKHJlcSAsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IG5vbWJyZUNhdGVnb3JpYSAsIGRlc2NyaXBjaW9uQ2F0ZWdvcmlhIH0gPSByZXEuYm9keVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ2luc2VydENhdGVnb3JpYScpXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZUNhdGVnb3JpYScgLCBWYXJDaGFyICwgbm9tYnJlQ2F0ZWdvcmlhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2Rlc2NyaXBjaW9uQ2F0ZWdvcmlhJyAsIFZhckNoYXIgLCBkZXNjcmlwY2lvbkNhdGVnb3JpYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9pbnNlcnRDYXRlZ29yaWEnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J0NhdGVnb3JpYSBndWFyZGFkYSBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogVVBEQVRFIENBVEVHT1JJQVxyXG5cclxucm91dGVyLnB1dCgnL3VwZGF0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge25vbWJyZUNhdGVnb3JpYSxkZXNjcmlwY2lvbkNhdGVnb3JpYSxpZENhdGVnb3JpYX0gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgndXBkYXRlQ2F0ZWdvcmlhJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmVDYXRlZ29yaWEnICwgbXNzcWwuVmFyQ2hhciAsIG5vbWJyZUNhdGVnb3JpYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdkZXNjcmlwY2lvbkNhdGVnb3JpYScgLCBtc3NxbC5WYXJDaGFyICwgZGVzY3JpcGNpb25DYXRlZ29yaWEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRDYXRlZ29yaWEnICwgbXNzcWwuSW50ICwgaWRDYXRlZ29yaWEgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfdXBkYXRlQ2F0ZWdvcmlhJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidDYXRlZ29yaWEgbW9kaWZpY2FkYSBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogREVMRVRFIENBVEVHT1JJQVxyXG5cclxucm91dGVyLnBvc3QoJy9kZWxldGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtpZENhdGVnb3JpYX0gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnZGVsZXRlQ2F0ZWdvcmlhJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZENhdGVnb3JpYScgLCBtc3NxbC5JbnQgLCBpZENhdGVnb3JpYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9kZWxldGVDYXRlZ29yaWEnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J0NhdGVnb3JpYSBlbGltaW5hZGEgZXhpdG9zYW1lbnRlJyxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTplLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpXHJcbmNvbnN0IHtzZWNyZXR9ID0gcmVxdWlyZSgnLi4vQ09ORklHJylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHJlcSAsIHJlcyAsbmV4dCkge1xyXG4gICAgaWYgKHJlcS5wYXRoICE9PSAnL2FwaS9sb2d1ZW8nKSB7XHJcbiAgICAgICAgaWYoICFyZXEuaGVhZGVycy5hdXRob3JpemF0aW9uKSB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplIDogJ05vIGVudmlvIGVsIHRva2VuIGVuIGVsIGhlYWRlcnMnLCBsb2dPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbi5zcGxpdCgnICcpWzFdXHJcbiAgICAgICAgICAgIGp3dC52ZXJpZnkodG9rZW4gLHNlY3JldCAsICggZSAsIGRhdG9zICk9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGUgKSB7IHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplIDogZS5tZXNzYWdlICwgb3RybyA6ICdlcnJvciAgZW4gbGEgY29tbXByb2JhY2lvbiB0b2tlbicsbG9nT0s6ZmFsc2V9KSB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHsgcmV0dXJuIG5leHQoKSB9XHJcbiAgICAgICAgICAgIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgeyByZXR1cm4gbmV4dCgpIH1cclxufSIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbi8vVE9ETzogTElTVEEgREUgQ0xJRU5URVNcclxucm91dGVyLmdldCgnL2xpc3QnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3Qge2FicmlyQ29uZXhpb25QT09MLGNlcnJhckNvbmV4aW9uUE9PTH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICAgICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ0xpc3RhQ2xpZW50ZXMnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSgncGFfbGlzdGFDbGllbnRlcycpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtsaXN0OnJlc3VsdC5yZWNvcmRzZXQsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamUgOiAnRXJyb3IgZW4gZWwgcmVzdWx0YWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamUgOiBlLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IElOU0VSVEEgQ0xJRU5URVxyXG5cclxucm91dGVyLnBvc3QgKCcvaW5zZXJ0JyAsIGFzeW5jIChyZXEgLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBub21icmVDbGllbnRlLGFwZWxsaWRvQ2xpZW50ZSxpZFRpcG9Eb2N1bWVudG8sbnJvRG9jQ2xpZW50ZSxcclxuICAgICAgICAgICAgaWRUaXBvQ29udHJpYnVsbGVudGUsbnJvQ3VpdEN1aWxDbGllbnRlLGlkRGlyZWNjaW9uLGlkVGlwb1BlcnNvbmFcclxuICAgICAgICB9ID0gcmVxLmJvZHlcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdpbnNlcnRDbGllbnRlJylcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlQ2xpZW50ZScgLCBWYXJDaGFyICwgbm9tYnJlQ2xpZW50ZSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdhcGVsbGlkb0NsaWVudGUnICwgVmFyQ2hhciAsIGFwZWxsaWRvQ2xpZW50ZSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFRpcG9Eb2N1bWVudG8nICwgSW50ICwgaWRUaXBvRG9jdW1lbnRvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25yb0RvY0NsaWVudGUnICwgVmFyQ2hhciAsIG5yb0RvY0NsaWVudGUgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRUaXBvQ29udHJpYnVsbGVudGUnICwgSW50ICwgaWRUaXBvQ29udHJpYnVsbGVudGUgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbnJvQ3VpdEN1aWxDbGllbnRlJyAsIEludCAsIG5yb0N1aXRDdWlsQ2xpZW50ZSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZERpcmVjY2lvbicgLCBJbnQgLCBpZERpcmVjY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFRpcG9QZXJzb25hJyAsIEludCAsIGlkVGlwb1BlcnNvbmEgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfaW5zZXJ0Q2xpZW50ZScpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonQ2xpZW50ZSBndWFyZGFkbyBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogVVBEQVRFIENMSUVOVEVcclxuXHJcbnJvdXRlci5wdXQoJy91cGRhdGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgaWRDbGllbnRlLG5vbWJyZUNsaWVudGUsYXBlbGxpZG9DbGllbnRlLGlkVGlwb0RvY3VtZW50byxucm9Eb2NDbGllbnRlLFxyXG4gICAgICAgICAgICBpZFRpcG9Db250cmlidWxsZW50ZSxucm9DdWl0Q3VpbENsaWVudGUsaWREaXJlY2Npb24saWRUaXBvUGVyc29uYVxyXG4gICAgICAgIH0gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgndXBkYXRlQ2xpZW50ZScpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRDbGllbnRlJyAsIG1zc3FsLkludCAsIGlkQ2xpZW50ZSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmVDbGllbnRlJyAsIG1zc3FsLlZhckNoYXIgLCBub21icmVDbGllbnRlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2FwZWxsaWRvQ2xpZW50ZScgLCBtc3NxbC5WYXJDaGFyICwgYXBlbGxpZG9DbGllbnRlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVGlwb0RvY3VtZW50bycgLCBtc3NxbC5JbnQgLCBpZFRpcG9Eb2N1bWVudG8gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbnJvRG9jQ2xpZW50ZScgLCBtc3NxbC5WYXJDaGFyICwgbnJvRG9jQ2xpZW50ZSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFRpcG9Db250cmlidWxsZW50ZScgLCBJbnQgLCBpZFRpcG9Db250cmlidWxsZW50ZSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCducm9DdWl0Q3VpbENsaWVudGUnICwgbXNzcWwuSW50ICwgbnJvQ3VpdEN1aWxDbGllbnRlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkRGlyZWNjaW9uJyAsIG1zc3FsLkludCAsIGlkRGlyZWNjaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVGlwb1BlcnNvbmEnICwgbXNzcWwuSW50ICwgaWRUaXBvUGVyc29uYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV91cGRhdGVDbGllbnRlJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidDbGllbnRlIG1vZGlmaWNhZG8gZXhpdG9zYW1lbnRlJyxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTplLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IERFTEVURSBDTElFTlRFXHJcblxyXG5yb3V0ZXIucG9zdCgnL2RlbGV0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge2lkQ2xpZW50ZX0gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnZGVsZXRlQ2xpZW50ZScpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRDbGllbnRlJyAsIG1zc3FsLkludCAsIGlkQ2xpZW50ZSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9kZWxldGVDbGllbnRlJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidDbGllbnRlIGVsaW1pbmFkbyBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxuLy9UT0RPOiBMSVNUQSBERSBESVJFQ0NJT05FU1xyXG5yb3V0ZXIuZ2V0KCcvbGlzdCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wsY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgICAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnTGlzdGFEaXJlY2Npb25lcycpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlKCdwYV9saXN0YURpcmVjY2lvbmVzJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe2xpc3Q6cmVzdWx0LnJlY29yZHNldCxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZSA6ICdFcnJvciBlbiBlbCByZXN1bHRhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZSA6IGUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogSU5TRVJUQSBESVJFQ0NJT05cclxuXHJcbnJvdXRlci5wb3N0ICgnL2luc2VydCcgLCBhc3luYyAocmVxICwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0eyBcclxuICAgICAgICAgICAgICAgIGNhbGxlRGlyZWNjaW9uICwgXHJcbiAgICAgICAgICAgICAgICBhbHR1cmFEaXJlY2Npb24gLCBcclxuICAgICAgICAgICAgICAgIGNvZGlnb1Bvc3RhbERpcmVjY2lvbiAsIFxyXG4gICAgICAgICAgICAgICAgYmFycmlvRGlyZWNjaW9uICwgXHJcbiAgICAgICAgICAgICAgICBvdHJvc0RhdG9zRGlyZWNjaW9uIFxyXG4gICAgICAgICAgICAgfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnaW5zZXJ0RGlyZWNjaW9uJylcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnY2FsbGVEaXJlY2Npb24nICwgVmFyQ2hhciAsIGNhbGxlRGlyZWNjaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2FsdHVyYURpcmVjY2lvbicgLCBJbnQgLCBhbHR1cmFEaXJlY2Npb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnY29kaWdvUG9zdGFsRGlyZWNjaW9uJyAsIEludCAsIGNvZGlnb1Bvc3RhbERpcmVjY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdiYXJyaW9EaXJlY2Npb24nICwgVmFyQ2hhciAsIGJhcnJpb0RpcmVjY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdvdHJvc0RhdG9zRGlyZWNjaW9uJyAsIFZhckNoYXIgLCBvdHJvc0RhdG9zRGlyZWNjaW9uIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2luc2VydERpcmVjY2lvbicpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonRGlyZWNjaW9uIGd1YXJkYWRhIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBVUERBVEUgRElSRUNDSU9OXHJcblxyXG5yb3V0ZXIucHV0KCcvdXBkYXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdHsgXHJcbiAgICAgICAgICAgIGNhbGxlRGlyZWNjaW9uICwgXHJcbiAgICAgICAgICAgIGFsdHVyYURpcmVjY2lvbiAsIFxyXG4gICAgICAgICAgICBjb2RpZ29Qb3N0YWxEaXJlY2Npb24gLCBcclxuICAgICAgICAgICAgYmFycmlvRGlyZWNjaW9uICwgXHJcbiAgICAgICAgICAgIG90cm9zRGF0b3NEaXJlY2Npb24gLFxyXG4gICAgICAgICAgICBpZERpcmVjY2lvblxyXG4gICAgICAgICB9ID0gcmVxLmJvZHkgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgndXBkYXRlRGlyZWNjaW9uJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdjYWxsZURpcmVjY2lvbicgLCBtc3NxbC5WYXJDaGFyICwgY2FsbGVEaXJlY2Npb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnYWx0dXJhRGlyZWNjaW9uJyAsIG1zc3FsLkludCAsIGFsdHVyYURpcmVjY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdjb2RpZ29Qb3N0YWxEaXJlY2Npb24nICwgbXNzcWwuSW50ICwgY29kaWdvUG9zdGFsRGlyZWNjaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2JhcnJpb0RpcmVjY2lvbicgLCBtc3NxbC5WYXJDaGFyICwgYmFycmlvRGlyZWNjaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ290cm9zRGF0b3NEaXJlY2Npb24nICwgbXNzcWwuVmFyQ2hhciAsIG90cm9zRGF0b3NEaXJlY2Npb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWREaXJlY2Npb24nICwgbXNzcWwuSW50ICwgaWREaXJlY2Npb24gKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfdXBkYXRlRGlyZWNjaW9uJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidEaXJlY2Npb24gbW9kaWZpY2FkYSBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogREVMRVRFIERJUkVDSU9OXHJcblxyXG5yb3V0ZXIucG9zdCgnL2RlbGV0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge2lkRGlyZWNjaW9ufSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdkZWxldGVEaXJlY2Npb24nKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkRGlyZWNjaW9uJyAsIG1zc3FsLkludCAsIGlkRGlyZWNjaW9uIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2RlbGV0ZURpcmVjY2lvbicpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonRGlyZWNjaW9uIGVsaW1pbmFkYSBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgUm91dGVyID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpXHJcbmNvbnN0IENPTkZJRyA9IHJlcXVpcmUoJy4uL0NPTkZJRycpXHJcblxyXG5jb25zdCByb3V0ZXI9Um91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLChyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uLnNwbGl0KCcgJylbMV1cclxuICAgIGp3dC52ZXJpZnkodG9rZW4sQ09ORklHLnNlY3JldCwoZSxkKT0+e1xyXG4gICAgICAgIGlmKGUpeyByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTplLm5hbWUsbG9nT0s6ZmFsc2V9KX1cclxuICAgICAgICBlbHNleyByZXMuc3RhdHVzKDIwMCkuanNvbih7dXN1YXJpbzpkLGxvZ09LOnRydWV9KSB9XHJcbiAgICB9KSAgICBcclxufSlcclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG4vL1RPRE86IExJU1RBIERFIE1BUkNBU1xyXG5yb3V0ZXIuZ2V0KCcvbGlzdCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wsY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgICAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnTGlzdGFNYXJjYXMnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSgncGFfbGlzdGFNYXJjYXMnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bGlzdDpyZXN1bHQucmVjb3Jkc2V0LG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplIDogJ0Vycm9yIGVuIGVsIHJlc3VsdGFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplIDogZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBJTlNFUlRBIE1BUkNBXHJcblxyXG5yb3V0ZXIucG9zdCAoJy9pbnNlcnQnICwgYXN5bmMgKHJlcSAsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7bm9tYnJlTWFyY2F9ID0gcmVxLmJvZHlcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdpbnNlcnRNYXJjYScpXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZU1hcmNhJyAsIFZhckNoYXIgLCBub21icmVNYXJjYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9pbnNlcnRNYXJjYScpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonTWFyY2EgZ3VhcmRhZGEgZXhpdG9zYW1lbnRlJyxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTplLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IFVQREFURSBNQVJDQVxyXG5cclxucm91dGVyLnB1dCgnL3VwZGF0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge25vbWJyZU1hcmNhLGlkTWFyY2F9ID0gcmVxLmJvZHkgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ3VwZGF0ZU1hcmNhJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmVNYXJjYScgLCBtc3NxbC5WYXJDaGFyICwgbm9tYnJlTWFyY2EgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRNYXJjYScgLCBtc3NxbC5JbnQgLCBpZE1hcmNhIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX3VwZGF0ZU1hcmNhJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidNYXJjYSBtb2RpZmljYWRhIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBERUxFVEUgTUFSQ0FcclxuXHJcbnJvdXRlci5wb3N0KCcvZGVsZXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7aWRNYXJjYX0gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnZGVsZXRlTWFyY2EnKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkTWFyY2EnICwgbXNzcWwuSW50ICwgaWRNYXJjYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9kZWxldGVNYXJjYScpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonTWFyY2EgZWxpbWluYWRhIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IHsgZWFjaFNlcmllcyB9ID0gcmVxdWlyZSgnYXN5bmMnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxuLy9UT0RPOiBMSVNUQSBERSBQUk9EVUNUT1Ncclxucm91dGVyLmdldCgnL2xpc3QnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3Qge2FicmlyQ29uZXhpb25QT09MLGNlcnJhckNvbmV4aW9uUE9PTH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICAgICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ0xpc3RhUHJvZHVjdG9zJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX2xpc3RhUHJvZHVjdG9zJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe2xpc3Q6cmVzdWx0LnJlY29yZHNldCxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZSA6ICdFcnJvciBlbiBlbCByZXN1bHRhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZSA6IGUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogSU5TRVJUQSBQUk9EVUNUT1xyXG5cclxucm91dGVyLnBvc3QgKCcvaW5zZXJ0JyAsIGFzeW5jIChyZXEgLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGNvbnN0IHtub21icmVQcm9kdWN0byxkZXNjcmlwY2lvblByb2R1Y3RvLHByZWNpb0FjdHVhbFByb2R1Y3RvLHZlY0RldGFsbGVzUHJvZHVjdG99ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ2luc2VydFByb2R1Y3RvJylcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgLCBJbnQgLCBSZWFsICxUcmFuc2FjdGlvbiB9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgY29uc3QgbXlUcmFuc2FjdGlvbiA9IG5ldyBUcmFuc2FjdGlvbiAoY29uZXhpb24pXHJcbiAgICBteVRyYW5zYWN0aW9uLmJlZ2luKCBhc3luYyAoZXJyKSA9PiB7XHJcbiAgICAgICAgaWYoZXJyKSB7XHJcbiAgICAgICAgICAgIG15VHJhbnNhY3Rpb24ucm9sbGJhY2soKVxyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKG15VHJhbnNhY3Rpb24pXHJcbiAgICAgICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlUHJvZHVjdG8nICwgVmFyQ2hhciAsIG5vbWJyZVByb2R1Y3RvIClcclxuICAgICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdkZXNjcmlwY2lvblByb2R1Y3RvJyAsIFZhckNoYXIgLCBkZXNjcmlwY2lvblByb2R1Y3RvIClcclxuICAgICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdwcmVjaW9BY3R1YWxQcm9kdWN0bycgLCBSZWFsICwgcHJlY2lvQWN0dWFsUHJvZHVjdG8gKVxyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2luc2VydFByb2R1Y3RvbycpXHJcbiAgICAgICAgICAgIGlmKHJlc3VsdC5yb3dzQWZmZWN0ZWRbMF0gPT09IDAgfHwgIXJlc3VsdC5yZWNvcmRzZXRbMF0uaWRQcm9kdWN0byl7XHJcbiAgICAgICAgICAgICAgICBteVRyYW5zYWN0aW9uLnJvbGxiYWNrKClcclxuICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonUHJvZHVjdG8gbm8gaW5zZXJ0YWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNleyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkUHJvZHVjdG8gPSBwYXJzZUludChyZXN1bHQucmVjb3Jkc2V0WzBdLmlkUHJvZHVjdG8pXHJcbiAgICAgICAgICAgICAgICBjb25zdCBteVJlcXVlc3REUCA9IG5ldyBSZXF1ZXN0IChteVRyYW5zYWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgbXlSZXF1ZXN0RFAuaW5wdXQoJ2lkUHJvZHVjdG8nICwgSW50ICwgaWRQcm9kdWN0byApXHJcbiAgICAgICAgICAgICAgICBteVJlcXVlc3REUC5pbnB1dCgnaWRBcnRpY3VsbycgLCBJbnQgLCAwIClcclxuICAgICAgICAgICAgICAgIG15UmVxdWVzdERQLmlucHV0KCdjYW50aWRhZERldGFsbGVQcm9kdWN0bycgLCBSZWFsICwgMCApXHJcbiAgICAgICAgICAgICAgICBlYWNoU2VyaWVzKHZlY0RldGFsbGVzUHJvZHVjdG8gLCAoRFAgLCBjYWxsYmFjayApPT57ICBcclxuICAgICAgICAgICAgICAgICAgICBteVJlcXVlc3REUC5wYXJhbWV0ZXJzLmlkQXJ0aWN1bG8udmFsdWUgPSBEUC5pZEFydGljdWxvXHJcbiAgICAgICAgICAgICAgICAgICAgbXlSZXF1ZXN0RFAucGFyYW1ldGVycy5jYW50aWRhZERldGFsbGVQcm9kdWN0by52YWx1ZSA9IERQLmNhbnRpZGFkRGV0YWxsZVByb2R1Y3RvICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIG15UmVxdWVzdERQLmV4ZWN1dGUoJ3BhX2luc2VydERldGFsbGVQcm9kdWN0bycsKEUsUik9PntpZihFKXsgY2FsbGJhY2soRSkgfWVsc2V7IGNhbGxiYWNrKCl9fSkgXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvckNhbGxCYWNrID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZXJyb3JDYWxsQmFjayl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteVRyYW5zYWN0aW9uLnJvbGxiYWNrKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTplcnJvckNhbGxCYWNrLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteVRyYW5zYWN0aW9uLmNvbW1pdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J1Byb2R1Y3RvIHkgZGV0YWxsZXMgZGUgcHJvZHVjdG8gZ3VhcmRhZG9zIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICkgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2goZSl7XHJcbiAgICAgICAgICAgIG15VHJhbnNhY3Rpb24ucm9sbGJhY2soKVxyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgIH0pXHJcbn0pXHJcblxyXG4vL1RPRE86IFVQREFURSBQUk9EVUNUT1xyXG5cclxucm91dGVyLnB1dCgnL3VwZGF0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge25vbWJyZVByb2R1Y3RvLGRlc2NyaXBjaW9uUHJvZHVjdG8gLCBwcmVjaW9BY3R1YWxQcm9kdWN0byAsaWRQcm9kdWN0b30gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgndXBkYXRlUHJvZHVjdG8nKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZVByb2R1Y3RvJyAsIG1zc3FsLlZhckNoYXIgLCBub21icmVQcm9kdWN0byApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdkZXNjcmlwY2lvblByb2R1Y3RvJyAsIG1zc3FsLlZhckNoYXIgLCBkZXNjcmlwY2lvblByb2R1Y3RvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ3ByZWNpb0FjdHVhbFByb2R1Y3RvJyAsIG1zc3FsLlJlYWwgLCBwcmVjaW9BY3R1YWxQcm9kdWN0byApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFByb2R1Y3RvJyAsIG1zc3FsLkludCAsIGlkUHJvZHVjdG8gKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfdXBkYXRlUHJvZHVjdG8nKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J1Byb2R1Y3RvIG1vZGlmaWNhZG8gZXhpdG9zYW1lbnRlJyxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTplLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IERFTEVURSBQUk9EVUNUT1xyXG5cclxucm91dGVyLnBvc3QoJy9kZWxldGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtpZFByb2R1Y3RvfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdkZWxldGVQcm9kdWN0bycpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRQcm9kdWN0bycgLCBtc3NxbC5JbnQgLCBpZFByb2R1Y3RvIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2RlbGV0ZVByb2R1Y3RvJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidQcm9kdWN0byBlbGltaW5hZG8gZXhpdG9zYW1lbnRlJyxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbi8vVE9ETzogTElTVEEgREUgUFJPVkVFRE9SRVNcclxucm91dGVyLmdldCgnL2xpc3QnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3Qge2FicmlyQ29uZXhpb25QT09MLGNlcnJhckNvbmV4aW9uUE9PTH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICAgICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ0xpc3RhUHJvdmVlZG9yZXMnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSgncGFfbGlzdGFQcm92ZWVkb3JlcycpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtsaXN0OnJlc3VsdC5yZWNvcmRzZXQsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamUgOiAnRXJyb3IgZW4gZWwgcmVzdWx0YWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamUgOiBlLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IElOU0VSVEEgUFJPVkVFRE9SXHJcblxyXG5yb3V0ZXIucG9zdCAoJy9pbnNlcnQnICwgYXN5bmMgKHJlcSAsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IG5vbWJyZVByb3ZlZWRvcixhcGVsbGlkb1Byb3ZlZWRvcixpZFRpcG9Eb2N1bWVudG8sbnJvRG9jUHJvdmVlZG9yLFxyXG4gICAgICAgICAgICBpZFRpcG9Db250cmlidWxsZW50ZSxucm9DdWl0Q3VpbFByb3ZlZWRvcixpZERpcmVjY2lvbixpZFRpcG9QZXJzb25hXHJcbiAgICAgICAgfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnaW5zZXJ0UHJvdmVlZG9yJylcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlUHJvdmVlZG9yJyAsIFZhckNoYXIgLCBub21icmVQcm92ZWVkb3IgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnYXBlbGxpZG9Qcm92ZWVkb3InICwgVmFyQ2hhciAsIGFwZWxsaWRvUHJvdmVlZG9yIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVGlwb0RvY3VtZW50bycgLCBJbnQgLCBpZFRpcG9Eb2N1bWVudG8gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbnJvRG9jUHJvdmVlZG9yJyAsIFZhckNoYXIgLCBucm9Eb2NQcm92ZWVkb3IgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRUaXBvQ29udHJpYnVsbGVudGUnICwgSW50ICwgaWRUaXBvQ29udHJpYnVsbGVudGUgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbnJvQ3VpdEN1aWxQcm92ZWVkb3InICwgSW50ICwgbnJvQ3VpdEN1aWxQcm92ZWVkb3IgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWREaXJlY2Npb24nICwgSW50ICwgaWREaXJlY2Npb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRUaXBvUGVyc29uYScgLCBJbnQgLCBpZFRpcG9QZXJzb25hIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2luc2VydFByb3ZlZWRvcicpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonUHJvdmVlZG9yIGd1YXJkYWRvIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBVUERBVEUgUFJPVkVFRE9SXHJcblxyXG5yb3V0ZXIucHV0KCcvdXBkYXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGlkUHJvdmVlZG9yLG5vbWJyZVByb3ZlZWRvcixhcGVsbGlkb1Byb3ZlZWRvcixpZFRpcG9Eb2N1bWVudG8sbnJvRG9jUHJvdmVlZG9yLFxyXG4gICAgICAgICAgICBpZFRpcG9Db250cmlidWxsZW50ZSxucm9DdWl0Q3VpbFByb3ZlZWRvcixpZERpcmVjY2lvbixpZFRpcG9QZXJzb25hXHJcbiAgICAgICAgfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCd1cGRhdGVQcm92ZWVkb3InKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkUHJvdmVlZG9yJyAsIG1zc3FsLkludCAsIGlkUHJvdmVlZG9yIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZVByb3ZlZWRvcicgLCBtc3NxbC5WYXJDaGFyICwgbm9tYnJlUHJvdmVlZG9yIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2FwZWxsaWRvUHJvdmVlZG9yJyAsIG1zc3FsLlZhckNoYXIgLCBhcGVsbGlkb1Byb3ZlZWRvciApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFRpcG9Eb2N1bWVudG8nICwgbXNzcWwuSW50ICwgaWRUaXBvRG9jdW1lbnRvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25yb0RvY1Byb3ZlZWRvcicgLCBtc3NxbC5WYXJDaGFyICwgbnJvRG9jUHJvdmVlZG9yIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVGlwb0NvbnRyaWJ1bGxlbnRlJyAsIEludCAsIGlkVGlwb0NvbnRyaWJ1bGxlbnRlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25yb0N1aXRDdWlsUHJvdmVlZG9yJyAsIG1zc3FsLkludCAsIG5yb0N1aXRDdWlsUHJvdmVlZG9yIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkRGlyZWNjaW9uJyAsIG1zc3FsLkludCAsIGlkRGlyZWNjaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVGlwb1BlcnNvbmEnICwgbXNzcWwuSW50ICwgaWRUaXBvUGVyc29uYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV91cGRhdGVQcm92ZWVkb3InKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J1Byb3ZlZWRvciBtb2RpZmljYWRvIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBERUxFVEUgUFJPVkVFRE9SXHJcblxyXG5yb3V0ZXIucG9zdCgnL2RlbGV0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge2lkUHJvdmVlZG9yfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdkZWxldGVQcm92ZWVkb3InKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkUHJvdmVlZG9yJyAsIG1zc3FsLkludCAsIGlkUHJvdmVlZG9yIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2RlbGV0ZVByb3ZlZWRvcicpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonUHJvdmVlZG9yIGVsaW1pbmFkbyBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxuLy9UT0RPOiBMSVNUQSBTVUNVUlNBTEVTXHJcbnJvdXRlci5nZXQoJy9saXN0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHthYnJpckNvbmV4aW9uUE9PTCxjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdMaXN0YVN1Y3Vyc2FsZXMnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSgncGFfbGlzdGFTdWN1cnNhbGVzJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe2xpc3Q6cmVzdWx0LnJlY29yZHNldCxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZSA6ICdFcnJvciBlbiBlbCByZXN1bHRhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZSA6IGUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogSU5TRVJUQSBTVUNVUlNBTFxyXG5cclxucm91dGVyLnBvc3QgKCcvaW5zZXJ0JyAsIGFzeW5jIChyZXEgLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBpZERpcmVjY2lvbiAsIG5vbWJyZVN1Y3Vyc2FsIH0gPSByZXEuYm9keVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ2luc2VydFN1Y3Vyc2FsJylcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWREaXJlY2Npb24nICwgSW50ICwgaWREaXJlY2Npb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlU3VjdXJzYWwnICwgVmFyQ2hhciAsIG5vbWJyZVN1Y3Vyc2FsIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2luc2VydFN1Y3Vyc2FsJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidTdWN1cnNhbCBndWFyZGFkYSBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogVVBEQVRFIFNVQ1VSU0FMXHJcblxyXG5yb3V0ZXIucHV0KCcvdXBkYXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7aWRTdWN1cnNhbCxpZERpcmVjY2lvbixub21icmVTdWN1cnNhbH0gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgndXBkYXRlU3VjdXJzYWwnKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkU3VjdXJzYWwnICwgbXNzcWwuSW50ICwgaWRTdWN1cnNhbCApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZERpcmVjY2lvbicgLCBtc3NxbC5JbnQgLCBpZERpcmVjY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmVTdWN1cnNhbCcgLCBtc3NxbC5WYXJDaGFyICwgbm9tYnJlU3VjdXJzYWwgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfdXBkYXRlU3VjdXJzYWwnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J1N1Y3Vyc2FsIG1vZGlmaWNhZGEgZXhpdG9zYW1lbnRlJyxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTplLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IERFTEVURSBTVUNVUlNBTFxyXG5cclxucm91dGVyLnBvc3QoJy9kZWxldGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtpZFN1Y3Vyc2FsfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdkZWxldGVTdWN1cnNhbCcpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRTdWN1cnNhbCcgLCBtc3NxbC5JbnQgLCBpZFN1Y3Vyc2FsIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2RlbGV0ZVN1Y3Vyc2FsJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidTdWN1cnNhbCBlbGltaW5hZGEgZXhpdG9zYW1lbnRlJyxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTplLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbi8vVE9ETzogTElTVEEgREUgVElQT1MgREUgQ09OVFJJQlVMTEVOVEVcclxucm91dGVyLmdldCgnL2xpc3QnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3Qge2FicmlyQ29uZXhpb25QT09MLGNlcnJhckNvbmV4aW9uUE9PTH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICAgICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ0xpc3RhVGlwb3NDb250cmlidWxsZW50ZScpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlKCdwYV9saXN0YVRpcG9zQ29udHJpYnVsbGVudGUnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bGlzdDpyZXN1bHQucmVjb3Jkc2V0LG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplIDogJ0Vycm9yIGVuIGVsIHJlc3VsdGFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplIDogZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBJTlNFUlRBIFRJUE8gREUgQ09OVFJJQlVMTEVOVEVcclxuXHJcbnJvdXRlci5wb3N0ICgnL2luc2VydCcgLCBhc3luYyAocmVxICwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgbm9tYnJlVGlwb0NvbnRyaWJ1bGxlbnRlICwgZGVzY3JpcGNpb25UaXBvQ29udHJpYnVsbGVudGUgfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnaW5zZXJ0VGlwb0NvbnRyaWJ1bGxlbnRlJylcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyIH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlVGlwb0NvbnRyaWJ1bGxlbnRlJyAsIFZhckNoYXIgLCBub21icmVUaXBvQ29udHJpYnVsbGVudGUgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZGVzY3JpcGNpb25UaXBvQ29udHJpYnVsbGVudGUnICwgVmFyQ2hhciAsIGRlc2NyaXBjaW9uVGlwb0NvbnRyaWJ1bGxlbnRlIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2luc2VydFRpcG9Db250cmlidWxsZW50ZScpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonVGlwbyBkZSBjb250cmlidWxsZW50ZSBndWFyZGFkbyBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogVVBEQVRFIFRJUE8gREUgQ09OVFJJQlVMTEVOVEVcclxuXHJcbnJvdXRlci5wdXQoJy91cGRhdGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtub21icmVUaXBvQ29udHJpYnVsbGVudGUsZGVzY3JpcGNpb25UaXBvQ29udHJpYnVsbGVudGUsaWRUaXBvQ29udHJpYnVsbGVudGV9ID0gcmVxLmJvZHkgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ3VwZGF0ZVRpcG9Db250cmlidWxsZW50ZScpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlVGlwb0NvbnRyaWJ1bGxlbnRlJyAsIG1zc3FsLlZhckNoYXIgLCBub21icmVUaXBvQ29udHJpYnVsbGVudGUgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZGVzY3JpcGNpb25UaXBvQ29udHJpYnVsbGVudGUnICwgbXNzcWwuVmFyQ2hhciAsIGRlc2NyaXBjaW9uVGlwb0NvbnRyaWJ1bGxlbnRlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVGlwb0NvbnRyaWJ1bGxlbnRlJyAsIG1zc3FsLkludCAsIGlkVGlwb0NvbnRyaWJ1bGxlbnRlIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX3VwZGF0ZVRpcG9Db250cmlidWxsZW50ZScpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonVGlwbyBkZSBjb250cmlidWxsZW50ZSBtb2RpZmljYWRvIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBERUxFVEUgVElQTyBERSBDT05UUklCVUxMRU5URVxyXG5cclxucm91dGVyLnBvc3QoJy9kZWxldGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtpZFRpcG9Db250cmlidWxsZW50ZX0gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnZGVsZXRlVGlwb0NvbnRyaWJ1bGxlbnRlJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFRpcG9Db250cmlidWxsZW50ZScgLCBtc3NxbC5JbnQgLCBpZFRpcG9Db250cmlidWxsZW50ZSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9kZWxldGVUaXBvQ29udHJpYnVsbGVudGUnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J1RpcG8gZGUgY29udHJpYnVsbGVudGUgZWxpbWluYWRvIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG4vL1RPRE86IExJU1RBIERFIFRJUE9TIERFIERPQ1VNRU5UT1xyXG5yb3V0ZXIuZ2V0KCcvbGlzdCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wsY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgICAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnTGlzdGFUaXBvc0RvY3VtZW50bycpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlKCdwYV9saXN0YVRpcG9zRG9jdW1lbnRvJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe2xpc3Q6cmVzdWx0LnJlY29yZHNldCxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZSA6ICdFcnJvciBlbiBlbCByZXN1bHRhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZSA6IGUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogSU5TRVJUQSBUSVBPIERFIERPQ1VNRU5UT1xyXG5cclxucm91dGVyLnBvc3QgKCcvaW5zZXJ0JyAsIGFzeW5jIChyZXEgLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge25vbWJyZVRpcG9Eb2N1bWVudG99ID0gcmVxLmJvZHlcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdpbnNlcnRUaXBvRG9jdW1lbnRvJylcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyIH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlVGlwb0RvY3VtZW50bycgLCBWYXJDaGFyICwgbm9tYnJlVGlwb0RvY3VtZW50byApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9pbnNlcnRUaXBvRG9jdW1lbnRvJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidUaXBvIGRlIGRvY3VtZW50byBndWFyZGFkbyBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogVVBEQVRFIFRJUE8gREUgRE9DVU1FTlRPXHJcblxyXG5yb3V0ZXIucHV0KCcvdXBkYXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7bm9tYnJlVGlwb0RvY3VtZW50byxpZFRpcG9Eb2N1bWVudG99ID0gcmVxLmJvZHkgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ3VwZGF0ZVRpcG9Eb2N1bWVudG8nKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZVRpcG9Eb2N1bWVudG8nICwgbXNzcWwuVmFyQ2hhciAsIG5vbWJyZVRpcG9Eb2N1bWVudG8gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRUaXBvRG9jdW1lbnRvJyAsIG1zc3FsLkludCAsIGlkVGlwb0RvY3VtZW50byApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV91cGRhdGVUaXBvRG9jdW1lbnRvJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidUaXBvIGRlIGRvY3VtZW50byBtb2RpZmljYWRvIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBERUxFVEUgVElQTyBERSBET0NVTUVOVE9cclxuXHJcbnJvdXRlci5wb3N0KCcvZGVsZXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7aWRUaXBvRG9jdW1lbnRvfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdkZWxldGVUaXBvRG9jdW1lbnRvJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFRpcG9Eb2N1bWVudG8nICwgbXNzcWwuSW50ICwgaWRUaXBvRG9jdW1lbnRvIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2RlbGV0ZVRpcG9Eb2N1bWVudG8nKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J1RpcG8gZGUgZG9jdW1lbnRvIGVsaW1pbmFkbyBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxuLy9UT0RPOiBMSVNUQSBERSBUSVBPUyBERSBQRVJTT05BXHJcbnJvdXRlci5nZXQoJy9saXN0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHthYnJpckNvbmV4aW9uUE9PTCxjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdMaXN0YVRpcG9zUGVyc29uYScpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlKCdwYV9saXN0YVRpcG9zUGVyc29uYScpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtsaXN0OnJlc3VsdC5yZWNvcmRzZXQsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamUgOiAnRXJyb3IgZW4gZWwgcmVzdWx0YWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamUgOiBlLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IElOU0VSVEEgVElQTyBERSBQRVJTT05BXHJcblxyXG5yb3V0ZXIucG9zdCAoJy9pbnNlcnQnICwgYXN5bmMgKHJlcSAsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7bm9tYnJlVGlwb1BlcnNvbmF9ID0gcmVxLmJvZHlcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdpbnNlcnRUaXBvUGVyc29uYScpXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZVRpcG9QZXJzb25hJyAsIFZhckNoYXIgLCBub21icmVUaXBvUGVyc29uYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9pbnNlcnRUaXBvUGVyc29uYScpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonVGlwbyBkZSBwZXJzb25hIGd1YXJkYWRhIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBVUERBVEUgVElQTyBERSBQRVJTT05BXHJcblxyXG5yb3V0ZXIucHV0KCcvdXBkYXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7bm9tYnJlVGlwb1BlcnNvbmEsaWRUaXBvUGVyc29uYX0gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgndXBkYXRlVGlwb1BlcnNvbmEnKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZVRpcG9QZXJzb25hJyAsIG1zc3FsLlZhckNoYXIgLCBub21icmVUaXBvUGVyc29uYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFRpcG9QZXJzb25hJyAsIG1zc3FsLkludCAsIGlkVGlwb1BlcnNvbmEgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfdXBkYXRlVGlwb1BlcnNvbmEnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J1RpcG8gZGUgcGVyc29uYSBtb2RpZmljYWRhIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBERUxFVEUgVElQTyBERSBQRVJTT05BXHJcblxyXG5yb3V0ZXIucG9zdCgnL2RlbGV0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge2lkVGlwb1BlcnNvbmF9ID0gcmVxLmJvZHkgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ2RlbGV0ZVRpcG9QZXJzb25hJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFRpcG9QZXJzb25hJyAsIG1zc3FsLkludCAsIGlkVGlwb1BlcnNvbmEgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfZGVsZXRlVGlwb1BlcnNvbmEnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J1RpcG8gZGUgcGVyc29uYSBlbGltaW5hZGEgZXhpdG9zYW1lbnRlJyxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTplLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbi8vVE9ETzogTElTVEEgREUgVU5JREFERVMgREUgTUVESURBXHJcbnJvdXRlci5nZXQoJy9saXN0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHthYnJpckNvbmV4aW9uUE9PTCxjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdMaXN0YVVuaWRhZGVzTWVkaWRhJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX2xpc3RhVW5pZGFkZXNNZWRpYScpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtsaXN0OnJlc3VsdC5yZWNvcmRzZXQsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamUgOiAnRXJyb3IgZW4gZWwgcmVzdWx0YWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamUgOiBlLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IElOU0VSVEEgVU5JREFEIERFIE1FRElEQVxyXG5cclxucm91dGVyLnBvc3QgKCcvaW5zZXJ0JyAsIGFzeW5jIChyZXEgLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBub21icmVVbmlkYWRNZWRpZGEgLCBkZXNjcmlwY2lvblVuaWRhZE1lZGlkYSB9ID0gcmVxLmJvZHlcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdpbnNlcnRVbmlkYWRNYWRpZGEnKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgfSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmVVbmlkYWRNZWRpZGEnICwgVmFyQ2hhciAsIG5vbWJyZVVuaWRhZE1lZGlkYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdkZXNjcmlwY2lvblVuaWRhZE1lZGlkYScgLCBWYXJDaGFyICwgZGVzY3JpcGNpb25VbmlkYWRNZWRpZGEgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfaW5zZXJ0VW5pZGFkTWVkaWRhJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidVbmlkYWRlIGRlIG1lZGlkYSBndWFyZGFkYSBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogVVBEQVRFIFVOSURBRCBERSBNRURJREFcclxuXHJcbnJvdXRlci5wdXQoJy91cGRhdGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtub21icmVVbmlkYWRNZWRpZGEsZGVzY3JpcGNpb25VbmlkYWRNZWRpZGEsaWRVbmlkYWRNZWRpZGF9ID0gcmVxLmJvZHkgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ3VwZGF0ZVVuaWRhZE1lZGlkYScpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlVW5pZGFkTWVkaWRhJyAsIG1zc3FsLlZhckNoYXIgLCBub21icmVVbmlkYWRNZWRpZGEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZGVzY3JpcGNpb25VbmlkYWRNZWRpZGEnICwgbXNzcWwuVmFyQ2hhciAsIGRlc2NyaXBjaW9uVW5pZGFkTWVkaWRhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVW5pZGFkTWVkaWRhJyAsIG1zc3FsLkludCAsIGlkVW5pZGFkTWVkaWRhIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX3VwZGF0ZVVuaWRhZE1lZGlkYScpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonVW5pZGFkIGRlIG1lZGlkYSBtb2RpZmljYWRhIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBERUxFVEUgVU5JREFEIE1FRElEQVxyXG5cclxucm91dGVyLnBvc3QoJy9kZWxldGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtpZFVuaWRhZE1lZGlkYX0gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnZGVsZXRlVW5pZGFkTWVkaWRhJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFVuaWRhZE1lZGlkYScgLCBtc3NxbC5JbnQgLCBpZFVuaWRhZE1lZGlkYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9kZWxldGVVbmlkYWRNZWRpZGEnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J1VuaWRhZCBkZSBtZWRpZGEgZWxpbWluYWRhIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBiY3J5cCA9IHJlcXVpcmUoJ2JjcnlwdCcpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxuLy8gVE9ETzogSU5TRVJUIFVTVUFSSU9cclxuXHJcbnJvdXRlci5wb3N0ICggJy9pbnNlcnQnICwgYXN5bmMgKHJlcSwgcmVzICkgPT4ge1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUgKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBjb25zdCB7IG5vbWJyZVVzdWFyaW8gLCBhcGVsbGlkb1VzdWFyaW8gLCB1c3VhcmlvICwgcHcgfSA9IHJlcS5ib2R5XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ2luc2VydFVzdWFyaW8nKVxyXG4gICAgICAgIGNvbnN0IHtSZXF1ZXN0ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSAoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICgnbm9tYnJlVXN1YXJpbycgLCBWYXJDaGFyICwgbm9tYnJlVXN1YXJpbylcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCdhcGVsbGlkb1VzdWFyaW8nICwgVmFyQ2hhciAsIGFwZWxsaWRvVXN1YXJpbylcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCd1c3VhcmlvJyAsIFZhckNoYXIgLCB1c3VhcmlvKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoJ3B3JyAsIFZhckNoYXIgLCBiY3J5cC5oYXNoU3luYyhwdyAsIDEwKSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoICdwYV9pbnNlcnRVc3VhcmlvJyApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKCB7IG1lbnNhamUgOiAnVXN1YXJpbyBpbnNlcnRhZG8gY29ycmVjdGFtZW50ZScsb3BPSzp0cnVlIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICxvcE9LOmZhbHNlfSApXHJcbiAgICB9XHJcbn0gKVxyXG5cclxuXHJcbi8vIC8vICEgbGlzdGFkbyBkZSB1c3Vhcmlvc1xyXG4vLyByb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuLy8gICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSAoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuLy8gICAgIHRyeXtcclxuLy8gICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCAnbGlhc3RhVXN1YXJpbycpXHJcbi8vICAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbi8vICAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QoY29uZXhpb24pXHJcbi8vICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX2xpc3RhVXN1YXJpb3MnKVxyXG4vLyAgICAgICAgIGlmKHJlc3VsdCl7XHJcbi8vICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbi8vICAgICAgICAgICAgIHJlcy5qc29uKHJlc3VsdC5yZWNvcmRzZXQpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGVsc2V7XHJcbi8vICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbi8vICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtzdGF0dXM6IDIwMCxtZW5zYWplOmUubWVzc2FnZX0pXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgY2F0Y2goZSl7XHJcbi8vICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7c3RhdHVzOiAyMDAsbWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG4vLyAvLyEgbGlzdGEgZGUgcGVyZmlsZXNcclxuLy8gcm91dGVyLmdldCgnL3BlcmZpbGVzJyxhc3luYyAocmVxLHJlcyk9PntcclxuLy8gICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSAoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuLy8gICAgIHRyeXtcclxuLy8gICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCAnbGlzdGFQZXJmaWxlcycpXHJcbi8vICAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbi8vICAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QoY29uZXhpb24pXHJcbi8vICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX2xpc3RhUGVyZmlsZXMnKVxyXG4vLyAgICAgICAgIGlmKHJlc3VsdCl7XHJcbi8vICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbi8vICAgICAgICAgICAgIHJlcy5qc29uKHJlc3VsdC5yZWNvcmRzZXQpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGVsc2V7XHJcbi8vICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbi8vICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtzdGF0dXM6IDIwMCxtZW5zYWplOmUubWVzc2FnZX0pXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgY2F0Y2goZSl7XHJcbi8vICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7c3RhdHVzOiAyMDAsbWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG4vLyAvLyEgY29uc3VsdGEgdXN1YXJpbyBwb3IgaWRcclxuLy8gcm91dGVyLmdldCgnLzppZCcsYXN5bmMgKHJlcSxyZXMpPT57XHJcbi8vICAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWRcclxuLy8gICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSAoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuLy8gICAgIHRyeXtcclxuLy8gICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCAnZ2V0VXNleElkJylcclxuLy8gICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuLy8gICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdChjb25leGlvbilcclxuLy8gICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVXN1YXJpbycgLCBtc3NxbC5JbnQgLCBpZClcclxuLy8gICAgICAgICBjb25zdCBxdWVyeSA9IGBzZWxlY3RcclxuLy8gICAgICAgICB1LmlkIGFzIGlkVXN1YXJpbyAsXHJcbi8vICAgICAgICAgdS51c2VyTmFtZSBhcyB1c2VyTmFtZSAsXHJcbi8vICAgICAgICAgdS5lbWFpbCBhcyBlbWFpbCAsXHJcbi8vICAgICAgICAgdS5ub21icmUgYXMgbm9tYnJlVXN1YXJpbyAsXHJcbi8vICAgICAgICAgdS5hcGVsbGlkbyBhcyBhcGVsbGlkb1VzdWFyaW8gLFxyXG4vLyAgICAgICAgIHAuaWQgYXMgaWRQZXJmaWwgLFxyXG4vLyAgICAgICAgIHAubm9tYnJlIGFzIG5vbWJyZVBlcmZpbFxyXG4vLyAgICAgICAgIGZyb20gdXN1YXJpb3MgdVxyXG4vLyAgICAgICAgIGpvaW4gcGVyZmlsZXMgcCBvbiBwLmlkID0gdS5pZF9wZXJmaWxcclxuLy8gICAgICAgICB3aGVyZSB1LmlkID0gQGlkVXN1YXJpb2BcclxuLy8gICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkocXVlcnkpXHJcbi8vICAgICAgICAgaWYocmVzdWx0KXtcclxuLy8gICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICAgICAgcmVzLmpzb24ocmVzdWx0LnJlY29yZHNldClcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgZWxzZXtcclxuLy8gICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oe3N0YXR1czogMjAwLG1lbnNhamU6ZS5tZXNzYWdlfSlcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICBjYXRjaChlKXtcclxuLy8gICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4vLyAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtzdGF0dXM6IDIwMCxtZW5zYWplOmUubWVzc2FnZX0pXHJcbi8vICAgICB9XHJcbi8vIH0pXHJcblxyXG4vLyAvLyFndWFyZGEgdXN1YXJpb1xyXG4vLyByb3V0ZXIucG9zdCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbi8vICAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4vLyAgICAgY29uc3QgIHt1c2VyTmFtZSxwYXNzd29yZCxlbWFpbCxub21icmUsYXBlbGxpZG8saWRQZXJmaWx9ID0gcmVxLmJvZHlcclxuLy8gICAgIHRyeXtcclxuLy8gICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdzYXZlVXNlcicpXHJcbi8vICAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlICgnbXNzcWwnKVxyXG4vLyAgICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0KGNvbmV4aW9uKVxyXG4vLyAgICAgICAgIGNvbnN0IHB3ID0gYmNyeXAuaGFzaFN5bmMocGFzc3dvcmQsMTApXHJcbi8vICAgICAgICAgY29uc29sZS5sb2cocHcpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCd1c2VyTmFtZScgLCBtc3NxbC5WYXJDaGFyICwgdXNlck5hbWUpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdwYXNzd29yZCcgLCBtc3NxbC5WYXJDaGFyICwgcHcpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdlbWFpbCcgLCBtc3NxbC5WYXJDaGFyICwgZW1haWwpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmUnICwgbXNzcWwuVmFyQ2hhciAsIG5vbWJyZSlcclxuLy8gICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2FwZWxsaWRvJyAsIG1zc3FsLlZhckNoYXIgLCBhcGVsbGlkbylcclxuLy8gICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkUGVyZmlsJyAsIG1zc3FsLkludCAsIGlkUGVyZmlsKVxyXG4vLyAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlKCdwYV9pbnNlcnRVc3VhcmlvcycpXHJcbi8vICAgICAgICAgaWYocmVzdWx0KXtcclxuLy8gICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4vLyAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6ICd1c3VhcmlvIGluc2VydGFkbyBjb3JyZWN0YW1lbnRlICEnIH0pXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgY2F0Y2goZXJyKXtcclxuLy8gICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4vLyAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtlcnJvcjplcnIubWVzc2FnZX0pXHJcbi8vICAgICB9XHJcbi8vIH0pXHJcblxyXG4vLyByb3V0ZXIucHV0KCcvJywgYXN5bmMgKHJlcSxyZXMpPT57XHJcbi8vICAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4vLyAgICAgY29uc3QgIHt1c2VyTmFtZSxwYXNzd29yZCxlbWFpbCxub21icmUsYXBlbGxpZG8saWRQZXJmaWwgLCBpZFVzdWFyaW99ID0gcmVxLmJvZHlcclxuLy8gICAgIHRyeXtcclxuLy8gICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCd1cGRhdGVVc2VyJylcclxuLy8gICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUgKCdtc3NxbCcpXHJcbi8vICAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QoY29uZXhpb24pXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCd1c2VyTmFtZScgLCBtc3NxbC5WYXJDaGFyICwgdXNlck5hbWUpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdwYXNzd29yZCcgLCBtc3NxbC5WYXJDaGFyICwgYmNyeXAuaGFzaFN5bmMocGFzc3dvcmQpKVxyXG4vLyAgICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZW1haWwnICwgbXNzcWwuVmFyQ2hhciAsIGVtYWlsKVxyXG4vLyAgICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlJyAsIG1zc3FsLlZhckNoYXIgLCBub21icmUpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdhcGVsbGlkbycgLCBtc3NxbC5WYXJDaGFyICwgYXBlbGxpZG8pXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFBlcmZpbCcgLCBtc3NxbC5JbnQgLCBpZFBlcmZpbClcclxuLy8gICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVXN1YXJpbycgLCBtc3NxbC5JbnQgLCBpZFVzdWFyaW8pXHJcbi8vICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX3VwZGF0ZVVzdWFyaW9zJylcclxuLy8gICAgICAgICBpZihyZXN1bHQpe1xyXG4vLyAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbi8vICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTogJ3VzdWFyaW8gaW5zZXJ0YWRvIGNvcnJlY3RhbWVudGUgIScgfSlcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICBjYXRjaChlKXtcclxuLy8gICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4vLyAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtlcnJvcjplcnIubWVzc2FnZX0pXHJcbi8vICAgICB9XHJcbi8vIH0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhc3luY1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29sb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1zc3FsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=