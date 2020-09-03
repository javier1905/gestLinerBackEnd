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
servidor.use('/api/articulos', __webpack_require__(/*! ./rutasApi/articulos */ "./rutasApi/articulos.js"));
servidor.use('/api/tiposDocumento', __webpack_require__(/*! ./rutasApi/tiposDocumento */ "./rutasApi/tiposDocumento.js"));
servidor.use('/api/tiposPersona', __webpack_require__(/*! ./rutasApi/tiposPersona */ "./rutasApi/tiposPersona.js"));
servidor.use('/api/tiposContribullente', __webpack_require__(/*! ./rutasApi/tiposContribullente */ "./rutasApi/tiposContribullente.js"));
servidor.use('/api/clientes', __webpack_require__(/*! ./rutasApi/clientes */ "./rutasApi/clientes.js"));
servidor.use('/api/sucursales', __webpack_require__(/*! ./rutasApi/sucursales */ "./rutasApi/sucursales.js"));
servidor.use('/api/proveedores', __webpack_require__(/*! ./rutasApi/proveedores */ "./rutasApi/proveedores.js"));
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
        mensaje: 'Articulo guardado exitosamente'
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
        mensaje: 'Arcticulo modificado exitosamente'
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
        mensaje: 'Articulo eliminado exitosamente'
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
        mensaje: 'Cliente guardado exitosamente'
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
        mensaje: 'Cliente modificado exitosamente'
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
        mensaje: 'Cliente eliminado exitosamente'
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
      res.status(403).json({
        mensaje: err.message
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
        res.status(403).json({
          mensaje: 'Producto no insertado'
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
            res.status(403).json({
              mensaje: errorCallBack
            });
          } else {
            myTransaction.commit();
            cerrarConexionPOOL();
            res.status(200).json({
              mensaje: 'Producto y detalles de producto guardados exitosamente'
            });
          }
        });
      }
    } catch (e) {
      myTransaction.rollback();
      cerrarConexionPOOL();
      res.status(403).json({
        mensaje: e.message
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
        mensaje: 'Proveedor guardado exitosamente'
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
        mensaje: 'Proveedor modificado exitosamente'
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
        mensaje: 'Proveedor eliminado exitosamente'
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
        mensaje: 'Sucursal guardada exitosamente'
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
        mensaje: 'Sucursal modificada exitosamente'
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
        mensaje: 'Sucursal eliminada exitosamente'
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
        mensaje: 'Tipo de contribullente guardado exitosamente'
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
        mensaje: 'Tipo de contribullente modificado exitosamente'
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
        mensaje: 'Tipo de contribullente eliminado exitosamente'
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
        mensaje: 'Tipo de documento guardado exitosamente'
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
        mensaje: 'Tipo de documento modificado exitosamente'
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
        mensaje: 'Tipo de documento eliminado exitosamente'
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
        mensaje: 'Tipo de persona guardada exitosamente'
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
        mensaje: 'Tipo de persona modificada exitosamente'
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
        mensaje: 'Tipo de persona eliminada exitosamente'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ09ORklHLmpzIiwid2VicGFjazovLy8uL2NvbmV4aW9uZXMvc3FsU2VydmVyLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL0F1dGVudGlmaWNhc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9Mb2d1ZW8uanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvYXJ0aWN1bG9zLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL2NhdGVnb3JpYXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvY2xpZW50ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvZGlyZWNjaW9uZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvbWFyY2FzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3Byb2R1Y3Rvcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9wcm92ZWVkb3Jlcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9zdWN1cnNhbGVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3RpcG9zQ29udHJpYnVsbGVudGUuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvdGlwb3NEb2N1bWVudG8uanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvdGlwb3NQZXJzb25hLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3VuaWRhZGVzTWVkaWRhLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3VzdWFyaW9zLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFzeW5jXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmNyeXB0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29sb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb3JnYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtc3NxbFwiIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJzZWNyZXQiLCJtc3NxbCIsInJlcXVpcmUiLCJwcm9jZXNzIiwiVVJJIiwidXNlciIsInBhc3N3b3JkIiwiZGF0YWJhc2UiLCJzZXJ2ZXIiLCJvcHRpb25zIiwiYXBwTmFtZSIsImVuYWJsZUFyaXRoQWJvcnQiLCJlbmNyeXB0IiwiY29ubmVjdGlvblRpbWVPdXQiLCJkcml2ZXIiLCJzdHJlYW0iLCJwb29sIiwibWF4IiwibWluIiwiaWRsZVRpbWVvdXRNaWxsaXMiLCJDb25leGlvblNRTCIsImFicmlyQ29uZXhpb24iLCJ1bmRlZmluZWQiLCJjZXJyYXJDb25leGlvbiIsImFicmlyQ29uZXhpb25QT09MIiwiY2VycmFyQ29uZXhpb25QT09MIiwiY29uZXhpb25lcyIsIm5hbWUiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJuZXdDb25leGlvbiIsIkNvbm5lY3Rpb25Qb29sIiwiY2xvc2UiLCJiaW5kIiwiYXJncyIsImNvbm5lY3QiLCJQcm9taXNlIiwiYWxsIiwidmFsdWVzIiwibWFwIiwiZXhwcmVzcyIsImNvcnMiLCJtb3JnYW4iLCJzZXJ2aWRvciIsInVzZSIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJzZXQiLCJlbnYiLCJQT1JUIiwibGlzdGVuIiwiZ2V0IiwibSIsImUiLCJjb25zb2xlIiwibG9nIiwieWVsbG93IiwiUm91dGVyIiwiand0IiwiQ09ORklHIiwicm91dGVyIiwicmVxIiwicmVzIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJzdGF0dXMiLCJtZW5zYWplIiwidG9rZW4iLCJzcGxpdCIsInZlcmlmeSIsImQiLCJiY3J5cHQiLCJwb3N0IiwidXN1YXJpbyIsInB3IiwiYm9keSIsIlJlcXVlc3QiLCJWYXJDaGFyIiwiY29uZXhpb24iLCJteVJlcXVlc3QiLCJpbnB1dCIsInJlc3VsdCIsImV4ZWN1dGUiLCJyb3dzQWZmZWN0ZWQiLCJjb21wYXJlU3luYyIsInJlY29yZHNldCIsIm5vbWJyZVVzdWFyaW8iLCJhcGVsbGlkb1VzdWFyaW8iLCJzaWduIiwiZXhwaXJlc0luIiwiZXJyb3IiLCJtZXNzYWdlIiwibm9tYnJlQXJ0aWN1bG8iLCJkZXNjcmlwY2lvbkFydGljdWxvIiwicGVzb0FydGljdWxvIiwiY29kUHJvdmVkb3JBcnRpY3VsbyIsImNvZEludGVybm9BcnRpY3VsbyIsImlkVW5pZGFkTWVkaWRhIiwiaWRDYXRlZ29yaWEiLCJpZE1hcmNhIiwiUmVhbCIsIkludCIsInB1dCIsImlkQXJ0aWN1bG8iLCJub21icmVDYXRlZ29yaWEiLCJkZXNjcmlwY2lvbkNhdGVnb3JpYSIsIm5vbWJyZUNsaWVudGUiLCJhcGVsbGlkb0NsaWVudGUiLCJpZFRpcG9Eb2N1bWVudG8iLCJucm9Eb2NDbGllbnRlIiwiaWRUaXBvQ29udHJpYnVsbGVudGUiLCJucm9DdWl0Q3VpbENsaWVudGUiLCJpZERpcmVjY2lvbiIsImlkVGlwb1BlcnNvbmEiLCJpZENsaWVudGUiLCJjYWxsZURpcmVjY2lvbiIsImFsdHVyYURpcmVjY2lvbiIsImNvZGlnb1Bvc3RhbERpcmVjY2lvbiIsImJhcnJpb0RpcmVjY2lvbiIsIm90cm9zRGF0b3NEaXJlY2Npb24iLCJub21icmVNYXJjYSIsImVhY2hTZXJpZXMiLCJub21icmVQcm9kdWN0byIsImRlc2NyaXBjaW9uUHJvZHVjdG8iLCJwcmVjaW9BY3R1YWxQcm9kdWN0byIsInZlY0RldGFsbGVzUHJvZHVjdG8iLCJUcmFuc2FjdGlvbiIsIm15VHJhbnNhY3Rpb24iLCJiZWdpbiIsImVyciIsInJvbGxiYWNrIiwiaWRQcm9kdWN0byIsInBhcnNlSW50IiwibXlSZXF1ZXN0RFAiLCJEUCIsImNhbGxiYWNrIiwicGFyYW1ldGVycyIsInZhbHVlIiwiY2FudGlkYWREZXRhbGxlUHJvZHVjdG8iLCJFIiwiUiIsImVycm9yQ2FsbEJhY2siLCJjb21taXQiLCJub21icmVQcm92ZWVkb3IiLCJhcGVsbGlkb1Byb3ZlZWRvciIsIm5yb0RvY1Byb3ZlZWRvciIsIm5yb0N1aXRDdWlsUHJvdmVlZG9yIiwiaWRQcm92ZWVkb3IiLCJub21icmVTdWN1cnNhbCIsImlkU3VjdXJzYWwiLCJub21icmVUaXBvQ29udHJpYnVsbGVudGUiLCJkZXNjcmlwY2lvblRpcG9Db250cmlidWxsZW50ZSIsIm5vbWJyZVRpcG9Eb2N1bWVudG8iLCJub21icmVUaXBvUGVyc29uYSIsIm5vbWJyZVVuaWRhZE1lZGlkYSIsImRlc2NyaXBjaW9uVW5pZGFkTWVkaWRhIiwiYmNyeXAiLCJoYXNoU3luYyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDYkMsUUFBTSxFQUFDO0FBRE0sQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNBQSxNQUFN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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFoRyxNQUFNLENBQUNDLE9BQVAsR0FBaUJnRSxNQUFqQixDOzs7Ozs7Ozs7OztBQ3ZLQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBzZWNyZXQ6J21hc3RlclNvZnQyMDIwJ1xyXG59IiwiY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpO1xyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7IHJlcXVpcmUoJ2NvbG9ycycpIH1cclxuXHJcbnZhciBVUklcclxuXHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgIC8vIFVSSSA9IHtcclxuICAgIC8vICAgICB1c2VyOiBcclxuICAgIC8vICAgICBwYXNzd29yZDogXHJcbiAgICAvLyAgICAgZGF0YWJhc2U6IFxyXG4gICAgLy8gICAgIHBvcnQ6MTQzMyxcclxuICAgIC8vICAgICBzZXJ2ZXI6J1xyXG4gICAgLy8gICAgIG9wdGlvbnM6e1xyXG4gICAgLy8gICAgICAgICBhcHBOYW1lOlxyXG4gICAgLy8gICAgICAgICBlbmFibGVBcml0aEFib3J0OnRydWUsXHJcbiAgICAvLyAgICAgICAgIGVuY3J5cHQ6ZmFsc2VcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgLFxyXG4gICAgLy8gICAgIGNvbm5lY3Rpb25UaW1lT3V0OjE1MDAwMCxcclxuICAgIC8vICAgICBkcml2ZXI6J3RlZGlvdXMnLFxyXG4gICAgLy8gICAgIHN0cmVhbTpmYWxzZSxcclxuICAgIC8vICAgICBwb29sOntcclxuICAgIC8vICAgICAgICAgbWF4OjIwLFxyXG4gICAgLy8gICAgICAgICBtaW46MCxcclxuICAgIC8vICAgICAgICAgaWRsZVRpbWVvdXRNaWxsaXM6MzAwMDAsXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy9WSjczMDBcclxuICAgIC8vIH1cclxuICAgIFVSSSA9IHtcclxuICAgICAgICB1c2VyOiAnZ2VzdExpbmVfU1FMTG9naW5fMScsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdsdHA2eG11cDN0JyxcclxuICAgICAgICBkYXRhYmFzZTogJ2dlc3RMaW5lREInLFxyXG4gICAgICAgIHNlcnZlcjonZ2VzdExpbmVEQi5tc3NxbC5zb21lZS5jb20nLFxyXG4gICAgICAgIG9wdGlvbnM6e1xyXG4gICAgICAgICAgICBhcHBOYW1lOidtYXN0ZXJTb2Z0LUFQSScsXHJcbiAgICAgICAgICAgIGVuYWJsZUFyaXRoQWJvcnQ6dHJ1ZSxcclxuICAgICAgICAgICAgZW5jcnlwdDpmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICAsXHJcbiAgICAgICAgY29ubmVjdGlvblRpbWVPdXQ6MTUwMDAwLFxyXG4gICAgICAgIGRyaXZlcjondGVkaW91cycsXHJcbiAgICAgICAgc3RyZWFtOmZhbHNlLFxyXG4gICAgICAgIHBvb2w6e1xyXG4gICAgICAgICAgICBtYXg6MjAsXHJcbiAgICAgICAgICAgIG1pbjowLFxyXG4gICAgICAgICAgICBpZGxlVGltZW91dE1pbGxpczozMDAwMCxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZWxzZXtcclxuICAgIFVSSSA9IHtcclxuICAgICAgICB1c2VyIDogcHJvY2Vzcy5lbnYuVVNFUlNRTCAsXHJcbiAgICAgICAgcGFzc3dvcmQgOiBwcm9jZXNzLmVudi5QQVNTV09SRFNRTCAsXHJcbiAgICAgICAgZGF0YWJhc2UgOiBwcm9jZXNzLmVudi5EQVRBQkFTRVNRTCAsXHJcbiAgICAgICAgc2VydmVyIDogcHJvY2Vzcy5lbnYuU0VSVkVSU1FMICxcclxuICAgICAgICBvcHRpb25zIDoge1xyXG4gICAgICAgICAgICBlbmFibGVBcml0aEFib3J0IDogdHJ1ZSAsXHJcbiAgICAgICAgICAgIGVuY3J5cHQgOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciBDb25leGlvblNRTCA9IHsgYWJyaXJDb25leGlvbjp1bmRlZmluZWQsIGNlcnJhckNvbmV4aW9uOnVuZGVmaW5lZCwgYWJyaXJDb25leGlvblBPT0w6dW5kZWZpbmVkLCBjZXJyYXJDb25leGlvblBPT0w6dW5kZWZpbmVkIH1cclxuLy8gdmFyIGNvbmV4aW9uXHJcbi8vIENvbmV4aW9uU1FMLmFicmlyQ29uZXhpb24gPSBhc3luYyBmdW5jdGlvbiAoKXtcclxuLy8gICAgIGF3YWl0IG1zc3FsLmNvbm5lY3QoVVJJKVxyXG4vLyAgICAgLnRoZW4ocG9vbD0+e1xyXG4vLyAgICAgICAgIGlmKHBvb2wuX2Nvbm5lY3RlZCl7XHJcbi8vICAgICAgICAgICAgIGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb25lY2lvbiBTUUwgU0VSVkVSJy5ibHVlLCcgQUJJRVJUQScuZ3JlZW4pXHJcbi8vICAgICAgICAgICAgICAgICBjb25leGlvbiA9IHBvb2xcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBlbHNle1xyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZGUgQ29uZXhpb24nLHBvb2wuX2Nvbm5lY3RlZClcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9KVxyXG4vLyB9XHJcbi8vIENvbmV4aW9uU1FMLmNlcnJhckNvbmV4aW9uID0gYXN5bmMgZnVuY3Rpb24gKCl7XHJcbi8vICAgICBhd2FpdCBjb25leGlvbi5jbG9zZSgpXHJcbi8vICAgICBpZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coJ0NvbmVjaW9uIFNRTCBTRVJWRVInLmJsdWUsJyBDRVJSQURBJy5ncmVlbilcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuY29uc3QgY29uZXhpb25lcyA9IHt9XHJcblxyXG5Db25leGlvblNRTC5hYnJpckNvbmV4aW9uUE9PTCA9IGFzeW5jIG5hbWUgPT57XHJcbiAgICBpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmV4aW9uZXMsbmFtZSkpe1xyXG4gICAgICAgIGNvbnN0IG5ld0NvbmV4aW9uID0gbmV3IG1zc3FsLkNvbm5lY3Rpb25Qb29sKFVSSSlcclxuICAgICAgICBjb25zdCBjbG9zZSA9IG5ld0NvbmV4aW9uLmNsb3NlLmJpbmQobmV3Q29uZXhpb24pXHJcbiAgICAgICAgbmV3Q29uZXhpb24uY2xvc2UgPSAoLi4uYXJncykgPT4ge1xyXG4gICAgICAgICAgICBkZWxldGUgY29uZXhpb25lc1tuYW1lXVxyXG4gICAgICAgICAgICByZXR1cm4gY2xvc2UoLi4uYXJncylcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgbmV3Q29uZXhpb24uY29ubmVjdCgpXHJcbiAgICAgICAgY29uZXhpb25lc1tuYW1lXSA9IG5ld0NvbmV4aW9uXHJcbiAgICAgICAgcmV0dXJuIGNvbmV4aW9uZXNbbmFtZV1cclxuICAgIH1cclxufVxyXG5cclxuQ29uZXhpb25TUUwuY2VycmFyQ29uZXhpb25QT09MID0gKCkgPT57XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LnZhbHVlcyhjb25leGlvbmVzKS5tYXAoKHBvb2wpPT57XHJcbiAgICAgICAgcmV0dXJuIHBvb2wuY2xvc2UoKVxyXG4gICAgfSkpXHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBDb25leGlvblNRTCIsImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3QgY29ycyA9IHJlcXVpcmUoJ2NvcnMnKVxyXG52YXIgbW9yZ2FuXHJcblxyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbiAgICByZXF1aXJlKCdjb2xvcnMnKVxyXG4gICAgbW9yZ2FuID0gcmVxdWlyZSgnbW9yZ2FuJylcclxufVxyXG4vLyBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5OT0RFX0VOVilcclxuXHJcbmNvbnN0IHNlcnZpZG9yID0gZXhwcmVzcygpXHJcbnNlcnZpZG9yLnVzZShjb3JzKCkpXHJcblxyXG4vLyBtaWRkZWx3YXJlXHJcblxyXG5zZXJ2aWRvci51c2UoZXhwcmVzcy5qc29uKCkpXHJcbnNlcnZpZG9yLnVzZShleHByZXNzLnVybGVuY29kZWQoe2V4dGVuZGVkOiB0cnVlfSkpXHJcbi8vIHNlcnZpZG9yLnVzZShyZXF1aXJlKCcuL3J1dGFzQXBpL2F1dGhBY2Nlc29zL2F1dGhBbGxSb3V0ZXInKSlcclxuXHJcblxyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyApIHsgIHNlcnZpZG9yLnVzZShtb3JnYW4oJ2RldicpKSB9XHJcblxyXG5zZXJ2aWRvci51c2UoJy9hcGkvbG9ndWVvJyxyZXF1aXJlKCcuL3J1dGFzQXBpL0xvZ3VlbycpKVxyXG4vLyBzZXJ2aWRvci51c2UoJy9hcGkvYXV0aFJvdXRlclJlYWN0L2FkbWluJyxyZXF1aXJlKCcuL3J1dGFzQXBpL2F1dGhBY2Nlc29zUmVhY3QvYXV0aEFkbWluUm91dGVyUmVhY3QnKSlcclxuLy8gc2Vydmlkb3IudXNlKCcvYXBpL2F1dGhSb3V0ZXJSZWFjdC9uaXZlbDEnLHJlcXVpcmUoJy4vcnV0YXNBcGkvYXV0aEFjY2Vzb3NSZWFjdC9hdXRoTml2ZWwxUm91dGVyUmVhY3QnKSlcclxuLy8gc2Vydmlkb3IudXNlKCcvYXBpL2F1dGhSb3V0ZXJSZWFjdC9uaXZlbDInLHJlcXVpcmUoJy4vcnV0YXNBcGkvYXV0aEFjY2Vzb3NSZWFjdC9hdXRoTml2ZWwyUm91dGVyUmVhY3QnKSlcclxuLy8gc2Vydmlkb3IudXNlKCcvYXBpL2F1dGhSb3V0ZXJSZWFjdC9uaXZlbDMnLHJlcXVpcmUoJy4vcnV0YXNBcGkvYXV0aEFjY2Vzb3NSZWFjdC9hdXRoTml2ZWwzUm91dGVyUmVhY3QnKSlcclxuLy8gc2Vydmlkb3IudXNlKCcvYXBpL2F1dGhSb3V0ZXJSZWFjdC9uaXZlbDQnLHJlcXVpcmUoJy4vcnV0YXNBcGkvYXV0aEFjY2Vzb3NSZWFjdC9hdXRoTml2ZWw0Um91dGVyUmVhY3QnKSlcclxuLy8gc2Vydmlkb3IudXNlKCcvYXBpL2F1dGhSb3V0ZXJSZWFjdC9uaXZlbDUnLHJlcXVpcmUoJy4vcnV0YXNBcGkvYXV0aEFjY2Vzb3NSZWFjdC9hdXRoTml2ZWw1Um91dGVyUmVhY3QnKSlcclxuLy8gc2Vydmlkb3IudXNlKCcvYXBpL3VzdWFyaW9zJyxyZXF1aXJlKCcuL3J1dGFzQXBpL2F1dGhBY2Nlc29zL2F1dGhBZG1pblJvdXRlcicpLHJlcXVpcmUoJy4vcnV0YXNBcGkvdXN1YXJpb3MnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3VzdWFyaW9zJyxyZXF1aXJlKCcuL3J1dGFzQXBpL3VzdWFyaW9zJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9jYXRlZ29yaWFzJyAsIHJlcXVpcmUoJy4vcnV0YXNBcGkvY2F0ZWdvcmlhcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvdW5pZGFkZXNNZWRpZGEnICwgcmVxdWlyZSgnLi9ydXRhc0FwaS91bmlkYWRlc01lZGlkYScpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvZGlyZWNjaW9uZXMnICwgcmVxdWlyZSgnLi9ydXRhc0FwaS9kaXJlY2Npb25lcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvbWFyY2FzJyAsIHJlcXVpcmUoJy4vcnV0YXNBcGkvbWFyY2FzJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9wcm9kdWN0b3MnICwgcmVxdWlyZSgnLi9ydXRhc0FwaS9wcm9kdWN0b3MnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL2FydGljdWxvcycgLCByZXF1aXJlKCcuL3J1dGFzQXBpL2FydGljdWxvcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvdGlwb3NEb2N1bWVudG8nICwgcmVxdWlyZSgnLi9ydXRhc0FwaS90aXBvc0RvY3VtZW50bycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvdGlwb3NQZXJzb25hJyAsIHJlcXVpcmUoJy4vcnV0YXNBcGkvdGlwb3NQZXJzb25hJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS90aXBvc0NvbnRyaWJ1bGxlbnRlJyAsIHJlcXVpcmUoJy4vcnV0YXNBcGkvdGlwb3NDb250cmlidWxsZW50ZScpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvY2xpZW50ZXMnICwgcmVxdWlyZSgnLi9ydXRhc0FwaS9jbGllbnRlcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvc3VjdXJzYWxlcycgLCByZXF1aXJlKCcuL3J1dGFzQXBpL3N1Y3Vyc2FsZXMnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3Byb3ZlZWRvcmVzJyAsIHJlcXVpcmUoJy4vcnV0YXNBcGkvcHJvdmVlZG9yZXMnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL2F1dGVudGlmaWNhc2lvbicscmVxdWlyZSgnLi9ydXRhc0FwaS9BdXRlbnRpZmljYXNpb24nKSlcclxuLy9cclxuXHJcbi8vU2V0dGluZ3Ncclxuc2Vydmlkb3Iuc2V0KCdwb3J0Jyxwcm9jZXNzLmVudi5QT1JUIHx8IDUwMDApXHJcblxyXG5zZXJ2aWRvci5saXN0ZW4oc2Vydmlkb3IuZ2V0KCdwb3J0JyksKG0sZSk9PntcclxuICAgIGlmKGUpe2NvbnNvbGUubG9nKGUpfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2Vydmlkb3IgY29ycmllbmRvIGVuIGVsIFBVRVJUTycueWVsbG93LHNlcnZpZG9yLmdldCgncG9ydCcpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2Vydmlkb3IgY29ycmllbmRvIGVuIGVsIFBVRVJUTycsc2Vydmlkb3IuZ2V0KCdwb3J0JykpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSIsImNvbnN0IFJvdXRlciA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKVxyXG5jb25zdCBDT05GSUcgPSByZXF1aXJlKCcuLi9DT05GSUcnKVxyXG5cclxuY29uc3Qgcm91dGVyPVJvdXRlcigpO1xyXG5cclxucm91dGVyLmdldCgnLycsKHJlcSxyZXMpPT57XHJcblxyXG4gICAgaWYoIXJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24pe1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidObyBlbnZpbyBlbCBUb2tlbiBlbiBlbCBoZWFkZXJzJ30pXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24uc3BsaXQoJyAnKVsxXTtcclxuICAgICAgICBqd3QudmVyaWZ5KHRva2VuLENPTkZJRy5zZWNyZXQsKGUsZCk9PntcclxuICAgICAgICAgICAgaWYoZSl7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm5hbWV9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSlcclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7IiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3QgYmNyeXB0ID1yZXF1aXJlKCdiY3J5cHQnKVxyXG4vLyBjb25zdCBVc3VhcmlvID0gcmVxdWlyZSgnLi4vZXNxdWVtYXNNb25nby9lc3F1ZW1hVXN1YXJpb3MnKVxyXG5jb25zdCB7c2VjcmV0fSA9IHJlcXVpcmUoJy4uL0NPTkZJRycpXHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpXHJcbmNvbnN0IHsgdG9rZW4gfSA9IHJlcXVpcmUoJ21vcmdhbicpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5cclxuXHJcbnJvdXRlci5wb3N0ICggJy8nICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgY29uc3QgeyB1c3VhcmlvICwgcHcgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyIH0gPSByZXF1aXJlICgnbXNzcWwnKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICgnbG9ndWVvVXN1YXJpbycpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoJ3VzdWFyaW8nICwgVmFyQ2hhciAsIHVzdWFyaW8gKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfbG9naW4nKVxyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgaWYocmVzdWx0LnJvd3NBZmZlY3RlZFswXSA9PT0gMCApIHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uICggeyBtZW5zYWplIDogJ1VzdWFyaW8gaW5leGlzdGVudGUgJyB9IClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICggIWJjcnlwdC5jb21wYXJlU3luYyggcHcgLCByZXN1bHQucmVjb3Jkc2V0WzBdLnB3ICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oIHsgbWVuc2FqZSA6ICdQYXNzd29yZCBpbmNvcnJlY3RhICcgfSApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub21icmVVc3VhcmlvIDogcmVzdWx0LnJlY29yZHNldFswXS5ub21icmVVc3VhcmlvICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBlbGxpZG9Vc3VhcmlvIDogcmVzdWx0LnJlY29yZHNldFswXS5hcGVsbGlkb1VzdWFyaW8gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c3VhcmlvIDogcmVzdWx0LnJlY29yZHNldFswXS51c3VhcmlvXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGp3dC5zaWduKCB1c2VyICwgcmVxdWlyZSgnLi4vQ09ORklHJykuc2VjcmV0ICwgeyBleHBpcmVzSW4gOiAxNDQwMCB9ICAsICAgKCBlcnJvciAsIHRva2VuICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVycm9yICkgeyByZXMuc3RhdHVzKDIwMCkuanNvbiAoIHsgbWVuc2FqZSA6ICdFcnJvciBhbCBnZW5lcmFyIGVsIHRva2VuJyB9ICkgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7dG9rZW59KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24gKHJlc3VsdClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZSA6IGUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0gKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG4vL1RPRE86IExJU1RBIERFIEFSVElDVUxPU1xyXG5yb3V0ZXIuZ2V0KCcvbGlzdCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wsY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgICAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnTGlzdGFBcnRpY3Vsb3MnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSgncGFfbGlzdGFBcnRpY3Vsb3MnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQucmVjb3Jkc2V0KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZSA6ICdFcnJvciBlbiBlbCByZXN1bHRhZG8nfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamUgOiBlLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBJTlNFUlRBIEFSVElDVUxPXHJcblxyXG5yb3V0ZXIucG9zdCAoJy9pbnNlcnQnICwgYXN5bmMgKHJlcSAsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IG5vbWJyZUFydGljdWxvLGRlc2NyaXBjaW9uQXJ0aWN1bG8scGVzb0FydGljdWxvLGNvZFByb3ZlZG9yQXJ0aWN1bG8sXHJcbiAgICAgICAgICAgIGNvZEludGVybm9BcnRpY3VsbyxpZFVuaWRhZE1lZGlkYSxpZENhdGVnb3JpYSxpZE1hcmNhXHJcbiAgICAgICAgfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnaW5zZXJ0QXJ0aWN1bG8nKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgLCBSZWFsICwgSW50IH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlQXJ0aWN1bG8nICwgVmFyQ2hhciAsIG5vbWJyZUFydGljdWxvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2Rlc2NyaXBjaW9uQXJ0aWN1bG8nICwgVmFyQ2hhciAsIGRlc2NyaXBjaW9uQXJ0aWN1bG8gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgncGVzb0FydGljdWxvJyAsIFJlYWwgLCBwZXNvQXJ0aWN1bG8gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnY29kUHJvdmVkb3JBcnRpY3VsbycgLCBJbnQgLCBjb2RQcm92ZWRvckFydGljdWxvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2NvZEludGVybm9BcnRpY3VsbycgLCBJbnQgLCBjb2RJbnRlcm5vQXJ0aWN1bG8gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRVbmlkYWRNZWRpZGEnICwgSW50ICwgaWRVbmlkYWRNZWRpZGEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRDYXRlZ29yaWEnICwgSW50ICwgaWRDYXRlZ29yaWEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRNYXJjYScgLCBJbnQgLCBpZE1hcmNhIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2luc2VydEFydGljdWxvJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidBcnRpY3VsbyBndWFyZGFkbyBleGl0b3NhbWVudGUnfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IFVQREFURSBBUlRJQ1VMT1xyXG5cclxucm91dGVyLnB1dCgnL3VwZGF0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBpZEFydGljdWxvLG5vbWJyZUFydGljdWxvLGRlc2NyaXBjaW9uQXJ0aWN1bG8scGVzb0FydGljdWxvLGNvZFByb3ZlZG9yQXJ0aWN1bG8sXHJcbiAgICAgICAgICAgIGNvZEludGVybm9BcnRpY3VsbyxpZFVuaWRhZE1lZGlkYSxpZENhdGVnb3JpYSxpZE1hcmNhXHJcbiAgICAgICAgfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCd1cGRhdGVBcnRpY3VsbycpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRBcnRpY3VsbycgLCBtc3NxbC5JbnQgLCBpZEFydGljdWxvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZUFydGljdWxvJyAsIG1zc3FsLlZhckNoYXIgLCBub21icmVBcnRpY3VsbyApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdkZXNjcmlwY2lvbkFydGljdWxvJyAsIG1zc3FsLlZhckNoYXIgLCBkZXNjcmlwY2lvbkFydGljdWxvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ3Blc29BcnRpY3VsbycgLCBtc3NxbC5SZWFsICwgcGVzb0FydGljdWxvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2NvZFByb3ZlZG9yQXJ0aWN1bG8nICwgbXNzcWwuSW50ICwgY29kUHJvdmVkb3JBcnRpY3VsbyApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdjb2RJbnRlcm5vQXJ0aWN1bG8nICwgbXNzcWwuSW50ICwgY29kSW50ZXJub0FydGljdWxvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVW5pZGFkTWVkaWRhJyAsIG1zc3FsLkludCAsIGlkVW5pZGFkTWVkaWRhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkQ2F0ZWdvcmlhJyAsIG1zc3FsLkludCAsIGlkQ2F0ZWdvcmlhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkTWFyY2EnICwgbXNzcWwuSW50ICwgaWRNYXJjYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV91cGRhdGVBcnRpY3VsbycpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonQXJjdGljdWxvIG1vZGlmaWNhZG8gZXhpdG9zYW1lbnRlJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBERUxFVEUgQVJUSUNVTE9cclxuXHJcbnJvdXRlci5wb3N0KCcvZGVsZXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7aWRBcnRpY3Vsb30gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnZGVsZXRlQXJ0aWN1bG8nKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkQXJ0aWN1bG8nICwgbXNzcWwuSW50ICwgaWRBcnRpY3VsbyApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9kZWxldGVBcnRpY3VsbycpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonQXJ0aWN1bG8gZWxpbWluYWRvIGV4aXRvc2FtZW50ZSd9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbyd9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxuLy9UT0RPOiBMSVNUQSBERSBDQVRFR09SSUFTXHJcbnJvdXRlci5nZXQoJy9saXN0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHthYnJpckNvbmV4aW9uUE9PTCxjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdMaXN0YUNhdGVnb3JpYXMnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSgncGFfbGlzdGFDYXRlZ29yaWFzJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0LnJlY29yZHNldClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamUgOiAnRXJyb3IgZW4gZWwgcmVzdWx0YWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplIDogZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogSU5TRVJUQSBDQVRFR09SQVxyXG5cclxucm91dGVyLnBvc3QgKCcvaW5zZXJ0JyAsIGFzeW5jIChyZXEgLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBub21icmVDYXRlZ29yaWEgLCBkZXNjcmlwY2lvbkNhdGVnb3JpYSB9ID0gcmVxLmJvZHlcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdpbnNlcnRDYXRlZ29yaWEnKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgfSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmVDYXRlZ29yaWEnICwgVmFyQ2hhciAsIG5vbWJyZUNhdGVnb3JpYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdkZXNjcmlwY2lvbkNhdGVnb3JpYScgLCBWYXJDaGFyICwgZGVzY3JpcGNpb25DYXRlZ29yaWEgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfaW5zZXJ0Q2F0ZWdvcmlhJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidDYXRlZ29yaWEgZ3VhcmRhZGEgZXhpdG9zYW1lbnRlJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBVUERBVEUgQ0FURUdPUklBXHJcblxyXG5yb3V0ZXIucHV0KCcvdXBkYXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7bm9tYnJlQ2F0ZWdvcmlhLGRlc2NyaXBjaW9uQ2F0ZWdvcmlhLGlkQ2F0ZWdvcmlhfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCd1cGRhdGVDYXRlZ29yaWEnKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZUNhdGVnb3JpYScgLCBtc3NxbC5WYXJDaGFyICwgbm9tYnJlQ2F0ZWdvcmlhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2Rlc2NyaXBjaW9uQ2F0ZWdvcmlhJyAsIG1zc3FsLlZhckNoYXIgLCBkZXNjcmlwY2lvbkNhdGVnb3JpYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZENhdGVnb3JpYScgLCBtc3NxbC5JbnQgLCBpZENhdGVnb3JpYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV91cGRhdGVDYXRlZ29yaWEnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J0NhdGVnb3JpYSBtb2RpZmljYWRhIGV4aXRvc2FtZW50ZSd9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbyd9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogREVMRVRFIENBVEVHT1JJQVxyXG5cclxucm91dGVyLnBvc3QoJy9kZWxldGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtpZENhdGVnb3JpYX0gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnZGVsZXRlQ2F0ZWdvcmlhJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZENhdGVnb3JpYScgLCBtc3NxbC5JbnQgLCBpZENhdGVnb3JpYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9kZWxldGVDYXRlZ29yaWEnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J0NhdGVnb3JpYSBlbGltaW5hZGEgZXhpdG9zYW1lbnRlJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG4vL1RPRE86IExJU1RBIERFIENMSUVOVEVTXHJcbnJvdXRlci5nZXQoJy9saXN0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHthYnJpckNvbmV4aW9uUE9PTCxjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdMaXN0YUNsaWVudGVzJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX2xpc3RhQ2xpZW50ZXMnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQucmVjb3Jkc2V0KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZSA6ICdFcnJvciBlbiBlbCByZXN1bHRhZG8nfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamUgOiBlLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBJTlNFUlRBIENMSUVOVEVcclxuXHJcbnJvdXRlci5wb3N0ICgnL2luc2VydCcgLCBhc3luYyAocmVxICwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgbm9tYnJlQ2xpZW50ZSxhcGVsbGlkb0NsaWVudGUsaWRUaXBvRG9jdW1lbnRvLG5yb0RvY0NsaWVudGUsXHJcbiAgICAgICAgICAgIGlkVGlwb0NvbnRyaWJ1bGxlbnRlLG5yb0N1aXRDdWlsQ2xpZW50ZSxpZERpcmVjY2lvbixpZFRpcG9QZXJzb25hXHJcbiAgICAgICAgfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnaW5zZXJ0Q2xpZW50ZScpXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCB9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZUNsaWVudGUnICwgVmFyQ2hhciAsIG5vbWJyZUNsaWVudGUgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnYXBlbGxpZG9DbGllbnRlJyAsIFZhckNoYXIgLCBhcGVsbGlkb0NsaWVudGUgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRUaXBvRG9jdW1lbnRvJyAsIEludCAsIGlkVGlwb0RvY3VtZW50byApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCducm9Eb2NDbGllbnRlJyAsIFZhckNoYXIgLCBucm9Eb2NDbGllbnRlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVGlwb0NvbnRyaWJ1bGxlbnRlJyAsIEludCAsIGlkVGlwb0NvbnRyaWJ1bGxlbnRlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25yb0N1aXRDdWlsQ2xpZW50ZScgLCBJbnQgLCBucm9DdWl0Q3VpbENsaWVudGUgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWREaXJlY2Npb24nICwgSW50ICwgaWREaXJlY2Npb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRUaXBvUGVyc29uYScgLCBJbnQgLCBpZFRpcG9QZXJzb25hIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2luc2VydENsaWVudGUnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J0NsaWVudGUgZ3VhcmRhZG8gZXhpdG9zYW1lbnRlJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBVUERBVEUgQ0xJRU5URVxyXG5cclxucm91dGVyLnB1dCgnL3VwZGF0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBpZENsaWVudGUsbm9tYnJlQ2xpZW50ZSxhcGVsbGlkb0NsaWVudGUsaWRUaXBvRG9jdW1lbnRvLG5yb0RvY0NsaWVudGUsXHJcbiAgICAgICAgICAgIGlkVGlwb0NvbnRyaWJ1bGxlbnRlLG5yb0N1aXRDdWlsQ2xpZW50ZSxpZERpcmVjY2lvbixpZFRpcG9QZXJzb25hXHJcbiAgICAgICAgfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCd1cGRhdGVDbGllbnRlJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZENsaWVudGUnICwgbXNzcWwuSW50ICwgaWRDbGllbnRlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZUNsaWVudGUnICwgbXNzcWwuVmFyQ2hhciAsIG5vbWJyZUNsaWVudGUgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnYXBlbGxpZG9DbGllbnRlJyAsIG1zc3FsLlZhckNoYXIgLCBhcGVsbGlkb0NsaWVudGUgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRUaXBvRG9jdW1lbnRvJyAsIG1zc3FsLkludCAsIGlkVGlwb0RvY3VtZW50byApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCducm9Eb2NDbGllbnRlJyAsIG1zc3FsLlZhckNoYXIgLCBucm9Eb2NDbGllbnRlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVGlwb0NvbnRyaWJ1bGxlbnRlJyAsIEludCAsIGlkVGlwb0NvbnRyaWJ1bGxlbnRlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25yb0N1aXRDdWlsQ2xpZW50ZScgLCBtc3NxbC5JbnQgLCBucm9DdWl0Q3VpbENsaWVudGUgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWREaXJlY2Npb24nICwgbXNzcWwuSW50ICwgaWREaXJlY2Npb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRUaXBvUGVyc29uYScgLCBtc3NxbC5JbnQgLCBpZFRpcG9QZXJzb25hIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX3VwZGF0ZUNsaWVudGUnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J0NsaWVudGUgbW9kaWZpY2FkbyBleGl0b3NhbWVudGUnfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IERFTEVURSBDTElFTlRFXHJcblxyXG5yb3V0ZXIucG9zdCgnL2RlbGV0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge2lkQ2xpZW50ZX0gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnZGVsZXRlQ2xpZW50ZScpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRDbGllbnRlJyAsIG1zc3FsLkludCAsIGlkQ2xpZW50ZSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9kZWxldGVDbGllbnRlJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidDbGllbnRlIGVsaW1pbmFkbyBleGl0b3NhbWVudGUnfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbi8vVE9ETzogTElTVEEgREUgRElSRUNDSU9ORVNcclxucm91dGVyLmdldCgnL2xpc3QnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3Qge2FicmlyQ29uZXhpb25QT09MLGNlcnJhckNvbmV4aW9uUE9PTH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICAgICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ0xpc3RhRGlyZWNjaW9uZXMnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSgncGFfbGlzdGFEaXJlY2Npb25lcycpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdC5yZWNvcmRzZXQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplIDogJ0Vycm9yIGVuIGVsIHJlc3VsdGFkbyd9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZSA6IGUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IElOU0VSVEEgRElSRUNDSU9OXHJcblxyXG5yb3V0ZXIucG9zdCAoJy9pbnNlcnQnICwgYXN5bmMgKHJlcSAsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdHsgXHJcbiAgICAgICAgICAgICAgICBjYWxsZURpcmVjY2lvbiAsIFxyXG4gICAgICAgICAgICAgICAgYWx0dXJhRGlyZWNjaW9uICwgXHJcbiAgICAgICAgICAgICAgICBjb2RpZ29Qb3N0YWxEaXJlY2Npb24gLCBcclxuICAgICAgICAgICAgICAgIGJhcnJpb0RpcmVjY2lvbiAsIFxyXG4gICAgICAgICAgICAgICAgb3Ryb3NEYXRvc0RpcmVjY2lvbiBcclxuICAgICAgICAgICAgIH0gPSByZXEuYm9keVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ2luc2VydERpcmVjY2lvbicpXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCB9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2NhbGxlRGlyZWNjaW9uJyAsIFZhckNoYXIgLCBjYWxsZURpcmVjY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdhbHR1cmFEaXJlY2Npb24nICwgSW50ICwgYWx0dXJhRGlyZWNjaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2NvZGlnb1Bvc3RhbERpcmVjY2lvbicgLCBJbnQgLCBjb2RpZ29Qb3N0YWxEaXJlY2Npb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnYmFycmlvRGlyZWNjaW9uJyAsIFZhckNoYXIgLCBiYXJyaW9EaXJlY2Npb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnb3Ryb3NEYXRvc0RpcmVjY2lvbicgLCBWYXJDaGFyICwgb3Ryb3NEYXRvc0RpcmVjY2lvbiApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9pbnNlcnREaXJlY2Npb24nKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J0RpcmVjY2lvbiBndWFyZGFkYSBleGl0b3NhbWVudGUnfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IFVQREFURSBESVJFQ0NJT05cclxuXHJcbnJvdXRlci5wdXQoJy91cGRhdGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0eyBcclxuICAgICAgICAgICAgY2FsbGVEaXJlY2Npb24gLCBcclxuICAgICAgICAgICAgYWx0dXJhRGlyZWNjaW9uICwgXHJcbiAgICAgICAgICAgIGNvZGlnb1Bvc3RhbERpcmVjY2lvbiAsIFxyXG4gICAgICAgICAgICBiYXJyaW9EaXJlY2Npb24gLCBcclxuICAgICAgICAgICAgb3Ryb3NEYXRvc0RpcmVjY2lvbiAsXHJcbiAgICAgICAgICAgIGlkRGlyZWNjaW9uXHJcbiAgICAgICAgIH0gPSByZXEuYm9keSAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCd1cGRhdGVEaXJlY2Npb24nKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2NhbGxlRGlyZWNjaW9uJyAsIG1zc3FsLlZhckNoYXIgLCBjYWxsZURpcmVjY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdhbHR1cmFEaXJlY2Npb24nICwgbXNzcWwuSW50ICwgYWx0dXJhRGlyZWNjaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2NvZGlnb1Bvc3RhbERpcmVjY2lvbicgLCBtc3NxbC5JbnQgLCBjb2RpZ29Qb3N0YWxEaXJlY2Npb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnYmFycmlvRGlyZWNjaW9uJyAsIG1zc3FsLlZhckNoYXIgLCBiYXJyaW9EaXJlY2Npb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnb3Ryb3NEYXRvc0RpcmVjY2lvbicgLCBtc3NxbC5WYXJDaGFyICwgb3Ryb3NEYXRvc0RpcmVjY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZERpcmVjY2lvbicgLCBtc3NxbC5JbnQgLCBpZERpcmVjY2lvbiApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV91cGRhdGVEaXJlY2Npb24nKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J0RpcmVjY2lvbiBtb2RpZmljYWRhIGV4aXRvc2FtZW50ZSd9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbyd9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogREVMRVRFIERJUkVDSU9OXHJcblxyXG5yb3V0ZXIucG9zdCgnL2RlbGV0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge2lkRGlyZWNjaW9ufSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdkZWxldGVEaXJlY2Npb24nKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkRGlyZWNjaW9uJyAsIG1zc3FsLkludCAsIGlkRGlyZWNjaW9uIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2RlbGV0ZURpcmVjY2lvbicpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonRGlyZWNjaW9uIGVsaW1pbmFkYSBleGl0b3NhbWVudGUnfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbi8vVE9ETzogTElTVEEgREUgTUFSQ0FTXHJcbnJvdXRlci5nZXQoJy9saXN0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHthYnJpckNvbmV4aW9uUE9PTCxjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdMaXN0YU1hcmNhcycpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlKCdwYV9saXN0YU1hcmNhcycpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdC5yZWNvcmRzZXQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplIDogJ0Vycm9yIGVuIGVsIHJlc3VsdGFkbyd9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZSA6IGUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IElOU0VSVEEgTUFSQ0FcclxuXHJcbnJvdXRlci5wb3N0ICgnL2luc2VydCcgLCBhc3luYyAocmVxICwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtub21icmVNYXJjYX0gPSByZXEuYm9keVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ2luc2VydE1hcmNhJylcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyIH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlTWFyY2EnICwgVmFyQ2hhciAsIG5vbWJyZU1hcmNhIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2luc2VydE1hcmNhJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidNYXJjYSBndWFyZGFkYSBleGl0b3NhbWVudGUnfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IFVQREFURSBNQVJDQVxyXG5cclxucm91dGVyLnB1dCgnL3VwZGF0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge25vbWJyZU1hcmNhLGlkTWFyY2F9ID0gcmVxLmJvZHkgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ3VwZGF0ZU1hcmNhJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmVNYXJjYScgLCBtc3NxbC5WYXJDaGFyICwgbm9tYnJlTWFyY2EgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRNYXJjYScgLCBtc3NxbC5JbnQgLCBpZE1hcmNhIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX3VwZGF0ZU1hcmNhJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidNYXJjYSBtb2RpZmljYWRhIGV4aXRvc2FtZW50ZSd9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbyd9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogREVMRVRFIE1BUkNBXHJcblxyXG5yb3V0ZXIucG9zdCgnL2RlbGV0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge2lkTWFyY2F9ID0gcmVxLmJvZHkgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ2RlbGV0ZU1hcmNhJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZE1hcmNhJyAsIG1zc3FsLkludCAsIGlkTWFyY2EgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfZGVsZXRlTWFyY2EnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J01hcmNhIGVsaW1pbmFkYSBleGl0b3NhbWVudGUnfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3QgeyBlYWNoU2VyaWVzIH0gPSByZXF1aXJlKCdhc3luYycpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG4vL1RPRE86IExJU1RBIERFIFBST0RVQ1RPU1xyXG5yb3V0ZXIuZ2V0KCcvbGlzdCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wsY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgICAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnTGlzdGFQcm9kdWN0b3MnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSgncGFfbGlzdGFQcm9kdWN0b3MnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQucmVjb3Jkc2V0KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZSA6ICdFcnJvciBlbiBlbCByZXN1bHRhZG8nfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamUgOiBlLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBJTlNFUlRBIFBST0RVQ1RPXHJcblxyXG5yb3V0ZXIucG9zdCAoJy9pbnNlcnQnICwgYXN5bmMgKHJlcSAsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgY29uc3Qge25vbWJyZVByb2R1Y3RvLGRlc2NyaXBjaW9uUHJvZHVjdG8scHJlY2lvQWN0dWFsUHJvZHVjdG8sdmVjRGV0YWxsZXNQcm9kdWN0b30gPSByZXEuYm9keVxyXG4gICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnaW5zZXJ0UHJvZHVjdG8nKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCAsIFJlYWwgLFRyYW5zYWN0aW9uIH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICBjb25zdCBteVRyYW5zYWN0aW9uID0gbmV3IFRyYW5zYWN0aW9uIChjb25leGlvbilcclxuICAgIG15VHJhbnNhY3Rpb24uYmVnaW4oIGFzeW5jIChlcnIpID0+IHtcclxuICAgICAgICBpZihlcnIpIHtcclxuICAgICAgICAgICAgbXlUcmFuc2FjdGlvbi5yb2xsYmFjaygpXHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKG15VHJhbnNhY3Rpb24pXHJcbiAgICAgICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlUHJvZHVjdG8nICwgVmFyQ2hhciAsIG5vbWJyZVByb2R1Y3RvIClcclxuICAgICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdkZXNjcmlwY2lvblByb2R1Y3RvJyAsIFZhckNoYXIgLCBkZXNjcmlwY2lvblByb2R1Y3RvIClcclxuICAgICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdwcmVjaW9BY3R1YWxQcm9kdWN0bycgLCBSZWFsICwgcHJlY2lvQWN0dWFsUHJvZHVjdG8gKVxyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2luc2VydFByb2R1Y3RvbycpXHJcbiAgICAgICAgICAgIGlmKHJlc3VsdC5yb3dzQWZmZWN0ZWRbMF0gPT09IDAgfHwgIXJlc3VsdC5yZWNvcmRzZXRbMF0uaWRQcm9kdWN0byl7XHJcbiAgICAgICAgICAgICAgICBteVRyYW5zYWN0aW9uLnJvbGxiYWNrKClcclxuICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonUHJvZHVjdG8gbm8gaW5zZXJ0YWRvJ30pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZFByb2R1Y3RvID0gcGFyc2VJbnQocmVzdWx0LnJlY29yZHNldFswXS5pZFByb2R1Y3RvKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbXlSZXF1ZXN0RFAgPSBuZXcgUmVxdWVzdCAobXlUcmFuc2FjdGlvbilcclxuICAgICAgICAgICAgICAgIG15UmVxdWVzdERQLmlucHV0KCdpZFByb2R1Y3RvJyAsIEludCAsIGlkUHJvZHVjdG8gKVxyXG4gICAgICAgICAgICAgICAgbXlSZXF1ZXN0RFAuaW5wdXQoJ2lkQXJ0aWN1bG8nICwgSW50ICwgMCApXHJcbiAgICAgICAgICAgICAgICBteVJlcXVlc3REUC5pbnB1dCgnY2FudGlkYWREZXRhbGxlUHJvZHVjdG8nICwgUmVhbCAsIDAgKVxyXG4gICAgICAgICAgICAgICAgZWFjaFNlcmllcyh2ZWNEZXRhbGxlc1Byb2R1Y3RvICwgKERQICwgY2FsbGJhY2sgKT0+eyAgXHJcbiAgICAgICAgICAgICAgICAgICAgbXlSZXF1ZXN0RFAucGFyYW1ldGVycy5pZEFydGljdWxvLnZhbHVlID0gRFAuaWRBcnRpY3Vsb1xyXG4gICAgICAgICAgICAgICAgICAgIG15UmVxdWVzdERQLnBhcmFtZXRlcnMuY2FudGlkYWREZXRhbGxlUHJvZHVjdG8udmFsdWUgPSBEUC5jYW50aWRhZERldGFsbGVQcm9kdWN0byAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBteVJlcXVlc3REUC5leGVjdXRlKCdwYV9pbnNlcnREZXRhbGxlUHJvZHVjdG8nLChFLFIpPT57aWYoRSl7IGNhbGxiYWNrKEUpIH1lbHNleyBjYWxsYmFjaygpfX0pIFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JDYWxsQmFjayA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVycm9yQ2FsbEJhY2spe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlUcmFuc2FjdGlvbi5yb2xsYmFjaygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZXJyb3JDYWxsQmFja30pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15VHJhbnNhY3Rpb24uY29tbWl0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonUHJvZHVjdG8geSBkZXRhbGxlcyBkZSBwcm9kdWN0byBndWFyZGFkb3MgZXhpdG9zYW1lbnRlJ30pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoKGUpe1xyXG4gICAgICAgICAgICBteVRyYW5zYWN0aW9uLnJvbGxiYWNrKClcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgfSlcclxufSlcclxuXHJcbi8vVE9ETzogVVBEQVRFIFBST0RVQ1RPXHJcblxyXG5yb3V0ZXIucHV0KCcvdXBkYXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7bm9tYnJlUHJvZHVjdG8sZGVzY3JpcGNpb25Qcm9kdWN0byAsIHByZWNpb0FjdHVhbFByb2R1Y3RvICxpZFByb2R1Y3RvfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCd1cGRhdGVQcm9kdWN0bycpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlUHJvZHVjdG8nICwgbXNzcWwuVmFyQ2hhciAsIG5vbWJyZVByb2R1Y3RvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2Rlc2NyaXBjaW9uUHJvZHVjdG8nICwgbXNzcWwuVmFyQ2hhciAsIGRlc2NyaXBjaW9uUHJvZHVjdG8gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgncHJlY2lvQWN0dWFsUHJvZHVjdG8nICwgbXNzcWwuUmVhbCAsIHByZWNpb0FjdHVhbFByb2R1Y3RvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkUHJvZHVjdG8nICwgbXNzcWwuSW50ICwgaWRQcm9kdWN0byApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV91cGRhdGVQcm9kdWN0bycpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonUHJvZHVjdG8gbW9kaWZpY2FkbyBleGl0b3NhbWVudGUnfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IERFTEVURSBQUk9EVUNUT1xyXG5cclxucm91dGVyLnBvc3QoJy9kZWxldGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtpZFByb2R1Y3RvfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdkZWxldGVQcm9kdWN0bycpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRQcm9kdWN0bycgLCBtc3NxbC5JbnQgLCBpZFByb2R1Y3RvIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2RlbGV0ZVByb2R1Y3RvJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidQcm9kdWN0byBlbGltaW5hZG8gZXhpdG9zYW1lbnRlJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG4vL1RPRE86IExJU1RBIERFIFBST1ZFRURPUkVTXHJcbnJvdXRlci5nZXQoJy9saXN0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHthYnJpckNvbmV4aW9uUE9PTCxjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdMaXN0YVByb3ZlZWRvcmVzJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX2xpc3RhUHJvdmVlZG9yZXMnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQucmVjb3Jkc2V0KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZSA6ICdFcnJvciBlbiBlbCByZXN1bHRhZG8nfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamUgOiBlLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBJTlNFUlRBIFBST1ZFRURPUlxyXG5cclxucm91dGVyLnBvc3QgKCcvaW5zZXJ0JyAsIGFzeW5jIChyZXEgLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBub21icmVQcm92ZWVkb3IsYXBlbGxpZG9Qcm92ZWVkb3IsaWRUaXBvRG9jdW1lbnRvLG5yb0RvY1Byb3ZlZWRvcixcclxuICAgICAgICAgICAgaWRUaXBvQ29udHJpYnVsbGVudGUsbnJvQ3VpdEN1aWxQcm92ZWVkb3IsaWREaXJlY2Npb24saWRUaXBvUGVyc29uYVxyXG4gICAgICAgIH0gPSByZXEuYm9keVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ2luc2VydFByb3ZlZWRvcicpXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCB9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZVByb3ZlZWRvcicgLCBWYXJDaGFyICwgbm9tYnJlUHJvdmVlZG9yIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2FwZWxsaWRvUHJvdmVlZG9yJyAsIFZhckNoYXIgLCBhcGVsbGlkb1Byb3ZlZWRvciApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFRpcG9Eb2N1bWVudG8nICwgSW50ICwgaWRUaXBvRG9jdW1lbnRvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25yb0RvY1Byb3ZlZWRvcicgLCBWYXJDaGFyICwgbnJvRG9jUHJvdmVlZG9yIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVGlwb0NvbnRyaWJ1bGxlbnRlJyAsIEludCAsIGlkVGlwb0NvbnRyaWJ1bGxlbnRlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25yb0N1aXRDdWlsUHJvdmVlZG9yJyAsIEludCAsIG5yb0N1aXRDdWlsUHJvdmVlZG9yIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkRGlyZWNjaW9uJyAsIEludCAsIGlkRGlyZWNjaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVGlwb1BlcnNvbmEnICwgSW50ICwgaWRUaXBvUGVyc29uYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9pbnNlcnRQcm92ZWVkb3InKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J1Byb3ZlZWRvciBndWFyZGFkbyBleGl0b3NhbWVudGUnfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IFVQREFURSBQUk9WRUVET1JcclxuXHJcbnJvdXRlci5wdXQoJy91cGRhdGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgaWRQcm92ZWVkb3Isbm9tYnJlUHJvdmVlZG9yLGFwZWxsaWRvUHJvdmVlZG9yLGlkVGlwb0RvY3VtZW50byxucm9Eb2NQcm92ZWVkb3IsXHJcbiAgICAgICAgICAgIGlkVGlwb0NvbnRyaWJ1bGxlbnRlLG5yb0N1aXRDdWlsUHJvdmVlZG9yLGlkRGlyZWNjaW9uLGlkVGlwb1BlcnNvbmFcclxuICAgICAgICB9ID0gcmVxLmJvZHkgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ3VwZGF0ZVByb3ZlZWRvcicpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRQcm92ZWVkb3InICwgbXNzcWwuSW50ICwgaWRQcm92ZWVkb3IgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlUHJvdmVlZG9yJyAsIG1zc3FsLlZhckNoYXIgLCBub21icmVQcm92ZWVkb3IgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnYXBlbGxpZG9Qcm92ZWVkb3InICwgbXNzcWwuVmFyQ2hhciAsIGFwZWxsaWRvUHJvdmVlZG9yIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVGlwb0RvY3VtZW50bycgLCBtc3NxbC5JbnQgLCBpZFRpcG9Eb2N1bWVudG8gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbnJvRG9jUHJvdmVlZG9yJyAsIG1zc3FsLlZhckNoYXIgLCBucm9Eb2NQcm92ZWVkb3IgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRUaXBvQ29udHJpYnVsbGVudGUnICwgSW50ICwgaWRUaXBvQ29udHJpYnVsbGVudGUgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbnJvQ3VpdEN1aWxQcm92ZWVkb3InICwgbXNzcWwuSW50ICwgbnJvQ3VpdEN1aWxQcm92ZWVkb3IgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWREaXJlY2Npb24nICwgbXNzcWwuSW50ICwgaWREaXJlY2Npb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRUaXBvUGVyc29uYScgLCBtc3NxbC5JbnQgLCBpZFRpcG9QZXJzb25hIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX3VwZGF0ZVByb3ZlZWRvcicpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonUHJvdmVlZG9yIG1vZGlmaWNhZG8gZXhpdG9zYW1lbnRlJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBERUxFVEUgUFJPVkVFRE9SXHJcblxyXG5yb3V0ZXIucG9zdCgnL2RlbGV0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge2lkUHJvdmVlZG9yfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdkZWxldGVQcm92ZWVkb3InKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkUHJvdmVlZG9yJyAsIG1zc3FsLkludCAsIGlkUHJvdmVlZG9yIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2RlbGV0ZVByb3ZlZWRvcicpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonUHJvdmVlZG9yIGVsaW1pbmFkbyBleGl0b3NhbWVudGUnfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbi8vVE9ETzogTElTVEEgU1VDVVJTQUxFU1xyXG5yb3V0ZXIuZ2V0KCcvbGlzdCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wsY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgICAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnTGlzdGFTdWN1cnNhbGVzJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX2xpc3RhU3VjdXJzYWxlcycpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdC5yZWNvcmRzZXQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplIDogJ0Vycm9yIGVuIGVsIHJlc3VsdGFkbyd9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZSA6IGUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IElOU0VSVEEgU1VDVVJTQUxcclxuXHJcbnJvdXRlci5wb3N0ICgnL2luc2VydCcgLCBhc3luYyAocmVxICwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgaWREaXJlY2Npb24gLCBub21icmVTdWN1cnNhbCB9ID0gcmVxLmJvZHlcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdpbnNlcnRTdWN1cnNhbCcpXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCB9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkRGlyZWNjaW9uJyAsIEludCAsIGlkRGlyZWNjaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZVN1Y3Vyc2FsJyAsIFZhckNoYXIgLCBub21icmVTdWN1cnNhbCApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9pbnNlcnRTdWN1cnNhbCcpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonU3VjdXJzYWwgZ3VhcmRhZGEgZXhpdG9zYW1lbnRlJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBVUERBVEUgU1VDVVJTQUxcclxuXHJcbnJvdXRlci5wdXQoJy91cGRhdGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtpZFN1Y3Vyc2FsLGlkRGlyZWNjaW9uLG5vbWJyZVN1Y3Vyc2FsfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCd1cGRhdGVTdWN1cnNhbCcpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRTdWN1cnNhbCcgLCBtc3NxbC5JbnQgLCBpZFN1Y3Vyc2FsIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkRGlyZWNjaW9uJyAsIG1zc3FsLkludCAsIGlkRGlyZWNjaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZVN1Y3Vyc2FsJyAsIG1zc3FsLlZhckNoYXIgLCBub21icmVTdWN1cnNhbCApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV91cGRhdGVTdWN1cnNhbCcpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonU3VjdXJzYWwgbW9kaWZpY2FkYSBleGl0b3NhbWVudGUnfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IERFTEVURSBTVUNVUlNBTFxyXG5cclxucm91dGVyLnBvc3QoJy9kZWxldGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtpZFN1Y3Vyc2FsfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdkZWxldGVTdWN1cnNhbCcpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRTdWN1cnNhbCcgLCBtc3NxbC5JbnQgLCBpZFN1Y3Vyc2FsIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2RlbGV0ZVN1Y3Vyc2FsJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidTdWN1cnNhbCBlbGltaW5hZGEgZXhpdG9zYW1lbnRlJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG4vL1RPRE86IExJU1RBIERFIFRJUE9TIERFIENPTlRSSUJVTExFTlRFXHJcbnJvdXRlci5nZXQoJy9saXN0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHthYnJpckNvbmV4aW9uUE9PTCxjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdMaXN0YVRpcG9zQ29udHJpYnVsbGVudGUnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSgncGFfbGlzdGFUaXBvc0NvbnRyaWJ1bGxlbnRlJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0LnJlY29yZHNldClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamUgOiAnRXJyb3IgZW4gZWwgcmVzdWx0YWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplIDogZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogSU5TRVJUQSBUSVBPIERFIENPTlRSSUJVTExFTlRFXHJcblxyXG5yb3V0ZXIucG9zdCAoJy9pbnNlcnQnICwgYXN5bmMgKHJlcSAsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IG5vbWJyZVRpcG9Db250cmlidWxsZW50ZSAsIGRlc2NyaXBjaW9uVGlwb0NvbnRyaWJ1bGxlbnRlIH0gPSByZXEuYm9keVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ2luc2VydFRpcG9Db250cmlidWxsZW50ZScpXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZVRpcG9Db250cmlidWxsZW50ZScgLCBWYXJDaGFyICwgbm9tYnJlVGlwb0NvbnRyaWJ1bGxlbnRlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2Rlc2NyaXBjaW9uVGlwb0NvbnRyaWJ1bGxlbnRlJyAsIFZhckNoYXIgLCBkZXNjcmlwY2lvblRpcG9Db250cmlidWxsZW50ZSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9pbnNlcnRUaXBvQ29udHJpYnVsbGVudGUnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J1RpcG8gZGUgY29udHJpYnVsbGVudGUgZ3VhcmRhZG8gZXhpdG9zYW1lbnRlJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBVUERBVEUgVElQTyBERSBDT05UUklCVUxMRU5URVxyXG5cclxucm91dGVyLnB1dCgnL3VwZGF0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge25vbWJyZVRpcG9Db250cmlidWxsZW50ZSxkZXNjcmlwY2lvblRpcG9Db250cmlidWxsZW50ZSxpZFRpcG9Db250cmlidWxsZW50ZX0gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgndXBkYXRlVGlwb0NvbnRyaWJ1bGxlbnRlJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmVUaXBvQ29udHJpYnVsbGVudGUnICwgbXNzcWwuVmFyQ2hhciAsIG5vbWJyZVRpcG9Db250cmlidWxsZW50ZSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdkZXNjcmlwY2lvblRpcG9Db250cmlidWxsZW50ZScgLCBtc3NxbC5WYXJDaGFyICwgZGVzY3JpcGNpb25UaXBvQ29udHJpYnVsbGVudGUgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRUaXBvQ29udHJpYnVsbGVudGUnICwgbXNzcWwuSW50ICwgaWRUaXBvQ29udHJpYnVsbGVudGUgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfdXBkYXRlVGlwb0NvbnRyaWJ1bGxlbnRlJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidUaXBvIGRlIGNvbnRyaWJ1bGxlbnRlIG1vZGlmaWNhZG8gZXhpdG9zYW1lbnRlJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBERUxFVEUgVElQTyBERSBDT05UUklCVUxMRU5URVxyXG5cclxucm91dGVyLnBvc3QoJy9kZWxldGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtpZFRpcG9Db250cmlidWxsZW50ZX0gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnZGVsZXRlVGlwb0NvbnRyaWJ1bGxlbnRlJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFRpcG9Db250cmlidWxsZW50ZScgLCBtc3NxbC5JbnQgLCBpZFRpcG9Db250cmlidWxsZW50ZSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9kZWxldGVUaXBvQ29udHJpYnVsbGVudGUnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J1RpcG8gZGUgY29udHJpYnVsbGVudGUgZWxpbWluYWRvIGV4aXRvc2FtZW50ZSd9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbyd9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxuLy9UT0RPOiBMSVNUQSBERSBUSVBPUyBERSBET0NVTUVOVE9cclxucm91dGVyLmdldCgnL2xpc3QnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3Qge2FicmlyQ29uZXhpb25QT09MLGNlcnJhckNvbmV4aW9uUE9PTH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICAgICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ0xpc3RhVGlwb3NEb2N1bWVudG8nKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSgncGFfbGlzdGFUaXBvc0RvY3VtZW50bycpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdC5yZWNvcmRzZXQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplIDogJ0Vycm9yIGVuIGVsIHJlc3VsdGFkbyd9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZSA6IGUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IElOU0VSVEEgVElQTyBERSBET0NVTUVOVE9cclxuXHJcbnJvdXRlci5wb3N0ICgnL2luc2VydCcgLCBhc3luYyAocmVxICwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtub21icmVUaXBvRG9jdW1lbnRvfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnaW5zZXJ0VGlwb0RvY3VtZW50bycpXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZVRpcG9Eb2N1bWVudG8nICwgVmFyQ2hhciAsIG5vbWJyZVRpcG9Eb2N1bWVudG8gKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfaW5zZXJ0VGlwb0RvY3VtZW50bycpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonVGlwbyBkZSBkb2N1bWVudG8gZ3VhcmRhZG8gZXhpdG9zYW1lbnRlJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBVUERBVEUgVElQTyBERSBET0NVTUVOVE9cclxuXHJcbnJvdXRlci5wdXQoJy91cGRhdGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtub21icmVUaXBvRG9jdW1lbnRvLGlkVGlwb0RvY3VtZW50b30gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgndXBkYXRlVGlwb0RvY3VtZW50bycpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlVGlwb0RvY3VtZW50bycgLCBtc3NxbC5WYXJDaGFyICwgbm9tYnJlVGlwb0RvY3VtZW50byApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFRpcG9Eb2N1bWVudG8nICwgbXNzcWwuSW50ICwgaWRUaXBvRG9jdW1lbnRvIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX3VwZGF0ZVRpcG9Eb2N1bWVudG8nKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J1RpcG8gZGUgZG9jdW1lbnRvIG1vZGlmaWNhZG8gZXhpdG9zYW1lbnRlJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBERUxFVEUgVElQTyBERSBET0NVTUVOVE9cclxuXHJcbnJvdXRlci5wb3N0KCcvZGVsZXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7aWRUaXBvRG9jdW1lbnRvfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdkZWxldGVUaXBvRG9jdW1lbnRvJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFRpcG9Eb2N1bWVudG8nICwgbXNzcWwuSW50ICwgaWRUaXBvRG9jdW1lbnRvIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2RlbGV0ZVRpcG9Eb2N1bWVudG8nKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J1RpcG8gZGUgZG9jdW1lbnRvIGVsaW1pbmFkbyBleGl0b3NhbWVudGUnfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbi8vVE9ETzogTElTVEEgREUgVElQT1MgREUgUEVSU09OQVxyXG5yb3V0ZXIuZ2V0KCcvbGlzdCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wsY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgICAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnTGlzdGFUaXBvc1BlcnNvbmEnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSgncGFfbGlzdGFUaXBvc1BlcnNvbmEnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQucmVjb3Jkc2V0KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZSA6ICdFcnJvciBlbiBlbCByZXN1bHRhZG8nfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamUgOiBlLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBJTlNFUlRBIFRJUE8gREUgUEVSU09OQVxyXG5cclxucm91dGVyLnBvc3QgKCcvaW5zZXJ0JyAsIGFzeW5jIChyZXEgLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge25vbWJyZVRpcG9QZXJzb25hfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnaW5zZXJ0VGlwb1BlcnNvbmEnKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgfSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmVUaXBvUGVyc29uYScgLCBWYXJDaGFyICwgbm9tYnJlVGlwb1BlcnNvbmEgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfaW5zZXJ0VGlwb1BlcnNvbmEnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J1RpcG8gZGUgcGVyc29uYSBndWFyZGFkYSBleGl0b3NhbWVudGUnfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IFVQREFURSBUSVBPIERFIFBFUlNPTkFcclxuXHJcbnJvdXRlci5wdXQoJy91cGRhdGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtub21icmVUaXBvUGVyc29uYSxpZFRpcG9QZXJzb25hfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCd1cGRhdGVUaXBvUGVyc29uYScpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlVGlwb1BlcnNvbmEnICwgbXNzcWwuVmFyQ2hhciAsIG5vbWJyZVRpcG9QZXJzb25hIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVGlwb1BlcnNvbmEnICwgbXNzcWwuSW50ICwgaWRUaXBvUGVyc29uYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV91cGRhdGVUaXBvUGVyc29uYScpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonVGlwbyBkZSBwZXJzb25hIG1vZGlmaWNhZGEgZXhpdG9zYW1lbnRlJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBERUxFVEUgVElQTyBERSBQRVJTT05BXHJcblxyXG5yb3V0ZXIucG9zdCgnL2RlbGV0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge2lkVGlwb1BlcnNvbmF9ID0gcmVxLmJvZHkgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ2RlbGV0ZVRpcG9QZXJzb25hJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFRpcG9QZXJzb25hJyAsIG1zc3FsLkludCAsIGlkVGlwb1BlcnNvbmEgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfZGVsZXRlVGlwb1BlcnNvbmEnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J1RpcG8gZGUgcGVyc29uYSBlbGltaW5hZGEgZXhpdG9zYW1lbnRlJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG4vL1RPRE86IExJU1RBIERFIFVOSURBREVTIERFIE1FRElEQVxyXG5yb3V0ZXIuZ2V0KCcvbGlzdCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wsY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgICAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnTGlzdGFVbmlkYWRlc01lZGlkYScpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlKCdwYV9saXN0YVVuaWRhZGVzTWVkaWEnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQucmVjb3Jkc2V0KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZSA6ICdFcnJvciBlbiBlbCByZXN1bHRhZG8nfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamUgOiBlLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBJTlNFUlRBIFVOSURBRCBERSBNRURJREFcclxuXHJcbnJvdXRlci5wb3N0ICgnL2luc2VydCcgLCBhc3luYyAocmVxICwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgbm9tYnJlVW5pZGFkTWVkaWRhICwgZGVzY3JpcGNpb25VbmlkYWRNZWRpZGEgfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnaW5zZXJ0VW5pZGFkTWFkaWRhJylcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyIH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlVW5pZGFkTWVkaWRhJyAsIFZhckNoYXIgLCBub21icmVVbmlkYWRNZWRpZGEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZGVzY3JpcGNpb25VbmlkYWRNZWRpZGEnICwgVmFyQ2hhciAsIGRlc2NyaXBjaW9uVW5pZGFkTWVkaWRhIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2luc2VydFVuaWRhZE1lZGlkYScpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonVW5pZGFkZSBkZSBtZWRpZGEgZ3VhcmRhZGEgZXhpdG9zYW1lbnRlJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBVUERBVEUgVU5JREFEIERFIE1FRElEQVxyXG5cclxucm91dGVyLnB1dCgnL3VwZGF0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge25vbWJyZVVuaWRhZE1lZGlkYSxkZXNjcmlwY2lvblVuaWRhZE1lZGlkYSxpZFVuaWRhZE1lZGlkYX0gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgndXBkYXRlVW5pZGFkTWVkaWRhJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmVVbmlkYWRNZWRpZGEnICwgbXNzcWwuVmFyQ2hhciAsIG5vbWJyZVVuaWRhZE1lZGlkYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdkZXNjcmlwY2lvblVuaWRhZE1lZGlkYScgLCBtc3NxbC5WYXJDaGFyICwgZGVzY3JpcGNpb25VbmlkYWRNZWRpZGEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRVbmlkYWRNZWRpZGEnICwgbXNzcWwuSW50ICwgaWRVbmlkYWRNZWRpZGEgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfdXBkYXRlVW5pZGFkTWVkaWRhJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidVbmlkYWQgZGUgbWVkaWRhIG1vZGlmaWNhZGEgZXhpdG9zYW1lbnRlJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBERUxFVEUgVU5JREFEIE1FRElEQVxyXG5cclxucm91dGVyLnBvc3QoJy9kZWxldGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtpZFVuaWRhZE1lZGlkYX0gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnZGVsZXRlVW5pZGFkTWVkaWRhJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFVuaWRhZE1lZGlkYScgLCBtc3NxbC5JbnQgLCBpZFVuaWRhZE1lZGlkYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9kZWxldGVVbmlkYWRNZWRpZGEnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J1VuaWRhZCBkZSBtZWRpZGEgZWxpbWluYWRhIGV4aXRvc2FtZW50ZSd9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbyd9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3QgYmNyeXAgPSByZXF1aXJlKCdiY3J5cHQnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbi8vICEgaW5zZXJ0YXIgdXN1YXJpb1xyXG5cclxucm91dGVyLnBvc3QgKCAnL2luc2VydCcgLCBhc3luYyAocmVxLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSAoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGNvbnN0IHsgbm9tYnJlVXN1YXJpbyAsIGFwZWxsaWRvVXN1YXJpbyAsIHVzdWFyaW8gLCBwdyB9ID0gcmVxLmJvZHlcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnaW5zZXJ0VXN1YXJpbycpXHJcbiAgICAgICAgY29uc3Qge1JlcXVlc3QgLCBWYXJDaGFyIH0gPSByZXF1aXJlICgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCdub21icmVVc3VhcmlvJyAsIFZhckNoYXIgLCBub21icmVVc3VhcmlvKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoJ2FwZWxsaWRvVXN1YXJpbycgLCBWYXJDaGFyICwgYXBlbGxpZG9Vc3VhcmlvKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoJ3VzdWFyaW8nICwgVmFyQ2hhciAsIHVzdWFyaW8pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICgncHcnICwgVmFyQ2hhciAsIGJjcnlwLmhhc2hTeW5jKHB3ICwgMTApIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSggJ3BhX2luc2VydFVzdWFyaW8nIClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oIHsgbWVuc2FqZSA6ICdVc3VhcmlvIGluc2VydGFkbyBjb3JyZWN0YW1lbnRlICcgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5cclxuXHJcbi8vIC8vICEgbGlzdGFkbyBkZSB1c3Vhcmlvc1xyXG4vLyByb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuLy8gICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSAoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuLy8gICAgIHRyeXtcclxuLy8gICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCAnbGlhc3RhVXN1YXJpbycpXHJcbi8vICAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbi8vICAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QoY29uZXhpb24pXHJcbi8vICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX2xpc3RhVXN1YXJpb3MnKVxyXG4vLyAgICAgICAgIGlmKHJlc3VsdCl7XHJcbi8vICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbi8vICAgICAgICAgICAgIHJlcy5qc29uKHJlc3VsdC5yZWNvcmRzZXQpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGVsc2V7XHJcbi8vICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbi8vICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtzdGF0dXM6IDQwMyxtZW5zYWplOmUubWVzc2FnZX0pXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgY2F0Y2goZSl7XHJcbi8vICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7c3RhdHVzOiA0MDMsbWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG4vLyAvLyEgbGlzdGEgZGUgcGVyZmlsZXNcclxuLy8gcm91dGVyLmdldCgnL3BlcmZpbGVzJyxhc3luYyAocmVxLHJlcyk9PntcclxuLy8gICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSAoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuLy8gICAgIHRyeXtcclxuLy8gICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCAnbGlzdGFQZXJmaWxlcycpXHJcbi8vICAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbi8vICAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QoY29uZXhpb24pXHJcbi8vICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX2xpc3RhUGVyZmlsZXMnKVxyXG4vLyAgICAgICAgIGlmKHJlc3VsdCl7XHJcbi8vICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbi8vICAgICAgICAgICAgIHJlcy5qc29uKHJlc3VsdC5yZWNvcmRzZXQpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGVsc2V7XHJcbi8vICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbi8vICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtzdGF0dXM6IDQwMyxtZW5zYWplOmUubWVzc2FnZX0pXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgY2F0Y2goZSl7XHJcbi8vICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7c3RhdHVzOiA0MDMsbWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG4vLyAvLyEgY29uc3VsdGEgdXN1YXJpbyBwb3IgaWRcclxuLy8gcm91dGVyLmdldCgnLzppZCcsYXN5bmMgKHJlcSxyZXMpPT57XHJcbi8vICAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWRcclxuLy8gICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSAoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuLy8gICAgIHRyeXtcclxuLy8gICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCAnZ2V0VXNleElkJylcclxuLy8gICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuLy8gICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdChjb25leGlvbilcclxuLy8gICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVXN1YXJpbycgLCBtc3NxbC5JbnQgLCBpZClcclxuLy8gICAgICAgICBjb25zdCBxdWVyeSA9IGBzZWxlY3RcclxuLy8gICAgICAgICB1LmlkIGFzIGlkVXN1YXJpbyAsXHJcbi8vICAgICAgICAgdS51c2VyTmFtZSBhcyB1c2VyTmFtZSAsXHJcbi8vICAgICAgICAgdS5lbWFpbCBhcyBlbWFpbCAsXHJcbi8vICAgICAgICAgdS5ub21icmUgYXMgbm9tYnJlVXN1YXJpbyAsXHJcbi8vICAgICAgICAgdS5hcGVsbGlkbyBhcyBhcGVsbGlkb1VzdWFyaW8gLFxyXG4vLyAgICAgICAgIHAuaWQgYXMgaWRQZXJmaWwgLFxyXG4vLyAgICAgICAgIHAubm9tYnJlIGFzIG5vbWJyZVBlcmZpbFxyXG4vLyAgICAgICAgIGZyb20gdXN1YXJpb3MgdVxyXG4vLyAgICAgICAgIGpvaW4gcGVyZmlsZXMgcCBvbiBwLmlkID0gdS5pZF9wZXJmaWxcclxuLy8gICAgICAgICB3aGVyZSB1LmlkID0gQGlkVXN1YXJpb2BcclxuLy8gICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkocXVlcnkpXHJcbi8vICAgICAgICAgaWYocmVzdWx0KXtcclxuLy8gICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICAgICAgcmVzLmpzb24ocmVzdWx0LnJlY29yZHNldClcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgZWxzZXtcclxuLy8gICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oe3N0YXR1czogNDAzLG1lbnNhamU6ZS5tZXNzYWdlfSlcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICBjYXRjaChlKXtcclxuLy8gICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4vLyAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtzdGF0dXM6IDQwMyxtZW5zYWplOmUubWVzc2FnZX0pXHJcbi8vICAgICB9XHJcbi8vIH0pXHJcblxyXG4vLyAvLyFndWFyZGEgdXN1YXJpb1xyXG4vLyByb3V0ZXIucG9zdCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbi8vICAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4vLyAgICAgY29uc3QgIHt1c2VyTmFtZSxwYXNzd29yZCxlbWFpbCxub21icmUsYXBlbGxpZG8saWRQZXJmaWx9ID0gcmVxLmJvZHlcclxuLy8gICAgIHRyeXtcclxuLy8gICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdzYXZlVXNlcicpXHJcbi8vICAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlICgnbXNzcWwnKVxyXG4vLyAgICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0KGNvbmV4aW9uKVxyXG4vLyAgICAgICAgIGNvbnN0IHB3ID0gYmNyeXAuaGFzaFN5bmMocGFzc3dvcmQsMTApXHJcbi8vICAgICAgICAgY29uc29sZS5sb2cocHcpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCd1c2VyTmFtZScgLCBtc3NxbC5WYXJDaGFyICwgdXNlck5hbWUpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdwYXNzd29yZCcgLCBtc3NxbC5WYXJDaGFyICwgcHcpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdlbWFpbCcgLCBtc3NxbC5WYXJDaGFyICwgZW1haWwpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmUnICwgbXNzcWwuVmFyQ2hhciAsIG5vbWJyZSlcclxuLy8gICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2FwZWxsaWRvJyAsIG1zc3FsLlZhckNoYXIgLCBhcGVsbGlkbylcclxuLy8gICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkUGVyZmlsJyAsIG1zc3FsLkludCAsIGlkUGVyZmlsKVxyXG4vLyAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlKCdwYV9pbnNlcnRVc3VhcmlvcycpXHJcbi8vICAgICAgICAgaWYocmVzdWx0KXtcclxuLy8gICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4vLyAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6ICd1c3VhcmlvIGluc2VydGFkbyBjb3JyZWN0YW1lbnRlICEnIH0pXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgY2F0Y2goZXJyKXtcclxuLy8gICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4vLyAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHtlcnJvcjplcnIubWVzc2FnZX0pXHJcbi8vICAgICB9XHJcbi8vIH0pXHJcblxyXG4vLyByb3V0ZXIucHV0KCcvJywgYXN5bmMgKHJlcSxyZXMpPT57XHJcbi8vICAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4vLyAgICAgY29uc3QgIHt1c2VyTmFtZSxwYXNzd29yZCxlbWFpbCxub21icmUsYXBlbGxpZG8saWRQZXJmaWwgLCBpZFVzdWFyaW99ID0gcmVxLmJvZHlcclxuLy8gICAgIHRyeXtcclxuLy8gICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCd1cGRhdGVVc2VyJylcclxuLy8gICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUgKCdtc3NxbCcpXHJcbi8vICAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QoY29uZXhpb24pXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCd1c2VyTmFtZScgLCBtc3NxbC5WYXJDaGFyICwgdXNlck5hbWUpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdwYXNzd29yZCcgLCBtc3NxbC5WYXJDaGFyICwgYmNyeXAuaGFzaFN5bmMocGFzc3dvcmQpKVxyXG4vLyAgICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZW1haWwnICwgbXNzcWwuVmFyQ2hhciAsIGVtYWlsKVxyXG4vLyAgICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlJyAsIG1zc3FsLlZhckNoYXIgLCBub21icmUpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdhcGVsbGlkbycgLCBtc3NxbC5WYXJDaGFyICwgYXBlbGxpZG8pXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFBlcmZpbCcgLCBtc3NxbC5JbnQgLCBpZFBlcmZpbClcclxuLy8gICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVXN1YXJpbycgLCBtc3NxbC5JbnQgLCBpZFVzdWFyaW8pXHJcbi8vICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX3VwZGF0ZVVzdWFyaW9zJylcclxuLy8gICAgICAgICBpZihyZXN1bHQpe1xyXG4vLyAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbi8vICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTogJ3VzdWFyaW8gaW5zZXJ0YWRvIGNvcnJlY3RhbWVudGUgIScgfSlcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICBjYXRjaChlKXtcclxuLy8gICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4vLyAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHtlcnJvcjplcnIubWVzc2FnZX0pXHJcbi8vICAgICB9XHJcbi8vIH0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhc3luY1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29sb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1zc3FsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=