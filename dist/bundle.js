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
      const result = await myRequest.execute('pa_insertProducto');

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

  const {
    nombreProducto,
    descripcionProducto,
    precioActualProducto,
    idProducto,
    vecDetallesProducto
  } = req.body;
  const conexion = await abrirConexionPOOL('updateProducto');

  const {
    Request,
    VarChar,
    Real,
    Int,
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
      myRequest.input('idProducto', Int, idProducto);
      const result = await myRequest.execute('pa_updateProducto');

      if (result.rowsAffected === 0) {
        myTransaction.rollback();
        cerrarConexionPOOL();
        res.status(200).json({
          mensaje: 'ERROR 0 filas modificadas',
          opOK: false
        });
      } else {
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
              mensaje: errorCallBack.message,
              opOK: false
            });
          } else {
            myTransaction.commit();
            cerrarConexionPOOL();
            res.status(200).json({
              mensaje: 'Producto modificado exitosamente',
              opOK: true
            });
          }
        });
      }
    } catch (e) {
      myTransaction.rollback();
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Error al inesperado',
        opOK: false
      });
    }
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ09ORklHLmpzIiwid2VicGFjazovLy8uL2NvbmV4aW9uZXMvc3FsU2VydmVyLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL0xvZ3Vlby5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9hcnRpY3Vsb3MuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvY2F0ZWdvcmlhcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9jaGVja0xvZ2luLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL2NsaWVudGVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL2RpcmVjY2lvbmVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL2dldFVzZXJMb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9tYXJjYXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvcHJvZHVjdG9zLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3Byb3ZlZWRvcmVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3N1Y3Vyc2FsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvdGlwb3NDb250cmlidWxsZW50ZS5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS90aXBvc0RvY3VtZW50by5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS90aXBvc1BlcnNvbmEuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvdW5pZGFkZXNNZWRpZGEuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvdXN1YXJpb3MuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXN5bmNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb2xvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1zc3FsXCIiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInNlY3JldCIsIm1zc3FsIiwicmVxdWlyZSIsInByb2Nlc3MiLCJVUkkiLCJ1c2VyIiwicGFzc3dvcmQiLCJkYXRhYmFzZSIsInNlcnZlciIsIm9wdGlvbnMiLCJhcHBOYW1lIiwiZW5hYmxlQXJpdGhBYm9ydCIsImVuY3J5cHQiLCJjb25uZWN0aW9uVGltZU91dCIsImRyaXZlciIsInN0cmVhbSIsInBvb2wiLCJtYXgiLCJtaW4iLCJpZGxlVGltZW91dE1pbGxpcyIsIkNvbmV4aW9uU1FMIiwiYWJyaXJDb25leGlvbiIsInVuZGVmaW5lZCIsImNlcnJhckNvbmV4aW9uIiwiYWJyaXJDb25leGlvblBPT0wiLCJjZXJyYXJDb25leGlvblBPT0wiLCJjb25leGlvbmVzIiwibmFtZSIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIm5ld0NvbmV4aW9uIiwiQ29ubmVjdGlvblBvb2wiLCJjbG9zZSIsImJpbmQiLCJhcmdzIiwiY29ubmVjdCIsIlByb21pc2UiLCJhbGwiLCJ2YWx1ZXMiLCJtYXAiLCJleHByZXNzIiwiY29ycyIsIm1vcmdhbiIsInNlcnZpZG9yIiwidXNlIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsInNldCIsImVudiIsIlBPUlQiLCJsaXN0ZW4iLCJnZXQiLCJtIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ5ZWxsb3ciLCJSb3V0ZXIiLCJiY3J5cHQiLCJqd3QiLCJ0b2tlbiIsInJvdXRlciIsInBvc3QiLCJyZXEiLCJyZXMiLCJ1c3VhcmlvIiwicHciLCJib2R5IiwiUmVxdWVzdCIsIlZhckNoYXIiLCJjb25leGlvbiIsIm15UmVxdWVzdCIsImlucHV0IiwicmVzdWx0IiwiZXhlY3V0ZSIsInJvd3NBZmZlY3RlZCIsInN0YXR1cyIsIm1lbnNhamUiLCJvcE9LIiwiY29tcGFyZVN5bmMiLCJyZWNvcmRzZXQiLCJpZFVzdWFyaW8iLCJub21icmVVc3VhcmlvIiwiYXBlbGxpZG9Vc3VhcmlvIiwic2lnbiIsImV4cGlyZXNJbiIsImVycm9yIiwibWVzc2FnZSIsImxpc3QiLCJub21icmVBcnRpY3VsbyIsImRlc2NyaXBjaW9uQXJ0aWN1bG8iLCJwZXNvQXJ0aWN1bG8iLCJjb2RQcm92ZWRvckFydGljdWxvIiwiY29kSW50ZXJub0FydGljdWxvIiwiaWRVbmlkYWRNZWRpZGEiLCJpZENhdGVnb3JpYSIsImlkTWFyY2EiLCJSZWFsIiwiSW50IiwicHV0IiwiaWRBcnRpY3VsbyIsIm5vbWJyZUNhdGVnb3JpYSIsImRlc2NyaXBjaW9uQ2F0ZWdvcmlhIiwibmV4dCIsInBhdGgiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsImxvZ09LIiwic3BsaXQiLCJ2ZXJpZnkiLCJkYXRvcyIsIm90cm8iLCJub21icmVDbGllbnRlIiwiYXBlbGxpZG9DbGllbnRlIiwiaWRUaXBvRG9jdW1lbnRvIiwibnJvRG9jQ2xpZW50ZSIsImlkVGlwb0NvbnRyaWJ1bGxlbnRlIiwibnJvQ3VpdEN1aWxDbGllbnRlIiwiaWREaXJlY2Npb24iLCJpZFRpcG9QZXJzb25hIiwiaWRDbGllbnRlIiwiY2FsbGVEaXJlY2Npb24iLCJhbHR1cmFEaXJlY2Npb24iLCJjb2RpZ29Qb3N0YWxEaXJlY2Npb24iLCJiYXJyaW9EaXJlY2Npb24iLCJvdHJvc0RhdG9zRGlyZWNjaW9uIiwiQ09ORklHIiwiZCIsIm5vbWJyZU1hcmNhIiwiZWFjaFNlcmllcyIsIm5vbWJyZVByb2R1Y3RvIiwiZGVzY3JpcGNpb25Qcm9kdWN0byIsInByZWNpb0FjdHVhbFByb2R1Y3RvIiwidmVjRGV0YWxsZXNQcm9kdWN0byIsIlRyYW5zYWN0aW9uIiwibXlUcmFuc2FjdGlvbiIsImJlZ2luIiwiZXJyIiwicm9sbGJhY2siLCJpZFByb2R1Y3RvIiwicGFyc2VJbnQiLCJteVJlcXVlc3REUCIsIkRQIiwiY2FsbGJhY2siLCJwYXJhbWV0ZXJzIiwidmFsdWUiLCJjYW50aWRhZERldGFsbGVQcm9kdWN0byIsIkUiLCJSIiwiZXJyb3JDYWxsQmFjayIsImNvbW1pdCIsIm5vbWJyZVByb3ZlZWRvciIsImFwZWxsaWRvUHJvdmVlZG9yIiwibnJvRG9jUHJvdmVlZG9yIiwibnJvQ3VpdEN1aWxQcm92ZWVkb3IiLCJpZFByb3ZlZWRvciIsIm5vbWJyZVN1Y3Vyc2FsIiwiaWRTdWN1cnNhbCIsIm5vbWJyZVRpcG9Db250cmlidWxsZW50ZSIsImRlc2NyaXBjaW9uVGlwb0NvbnRyaWJ1bGxlbnRlIiwibm9tYnJlVGlwb0RvY3VtZW50byIsIm5vbWJyZVRpcG9QZXJzb25hIiwibm9tYnJlVW5pZGFkTWVkaWRhIiwiZGVzY3JpcGNpb25VbmlkYWRNZWRpZGEiLCJiY3J5cCIsImhhc2hTeW5jIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBbkYsTUFBTSxDQUFDQyxPQUFQLEdBQWlCaUUsTUFBakIsQzs7Ozs7Ozs7Ozs7QUN2S0Esa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgc2VjcmV0OidtYXN0ZXJTb2Z0MjAyMCdcclxufSIsImNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKTtcclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpeyByZXF1aXJlKCdjb2xvcnMnKSB9XHJcblxyXG52YXIgVVJJXHJcblxyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbiAgICAvLyBVUkkgPSB7XHJcbiAgICAvLyAgICAgdXNlcjogXHJcbiAgICAvLyAgICAgcGFzc3dvcmQ6IFxyXG4gICAgLy8gICAgIGRhdGFiYXNlOiBcclxuICAgIC8vICAgICBwb3J0OjE0MzMsXHJcbiAgICAvLyAgICAgc2VydmVyOidcclxuICAgIC8vICAgICBvcHRpb25zOntcclxuICAgIC8vICAgICAgICAgYXBwTmFtZTpcclxuICAgIC8vICAgICAgICAgZW5hYmxlQXJpdGhBYm9ydDp0cnVlLFxyXG4gICAgLy8gICAgICAgICBlbmNyeXB0OmZhbHNlXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgICxcclxuICAgIC8vICAgICBjb25uZWN0aW9uVGltZU91dDoxNTAwMDAsXHJcbiAgICAvLyAgICAgZHJpdmVyOid0ZWRpb3VzJyxcclxuICAgIC8vICAgICBzdHJlYW06ZmFsc2UsXHJcbiAgICAvLyAgICAgcG9vbDp7XHJcbiAgICAvLyAgICAgICAgIG1heDoyMCxcclxuICAgIC8vICAgICAgICAgbWluOjAsXHJcbiAgICAvLyAgICAgICAgIGlkbGVUaW1lb3V0TWlsbGlzOjMwMDAwLFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vVko3MzAwXHJcbiAgICAvLyB9XHJcbiAgICBVUkkgPSB7XHJcbiAgICAgICAgdXNlcjogJ2dlc3RMaW5lX1NRTExvZ2luXzEnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnbHRwNnhtdXAzdCcsXHJcbiAgICAgICAgZGF0YWJhc2U6ICdnZXN0TGluZURCJyxcclxuICAgICAgICBzZXJ2ZXI6J2dlc3RMaW5lREIubXNzcWwuc29tZWUuY29tJyxcclxuICAgICAgICBvcHRpb25zOntcclxuICAgICAgICAgICAgYXBwTmFtZTonbWFzdGVyU29mdC1BUEknLFxyXG4gICAgICAgICAgICBlbmFibGVBcml0aEFib3J0OnRydWUsXHJcbiAgICAgICAgICAgIGVuY3J5cHQ6ZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgLFxyXG4gICAgICAgIGNvbm5lY3Rpb25UaW1lT3V0OjE1MDAwMCxcclxuICAgICAgICBkcml2ZXI6J3RlZGlvdXMnLFxyXG4gICAgICAgIHN0cmVhbTpmYWxzZSxcclxuICAgICAgICBwb29sOntcclxuICAgICAgICAgICAgbWF4OjIwLFxyXG4gICAgICAgICAgICBtaW46MCxcclxuICAgICAgICAgICAgaWRsZVRpbWVvdXRNaWxsaXM6MzAwMDAsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmVsc2V7XHJcbiAgICBVUkkgPSB7XHJcbiAgICAgICAgdXNlciA6IHByb2Nlc3MuZW52LlVTRVJTUUwgLFxyXG4gICAgICAgIHBhc3N3b3JkIDogcHJvY2Vzcy5lbnYuUEFTU1dPUkRTUUwgLFxyXG4gICAgICAgIGRhdGFiYXNlIDogcHJvY2Vzcy5lbnYuREFUQUJBU0VTUUwgLFxyXG4gICAgICAgIHNlcnZlciA6IHByb2Nlc3MuZW52LlNFUlZFUlNRTCAsXHJcbiAgICAgICAgb3B0aW9ucyA6IHtcclxuICAgICAgICAgICAgZW5hYmxlQXJpdGhBYm9ydCA6IHRydWUgLFxyXG4gICAgICAgICAgICBlbmNyeXB0IDogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59XHJcblxyXG52YXIgQ29uZXhpb25TUUwgPSB7IGFicmlyQ29uZXhpb246dW5kZWZpbmVkLCBjZXJyYXJDb25leGlvbjp1bmRlZmluZWQsIGFicmlyQ29uZXhpb25QT09MOnVuZGVmaW5lZCwgY2VycmFyQ29uZXhpb25QT09MOnVuZGVmaW5lZCB9XHJcbi8vIHZhciBjb25leGlvblxyXG4vLyBDb25leGlvblNRTC5hYnJpckNvbmV4aW9uID0gYXN5bmMgZnVuY3Rpb24gKCl7XHJcbi8vICAgICBhd2FpdCBtc3NxbC5jb25uZWN0KFVSSSlcclxuLy8gICAgIC50aGVuKHBvb2w9PntcclxuLy8gICAgICAgICBpZihwb29sLl9jb25uZWN0ZWQpe1xyXG4vLyAgICAgICAgICAgICBpZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ29uZWNpb24gU1FMIFNFUlZFUicuYmx1ZSwnIEFCSUVSVEEnLmdyZWVuKVxyXG4vLyAgICAgICAgICAgICAgICAgY29uZXhpb24gPSBwb29sXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgZWxzZXtcclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGRlIENvbmV4aW9uJyxwb29sLl9jb25uZWN0ZWQpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSlcclxuLy8gfVxyXG4vLyBDb25leGlvblNRTC5jZXJyYXJDb25leGlvbiA9IGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4vLyAgICAgYXdhaXQgY29uZXhpb24uY2xvc2UoKVxyXG4vLyAgICAgaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdDb25lY2lvbiBTUUwgU0VSVkVSJy5ibHVlLCcgQ0VSUkFEQScuZ3JlZW4pXHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbmNvbnN0IGNvbmV4aW9uZXMgPSB7fVxyXG5cclxuQ29uZXhpb25TUUwuYWJyaXJDb25leGlvblBPT0wgPSBhc3luYyBuYW1lID0+e1xyXG4gICAgaWYoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjb25leGlvbmVzLG5hbWUpKXtcclxuICAgICAgICBjb25zdCBuZXdDb25leGlvbiA9IG5ldyBtc3NxbC5Db25uZWN0aW9uUG9vbChVUkkpXHJcbiAgICAgICAgY29uc3QgY2xvc2UgPSBuZXdDb25leGlvbi5jbG9zZS5iaW5kKG5ld0NvbmV4aW9uKVxyXG4gICAgICAgIG5ld0NvbmV4aW9uLmNsb3NlID0gKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICAgICAgZGVsZXRlIGNvbmV4aW9uZXNbbmFtZV1cclxuICAgICAgICAgICAgcmV0dXJuIGNsb3NlKC4uLmFyZ3MpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IG5ld0NvbmV4aW9uLmNvbm5lY3QoKVxyXG4gICAgICAgIGNvbmV4aW9uZXNbbmFtZV0gPSBuZXdDb25leGlvblxyXG4gICAgICAgIHJldHVybiBjb25leGlvbmVzW25hbWVdXHJcbiAgICB9XHJcbn1cclxuXHJcbkNvbmV4aW9uU1FMLmNlcnJhckNvbmV4aW9uUE9PTCA9ICgpID0+e1xyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC52YWx1ZXMoY29uZXhpb25lcykubWFwKChwb29sKT0+e1xyXG4gICAgICAgIHJldHVybiBwb29sLmNsb3NlKClcclxuICAgIH0pKVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gQ29uZXhpb25TUUwiLCJjb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IGNvcnMgPSByZXF1aXJlKCdjb3JzJylcclxudmFyIG1vcmdhblxyXG5cclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xyXG4gICAgcmVxdWlyZSgnY29sb3JzJylcclxuICAgIG1vcmdhbiA9IHJlcXVpcmUoJ21vcmdhbicpXHJcbn1cclxuLy8gY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuTk9ERV9FTlYpXHJcblxyXG5jb25zdCBzZXJ2aWRvciA9IGV4cHJlc3MoKVxyXG5zZXJ2aWRvci51c2UoY29ycygpKVxyXG5cclxuLy8gbWlkZGVsd2FyZVxyXG5cclxuc2Vydmlkb3IudXNlKGV4cHJlc3MuanNvbigpKVxyXG5zZXJ2aWRvci51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHtleHRlbmRlZDogdHJ1ZX0pKVxyXG5zZXJ2aWRvci51c2UocmVxdWlyZSgnLi9ydXRhc0FwaS9jaGVja0xvZ2luJykpXHJcblxyXG5cclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgKSB7ICBzZXJ2aWRvci51c2UobW9yZ2FuKCdkZXYnKSkgfVxyXG5cclxuc2Vydmlkb3IudXNlKCcvYXBpL2xvZ3VlbycscmVxdWlyZSgnLi9ydXRhc0FwaS9Mb2d1ZW8nKSlcclxuLy8gc2Vydmlkb3IudXNlKCcvYXBpL2F1dGhSb3V0ZXJSZWFjdC9hZG1pbicscmVxdWlyZSgnLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhBZG1pblJvdXRlclJlYWN0JykpXHJcbi8vIHNlcnZpZG9yLnVzZSgnL2FwaS9hdXRoUm91dGVyUmVhY3Qvbml2ZWwxJyxyZXF1aXJlKCcuL3J1dGFzQXBpL2F1dGhBY2Nlc29zUmVhY3QvYXV0aE5pdmVsMVJvdXRlclJlYWN0JykpXHJcbi8vIHNlcnZpZG9yLnVzZSgnL2FwaS9hdXRoUm91dGVyUmVhY3Qvbml2ZWwyJyxyZXF1aXJlKCcuL3J1dGFzQXBpL2F1dGhBY2Nlc29zUmVhY3QvYXV0aE5pdmVsMlJvdXRlclJlYWN0JykpXHJcbi8vIHNlcnZpZG9yLnVzZSgnL2FwaS9hdXRoUm91dGVyUmVhY3Qvbml2ZWwzJyxyZXF1aXJlKCcuL3J1dGFzQXBpL2F1dGhBY2Nlc29zUmVhY3QvYXV0aE5pdmVsM1JvdXRlclJlYWN0JykpXHJcbi8vIHNlcnZpZG9yLnVzZSgnL2FwaS9hdXRoUm91dGVyUmVhY3Qvbml2ZWw0JyxyZXF1aXJlKCcuL3J1dGFzQXBpL2F1dGhBY2Nlc29zUmVhY3QvYXV0aE5pdmVsNFJvdXRlclJlYWN0JykpXHJcbi8vIHNlcnZpZG9yLnVzZSgnL2FwaS9hdXRoUm91dGVyUmVhY3Qvbml2ZWw1JyxyZXF1aXJlKCcuL3J1dGFzQXBpL2F1dGhBY2Nlc29zUmVhY3QvYXV0aE5pdmVsNVJvdXRlclJlYWN0JykpXHJcbi8vIHNlcnZpZG9yLnVzZSgnL2FwaS91c3VhcmlvcycscmVxdWlyZSgnLi9ydXRhc0FwaS9hdXRoQWNjZXNvcy9hdXRoQWRtaW5Sb3V0ZXInKSxyZXF1aXJlKCcuL3J1dGFzQXBpL3VzdWFyaW9zJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS91c3VhcmlvcycscmVxdWlyZSgnLi9ydXRhc0FwaS91c3VhcmlvcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvY2F0ZWdvcmlhcycgLCByZXF1aXJlKCcuL3J1dGFzQXBpL2NhdGVnb3JpYXMnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3VuaWRhZGVzTWVkaWRhJyAsIHJlcXVpcmUoJy4vcnV0YXNBcGkvdW5pZGFkZXNNZWRpZGEnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL2RpcmVjY2lvbmVzJyAsIHJlcXVpcmUoJy4vcnV0YXNBcGkvZGlyZWNjaW9uZXMnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL21hcmNhcycgLCByZXF1aXJlKCcuL3J1dGFzQXBpL21hcmNhcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvcHJvZHVjdG9zJyAsIHJlcXVpcmUoJy4vcnV0YXNBcGkvcHJvZHVjdG9zJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9hcnRpY3Vsb3MnICwgcmVxdWlyZSgnLi9ydXRhc0FwaS9hcnRpY3Vsb3MnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3RpcG9zRG9jdW1lbnRvJyAsIHJlcXVpcmUoJy4vcnV0YXNBcGkvdGlwb3NEb2N1bWVudG8nKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3RpcG9zUGVyc29uYScgLCByZXF1aXJlKCcuL3J1dGFzQXBpL3RpcG9zUGVyc29uYScpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvdGlwb3NDb250cmlidWxsZW50ZScgLCByZXF1aXJlKCcuL3J1dGFzQXBpL3RpcG9zQ29udHJpYnVsbGVudGUnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL2NsaWVudGVzJyAsIHJlcXVpcmUoJy4vcnV0YXNBcGkvY2xpZW50ZXMnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3N1Y3Vyc2FsZXMnICwgcmVxdWlyZSgnLi9ydXRhc0FwaS9zdWN1cnNhbGVzJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9wcm92ZWVkb3JlcycgLCByZXF1aXJlKCcuL3J1dGFzQXBpL3Byb3ZlZWRvcmVzJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9nZXR1c2VybG9naW4nLHJlcXVpcmUoJy4vcnV0YXNBcGkvZ2V0VXNlckxvZ2luJykpXHJcbi8vXHJcblxyXG4vL1NldHRpbmdzXHJcbnNlcnZpZG9yLnNldCgncG9ydCcscHJvY2Vzcy5lbnYuUE9SVCB8fCA1MDAwKVxyXG5cclxuc2Vydmlkb3IubGlzdGVuKHNlcnZpZG9yLmdldCgncG9ydCcpLChtLGUpPT57XHJcbiAgICBpZihlKXtjb25zb2xlLmxvZyhlKX1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlcnZpZG9yIGNvcnJpZW5kbyBlbiBlbCBQVUVSVE8nLnllbGxvdyxzZXJ2aWRvci5nZXQoJ3BvcnQnKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlcnZpZG9yIGNvcnJpZW5kbyBlbiBlbCBQVUVSVE8nLHNlcnZpZG9yLmdldCgncG9ydCcpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBiY3J5cHQgPXJlcXVpcmUoJ2JjcnlwdCcpXHJcbi8vIGNvbnN0IFVzdWFyaW8gPSByZXF1aXJlKCcuLi9lc3F1ZW1hc01vbmdvL2VzcXVlbWFVc3VhcmlvcycpXHJcbmNvbnN0IHtzZWNyZXR9ID0gcmVxdWlyZSgnLi4vQ09ORklHJylcclxuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJylcclxuY29uc3QgeyB0b2tlbiB9ID0gcmVxdWlyZSgnbW9yZ2FuJylcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcblxyXG5cclxucm91dGVyLnBvc3QgKCAnLycgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBjb25zdCB7IHVzdWFyaW8gLCBwdyB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgfSA9IHJlcXVpcmUgKCdtc3NxbCcpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCdsb2d1ZW9Vc3VhcmlvJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICgndXN1YXJpbycgLCBWYXJDaGFyICwgdXN1YXJpbyApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9sb2dpbicpXHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICBpZihyZXN1bHQucm93c0FmZmVjdGVkWzBdID09PSAwICkge1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24gKCB7IG1lbnNhamUgOiAnVXN1YXJpbyBpbmV4aXN0ZW50ZSAnICxvcE9LOmZhbHNlIH0gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCAhYmNyeXB0LmNvbXBhcmVTeW5jKCBwdyAsIHJlc3VsdC5yZWNvcmRzZXRbMF0ucHcgKSApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbiggeyBtZW5zYWplIDogJ1Bhc3N3b3JkIGluY29ycmVjdGEgJyxvcE9LOmZhbHNlIH0gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRVc3VhcmlvIDogcmVzdWx0LnJlY29yZHNldFswXS5pZFVzdWFyaW8gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub21icmVVc3VhcmlvIDogcmVzdWx0LnJlY29yZHNldFswXS5ub21icmVVc3VhcmlvICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBlbGxpZG9Vc3VhcmlvIDogcmVzdWx0LnJlY29yZHNldFswXS5hcGVsbGlkb1VzdWFyaW8gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c3VhcmlvIDogcmVzdWx0LnJlY29yZHNldFswXS51c3VhcmlvXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGp3dC5zaWduKCB1c2VyICwgcmVxdWlyZSgnLi4vQ09ORklHJykuc2VjcmV0ICwgeyBleHBpcmVzSW4gOiAxNDQwMCB9ICAsICAgKCBlcnJvciAsIHRva2VuICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVycm9yICkgeyByZXMuc3RhdHVzKDIwMCkuanNvbiAoIHsgbWVuc2FqZSA6ICdFcnJvciBhbCBnZW5lcmFyIGVsIHRva2VuJyxvcE9LOmZhbHNlIH0gKSAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHt0b2tlbixvcE9LOnRydWV9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24gKHJlc3VsdClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZSA6IGUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0gKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG4vL1RPRE86IExJU1RBIERFIEFSVElDVUxPU1xyXG5yb3V0ZXIuZ2V0KCcvbGlzdCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wsY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgICAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnTGlzdGFBcnRpY3Vsb3MnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSgncGFfbGlzdGFBcnRpY3Vsb3MnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bGlzdDpyZXN1bHQucmVjb3Jkc2V0LG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplIDogJ0Vycm9yIGVuIGVsIHJlc3VsdGFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplIDogZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBJTlNFUlRBIEFSVElDVUxPXHJcblxyXG5yb3V0ZXIucG9zdCAoJy9pbnNlcnQnICwgYXN5bmMgKHJlcSAsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IG5vbWJyZUFydGljdWxvLGRlc2NyaXBjaW9uQXJ0aWN1bG8scGVzb0FydGljdWxvLGNvZFByb3ZlZG9yQXJ0aWN1bG8sXHJcbiAgICAgICAgICAgIGNvZEludGVybm9BcnRpY3VsbyxpZFVuaWRhZE1lZGlkYSxpZENhdGVnb3JpYSxpZE1hcmNhXHJcbiAgICAgICAgfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnaW5zZXJ0QXJ0aWN1bG8nKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgLCBSZWFsICwgSW50IH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlQXJ0aWN1bG8nICwgVmFyQ2hhciAsIG5vbWJyZUFydGljdWxvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2Rlc2NyaXBjaW9uQXJ0aWN1bG8nICwgVmFyQ2hhciAsIGRlc2NyaXBjaW9uQXJ0aWN1bG8gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgncGVzb0FydGljdWxvJyAsIFJlYWwgLCBwZXNvQXJ0aWN1bG8gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnY29kUHJvdmVkb3JBcnRpY3VsbycgLCBJbnQgLCBjb2RQcm92ZWRvckFydGljdWxvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2NvZEludGVybm9BcnRpY3VsbycgLCBJbnQgLCBjb2RJbnRlcm5vQXJ0aWN1bG8gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRVbmlkYWRNZWRpZGEnICwgSW50ICwgaWRVbmlkYWRNZWRpZGEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRDYXRlZ29yaWEnICwgSW50ICwgaWRDYXRlZ29yaWEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRNYXJjYScgLCBJbnQgLCBpZE1hcmNhIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2luc2VydEFydGljdWxvJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidBcnRpY3VsbyBndWFyZGFkbyBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogVVBEQVRFIEFSVElDVUxPXHJcblxyXG5yb3V0ZXIucHV0KCcvdXBkYXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGlkQXJ0aWN1bG8sbm9tYnJlQXJ0aWN1bG8sZGVzY3JpcGNpb25BcnRpY3VsbyxwZXNvQXJ0aWN1bG8sY29kUHJvdmVkb3JBcnRpY3VsbyxcclxuICAgICAgICAgICAgY29kSW50ZXJub0FydGljdWxvLGlkVW5pZGFkTWVkaWRhLGlkQ2F0ZWdvcmlhLGlkTWFyY2FcclxuICAgICAgICB9ID0gcmVxLmJvZHkgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ3VwZGF0ZUFydGljdWxvJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZEFydGljdWxvJyAsIG1zc3FsLkludCAsIGlkQXJ0aWN1bG8gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlQXJ0aWN1bG8nICwgbXNzcWwuVmFyQ2hhciAsIG5vbWJyZUFydGljdWxvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2Rlc2NyaXBjaW9uQXJ0aWN1bG8nICwgbXNzcWwuVmFyQ2hhciAsIGRlc2NyaXBjaW9uQXJ0aWN1bG8gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgncGVzb0FydGljdWxvJyAsIG1zc3FsLlJlYWwgLCBwZXNvQXJ0aWN1bG8gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnY29kUHJvdmVkb3JBcnRpY3VsbycgLCBtc3NxbC5JbnQgLCBjb2RQcm92ZWRvckFydGljdWxvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2NvZEludGVybm9BcnRpY3VsbycgLCBtc3NxbC5JbnQgLCBjb2RJbnRlcm5vQXJ0aWN1bG8gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRVbmlkYWRNZWRpZGEnICwgbXNzcWwuSW50ICwgaWRVbmlkYWRNZWRpZGEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRDYXRlZ29yaWEnICwgbXNzcWwuSW50ICwgaWRDYXRlZ29yaWEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRNYXJjYScgLCBtc3NxbC5JbnQgLCBpZE1hcmNhIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX3VwZGF0ZUFydGljdWxvJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidBcmN0aWN1bG8gbW9kaWZpY2FkbyBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJywgb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTplLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IERFTEVURSBBUlRJQ1VMT1xyXG5cclxucm91dGVyLnBvc3QoJy9kZWxldGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtpZEFydGljdWxvfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdkZWxldGVBcnRpY3VsbycpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRBcnRpY3VsbycgLCBtc3NxbC5JbnQgLCBpZEFydGljdWxvIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2RlbGV0ZUFydGljdWxvJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidBcnRpY3VsbyBlbGltaW5hZG8gZXhpdG9zYW1lbnRlJyxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTplLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbi8vVE9ETzogTElTVEEgREUgQ0FURUdPUklBU1xyXG5yb3V0ZXIuZ2V0KCcvbGlzdCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wsY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgICAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnTGlzdGFDYXRlZ29yaWFzJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX2xpc3RhQ2F0ZWdvcmlhcycpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtsaXN0OnJlc3VsdC5yZWNvcmRzZXQsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamUgOiAnRXJyb3IgZW4gZWwgcmVzdWx0YWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamUgOiBlLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IElOU0VSVEEgQ0FURUdPUkFcclxuXHJcbnJvdXRlci5wb3N0ICgnL2luc2VydCcgLCBhc3luYyAocmVxICwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgbm9tYnJlQ2F0ZWdvcmlhICwgZGVzY3JpcGNpb25DYXRlZ29yaWEgfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnaW5zZXJ0Q2F0ZWdvcmlhJylcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyIH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlQ2F0ZWdvcmlhJyAsIFZhckNoYXIgLCBub21icmVDYXRlZ29yaWEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZGVzY3JpcGNpb25DYXRlZ29yaWEnICwgVmFyQ2hhciAsIGRlc2NyaXBjaW9uQ2F0ZWdvcmlhIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2luc2VydENhdGVnb3JpYScpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonQ2F0ZWdvcmlhIGd1YXJkYWRhIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBVUERBVEUgQ0FURUdPUklBXHJcblxyXG5yb3V0ZXIucHV0KCcvdXBkYXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7bm9tYnJlQ2F0ZWdvcmlhLGRlc2NyaXBjaW9uQ2F0ZWdvcmlhLGlkQ2F0ZWdvcmlhfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCd1cGRhdGVDYXRlZ29yaWEnKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZUNhdGVnb3JpYScgLCBtc3NxbC5WYXJDaGFyICwgbm9tYnJlQ2F0ZWdvcmlhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2Rlc2NyaXBjaW9uQ2F0ZWdvcmlhJyAsIG1zc3FsLlZhckNoYXIgLCBkZXNjcmlwY2lvbkNhdGVnb3JpYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZENhdGVnb3JpYScgLCBtc3NxbC5JbnQgLCBpZENhdGVnb3JpYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV91cGRhdGVDYXRlZ29yaWEnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J0NhdGVnb3JpYSBtb2RpZmljYWRhIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBERUxFVEUgQ0FURUdPUklBXHJcblxyXG5yb3V0ZXIucG9zdCgnL2RlbGV0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge2lkQ2F0ZWdvcmlhfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdkZWxldGVDYXRlZ29yaWEnKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkQ2F0ZWdvcmlhJyAsIG1zc3FsLkludCAsIGlkQ2F0ZWdvcmlhIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2RlbGV0ZUNhdGVnb3JpYScpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonQ2F0ZWdvcmlhIGVsaW1pbmFkYSBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJylcclxuY29uc3Qge3NlY3JldH0gPSByZXF1aXJlKCcuLi9DT05GSUcnKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocmVxICwgcmVzICxuZXh0KSB7XHJcbiAgICBpZiAocmVxLnBhdGggIT09ICcvYXBpL2xvZ3VlbycpIHtcclxuICAgICAgICBpZiggIXJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24pIHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamUgOiAnTm8gZW52aW8gZWwgdG9rZW4gZW4gZWwgaGVhZGVycycsIGxvZ09LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uLnNwbGl0KCcgJylbMV1cclxuICAgICAgICAgICAgand0LnZlcmlmeSh0b2tlbiAsc2VjcmV0ICwgKCBlICwgZGF0b3MgKT0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggZSApIHsgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamUgOiBlLm1lc3NhZ2UgLCBvdHJvIDogJ2Vycm9yICBlbiBsYSBjb21tcHJvYmFjaW9uIHRva2VuJyxsb2dPSzpmYWxzZX0pIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgeyByZXR1cm4gbmV4dCgpIH1cclxuICAgICAgICAgICAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7IHJldHVybiBuZXh0KCkgfVxyXG59IiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxuLy9UT0RPOiBMSVNUQSBERSBDTElFTlRFU1xyXG5yb3V0ZXIuZ2V0KCcvbGlzdCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wsY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgICAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnTGlzdGFDbGllbnRlcycpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlKCdwYV9saXN0YUNsaWVudGVzJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe2xpc3Q6cmVzdWx0LnJlY29yZHNldCxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZSA6ICdFcnJvciBlbiBlbCByZXN1bHRhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZSA6IGUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogSU5TRVJUQSBDTElFTlRFXHJcblxyXG5yb3V0ZXIucG9zdCAoJy9pbnNlcnQnICwgYXN5bmMgKHJlcSAsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IG5vbWJyZUNsaWVudGUsYXBlbGxpZG9DbGllbnRlLGlkVGlwb0RvY3VtZW50byxucm9Eb2NDbGllbnRlLFxyXG4gICAgICAgICAgICBpZFRpcG9Db250cmlidWxsZW50ZSxucm9DdWl0Q3VpbENsaWVudGUsaWREaXJlY2Npb24saWRUaXBvUGVyc29uYVxyXG4gICAgICAgIH0gPSByZXEuYm9keVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ2luc2VydENsaWVudGUnKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgLCBJbnQgfSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmVDbGllbnRlJyAsIFZhckNoYXIgLCBub21icmVDbGllbnRlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2FwZWxsaWRvQ2xpZW50ZScgLCBWYXJDaGFyICwgYXBlbGxpZG9DbGllbnRlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVGlwb0RvY3VtZW50bycgLCBJbnQgLCBpZFRpcG9Eb2N1bWVudG8gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbnJvRG9jQ2xpZW50ZScgLCBWYXJDaGFyICwgbnJvRG9jQ2xpZW50ZSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFRpcG9Db250cmlidWxsZW50ZScgLCBJbnQgLCBpZFRpcG9Db250cmlidWxsZW50ZSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCducm9DdWl0Q3VpbENsaWVudGUnICwgSW50ICwgbnJvQ3VpdEN1aWxDbGllbnRlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkRGlyZWNjaW9uJyAsIEludCAsIGlkRGlyZWNjaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVGlwb1BlcnNvbmEnICwgSW50ICwgaWRUaXBvUGVyc29uYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9pbnNlcnRDbGllbnRlJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidDbGllbnRlIGd1YXJkYWRvIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBVUERBVEUgQ0xJRU5URVxyXG5cclxucm91dGVyLnB1dCgnL3VwZGF0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBpZENsaWVudGUsbm9tYnJlQ2xpZW50ZSxhcGVsbGlkb0NsaWVudGUsaWRUaXBvRG9jdW1lbnRvLG5yb0RvY0NsaWVudGUsXHJcbiAgICAgICAgICAgIGlkVGlwb0NvbnRyaWJ1bGxlbnRlLG5yb0N1aXRDdWlsQ2xpZW50ZSxpZERpcmVjY2lvbixpZFRpcG9QZXJzb25hXHJcbiAgICAgICAgfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCd1cGRhdGVDbGllbnRlJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZENsaWVudGUnICwgbXNzcWwuSW50ICwgaWRDbGllbnRlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZUNsaWVudGUnICwgbXNzcWwuVmFyQ2hhciAsIG5vbWJyZUNsaWVudGUgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnYXBlbGxpZG9DbGllbnRlJyAsIG1zc3FsLlZhckNoYXIgLCBhcGVsbGlkb0NsaWVudGUgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRUaXBvRG9jdW1lbnRvJyAsIG1zc3FsLkludCAsIGlkVGlwb0RvY3VtZW50byApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCducm9Eb2NDbGllbnRlJyAsIG1zc3FsLlZhckNoYXIgLCBucm9Eb2NDbGllbnRlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVGlwb0NvbnRyaWJ1bGxlbnRlJyAsIEludCAsIGlkVGlwb0NvbnRyaWJ1bGxlbnRlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25yb0N1aXRDdWlsQ2xpZW50ZScgLCBtc3NxbC5JbnQgLCBucm9DdWl0Q3VpbENsaWVudGUgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWREaXJlY2Npb24nICwgbXNzcWwuSW50ICwgaWREaXJlY2Npb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRUaXBvUGVyc29uYScgLCBtc3NxbC5JbnQgLCBpZFRpcG9QZXJzb25hIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX3VwZGF0ZUNsaWVudGUnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J0NsaWVudGUgbW9kaWZpY2FkbyBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogREVMRVRFIENMSUVOVEVcclxuXHJcbnJvdXRlci5wb3N0KCcvZGVsZXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7aWRDbGllbnRlfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdkZWxldGVDbGllbnRlJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZENsaWVudGUnICwgbXNzcWwuSW50ICwgaWRDbGllbnRlIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2RlbGV0ZUNsaWVudGUnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J0NsaWVudGUgZWxpbWluYWRvIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG4vL1RPRE86IExJU1RBIERFIERJUkVDQ0lPTkVTXHJcbnJvdXRlci5nZXQoJy9saXN0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHthYnJpckNvbmV4aW9uUE9PTCxjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdMaXN0YURpcmVjY2lvbmVzJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX2xpc3RhRGlyZWNjaW9uZXMnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bGlzdDpyZXN1bHQucmVjb3Jkc2V0LG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplIDogJ0Vycm9yIGVuIGVsIHJlc3VsdGFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplIDogZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBJTlNFUlRBIERJUkVDQ0lPTlxyXG5cclxucm91dGVyLnBvc3QgKCcvaW5zZXJ0JyAsIGFzeW5jIChyZXEgLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3R7IFxyXG4gICAgICAgICAgICAgICAgY2FsbGVEaXJlY2Npb24gLCBcclxuICAgICAgICAgICAgICAgIGFsdHVyYURpcmVjY2lvbiAsIFxyXG4gICAgICAgICAgICAgICAgY29kaWdvUG9zdGFsRGlyZWNjaW9uICwgXHJcbiAgICAgICAgICAgICAgICBiYXJyaW9EaXJlY2Npb24gLCBcclxuICAgICAgICAgICAgICAgIG90cm9zRGF0b3NEaXJlY2Npb24gXHJcbiAgICAgICAgICAgICB9ID0gcmVxLmJvZHlcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdpbnNlcnREaXJlY2Npb24nKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgLCBJbnQgfSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdjYWxsZURpcmVjY2lvbicgLCBWYXJDaGFyICwgY2FsbGVEaXJlY2Npb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnYWx0dXJhRGlyZWNjaW9uJyAsIEludCAsIGFsdHVyYURpcmVjY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdjb2RpZ29Qb3N0YWxEaXJlY2Npb24nICwgSW50ICwgY29kaWdvUG9zdGFsRGlyZWNjaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2JhcnJpb0RpcmVjY2lvbicgLCBWYXJDaGFyICwgYmFycmlvRGlyZWNjaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ290cm9zRGF0b3NEaXJlY2Npb24nICwgVmFyQ2hhciAsIG90cm9zRGF0b3NEaXJlY2Npb24gKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfaW5zZXJ0RGlyZWNjaW9uJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidEaXJlY2Npb24gZ3VhcmRhZGEgZXhpdG9zYW1lbnRlJyxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IFVQREFURSBESVJFQ0NJT05cclxuXHJcbnJvdXRlci5wdXQoJy91cGRhdGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0eyBcclxuICAgICAgICAgICAgY2FsbGVEaXJlY2Npb24gLCBcclxuICAgICAgICAgICAgYWx0dXJhRGlyZWNjaW9uICwgXHJcbiAgICAgICAgICAgIGNvZGlnb1Bvc3RhbERpcmVjY2lvbiAsIFxyXG4gICAgICAgICAgICBiYXJyaW9EaXJlY2Npb24gLCBcclxuICAgICAgICAgICAgb3Ryb3NEYXRvc0RpcmVjY2lvbiAsXHJcbiAgICAgICAgICAgIGlkRGlyZWNjaW9uXHJcbiAgICAgICAgIH0gPSByZXEuYm9keSAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCd1cGRhdGVEaXJlY2Npb24nKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2NhbGxlRGlyZWNjaW9uJyAsIG1zc3FsLlZhckNoYXIgLCBjYWxsZURpcmVjY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdhbHR1cmFEaXJlY2Npb24nICwgbXNzcWwuSW50ICwgYWx0dXJhRGlyZWNjaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2NvZGlnb1Bvc3RhbERpcmVjY2lvbicgLCBtc3NxbC5JbnQgLCBjb2RpZ29Qb3N0YWxEaXJlY2Npb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnYmFycmlvRGlyZWNjaW9uJyAsIG1zc3FsLlZhckNoYXIgLCBiYXJyaW9EaXJlY2Npb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnb3Ryb3NEYXRvc0RpcmVjY2lvbicgLCBtc3NxbC5WYXJDaGFyICwgb3Ryb3NEYXRvc0RpcmVjY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZERpcmVjY2lvbicgLCBtc3NxbC5JbnQgLCBpZERpcmVjY2lvbiApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV91cGRhdGVEaXJlY2Npb24nKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J0RpcmVjY2lvbiBtb2RpZmljYWRhIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBERUxFVEUgRElSRUNJT05cclxuXHJcbnJvdXRlci5wb3N0KCcvZGVsZXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7aWREaXJlY2Npb259ID0gcmVxLmJvZHkgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ2RlbGV0ZURpcmVjY2lvbicpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWREaXJlY2Npb24nICwgbXNzcWwuSW50ICwgaWREaXJlY2Npb24gKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfZGVsZXRlRGlyZWNjaW9uJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidEaXJlY2Npb24gZWxpbWluYWRhIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCBSb3V0ZXIgPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJylcclxuY29uc3QgQ09ORklHID0gcmVxdWlyZSgnLi4vQ09ORklHJylcclxuXHJcbmNvbnN0IHJvdXRlcj1Sb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24uc3BsaXQoJyAnKVsxXVxyXG4gICAgand0LnZlcmlmeSh0b2tlbixDT05GSUcuc2VjcmV0LChlLGQpPT57XHJcbiAgICAgICAgaWYoZSl7IHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmUubmFtZSxsb2dPSzpmYWxzZX0pfVxyXG4gICAgICAgIGVsc2V7IHJlcy5zdGF0dXMoMjAwKS5qc29uKHt1c3VhcmlvOmQsbG9nT0s6dHJ1ZX0pIH1cclxuICAgIH0pICAgIFxyXG59KVxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbi8vVE9ETzogTElTVEEgREUgTUFSQ0FTXHJcbnJvdXRlci5nZXQoJy9saXN0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHthYnJpckNvbmV4aW9uUE9PTCxjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdMaXN0YU1hcmNhcycpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlKCdwYV9saXN0YU1hcmNhcycpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtsaXN0OnJlc3VsdC5yZWNvcmRzZXQsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamUgOiAnRXJyb3IgZW4gZWwgcmVzdWx0YWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamUgOiBlLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IElOU0VSVEEgTUFSQ0FcclxuXHJcbnJvdXRlci5wb3N0ICgnL2luc2VydCcgLCBhc3luYyAocmVxICwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtub21icmVNYXJjYX0gPSByZXEuYm9keVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ2luc2VydE1hcmNhJylcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyIH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlTWFyY2EnICwgVmFyQ2hhciAsIG5vbWJyZU1hcmNhIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2luc2VydE1hcmNhJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidNYXJjYSBndWFyZGFkYSBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogVVBEQVRFIE1BUkNBXHJcblxyXG5yb3V0ZXIucHV0KCcvdXBkYXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7bm9tYnJlTWFyY2EsaWRNYXJjYX0gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgndXBkYXRlTWFyY2EnKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZU1hcmNhJyAsIG1zc3FsLlZhckNoYXIgLCBub21icmVNYXJjYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZE1hcmNhJyAsIG1zc3FsLkludCAsIGlkTWFyY2EgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfdXBkYXRlTWFyY2EnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J01hcmNhIG1vZGlmaWNhZGEgZXhpdG9zYW1lbnRlJyxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTplLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IERFTEVURSBNQVJDQVxyXG5cclxucm91dGVyLnBvc3QoJy9kZWxldGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtpZE1hcmNhfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdkZWxldGVNYXJjYScpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRNYXJjYScgLCBtc3NxbC5JbnQgLCBpZE1hcmNhIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2RlbGV0ZU1hcmNhJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidNYXJjYSBlbGltaW5hZGEgZXhpdG9zYW1lbnRlJyxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTplLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3QgeyBlYWNoU2VyaWVzIH0gPSByZXF1aXJlKCdhc3luYycpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG4vL1RPRE86IExJU1RBIERFIFBST0RVQ1RPU1xyXG5yb3V0ZXIuZ2V0KCcvbGlzdCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wsY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgICAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnTGlzdGFQcm9kdWN0b3MnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSgncGFfbGlzdGFQcm9kdWN0b3MnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bGlzdDpyZXN1bHQucmVjb3Jkc2V0LG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplIDogJ0Vycm9yIGVuIGVsIHJlc3VsdGFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplIDogZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBJTlNFUlRBIFBST0RVQ1RPXHJcblxyXG5yb3V0ZXIucG9zdCAoJy9pbnNlcnQnICwgYXN5bmMgKHJlcSAsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgY29uc3Qge25vbWJyZVByb2R1Y3RvLGRlc2NyaXBjaW9uUHJvZHVjdG8scHJlY2lvQWN0dWFsUHJvZHVjdG8sdmVjRGV0YWxsZXNQcm9kdWN0b30gPSByZXEuYm9keVxyXG4gICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnaW5zZXJ0UHJvZHVjdG8nKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCAsIFJlYWwgLFRyYW5zYWN0aW9uIH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICBjb25zdCBteVRyYW5zYWN0aW9uID0gbmV3IFRyYW5zYWN0aW9uIChjb25leGlvbilcclxuICAgIG15VHJhbnNhY3Rpb24uYmVnaW4oIGFzeW5jIChlcnIpID0+IHtcclxuICAgICAgICBpZihlcnIpIHtcclxuICAgICAgICAgICAgbXlUcmFuc2FjdGlvbi5yb2xsYmFjaygpXHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAobXlUcmFuc2FjdGlvbilcclxuICAgICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmVQcm9kdWN0bycgLCBWYXJDaGFyICwgbm9tYnJlUHJvZHVjdG8gKVxyXG4gICAgICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2Rlc2NyaXBjaW9uUHJvZHVjdG8nICwgVmFyQ2hhciAsIGRlc2NyaXBjaW9uUHJvZHVjdG8gKVxyXG4gICAgICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ3ByZWNpb0FjdHVhbFByb2R1Y3RvJyAsIFJlYWwgLCBwcmVjaW9BY3R1YWxQcm9kdWN0byApXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfaW5zZXJ0UHJvZHVjdG8nKVxyXG4gICAgICAgICAgICBpZihyZXN1bHQucm93c0FmZmVjdGVkWzBdID09PSAwIHx8ICFyZXN1bHQucmVjb3Jkc2V0WzBdLmlkUHJvZHVjdG8pe1xyXG4gICAgICAgICAgICAgICAgbXlUcmFuc2FjdGlvbi5yb2xsYmFjaygpXHJcbiAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J1Byb2R1Y3RvIG5vIGluc2VydGFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZFByb2R1Y3RvID0gcGFyc2VJbnQocmVzdWx0LnJlY29yZHNldFswXS5pZFByb2R1Y3RvKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbXlSZXF1ZXN0RFAgPSBuZXcgUmVxdWVzdCAobXlUcmFuc2FjdGlvbilcclxuICAgICAgICAgICAgICAgIG15UmVxdWVzdERQLmlucHV0KCdpZFByb2R1Y3RvJyAsIEludCAsIGlkUHJvZHVjdG8gKVxyXG4gICAgICAgICAgICAgICAgbXlSZXF1ZXN0RFAuaW5wdXQoJ2lkQXJ0aWN1bG8nICwgSW50ICwgMCApXHJcbiAgICAgICAgICAgICAgICBteVJlcXVlc3REUC5pbnB1dCgnY2FudGlkYWREZXRhbGxlUHJvZHVjdG8nICwgUmVhbCAsIDAgKVxyXG4gICAgICAgICAgICAgICAgZWFjaFNlcmllcyh2ZWNEZXRhbGxlc1Byb2R1Y3RvICwgKERQICwgY2FsbGJhY2sgKT0+eyAgXHJcbiAgICAgICAgICAgICAgICAgICAgbXlSZXF1ZXN0RFAucGFyYW1ldGVycy5pZEFydGljdWxvLnZhbHVlID0gRFAuaWRBcnRpY3Vsb1xyXG4gICAgICAgICAgICAgICAgICAgIG15UmVxdWVzdERQLnBhcmFtZXRlcnMuY2FudGlkYWREZXRhbGxlUHJvZHVjdG8udmFsdWUgPSBEUC5jYW50aWRhZERldGFsbGVQcm9kdWN0byAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBteVJlcXVlc3REUC5leGVjdXRlKCdwYV9pbnNlcnREZXRhbGxlUHJvZHVjdG8nLChFLFIpPT57aWYoRSl7IGNhbGxiYWNrKEUpIH1lbHNleyBjYWxsYmFjaygpfX0pIFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JDYWxsQmFjayA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVycm9yQ2FsbEJhY2spe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlUcmFuc2FjdGlvbi5yb2xsYmFjaygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZXJyb3JDYWxsQmFjayxvcE9LOmZhbHNlfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlUcmFuc2FjdGlvbi5jb21taXQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidQcm9kdWN0byB5IGRldGFsbGVzIGRlIHByb2R1Y3RvIGd1YXJkYWRvcyBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoKGUpe1xyXG4gICAgICAgICAgICBteVRyYW5zYWN0aW9uLnJvbGxiYWNrKClcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH0gICAgICAgICAgICAgICAgXHJcbiAgICB9KVxyXG59KVxyXG5cclxuLy9UT0RPOiBVUERBVEUgUFJPRFVDVE9cclxuXHJcbnJvdXRlci5wdXQoJy91cGRhdGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBjb25zdCB7bm9tYnJlUHJvZHVjdG8sZGVzY3JpcGNpb25Qcm9kdWN0byxwcmVjaW9BY3R1YWxQcm9kdWN0byxpZFByb2R1Y3RvLHZlY0RldGFsbGVzUHJvZHVjdG99ID0gcmVxLmJvZHkgICAgICAgIFxyXG4gICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgndXBkYXRlUHJvZHVjdG8nKVxyXG4gICAgY29uc3Qge1JlcXVlc3QsVmFyQ2hhcixSZWFsLEludCxUcmFuc2FjdGlvbn0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICBjb25zdCBteVRyYW5zYWN0aW9uID0gbmV3IFRyYW5zYWN0aW9uKGNvbmV4aW9uKVxyXG4gICAgbXlUcmFuc2FjdGlvbi5iZWdpbihhc3luYyBlcnI9PntcclxuICAgICAgICBpZihlcnIpe1xyXG4gICAgICAgICAgICBteVRyYW5zYWN0aW9uLnJvbGxiYWNrKClcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChteVRyYW5zYWN0aW9uKVxyXG4gICAgICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZVByb2R1Y3RvJyAsIFZhckNoYXIgLCBub21icmVQcm9kdWN0byApXHJcbiAgICAgICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZGVzY3JpcGNpb25Qcm9kdWN0bycgLCBWYXJDaGFyICwgZGVzY3JpcGNpb25Qcm9kdWN0byApXHJcbiAgICAgICAgICAgIG15UmVxdWVzdC5pbnB1dCgncHJlY2lvQWN0dWFsUHJvZHVjdG8nICwgUmVhbCAsIHByZWNpb0FjdHVhbFByb2R1Y3RvIClcclxuICAgICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFByb2R1Y3RvJyAsIEludCAsIGlkUHJvZHVjdG8gKVxyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX3VwZGF0ZVByb2R1Y3RvJylcclxuICAgICAgICAgICAgaWYocmVzdWx0LnJvd3NBZmZlY3RlZCA9PT0gMCl7XHJcbiAgICAgICAgICAgICAgICBteVRyYW5zYWN0aW9uLnJvbGxiYWNrKClcclxuICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonRVJST1IgMCBmaWxhcyBtb2RpZmljYWRhcycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG15UmVxdWVzdERQID0gbmV3IFJlcXVlc3QobXlUcmFuc2FjdGlvbilcclxuICAgICAgICAgICAgICAgIG15UmVxdWVzdERQLmlucHV0KCdpZFByb2R1Y3RvJyxJbnQsaWRQcm9kdWN0bylcclxuICAgICAgICAgICAgICAgIG15UmVxdWVzdERQLmlucHV0KCdpZEFydGljdWxvJyxJbnQsMClcclxuICAgICAgICAgICAgICAgIG15UmVxdWVzdERQLmlucHV0KCdjYW50aWRhZERldGFsbGVQcm9kdWN0bycsUmVhbCwwKVxyXG4gICAgICAgICAgICAgICAgZWFjaFNlcmllcyh2ZWNEZXRhbGxlc1Byb2R1Y3RvLChEUCxjYWxsYmFjayk9PntcclxuICAgICAgICAgICAgICAgICAgICBteVJlcXVlc3REUC5wYXJhbWV0ZXJzLmlkQXJ0aWN1bG8udmFsdWUgPSBEUC5pZEFydGljdWxvXHJcbiAgICAgICAgICAgICAgICAgICAgbXlSZXF1ZXN0RFAucGFyYW1ldGVycy5jYW50aWRhZERldGFsbGVQcm9kdWN0by52YWx1ZSA9IERQLmNhbnRpZGFkRGV0YWxsZVByb2R1Y3RvXHJcbiAgICAgICAgICAgICAgICAgICAgbXlSZXF1ZXN0RFAuZXhlY3V0ZSgncGFfaW5zZXJ0RGV0YWxsZVByb2R1Y3RvJywoRSxSKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihFKXtjYWxsYmFjayhFKX1lbHNle2NhbGxiYWNrKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0sZXJyb3JDYWxsQmFjaz0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGVycm9yQ2FsbEJhY2spe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBteVRyYW5zYWN0aW9uLnJvbGxiYWNrKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZXJyb3JDYWxsQmFjay5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBteVRyYW5zYWN0aW9uLmNvbW1pdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidQcm9kdWN0byBtb2RpZmljYWRvIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoKGUpe1xyXG4gICAgICAgICAgICBteVRyYW5zYWN0aW9uLnJvbGxiYWNrKClcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG59KVxyXG5cclxuLy9UT0RPOiBERUxFVEUgUFJPRFVDVE9cclxuXHJcbnJvdXRlci5wb3N0KCcvZGVsZXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7aWRQcm9kdWN0b30gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnZGVsZXRlUHJvZHVjdG8nKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkUHJvZHVjdG8nICwgbXNzcWwuSW50ICwgaWRQcm9kdWN0byApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9kZWxldGVQcm9kdWN0bycpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonUHJvZHVjdG8gZWxpbWluYWRvIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG4vL1RPRE86IExJU1RBIERFIFBST1ZFRURPUkVTXHJcbnJvdXRlci5nZXQoJy9saXN0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHthYnJpckNvbmV4aW9uUE9PTCxjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdMaXN0YVByb3ZlZWRvcmVzJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX2xpc3RhUHJvdmVlZG9yZXMnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bGlzdDpyZXN1bHQucmVjb3Jkc2V0LG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplIDogJ0Vycm9yIGVuIGVsIHJlc3VsdGFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplIDogZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBJTlNFUlRBIFBST1ZFRURPUlxyXG5cclxucm91dGVyLnBvc3QgKCcvaW5zZXJ0JyAsIGFzeW5jIChyZXEgLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBub21icmVQcm92ZWVkb3IsYXBlbGxpZG9Qcm92ZWVkb3IsaWRUaXBvRG9jdW1lbnRvLG5yb0RvY1Byb3ZlZWRvcixcclxuICAgICAgICAgICAgaWRUaXBvQ29udHJpYnVsbGVudGUsbnJvQ3VpdEN1aWxQcm92ZWVkb3IsaWREaXJlY2Npb24saWRUaXBvUGVyc29uYVxyXG4gICAgICAgIH0gPSByZXEuYm9keVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ2luc2VydFByb3ZlZWRvcicpXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCB9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZVByb3ZlZWRvcicgLCBWYXJDaGFyICwgbm9tYnJlUHJvdmVlZG9yIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2FwZWxsaWRvUHJvdmVlZG9yJyAsIFZhckNoYXIgLCBhcGVsbGlkb1Byb3ZlZWRvciApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFRpcG9Eb2N1bWVudG8nICwgSW50ICwgaWRUaXBvRG9jdW1lbnRvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25yb0RvY1Byb3ZlZWRvcicgLCBWYXJDaGFyICwgbnJvRG9jUHJvdmVlZG9yIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVGlwb0NvbnRyaWJ1bGxlbnRlJyAsIEludCAsIGlkVGlwb0NvbnRyaWJ1bGxlbnRlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25yb0N1aXRDdWlsUHJvdmVlZG9yJyAsIEludCAsIG5yb0N1aXRDdWlsUHJvdmVlZG9yIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkRGlyZWNjaW9uJyAsIEludCAsIGlkRGlyZWNjaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVGlwb1BlcnNvbmEnICwgSW50ICwgaWRUaXBvUGVyc29uYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9pbnNlcnRQcm92ZWVkb3InKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J1Byb3ZlZWRvciBndWFyZGFkbyBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogVVBEQVRFIFBST1ZFRURPUlxyXG5cclxucm91dGVyLnB1dCgnL3VwZGF0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBpZFByb3ZlZWRvcixub21icmVQcm92ZWVkb3IsYXBlbGxpZG9Qcm92ZWVkb3IsaWRUaXBvRG9jdW1lbnRvLG5yb0RvY1Byb3ZlZWRvcixcclxuICAgICAgICAgICAgaWRUaXBvQ29udHJpYnVsbGVudGUsbnJvQ3VpdEN1aWxQcm92ZWVkb3IsaWREaXJlY2Npb24saWRUaXBvUGVyc29uYVxyXG4gICAgICAgIH0gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgndXBkYXRlUHJvdmVlZG9yJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFByb3ZlZWRvcicgLCBtc3NxbC5JbnQgLCBpZFByb3ZlZWRvciApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmVQcm92ZWVkb3InICwgbXNzcWwuVmFyQ2hhciAsIG5vbWJyZVByb3ZlZWRvciApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdhcGVsbGlkb1Byb3ZlZWRvcicgLCBtc3NxbC5WYXJDaGFyICwgYXBlbGxpZG9Qcm92ZWVkb3IgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRUaXBvRG9jdW1lbnRvJyAsIG1zc3FsLkludCAsIGlkVGlwb0RvY3VtZW50byApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCducm9Eb2NQcm92ZWVkb3InICwgbXNzcWwuVmFyQ2hhciAsIG5yb0RvY1Byb3ZlZWRvciApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFRpcG9Db250cmlidWxsZW50ZScgLCBJbnQgLCBpZFRpcG9Db250cmlidWxsZW50ZSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCducm9DdWl0Q3VpbFByb3ZlZWRvcicgLCBtc3NxbC5JbnQgLCBucm9DdWl0Q3VpbFByb3ZlZWRvciApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZERpcmVjY2lvbicgLCBtc3NxbC5JbnQgLCBpZERpcmVjY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFRpcG9QZXJzb25hJyAsIG1zc3FsLkludCAsIGlkVGlwb1BlcnNvbmEgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfdXBkYXRlUHJvdmVlZG9yJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidQcm92ZWVkb3IgbW9kaWZpY2FkbyBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogREVMRVRFIFBST1ZFRURPUlxyXG5cclxucm91dGVyLnBvc3QoJy9kZWxldGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtpZFByb3ZlZWRvcn0gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnZGVsZXRlUHJvdmVlZG9yJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFByb3ZlZWRvcicgLCBtc3NxbC5JbnQgLCBpZFByb3ZlZWRvciApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9kZWxldGVQcm92ZWVkb3InKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J1Byb3ZlZWRvciBlbGltaW5hZG8gZXhpdG9zYW1lbnRlJyxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTplLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbi8vVE9ETzogTElTVEEgU1VDVVJTQUxFU1xyXG5yb3V0ZXIuZ2V0KCcvbGlzdCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wsY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgICAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnTGlzdGFTdWN1cnNhbGVzJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX2xpc3RhU3VjdXJzYWxlcycpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtsaXN0OnJlc3VsdC5yZWNvcmRzZXQsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamUgOiAnRXJyb3IgZW4gZWwgcmVzdWx0YWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamUgOiBlLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IElOU0VSVEEgU1VDVVJTQUxcclxuXHJcbnJvdXRlci5wb3N0ICgnL2luc2VydCcgLCBhc3luYyAocmVxICwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgaWREaXJlY2Npb24gLCBub21icmVTdWN1cnNhbCB9ID0gcmVxLmJvZHlcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdpbnNlcnRTdWN1cnNhbCcpXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCB9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkRGlyZWNjaW9uJyAsIEludCAsIGlkRGlyZWNjaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZVN1Y3Vyc2FsJyAsIFZhckNoYXIgLCBub21icmVTdWN1cnNhbCApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9pbnNlcnRTdWN1cnNhbCcpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonU3VjdXJzYWwgZ3VhcmRhZGEgZXhpdG9zYW1lbnRlJyxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTplLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IFVQREFURSBTVUNVUlNBTFxyXG5cclxucm91dGVyLnB1dCgnL3VwZGF0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge2lkU3VjdXJzYWwsaWREaXJlY2Npb24sbm9tYnJlU3VjdXJzYWx9ID0gcmVxLmJvZHkgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ3VwZGF0ZVN1Y3Vyc2FsJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFN1Y3Vyc2FsJyAsIG1zc3FsLkludCAsIGlkU3VjdXJzYWwgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWREaXJlY2Npb24nICwgbXNzcWwuSW50ICwgaWREaXJlY2Npb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlU3VjdXJzYWwnICwgbXNzcWwuVmFyQ2hhciAsIG5vbWJyZVN1Y3Vyc2FsIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX3VwZGF0ZVN1Y3Vyc2FsJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidTdWN1cnNhbCBtb2RpZmljYWRhIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBERUxFVEUgU1VDVVJTQUxcclxuXHJcbnJvdXRlci5wb3N0KCcvZGVsZXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7aWRTdWN1cnNhbH0gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnZGVsZXRlU3VjdXJzYWwnKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkU3VjdXJzYWwnICwgbXNzcWwuSW50ICwgaWRTdWN1cnNhbCApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9kZWxldGVTdWN1cnNhbCcpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonU3VjdXJzYWwgZWxpbWluYWRhIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG4vL1RPRE86IExJU1RBIERFIFRJUE9TIERFIENPTlRSSUJVTExFTlRFXHJcbnJvdXRlci5nZXQoJy9saXN0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHthYnJpckNvbmV4aW9uUE9PTCxjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdMaXN0YVRpcG9zQ29udHJpYnVsbGVudGUnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSgncGFfbGlzdGFUaXBvc0NvbnRyaWJ1bGxlbnRlJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe2xpc3Q6cmVzdWx0LnJlY29yZHNldCxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZSA6ICdFcnJvciBlbiBlbCByZXN1bHRhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZSA6IGUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogSU5TRVJUQSBUSVBPIERFIENPTlRSSUJVTExFTlRFXHJcblxyXG5yb3V0ZXIucG9zdCAoJy9pbnNlcnQnICwgYXN5bmMgKHJlcSAsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IG5vbWJyZVRpcG9Db250cmlidWxsZW50ZSAsIGRlc2NyaXBjaW9uVGlwb0NvbnRyaWJ1bGxlbnRlIH0gPSByZXEuYm9keVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ2luc2VydFRpcG9Db250cmlidWxsZW50ZScpXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZVRpcG9Db250cmlidWxsZW50ZScgLCBWYXJDaGFyICwgbm9tYnJlVGlwb0NvbnRyaWJ1bGxlbnRlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2Rlc2NyaXBjaW9uVGlwb0NvbnRyaWJ1bGxlbnRlJyAsIFZhckNoYXIgLCBkZXNjcmlwY2lvblRpcG9Db250cmlidWxsZW50ZSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9pbnNlcnRUaXBvQ29udHJpYnVsbGVudGUnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J1RpcG8gZGUgY29udHJpYnVsbGVudGUgZ3VhcmRhZG8gZXhpdG9zYW1lbnRlJyxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTplLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IFVQREFURSBUSVBPIERFIENPTlRSSUJVTExFTlRFXHJcblxyXG5yb3V0ZXIucHV0KCcvdXBkYXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7bm9tYnJlVGlwb0NvbnRyaWJ1bGxlbnRlLGRlc2NyaXBjaW9uVGlwb0NvbnRyaWJ1bGxlbnRlLGlkVGlwb0NvbnRyaWJ1bGxlbnRlfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCd1cGRhdGVUaXBvQ29udHJpYnVsbGVudGUnKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZVRpcG9Db250cmlidWxsZW50ZScgLCBtc3NxbC5WYXJDaGFyICwgbm9tYnJlVGlwb0NvbnRyaWJ1bGxlbnRlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2Rlc2NyaXBjaW9uVGlwb0NvbnRyaWJ1bGxlbnRlJyAsIG1zc3FsLlZhckNoYXIgLCBkZXNjcmlwY2lvblRpcG9Db250cmlidWxsZW50ZSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFRpcG9Db250cmlidWxsZW50ZScgLCBtc3NxbC5JbnQgLCBpZFRpcG9Db250cmlidWxsZW50ZSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV91cGRhdGVUaXBvQ29udHJpYnVsbGVudGUnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J1RpcG8gZGUgY29udHJpYnVsbGVudGUgbW9kaWZpY2FkbyBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogREVMRVRFIFRJUE8gREUgQ09OVFJJQlVMTEVOVEVcclxuXHJcbnJvdXRlci5wb3N0KCcvZGVsZXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7aWRUaXBvQ29udHJpYnVsbGVudGV9ID0gcmVxLmJvZHkgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ2RlbGV0ZVRpcG9Db250cmlidWxsZW50ZScpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRUaXBvQ29udHJpYnVsbGVudGUnICwgbXNzcWwuSW50ICwgaWRUaXBvQ29udHJpYnVsbGVudGUgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfZGVsZXRlVGlwb0NvbnRyaWJ1bGxlbnRlJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidUaXBvIGRlIGNvbnRyaWJ1bGxlbnRlIGVsaW1pbmFkbyBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxuLy9UT0RPOiBMSVNUQSBERSBUSVBPUyBERSBET0NVTUVOVE9cclxucm91dGVyLmdldCgnL2xpc3QnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3Qge2FicmlyQ29uZXhpb25QT09MLGNlcnJhckNvbmV4aW9uUE9PTH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICAgICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ0xpc3RhVGlwb3NEb2N1bWVudG8nKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSgncGFfbGlzdGFUaXBvc0RvY3VtZW50bycpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtsaXN0OnJlc3VsdC5yZWNvcmRzZXQsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamUgOiAnRXJyb3IgZW4gZWwgcmVzdWx0YWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamUgOiBlLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IElOU0VSVEEgVElQTyBERSBET0NVTUVOVE9cclxuXHJcbnJvdXRlci5wb3N0ICgnL2luc2VydCcgLCBhc3luYyAocmVxICwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtub21icmVUaXBvRG9jdW1lbnRvfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnaW5zZXJ0VGlwb0RvY3VtZW50bycpXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZVRpcG9Eb2N1bWVudG8nICwgVmFyQ2hhciAsIG5vbWJyZVRpcG9Eb2N1bWVudG8gKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfaW5zZXJ0VGlwb0RvY3VtZW50bycpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonVGlwbyBkZSBkb2N1bWVudG8gZ3VhcmRhZG8gZXhpdG9zYW1lbnRlJyxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTplLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IFVQREFURSBUSVBPIERFIERPQ1VNRU5UT1xyXG5cclxucm91dGVyLnB1dCgnL3VwZGF0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge25vbWJyZVRpcG9Eb2N1bWVudG8saWRUaXBvRG9jdW1lbnRvfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCd1cGRhdGVUaXBvRG9jdW1lbnRvJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmVUaXBvRG9jdW1lbnRvJyAsIG1zc3FsLlZhckNoYXIgLCBub21icmVUaXBvRG9jdW1lbnRvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVGlwb0RvY3VtZW50bycgLCBtc3NxbC5JbnQgLCBpZFRpcG9Eb2N1bWVudG8gKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfdXBkYXRlVGlwb0RvY3VtZW50bycpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonVGlwbyBkZSBkb2N1bWVudG8gbW9kaWZpY2FkbyBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogREVMRVRFIFRJUE8gREUgRE9DVU1FTlRPXHJcblxyXG5yb3V0ZXIucG9zdCgnL2RlbGV0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge2lkVGlwb0RvY3VtZW50b30gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnZGVsZXRlVGlwb0RvY3VtZW50bycpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRUaXBvRG9jdW1lbnRvJyAsIG1zc3FsLkludCAsIGlkVGlwb0RvY3VtZW50byApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9kZWxldGVUaXBvRG9jdW1lbnRvJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidUaXBvIGRlIGRvY3VtZW50byBlbGltaW5hZG8gZXhpdG9zYW1lbnRlJyxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTplLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbi8vVE9ETzogTElTVEEgREUgVElQT1MgREUgUEVSU09OQVxyXG5yb3V0ZXIuZ2V0KCcvbGlzdCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wsY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgICAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnTGlzdGFUaXBvc1BlcnNvbmEnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSgncGFfbGlzdGFUaXBvc1BlcnNvbmEnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bGlzdDpyZXN1bHQucmVjb3Jkc2V0LG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplIDogJ0Vycm9yIGVuIGVsIHJlc3VsdGFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplIDogZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBJTlNFUlRBIFRJUE8gREUgUEVSU09OQVxyXG5cclxucm91dGVyLnBvc3QgKCcvaW5zZXJ0JyAsIGFzeW5jIChyZXEgLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge25vbWJyZVRpcG9QZXJzb25hfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnaW5zZXJ0VGlwb1BlcnNvbmEnKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgfSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmVUaXBvUGVyc29uYScgLCBWYXJDaGFyICwgbm9tYnJlVGlwb1BlcnNvbmEgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfaW5zZXJ0VGlwb1BlcnNvbmEnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J1RpcG8gZGUgcGVyc29uYSBndWFyZGFkYSBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogVVBEQVRFIFRJUE8gREUgUEVSU09OQVxyXG5cclxucm91dGVyLnB1dCgnL3VwZGF0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge25vbWJyZVRpcG9QZXJzb25hLGlkVGlwb1BlcnNvbmF9ID0gcmVxLmJvZHkgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ3VwZGF0ZVRpcG9QZXJzb25hJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmVUaXBvUGVyc29uYScgLCBtc3NxbC5WYXJDaGFyICwgbm9tYnJlVGlwb1BlcnNvbmEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRUaXBvUGVyc29uYScgLCBtc3NxbC5JbnQgLCBpZFRpcG9QZXJzb25hIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX3VwZGF0ZVRpcG9QZXJzb25hJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidUaXBvIGRlIHBlcnNvbmEgbW9kaWZpY2FkYSBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogREVMRVRFIFRJUE8gREUgUEVSU09OQVxyXG5cclxucm91dGVyLnBvc3QoJy9kZWxldGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtpZFRpcG9QZXJzb25hfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdkZWxldGVUaXBvUGVyc29uYScpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRUaXBvUGVyc29uYScgLCBtc3NxbC5JbnQgLCBpZFRpcG9QZXJzb25hIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2RlbGV0ZVRpcG9QZXJzb25hJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidUaXBvIGRlIHBlcnNvbmEgZWxpbWluYWRhIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG4vL1RPRE86IExJU1RBIERFIFVOSURBREVTIERFIE1FRElEQVxyXG5yb3V0ZXIuZ2V0KCcvbGlzdCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wsY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgICAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnTGlzdGFVbmlkYWRlc01lZGlkYScpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlKCdwYV9saXN0YVVuaWRhZGVzTWVkaWEnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bGlzdDpyZXN1bHQucmVjb3Jkc2V0LG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplIDogJ0Vycm9yIGVuIGVsIHJlc3VsdGFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplIDogZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBJTlNFUlRBIFVOSURBRCBERSBNRURJREFcclxuXHJcbnJvdXRlci5wb3N0ICgnL2luc2VydCcgLCBhc3luYyAocmVxICwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgbm9tYnJlVW5pZGFkTWVkaWRhICwgZGVzY3JpcGNpb25VbmlkYWRNZWRpZGEgfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnaW5zZXJ0VW5pZGFkTWFkaWRhJylcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyIH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlVW5pZGFkTWVkaWRhJyAsIFZhckNoYXIgLCBub21icmVVbmlkYWRNZWRpZGEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZGVzY3JpcGNpb25VbmlkYWRNZWRpZGEnICwgVmFyQ2hhciAsIGRlc2NyaXBjaW9uVW5pZGFkTWVkaWRhIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2luc2VydFVuaWRhZE1lZGlkYScpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonVW5pZGFkZSBkZSBtZWRpZGEgZ3VhcmRhZGEgZXhpdG9zYW1lbnRlJyxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTplLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IFVQREFURSBVTklEQUQgREUgTUVESURBXHJcblxyXG5yb3V0ZXIucHV0KCcvdXBkYXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7bm9tYnJlVW5pZGFkTWVkaWRhLGRlc2NyaXBjaW9uVW5pZGFkTWVkaWRhLGlkVW5pZGFkTWVkaWRhfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCd1cGRhdGVVbmlkYWRNZWRpZGEnKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZVVuaWRhZE1lZGlkYScgLCBtc3NxbC5WYXJDaGFyICwgbm9tYnJlVW5pZGFkTWVkaWRhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2Rlc2NyaXBjaW9uVW5pZGFkTWVkaWRhJyAsIG1zc3FsLlZhckNoYXIgLCBkZXNjcmlwY2lvblVuaWRhZE1lZGlkYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFVuaWRhZE1lZGlkYScgLCBtc3NxbC5JbnQgLCBpZFVuaWRhZE1lZGlkYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV91cGRhdGVVbmlkYWRNZWRpZGEnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J1VuaWRhZCBkZSBtZWRpZGEgbW9kaWZpY2FkYSBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogREVMRVRFIFVOSURBRCBNRURJREFcclxuXHJcbnJvdXRlci5wb3N0KCcvZGVsZXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7aWRVbmlkYWRNZWRpZGF9ID0gcmVxLmJvZHkgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ2RlbGV0ZVVuaWRhZE1lZGlkYScpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRVbmlkYWRNZWRpZGEnICwgbXNzcWwuSW50ICwgaWRVbmlkYWRNZWRpZGEgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfZGVsZXRlVW5pZGFkTWVkaWRhJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidVbmlkYWQgZGUgbWVkaWRhIGVsaW1pbmFkYSBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3QgYmNyeXAgPSByZXF1aXJlKCdiY3J5cHQnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbi8vIFRPRE86IElOU0VSVCBVU1VBUklPXHJcblxyXG5yb3V0ZXIucG9zdCAoICcvaW5zZXJ0JyAsIGFzeW5jIChyZXEsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTH0gPSByZXF1aXJlICgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgY29uc3QgeyBub21icmVVc3VhcmlvICwgYXBlbGxpZG9Vc3VhcmlvICwgdXN1YXJpbyAsIHB3IH0gPSByZXEuYm9keVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdpbnNlcnRVc3VhcmlvJylcclxuICAgICAgICBjb25zdCB7UmVxdWVzdCAsIFZhckNoYXIgfSA9IHJlcXVpcmUgKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoJ25vbWJyZVVzdWFyaW8nICwgVmFyQ2hhciAsIG5vbWJyZVVzdWFyaW8pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICgnYXBlbGxpZG9Vc3VhcmlvJyAsIFZhckNoYXIgLCBhcGVsbGlkb1VzdWFyaW8pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICgndXN1YXJpbycgLCBWYXJDaGFyICwgdXN1YXJpbylcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCdwdycgLCBWYXJDaGFyICwgYmNyeXAuaGFzaFN5bmMocHcgLCAxMCkgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlKCAncGFfaW5zZXJ0VXN1YXJpbycgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbiggeyBtZW5zYWplIDogJ1VzdWFyaW8gaW5zZXJ0YWRvIGNvcnJlY3RhbWVudGUnLG9wT0s6dHJ1ZSB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsb3BPSzpmYWxzZX0gKVxyXG4gICAgfVxyXG59IClcclxuXHJcblxyXG4vLyAvLyAhIGxpc3RhZG8gZGUgdXN1YXJpb3NcclxuLy8gcm91dGVyLmdldCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbi8vICAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUgKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbi8vICAgICB0cnl7XHJcbi8vICAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCggJ2xpYXN0YVVzdWFyaW8nKVxyXG4vLyAgICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4vLyAgICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0KGNvbmV4aW9uKVxyXG4vLyAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlKCdwYV9saXN0YVVzdWFyaW9zJylcclxuLy8gICAgICAgICBpZihyZXN1bHQpe1xyXG4vLyAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4vLyAgICAgICAgICAgICByZXMuanNvbihyZXN1bHQucmVjb3Jkc2V0KVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBlbHNle1xyXG4vLyAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4vLyAgICAgICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7c3RhdHVzOiAyMDAsbWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgIGNhdGNoKGUpe1xyXG4vLyAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbi8vICAgICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oe3N0YXR1czogMjAwLG1lbnNhamU6ZS5tZXNzYWdlfSlcclxuLy8gICAgIH1cclxuLy8gfSlcclxuLy8gLy8hIGxpc3RhIGRlIHBlcmZpbGVzXHJcbi8vIHJvdXRlci5nZXQoJy9wZXJmaWxlcycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbi8vICAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUgKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbi8vICAgICB0cnl7XHJcbi8vICAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCggJ2xpc3RhUGVyZmlsZXMnKVxyXG4vLyAgICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4vLyAgICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0KGNvbmV4aW9uKVxyXG4vLyAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlKCdwYV9saXN0YVBlcmZpbGVzJylcclxuLy8gICAgICAgICBpZihyZXN1bHQpe1xyXG4vLyAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4vLyAgICAgICAgICAgICByZXMuanNvbihyZXN1bHQucmVjb3Jkc2V0KVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBlbHNle1xyXG4vLyAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4vLyAgICAgICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7c3RhdHVzOiAyMDAsbWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgIGNhdGNoKGUpe1xyXG4vLyAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbi8vICAgICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oe3N0YXR1czogMjAwLG1lbnNhamU6ZS5tZXNzYWdlfSlcclxuLy8gICAgIH1cclxuLy8gfSlcclxuLy8gLy8hIGNvbnN1bHRhIHVzdWFyaW8gcG9yIGlkXHJcbi8vIHJvdXRlci5nZXQoJy86aWQnLGFzeW5jIChyZXEscmVzKT0+e1xyXG4vLyAgICAgY29uc3QgaWQgPSByZXEucGFyYW1zLmlkXHJcbi8vICAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUgKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbi8vICAgICB0cnl7XHJcbi8vICAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCggJ2dldFVzZXhJZCcpXHJcbi8vICAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbi8vICAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QoY29uZXhpb24pXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFVzdWFyaW8nICwgbXNzcWwuSW50ICwgaWQpXHJcbi8vICAgICAgICAgY29uc3QgcXVlcnkgPSBgc2VsZWN0XHJcbi8vICAgICAgICAgdS5pZCBhcyBpZFVzdWFyaW8gLFxyXG4vLyAgICAgICAgIHUudXNlck5hbWUgYXMgdXNlck5hbWUgLFxyXG4vLyAgICAgICAgIHUuZW1haWwgYXMgZW1haWwgLFxyXG4vLyAgICAgICAgIHUubm9tYnJlIGFzIG5vbWJyZVVzdWFyaW8gLFxyXG4vLyAgICAgICAgIHUuYXBlbGxpZG8gYXMgYXBlbGxpZG9Vc3VhcmlvICxcclxuLy8gICAgICAgICBwLmlkIGFzIGlkUGVyZmlsICxcclxuLy8gICAgICAgICBwLm5vbWJyZSBhcyBub21icmVQZXJmaWxcclxuLy8gICAgICAgICBmcm9tIHVzdWFyaW9zIHVcclxuLy8gICAgICAgICBqb2luIHBlcmZpbGVzIHAgb24gcC5pZCA9IHUuaWRfcGVyZmlsXHJcbi8vICAgICAgICAgd2hlcmUgdS5pZCA9IEBpZFVzdWFyaW9gXHJcbi8vICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5KHF1ZXJ5KVxyXG4vLyAgICAgICAgIGlmKHJlc3VsdCl7XHJcbi8vICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbi8vICAgICAgICAgICAgIHJlcy5qc29uKHJlc3VsdC5yZWNvcmRzZXQpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGVsc2V7XHJcbi8vICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbi8vICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtzdGF0dXM6IDIwMCxtZW5zYWplOmUubWVzc2FnZX0pXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgY2F0Y2goZSl7XHJcbi8vICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7c3RhdHVzOiAyMDAsbWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG5cclxuLy8gLy8hZ3VhcmRhIHVzdWFyaW9cclxuLy8gcm91dGVyLnBvc3QoJy8nLGFzeW5jIChyZXEscmVzKT0+e1xyXG4vLyAgICAgY29uc3Qge2FicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuLy8gICAgIGNvbnN0ICB7dXNlck5hbWUscGFzc3dvcmQsZW1haWwsbm9tYnJlLGFwZWxsaWRvLGlkUGVyZmlsfSA9IHJlcS5ib2R5XHJcbi8vICAgICB0cnl7XHJcbi8vICAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnc2F2ZVVzZXInKVxyXG4vLyAgICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSAoJ21zc3FsJylcclxuLy8gICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdChjb25leGlvbilcclxuLy8gICAgICAgICBjb25zdCBwdyA9IGJjcnlwLmhhc2hTeW5jKHBhc3N3b3JkLDEwKVxyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHB3KVxyXG4vLyAgICAgICAgIG15UmVxdWVzdC5pbnB1dCgndXNlck5hbWUnICwgbXNzcWwuVmFyQ2hhciAsIHVzZXJOYW1lKVxyXG4vLyAgICAgICAgIG15UmVxdWVzdC5pbnB1dCgncGFzc3dvcmQnICwgbXNzcWwuVmFyQ2hhciAsIHB3KVxyXG4vLyAgICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZW1haWwnICwgbXNzcWwuVmFyQ2hhciAsIGVtYWlsKVxyXG4vLyAgICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlJyAsIG1zc3FsLlZhckNoYXIgLCBub21icmUpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdhcGVsbGlkbycgLCBtc3NxbC5WYXJDaGFyICwgYXBlbGxpZG8pXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFBlcmZpbCcgLCBtc3NxbC5JbnQgLCBpZFBlcmZpbClcclxuLy8gICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSgncGFfaW5zZXJ0VXN1YXJpb3MnKVxyXG4vLyAgICAgICAgIGlmKHJlc3VsdCl7XHJcbi8vICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuLy8gICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOiAndXN1YXJpbyBpbnNlcnRhZG8gY29ycmVjdGFtZW50ZSAhJyB9KVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgIGNhdGNoKGVycil7XHJcbi8vICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7ZXJyb3I6ZXJyLm1lc3NhZ2V9KVxyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG5cclxuLy8gcm91dGVyLnB1dCgnLycsIGFzeW5jIChyZXEscmVzKT0+e1xyXG4vLyAgICAgY29uc3Qge2FicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuLy8gICAgIGNvbnN0ICB7dXNlck5hbWUscGFzc3dvcmQsZW1haWwsbm9tYnJlLGFwZWxsaWRvLGlkUGVyZmlsICwgaWRVc3VhcmlvfSA9IHJlcS5ib2R5XHJcbi8vICAgICB0cnl7XHJcbi8vICAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgndXBkYXRlVXNlcicpXHJcbi8vICAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlICgnbXNzcWwnKVxyXG4vLyAgICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0KGNvbmV4aW9uKVxyXG4vLyAgICAgICAgIG15UmVxdWVzdC5pbnB1dCgndXNlck5hbWUnICwgbXNzcWwuVmFyQ2hhciAsIHVzZXJOYW1lKVxyXG4vLyAgICAgICAgIG15UmVxdWVzdC5pbnB1dCgncGFzc3dvcmQnICwgbXNzcWwuVmFyQ2hhciAsIGJjcnlwLmhhc2hTeW5jKHBhc3N3b3JkKSlcclxuLy8gICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2VtYWlsJyAsIG1zc3FsLlZhckNoYXIgLCBlbWFpbClcclxuLy8gICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZScgLCBtc3NxbC5WYXJDaGFyICwgbm9tYnJlKVxyXG4vLyAgICAgICAgIG15UmVxdWVzdC5pbnB1dCgnYXBlbGxpZG8nICwgbXNzcWwuVmFyQ2hhciAsIGFwZWxsaWRvKVxyXG4vLyAgICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRQZXJmaWwnICwgbXNzcWwuSW50ICwgaWRQZXJmaWwpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFVzdWFyaW8nICwgbXNzcWwuSW50ICwgaWRVc3VhcmlvKVxyXG4vLyAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlKCdwYV91cGRhdGVVc3VhcmlvcycpXHJcbi8vICAgICAgICAgaWYocmVzdWx0KXtcclxuLy8gICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4vLyAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6ICd1c3VhcmlvIGluc2VydGFkbyBjb3JyZWN0YW1lbnRlICEnIH0pXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgY2F0Y2goZSl7XHJcbi8vICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7ZXJyb3I6ZXJyLm1lc3NhZ2V9KVxyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXN5bmNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbG9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtc3NxbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9