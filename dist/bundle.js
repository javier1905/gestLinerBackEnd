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
servidor.use('/api/marcas', __webpack_require__(/*! ./rutasApi/marcas */ "./rutasApi/marcas.js"));
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
        mensaje: 'Marca guardada exitosamente'
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
        mensaje: 'Marca modificada exitosamente'
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
        mensaje: 'Marca eliminada exitosamente'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ09ORklHLmpzIiwid2VicGFjazovLy8uL2NvbmV4aW9uZXMvc3FsU2VydmVyLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL0F1dGVudGlmaWNhc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9Mb2d1ZW8uanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvY2F0ZWdvcmlhcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9kaXJlY2Npb25lcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9tYXJjYXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvdW5pZGFkZXNNZWRpZGEuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvdXN1YXJpb3MuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmNyeXB0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29sb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb3JnYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtc3NxbFwiIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJzZWNyZXQiLCJtc3NxbCIsInJlcXVpcmUiLCJwcm9jZXNzIiwiVVJJIiwidXNlciIsInBhc3N3b3JkIiwiZGF0YWJhc2UiLCJzZXJ2ZXIiLCJvcHRpb25zIiwiYXBwTmFtZSIsImVuYWJsZUFyaXRoQWJvcnQiLCJlbmNyeXB0IiwiY29ubmVjdGlvblRpbWVPdXQiLCJkcml2ZXIiLCJzdHJlYW0iLCJwb29sIiwibWF4IiwibWluIiwiaWRsZVRpbWVvdXRNaWxsaXMiLCJDb25leGlvblNRTCIsImFicmlyQ29uZXhpb24iLCJ1bmRlZmluZWQiLCJjZXJyYXJDb25leGlvbiIsImFicmlyQ29uZXhpb25QT09MIiwiY2VycmFyQ29uZXhpb25QT09MIiwiY29uZXhpb25lcyIsIm5hbWUiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJuZXdDb25leGlvbiIsIkNvbm5lY3Rpb25Qb29sIiwiY2xvc2UiLCJiaW5kIiwiYXJncyIsImNvbm5lY3QiLCJQcm9taXNlIiwiYWxsIiwidmFsdWVzIiwibWFwIiwiZXhwcmVzcyIsImNvcnMiLCJtb3JnYW4iLCJzZXJ2aWRvciIsInVzZSIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJzZXQiLCJlbnYiLCJQT1JUIiwibGlzdGVuIiwiZ2V0IiwibSIsImUiLCJjb25zb2xlIiwibG9nIiwieWVsbG93IiwiUm91dGVyIiwiand0IiwiQ09ORklHIiwicm91dGVyIiwicmVxIiwicmVzIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJzdGF0dXMiLCJtZW5zYWplIiwidG9rZW4iLCJzcGxpdCIsInZlcmlmeSIsImQiLCJiY3J5cHQiLCJwb3N0IiwidXN1YXJpbyIsInB3IiwiYm9keSIsIlJlcXVlc3QiLCJWYXJDaGFyIiwiY29uZXhpb24iLCJteVJlcXVlc3QiLCJpbnB1dCIsInJlc3VsdCIsImV4ZWN1dGUiLCJyb3dzQWZmZWN0ZWQiLCJjb21wYXJlU3luYyIsInJlY29yZHNldCIsIm5vbWJyZVVzdWFyaW8iLCJhcGVsbGlkb1VzdWFyaW8iLCJzaWduIiwiZXhwaXJlc0luIiwiZXJyb3IiLCJtZXNzYWdlIiwibm9tYnJlQ2F0ZWdvcmlhIiwiZGVzY3JpcGNpb25DYXRlZ29yaWEiLCJwdXQiLCJpZENhdGVnb3JpYSIsIkludCIsImNhbGxlRGlyZWNjaW9uIiwiYWx0dXJhRGlyZWNjaW9uIiwiY29kaWdvUG9zdGFsRGlyZWNjaW9uIiwiYmFycmlvRGlyZWNjaW9uIiwib3Ryb3NEYXRvc0RpcmVjY2lvbiIsImlkRGlyZWNjaW9uIiwibm9tYnJlTWFyY2EiLCJpZE1hcmNhIiwibm9tYnJlVW5pZGFkTWVkaWRhIiwiZGVzY3JpcGNpb25VbmlkYWRNZWRpZGEiLCJpZFVuaWRhZE1lZGlkYSIsImJjcnlwIiwiaGFzaFN5bmMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2JDLFFBQU0sRUFBQztBQURNLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDQUEsTUFBTUMsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLG9CQUFELENBQXJCOztBQUNBLElBQUdDLElBQUgsRUFBMEM7QUFBRUQscUJBQU8sQ0FBQyxzQkFBRCxDQUFQO0FBQW1COztBQUUvRCxJQUFJRSxHQUFKOztBQUVBLElBQUdELElBQUgsRUFBMEM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBzZWNyZXQ6J21hc3RlclNvZnQyMDIwJ1xyXG59IiwiY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpO1xyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7IHJlcXVpcmUoJ2NvbG9ycycpIH1cclxuXHJcbnZhciBVUklcclxuXHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgIC8vIFVSSSA9IHtcclxuICAgIC8vICAgICB1c2VyOiBcclxuICAgIC8vICAgICBwYXNzd29yZDogXHJcbiAgICAvLyAgICAgZGF0YWJhc2U6IFxyXG4gICAgLy8gICAgIHBvcnQ6MTQzMyxcclxuICAgIC8vICAgICBzZXJ2ZXI6J1xyXG4gICAgLy8gICAgIG9wdGlvbnM6e1xyXG4gICAgLy8gICAgICAgICBhcHBOYW1lOlxyXG4gICAgLy8gICAgICAgICBlbmFibGVBcml0aEFib3J0OnRydWUsXHJcbiAgICAvLyAgICAgICAgIGVuY3J5cHQ6ZmFsc2VcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgLFxyXG4gICAgLy8gICAgIGNvbm5lY3Rpb25UaW1lT3V0OjE1MDAwMCxcclxuICAgIC8vICAgICBkcml2ZXI6J3RlZGlvdXMnLFxyXG4gICAgLy8gICAgIHN0cmVhbTpmYWxzZSxcclxuICAgIC8vICAgICBwb29sOntcclxuICAgIC8vICAgICAgICAgbWF4OjIwLFxyXG4gICAgLy8gICAgICAgICBtaW46MCxcclxuICAgIC8vICAgICAgICAgaWRsZVRpbWVvdXRNaWxsaXM6MzAwMDAsXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy9WSjczMDBcclxuICAgIC8vIH1cclxuICAgIFVSSSA9IHtcclxuICAgICAgICB1c2VyOiAnZ2VzdExpbmVfU1FMTG9naW5fMScsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdsdHA2eG11cDN0JyxcclxuICAgICAgICBkYXRhYmFzZTogJ2dlc3RMaW5lREInLFxyXG4gICAgICAgIHNlcnZlcjonZ2VzdExpbmVEQi5tc3NxbC5zb21lZS5jb20nLFxyXG4gICAgICAgIG9wdGlvbnM6e1xyXG4gICAgICAgICAgICBhcHBOYW1lOidtYXN0ZXJTb2Z0LUFQSScsXHJcbiAgICAgICAgICAgIGVuYWJsZUFyaXRoQWJvcnQ6dHJ1ZSxcclxuICAgICAgICAgICAgZW5jcnlwdDpmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICAsXHJcbiAgICAgICAgY29ubmVjdGlvblRpbWVPdXQ6MTUwMDAwLFxyXG4gICAgICAgIGRyaXZlcjondGVkaW91cycsXHJcbiAgICAgICAgc3RyZWFtOmZhbHNlLFxyXG4gICAgICAgIHBvb2w6e1xyXG4gICAgICAgICAgICBtYXg6MjAsXHJcbiAgICAgICAgICAgIG1pbjowLFxyXG4gICAgICAgICAgICBpZGxlVGltZW91dE1pbGxpczozMDAwMCxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZWxzZXtcclxuICAgIFVSSSA9IHtcclxuICAgICAgICB1c2VyIDogcHJvY2Vzcy5lbnYuVVNFUlNRTCAsXHJcbiAgICAgICAgcGFzc3dvcmQgOiBwcm9jZXNzLmVudi5QQVNTV09SRFNRTCAsXHJcbiAgICAgICAgZGF0YWJhc2UgOiBwcm9jZXNzLmVudi5EQVRBQkFTRVNRTCAsXHJcbiAgICAgICAgc2VydmVyIDogcHJvY2Vzcy5lbnYuU0VSVkVSU1FMICxcclxuICAgICAgICBvcHRpb25zIDoge1xyXG4gICAgICAgICAgICBlbmFibGVBcml0aEFib3J0IDogdHJ1ZSAsXHJcbiAgICAgICAgICAgIGVuY3J5cHQgOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciBDb25leGlvblNRTCA9IHsgYWJyaXJDb25leGlvbjp1bmRlZmluZWQsIGNlcnJhckNvbmV4aW9uOnVuZGVmaW5lZCwgYWJyaXJDb25leGlvblBPT0w6dW5kZWZpbmVkLCBjZXJyYXJDb25leGlvblBPT0w6dW5kZWZpbmVkIH1cclxuLy8gdmFyIGNvbmV4aW9uXHJcbi8vIENvbmV4aW9uU1FMLmFicmlyQ29uZXhpb24gPSBhc3luYyBmdW5jdGlvbiAoKXtcclxuLy8gICAgIGF3YWl0IG1zc3FsLmNvbm5lY3QoVVJJKVxyXG4vLyAgICAgLnRoZW4ocG9vbD0+e1xyXG4vLyAgICAgICAgIGlmKHBvb2wuX2Nvbm5lY3RlZCl7XHJcbi8vICAgICAgICAgICAgIGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb25lY2lvbiBTUUwgU0VSVkVSJy5ibHVlLCcgQUJJRVJUQScuZ3JlZW4pXHJcbi8vICAgICAgICAgICAgICAgICBjb25leGlvbiA9IHBvb2xcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBlbHNle1xyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZGUgQ29uZXhpb24nLHBvb2wuX2Nvbm5lY3RlZClcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9KVxyXG4vLyB9XHJcbi8vIENvbmV4aW9uU1FMLmNlcnJhckNvbmV4aW9uID0gYXN5bmMgZnVuY3Rpb24gKCl7XHJcbi8vICAgICBhd2FpdCBjb25leGlvbi5jbG9zZSgpXHJcbi8vICAgICBpZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coJ0NvbmVjaW9uIFNRTCBTRVJWRVInLmJsdWUsJyBDRVJSQURBJy5ncmVlbilcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuY29uc3QgY29uZXhpb25lcyA9IHt9XHJcblxyXG5Db25leGlvblNRTC5hYnJpckNvbmV4aW9uUE9PTCA9IGFzeW5jIG5hbWUgPT57XHJcbiAgICBpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmV4aW9uZXMsbmFtZSkpe1xyXG4gICAgICAgIGNvbnN0IG5ld0NvbmV4aW9uID0gbmV3IG1zc3FsLkNvbm5lY3Rpb25Qb29sKFVSSSlcclxuICAgICAgICBjb25zdCBjbG9zZSA9IG5ld0NvbmV4aW9uLmNsb3NlLmJpbmQobmV3Q29uZXhpb24pXHJcbiAgICAgICAgbmV3Q29uZXhpb24uY2xvc2UgPSAoLi4uYXJncykgPT4ge1xyXG4gICAgICAgICAgICBkZWxldGUgY29uZXhpb25lc1tuYW1lXVxyXG4gICAgICAgICAgICByZXR1cm4gY2xvc2UoLi4uYXJncylcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgbmV3Q29uZXhpb24uY29ubmVjdCgpXHJcbiAgICAgICAgY29uZXhpb25lc1tuYW1lXSA9IG5ld0NvbmV4aW9uXHJcbiAgICAgICAgcmV0dXJuIGNvbmV4aW9uZXNbbmFtZV1cclxuICAgIH1cclxufVxyXG5cclxuQ29uZXhpb25TUUwuY2VycmFyQ29uZXhpb25QT09MID0gKCkgPT57XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LnZhbHVlcyhjb25leGlvbmVzKS5tYXAoKHBvb2wpPT57XHJcbiAgICAgICAgcmV0dXJuIHBvb2wuY2xvc2UoKVxyXG4gICAgfSkpXHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBDb25leGlvblNRTCIsImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3QgY29ycyA9IHJlcXVpcmUoJ2NvcnMnKVxyXG52YXIgbW9yZ2FuXHJcblxyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbiAgICByZXF1aXJlKCdjb2xvcnMnKVxyXG4gICAgbW9yZ2FuID0gcmVxdWlyZSgnbW9yZ2FuJylcclxufVxyXG4vLyBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5OT0RFX0VOVilcclxuXHJcbmNvbnN0IHNlcnZpZG9yID0gZXhwcmVzcygpXHJcbnNlcnZpZG9yLnVzZShjb3JzKCkpXHJcblxyXG4vLyBtaWRkZWx3YXJlXHJcblxyXG5zZXJ2aWRvci51c2UoZXhwcmVzcy5qc29uKCkpXHJcbnNlcnZpZG9yLnVzZShleHByZXNzLnVybGVuY29kZWQoe2V4dGVuZGVkOiB0cnVlfSkpXHJcbi8vIHNlcnZpZG9yLnVzZShyZXF1aXJlKCcuL3J1dGFzQXBpL2F1dGhBY2Nlc29zL2F1dGhBbGxSb3V0ZXInKSlcclxuXHJcblxyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyApIHsgIHNlcnZpZG9yLnVzZShtb3JnYW4oJ2RldicpKSB9XHJcblxyXG5zZXJ2aWRvci51c2UoJy9hcGkvbG9ndWVvJyxyZXF1aXJlKCcuL3J1dGFzQXBpL0xvZ3VlbycpKVxyXG4vLyBzZXJ2aWRvci51c2UoJy9hcGkvYXV0aFJvdXRlclJlYWN0L2FkbWluJyxyZXF1aXJlKCcuL3J1dGFzQXBpL2F1dGhBY2Nlc29zUmVhY3QvYXV0aEFkbWluUm91dGVyUmVhY3QnKSlcclxuLy8gc2Vydmlkb3IudXNlKCcvYXBpL2F1dGhSb3V0ZXJSZWFjdC9uaXZlbDEnLHJlcXVpcmUoJy4vcnV0YXNBcGkvYXV0aEFjY2Vzb3NSZWFjdC9hdXRoTml2ZWwxUm91dGVyUmVhY3QnKSlcclxuLy8gc2Vydmlkb3IudXNlKCcvYXBpL2F1dGhSb3V0ZXJSZWFjdC9uaXZlbDInLHJlcXVpcmUoJy4vcnV0YXNBcGkvYXV0aEFjY2Vzb3NSZWFjdC9hdXRoTml2ZWwyUm91dGVyUmVhY3QnKSlcclxuLy8gc2Vydmlkb3IudXNlKCcvYXBpL2F1dGhSb3V0ZXJSZWFjdC9uaXZlbDMnLHJlcXVpcmUoJy4vcnV0YXNBcGkvYXV0aEFjY2Vzb3NSZWFjdC9hdXRoTml2ZWwzUm91dGVyUmVhY3QnKSlcclxuLy8gc2Vydmlkb3IudXNlKCcvYXBpL2F1dGhSb3V0ZXJSZWFjdC9uaXZlbDQnLHJlcXVpcmUoJy4vcnV0YXNBcGkvYXV0aEFjY2Vzb3NSZWFjdC9hdXRoTml2ZWw0Um91dGVyUmVhY3QnKSlcclxuLy8gc2Vydmlkb3IudXNlKCcvYXBpL2F1dGhSb3V0ZXJSZWFjdC9uaXZlbDUnLHJlcXVpcmUoJy4vcnV0YXNBcGkvYXV0aEFjY2Vzb3NSZWFjdC9hdXRoTml2ZWw1Um91dGVyUmVhY3QnKSlcclxuLy8gc2Vydmlkb3IudXNlKCcvYXBpL3VzdWFyaW9zJyxyZXF1aXJlKCcuL3J1dGFzQXBpL2F1dGhBY2Nlc29zL2F1dGhBZG1pblJvdXRlcicpLHJlcXVpcmUoJy4vcnV0YXNBcGkvdXN1YXJpb3MnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3VzdWFyaW9zJyxyZXF1aXJlKCcuL3J1dGFzQXBpL3VzdWFyaW9zJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9jYXRlZ29yaWFzJyAsIHJlcXVpcmUoJy4vcnV0YXNBcGkvY2F0ZWdvcmlhcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvdW5pZGFkZXNNZWRpZGEnICwgcmVxdWlyZSgnLi9ydXRhc0FwaS91bmlkYWRlc01lZGlkYScpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvZGlyZWNjaW9uZXMnICwgcmVxdWlyZSgnLi9ydXRhc0FwaS9kaXJlY2Npb25lcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvbWFyY2FzJyAsIHJlcXVpcmUoJy4vcnV0YXNBcGkvbWFyY2FzJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9hdXRlbnRpZmljYXNpb24nLHJlcXVpcmUoJy4vcnV0YXNBcGkvQXV0ZW50aWZpY2FzaW9uJykpXHJcbi8vXHJcblxyXG4vL1NldHRpbmdzXHJcbnNlcnZpZG9yLnNldCgncG9ydCcscHJvY2Vzcy5lbnYuUE9SVCB8fCA1MDAwKVxyXG5cclxuc2Vydmlkb3IubGlzdGVuKHNlcnZpZG9yLmdldCgncG9ydCcpLChtLGUpPT57XHJcbiAgICBpZihlKXtjb25zb2xlLmxvZyhlKX1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlcnZpZG9yIGNvcnJpZW5kbyBlbiBlbCBQVUVSVE8nLnllbGxvdyxzZXJ2aWRvci5nZXQoJ3BvcnQnKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlcnZpZG9yIGNvcnJpZW5kbyBlbiBlbCBQVUVSVE8nLHNlcnZpZG9yLmdldCgncG9ydCcpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkiLCJjb25zdCBSb3V0ZXIgPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJylcclxuY29uc3QgQ09ORklHID0gcmVxdWlyZSgnLi4vQ09ORklHJylcclxuXHJcbmNvbnN0IHJvdXRlcj1Sb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5nZXQoJy8nLChyZXEscmVzKT0+e1xyXG5cclxuICAgIGlmKCFyZXEuaGVhZGVycy5hdXRob3JpemF0aW9uKXtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonTm8gZW52aW8gZWwgVG9rZW4gZW4gZWwgaGVhZGVycyd9KVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uLnNwbGl0KCcgJylbMV07XHJcbiAgICAgICAgand0LnZlcmlmeSh0b2tlbixDT05GSUcuc2VjcmV0LChlLGQpPT57XHJcbiAgICAgICAgICAgIGlmKGUpe1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5uYW1lfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0pXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyOyIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IGJjcnlwdCA9cmVxdWlyZSgnYmNyeXB0JylcclxuLy8gY29uc3QgVXN1YXJpbyA9IHJlcXVpcmUoJy4uL2VzcXVlbWFzTW9uZ28vZXNxdWVtYVVzdWFyaW9zJylcclxuY29uc3Qge3NlY3JldH0gPSByZXF1aXJlKCcuLi9DT05GSUcnKVxyXG5jb25zdCBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKVxyXG5jb25zdCB7IHRva2VuIH0gPSByZXF1aXJlKCdtb3JnYW4nKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxuXHJcblxyXG5yb3V0ZXIucG9zdCAoICcvJyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGNvbnN0IHsgdXN1YXJpbyAsIHB3IH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSAoJ21zc3FsJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoJ2xvZ3Vlb1VzdWFyaW8nKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCd1c3VhcmlvJyAsIFZhckNoYXIgLCB1c3VhcmlvIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2xvZ2luJylcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIGlmKHJlc3VsdC5yb3dzQWZmZWN0ZWRbMF0gPT09IDAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbiAoIHsgbWVuc2FqZSA6ICdVc3VhcmlvIGluZXhpc3RlbnRlICcgfSApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoICFiY3J5cHQuY29tcGFyZVN5bmMoIHB3ICwgcmVzdWx0LnJlY29yZHNldFswXS5wdyApICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKCB7IG1lbnNhamUgOiAnUGFzc3dvcmQgaW5jb3JyZWN0YSAnIH0gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlVXN1YXJpbyA6IHJlc3VsdC5yZWNvcmRzZXRbMF0ubm9tYnJlVXN1YXJpbyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvVXN1YXJpbyA6IHJlc3VsdC5yZWNvcmRzZXRbMF0uYXBlbGxpZG9Vc3VhcmlvICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpbyA6IHJlc3VsdC5yZWNvcmRzZXRbMF0udXN1YXJpb1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBqd3Quc2lnbiggdXNlciAsIHJlcXVpcmUoJy4uL0NPTkZJRycpLnNlY3JldCAsIHsgZXhwaXJlc0luIDogMTQ0MDAgfSAgLCAgICggZXJyb3IgLCB0b2tlbiApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBlcnJvciApIHsgcmVzLnN0YXR1cygyMDApLmpzb24gKCB7IG1lbnNhamUgOiAnRXJyb3IgYWwgZ2VuZXJhciBlbCB0b2tlbicgfSApICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3Rva2VufSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uIChyZXN1bHQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamUgOiBlLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59IClcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxuLy9UT0RPOiBMSVNUQSBERSBDQVRFR09SSUFTXHJcbnJvdXRlci5nZXQoJy9saXN0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHthYnJpckNvbmV4aW9uUE9PTCxjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdMaXN0YUNhdGVnb3JpYXMnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSgncGFfbGlzdGFDYXRlZ29yaWFzJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0LnJlY29yZHNldClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamUgOiAnRXJyb3IgZW4gZWwgcmVzdWx0YWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplIDogZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogSU5TRVJUQSBDQVRFR09SQVxyXG5cclxucm91dGVyLnBvc3QgKCcvaW5zZXJ0JyAsIGFzeW5jIChyZXEgLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBub21icmVDYXRlZ29yaWEgLCBkZXNjcmlwY2lvbkNhdGVnb3JpYSB9ID0gcmVxLmJvZHlcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdpbnNlcnRDYXRlZ29yaWEnKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgfSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmVDYXRlZ29yaWEnICwgVmFyQ2hhciAsIG5vbWJyZUNhdGVnb3JpYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdkZXNjcmlwY2lvbkNhdGVnb3JpYScgLCBWYXJDaGFyICwgZGVzY3JpcGNpb25DYXRlZ29yaWEgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfaW5zZXJ0Q2F0ZWdvcmlhJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidDYXRlZ29yaWEgZ3VhcmRhZGEgZXhpdG9zYW1lbnRlJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBVUERBVEUgQ0FURUdPUklBXHJcblxyXG5yb3V0ZXIucHV0KCcvdXBkYXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7bm9tYnJlQ2F0ZWdvcmlhLGRlc2NyaXBjaW9uQ2F0ZWdvcmlhLGlkQ2F0ZWdvcmlhfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCd1cGRhdGVDYXRlZ29yaWEnKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZUNhdGVnb3JpYScgLCBtc3NxbC5WYXJDaGFyICwgbm9tYnJlQ2F0ZWdvcmlhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2Rlc2NyaXBjaW9uQ2F0ZWdvcmlhJyAsIG1zc3FsLlZhckNoYXIgLCBkZXNjcmlwY2lvbkNhdGVnb3JpYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZENhdGVnb3JpYScgLCBtc3NxbC5JbnQgLCBpZENhdGVnb3JpYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV91cGRhdGVDYXRlZ29yaWEnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J0NhdGVnb3JpYSBtb2RpZmljYWRhIGV4aXRvc2FtZW50ZSd9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbyd9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogREVMRVRFIENBVEVHT1JJQVxyXG5cclxucm91dGVyLnBvc3QoJy9kZWxldGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtpZENhdGVnb3JpYX0gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnZGVsZXRlQ2F0ZWdvcmlhJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZENhdGVnb3JpYScgLCBtc3NxbC5JbnQgLCBpZENhdGVnb3JpYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9kZWxldGVDYXRlZ29yaWEnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J0NhdGVnb3JpYSBlbGltaW5hZGEgZXhpdG9zYW1lbnRlJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG4vL1RPRE86IExJU1RBIERFIERJUkVDQ0lPTkVTXHJcbnJvdXRlci5nZXQoJy9saXN0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHthYnJpckNvbmV4aW9uUE9PTCxjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdMaXN0YURpcmVjY2lvbmVzJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX2xpc3RhRGlyZWNjaW9uZXMnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQucmVjb3Jkc2V0KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZSA6ICdFcnJvciBlbiBlbCByZXN1bHRhZG8nfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamUgOiBlLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBJTlNFUlRBIERJUkVDQ0lPTlxyXG5cclxucm91dGVyLnBvc3QgKCcvaW5zZXJ0JyAsIGFzeW5jIChyZXEgLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3R7IFxyXG4gICAgICAgICAgICAgICAgY2FsbGVEaXJlY2Npb24gLCBcclxuICAgICAgICAgICAgICAgIGFsdHVyYURpcmVjY2lvbiAsIFxyXG4gICAgICAgICAgICAgICAgY29kaWdvUG9zdGFsRGlyZWNjaW9uICwgXHJcbiAgICAgICAgICAgICAgICBiYXJyaW9EaXJlY2Npb24gLCBcclxuICAgICAgICAgICAgICAgIG90cm9zRGF0b3NEaXJlY2Npb24gXHJcbiAgICAgICAgICAgICB9ID0gcmVxLmJvZHlcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdpbnNlcnREaXJlY2Npb24nKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgLCBJbnQgfSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdjYWxsZURpcmVjY2lvbicgLCBWYXJDaGFyICwgY2FsbGVEaXJlY2Npb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnYWx0dXJhRGlyZWNjaW9uJyAsIEludCAsIGFsdHVyYURpcmVjY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdjb2RpZ29Qb3N0YWxEaXJlY2Npb24nICwgSW50ICwgY29kaWdvUG9zdGFsRGlyZWNjaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2JhcnJpb0RpcmVjY2lvbicgLCBWYXJDaGFyICwgYmFycmlvRGlyZWNjaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ290cm9zRGF0b3NEaXJlY2Npb24nICwgVmFyQ2hhciAsIG90cm9zRGF0b3NEaXJlY2Npb24gKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfaW5zZXJ0RGlyZWNjaW9uJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidEaXJlY2Npb24gZ3VhcmRhZGEgZXhpdG9zYW1lbnRlJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBVUERBVEUgRElSRUNDSU9OXHJcblxyXG5yb3V0ZXIucHV0KCcvdXBkYXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdHsgXHJcbiAgICAgICAgICAgIGNhbGxlRGlyZWNjaW9uICwgXHJcbiAgICAgICAgICAgIGFsdHVyYURpcmVjY2lvbiAsIFxyXG4gICAgICAgICAgICBjb2RpZ29Qb3N0YWxEaXJlY2Npb24gLCBcclxuICAgICAgICAgICAgYmFycmlvRGlyZWNjaW9uICwgXHJcbiAgICAgICAgICAgIG90cm9zRGF0b3NEaXJlY2Npb24gLFxyXG4gICAgICAgICAgICBpZERpcmVjY2lvblxyXG4gICAgICAgICB9ID0gcmVxLmJvZHkgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgndXBkYXRlRGlyZWNjaW9uJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdjYWxsZURpcmVjY2lvbicgLCBtc3NxbC5WYXJDaGFyICwgY2FsbGVEaXJlY2Npb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnYWx0dXJhRGlyZWNjaW9uJyAsIG1zc3FsLkludCAsIGFsdHVyYURpcmVjY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdjb2RpZ29Qb3N0YWxEaXJlY2Npb24nICwgbXNzcWwuSW50ICwgY29kaWdvUG9zdGFsRGlyZWNjaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2JhcnJpb0RpcmVjY2lvbicgLCBtc3NxbC5WYXJDaGFyICwgYmFycmlvRGlyZWNjaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ290cm9zRGF0b3NEaXJlY2Npb24nICwgbXNzcWwuVmFyQ2hhciAsIG90cm9zRGF0b3NEaXJlY2Npb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWREaXJlY2Npb24nICwgbXNzcWwuSW50ICwgaWREaXJlY2Npb24gKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfdXBkYXRlRGlyZWNjaW9uJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidEaXJlY2Npb24gbW9kaWZpY2FkYSBleGl0b3NhbWVudGUnfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IERFTEVURSBESVJFQ0lPTlxyXG5cclxucm91dGVyLnBvc3QoJy9kZWxldGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtpZERpcmVjY2lvbn0gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnZGVsZXRlRGlyZWNjaW9uJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZERpcmVjY2lvbicgLCBtc3NxbC5JbnQgLCBpZERpcmVjY2lvbiApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9kZWxldGVEaXJlY2Npb24nKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J0RpcmVjY2lvbiBlbGltaW5hZGEgZXhpdG9zYW1lbnRlJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG4vL1RPRE86IExJU1RBIERFIE1BUkNBU1xyXG5yb3V0ZXIuZ2V0KCcvbGlzdCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wsY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgICAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnTGlzdGFNYXJjYXMnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSgncGFfbGlzdGFNYXJjYXMnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQucmVjb3Jkc2V0KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZSA6ICdFcnJvciBlbiBlbCByZXN1bHRhZG8nfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamUgOiBlLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBJTlNFUlRBIE1BUkNBXHJcblxyXG5yb3V0ZXIucG9zdCAoJy9pbnNlcnQnICwgYXN5bmMgKHJlcSAsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7bm9tYnJlTWFyY2F9ID0gcmVxLmJvZHlcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdpbnNlcnRNYXJjYScpXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZU1hcmNhJyAsIFZhckNoYXIgLCBub21icmVNYXJjYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9pbnNlcnRNYXJjYScpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonTWFyY2EgZ3VhcmRhZGEgZXhpdG9zYW1lbnRlJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBVUERBVEUgTUFSQ0FcclxuXHJcbnJvdXRlci5wdXQoJy91cGRhdGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtub21icmVNYXJjYSxpZE1hcmNhfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCd1cGRhdGVNYXJjYScpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlTWFyY2EnICwgbXNzcWwuVmFyQ2hhciAsIG5vbWJyZU1hcmNhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkTWFyY2EnICwgbXNzcWwuSW50ICwgaWRNYXJjYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV91cGRhdGVNYXJjYScpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonTWFyY2EgbW9kaWZpY2FkYSBleGl0b3NhbWVudGUnfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IERFTEVURSBNQVJDQVxyXG5cclxucm91dGVyLnBvc3QoJy9kZWxldGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtpZE1hcmNhfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdkZWxldGVNYXJjYScpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRNYXJjYScgLCBtc3NxbC5JbnQgLCBpZE1hcmNhIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2RlbGV0ZU1hcmNhJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidNYXJjYSBlbGltaW5hZGEgZXhpdG9zYW1lbnRlJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG4vL1RPRE86IExJU1RBIERFIFVOSURBREVTIERFIE1FRElEQVxyXG5yb3V0ZXIuZ2V0KCcvbGlzdCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wsY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgICAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnTGlzdGFVbmlkYWRlc01lZGlkYScpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlKCdwYV9saXN0YVVuaWRhZGVzTWVkaWEnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQucmVjb3Jkc2V0KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZSA6ICdFcnJvciBlbiBlbCByZXN1bHRhZG8nfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamUgOiBlLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBJTlNFUlRBIFVOSURBRCBERSBNRURJREFcclxuXHJcbnJvdXRlci5wb3N0ICgnL2luc2VydCcgLCBhc3luYyAocmVxICwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgbm9tYnJlVW5pZGFkTWVkaWRhICwgZGVzY3JpcGNpb25VbmlkYWRNZWRpZGEgfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnaW5zZXJ0VW5pZGFkTWFkaWRhJylcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyIH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlVW5pZGFkTWVkaWRhJyAsIFZhckNoYXIgLCBub21icmVVbmlkYWRNZWRpZGEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZGVzY3JpcGNpb25VbmlkYWRNZWRpZGEnICwgVmFyQ2hhciAsIGRlc2NyaXBjaW9uVW5pZGFkTWVkaWRhIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2luc2VydFVuaWRhZE1lZGlkYScpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonVW5pZGFkZSBkZSBtZWRpZGEgZ3VhcmRhZGEgZXhpdG9zYW1lbnRlJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBVUERBVEUgVU5JREFEIERFIE1FRElEQVxyXG5cclxucm91dGVyLnB1dCgnL3VwZGF0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge25vbWJyZVVuaWRhZE1lZGlkYSxkZXNjcmlwY2lvblVuaWRhZE1lZGlkYSxpZFVuaWRhZE1lZGlkYX0gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgndXBkYXRlVW5pZGFkTWVkaWRhJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmVVbmlkYWRNZWRpZGEnICwgbXNzcWwuVmFyQ2hhciAsIG5vbWJyZVVuaWRhZE1lZGlkYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdkZXNjcmlwY2lvblVuaWRhZE1lZGlkYScgLCBtc3NxbC5WYXJDaGFyICwgZGVzY3JpcGNpb25VbmlkYWRNZWRpZGEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRVbmlkYWRNZWRpZGEnICwgbXNzcWwuSW50ICwgaWRVbmlkYWRNZWRpZGEgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfdXBkYXRlVW5pZGFkTWVkaWRhJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidVbmlkYWQgZGUgbWVkaWRhIG1vZGlmaWNhZGEgZXhpdG9zYW1lbnRlJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBERUxFVEUgVU5JREFEIE1FRElEQVxyXG5cclxucm91dGVyLnBvc3QoJy9kZWxldGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtpZFVuaWRhZE1lZGlkYX0gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnZGVsZXRlVW5pZGFkTWVkaWRhJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFVuaWRhZE1lZGlkYScgLCBtc3NxbC5JbnQgLCBpZFVuaWRhZE1lZGlkYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9kZWxldGVVbmlkYWRNZWRpZGEnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J1VuaWRhZCBkZSBtZWRpZGEgZWxpbWluYWRhIGV4aXRvc2FtZW50ZSd9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbyd9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3QgYmNyeXAgPSByZXF1aXJlKCdiY3J5cHQnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbi8vICEgaW5zZXJ0YXIgdXN1YXJpb1xyXG5cclxucm91dGVyLnBvc3QgKCAnL2luc2VydCcgLCBhc3luYyAocmVxLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSAoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGNvbnN0IHsgbm9tYnJlVXN1YXJpbyAsIGFwZWxsaWRvVXN1YXJpbyAsIHVzdWFyaW8gLCBwdyB9ID0gcmVxLmJvZHlcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnaW5zZXJ0VXN1YXJpbycpXHJcbiAgICAgICAgY29uc3Qge1JlcXVlc3QgLCBWYXJDaGFyIH0gPSByZXF1aXJlICgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCdub21icmVVc3VhcmlvJyAsIFZhckNoYXIgLCBub21icmVVc3VhcmlvKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoJ2FwZWxsaWRvVXN1YXJpbycgLCBWYXJDaGFyICwgYXBlbGxpZG9Vc3VhcmlvKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoJ3VzdWFyaW8nICwgVmFyQ2hhciAsIHVzdWFyaW8pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICgncHcnICwgVmFyQ2hhciAsIGJjcnlwLmhhc2hTeW5jKHB3ICwgMTApIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSggJ3BhX2luc2VydFVzdWFyaW8nIClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oIHsgbWVuc2FqZSA6ICdVc3VhcmlvIGluc2VydGFkbyBjb3JyZWN0YW1lbnRlICcgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5cclxuXHJcbi8vIC8vICEgbGlzdGFkbyBkZSB1c3Vhcmlvc1xyXG4vLyByb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuLy8gICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSAoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuLy8gICAgIHRyeXtcclxuLy8gICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCAnbGlhc3RhVXN1YXJpbycpXHJcbi8vICAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbi8vICAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QoY29uZXhpb24pXHJcbi8vICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX2xpc3RhVXN1YXJpb3MnKVxyXG4vLyAgICAgICAgIGlmKHJlc3VsdCl7XHJcbi8vICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbi8vICAgICAgICAgICAgIHJlcy5qc29uKHJlc3VsdC5yZWNvcmRzZXQpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGVsc2V7XHJcbi8vICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbi8vICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtzdGF0dXM6IDQwMyxtZW5zYWplOmUubWVzc2FnZX0pXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgY2F0Y2goZSl7XHJcbi8vICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7c3RhdHVzOiA0MDMsbWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG4vLyAvLyEgbGlzdGEgZGUgcGVyZmlsZXNcclxuLy8gcm91dGVyLmdldCgnL3BlcmZpbGVzJyxhc3luYyAocmVxLHJlcyk9PntcclxuLy8gICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSAoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuLy8gICAgIHRyeXtcclxuLy8gICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCAnbGlzdGFQZXJmaWxlcycpXHJcbi8vICAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbi8vICAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QoY29uZXhpb24pXHJcbi8vICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX2xpc3RhUGVyZmlsZXMnKVxyXG4vLyAgICAgICAgIGlmKHJlc3VsdCl7XHJcbi8vICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbi8vICAgICAgICAgICAgIHJlcy5qc29uKHJlc3VsdC5yZWNvcmRzZXQpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGVsc2V7XHJcbi8vICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbi8vICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtzdGF0dXM6IDQwMyxtZW5zYWplOmUubWVzc2FnZX0pXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgY2F0Y2goZSl7XHJcbi8vICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7c3RhdHVzOiA0MDMsbWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG4vLyAvLyEgY29uc3VsdGEgdXN1YXJpbyBwb3IgaWRcclxuLy8gcm91dGVyLmdldCgnLzppZCcsYXN5bmMgKHJlcSxyZXMpPT57XHJcbi8vICAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWRcclxuLy8gICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSAoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuLy8gICAgIHRyeXtcclxuLy8gICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCAnZ2V0VXNleElkJylcclxuLy8gICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuLy8gICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdChjb25leGlvbilcclxuLy8gICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVXN1YXJpbycgLCBtc3NxbC5JbnQgLCBpZClcclxuLy8gICAgICAgICBjb25zdCBxdWVyeSA9IGBzZWxlY3RcclxuLy8gICAgICAgICB1LmlkIGFzIGlkVXN1YXJpbyAsXHJcbi8vICAgICAgICAgdS51c2VyTmFtZSBhcyB1c2VyTmFtZSAsXHJcbi8vICAgICAgICAgdS5lbWFpbCBhcyBlbWFpbCAsXHJcbi8vICAgICAgICAgdS5ub21icmUgYXMgbm9tYnJlVXN1YXJpbyAsXHJcbi8vICAgICAgICAgdS5hcGVsbGlkbyBhcyBhcGVsbGlkb1VzdWFyaW8gLFxyXG4vLyAgICAgICAgIHAuaWQgYXMgaWRQZXJmaWwgLFxyXG4vLyAgICAgICAgIHAubm9tYnJlIGFzIG5vbWJyZVBlcmZpbFxyXG4vLyAgICAgICAgIGZyb20gdXN1YXJpb3MgdVxyXG4vLyAgICAgICAgIGpvaW4gcGVyZmlsZXMgcCBvbiBwLmlkID0gdS5pZF9wZXJmaWxcclxuLy8gICAgICAgICB3aGVyZSB1LmlkID0gQGlkVXN1YXJpb2BcclxuLy8gICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkocXVlcnkpXHJcbi8vICAgICAgICAgaWYocmVzdWx0KXtcclxuLy8gICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICAgICAgcmVzLmpzb24ocmVzdWx0LnJlY29yZHNldClcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgZWxzZXtcclxuLy8gICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oe3N0YXR1czogNDAzLG1lbnNhamU6ZS5tZXNzYWdlfSlcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICBjYXRjaChlKXtcclxuLy8gICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4vLyAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtzdGF0dXM6IDQwMyxtZW5zYWplOmUubWVzc2FnZX0pXHJcbi8vICAgICB9XHJcbi8vIH0pXHJcblxyXG4vLyAvLyFndWFyZGEgdXN1YXJpb1xyXG4vLyByb3V0ZXIucG9zdCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbi8vICAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4vLyAgICAgY29uc3QgIHt1c2VyTmFtZSxwYXNzd29yZCxlbWFpbCxub21icmUsYXBlbGxpZG8saWRQZXJmaWx9ID0gcmVxLmJvZHlcclxuLy8gICAgIHRyeXtcclxuLy8gICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdzYXZlVXNlcicpXHJcbi8vICAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlICgnbXNzcWwnKVxyXG4vLyAgICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0KGNvbmV4aW9uKVxyXG4vLyAgICAgICAgIGNvbnN0IHB3ID0gYmNyeXAuaGFzaFN5bmMocGFzc3dvcmQsMTApXHJcbi8vICAgICAgICAgY29uc29sZS5sb2cocHcpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCd1c2VyTmFtZScgLCBtc3NxbC5WYXJDaGFyICwgdXNlck5hbWUpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdwYXNzd29yZCcgLCBtc3NxbC5WYXJDaGFyICwgcHcpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdlbWFpbCcgLCBtc3NxbC5WYXJDaGFyICwgZW1haWwpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmUnICwgbXNzcWwuVmFyQ2hhciAsIG5vbWJyZSlcclxuLy8gICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2FwZWxsaWRvJyAsIG1zc3FsLlZhckNoYXIgLCBhcGVsbGlkbylcclxuLy8gICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkUGVyZmlsJyAsIG1zc3FsLkludCAsIGlkUGVyZmlsKVxyXG4vLyAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlKCdwYV9pbnNlcnRVc3VhcmlvcycpXHJcbi8vICAgICAgICAgaWYocmVzdWx0KXtcclxuLy8gICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4vLyAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6ICd1c3VhcmlvIGluc2VydGFkbyBjb3JyZWN0YW1lbnRlICEnIH0pXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgY2F0Y2goZXJyKXtcclxuLy8gICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4vLyAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHtlcnJvcjplcnIubWVzc2FnZX0pXHJcbi8vICAgICB9XHJcbi8vIH0pXHJcblxyXG4vLyByb3V0ZXIucHV0KCcvJywgYXN5bmMgKHJlcSxyZXMpPT57XHJcbi8vICAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4vLyAgICAgY29uc3QgIHt1c2VyTmFtZSxwYXNzd29yZCxlbWFpbCxub21icmUsYXBlbGxpZG8saWRQZXJmaWwgLCBpZFVzdWFyaW99ID0gcmVxLmJvZHlcclxuLy8gICAgIHRyeXtcclxuLy8gICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCd1cGRhdGVVc2VyJylcclxuLy8gICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUgKCdtc3NxbCcpXHJcbi8vICAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QoY29uZXhpb24pXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCd1c2VyTmFtZScgLCBtc3NxbC5WYXJDaGFyICwgdXNlck5hbWUpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdwYXNzd29yZCcgLCBtc3NxbC5WYXJDaGFyICwgYmNyeXAuaGFzaFN5bmMocGFzc3dvcmQpKVxyXG4vLyAgICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZW1haWwnICwgbXNzcWwuVmFyQ2hhciAsIGVtYWlsKVxyXG4vLyAgICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlJyAsIG1zc3FsLlZhckNoYXIgLCBub21icmUpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdhcGVsbGlkbycgLCBtc3NxbC5WYXJDaGFyICwgYXBlbGxpZG8pXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFBlcmZpbCcgLCBtc3NxbC5JbnQgLCBpZFBlcmZpbClcclxuLy8gICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVXN1YXJpbycgLCBtc3NxbC5JbnQgLCBpZFVzdWFyaW8pXHJcbi8vICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX3VwZGF0ZVVzdWFyaW9zJylcclxuLy8gICAgICAgICBpZihyZXN1bHQpe1xyXG4vLyAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbi8vICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTogJ3VzdWFyaW8gaW5zZXJ0YWRvIGNvcnJlY3RhbWVudGUgIScgfSlcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICBjYXRjaChlKXtcclxuLy8gICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4vLyAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHtlcnJvcjplcnIubWVzc2FnZX0pXHJcbi8vICAgICB9XHJcbi8vIH0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29sb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1zc3FsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=