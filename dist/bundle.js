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
servidor.use('/api/unidadesMedida', __webpack_require__(/*! ./rutasApi/unidadesMedida */ "./rutasApi/unidadesMedida.js"));
servidor.use('/api/direcciones', __webpack_require__(/*! ./rutasApi/direcciones */ "./rutasApi/direcciones.js"));
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
        mensaje: 'Direccion guardada exitosamente'
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
        mensaje: 'Direccion modificada exitosamente'
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
        mensaje: 'Direccion eliminada exitosamente'
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
        mensaje: 'Unidade de medida guardada exitosamente'
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
        mensaje: 'Unidad de medida modificada exitosamente'
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
        mensaje: 'Unidad de medida eliminada exitosamente'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ09ORklHLmpzIiwid2VicGFjazovLy8uL2NvbmV4aW9uZXMvc3FsU2VydmVyLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL0F1dGVudGlmaWNhc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9Mb2d1ZW8uanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvY2F0ZWdvcmlhcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9kaXJlY2Npb25lcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS91bmlkYWRlc01lZGlkYS5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS91c3Vhcmlvcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb2xvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1zc3FsXCIiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInNlY3JldCIsIm1zc3FsIiwicmVxdWlyZSIsInByb2Nlc3MiLCJVUkkiLCJ1c2VyIiwicGFzc3dvcmQiLCJkYXRhYmFzZSIsInNlcnZlciIsIm9wdGlvbnMiLCJhcHBOYW1lIiwiZW5hYmxlQXJpdGhBYm9ydCIsImVuY3J5cHQiLCJjb25uZWN0aW9uVGltZU91dCIsImRyaXZlciIsInN0cmVhbSIsInBvb2wiLCJtYXgiLCJtaW4iLCJpZGxlVGltZW91dE1pbGxpcyIsIkNvbmV4aW9uU1FMIiwiYWJyaXJDb25leGlvbiIsInVuZGVmaW5lZCIsImNlcnJhckNvbmV4aW9uIiwiYWJyaXJDb25leGlvblBPT0wiLCJjZXJyYXJDb25leGlvblBPT0wiLCJjb25leGlvbmVzIiwibmFtZSIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIm5ld0NvbmV4aW9uIiwiQ29ubmVjdGlvblBvb2wiLCJjbG9zZSIsImJpbmQiLCJhcmdzIiwiY29ubmVjdCIsIlByb21pc2UiLCJhbGwiLCJ2YWx1ZXMiLCJtYXAiLCJleHByZXNzIiwiY29ycyIsIm1vcmdhbiIsInNlcnZpZG9yIiwidXNlIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsInNldCIsImVudiIsIlBPUlQiLCJsaXN0ZW4iLCJnZXQiLCJtIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ5ZWxsb3ciLCJSb3V0ZXIiLCJqd3QiLCJDT05GSUciLCJyb3V0ZXIiLCJyZXEiLCJyZXMiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInN0YXR1cyIsIm1lbnNhamUiLCJ0b2tlbiIsInNwbGl0IiwidmVyaWZ5IiwiZCIsImJjcnlwdCIsInBvc3QiLCJ1c3VhcmlvIiwicHciLCJib2R5IiwiUmVxdWVzdCIsIlZhckNoYXIiLCJjb25leGlvbiIsIm15UmVxdWVzdCIsImlucHV0IiwicmVzdWx0IiwiZXhlY3V0ZSIsInJvd3NBZmZlY3RlZCIsImNvbXBhcmVTeW5jIiwicmVjb3Jkc2V0Iiwibm9tYnJlVXN1YXJpbyIsImFwZWxsaWRvVXN1YXJpbyIsInNpZ24iLCJleHBpcmVzSW4iLCJlcnJvciIsIm1lc3NhZ2UiLCJub21icmVDYXRlZ29yaWEiLCJkZXNjcmlwY2lvbkNhdGVnb3JpYSIsInB1dCIsImlkQ2F0ZWdvcmlhIiwiSW50IiwiY2FsbGVEaXJlY2Npb24iLCJhbHR1cmFEaXJlY2Npb24iLCJjb2RpZ29Qb3N0YWxEaXJlY2Npb24iLCJiYXJyaW9EaXJlY2Npb24iLCJvdHJvc0RhdG9zRGlyZWNjaW9uIiwiaWREaXJlY2Npb24iLCJub21icmVVbmlkYWRNZWRpZGEiLCJkZXNjcmlwY2lvblVu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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQWhHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmdFLE1BQWpCLEM7Ozs7Ozs7Ozs7O0FDdktBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHNlY3JldDonbWFzdGVyU29mdDIwMjAnXHJcbn0iLCJjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJyk7XHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXsgcmVxdWlyZSgnY29sb3JzJykgfVxyXG5cclxudmFyIFVSSVxyXG5cclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xyXG4gICAgLy8gVVJJID0ge1xyXG4gICAgLy8gICAgIHVzZXI6IFxyXG4gICAgLy8gICAgIHBhc3N3b3JkOiBcclxuICAgIC8vICAgICBkYXRhYmFzZTogXHJcbiAgICAvLyAgICAgcG9ydDoxNDMzLFxyXG4gICAgLy8gICAgIHNlcnZlcjonXHJcbiAgICAvLyAgICAgb3B0aW9uczp7XHJcbiAgICAvLyAgICAgICAgIGFwcE5hbWU6XHJcbiAgICAvLyAgICAgICAgIGVuYWJsZUFyaXRoQWJvcnQ6dHJ1ZSxcclxuICAgIC8vICAgICAgICAgZW5jcnlwdDpmYWxzZVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICAsXHJcbiAgICAvLyAgICAgY29ubmVjdGlvblRpbWVPdXQ6MTUwMDAwLFxyXG4gICAgLy8gICAgIGRyaXZlcjondGVkaW91cycsXHJcbiAgICAvLyAgICAgc3RyZWFtOmZhbHNlLFxyXG4gICAgLy8gICAgIHBvb2w6e1xyXG4gICAgLy8gICAgICAgICBtYXg6MjAsXHJcbiAgICAvLyAgICAgICAgIG1pbjowLFxyXG4gICAgLy8gICAgICAgICBpZGxlVGltZW91dE1pbGxpczozMDAwMCxcclxuICAgIC8vICAgICB9XHJcbiAgICAvL1ZKNzMwMFxyXG4gICAgLy8gfVxyXG4gICAgVVJJID0ge1xyXG4gICAgICAgIHVzZXI6ICdnZXN0TGluZV9TUUxMb2dpbl8xJyxcclxuICAgICAgICBwYXNzd29yZDogJ2x0cDZ4bXVwM3QnLFxyXG4gICAgICAgIGRhdGFiYXNlOiAnZ2VzdExpbmVEQicsXHJcbiAgICAgICAgc2VydmVyOidnZXN0TGluZURCLm1zc3FsLnNvbWVlLmNvbScsXHJcbiAgICAgICAgb3B0aW9uczp7XHJcbiAgICAgICAgICAgIGFwcE5hbWU6J21hc3RlclNvZnQtQVBJJyxcclxuICAgICAgICAgICAgZW5hYmxlQXJpdGhBYm9ydDp0cnVlLFxyXG4gICAgICAgICAgICBlbmNyeXB0OmZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgICxcclxuICAgICAgICBjb25uZWN0aW9uVGltZU91dDoxNTAwMDAsXHJcbiAgICAgICAgZHJpdmVyOid0ZWRpb3VzJyxcclxuICAgICAgICBzdHJlYW06ZmFsc2UsXHJcbiAgICAgICAgcG9vbDp7XHJcbiAgICAgICAgICAgIG1heDoyMCxcclxuICAgICAgICAgICAgbWluOjAsXHJcbiAgICAgICAgICAgIGlkbGVUaW1lb3V0TWlsbGlzOjMwMDAwLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5lbHNle1xyXG4gICAgVVJJID0ge1xyXG4gICAgICAgIHVzZXIgOiBwcm9jZXNzLmVudi5VU0VSU1FMICxcclxuICAgICAgICBwYXNzd29yZCA6IHByb2Nlc3MuZW52LlBBU1NXT1JEU1FMICxcclxuICAgICAgICBkYXRhYmFzZSA6IHByb2Nlc3MuZW52LkRBVEFCQVNFU1FMICxcclxuICAgICAgICBzZXJ2ZXIgOiBwcm9jZXNzLmVudi5TRVJWRVJTUUwgLFxyXG4gICAgICAgIG9wdGlvbnMgOiB7XHJcbiAgICAgICAgICAgIGVuYWJsZUFyaXRoQWJvcnQgOiB0cnVlICxcclxuICAgICAgICAgICAgZW5jcnlwdCA6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufVxyXG5cclxudmFyIENvbmV4aW9uU1FMID0geyBhYnJpckNvbmV4aW9uOnVuZGVmaW5lZCwgY2VycmFyQ29uZXhpb246dW5kZWZpbmVkLCBhYnJpckNvbmV4aW9uUE9PTDp1bmRlZmluZWQsIGNlcnJhckNvbmV4aW9uUE9PTDp1bmRlZmluZWQgfVxyXG4vLyB2YXIgY29uZXhpb25cclxuLy8gQ29uZXhpb25TUUwuYWJyaXJDb25leGlvbiA9IGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4vLyAgICAgYXdhaXQgbXNzcWwuY29ubmVjdChVUkkpXHJcbi8vICAgICAudGhlbihwb29sPT57XHJcbi8vICAgICAgICAgaWYocG9vbC5fY29ubmVjdGVkKXtcclxuLy8gICAgICAgICAgICAgaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbmVjaW9uIFNRTCBTRVJWRVInLmJsdWUsJyBBQklFUlRBJy5ncmVlbilcclxuLy8gICAgICAgICAgICAgICAgIGNvbmV4aW9uID0gcG9vbFxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGVsc2V7XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBkZSBDb25leGlvbicscG9vbC5fY29ubmVjdGVkKVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH0pXHJcbi8vIH1cclxuLy8gQ29uZXhpb25TUUwuY2VycmFyQ29uZXhpb24gPSBhc3luYyBmdW5jdGlvbiAoKXtcclxuLy8gICAgIGF3YWl0IGNvbmV4aW9uLmNsb3NlKClcclxuLy8gICAgIGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZygnQ29uZWNpb24gU1FMIFNFUlZFUicuYmx1ZSwnIENFUlJBREEnLmdyZWVuKVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5jb25zdCBjb25leGlvbmVzID0ge31cclxuXHJcbkNvbmV4aW9uU1FMLmFicmlyQ29uZXhpb25QT09MID0gYXN5bmMgbmFtZSA9PntcclxuICAgIGlmKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY29uZXhpb25lcyxuYW1lKSl7XHJcbiAgICAgICAgY29uc3QgbmV3Q29uZXhpb24gPSBuZXcgbXNzcWwuQ29ubmVjdGlvblBvb2woVVJJKVxyXG4gICAgICAgIGNvbnN0IGNsb3NlID0gbmV3Q29uZXhpb24uY2xvc2UuYmluZChuZXdDb25leGlvbilcclxuICAgICAgICBuZXdDb25leGlvbi5jbG9zZSA9ICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBjb25leGlvbmVzW25hbWVdXHJcbiAgICAgICAgICAgIHJldHVybiBjbG9zZSguLi5hcmdzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBuZXdDb25leGlvbi5jb25uZWN0KClcclxuICAgICAgICBjb25leGlvbmVzW25hbWVdID0gbmV3Q29uZXhpb25cclxuICAgICAgICByZXR1cm4gY29uZXhpb25lc1tuYW1lXVxyXG4gICAgfVxyXG59XHJcblxyXG5Db25leGlvblNRTC5jZXJyYXJDb25leGlvblBPT0wgPSAoKSA9PntcclxuICAgIHJldHVybiBQcm9taXNlLmFsbChPYmplY3QudmFsdWVzKGNvbmV4aW9uZXMpLm1hcCgocG9vbCk9PntcclxuICAgICAgICByZXR1cm4gcG9vbC5jbG9zZSgpXHJcbiAgICB9KSlcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbmV4aW9uU1FMIiwiY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBjb3JzID0gcmVxdWlyZSgnY29ycycpXHJcbnZhciBtb3JnYW5cclxuXHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgIHJlcXVpcmUoJ2NvbG9ycycpXHJcbiAgICBtb3JnYW4gPSByZXF1aXJlKCdtb3JnYW4nKVxyXG59XHJcbi8vIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52Lk5PREVfRU5WKVxyXG5cclxuY29uc3Qgc2Vydmlkb3IgPSBleHByZXNzKClcclxuc2Vydmlkb3IudXNlKGNvcnMoKSlcclxuXHJcbi8vIG1pZGRlbHdhcmVcclxuXHJcbnNlcnZpZG9yLnVzZShleHByZXNzLmpzb24oKSlcclxuc2Vydmlkb3IudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7ZXh0ZW5kZWQ6IHRydWV9KSlcclxuLy8gc2Vydmlkb3IudXNlKHJlcXVpcmUoJy4vcnV0YXNBcGkvYXV0aEFjY2Vzb3MvYXV0aEFsbFJvdXRlcicpKVxyXG5cclxuXHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICkgeyAgc2Vydmlkb3IudXNlKG1vcmdhbignZGV2JykpIH1cclxuXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9sb2d1ZW8nLHJlcXVpcmUoJy4vcnV0YXNBcGkvTG9ndWVvJykpXHJcbi8vIHNlcnZpZG9yLnVzZSgnL2FwaS9hdXRoUm91dGVyUmVhY3QvYWRtaW4nLHJlcXVpcmUoJy4vcnV0YXNBcGkvYXV0aEFjY2Vzb3NSZWFjdC9hdXRoQWRtaW5Sb3V0ZXJSZWFjdCcpKVxyXG4vLyBzZXJ2aWRvci51c2UoJy9hcGkvYXV0aFJvdXRlclJlYWN0L25pdmVsMScscmVxdWlyZSgnLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDFSb3V0ZXJSZWFjdCcpKVxyXG4vLyBzZXJ2aWRvci51c2UoJy9hcGkvYXV0aFJvdXRlclJlYWN0L25pdmVsMicscmVxdWlyZSgnLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDJSb3V0ZXJSZWFjdCcpKVxyXG4vLyBzZXJ2aWRvci51c2UoJy9hcGkvYXV0aFJvdXRlclJlYWN0L25pdmVsMycscmVxdWlyZSgnLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDNSb3V0ZXJSZWFjdCcpKVxyXG4vLyBzZXJ2aWRvci51c2UoJy9hcGkvYXV0aFJvdXRlclJlYWN0L25pdmVsNCcscmVxdWlyZSgnLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDRSb3V0ZXJSZWFjdCcpKVxyXG4vLyBzZXJ2aWRvci51c2UoJy9hcGkvYXV0aFJvdXRlclJlYWN0L25pdmVsNScscmVxdWlyZSgnLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDVSb3V0ZXJSZWFjdCcpKVxyXG4vLyBzZXJ2aWRvci51c2UoJy9hcGkvdXN1YXJpb3MnLHJlcXVpcmUoJy4vcnV0YXNBcGkvYXV0aEFjY2Vzb3MvYXV0aEFkbWluUm91dGVyJykscmVxdWlyZSgnLi9ydXRhc0FwaS91c3VhcmlvcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvdXN1YXJpb3MnLHJlcXVpcmUoJy4vcnV0YXNBcGkvdXN1YXJpb3MnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL2NhdGVnb3JpYXMnICwgcmVxdWlyZSgnLi9ydXRhc0FwaS9jYXRlZ29yaWFzJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS91bmlkYWRlc01lZGlkYScgLCByZXF1aXJlKCcuL3J1dGFzQXBpL3VuaWRhZGVzTWVkaWRhJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9kaXJlY2Npb25lcycgLCByZXF1aXJlKCcuL3J1dGFzQXBpL2RpcmVjY2lvbmVzJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9hdXRlbnRpZmljYXNpb24nLHJlcXVpcmUoJy4vcnV0YXNBcGkvQXV0ZW50aWZpY2FzaW9uJykpXHJcbi8vXHJcblxyXG4vL1NldHRpbmdzXHJcbnNlcnZpZG9yLnNldCgncG9ydCcscHJvY2Vzcy5lbnYuUE9SVCB8fCA1MDAwKVxyXG5cclxuc2Vydmlkb3IubGlzdGVuKHNlcnZpZG9yLmdldCgncG9ydCcpLChtLGUpPT57XHJcbiAgICBpZihlKXtjb25zb2xlLmxvZyhlKX1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlcnZpZG9yIGNvcnJpZW5kbyBlbiBlbCBQVUVSVE8nLnllbGxvdyxzZXJ2aWRvci5nZXQoJ3BvcnQnKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlcnZpZG9yIGNvcnJpZW5kbyBlbiBlbCBQVUVSVE8nLHNlcnZpZG9yLmdldCgncG9ydCcpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkiLCJjb25zdCBSb3V0ZXIgPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJylcclxuY29uc3QgQ09ORklHID0gcmVxdWlyZSgnLi4vQ09ORklHJylcclxuXHJcbmNvbnN0IHJvdXRlcj1Sb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5nZXQoJy8nLChyZXEscmVzKT0+e1xyXG5cclxuICAgIGlmKCFyZXEuaGVhZGVycy5hdXRob3JpemF0aW9uKXtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonTm8gZW52aW8gZWwgVG9rZW4gZW4gZWwgaGVhZGVycyd9KVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uLnNwbGl0KCcgJylbMV07XHJcbiAgICAgICAgand0LnZlcmlmeSh0b2tlbixDT05GSUcuc2VjcmV0LChlLGQpPT57XHJcbiAgICAgICAgICAgIGlmKGUpe1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5uYW1lfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0pXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyOyIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IGJjcnlwdCA9cmVxdWlyZSgnYmNyeXB0JylcclxuLy8gY29uc3QgVXN1YXJpbyA9IHJlcXVpcmUoJy4uL2VzcXVlbWFzTW9uZ28vZXNxdWVtYVVzdWFyaW9zJylcclxuY29uc3Qge3NlY3JldH0gPSByZXF1aXJlKCcuLi9DT05GSUcnKVxyXG5jb25zdCBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKVxyXG5jb25zdCB7IHRva2VuIH0gPSByZXF1aXJlKCdtb3JnYW4nKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxuXHJcblxyXG5yb3V0ZXIucG9zdCAoICcvJyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGNvbnN0IHsgdXN1YXJpbyAsIHB3IH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSAoJ21zc3FsJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoJ2xvZ3Vlb1VzdWFyaW8nKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCd1c3VhcmlvJyAsIFZhckNoYXIgLCB1c3VhcmlvIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2xvZ2luJylcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIGlmKHJlc3VsdC5yb3dzQWZmZWN0ZWRbMF0gPT09IDAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbiAoIHsgbWVuc2FqZSA6ICdVc3VhcmlvIGluZXhpc3RlbnRlICcgfSApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoICFiY3J5cHQuY29tcGFyZVN5bmMoIHB3ICwgcmVzdWx0LnJlY29yZHNldFswXS5wdyApICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKCB7IG1lbnNhamUgOiAnUGFzc3dvcmQgaW5jb3JyZWN0YSAnIH0gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlVXN1YXJpbyA6IHJlc3VsdC5yZWNvcmRzZXRbMF0ubm9tYnJlVXN1YXJpbyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvVXN1YXJpbyA6IHJlc3VsdC5yZWNvcmRzZXRbMF0uYXBlbGxpZG9Vc3VhcmlvICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpbyA6IHJlc3VsdC5yZWNvcmRzZXRbMF0udXN1YXJpb1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBqd3Quc2lnbiggdXNlciAsIHJlcXVpcmUoJy4uL0NPTkZJRycpLnNlY3JldCAsIHsgZXhwaXJlc0luIDogMTQ0MDAgfSAgLCAgICggZXJyb3IgLCB0b2tlbiApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBlcnJvciApIHsgcmVzLnN0YXR1cygyMDApLmpzb24gKCB7IG1lbnNhamUgOiAnRXJyb3IgYWwgZ2VuZXJhciBlbCB0b2tlbicgfSApICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3Rva2VufSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uIChyZXN1bHQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamUgOiBlLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59IClcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxuLy9UT0RPOiBMSVNUQSBERSBDQVRFR09SSUFTXHJcbnJvdXRlci5nZXQoJy9saXN0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHthYnJpckNvbmV4aW9uUE9PTCxjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdMaXN0YUNhdGVnb3JpYXMnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSgncGFfbGlzdGFDYXRlZ29yaWFzJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0LnJlY29yZHNldClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamUgOiAnRXJyb3IgZW4gZWwgcmVzdWx0YWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplIDogZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogSU5TRVJUQSBDQVRFR09SQVxyXG5cclxucm91dGVyLnBvc3QgKCcvaW5zZXJ0JyAsIGFzeW5jIChyZXEgLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBub21icmVDYXRlZ29yaWEgLCBkZXNjcmlwY2lvbkNhdGVnb3JpYSB9ID0gcmVxLmJvZHlcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdpbnNlcnRDYXRlZ29yaWEnKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgfSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmVDYXRlZ29yaWEnICwgVmFyQ2hhciAsIG5vbWJyZUNhdGVnb3JpYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdkZXNjcmlwY2lvbkNhdGVnb3JpYScgLCBWYXJDaGFyICwgZGVzY3JpcGNpb25DYXRlZ29yaWEgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfaW5zZXJ0Q2F0ZWdvcmlhJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidDYXRlZ29yaWEgZ3VhcmRhZGEgZXhpdG9zYW1lbnRlJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBVUERBVEUgQ0FURUdPUklBXHJcblxyXG5yb3V0ZXIucHV0KCcvdXBkYXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7bm9tYnJlQ2F0ZWdvcmlhLGRlc2NyaXBjaW9uQ2F0ZWdvcmlhLGlkQ2F0ZWdvcmlhfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCd1cGRhdGVDYXRlZ29yaWEnKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZUNhdGVnb3JpYScgLCBtc3NxbC5WYXJDaGFyICwgbm9tYnJlQ2F0ZWdvcmlhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2Rlc2NyaXBjaW9uQ2F0ZWdvcmlhJyAsIG1zc3FsLlZhckNoYXIgLCBkZXNjcmlwY2lvbkNhdGVnb3JpYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZENhdGVnb3JpYScgLCBtc3NxbC5JbnQgLCBpZENhdGVnb3JpYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV91cGRhdGVDYXRlZ29yaWEnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J0NhdGVnb3JpYSBtb2RpZmljYWRhIGV4aXRvc2FtZW50ZSd9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbyd9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogREVMRVRFIENBVDZFR09SSUFcclxuXHJcbnJvdXRlci5wb3N0KCcvZGVsZXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7aWRDYXRlZ29yaWF9ID0gcmVxLmJvZHkgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ2RlbGV0ZUNhdGVnb3JpYScpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRDYXRlZ29yaWEnICwgbXNzcWwuSW50ICwgaWRDYXRlZ29yaWEgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfZGVsZXRlQ2F0ZWdvcmlhJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidDYXRlZ29yaWEgZWxpbWluYWRhIGV4aXRvc2FtZW50ZSd9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbyd9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxuLy9UT0RPOiBMSVNUQSBERSBESVJFQ0NJT05FU1xyXG5yb3V0ZXIuZ2V0KCcvbGlzdCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wsY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgICAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnTGlzdGFEaXJlY2Npb25lcycpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlKCdwYV9saXN0YURpcmVjY2lvbmVzJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0LnJlY29yZHNldClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamUgOiAnRXJyb3IgZW4gZWwgcmVzdWx0YWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplIDogZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogSU5TRVJUQSBESVJFQ0NJT05cclxuXHJcbnJvdXRlci5wb3N0ICgnL2luc2VydCcgLCBhc3luYyAocmVxICwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0eyBcclxuICAgICAgICAgICAgICAgIGNhbGxlRGlyZWNjaW9uICwgXHJcbiAgICAgICAgICAgICAgICBhbHR1cmFEaXJlY2Npb24gLCBcclxuICAgICAgICAgICAgICAgIGNvZGlnb1Bvc3RhbERpcmVjY2lvbiAsIFxyXG4gICAgICAgICAgICAgICAgYmFycmlvRGlyZWNjaW9uICwgXHJcbiAgICAgICAgICAgICAgICBvdHJvc0RhdG9zRGlyZWNjaW9uIFxyXG4gICAgICAgICAgICAgfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnaW5zZXJ0RGlyZWNjaW9uJylcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnY2FsbGVEaXJlY2Npb24nICwgVmFyQ2hhciAsIGNhbGxlRGlyZWNjaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2FsdHVyYURpcmVjY2lvbicgLCBJbnQgLCBhbHR1cmFEaXJlY2Npb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnY29kaWdvUG9zdGFsRGlyZWNjaW9uJyAsIEludCAsIGNvZGlnb1Bvc3RhbERpcmVjY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdiYXJyaW9EaXJlY2Npb24nICwgVmFyQ2hhciAsIGJhcnJpb0RpcmVjY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdvdHJvc0RhdG9zRGlyZWNjaW9uJyAsIFZhckNoYXIgLCBvdHJvc0RhdG9zRGlyZWNjaW9uIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2luc2VydERpcmVjY2lvbicpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonRGlyZWNjaW9uIGd1YXJkYWRhIGV4aXRvc2FtZW50ZSd9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbyd9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogVVBEQVRFIERJUkVDQ0lPTlxyXG5cclxucm91dGVyLnB1dCgnL3VwZGF0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3R7IFxyXG4gICAgICAgICAgICBjYWxsZURpcmVjY2lvbiAsIFxyXG4gICAgICAgICAgICBhbHR1cmFEaXJlY2Npb24gLCBcclxuICAgICAgICAgICAgY29kaWdvUG9zdGFsRGlyZWNjaW9uICwgXHJcbiAgICAgICAgICAgIGJhcnJpb0RpcmVjY2lvbiAsIFxyXG4gICAgICAgICAgICBvdHJvc0RhdG9zRGlyZWNjaW9uICxcclxuICAgICAgICAgICAgaWREaXJlY2Npb25cclxuICAgICAgICAgfSA9IHJlcS5ib2R5ICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ3VwZGF0ZURpcmVjY2lvbicpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnY2FsbGVEaXJlY2Npb24nICwgbXNzcWwuVmFyQ2hhciAsIGNhbGxlRGlyZWNjaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2FsdHVyYURpcmVjY2lvbicgLCBtc3NxbC5JbnQgLCBhbHR1cmFEaXJlY2Npb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnY29kaWdvUG9zdGFsRGlyZWNjaW9uJyAsIG1zc3FsLkludCAsIGNvZGlnb1Bvc3RhbERpcmVjY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdiYXJyaW9EaXJlY2Npb24nICwgbXNzcWwuVmFyQ2hhciAsIGJhcnJpb0RpcmVjY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdvdHJvc0RhdG9zRGlyZWNjaW9uJyAsIG1zc3FsLlZhckNoYXIgLCBvdHJvc0RhdG9zRGlyZWNjaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkRGlyZWNjaW9uJyAsIG1zc3FsLkludCAsIGlkRGlyZWNjaW9uIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX3VwZGF0ZURpcmVjY2lvbicpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonRGlyZWNjaW9uIG1vZGlmaWNhZGEgZXhpdG9zYW1lbnRlJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBERUxFVEUgRElSRUNJT05cclxuXHJcbnJvdXRlci5wb3N0KCcvZGVsZXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7aWREaXJlY2Npb259ID0gcmVxLmJvZHkgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ2RlbGV0ZURpcmVjY2lvbicpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWREaXJlY2Npb24nICwgbXNzcWwuSW50ICwgaWREaXJlY2Npb24gKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfZGVsZXRlRGlyZWNjaW9uJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidEaXJlY2Npb24gZWxpbWluYWRhIGV4aXRvc2FtZW50ZSd9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbyd9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxuLy9UT0RPOiBMSVNUQSBERSBVTklEQURFUyBERSBNRURJREFcclxucm91dGVyLmdldCgnL2xpc3QnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3Qge2FicmlyQ29uZXhpb25QT09MLGNlcnJhckNvbmV4aW9uUE9PTH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICAgICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ0xpc3RhVW5pZGFkZXNNZWRpZGEnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSgncGFfbGlzdGFVbmlkYWRlc01lZGlhJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0LnJlY29yZHNldClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamUgOiAnRXJyb3IgZW4gZWwgcmVzdWx0YWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplIDogZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogSU5TRVJUQSBVTklEQUQgREUgTUVESURBXHJcblxyXG5yb3V0ZXIucG9zdCAoJy9pbnNlcnQnICwgYXN5bmMgKHJlcSAsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IG5vbWJyZVVuaWRhZE1lZGlkYSAsIGRlc2NyaXBjaW9uVW5pZGFkTWVkaWRhIH0gPSByZXEuYm9keVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ2luc2VydFVuaWRhZE1hZGlkYScpXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZVVuaWRhZE1lZGlkYScgLCBWYXJDaGFyICwgbm9tYnJlVW5pZGFkTWVkaWRhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2Rlc2NyaXBjaW9uVW5pZGFkTWVkaWRhJyAsIFZhckNoYXIgLCBkZXNjcmlwY2lvblVuaWRhZE1lZGlkYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9pbnNlcnRVbmlkYWRNZWRpZGEnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J1VuaWRhZGUgZGUgbWVkaWRhIGd1YXJkYWRhIGV4aXRvc2FtZW50ZSd9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbyd9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogVVBEQVRFIFVOSURBRCBERSBNRURJREFcclxuXHJcbnJvdXRlci5wdXQoJy91cGRhdGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtub21icmVVbmlkYWRNZWRpZGEsZGVzY3JpcGNpb25VbmlkYWRNZWRpZGEsaWRVbmlkYWRNZWRpZGF9ID0gcmVxLmJvZHkgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ3VwZGF0ZVVuaWRhZE1lZGlkYScpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlVW5pZGFkTWVkaWRhJyAsIG1zc3FsLlZhckNoYXIgLCBub21icmVVbmlkYWRNZWRpZGEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZGVzY3JpcGNpb25VbmlkYWRNZWRpZGEnICwgbXNzcWwuVmFyQ2hhciAsIGRlc2NyaXBjaW9uVW5pZGFkTWVkaWRhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVW5pZGFkTWVkaWRhJyAsIG1zc3FsLkludCAsIGlkVW5pZGFkTWVkaWRhIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX3VwZGF0ZVVuaWRhZE1lZGlkYScpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonVW5pZGFkIGRlIG1lZGlkYSBtb2RpZmljYWRhIGV4aXRvc2FtZW50ZSd9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbyd9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogREVMRVRFIFVOSURBRCBNRURJREFcclxuXHJcbnJvdXRlci5wb3N0KCcvZGVsZXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7aWRVbmlkYWRNZWRpZGF9ID0gcmVxLmJvZHkgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ2RlbGV0ZVVuaWRhZE1lZGlkYScpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRVbmlkYWRNZWRpZGEnICwgbXNzcWwuSW50ICwgaWRVbmlkYWRNZWRpZGEgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfZGVsZXRlVW5pZGFkTWVkaWRhJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidVbmlkYWQgZGUgbWVkaWRhIGVsaW1pbmFkYSBleGl0b3NhbWVudGUnfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IGJjcnlwID0gcmVxdWlyZSgnYmNyeXB0JylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG4vLyAhIGluc2VydGFyIHVzdWFyaW9cclxuXHJcbnJvdXRlci5wb3N0ICggJy9pbnNlcnQnICwgYXN5bmMgKHJlcSwgcmVzICkgPT4ge1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUgKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBjb25zdCB7IG5vbWJyZVVzdWFyaW8gLCBhcGVsbGlkb1VzdWFyaW8gLCB1c3VhcmlvICwgcHcgfSA9IHJlcS5ib2R5XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ2luc2VydFVzdWFyaW8nKVxyXG4gICAgICAgIGNvbnN0IHtSZXF1ZXN0ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSAoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICgnbm9tYnJlVXN1YXJpbycgLCBWYXJDaGFyICwgbm9tYnJlVXN1YXJpbylcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCdhcGVsbGlkb1VzdWFyaW8nICwgVmFyQ2hhciAsIGFwZWxsaWRvVXN1YXJpbylcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCd1c3VhcmlvJyAsIFZhckNoYXIgLCB1c3VhcmlvKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoJ3B3JyAsIFZhckNoYXIgLCBiY3J5cC5oYXNoU3luYyhwdyAsIDEwKSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoICdwYV9pbnNlcnRVc3VhcmlvJyApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKCB7IG1lbnNhamUgOiAnVXN1YXJpbyBpbnNlcnRhZG8gY29ycmVjdGFtZW50ZSAnIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxuXHJcblxyXG4vLyAvLyAhIGxpc3RhZG8gZGUgdXN1YXJpb3NcclxuLy8gcm91dGVyLmdldCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbi8vICAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUgKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbi8vICAgICB0cnl7XHJcbi8vICAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCggJ2xpYXN0YVVzdWFyaW8nKVxyXG4vLyAgICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4vLyAgICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0KGNvbmV4aW9uKVxyXG4vLyAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlKCdwYV9saXN0YVVzdWFyaW9zJylcclxuLy8gICAgICAgICBpZihyZXN1bHQpe1xyXG4vLyAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4vLyAgICAgICAgICAgICByZXMuanNvbihyZXN1bHQucmVjb3Jkc2V0KVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBlbHNle1xyXG4vLyAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4vLyAgICAgICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7c3RhdHVzOiA0MDMsbWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgIGNhdGNoKGUpe1xyXG4vLyAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbi8vICAgICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oe3N0YXR1czogNDAzLG1lbnNhamU6ZS5tZXNzYWdlfSlcclxuLy8gICAgIH1cclxuLy8gfSlcclxuLy8gLy8hIGxpc3RhIGRlIHBlcmZpbGVzXHJcbi8vIHJvdXRlci5nZXQoJy9wZXJmaWxlcycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbi8vICAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUgKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbi8vICAgICB0cnl7XHJcbi8vICAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCggJ2xpc3RhUGVyZmlsZXMnKVxyXG4vLyAgICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4vLyAgICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0KGNvbmV4aW9uKVxyXG4vLyAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlKCdwYV9saXN0YVBlcmZpbGVzJylcclxuLy8gICAgICAgICBpZihyZXN1bHQpe1xyXG4vLyAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4vLyAgICAgICAgICAgICByZXMuanNvbihyZXN1bHQucmVjb3Jkc2V0KVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBlbHNle1xyXG4vLyAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4vLyAgICAgICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7c3RhdHVzOiA0MDMsbWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgIGNhdGNoKGUpe1xyXG4vLyAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbi8vICAgICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oe3N0YXR1czogNDAzLG1lbnNhamU6ZS5tZXNzYWdlfSlcclxuLy8gICAgIH1cclxuLy8gfSlcclxuLy8gLy8hIGNvbnN1bHRhIHVzdWFyaW8gcG9yIGlkXHJcbi8vIHJvdXRlci5nZXQoJy86aWQnLGFzeW5jIChyZXEscmVzKT0+e1xyXG4vLyAgICAgY29uc3QgaWQgPSByZXEucGFyYW1zLmlkXHJcbi8vICAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUgKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbi8vICAgICB0cnl7XHJcbi8vICAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCggJ2dldFVzZXhJZCcpXHJcbi8vICAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbi8vICAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QoY29uZXhpb24pXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFVzdWFyaW8nICwgbXNzcWwuSW50ICwgaWQpXHJcbi8vICAgICAgICAgY29uc3QgcXVlcnkgPSBgc2VsZWN0XHJcbi8vICAgICAgICAgdS5pZCBhcyBpZFVzdWFyaW8gLFxyXG4vLyAgICAgICAgIHUudXNlck5hbWUgYXMgdXNlck5hbWUgLFxyXG4vLyAgICAgICAgIHUuZW1haWwgYXMgZW1haWwgLFxyXG4vLyAgICAgICAgIHUubm9tYnJlIGFzIG5vbWJyZVVzdWFyaW8gLFxyXG4vLyAgICAgICAgIHUuYXBlbGxpZG8gYXMgYXBlbGxpZG9Vc3VhcmlvICxcclxuLy8gICAgICAgICBwLmlkIGFzIGlkUGVyZmlsICxcclxuLy8gICAgICAgICBwLm5vbWJyZSBhcyBub21icmVQZXJmaWxcclxuLy8gICAgICAgICBmcm9tIHVzdWFyaW9zIHVcclxuLy8gICAgICAgICBqb2luIHBlcmZpbGVzIHAgb24gcC5pZCA9IHUuaWRfcGVyZmlsXHJcbi8vICAgICAgICAgd2hlcmUgdS5pZCA9IEBpZFVzdWFyaW9gXHJcbi8vICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5KHF1ZXJ5KVxyXG4vLyAgICAgICAgIGlmKHJlc3VsdCl7XHJcbi8vICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbi8vICAgICAgICAgICAgIHJlcy5qc29uKHJlc3VsdC5yZWNvcmRzZXQpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGVsc2V7XHJcbi8vICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbi8vICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtzdGF0dXM6IDQwMyxtZW5zYWplOmUubWVzc2FnZX0pXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgY2F0Y2goZSl7XHJcbi8vICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7c3RhdHVzOiA0MDMsbWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG5cclxuLy8gLy8hZ3VhcmRhIHVzdWFyaW9cclxuLy8gcm91dGVyLnBvc3QoJy8nLGFzeW5jIChyZXEscmVzKT0+e1xyXG4vLyAgICAgY29uc3Qge2FicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuLy8gICAgIGNvbnN0ICB7dXNlck5hbWUscGFzc3dvcmQsZW1haWwsbm9tYnJlLGFwZWxsaWRvLGlkUGVyZmlsfSA9IHJlcS5ib2R5XHJcbi8vICAgICB0cnl7XHJcbi8vICAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnc2F2ZVVzZXInKVxyXG4vLyAgICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSAoJ21zc3FsJylcclxuLy8gICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdChjb25leGlvbilcclxuLy8gICAgICAgICBjb25zdCBwdyA9IGJjcnlwLmhhc2hTeW5jKHBhc3N3b3JkLDEwKVxyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHB3KVxyXG4vLyAgICAgICAgIG15UmVxdWVzdC5pbnB1dCgndXNlck5hbWUnICwgbXNzcWwuVmFyQ2hhciAsIHVzZXJOYW1lKVxyXG4vLyAgICAgICAgIG15UmVxdWVzdC5pbnB1dCgncGFzc3dvcmQnICwgbXNzcWwuVmFyQ2hhciAsIHB3KVxyXG4vLyAgICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZW1haWwnICwgbXNzcWwuVmFyQ2hhciAsIGVtYWlsKVxyXG4vLyAgICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlJyAsIG1zc3FsLlZhckNoYXIgLCBub21icmUpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdhcGVsbGlkbycgLCBtc3NxbC5WYXJDaGFyICwgYXBlbGxpZG8pXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFBlcmZpbCcgLCBtc3NxbC5JbnQgLCBpZFBlcmZpbClcclxuLy8gICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSgncGFfaW5zZXJ0VXN1YXJpb3MnKVxyXG4vLyAgICAgICAgIGlmKHJlc3VsdCl7XHJcbi8vICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuLy8gICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOiAndXN1YXJpbyBpbnNlcnRhZG8gY29ycmVjdGFtZW50ZSAhJyB9KVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgIGNhdGNoKGVycil7XHJcbi8vICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7ZXJyb3I6ZXJyLm1lc3NhZ2V9KVxyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG5cclxuLy8gcm91dGVyLnB1dCgnLycsIGFzeW5jIChyZXEscmVzKT0+e1xyXG4vLyAgICAgY29uc3Qge2FicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuLy8gICAgIGNvbnN0ICB7dXNlck5hbWUscGFzc3dvcmQsZW1haWwsbm9tYnJlLGFwZWxsaWRvLGlkUGVyZmlsICwgaWRVc3VhcmlvfSA9IHJlcS5ib2R5XHJcbi8vICAgICB0cnl7XHJcbi8vICAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgndXBkYXRlVXNlcicpXHJcbi8vICAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlICgnbXNzcWwnKVxyXG4vLyAgICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0KGNvbmV4aW9uKVxyXG4vLyAgICAgICAgIG15UmVxdWVzdC5pbnB1dCgndXNlck5hbWUnICwgbXNzcWwuVmFyQ2hhciAsIHVzZXJOYW1lKVxyXG4vLyAgICAgICAgIG15UmVxdWVzdC5pbnB1dCgncGFzc3dvcmQnICwgbXNzcWwuVmFyQ2hhciAsIGJjcnlwLmhhc2hTeW5jKHBhc3N3b3JkKSlcclxuLy8gICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2VtYWlsJyAsIG1zc3FsLlZhckNoYXIgLCBlbWFpbClcclxuLy8gICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZScgLCBtc3NxbC5WYXJDaGFyICwgbm9tYnJlKVxyXG4vLyAgICAgICAgIG15UmVxdWVzdC5pbnB1dCgnYXBlbGxpZG8nICwgbXNzcWwuVmFyQ2hhciAsIGFwZWxsaWRvKVxyXG4vLyAgICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRQZXJmaWwnICwgbXNzcWwuSW50ICwgaWRQZXJmaWwpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFVzdWFyaW8nICwgbXNzcWwuSW50ICwgaWRVc3VhcmlvKVxyXG4vLyAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlKCdwYV91cGRhdGVVc3VhcmlvcycpXHJcbi8vICAgICAgICAgaWYocmVzdWx0KXtcclxuLy8gICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4vLyAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6ICd1c3VhcmlvIGluc2VydGFkbyBjb3JyZWN0YW1lbnRlICEnIH0pXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgY2F0Y2goZSl7XHJcbi8vICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7ZXJyb3I6ZXJyLm1lc3NhZ2V9KVxyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbG9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtc3NxbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9