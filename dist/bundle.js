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
servidor.use('/api/productos', __webpack_require__(/*! ./rutasApi/productos */ "./rutasApi/productos.js"));
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

/***/ "./rutasApi/productos.js":
/*!*******************************!*\
  !*** ./rutasApi/productos.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

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
}); //TODO: INSERTA PRODUCTO

router.post('/insert', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const {
      nombreProducto,
      descripcionProducto,
      precioActualProducto
    } = req.body;
    const conexion = await abrirConexionPOOL('insertProducto');

    const {
      Request,
      VarChar,
      Real
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('nombreProducto', VarChar, nombreProducto);
    myRequest.input('descripcionProducto', VarChar, descripcionProducto);
    myRequest.input('precioActualProducto', Real, precioActualProducto);
    const result = await myRequest.execute('pa_insertProducto');

    if (result) {
      cerrarConexionPOOL();
      res.status(200).json({
        mensaje: 'Producto guardada exitosamente'
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
        mensaje: 'Producto modificado exitosamente'
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
        mensaje: 'Producto eliminado exitosamente'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ09ORklHLmpzIiwid2VicGFjazovLy8uL2NvbmV4aW9uZXMvc3FsU2VydmVyLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL0F1dGVudGlmaWNhc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9Mb2d1ZW8uanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvY2F0ZWdvcmlhcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9kaXJlY2Npb25lcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9tYXJjYXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvcHJvZHVjdG9zLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3VuaWRhZGVzTWVkaWRhLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3VzdWFyaW9zLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJjcnlwdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbG9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9yZ2FuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibXNzcWxcIiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwic2VjcmV0IiwibXNzcWwiLCJyZXF1aXJlIiwicHJvY2VzcyIsIlVSSSIsInVzZXIiLCJwYXNzd29yZCIsImRhdGFiYXNlIiwic2VydmVyIiwib3B0aW9ucyIsImFwcE5hbWUiLCJlbmFibGVBcml0aEFib3J0IiwiZW5jcnlwdCIsImNvbm5lY3Rpb25UaW1lT3V0IiwiZHJpdmVyIiwic3RyZWFtIiwicG9vbCIsIm1heCIsIm1pbiIsImlkbGVUaW1lb3V0TWlsbGlzIiwiQ29uZXhpb25TUUwiLCJhYnJpckNvbmV4aW9uIiwidW5kZWZpbmVkIiwiY2VycmFyQ29uZXhpb24iLCJhYnJpckNvbmV4aW9uUE9PTCIsImNlcnJhckNvbmV4aW9uUE9PTCIsImNvbmV4aW9uZXMiLCJuYW1lIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwibmV3Q29uZXhpb24iLCJDb25uZWN0aW9uUG9vbCIsImNsb3NlIiwiYmluZCIsImFyZ3MiLCJjb25uZWN0IiwiUHJvbWlzZSIsImFsbCIsInZhbHVlcyIsIm1hcCIsImV4cHJlc3MiLCJjb3JzIiwibW9yZ2FuIiwic2Vydmlkb3IiLCJ1c2UiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwic2V0IiwiZW52IiwiUE9SVCIsImxpc3RlbiIsImdldCIsIm0iLCJlIiwiY29uc29sZSIsImxvZyIsInllbGxvdyIsIlJvdXRlciIsImp3dCIsIkNPTkZJRyIsInJvdXRlciIsInJlcSIsInJlcyIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwic3RhdHVzIiwibWVuc2FqZSIsInRva2VuIiwic3BsaXQiLCJ2ZXJpZnkiLCJkIiwiYmNyeXB0IiwicG9zdCIsInVzdWFyaW8iLCJwdyIsImJvZHkiLCJSZXF1ZXN0IiwiVmFyQ2hhciIsImNvbmV4aW9uIiwibXlSZXF1ZXN0IiwiaW5wdXQiLCJyZXN1bHQiLCJleGVjdXRlIiwicm93c0FmZmVjdGVkIiwiY29tcGFyZVN5bmMiLCJyZWNvcmRzZXQiLCJub21icmVVc3VhcmlvIiwiYXBlbGxpZG9Vc3VhcmlvIiwic2lnbiIsImV4cGlyZXNJbiIsImVycm9yIiwibWVzc2FnZSIsIm5vbWJyZUNhdGVnb3JpYSIsImRlc2NyaXBjaW9uQ2F0ZWdvcmlhIiwicHV0IiwiaWRDYXRlZ29yaWEiLCJJbnQiLCJjYWxsZURpcmVjY2lvbiIsImFsdHVyYURpcmVjY2lvbiIsImNvZGlnb1Bvc3RhbERpcmVjY2lvbiIsImJhcnJpb0RpcmVjY2lvbiIsIm90cm9zRGF0b3NEaXJlY2Npb24iLCJpZERpcmVjY2lvbiIsIm5vbWJyZU1hcmNhIiwiaWRNYXJjYSIsIm5vbWJyZVByb2R1Y3RvIiwiZGVzY3JpcGNpb25Qcm9kdWN0byIsInByZWNpb0FjdHVhbFByb2R1Y3RvIiwiUmVhbCIsImlkUHJvZHVjdG8iLCJub21icmVVbmlkYWRNZWRpZGEiLCJkZXNjcmlwY2lvblVuaWRhZE1lZGlkYSIsImlkVW5pZGFkTWVkaWRhIiwiYmNyeXAiLCJoYXNoU3luYyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDYkMsUUFBTSxFQUFDO0FBRE0sQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNBQSxNQUFNQyxLQUFLLEdBQUdDLG1CQUFPLENBQUMsb0JBQUQsQ0FBckI7O0FBQ0EsSUFBR0MsSUFBSCxFQUEwQztBQUFFRCxxQkFBTyxDQUFDLHNCQUFELENBQVA7QUFBbUI7O0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQWhHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmdFLE1BQWpCLEM7Ozs7Ozs7Ozs7O0FDdktBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHNlY3JldDonbWFzdGVyU29mdDIwMjAnXHJcbn0iLCJjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJyk7XHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXsgcmVxdWlyZSgnY29sb3JzJykgfVxyXG5cclxudmFyIFVSSVxyXG5cclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xyXG4gICAgLy8gVVJJID0ge1xyXG4gICAgLy8gICAgIHVzZXI6IFxyXG4gICAgLy8gICAgIHBhc3N3b3JkOiBcclxuICAgIC8vICAgICBkYXRhYmFzZTogXHJcbiAgICAvLyAgICAgcG9ydDoxNDMzLFxyXG4gICAgLy8gICAgIHNlcnZlcjonXHJcbiAgICAvLyAgICAgb3B0aW9uczp7XHJcbiAgICAvLyAgICAgICAgIGFwcE5hbWU6XHJcbiAgICAvLyAgICAgICAgIGVuYWJsZUFyaXRoQWJvcnQ6dHJ1ZSxcclxuICAgIC8vICAgICAgICAgZW5jcnlwdDpmYWxzZVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICAsXHJcbiAgICAvLyAgICAgY29ubmVjdGlvblRpbWVPdXQ6MTUwMDAwLFxyXG4gICAgLy8gICAgIGRyaXZlcjondGVkaW91cycsXHJcbiAgICAvLyAgICAgc3RyZWFtOmZhbHNlLFxyXG4gICAgLy8gICAgIHBvb2w6e1xyXG4gICAgLy8gICAgICAgICBtYXg6MjAsXHJcbiAgICAvLyAgICAgICAgIG1pbjowLFxyXG4gICAgLy8gICAgICAgICBpZGxlVGltZW91dE1pbGxpczozMDAwMCxcclxuICAgIC8vICAgICB9XHJcbiAgICAvL1ZKNzMwMFxyXG4gICAgLy8gfVxyXG4gICAgVVJJID0ge1xyXG4gICAgICAgIHVzZXI6ICdnZXN0TGluZV9TUUxMb2dpbl8xJyxcclxuICAgICAgICBwYXNzd29yZDogJ2x0cDZ4bXVwM3QnLFxyXG4gICAgICAgIGRhdGFiYXNlOiAnZ2VzdExpbmVEQicsXHJcbiAgICAgICAgc2VydmVyOidnZXN0TGluZURCLm1zc3FsLnNvbWVlLmNvbScsXHJcbiAgICAgICAgb3B0aW9uczp7XHJcbiAgICAgICAgICAgIGFwcE5hbWU6J21hc3RlclNvZnQtQVBJJyxcclxuICAgICAgICAgICAgZW5hYmxlQXJpdGhBYm9ydDp0cnVlLFxyXG4gICAgICAgICAgICBlbmNyeXB0OmZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgICxcclxuICAgICAgICBjb25uZWN0aW9uVGltZU91dDoxNTAwMDAsXHJcbiAgICAgICAgZHJpdmVyOid0ZWRpb3VzJyxcclxuICAgICAgICBzdHJlYW06ZmFsc2UsXHJcbiAgICAgICAgcG9vbDp7XHJcbiAgICAgICAgICAgIG1heDoyMCxcclxuICAgICAgICAgICAgbWluOjAsXHJcbiAgICAgICAgICAgIGlkbGVUaW1lb3V0TWlsbGlzOjMwMDAwLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5lbHNle1xyXG4gICAgVVJJID0ge1xyXG4gICAgICAgIHVzZXIgOiBwcm9jZXNzLmVudi5VU0VSU1FMICxcclxuICAgICAgICBwYXNzd29yZCA6IHByb2Nlc3MuZW52LlBBU1NXT1JEU1FMICxcclxuICAgICAgICBkYXRhYmFzZSA6IHByb2Nlc3MuZW52LkRBVEFCQVNFU1FMICxcclxuICAgICAgICBzZXJ2ZXIgOiBwcm9jZXNzLmVudi5TRVJWRVJTUUwgLFxyXG4gICAgICAgIG9wdGlvbnMgOiB7XHJcbiAgICAgICAgICAgIGVuYWJsZUFyaXRoQWJvcnQgOiB0cnVlICxcclxuICAgICAgICAgICAgZW5jcnlwdCA6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufVxyXG5cclxudmFyIENvbmV4aW9uU1FMID0geyBhYnJpckNvbmV4aW9uOnVuZGVmaW5lZCwgY2VycmFyQ29uZXhpb246dW5kZWZpbmVkLCBhYnJpckNvbmV4aW9uUE9PTDp1bmRlZmluZWQsIGNlcnJhckNvbmV4aW9uUE9PTDp1bmRlZmluZWQgfVxyXG4vLyB2YXIgY29uZXhpb25cclxuLy8gQ29uZXhpb25TUUwuYWJyaXJDb25leGlvbiA9IGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4vLyAgICAgYXdhaXQgbXNzcWwuY29ubmVjdChVUkkpXHJcbi8vICAgICAudGhlbihwb29sPT57XHJcbi8vICAgICAgICAgaWYocG9vbC5fY29ubmVjdGVkKXtcclxuLy8gICAgICAgICAgICAgaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbmVjaW9uIFNRTCBTRVJWRVInLmJsdWUsJyBBQklFUlRBJy5ncmVlbilcclxuLy8gICAgICAgICAgICAgICAgIGNvbmV4aW9uID0gcG9vbFxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGVsc2V7XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBkZSBDb25leGlvbicscG9vbC5fY29ubmVjdGVkKVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH0pXHJcbi8vIH1cclxuLy8gQ29uZXhpb25TUUwuY2VycmFyQ29uZXhpb24gPSBhc3luYyBmdW5jdGlvbiAoKXtcclxuLy8gICAgIGF3YWl0IGNvbmV4aW9uLmNsb3NlKClcclxuLy8gICAgIGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZygnQ29uZWNpb24gU1FMIFNFUlZFUicuYmx1ZSwnIENFUlJBREEnLmdyZWVuKVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5jb25zdCBjb25leGlvbmVzID0ge31cclxuXHJcbkNvbmV4aW9uU1FMLmFicmlyQ29uZXhpb25QT09MID0gYXN5bmMgbmFtZSA9PntcclxuICAgIGlmKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY29uZXhpb25lcyxuYW1lKSl7XHJcbiAgICAgICAgY29uc3QgbmV3Q29uZXhpb24gPSBuZXcgbXNzcWwuQ29ubmVjdGlvblBvb2woVVJJKVxyXG4gICAgICAgIGNvbnN0IGNsb3NlID0gbmV3Q29uZXhpb24uY2xvc2UuYmluZChuZXdDb25leGlvbilcclxuICAgICAgICBuZXdDb25leGlvbi5jbG9zZSA9ICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBjb25leGlvbmVzW25hbWVdXHJcbiAgICAgICAgICAgIHJldHVybiBjbG9zZSguLi5hcmdzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBuZXdDb25leGlvbi5jb25uZWN0KClcclxuICAgICAgICBjb25leGlvbmVzW25hbWVdID0gbmV3Q29uZXhpb25cclxuICAgICAgICByZXR1cm4gY29uZXhpb25lc1tuYW1lXVxyXG4gICAgfVxyXG59XHJcblxyXG5Db25leGlvblNRTC5jZXJyYXJDb25leGlvblBPT0wgPSAoKSA9PntcclxuICAgIHJldHVybiBQcm9taXNlLmFsbChPYmplY3QudmFsdWVzKGNvbmV4aW9uZXMpLm1hcCgocG9vbCk9PntcclxuICAgICAgICByZXR1cm4gcG9vbC5jbG9zZSgpXHJcbiAgICB9KSlcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbmV4aW9uU1FMIiwiY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBjb3JzID0gcmVxdWlyZSgnY29ycycpXHJcbnZhciBtb3JnYW5cclxuXHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgIHJlcXVpcmUoJ2NvbG9ycycpXHJcbiAgICBtb3JnYW4gPSByZXF1aXJlKCdtb3JnYW4nKVxyXG59XHJcbi8vIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52Lk5PREVfRU5WKVxyXG5cclxuY29uc3Qgc2Vydmlkb3IgPSBleHByZXNzKClcclxuc2Vydmlkb3IudXNlKGNvcnMoKSlcclxuXHJcbi8vIG1pZGRlbHdhcmVcclxuXHJcbnNlcnZpZG9yLnVzZShleHByZXNzLmpzb24oKSlcclxuc2Vydmlkb3IudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7ZXh0ZW5kZWQ6IHRydWV9KSlcclxuLy8gc2Vydmlkb3IudXNlKHJlcXVpcmUoJy4vcnV0YXNBcGkvYXV0aEFjY2Vzb3MvYXV0aEFsbFJvdXRlcicpKVxyXG5cclxuXHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICkgeyAgc2Vydmlkb3IudXNlKG1vcmdhbignZGV2JykpIH1cclxuXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9sb2d1ZW8nLHJlcXVpcmUoJy4vcnV0YXNBcGkvTG9ndWVvJykpXHJcbi8vIHNlcnZpZG9yLnVzZSgnL2FwaS9hdXRoUm91dGVyUmVhY3QvYWRtaW4nLHJlcXVpcmUoJy4vcnV0YXNBcGkvYXV0aEFjY2Vzb3NSZWFjdC9hdXRoQWRtaW5Sb3V0ZXJSZWFjdCcpKVxyXG4vLyBzZXJ2aWRvci51c2UoJy9hcGkvYXV0aFJvdXRlclJlYWN0L25pdmVsMScscmVxdWlyZSgnLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDFSb3V0ZXJSZWFjdCcpKVxyXG4vLyBzZXJ2aWRvci51c2UoJy9hcGkvYXV0aFJvdXRlclJlYWN0L25pdmVsMicscmVxdWlyZSgnLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDJSb3V0ZXJSZWFjdCcpKVxyXG4vLyBzZXJ2aWRvci51c2UoJy9hcGkvYXV0aFJvdXRlclJlYWN0L25pdmVsMycscmVxdWlyZSgnLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDNSb3V0ZXJSZWFjdCcpKVxyXG4vLyBzZXJ2aWRvci51c2UoJy9hcGkvYXV0aFJvdXRlclJlYWN0L25pdmVsNCcscmVxdWlyZSgnLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDRSb3V0ZXJSZWFjdCcpKVxyXG4vLyBzZXJ2aWRvci51c2UoJy9hcGkvYXV0aFJvdXRlclJlYWN0L25pdmVsNScscmVxdWlyZSgnLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDVSb3V0ZXJSZWFjdCcpKVxyXG4vLyBzZXJ2aWRvci51c2UoJy9hcGkvdXN1YXJpb3MnLHJlcXVpcmUoJy4vcnV0YXNBcGkvYXV0aEFjY2Vzb3MvYXV0aEFkbWluUm91dGVyJykscmVxdWlyZSgnLi9ydXRhc0FwaS91c3VhcmlvcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvdXN1YXJpb3MnLHJlcXVpcmUoJy4vcnV0YXNBcGkvdXN1YXJpb3MnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL2NhdGVnb3JpYXMnICwgcmVxdWlyZSgnLi9ydXRhc0FwaS9jYXRlZ29yaWFzJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS91bmlkYWRlc01lZGlkYScgLCByZXF1aXJlKCcuL3J1dGFzQXBpL3VuaWRhZGVzTWVkaWRhJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9kaXJlY2Npb25lcycgLCByZXF1aXJlKCcuL3J1dGFzQXBpL2RpcmVjY2lvbmVzJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9tYXJjYXMnICwgcmVxdWlyZSgnLi9ydXRhc0FwaS9tYXJjYXMnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3Byb2R1Y3RvcycgLCByZXF1aXJlKCcuL3J1dGFzQXBpL3Byb2R1Y3RvcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvYXV0ZW50aWZpY2FzaW9uJyxyZXF1aXJlKCcuL3J1dGFzQXBpL0F1dGVudGlmaWNhc2lvbicpKVxyXG4vL1xyXG5cclxuLy9TZXR0aW5nc1xyXG5zZXJ2aWRvci5zZXQoJ3BvcnQnLHByb2Nlc3MuZW52LlBPUlQgfHwgNTAwMClcclxuXHJcbnNlcnZpZG9yLmxpc3RlbihzZXJ2aWRvci5nZXQoJ3BvcnQnKSwobSxlKT0+e1xyXG4gICAgaWYoZSl7Y29uc29sZS5sb2coZSl9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWRvciBjb3JyaWVuZG8gZW4gZWwgUFVFUlRPJy55ZWxsb3csc2Vydmlkb3IuZ2V0KCdwb3J0JykpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWRvciBjb3JyaWVuZG8gZW4gZWwgUFVFUlRPJyxzZXJ2aWRvci5nZXQoJ3BvcnQnKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pIiwiY29uc3QgUm91dGVyID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpXHJcbmNvbnN0IENPTkZJRyA9IHJlcXVpcmUoJy4uL0NPTkZJRycpXHJcblxyXG5jb25zdCByb3V0ZXI9Um91dGVyKCk7XHJcblxyXG5yb3V0ZXIuZ2V0KCcvJywocmVxLHJlcyk9PntcclxuXHJcbiAgICBpZighcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbil7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6J05vIGVudmlvIGVsIFRva2VuIGVuIGVsIGhlYWRlcnMnfSlcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbi5zcGxpdCgnICcpWzFdO1xyXG4gICAgICAgIGp3dC52ZXJpZnkodG9rZW4sQ09ORklHLnNlY3JldCwoZSxkKT0+e1xyXG4gICAgICAgICAgICBpZihlKXtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmUubmFtZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59KVxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjsiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBiY3J5cHQgPXJlcXVpcmUoJ2JjcnlwdCcpXHJcbi8vIGNvbnN0IFVzdWFyaW8gPSByZXF1aXJlKCcuLi9lc3F1ZW1hc01vbmdvL2VzcXVlbWFVc3VhcmlvcycpXHJcbmNvbnN0IHtzZWNyZXR9ID0gcmVxdWlyZSgnLi4vQ09ORklHJylcclxuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJylcclxuY29uc3QgeyB0b2tlbiB9ID0gcmVxdWlyZSgnbW9yZ2FuJylcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcblxyXG5cclxucm91dGVyLnBvc3QgKCAnLycgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBjb25zdCB7IHVzdWFyaW8gLCBwdyB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgfSA9IHJlcXVpcmUgKCdtc3NxbCcpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCdsb2d1ZW9Vc3VhcmlvJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICgndXN1YXJpbycgLCBWYXJDaGFyICwgdXN1YXJpbyApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9sb2dpbicpXHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICBpZihyZXN1bHQucm93c0FmZmVjdGVkWzBdID09PSAwICkge1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24gKCB7IG1lbnNhamUgOiAnVXN1YXJpbyBpbmV4aXN0ZW50ZSAnIH0gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCAhYmNyeXB0LmNvbXBhcmVTeW5jKCBwdyAsIHJlc3VsdC5yZWNvcmRzZXRbMF0ucHcgKSApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbiggeyBtZW5zYWplIDogJ1Bhc3N3b3JkIGluY29ycmVjdGEgJyB9IClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZVVzdWFyaW8gOiByZXN1bHQucmVjb3Jkc2V0WzBdLm5vbWJyZVVzdWFyaW8gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGVsbGlkb1VzdWFyaW8gOiByZXN1bHQucmVjb3Jkc2V0WzBdLmFwZWxsaWRvVXN1YXJpbyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzdWFyaW8gOiByZXN1bHQucmVjb3Jkc2V0WzBdLnVzdWFyaW9cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgand0LnNpZ24oIHVzZXIgLCByZXF1aXJlKCcuLi9DT05GSUcnKS5zZWNyZXQgLCB7IGV4cGlyZXNJbiA6IDE0NDAwIH0gICwgICAoIGVycm9yICwgdG9rZW4gKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZXJyb3IgKSB7IHJlcy5zdGF0dXMoMjAwKS5qc29uICggeyBtZW5zYWplIDogJ0Vycm9yIGFsIGdlbmVyYXIgZWwgdG9rZW4nIH0gKSAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHt0b2tlbn0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbiAocmVzdWx0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplIDogZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSApXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbi8vVE9ETzogTElTVEEgREUgQ0FURUdPUklBU1xyXG5yb3V0ZXIuZ2V0KCcvbGlzdCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wsY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgICAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnTGlzdGFDYXRlZ29yaWFzJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX2xpc3RhQ2F0ZWdvcmlhcycpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdC5yZWNvcmRzZXQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplIDogJ0Vycm9yIGVuIGVsIHJlc3VsdGFkbyd9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZSA6IGUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IElOU0VSVEEgQ0FURUdPUkFcclxuXHJcbnJvdXRlci5wb3N0ICgnL2luc2VydCcgLCBhc3luYyAocmVxICwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgbm9tYnJlQ2F0ZWdvcmlhICwgZGVzY3JpcGNpb25DYXRlZ29yaWEgfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnaW5zZXJ0Q2F0ZWdvcmlhJylcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyIH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlQ2F0ZWdvcmlhJyAsIFZhckNoYXIgLCBub21icmVDYXRlZ29yaWEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZGVzY3JpcGNpb25DYXRlZ29yaWEnICwgVmFyQ2hhciAsIGRlc2NyaXBjaW9uQ2F0ZWdvcmlhIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2luc2VydENhdGVnb3JpYScpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonQ2F0ZWdvcmlhIGd1YXJkYWRhIGV4aXRvc2FtZW50ZSd9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbyd9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogVVBEQVRFIENBVEVHT1JJQVxyXG5cclxucm91dGVyLnB1dCgnL3VwZGF0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge25vbWJyZUNhdGVnb3JpYSxkZXNjcmlwY2lvbkNhdGVnb3JpYSxpZENhdGVnb3JpYX0gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgndXBkYXRlQ2F0ZWdvcmlhJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmVDYXRlZ29yaWEnICwgbXNzcWwuVmFyQ2hhciAsIG5vbWJyZUNhdGVnb3JpYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdkZXNjcmlwY2lvbkNhdGVnb3JpYScgLCBtc3NxbC5WYXJDaGFyICwgZGVzY3JpcGNpb25DYXRlZ29yaWEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRDYXRlZ29yaWEnICwgbXNzcWwuSW50ICwgaWRDYXRlZ29yaWEgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfdXBkYXRlQ2F0ZWdvcmlhJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidDYXRlZ29yaWEgbW9kaWZpY2FkYSBleGl0b3NhbWVudGUnfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IERFTEVURSBDQVRFR09SSUFcclxuXHJcbnJvdXRlci5wb3N0KCcvZGVsZXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7aWRDYXRlZ29yaWF9ID0gcmVxLmJvZHkgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ2RlbGV0ZUNhdGVnb3JpYScpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRDYXRlZ29yaWEnICwgbXNzcWwuSW50ICwgaWRDYXRlZ29yaWEgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfZGVsZXRlQ2F0ZWdvcmlhJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidDYXRlZ29yaWEgZWxpbWluYWRhIGV4aXRvc2FtZW50ZSd9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbyd9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxuLy9UT0RPOiBMSVNUQSBERSBESVJFQ0NJT05FU1xyXG5yb3V0ZXIuZ2V0KCcvbGlzdCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wsY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgICAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnTGlzdGFEaXJlY2Npb25lcycpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlKCdwYV9saXN0YURpcmVjY2lvbmVzJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0LnJlY29yZHNldClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamUgOiAnRXJyb3IgZW4gZWwgcmVzdWx0YWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplIDogZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogSU5TRVJUQSBESVJFQ0NJT05cclxuXHJcbnJvdXRlci5wb3N0ICgnL2luc2VydCcgLCBhc3luYyAocmVxICwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0eyBcclxuICAgICAgICAgICAgICAgIGNhbGxlRGlyZWNjaW9uICwgXHJcbiAgICAgICAgICAgICAgICBhbHR1cmFEaXJlY2Npb24gLCBcclxuICAgICAgICAgICAgICAgIGNvZGlnb1Bvc3RhbERpcmVjY2lvbiAsIFxyXG4gICAgICAgICAgICAgICAgYmFycmlvRGlyZWNjaW9uICwgXHJcbiAgICAgICAgICAgICAgICBvdHJvc0RhdG9zRGlyZWNjaW9uIFxyXG4gICAgICAgICAgICAgfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnaW5zZXJ0RGlyZWNjaW9uJylcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnY2FsbGVEaXJlY2Npb24nICwgVmFyQ2hhciAsIGNhbGxlRGlyZWNjaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2FsdHVyYURpcmVjY2lvbicgLCBJbnQgLCBhbHR1cmFEaXJlY2Npb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnY29kaWdvUG9zdGFsRGlyZWNjaW9uJyAsIEludCAsIGNvZGlnb1Bvc3RhbERpcmVjY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdiYXJyaW9EaXJlY2Npb24nICwgVmFyQ2hhciAsIGJhcnJpb0RpcmVjY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdvdHJvc0RhdG9zRGlyZWNjaW9uJyAsIFZhckNoYXIgLCBvdHJvc0RhdG9zRGlyZWNjaW9uIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2luc2VydERpcmVjY2lvbicpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonRGlyZWNjaW9uIGd1YXJkYWRhIGV4aXRvc2FtZW50ZSd9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbyd9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogVVBEQVRFIERJUkVDQ0lPTlxyXG5cclxucm91dGVyLnB1dCgnL3VwZGF0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3R7IFxyXG4gICAgICAgICAgICBjYWxsZURpcmVjY2lvbiAsIFxyXG4gICAgICAgICAgICBhbHR1cmFEaXJlY2Npb24gLCBcclxuICAgICAgICAgICAgY29kaWdvUG9zdGFsRGlyZWNjaW9uICwgXHJcbiAgICAgICAgICAgIGJhcnJpb0RpcmVjY2lvbiAsIFxyXG4gICAgICAgICAgICBvdHJvc0RhdG9zRGlyZWNjaW9uICxcclxuICAgICAgICAgICAgaWREaXJlY2Npb25cclxuICAgICAgICAgfSA9IHJlcS5ib2R5ICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ3VwZGF0ZURpcmVjY2lvbicpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnY2FsbGVEaXJlY2Npb24nICwgbXNzcWwuVmFyQ2hhciAsIGNhbGxlRGlyZWNjaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2FsdHVyYURpcmVjY2lvbicgLCBtc3NxbC5JbnQgLCBhbHR1cmFEaXJlY2Npb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnY29kaWdvUG9zdGFsRGlyZWNjaW9uJyAsIG1zc3FsLkludCAsIGNvZGlnb1Bvc3RhbERpcmVjY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdiYXJyaW9EaXJlY2Npb24nICwgbXNzcWwuVmFyQ2hhciAsIGJhcnJpb0RpcmVjY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdvdHJvc0RhdG9zRGlyZWNjaW9uJyAsIG1zc3FsLlZhckNoYXIgLCBvdHJvc0RhdG9zRGlyZWNjaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkRGlyZWNjaW9uJyAsIG1zc3FsLkludCAsIGlkRGlyZWNjaW9uIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX3VwZGF0ZURpcmVjY2lvbicpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonRGlyZWNjaW9uIG1vZGlmaWNhZGEgZXhpdG9zYW1lbnRlJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBERUxFVEUgRElSRUNJT05cclxuXHJcbnJvdXRlci5wb3N0KCcvZGVsZXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7aWREaXJlY2Npb259ID0gcmVxLmJvZHkgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ2RlbGV0ZURpcmVjY2lvbicpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWREaXJlY2Npb24nICwgbXNzcWwuSW50ICwgaWREaXJlY2Npb24gKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfZGVsZXRlRGlyZWNjaW9uJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidEaXJlY2Npb24gZWxpbWluYWRhIGV4aXRvc2FtZW50ZSd9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbyd9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxuLy9UT0RPOiBMSVNUQSBERSBNQVJDQVNcclxucm91dGVyLmdldCgnL2xpc3QnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3Qge2FicmlyQ29uZXhpb25QT09MLGNlcnJhckNvbmV4aW9uUE9PTH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICAgICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ0xpc3RhTWFyY2FzJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX2xpc3RhTWFyY2FzJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0LnJlY29yZHNldClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamUgOiAnRXJyb3IgZW4gZWwgcmVzdWx0YWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplIDogZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogSU5TRVJUQSBNQVJDQVxyXG5cclxucm91dGVyLnBvc3QgKCcvaW5zZXJ0JyAsIGFzeW5jIChyZXEgLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge25vbWJyZU1hcmNhfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnaW5zZXJ0TWFyY2EnKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgfSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmVNYXJjYScgLCBWYXJDaGFyICwgbm9tYnJlTWFyY2EgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfaW5zZXJ0TWFyY2EnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J01hcmNhIGd1YXJkYWRhIGV4aXRvc2FtZW50ZSd9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbyd9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogVVBEQVRFIE1BUkNBXHJcblxyXG5yb3V0ZXIucHV0KCcvdXBkYXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7bm9tYnJlTWFyY2EsaWRNYXJjYX0gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgndXBkYXRlTWFyY2EnKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZU1hcmNhJyAsIG1zc3FsLlZhckNoYXIgLCBub21icmVNYXJjYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZE1hcmNhJyAsIG1zc3FsLkludCAsIGlkTWFyY2EgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfdXBkYXRlTWFyY2EnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J01hcmNhIG1vZGlmaWNhZGEgZXhpdG9zYW1lbnRlJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBERUxFVEUgTUFSQ0FcclxuXHJcbnJvdXRlci5wb3N0KCcvZGVsZXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7aWRNYXJjYX0gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnZGVsZXRlTWFyY2EnKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkTWFyY2EnICwgbXNzcWwuSW50ICwgaWRNYXJjYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9kZWxldGVNYXJjYScpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonTWFyY2EgZWxpbWluYWRhIGV4aXRvc2FtZW50ZSd9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbyd9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxuLy9UT0RPOiBMSVNUQSBERSBQUk9EVUNUT1Ncclxucm91dGVyLmdldCgnL2xpc3QnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3Qge2FicmlyQ29uZXhpb25QT09MLGNlcnJhckNvbmV4aW9uUE9PTH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICAgICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ0xpc3RhUHJvZHVjdG9zJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX2xpc3RhUHJvZHVjdG9zJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0LnJlY29yZHNldClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamUgOiAnRXJyb3IgZW4gZWwgcmVzdWx0YWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplIDogZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogSU5TRVJUQSBQUk9EVUNUT1xyXG5cclxucm91dGVyLnBvc3QgKCcvaW5zZXJ0JyAsIGFzeW5jIChyZXEgLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBub21icmVQcm9kdWN0byAsIGRlc2NyaXBjaW9uUHJvZHVjdG8gLCBwcmVjaW9BY3R1YWxQcm9kdWN0byB9ID0gcmVxLmJvZHlcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdpbnNlcnRQcm9kdWN0bycpXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIFJlYWwgfSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmVQcm9kdWN0bycgLCBWYXJDaGFyICwgbm9tYnJlUHJvZHVjdG8gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZGVzY3JpcGNpb25Qcm9kdWN0bycgLCBWYXJDaGFyICwgZGVzY3JpcGNpb25Qcm9kdWN0byApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdwcmVjaW9BY3R1YWxQcm9kdWN0bycgLCBSZWFsICwgcHJlY2lvQWN0dWFsUHJvZHVjdG8gKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfaW5zZXJ0UHJvZHVjdG8nKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J1Byb2R1Y3RvIGd1YXJkYWRhIGV4aXRvc2FtZW50ZSd9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbyd9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogVVBEQVRFIFBST0RVQ1RPXHJcblxyXG5yb3V0ZXIucHV0KCcvdXBkYXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7bm9tYnJlUHJvZHVjdG8sZGVzY3JpcGNpb25Qcm9kdWN0byAsIHByZWNpb0FjdHVhbFByb2R1Y3RvICxpZFByb2R1Y3RvfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCd1cGRhdGVQcm9kdWN0bycpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlUHJvZHVjdG8nICwgbXNzcWwuVmFyQ2hhciAsIG5vbWJyZVByb2R1Y3RvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2Rlc2NyaXBjaW9uUHJvZHVjdG8nICwgbXNzcWwuVmFyQ2hhciAsIGRlc2NyaXBjaW9uUHJvZHVjdG8gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgncHJlY2lvQWN0dWFsUHJvZHVjdG8nICwgbXNzcWwuUmVhbCAsIHByZWNpb0FjdHVhbFByb2R1Y3RvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkUHJvZHVjdG8nICwgbXNzcWwuSW50ICwgaWRQcm9kdWN0byApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV91cGRhdGVQcm9kdWN0bycpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonUHJvZHVjdG8gbW9kaWZpY2FkbyBleGl0b3NhbWVudGUnfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IERFTEVURSBQUk9EVUNUT1xyXG5cclxucm91dGVyLnBvc3QoJy9kZWxldGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtpZFByb2R1Y3RvfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdkZWxldGVQcm9kdWN0bycpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRQcm9kdWN0bycgLCBtc3NxbC5JbnQgLCBpZFByb2R1Y3RvIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2RlbGV0ZVByb2R1Y3RvJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidQcm9kdWN0byBlbGltaW5hZG8gZXhpdG9zYW1lbnRlJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG4vL1RPRE86IExJU1RBIERFIFVOSURBREVTIERFIE1FRElEQVxyXG5yb3V0ZXIuZ2V0KCcvbGlzdCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wsY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgICAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnTGlzdGFVbmlkYWRlc01lZGlkYScpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlKCdwYV9saXN0YVVuaWRhZGVzTWVkaWEnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQucmVjb3Jkc2V0KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZSA6ICdFcnJvciBlbiBlbCByZXN1bHRhZG8nfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamUgOiBlLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBJTlNFUlRBIFVOSURBRCBERSBNRURJREFcclxuXHJcbnJvdXRlci5wb3N0ICgnL2luc2VydCcgLCBhc3luYyAocmVxICwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgbm9tYnJlVW5pZGFkTWVkaWRhICwgZGVzY3JpcGNpb25VbmlkYWRNZWRpZGEgfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnaW5zZXJ0VW5pZGFkTWFkaWRhJylcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyIH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlVW5pZGFkTWVkaWRhJyAsIFZhckNoYXIgLCBub21icmVVbmlkYWRNZWRpZGEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZGVzY3JpcGNpb25VbmlkYWRNZWRpZGEnICwgVmFyQ2hhciAsIGRlc2NyaXBjaW9uVW5pZGFkTWVkaWRhIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2luc2VydFVuaWRhZE1lZGlkYScpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonVW5pZGFkZSBkZSBtZWRpZGEgZ3VhcmRhZGEgZXhpdG9zYW1lbnRlJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBVUERBVEUgVU5JREFEIERFIE1FRElEQVxyXG5cclxucm91dGVyLnB1dCgnL3VwZGF0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge25vbWJyZVVuaWRhZE1lZGlkYSxkZXNjcmlwY2lvblVuaWRhZE1lZGlkYSxpZFVuaWRhZE1lZGlkYX0gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgndXBkYXRlVW5pZGFkTWVkaWRhJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmVVbmlkYWRNZWRpZGEnICwgbXNzcWwuVmFyQ2hhciAsIG5vbWJyZVVuaWRhZE1lZGlkYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdkZXNjcmlwY2lvblVuaWRhZE1lZGlkYScgLCBtc3NxbC5WYXJDaGFyICwgZGVzY3JpcGNpb25VbmlkYWRNZWRpZGEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRVbmlkYWRNZWRpZGEnICwgbXNzcWwuSW50ICwgaWRVbmlkYWRNZWRpZGEgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfdXBkYXRlVW5pZGFkTWVkaWRhJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidVbmlkYWQgZGUgbWVkaWRhIG1vZGlmaWNhZGEgZXhpdG9zYW1lbnRlJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBERUxFVEUgVU5JREFEIE1FRElEQVxyXG5cclxucm91dGVyLnBvc3QoJy9kZWxldGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtpZFVuaWRhZE1lZGlkYX0gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnZGVsZXRlVW5pZGFkTWVkaWRhJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFVuaWRhZE1lZGlkYScgLCBtc3NxbC5JbnQgLCBpZFVuaWRhZE1lZGlkYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9kZWxldGVVbmlkYWRNZWRpZGEnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J1VuaWRhZCBkZSBtZWRpZGEgZWxpbWluYWRhIGV4aXRvc2FtZW50ZSd9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbyd9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3QgYmNyeXAgPSByZXF1aXJlKCdiY3J5cHQnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbi8vICEgaW5zZXJ0YXIgdXN1YXJpb1xyXG5cclxucm91dGVyLnBvc3QgKCAnL2luc2VydCcgLCBhc3luYyAocmVxLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSAoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGNvbnN0IHsgbm9tYnJlVXN1YXJpbyAsIGFwZWxsaWRvVXN1YXJpbyAsIHVzdWFyaW8gLCBwdyB9ID0gcmVxLmJvZHlcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnaW5zZXJ0VXN1YXJpbycpXHJcbiAgICAgICAgY29uc3Qge1JlcXVlc3QgLCBWYXJDaGFyIH0gPSByZXF1aXJlICgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCdub21icmVVc3VhcmlvJyAsIFZhckNoYXIgLCBub21icmVVc3VhcmlvKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoJ2FwZWxsaWRvVXN1YXJpbycgLCBWYXJDaGFyICwgYXBlbGxpZG9Vc3VhcmlvKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoJ3VzdWFyaW8nICwgVmFyQ2hhciAsIHVzdWFyaW8pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICgncHcnICwgVmFyQ2hhciAsIGJjcnlwLmhhc2hTeW5jKHB3ICwgMTApIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSggJ3BhX2luc2VydFVzdWFyaW8nIClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oIHsgbWVuc2FqZSA6ICdVc3VhcmlvIGluc2VydGFkbyBjb3JyZWN0YW1lbnRlICcgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5cclxuXHJcbi8vIC8vICEgbGlzdGFkbyBkZSB1c3Vhcmlvc1xyXG4vLyByb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuLy8gICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSAoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuLy8gICAgIHRyeXtcclxuLy8gICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCAnbGlhc3RhVXN1YXJpbycpXHJcbi8vICAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbi8vICAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QoY29uZXhpb24pXHJcbi8vICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX2xpc3RhVXN1YXJpb3MnKVxyXG4vLyAgICAgICAgIGlmKHJlc3VsdCl7XHJcbi8vICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbi8vICAgICAgICAgICAgIHJlcy5qc29uKHJlc3VsdC5yZWNvcmRzZXQpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGVsc2V7XHJcbi8vICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbi8vICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtzdGF0dXM6IDQwMyxtZW5zYWplOmUubWVzc2FnZX0pXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgY2F0Y2goZSl7XHJcbi8vICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7c3RhdHVzOiA0MDMsbWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG4vLyAvLyEgbGlzdGEgZGUgcGVyZmlsZXNcclxuLy8gcm91dGVyLmdldCgnL3BlcmZpbGVzJyxhc3luYyAocmVxLHJlcyk9PntcclxuLy8gICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSAoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuLy8gICAgIHRyeXtcclxuLy8gICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCAnbGlzdGFQZXJmaWxlcycpXHJcbi8vICAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbi8vICAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QoY29uZXhpb24pXHJcbi8vICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX2xpc3RhUGVyZmlsZXMnKVxyXG4vLyAgICAgICAgIGlmKHJlc3VsdCl7XHJcbi8vICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbi8vICAgICAgICAgICAgIHJlcy5qc29uKHJlc3VsdC5yZWNvcmRzZXQpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGVsc2V7XHJcbi8vICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbi8vICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtzdGF0dXM6IDQwMyxtZW5zYWplOmUubWVzc2FnZX0pXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgY2F0Y2goZSl7XHJcbi8vICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7c3RhdHVzOiA0MDMsbWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG4vLyAvLyEgY29uc3VsdGEgdXN1YXJpbyBwb3IgaWRcclxuLy8gcm91dGVyLmdldCgnLzppZCcsYXN5bmMgKHJlcSxyZXMpPT57XHJcbi8vICAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWRcclxuLy8gICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSAoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuLy8gICAgIHRyeXtcclxuLy8gICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCAnZ2V0VXNleElkJylcclxuLy8gICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuLy8gICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdChjb25leGlvbilcclxuLy8gICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVXN1YXJpbycgLCBtc3NxbC5JbnQgLCBpZClcclxuLy8gICAgICAgICBjb25zdCBxdWVyeSA9IGBzZWxlY3RcclxuLy8gICAgICAgICB1LmlkIGFzIGlkVXN1YXJpbyAsXHJcbi8vICAgICAgICAgdS51c2VyTmFtZSBhcyB1c2VyTmFtZSAsXHJcbi8vICAgICAgICAgdS5lbWFpbCBhcyBlbWFpbCAsXHJcbi8vICAgICAgICAgdS5ub21icmUgYXMgbm9tYnJlVXN1YXJpbyAsXHJcbi8vICAgICAgICAgdS5hcGVsbGlkbyBhcyBhcGVsbGlkb1VzdWFyaW8gLFxyXG4vLyAgICAgICAgIHAuaWQgYXMgaWRQZXJmaWwgLFxyXG4vLyAgICAgICAgIHAubm9tYnJlIGFzIG5vbWJyZVBlcmZpbFxyXG4vLyAgICAgICAgIGZyb20gdXN1YXJpb3MgdVxyXG4vLyAgICAgICAgIGpvaW4gcGVyZmlsZXMgcCBvbiBwLmlkID0gdS5pZF9wZXJmaWxcclxuLy8gICAgICAgICB3aGVyZSB1LmlkID0gQGlkVXN1YXJpb2BcclxuLy8gICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkocXVlcnkpXHJcbi8vICAgICAgICAgaWYocmVzdWx0KXtcclxuLy8gICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICAgICAgcmVzLmpzb24ocmVzdWx0LnJlY29yZHNldClcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgZWxzZXtcclxuLy8gICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oe3N0YXR1czogNDAzLG1lbnNhamU6ZS5tZXNzYWdlfSlcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICBjYXRjaChlKXtcclxuLy8gICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4vLyAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtzdGF0dXM6IDQwMyxtZW5zYWplOmUubWVzc2FnZX0pXHJcbi8vICAgICB9XHJcbi8vIH0pXHJcblxyXG4vLyAvLyFndWFyZGEgdXN1YXJpb1xyXG4vLyByb3V0ZXIucG9zdCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbi8vICAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4vLyAgICAgY29uc3QgIHt1c2VyTmFtZSxwYXNzd29yZCxlbWFpbCxub21icmUsYXBlbGxpZG8saWRQZXJmaWx9ID0gcmVxLmJvZHlcclxuLy8gICAgIHRyeXtcclxuLy8gICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdzYXZlVXNlcicpXHJcbi8vICAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlICgnbXNzcWwnKVxyXG4vLyAgICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0KGNvbmV4aW9uKVxyXG4vLyAgICAgICAgIGNvbnN0IHB3ID0gYmNyeXAuaGFzaFN5bmMocGFzc3dvcmQsMTApXHJcbi8vICAgICAgICAgY29uc29sZS5sb2cocHcpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCd1c2VyTmFtZScgLCBtc3NxbC5WYXJDaGFyICwgdXNlck5hbWUpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdwYXNzd29yZCcgLCBtc3NxbC5WYXJDaGFyICwgcHcpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdlbWFpbCcgLCBtc3NxbC5WYXJDaGFyICwgZW1haWwpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmUnICwgbXNzcWwuVmFyQ2hhciAsIG5vbWJyZSlcclxuLy8gICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2FwZWxsaWRvJyAsIG1zc3FsLlZhckNoYXIgLCBhcGVsbGlkbylcclxuLy8gICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkUGVyZmlsJyAsIG1zc3FsLkludCAsIGlkUGVyZmlsKVxyXG4vLyAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlKCdwYV9pbnNlcnRVc3VhcmlvcycpXHJcbi8vICAgICAgICAgaWYocmVzdWx0KXtcclxuLy8gICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4vLyAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6ICd1c3VhcmlvIGluc2VydGFkbyBjb3JyZWN0YW1lbnRlICEnIH0pXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgY2F0Y2goZXJyKXtcclxuLy8gICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4vLyAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHtlcnJvcjplcnIubWVzc2FnZX0pXHJcbi8vICAgICB9XHJcbi8vIH0pXHJcblxyXG4vLyByb3V0ZXIucHV0KCcvJywgYXN5bmMgKHJlcSxyZXMpPT57XHJcbi8vICAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4vLyAgICAgY29uc3QgIHt1c2VyTmFtZSxwYXNzd29yZCxlbWFpbCxub21icmUsYXBlbGxpZG8saWRQZXJmaWwgLCBpZFVzdWFyaW99ID0gcmVxLmJvZHlcclxuLy8gICAgIHRyeXtcclxuLy8gICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCd1cGRhdGVVc2VyJylcclxuLy8gICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUgKCdtc3NxbCcpXHJcbi8vICAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QoY29uZXhpb24pXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCd1c2VyTmFtZScgLCBtc3NxbC5WYXJDaGFyICwgdXNlck5hbWUpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdwYXNzd29yZCcgLCBtc3NxbC5WYXJDaGFyICwgYmNyeXAuaGFzaFN5bmMocGFzc3dvcmQpKVxyXG4vLyAgICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZW1haWwnICwgbXNzcWwuVmFyQ2hhciAsIGVtYWlsKVxyXG4vLyAgICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlJyAsIG1zc3FsLlZhckNoYXIgLCBub21icmUpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdhcGVsbGlkbycgLCBtc3NxbC5WYXJDaGFyICwgYXBlbGxpZG8pXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFBlcmZpbCcgLCBtc3NxbC5JbnQgLCBpZFBlcmZpbClcclxuLy8gICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVXN1YXJpbycgLCBtc3NxbC5JbnQgLCBpZFVzdWFyaW8pXHJcbi8vICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX3VwZGF0ZVVzdWFyaW9zJylcclxuLy8gICAgICAgICBpZihyZXN1bHQpe1xyXG4vLyAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbi8vICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTogJ3VzdWFyaW8gaW5zZXJ0YWRvIGNvcnJlY3RhbWVudGUgIScgfSlcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICBjYXRjaChlKXtcclxuLy8gICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4vLyAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHtlcnJvcjplcnIubWVzc2FnZX0pXHJcbi8vICAgICB9XHJcbi8vIH0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29sb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1zc3FsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=