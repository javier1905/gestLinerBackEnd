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
}

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

servidor.use('/api/logueo', __webpack_require__(/*! ./rutasApi/Logueo */ "./rutasApi/Logueo.js"));
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

const bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");

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
          const r = result.recordset[0];
          const user = {
            idUsuario: r.idUsuario,
            nombreUsuario: r.nombreUsuario,
            apellidoUsuario: r.apellidoUsuario,
            usuario: r.usuario
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ09ORklHLmpzIiwid2VicGFjazovLy8uL2NvbmV4aW9uZXMvc3FsU2VydmVyLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL0xvZ3Vlby5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9hcnRpY3Vsb3MuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvY2F0ZWdvcmlhcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9jaGVja0xvZ2luLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL2NsaWVudGVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL2RpcmVjY2lvbmVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL2dldFVzZXJMb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9tYXJjYXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvcHJvZHVjdG9zLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3Byb3ZlZWRvcmVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3N1Y3Vyc2FsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvdGlwb3NDb250cmlidWxsZW50ZS5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS90aXBvc0RvY3VtZW50by5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS90aXBvc1BlcnNvbmEuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvdW5pZGFkZXNNZWRpZGEuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvdXN1YXJpb3MuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXN5bmNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb2xvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1zc3FsXCIiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInNlY3JldCIsIm1zc3FsIiwicmVxdWlyZSIsInByb2Nlc3MiLCJVUkkiLCJ1c2VyIiwicGFzc3dvcmQiLCJkYXRhYmFzZSIsInNlcnZlciIsIm9wdGlvbnMiLCJhcHBOYW1lIiwiZW5hYmxlQXJpdGhBYm9ydCIsImVuY3J5cHQiLCJjb25uZWN0aW9uVGltZU91dCIsImRyaXZlciIsInN0cmVhbSIsInBvb2wiLCJtYXgiLCJtaW4iLCJpZGxlVGltZW91dE1pbGxpcyIsIkNvbmV4aW9uU1FMIiwiYWJyaXJDb25leGlvbiIsInVuZGVmaW5lZCIsImNlcnJhckNvbmV4aW9uIiwiYWJyaXJDb25leGlvblBPT0wiLCJjZXJyYXJDb25leGlvblBPT0wiLCJjb25leGlvbmVzIiwibmFtZSIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIm5ld0NvbmV4aW9uIiwiQ29ubmVjdGlvblBvb2wiLCJjbG9zZSIsImJpbmQiLCJhcmdzIiwiY29ubmVjdCIsIlByb21pc2UiLCJhbGwiLCJ2YWx1ZXMiLCJtYXAiLCJleHByZXNzIiwiY29ycyIsIm1vcmdhbiIsInNlcnZpZG9yIiwidXNlIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsInNldCIsImVudiIsIlBPUlQiLCJsaXN0ZW4iLCJnZXQiLCJtIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ5ZWxsb3ciLCJSb3V0ZXIiLCJiY3J5cHQiLCJqd3QiLCJ0b2tlbiIsInJvdXRlciIsInBvc3QiLCJyZXEiLCJyZXMiLCJ1c3VhcmlvIiwicHciLCJib2R5IiwiUmVxdWVzdCIsIlZhckNoYXIiLCJjb25leGlvbiIsIm15UmVxdWVzdCIsImlucHV0IiwicmVzdWx0IiwiZXhlY3V0ZSIsInJvd3NBZmZlY3RlZCIsInN0YXR1cyIsIm1lbnNhamUiLCJvcE9LIiwiY29tcGFyZVN5bmMiLCJyZWNvcmRzZXQiLCJyIiwiaWRVc3VhcmlvIiwibm9tYnJlVXN1YXJpbyIsImFwZWxsaWRvVXN1YXJpbyIsInNpZ24iLCJleHBpcmVzSW4iLCJlcnJvciIsIm1lc3NhZ2UiLCJsaXN0Iiwibm9tYnJlQXJ0aWN1bG8iLCJkZXNjcmlwY2lvbkFydGljdWxvIiwicGVzb0FydGljdWxvIiwiY29kUHJvdmVkb3JBcnRpY3VsbyIsImNvZEludGVybm9BcnRpY3VsbyIsImlkVW5pZGFkTWVkaWRhIiwiaWRDYXRlZ29yaWEiLCJpZE1hcmNhIiwiUmVhbCIsIkludCIsInB1dCIsImlkQXJ0aWN1bG8iLCJub21icmVDYXRlZ29yaWEiLCJkZXNjcmlwY2lvbkNhdGVnb3JpYSIsIm5leHQiLCJwYXRoIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJsb2dPSyIsInNwbGl0IiwidmVyaWZ5IiwiZGF0b3MiLCJvdHJvIiwibm9tYnJlQ2xpZW50ZSIsImFwZWxsaWRvQ2xpZW50ZSIsImlkVGlwb0RvY3VtZW50byIsIm5yb0RvY0NsaWVudGUiLCJpZFRpcG9Db250cmlidWxsZW50ZSIsIm5yb0N1aXRDdWlsQ2xpZW50ZSIsImlkRGlyZWNjaW9uIiwiaWRUaXBvUGVyc29uYSIsImlkQ2xpZW50ZSIsImNhbGxlRGlyZWNjaW9uIiwiYWx0dXJhRGlyZWNjaW9uIiwiY29kaWdvUG9zdGFsRGlyZWNjaW9uIiwiYmFycmlvRGlyZWNjaW9uIiwib3Ryb3NEYXRvc0RpcmVjY2lvbiIsIkNPTkZJRyIsImQiLCJub21icmVNYXJjYSIsImVhY2hTZXJpZXMiLCJub21icmVQcm9kdWN0byIsImRlc2NyaXBjaW9uUHJvZHVjdG8iLCJwcmVjaW9BY3R1YWxQcm9kdWN0byIsInZlY0RldGFsbGVzUHJvZHVjdG8iLCJUcmFuc2FjdGlvbiIsIm15VHJhbnNhY3Rpb24iLCJiZWdpbiIsImVyciIsInJvbGxiYWNrIiwiaWRQcm9kdWN0byIsInBhcnNlSW50IiwibXlSZXF1ZXN0RFAiLCJEUCIsImNhbGxiYWNrIiwicGFyYW1ldGVycyIsInZhbHVlIiwiY2FudGlkYWREZXRhbGxlUHJvZHVjdG8iLCJFIiwiUiIsImVycm9yQ2FsbEJhY2siLCJjb21taXQiLCJub21icmVQcm92ZWVkb3IiLCJhcGVsbGlkb1Byb3ZlZWRvciIsIm5yb0RvY1Byb3ZlZWRvciIsIm5yb0N1aXRDdWlsUHJvdmVlZG9yIiwiaWRQcm92ZWVkb3IiLCJub21icmVTdWN1cnNhbCIsImlkU3VjdXJzYWwiLCJub21icmVUaXBvQ29udHJpYnVsbGVudGUiLCJkZXNjcmlwY2lvblRpcG9Db250cmlidWxsZW50ZSIsIm5vbWJyZVRpcG9Eb2N1bWVudG8iLCJub21icmVUaXBvUGVyc29uYSIsIm5vbWJyZVVuaWRhZE1lZGlkYSIsImRlc2NyaXBjaW9uVW5pZGFkTWVkaWRhIiwiYmNyeXAiLCJoYXNoU3luYyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFuRixNQUFNLENBQUNDLE9BQVAsR0FBaUJpRSxNQUFqQixDOzs7Ozs7Ozs7OztBQ3ZLQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBzZWNyZXQ6J21hc3RlclNvZnQyMDIwJ1xyXG59IiwiY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpO1xyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7IHJlcXVpcmUoJ2NvbG9ycycpIH1cclxuXHJcbnZhciBVUklcclxuXHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgIC8vIFVSSSA9IHtcclxuICAgIC8vICAgICB1c2VyOiBcclxuICAgIC8vICAgICBwYXNzd29yZDogXHJcbiAgICAvLyAgICAgZGF0YWJhc2U6IFxyXG4gICAgLy8gICAgIHBvcnQ6MTQzMyxcclxuICAgIC8vICAgICBzZXJ2ZXI6J1xyXG4gICAgLy8gICAgIG9wdGlvbnM6e1xyXG4gICAgLy8gICAgICAgICBhcHBOYW1lOlxyXG4gICAgLy8gICAgICAgICBlbmFibGVBcml0aEFib3J0OnRydWUsXHJcbiAgICAvLyAgICAgICAgIGVuY3J5cHQ6ZmFsc2VcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgLFxyXG4gICAgLy8gICAgIGNvbm5lY3Rpb25UaW1lT3V0OjE1MDAwMCxcclxuICAgIC8vICAgICBkcml2ZXI6J3RlZGlvdXMnLFxyXG4gICAgLy8gICAgIHN0cmVhbTpmYWxzZSxcclxuICAgIC8vICAgICBwb29sOntcclxuICAgIC8vICAgICAgICAgbWF4OjIwLFxyXG4gICAgLy8gICAgICAgICBtaW46MCxcclxuICAgIC8vICAgICAgICAgaWRsZVRpbWVvdXRNaWxsaXM6MzAwMDAsXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy9WSjczMDBcclxuICAgIC8vIH1cclxuICAgIFVSSSA9IHtcclxuICAgICAgICB1c2VyOiAnZ2VzdExpbmVfU1FMTG9naW5fMScsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdsdHA2eG11cDN0JyxcclxuICAgICAgICBkYXRhYmFzZTogJ2dlc3RMaW5lREInLFxyXG4gICAgICAgIHNlcnZlcjonZ2VzdExpbmVEQi5tc3NxbC5zb21lZS5jb20nLFxyXG4gICAgICAgIG9wdGlvbnM6e1xyXG4gICAgICAgICAgICBhcHBOYW1lOidtYXN0ZXJTb2Z0LUFQSScsXHJcbiAgICAgICAgICAgIGVuYWJsZUFyaXRoQWJvcnQ6dHJ1ZSxcclxuICAgICAgICAgICAgZW5jcnlwdDpmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICAsXHJcbiAgICAgICAgY29ubmVjdGlvblRpbWVPdXQ6MTUwMDAwLFxyXG4gICAgICAgIGRyaXZlcjondGVkaW91cycsXHJcbiAgICAgICAgc3RyZWFtOmZhbHNlLFxyXG4gICAgICAgIHBvb2w6e1xyXG4gICAgICAgICAgICBtYXg6MjAsXHJcbiAgICAgICAgICAgIG1pbjowLFxyXG4gICAgICAgICAgICBpZGxlVGltZW91dE1pbGxpczozMDAwMCxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZWxzZXtcclxuICAgIFVSSSA9IHtcclxuICAgICAgICB1c2VyIDogcHJvY2Vzcy5lbnYuVVNFUlNRTCAsXHJcbiAgICAgICAgcGFzc3dvcmQgOiBwcm9jZXNzLmVudi5QQVNTV09SRFNRTCAsXHJcbiAgICAgICAgZGF0YWJhc2UgOiBwcm9jZXNzLmVudi5EQVRBQkFTRVNRTCAsXHJcbiAgICAgICAgc2VydmVyIDogcHJvY2Vzcy5lbnYuU0VSVkVSU1FMICxcclxuICAgICAgICBvcHRpb25zIDoge1xyXG4gICAgICAgICAgICBlbmFibGVBcml0aEFib3J0IDogdHJ1ZSAsXHJcbiAgICAgICAgICAgIGVuY3J5cHQgOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciBDb25leGlvblNRTCA9IHsgYWJyaXJDb25leGlvbjp1bmRlZmluZWQsIGNlcnJhckNvbmV4aW9uOnVuZGVmaW5lZCwgYWJyaXJDb25leGlvblBPT0w6dW5kZWZpbmVkLCBjZXJyYXJDb25leGlvblBPT0w6dW5kZWZpbmVkIH1cclxuLy8gdmFyIGNvbmV4aW9uXHJcbi8vIENvbmV4aW9uU1FMLmFicmlyQ29uZXhpb24gPSBhc3luYyBmdW5jdGlvbiAoKXtcclxuLy8gICAgIGF3YWl0IG1zc3FsLmNvbm5lY3QoVVJJKVxyXG4vLyAgICAgLnRoZW4ocG9vbD0+e1xyXG4vLyAgICAgICAgIGlmKHBvb2wuX2Nvbm5lY3RlZCl7XHJcbi8vICAgICAgICAgICAgIGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb25lY2lvbiBTUUwgU0VSVkVSJy5ibHVlLCcgQUJJRVJUQScuZ3JlZW4pXHJcbi8vICAgICAgICAgICAgICAgICBjb25leGlvbiA9IHBvb2xcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBlbHNle1xyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZGUgQ29uZXhpb24nLHBvb2wuX2Nvbm5lY3RlZClcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9KVxyXG4vLyB9XHJcbi8vIENvbmV4aW9uU1FMLmNlcnJhckNvbmV4aW9uID0gYXN5bmMgZnVuY3Rpb24gKCl7XHJcbi8vICAgICBhd2FpdCBjb25leGlvbi5jbG9zZSgpXHJcbi8vICAgICBpZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coJ0NvbmVjaW9uIFNRTCBTRVJWRVInLmJsdWUsJyBDRVJSQURBJy5ncmVlbilcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuY29uc3QgY29uZXhpb25lcyA9IHt9XHJcblxyXG5Db25leGlvblNRTC5hYnJpckNvbmV4aW9uUE9PTCA9IGFzeW5jIG5hbWUgPT57XHJcbiAgICBpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmV4aW9uZXMsbmFtZSkpe1xyXG4gICAgICAgIGNvbnN0IG5ld0NvbmV4aW9uID0gbmV3IG1zc3FsLkNvbm5lY3Rpb25Qb29sKFVSSSlcclxuICAgICAgICBjb25zdCBjbG9zZSA9IG5ld0NvbmV4aW9uLmNsb3NlLmJpbmQobmV3Q29uZXhpb24pXHJcbiAgICAgICAgbmV3Q29uZXhpb24uY2xvc2UgPSAoLi4uYXJncykgPT4ge1xyXG4gICAgICAgICAgICBkZWxldGUgY29uZXhpb25lc1tuYW1lXVxyXG4gICAgICAgICAgICByZXR1cm4gY2xvc2UoLi4uYXJncylcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgbmV3Q29uZXhpb24uY29ubmVjdCgpXHJcbiAgICAgICAgY29uZXhpb25lc1tuYW1lXSA9IG5ld0NvbmV4aW9uXHJcbiAgICAgICAgcmV0dXJuIGNvbmV4aW9uZXNbbmFtZV1cclxuICAgIH1cclxufVxyXG5cclxuQ29uZXhpb25TUUwuY2VycmFyQ29uZXhpb25QT09MID0gKCkgPT57XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LnZhbHVlcyhjb25leGlvbmVzKS5tYXAoKHBvb2wpPT57XHJcbiAgICAgICAgcmV0dXJuIHBvb2wuY2xvc2UoKVxyXG4gICAgfSkpXHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBDb25leGlvblNRTCIsImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3QgY29ycyA9IHJlcXVpcmUoJ2NvcnMnKVxyXG52YXIgbW9yZ2FuXHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuXHRyZXF1aXJlKCdjb2xvcnMnKVxyXG5cdG1vcmdhbiA9IHJlcXVpcmUoJ21vcmdhbicpXHJcbn1cclxuXHJcbmNvbnN0IHNlcnZpZG9yID0gZXhwcmVzcygpXHJcbnNlcnZpZG9yLnVzZShjb3JzKCkpXHJcblxyXG4vLyBtaWRkZWx3YXJlXHJcblxyXG5zZXJ2aWRvci51c2UoZXhwcmVzcy5qc29uKCkpXHJcbnNlcnZpZG9yLnVzZShleHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSlcclxuc2Vydmlkb3IudXNlKHJlcXVpcmUoJy4vcnV0YXNBcGkvY2hlY2tMb2dpbicpKVxyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcblx0c2Vydmlkb3IudXNlKG1vcmdhbignZGV2JykpXHJcbn1cclxuXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9sb2d1ZW8nLCByZXF1aXJlKCcuL3J1dGFzQXBpL0xvZ3VlbycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvdXN1YXJpb3MnLCByZXF1aXJlKCcuL3J1dGFzQXBpL3VzdWFyaW9zJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9jYXRlZ29yaWFzJywgcmVxdWlyZSgnLi9ydXRhc0FwaS9jYXRlZ29yaWFzJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS91bmlkYWRlc01lZGlkYScsIHJlcXVpcmUoJy4vcnV0YXNBcGkvdW5pZGFkZXNNZWRpZGEnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL2RpcmVjY2lvbmVzJywgcmVxdWlyZSgnLi9ydXRhc0FwaS9kaXJlY2Npb25lcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvbWFyY2FzJywgcmVxdWlyZSgnLi9ydXRhc0FwaS9tYXJjYXMnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3Byb2R1Y3RvcycsIHJlcXVpcmUoJy4vcnV0YXNBcGkvcHJvZHVjdG9zJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9hcnRpY3Vsb3MnLCByZXF1aXJlKCcuL3J1dGFzQXBpL2FydGljdWxvcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvdGlwb3NEb2N1bWVudG8nLCByZXF1aXJlKCcuL3J1dGFzQXBpL3RpcG9zRG9jdW1lbnRvJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS90aXBvc1BlcnNvbmEnLCByZXF1aXJlKCcuL3J1dGFzQXBpL3RpcG9zUGVyc29uYScpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvdGlwb3NDb250cmlidWxsZW50ZScsIHJlcXVpcmUoJy4vcnV0YXNBcGkvdGlwb3NDb250cmlidWxsZW50ZScpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvY2xpZW50ZXMnLCByZXF1aXJlKCcuL3J1dGFzQXBpL2NsaWVudGVzJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9zdWN1cnNhbGVzJywgcmVxdWlyZSgnLi9ydXRhc0FwaS9zdWN1cnNhbGVzJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9wcm92ZWVkb3JlcycsIHJlcXVpcmUoJy4vcnV0YXNBcGkvcHJvdmVlZG9yZXMnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL2dldHVzZXJsb2dpbicsIHJlcXVpcmUoJy4vcnV0YXNBcGkvZ2V0VXNlckxvZ2luJykpXHJcbi8vXHJcblxyXG4vL1NldHRpbmdzXHJcbnNlcnZpZG9yLnNldCgncG9ydCcsIHByb2Nlc3MuZW52LlBPUlQgfHwgNTAwMClcclxuXHJcbnNlcnZpZG9yLmxpc3RlbihzZXJ2aWRvci5nZXQoJ3BvcnQnKSwgKG0sIGUpID0+IHtcclxuXHRpZiAoZSkge1xyXG5cdFx0Y29uc29sZS5sb2coZSlcclxuXHR9IGVsc2Uge1xyXG5cdFx0aWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdTZXJ2aWRvciBjb3JyaWVuZG8gZW4gZWwgUFVFUlRPJy55ZWxsb3csIHNlcnZpZG9yLmdldCgncG9ydCcpKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ1NlcnZpZG9yIGNvcnJpZW5kbyBlbiBlbCBQVUVSVE8nLCBzZXJ2aWRvci5nZXQoJ3BvcnQnKSlcclxuXHRcdH1cclxuXHR9XHJcbn0pXHJcbiIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3QgYmNyeXB0ID0gcmVxdWlyZSgnYmNyeXB0JylcclxuY29uc3QgeyBzZWNyZXQgfSA9IHJlcXVpcmUoJy4uL0NPTkZJRycpXHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpXHJcbmNvbnN0IHsgdG9rZW4gfSA9IHJlcXVpcmUoJ21vcmdhbicpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIucG9zdCgnLycsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG5cdGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG5cdGNvbnN0IHsgdXN1YXJpbywgcHcgfSA9IHJlcS5ib2R5XHJcblx0Y29uc3QgeyBSZXF1ZXN0LCBWYXJDaGFyIH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ2xvZ3Vlb1VzdWFyaW8nKVxyXG5cdFx0Y29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QoY29uZXhpb24pXHJcblx0XHRteVJlcXVlc3QuaW5wdXQoJ3VzdWFyaW8nLCBWYXJDaGFyLCB1c3VhcmlvKVxyXG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX2xvZ2luJylcclxuXHRcdGlmIChyZXN1bHQpIHtcclxuXHRcdFx0Y2VycmFyQ29uZXhpb25QT09MKClcclxuXHRcdFx0aWYgKHJlc3VsdC5yb3dzQWZmZWN0ZWRbMF0gPT09IDApIHtcclxuXHRcdFx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6ICdVc3VhcmlvIGluZXhpc3RlbnRlICcsIG9wT0s6IGZhbHNlIH0pXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKCFiY3J5cHQuY29tcGFyZVN5bmMocHcsIHJlc3VsdC5yZWNvcmRzZXRbMF0ucHcpKSB7XHJcblx0XHRcdFx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6ICdQYXNzd29yZCBpbmNvcnJlY3RhICcsIG9wT0s6IGZhbHNlIH0pXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGNvbnN0IHIgPSByZXN1bHQucmVjb3Jkc2V0WzBdXHJcblx0XHRcdFx0XHRjb25zdCB1c2VyID0ge1xyXG5cdFx0XHRcdFx0XHRpZFVzdWFyaW86IHIuaWRVc3VhcmlvLFxyXG5cdFx0XHRcdFx0XHRub21icmVVc3VhcmlvOiByLm5vbWJyZVVzdWFyaW8sXHJcblx0XHRcdFx0XHRcdGFwZWxsaWRvVXN1YXJpbzogci5hcGVsbGlkb1VzdWFyaW8sXHJcblx0XHRcdFx0XHRcdHVzdWFyaW86IHIudXN1YXJpbyxcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGp3dC5zaWduKHVzZXIsIHJlcXVpcmUoJy4uL0NPTkZJRycpLnNlY3JldCwgeyBleHBpcmVzSW46IDE0NDAwIH0sIChlcnJvciwgdG9rZW4pID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKGVycm9yKSB7XHJcblx0XHRcdFx0XHRcdFx0cmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOiAnRXJyb3IgYWwgZ2VuZXJhciBlbCB0b2tlbicsIG9wT0s6IGZhbHNlIH0pXHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0cmVzLnN0YXR1cygyMDApLmpzb24oeyB0b2tlbiwgb3BPSzogdHJ1ZSB9KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y2VycmFyQ29uZXhpb25QT09MKClcclxuXHRcdFx0cmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KVxyXG5cdFx0fVxyXG5cdH0gY2F0Y2ggKGUpIHtcclxuXHRcdGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcblx0XHRyZXMuc3RhdHVzKDQwMykuanNvbih7IG1lbnNhamU6IGUubWVzc2FnZSB9KVxyXG5cdH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyXHJcbiIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbi8vVE9ETzogTElTVEEgREUgQVJUSUNVTE9TXHJcbnJvdXRlci5nZXQoJy9saXN0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHthYnJpckNvbmV4aW9uUE9PTCxjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdMaXN0YUFydGljdWxvcycpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlKCdwYV9saXN0YUFydGljdWxvcycpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtsaXN0OnJlc3VsdC5yZWNvcmRzZXQsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamUgOiAnRXJyb3IgZW4gZWwgcmVzdWx0YWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamUgOiBlLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IElOU0VSVEEgQVJUSUNVTE9cclxuXHJcbnJvdXRlci5wb3N0ICgnL2luc2VydCcgLCBhc3luYyAocmVxICwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgbm9tYnJlQXJ0aWN1bG8sZGVzY3JpcGNpb25BcnRpY3VsbyxwZXNvQXJ0aWN1bG8sY29kUHJvdmVkb3JBcnRpY3VsbyxcclxuICAgICAgICAgICAgY29kSW50ZXJub0FydGljdWxvLGlkVW5pZGFkTWVkaWRhLGlkQ2F0ZWdvcmlhLGlkTWFyY2FcclxuICAgICAgICB9ID0gcmVxLmJvZHlcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdpbnNlcnRBcnRpY3VsbycpXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIFJlYWwgLCBJbnQgfSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmVBcnRpY3VsbycgLCBWYXJDaGFyICwgbm9tYnJlQXJ0aWN1bG8gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZGVzY3JpcGNpb25BcnRpY3VsbycgLCBWYXJDaGFyICwgZGVzY3JpcGNpb25BcnRpY3VsbyApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdwZXNvQXJ0aWN1bG8nICwgUmVhbCAsIHBlc29BcnRpY3VsbyApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdjb2RQcm92ZWRvckFydGljdWxvJyAsIEludCAsIGNvZFByb3ZlZG9yQXJ0aWN1bG8gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnY29kSW50ZXJub0FydGljdWxvJyAsIEludCAsIGNvZEludGVybm9BcnRpY3VsbyApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFVuaWRhZE1lZGlkYScgLCBJbnQgLCBpZFVuaWRhZE1lZGlkYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZENhdGVnb3JpYScgLCBJbnQgLCBpZENhdGVnb3JpYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZE1hcmNhJyAsIEludCAsIGlkTWFyY2EgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfaW5zZXJ0QXJ0aWN1bG8nKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J0FydGljdWxvIGd1YXJkYWRvIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBVUERBVEUgQVJUSUNVTE9cclxuXHJcbnJvdXRlci5wdXQoJy91cGRhdGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgaWRBcnRpY3Vsbyxub21icmVBcnRpY3VsbyxkZXNjcmlwY2lvbkFydGljdWxvLHBlc29BcnRpY3Vsbyxjb2RQcm92ZWRvckFydGljdWxvLFxyXG4gICAgICAgICAgICBjb2RJbnRlcm5vQXJ0aWN1bG8saWRVbmlkYWRNZWRpZGEsaWRDYXRlZ29yaWEsaWRNYXJjYVxyXG4gICAgICAgIH0gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgndXBkYXRlQXJ0aWN1bG8nKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkQXJ0aWN1bG8nICwgbXNzcWwuSW50ICwgaWRBcnRpY3VsbyApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmVBcnRpY3VsbycgLCBtc3NxbC5WYXJDaGFyICwgbm9tYnJlQXJ0aWN1bG8gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZGVzY3JpcGNpb25BcnRpY3VsbycgLCBtc3NxbC5WYXJDaGFyICwgZGVzY3JpcGNpb25BcnRpY3VsbyApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdwZXNvQXJ0aWN1bG8nICwgbXNzcWwuUmVhbCAsIHBlc29BcnRpY3VsbyApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdjb2RQcm92ZWRvckFydGljdWxvJyAsIG1zc3FsLkludCAsIGNvZFByb3ZlZG9yQXJ0aWN1bG8gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnY29kSW50ZXJub0FydGljdWxvJyAsIG1zc3FsLkludCAsIGNvZEludGVybm9BcnRpY3VsbyApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFVuaWRhZE1lZGlkYScgLCBtc3NxbC5JbnQgLCBpZFVuaWRhZE1lZGlkYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZENhdGVnb3JpYScgLCBtc3NxbC5JbnQgLCBpZENhdGVnb3JpYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZE1hcmNhJyAsIG1zc3FsLkludCAsIGlkTWFyY2EgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfdXBkYXRlQXJ0aWN1bG8nKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J0FyY3RpY3VsbyBtb2RpZmljYWRvIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLCBvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogREVMRVRFIEFSVElDVUxPXHJcblxyXG5yb3V0ZXIucG9zdCgnL2RlbGV0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge2lkQXJ0aWN1bG99ID0gcmVxLmJvZHkgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ2RlbGV0ZUFydGljdWxvJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZEFydGljdWxvJyAsIG1zc3FsLkludCAsIGlkQXJ0aWN1bG8gKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfZGVsZXRlQXJ0aWN1bG8nKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J0FydGljdWxvIGVsaW1pbmFkbyBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxuLy9UT0RPOiBMSVNUQSBERSBDQVRFR09SSUFTXHJcbnJvdXRlci5nZXQoJy9saXN0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHthYnJpckNvbmV4aW9uUE9PTCxjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdMaXN0YUNhdGVnb3JpYXMnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSgncGFfbGlzdGFDYXRlZ29yaWFzJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe2xpc3Q6cmVzdWx0LnJlY29yZHNldCxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZSA6ICdFcnJvciBlbiBlbCByZXN1bHRhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZSA6IGUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogSU5TRVJUQSBDQVRFR09SQVxyXG5cclxucm91dGVyLnBvc3QgKCcvaW5zZXJ0JyAsIGFzeW5jIChyZXEgLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBub21icmVDYXRlZ29yaWEgLCBkZXNjcmlwY2lvbkNhdGVnb3JpYSB9ID0gcmVxLmJvZHlcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdpbnNlcnRDYXRlZ29yaWEnKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgfSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmVDYXRlZ29yaWEnICwgVmFyQ2hhciAsIG5vbWJyZUNhdGVnb3JpYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdkZXNjcmlwY2lvbkNhdGVnb3JpYScgLCBWYXJDaGFyICwgZGVzY3JpcGNpb25DYXRlZ29yaWEgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfaW5zZXJ0Q2F0ZWdvcmlhJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidDYXRlZ29yaWEgZ3VhcmRhZGEgZXhpdG9zYW1lbnRlJyxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTplLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IFVQREFURSBDQVRFR09SSUFcclxuXHJcbnJvdXRlci5wdXQoJy91cGRhdGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtub21icmVDYXRlZ29yaWEsZGVzY3JpcGNpb25DYXRlZ29yaWEsaWRDYXRlZ29yaWF9ID0gcmVxLmJvZHkgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ3VwZGF0ZUNhdGVnb3JpYScpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlQ2F0ZWdvcmlhJyAsIG1zc3FsLlZhckNoYXIgLCBub21icmVDYXRlZ29yaWEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZGVzY3JpcGNpb25DYXRlZ29yaWEnICwgbXNzcWwuVmFyQ2hhciAsIGRlc2NyaXBjaW9uQ2F0ZWdvcmlhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkQ2F0ZWdvcmlhJyAsIG1zc3FsLkludCAsIGlkQ2F0ZWdvcmlhIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX3VwZGF0ZUNhdGVnb3JpYScpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonQ2F0ZWdvcmlhIG1vZGlmaWNhZGEgZXhpdG9zYW1lbnRlJyxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTplLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IERFTEVURSBDQVRFR09SSUFcclxuXHJcbnJvdXRlci5wb3N0KCcvZGVsZXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7aWRDYXRlZ29yaWF9ID0gcmVxLmJvZHkgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ2RlbGV0ZUNhdGVnb3JpYScpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRDYXRlZ29yaWEnICwgbXNzcWwuSW50ICwgaWRDYXRlZ29yaWEgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfZGVsZXRlQ2F0ZWdvcmlhJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidDYXRlZ29yaWEgZWxpbWluYWRhIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKVxyXG5jb25zdCB7c2VjcmV0fSA9IHJlcXVpcmUoJy4uL0NPTkZJRycpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChyZXEgLCByZXMgLG5leHQpIHtcclxuICAgIGlmIChyZXEucGF0aCAhPT0gJy9hcGkvbG9ndWVvJykge1xyXG4gICAgICAgIGlmKCAhcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbikge1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZSA6ICdObyBlbnZpbyBlbCB0b2tlbiBlbiBlbCBoZWFkZXJzJywgbG9nT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24uc3BsaXQoJyAnKVsxXVxyXG4gICAgICAgICAgICBqd3QudmVyaWZ5KHRva2VuICxzZWNyZXQgLCAoIGUgLCBkYXRvcyApPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBlICkgeyByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZSA6IGUubWVzc2FnZSAsIG90cm8gOiAnZXJyb3IgIGVuIGxhIGNvbW1wcm9iYWNpb24gdG9rZW4nLGxvZ09LOmZhbHNlfSkgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7IHJldHVybiBuZXh0KCkgfVxyXG4gICAgICAgICAgICB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHsgcmV0dXJuIG5leHQoKSB9XHJcbn0iLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG4vL1RPRE86IExJU1RBIERFIENMSUVOVEVTXHJcbnJvdXRlci5nZXQoJy9saXN0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHthYnJpckNvbmV4aW9uUE9PTCxjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdMaXN0YUNsaWVudGVzJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX2xpc3RhQ2xpZW50ZXMnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bGlzdDpyZXN1bHQucmVjb3Jkc2V0LG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplIDogJ0Vycm9yIGVuIGVsIHJlc3VsdGFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplIDogZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBJTlNFUlRBIENMSUVOVEVcclxuXHJcbnJvdXRlci5wb3N0ICgnL2luc2VydCcgLCBhc3luYyAocmVxICwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgbm9tYnJlQ2xpZW50ZSxhcGVsbGlkb0NsaWVudGUsaWRUaXBvRG9jdW1lbnRvLG5yb0RvY0NsaWVudGUsXHJcbiAgICAgICAgICAgIGlkVGlwb0NvbnRyaWJ1bGxlbnRlLG5yb0N1aXRDdWlsQ2xpZW50ZSxpZERpcmVjY2lvbixpZFRpcG9QZXJzb25hXHJcbiAgICAgICAgfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnaW5zZXJ0Q2xpZW50ZScpXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCB9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZUNsaWVudGUnICwgVmFyQ2hhciAsIG5vbWJyZUNsaWVudGUgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnYXBlbGxpZG9DbGllbnRlJyAsIFZhckNoYXIgLCBhcGVsbGlkb0NsaWVudGUgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRUaXBvRG9jdW1lbnRvJyAsIEludCAsIGlkVGlwb0RvY3VtZW50byApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCducm9Eb2NDbGllbnRlJyAsIFZhckNoYXIgLCBucm9Eb2NDbGllbnRlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVGlwb0NvbnRyaWJ1bGxlbnRlJyAsIEludCAsIGlkVGlwb0NvbnRyaWJ1bGxlbnRlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25yb0N1aXRDdWlsQ2xpZW50ZScgLCBJbnQgLCBucm9DdWl0Q3VpbENsaWVudGUgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWREaXJlY2Npb24nICwgSW50ICwgaWREaXJlY2Npb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRUaXBvUGVyc29uYScgLCBJbnQgLCBpZFRpcG9QZXJzb25hIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2luc2VydENsaWVudGUnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J0NsaWVudGUgZ3VhcmRhZG8gZXhpdG9zYW1lbnRlJyxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTplLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IFVQREFURSBDTElFTlRFXHJcblxyXG5yb3V0ZXIucHV0KCcvdXBkYXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGlkQ2xpZW50ZSxub21icmVDbGllbnRlLGFwZWxsaWRvQ2xpZW50ZSxpZFRpcG9Eb2N1bWVudG8sbnJvRG9jQ2xpZW50ZSxcclxuICAgICAgICAgICAgaWRUaXBvQ29udHJpYnVsbGVudGUsbnJvQ3VpdEN1aWxDbGllbnRlLGlkRGlyZWNjaW9uLGlkVGlwb1BlcnNvbmFcclxuICAgICAgICB9ID0gcmVxLmJvZHkgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ3VwZGF0ZUNsaWVudGUnKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkQ2xpZW50ZScgLCBtc3NxbC5JbnQgLCBpZENsaWVudGUgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlQ2xpZW50ZScgLCBtc3NxbC5WYXJDaGFyICwgbm9tYnJlQ2xpZW50ZSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdhcGVsbGlkb0NsaWVudGUnICwgbXNzcWwuVmFyQ2hhciAsIGFwZWxsaWRvQ2xpZW50ZSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFRpcG9Eb2N1bWVudG8nICwgbXNzcWwuSW50ICwgaWRUaXBvRG9jdW1lbnRvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25yb0RvY0NsaWVudGUnICwgbXNzcWwuVmFyQ2hhciAsIG5yb0RvY0NsaWVudGUgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRUaXBvQ29udHJpYnVsbGVudGUnICwgSW50ICwgaWRUaXBvQ29udHJpYnVsbGVudGUgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbnJvQ3VpdEN1aWxDbGllbnRlJyAsIG1zc3FsLkludCAsIG5yb0N1aXRDdWlsQ2xpZW50ZSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZERpcmVjY2lvbicgLCBtc3NxbC5JbnQgLCBpZERpcmVjY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFRpcG9QZXJzb25hJyAsIG1zc3FsLkludCAsIGlkVGlwb1BlcnNvbmEgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfdXBkYXRlQ2xpZW50ZScpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonQ2xpZW50ZSBtb2RpZmljYWRvIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBERUxFVEUgQ0xJRU5URVxyXG5cclxucm91dGVyLnBvc3QoJy9kZWxldGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtpZENsaWVudGV9ID0gcmVxLmJvZHkgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ2RlbGV0ZUNsaWVudGUnKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkQ2xpZW50ZScgLCBtc3NxbC5JbnQgLCBpZENsaWVudGUgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfZGVsZXRlQ2xpZW50ZScpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonQ2xpZW50ZSBlbGltaW5hZG8gZXhpdG9zYW1lbnRlJyxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTplLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbi8vVE9ETzogTElTVEEgREUgRElSRUNDSU9ORVNcclxucm91dGVyLmdldCgnL2xpc3QnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3Qge2FicmlyQ29uZXhpb25QT09MLGNlcnJhckNvbmV4aW9uUE9PTH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICAgICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ0xpc3RhRGlyZWNjaW9uZXMnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSgncGFfbGlzdGFEaXJlY2Npb25lcycpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtsaXN0OnJlc3VsdC5yZWNvcmRzZXQsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamUgOiAnRXJyb3IgZW4gZWwgcmVzdWx0YWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamUgOiBlLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IElOU0VSVEEgRElSRUNDSU9OXHJcblxyXG5yb3V0ZXIucG9zdCAoJy9pbnNlcnQnICwgYXN5bmMgKHJlcSAsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdHsgXHJcbiAgICAgICAgICAgICAgICBjYWxsZURpcmVjY2lvbiAsIFxyXG4gICAgICAgICAgICAgICAgYWx0dXJhRGlyZWNjaW9uICwgXHJcbiAgICAgICAgICAgICAgICBjb2RpZ29Qb3N0YWxEaXJlY2Npb24gLCBcclxuICAgICAgICAgICAgICAgIGJhcnJpb0RpcmVjY2lvbiAsIFxyXG4gICAgICAgICAgICAgICAgb3Ryb3NEYXRvc0RpcmVjY2lvbiBcclxuICAgICAgICAgICAgIH0gPSByZXEuYm9keVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ2luc2VydERpcmVjY2lvbicpXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCB9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2NhbGxlRGlyZWNjaW9uJyAsIFZhckNoYXIgLCBjYWxsZURpcmVjY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdhbHR1cmFEaXJlY2Npb24nICwgSW50ICwgYWx0dXJhRGlyZWNjaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2NvZGlnb1Bvc3RhbERpcmVjY2lvbicgLCBJbnQgLCBjb2RpZ29Qb3N0YWxEaXJlY2Npb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnYmFycmlvRGlyZWNjaW9uJyAsIFZhckNoYXIgLCBiYXJyaW9EaXJlY2Npb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnb3Ryb3NEYXRvc0RpcmVjY2lvbicgLCBWYXJDaGFyICwgb3Ryb3NEYXRvc0RpcmVjY2lvbiApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9pbnNlcnREaXJlY2Npb24nKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J0RpcmVjY2lvbiBndWFyZGFkYSBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogVVBEQVRFIERJUkVDQ0lPTlxyXG5cclxucm91dGVyLnB1dCgnL3VwZGF0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3R7IFxyXG4gICAgICAgICAgICBjYWxsZURpcmVjY2lvbiAsIFxyXG4gICAgICAgICAgICBhbHR1cmFEaXJlY2Npb24gLCBcclxuICAgICAgICAgICAgY29kaWdvUG9zdGFsRGlyZWNjaW9uICwgXHJcbiAgICAgICAgICAgIGJhcnJpb0RpcmVjY2lvbiAsIFxyXG4gICAgICAgICAgICBvdHJvc0RhdG9zRGlyZWNjaW9uICxcclxuICAgICAgICAgICAgaWREaXJlY2Npb25cclxuICAgICAgICAgfSA9IHJlcS5ib2R5ICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ3VwZGF0ZURpcmVjY2lvbicpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnY2FsbGVEaXJlY2Npb24nICwgbXNzcWwuVmFyQ2hhciAsIGNhbGxlRGlyZWNjaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2FsdHVyYURpcmVjY2lvbicgLCBtc3NxbC5JbnQgLCBhbHR1cmFEaXJlY2Npb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnY29kaWdvUG9zdGFsRGlyZWNjaW9uJyAsIG1zc3FsLkludCAsIGNvZGlnb1Bvc3RhbERpcmVjY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdiYXJyaW9EaXJlY2Npb24nICwgbXNzcWwuVmFyQ2hhciAsIGJhcnJpb0RpcmVjY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdvdHJvc0RhdG9zRGlyZWNjaW9uJyAsIG1zc3FsLlZhckNoYXIgLCBvdHJvc0RhdG9zRGlyZWNjaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkRGlyZWNjaW9uJyAsIG1zc3FsLkludCAsIGlkRGlyZWNjaW9uIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX3VwZGF0ZURpcmVjY2lvbicpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonRGlyZWNjaW9uIG1vZGlmaWNhZGEgZXhpdG9zYW1lbnRlJyxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTplLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IERFTEVURSBESVJFQ0lPTlxyXG5cclxucm91dGVyLnBvc3QoJy9kZWxldGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtpZERpcmVjY2lvbn0gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnZGVsZXRlRGlyZWNjaW9uJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZERpcmVjY2lvbicgLCBtc3NxbC5JbnQgLCBpZERpcmVjY2lvbiApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9kZWxldGVEaXJlY2Npb24nKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J0RpcmVjY2lvbiBlbGltaW5hZGEgZXhpdG9zYW1lbnRlJyxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTplLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IFJvdXRlciA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKVxyXG5jb25zdCBDT05GSUcgPSByZXF1aXJlKCcuLi9DT05GSUcnKVxyXG5cclxuY29uc3Qgcm91dGVyPVJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJywocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbi5zcGxpdCgnICcpWzFdXHJcbiAgICBqd3QudmVyaWZ5KHRva2VuLENPTkZJRy5zZWNyZXQsKGUsZCk9PntcclxuICAgICAgICBpZihlKXsgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5uYW1lLGxvZ09LOmZhbHNlfSl9XHJcbiAgICAgICAgZWxzZXsgcmVzLnN0YXR1cygyMDApLmpzb24oe3VzdWFyaW86ZCxsb2dPSzp0cnVlfSkgfVxyXG4gICAgfSkgICAgXHJcbn0pXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxuLy9UT0RPOiBMSVNUQSBERSBNQVJDQVNcclxucm91dGVyLmdldCgnL2xpc3QnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3Qge2FicmlyQ29uZXhpb25QT09MLGNlcnJhckNvbmV4aW9uUE9PTH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICAgICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ0xpc3RhTWFyY2FzJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX2xpc3RhTWFyY2FzJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe2xpc3Q6cmVzdWx0LnJlY29yZHNldCxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZSA6ICdFcnJvciBlbiBlbCByZXN1bHRhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZSA6IGUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogSU5TRVJUQSBNQVJDQVxyXG5cclxucm91dGVyLnBvc3QgKCcvaW5zZXJ0JyAsIGFzeW5jIChyZXEgLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge25vbWJyZU1hcmNhfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnaW5zZXJ0TWFyY2EnKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgfSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmVNYXJjYScgLCBWYXJDaGFyICwgbm9tYnJlTWFyY2EgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfaW5zZXJ0TWFyY2EnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J01hcmNhIGd1YXJkYWRhIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBVUERBVEUgTUFSQ0FcclxuXHJcbnJvdXRlci5wdXQoJy91cGRhdGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtub21icmVNYXJjYSxpZE1hcmNhfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCd1cGRhdGVNYXJjYScpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlTWFyY2EnICwgbXNzcWwuVmFyQ2hhciAsIG5vbWJyZU1hcmNhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkTWFyY2EnICwgbXNzcWwuSW50ICwgaWRNYXJjYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV91cGRhdGVNYXJjYScpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonTWFyY2EgbW9kaWZpY2FkYSBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogREVMRVRFIE1BUkNBXHJcblxyXG5yb3V0ZXIucG9zdCgnL2RlbGV0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge2lkTWFyY2F9ID0gcmVxLmJvZHkgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ2RlbGV0ZU1hcmNhJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZE1hcmNhJyAsIG1zc3FsLkludCAsIGlkTWFyY2EgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfZGVsZXRlTWFyY2EnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J01hcmNhIGVsaW1pbmFkYSBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCB7IGVhY2hTZXJpZXMgfSA9IHJlcXVpcmUoJ2FzeW5jJylcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbi8vVE9ETzogTElTVEEgREUgUFJPRFVDVE9TXHJcbnJvdXRlci5nZXQoJy9saXN0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHthYnJpckNvbmV4aW9uUE9PTCxjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdMaXN0YVByb2R1Y3RvcycpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlKCdwYV9saXN0YVByb2R1Y3RvcycpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtsaXN0OnJlc3VsdC5yZWNvcmRzZXQsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamUgOiAnRXJyb3IgZW4gZWwgcmVzdWx0YWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamUgOiBlLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IElOU0VSVEEgUFJPRFVDVE9cclxuXHJcbnJvdXRlci5wb3N0ICgnL2luc2VydCcgLCBhc3luYyAocmVxICwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBjb25zdCB7bm9tYnJlUHJvZHVjdG8sZGVzY3JpcGNpb25Qcm9kdWN0byxwcmVjaW9BY3R1YWxQcm9kdWN0byx2ZWNEZXRhbGxlc1Byb2R1Y3RvfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdpbnNlcnRQcm9kdWN0bycpXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50ICwgUmVhbCAsVHJhbnNhY3Rpb24gfSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIGNvbnN0IG15VHJhbnNhY3Rpb24gPSBuZXcgVHJhbnNhY3Rpb24gKGNvbmV4aW9uKVxyXG4gICAgbXlUcmFuc2FjdGlvbi5iZWdpbiggYXN5bmMgKGVycikgPT4ge1xyXG4gICAgICAgIGlmKGVycikge1xyXG4gICAgICAgICAgICBteVRyYW5zYWN0aW9uLnJvbGxiYWNrKClcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChteVRyYW5zYWN0aW9uKVxyXG4gICAgICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZVByb2R1Y3RvJyAsIFZhckNoYXIgLCBub21icmVQcm9kdWN0byApXHJcbiAgICAgICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZGVzY3JpcGNpb25Qcm9kdWN0bycgLCBWYXJDaGFyICwgZGVzY3JpcGNpb25Qcm9kdWN0byApXHJcbiAgICAgICAgICAgIG15UmVxdWVzdC5pbnB1dCgncHJlY2lvQWN0dWFsUHJvZHVjdG8nICwgUmVhbCAsIHByZWNpb0FjdHVhbFByb2R1Y3RvIClcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9pbnNlcnRQcm9kdWN0bycpXHJcbiAgICAgICAgICAgIGlmKHJlc3VsdC5yb3dzQWZmZWN0ZWRbMF0gPT09IDAgfHwgIXJlc3VsdC5yZWNvcmRzZXRbMF0uaWRQcm9kdWN0byl7XHJcbiAgICAgICAgICAgICAgICBteVRyYW5zYWN0aW9uLnJvbGxiYWNrKClcclxuICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonUHJvZHVjdG8gbm8gaW5zZXJ0YWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNleyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkUHJvZHVjdG8gPSBwYXJzZUludChyZXN1bHQucmVjb3Jkc2V0WzBdLmlkUHJvZHVjdG8pXHJcbiAgICAgICAgICAgICAgICBjb25zdCBteVJlcXVlc3REUCA9IG5ldyBSZXF1ZXN0IChteVRyYW5zYWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgbXlSZXF1ZXN0RFAuaW5wdXQoJ2lkUHJvZHVjdG8nICwgSW50ICwgaWRQcm9kdWN0byApXHJcbiAgICAgICAgICAgICAgICBteVJlcXVlc3REUC5pbnB1dCgnaWRBcnRpY3VsbycgLCBJbnQgLCAwIClcclxuICAgICAgICAgICAgICAgIG15UmVxdWVzdERQLmlucHV0KCdjYW50aWRhZERldGFsbGVQcm9kdWN0bycgLCBSZWFsICwgMCApXHJcbiAgICAgICAgICAgICAgICBlYWNoU2VyaWVzKHZlY0RldGFsbGVzUHJvZHVjdG8gLCAoRFAgLCBjYWxsYmFjayApPT57ICBcclxuICAgICAgICAgICAgICAgICAgICBteVJlcXVlc3REUC5wYXJhbWV0ZXJzLmlkQXJ0aWN1bG8udmFsdWUgPSBEUC5pZEFydGljdWxvXHJcbiAgICAgICAgICAgICAgICAgICAgbXlSZXF1ZXN0RFAucGFyYW1ldGVycy5jYW50aWRhZERldGFsbGVQcm9kdWN0by52YWx1ZSA9IERQLmNhbnRpZGFkRGV0YWxsZVByb2R1Y3RvICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIG15UmVxdWVzdERQLmV4ZWN1dGUoJ3BhX2luc2VydERldGFsbGVQcm9kdWN0bycsKEUsUik9PntpZihFKXsgY2FsbGJhY2soRSkgfWVsc2V7IGNhbGxiYWNrKCl9fSkgXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvckNhbGxCYWNrID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZXJyb3JDYWxsQmFjayl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteVRyYW5zYWN0aW9uLnJvbGxiYWNrKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTplcnJvckNhbGxCYWNrLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteVRyYW5zYWN0aW9uLmNvbW1pdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J1Byb2R1Y3RvIHkgZGV0YWxsZXMgZGUgcHJvZHVjdG8gZ3VhcmRhZG9zIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICkgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2goZSl7XHJcbiAgICAgICAgICAgIG15VHJhbnNhY3Rpb24ucm9sbGJhY2soKVxyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgIH0pXHJcbn0pXHJcblxyXG4vL1RPRE86IFVQREFURSBQUk9EVUNUT1xyXG5cclxucm91dGVyLnB1dCgnL3VwZGF0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGNvbnN0IHtub21icmVQcm9kdWN0byxkZXNjcmlwY2lvblByb2R1Y3RvLHByZWNpb0FjdHVhbFByb2R1Y3RvLGlkUHJvZHVjdG8sdmVjRGV0YWxsZXNQcm9kdWN0b30gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCd1cGRhdGVQcm9kdWN0bycpXHJcbiAgICBjb25zdCB7UmVxdWVzdCxWYXJDaGFyLFJlYWwsSW50LFRyYW5zYWN0aW9ufSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIGNvbnN0IG15VHJhbnNhY3Rpb24gPSBuZXcgVHJhbnNhY3Rpb24oY29uZXhpb24pXHJcbiAgICBteVRyYW5zYWN0aW9uLmJlZ2luKGFzeW5jIGVycj0+e1xyXG4gICAgICAgIGlmKGVycil7XHJcbiAgICAgICAgICAgIG15VHJhbnNhY3Rpb24ucm9sbGJhY2soKVxyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKG15VHJhbnNhY3Rpb24pXHJcbiAgICAgICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlUHJvZHVjdG8nICwgVmFyQ2hhciAsIG5vbWJyZVByb2R1Y3RvIClcclxuICAgICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdkZXNjcmlwY2lvblByb2R1Y3RvJyAsIFZhckNoYXIgLCBkZXNjcmlwY2lvblByb2R1Y3RvIClcclxuICAgICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdwcmVjaW9BY3R1YWxQcm9kdWN0bycgLCBSZWFsICwgcHJlY2lvQWN0dWFsUHJvZHVjdG8gKVxyXG4gICAgICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkUHJvZHVjdG8nICwgSW50ICwgaWRQcm9kdWN0byApXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfdXBkYXRlUHJvZHVjdG8nKVxyXG4gICAgICAgICAgICBpZihyZXN1bHQucm93c0FmZmVjdGVkID09PSAwKXtcclxuICAgICAgICAgICAgICAgIG15VHJhbnNhY3Rpb24ucm9sbGJhY2soKVxyXG4gICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFUlJPUiAwIGZpbGFzIG1vZGlmaWNhZGFzJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbXlSZXF1ZXN0RFAgPSBuZXcgUmVxdWVzdChteVRyYW5zYWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgbXlSZXF1ZXN0RFAuaW5wdXQoJ2lkUHJvZHVjdG8nLEludCxpZFByb2R1Y3RvKVxyXG4gICAgICAgICAgICAgICAgbXlSZXF1ZXN0RFAuaW5wdXQoJ2lkQXJ0aWN1bG8nLEludCwwKVxyXG4gICAgICAgICAgICAgICAgbXlSZXF1ZXN0RFAuaW5wdXQoJ2NhbnRpZGFkRGV0YWxsZVByb2R1Y3RvJyxSZWFsLDApXHJcbiAgICAgICAgICAgICAgICBlYWNoU2VyaWVzKHZlY0RldGFsbGVzUHJvZHVjdG8sKERQLGNhbGxiYWNrKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIG15UmVxdWVzdERQLnBhcmFtZXRlcnMuaWRBcnRpY3Vsby52YWx1ZSA9IERQLmlkQXJ0aWN1bG9cclxuICAgICAgICAgICAgICAgICAgICBteVJlcXVlc3REUC5wYXJhbWV0ZXJzLmNhbnRpZGFkRGV0YWxsZVByb2R1Y3RvLnZhbHVlID0gRFAuY2FudGlkYWREZXRhbGxlUHJvZHVjdG9cclxuICAgICAgICAgICAgICAgICAgICBteVJlcXVlc3REUC5leGVjdXRlKCdwYV9pbnNlcnREZXRhbGxlUHJvZHVjdG8nLChFLFIpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKEUpe2NhbGxiYWNrKEUpfWVsc2V7Y2FsbGJhY2soKX1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSxlcnJvckNhbGxCYWNrPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZXJyb3JDYWxsQmFjayl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15VHJhbnNhY3Rpb24ucm9sbGJhY2soKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTplcnJvckNhbGxCYWNrLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15VHJhbnNhY3Rpb24uY29tbWl0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J1Byb2R1Y3RvIG1vZGlmaWNhZG8gZXhpdG9zYW1lbnRlJyxvcE9LOnRydWV9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2goZSl7XHJcbiAgICAgICAgICAgIG15VHJhbnNhY3Rpb24ucm9sbGJhY2soKVxyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbn0pXHJcblxyXG4vL1RPRE86IERFTEVURSBQUk9EVUNUT1xyXG5cclxucm91dGVyLnBvc3QoJy9kZWxldGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtpZFByb2R1Y3RvfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdkZWxldGVQcm9kdWN0bycpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRQcm9kdWN0bycgLCBtc3NxbC5JbnQgLCBpZFByb2R1Y3RvIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2RlbGV0ZVByb2R1Y3RvJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidQcm9kdWN0byBlbGltaW5hZG8gZXhpdG9zYW1lbnRlJyxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTplLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbi8vVE9ETzogTElTVEEgREUgUFJPVkVFRE9SRVNcclxucm91dGVyLmdldCgnL2xpc3QnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3Qge2FicmlyQ29uZXhpb25QT09MLGNlcnJhckNvbmV4aW9uUE9PTH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICAgICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ0xpc3RhUHJvdmVlZG9yZXMnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSgncGFfbGlzdGFQcm92ZWVkb3JlcycpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtsaXN0OnJlc3VsdC5yZWNvcmRzZXQsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamUgOiAnRXJyb3IgZW4gZWwgcmVzdWx0YWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamUgOiBlLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IElOU0VSVEEgUFJPVkVFRE9SXHJcblxyXG5yb3V0ZXIucG9zdCAoJy9pbnNlcnQnICwgYXN5bmMgKHJlcSAsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IG5vbWJyZVByb3ZlZWRvcixhcGVsbGlkb1Byb3ZlZWRvcixpZFRpcG9Eb2N1bWVudG8sbnJvRG9jUHJvdmVlZG9yLFxyXG4gICAgICAgICAgICBpZFRpcG9Db250cmlidWxsZW50ZSxucm9DdWl0Q3VpbFByb3ZlZWRvcixpZERpcmVjY2lvbixpZFRpcG9QZXJzb25hXHJcbiAgICAgICAgfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnaW5zZXJ0UHJvdmVlZG9yJylcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlUHJvdmVlZG9yJyAsIFZhckNoYXIgLCBub21icmVQcm92ZWVkb3IgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnYXBlbGxpZG9Qcm92ZWVkb3InICwgVmFyQ2hhciAsIGFwZWxsaWRvUHJvdmVlZG9yIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVGlwb0RvY3VtZW50bycgLCBJbnQgLCBpZFRpcG9Eb2N1bWVudG8gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbnJvRG9jUHJvdmVlZG9yJyAsIFZhckNoYXIgLCBucm9Eb2NQcm92ZWVkb3IgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRUaXBvQ29udHJpYnVsbGVudGUnICwgSW50ICwgaWRUaXBvQ29udHJpYnVsbGVudGUgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbnJvQ3VpdEN1aWxQcm92ZWVkb3InICwgSW50ICwgbnJvQ3VpdEN1aWxQcm92ZWVkb3IgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWREaXJlY2Npb24nICwgSW50ICwgaWREaXJlY2Npb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRUaXBvUGVyc29uYScgLCBJbnQgLCBpZFRpcG9QZXJzb25hIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2luc2VydFByb3ZlZWRvcicpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonUHJvdmVlZG9yIGd1YXJkYWRvIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBVUERBVEUgUFJPVkVFRE9SXHJcblxyXG5yb3V0ZXIucHV0KCcvdXBkYXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGlkUHJvdmVlZG9yLG5vbWJyZVByb3ZlZWRvcixhcGVsbGlkb1Byb3ZlZWRvcixpZFRpcG9Eb2N1bWVudG8sbnJvRG9jUHJvdmVlZG9yLFxyXG4gICAgICAgICAgICBpZFRpcG9Db250cmlidWxsZW50ZSxucm9DdWl0Q3VpbFByb3ZlZWRvcixpZERpcmVjY2lvbixpZFRpcG9QZXJzb25hXHJcbiAgICAgICAgfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCd1cGRhdGVQcm92ZWVkb3InKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkUHJvdmVlZG9yJyAsIG1zc3FsLkludCAsIGlkUHJvdmVlZG9yIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZVByb3ZlZWRvcicgLCBtc3NxbC5WYXJDaGFyICwgbm9tYnJlUHJvdmVlZG9yIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2FwZWxsaWRvUHJvdmVlZG9yJyAsIG1zc3FsLlZhckNoYXIgLCBhcGVsbGlkb1Byb3ZlZWRvciApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFRpcG9Eb2N1bWVudG8nICwgbXNzcWwuSW50ICwgaWRUaXBvRG9jdW1lbnRvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25yb0RvY1Byb3ZlZWRvcicgLCBtc3NxbC5WYXJDaGFyICwgbnJvRG9jUHJvdmVlZG9yIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVGlwb0NvbnRyaWJ1bGxlbnRlJyAsIEludCAsIGlkVGlwb0NvbnRyaWJ1bGxlbnRlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25yb0N1aXRDdWlsUHJvdmVlZG9yJyAsIG1zc3FsLkludCAsIG5yb0N1aXRDdWlsUHJvdmVlZG9yIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkRGlyZWNjaW9uJyAsIG1zc3FsLkludCAsIGlkRGlyZWNjaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVGlwb1BlcnNvbmEnICwgbXNzcWwuSW50ICwgaWRUaXBvUGVyc29uYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV91cGRhdGVQcm92ZWVkb3InKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J1Byb3ZlZWRvciBtb2RpZmljYWRvIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBERUxFVEUgUFJPVkVFRE9SXHJcblxyXG5yb3V0ZXIucG9zdCgnL2RlbGV0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge2lkUHJvdmVlZG9yfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdkZWxldGVQcm92ZWVkb3InKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkUHJvdmVlZG9yJyAsIG1zc3FsLkludCAsIGlkUHJvdmVlZG9yIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2RlbGV0ZVByb3ZlZWRvcicpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonUHJvdmVlZG9yIGVsaW1pbmFkbyBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxuLy9UT0RPOiBMSVNUQSBTVUNVUlNBTEVTXHJcbnJvdXRlci5nZXQoJy9saXN0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHthYnJpckNvbmV4aW9uUE9PTCxjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdMaXN0YVN1Y3Vyc2FsZXMnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSgncGFfbGlzdGFTdWN1cnNhbGVzJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe2xpc3Q6cmVzdWx0LnJlY29yZHNldCxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZSA6ICdFcnJvciBlbiBlbCByZXN1bHRhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZSA6IGUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogSU5TRVJUQSBTVUNVUlNBTFxyXG5cclxucm91dGVyLnBvc3QgKCcvaW5zZXJ0JyAsIGFzeW5jIChyZXEgLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBpZERpcmVjY2lvbiAsIG5vbWJyZVN1Y3Vyc2FsIH0gPSByZXEuYm9keVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ2luc2VydFN1Y3Vyc2FsJylcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWREaXJlY2Npb24nICwgSW50ICwgaWREaXJlY2Npb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlU3VjdXJzYWwnICwgVmFyQ2hhciAsIG5vbWJyZVN1Y3Vyc2FsIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2luc2VydFN1Y3Vyc2FsJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidTdWN1cnNhbCBndWFyZGFkYSBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogVVBEQVRFIFNVQ1VSU0FMXHJcblxyXG5yb3V0ZXIucHV0KCcvdXBkYXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7aWRTdWN1cnNhbCxpZERpcmVjY2lvbixub21icmVTdWN1cnNhbH0gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgndXBkYXRlU3VjdXJzYWwnKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkU3VjdXJzYWwnICwgbXNzcWwuSW50ICwgaWRTdWN1cnNhbCApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZERpcmVjY2lvbicgLCBtc3NxbC5JbnQgLCBpZERpcmVjY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmVTdWN1cnNhbCcgLCBtc3NxbC5WYXJDaGFyICwgbm9tYnJlU3VjdXJzYWwgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfdXBkYXRlU3VjdXJzYWwnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J1N1Y3Vyc2FsIG1vZGlmaWNhZGEgZXhpdG9zYW1lbnRlJyxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTplLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IERFTEVURSBTVUNVUlNBTFxyXG5cclxucm91dGVyLnBvc3QoJy9kZWxldGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtpZFN1Y3Vyc2FsfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdkZWxldGVTdWN1cnNhbCcpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRTdWN1cnNhbCcgLCBtc3NxbC5JbnQgLCBpZFN1Y3Vyc2FsIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2RlbGV0ZVN1Y3Vyc2FsJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidTdWN1cnNhbCBlbGltaW5hZGEgZXhpdG9zYW1lbnRlJyxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTplLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbi8vVE9ETzogTElTVEEgREUgVElQT1MgREUgQ09OVFJJQlVMTEVOVEVcclxucm91dGVyLmdldCgnL2xpc3QnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3Qge2FicmlyQ29uZXhpb25QT09MLGNlcnJhckNvbmV4aW9uUE9PTH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICAgICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ0xpc3RhVGlwb3NDb250cmlidWxsZW50ZScpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlKCdwYV9saXN0YVRpcG9zQ29udHJpYnVsbGVudGUnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bGlzdDpyZXN1bHQucmVjb3Jkc2V0LG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplIDogJ0Vycm9yIGVuIGVsIHJlc3VsdGFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplIDogZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBJTlNFUlRBIFRJUE8gREUgQ09OVFJJQlVMTEVOVEVcclxuXHJcbnJvdXRlci5wb3N0ICgnL2luc2VydCcgLCBhc3luYyAocmVxICwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgbm9tYnJlVGlwb0NvbnRyaWJ1bGxlbnRlICwgZGVzY3JpcGNpb25UaXBvQ29udHJpYnVsbGVudGUgfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnaW5zZXJ0VGlwb0NvbnRyaWJ1bGxlbnRlJylcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyIH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlVGlwb0NvbnRyaWJ1bGxlbnRlJyAsIFZhckNoYXIgLCBub21icmVUaXBvQ29udHJpYnVsbGVudGUgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZGVzY3JpcGNpb25UaXBvQ29udHJpYnVsbGVudGUnICwgVmFyQ2hhciAsIGRlc2NyaXBjaW9uVGlwb0NvbnRyaWJ1bGxlbnRlIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2luc2VydFRpcG9Db250cmlidWxsZW50ZScpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonVGlwbyBkZSBjb250cmlidWxsZW50ZSBndWFyZGFkbyBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogVVBEQVRFIFRJUE8gREUgQ09OVFJJQlVMTEVOVEVcclxuXHJcbnJvdXRlci5wdXQoJy91cGRhdGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtub21icmVUaXBvQ29udHJpYnVsbGVudGUsZGVzY3JpcGNpb25UaXBvQ29udHJpYnVsbGVudGUsaWRUaXBvQ29udHJpYnVsbGVudGV9ID0gcmVxLmJvZHkgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ3VwZGF0ZVRpcG9Db250cmlidWxsZW50ZScpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlVGlwb0NvbnRyaWJ1bGxlbnRlJyAsIG1zc3FsLlZhckNoYXIgLCBub21icmVUaXBvQ29udHJpYnVsbGVudGUgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZGVzY3JpcGNpb25UaXBvQ29udHJpYnVsbGVudGUnICwgbXNzcWwuVmFyQ2hhciAsIGRlc2NyaXBjaW9uVGlwb0NvbnRyaWJ1bGxlbnRlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVGlwb0NvbnRyaWJ1bGxlbnRlJyAsIG1zc3FsLkludCAsIGlkVGlwb0NvbnRyaWJ1bGxlbnRlIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX3VwZGF0ZVRpcG9Db250cmlidWxsZW50ZScpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonVGlwbyBkZSBjb250cmlidWxsZW50ZSBtb2RpZmljYWRvIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBERUxFVEUgVElQTyBERSBDT05UUklCVUxMRU5URVxyXG5cclxucm91dGVyLnBvc3QoJy9kZWxldGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtpZFRpcG9Db250cmlidWxsZW50ZX0gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnZGVsZXRlVGlwb0NvbnRyaWJ1bGxlbnRlJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFRpcG9Db250cmlidWxsZW50ZScgLCBtc3NxbC5JbnQgLCBpZFRpcG9Db250cmlidWxsZW50ZSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9kZWxldGVUaXBvQ29udHJpYnVsbGVudGUnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J1RpcG8gZGUgY29udHJpYnVsbGVudGUgZWxpbWluYWRvIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG4vL1RPRE86IExJU1RBIERFIFRJUE9TIERFIERPQ1VNRU5UT1xyXG5yb3V0ZXIuZ2V0KCcvbGlzdCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wsY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgICAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnTGlzdGFUaXBvc0RvY3VtZW50bycpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlKCdwYV9saXN0YVRpcG9zRG9jdW1lbnRvJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe2xpc3Q6cmVzdWx0LnJlY29yZHNldCxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZSA6ICdFcnJvciBlbiBlbCByZXN1bHRhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZSA6IGUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogSU5TRVJUQSBUSVBPIERFIERPQ1VNRU5UT1xyXG5cclxucm91dGVyLnBvc3QgKCcvaW5zZXJ0JyAsIGFzeW5jIChyZXEgLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge25vbWJyZVRpcG9Eb2N1bWVudG99ID0gcmVxLmJvZHlcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdpbnNlcnRUaXBvRG9jdW1lbnRvJylcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyIH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlVGlwb0RvY3VtZW50bycgLCBWYXJDaGFyICwgbm9tYnJlVGlwb0RvY3VtZW50byApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9pbnNlcnRUaXBvRG9jdW1lbnRvJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidUaXBvIGRlIGRvY3VtZW50byBndWFyZGFkbyBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogVVBEQVRFIFRJUE8gREUgRE9DVU1FTlRPXHJcblxyXG5yb3V0ZXIucHV0KCcvdXBkYXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7bm9tYnJlVGlwb0RvY3VtZW50byxpZFRpcG9Eb2N1bWVudG99ID0gcmVxLmJvZHkgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ3VwZGF0ZVRpcG9Eb2N1bWVudG8nKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZVRpcG9Eb2N1bWVudG8nICwgbXNzcWwuVmFyQ2hhciAsIG5vbWJyZVRpcG9Eb2N1bWVudG8gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRUaXBvRG9jdW1lbnRvJyAsIG1zc3FsLkludCAsIGlkVGlwb0RvY3VtZW50byApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV91cGRhdGVUaXBvRG9jdW1lbnRvJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidUaXBvIGRlIGRvY3VtZW50byBtb2RpZmljYWRvIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBERUxFVEUgVElQTyBERSBET0NVTUVOVE9cclxuXHJcbnJvdXRlci5wb3N0KCcvZGVsZXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7aWRUaXBvRG9jdW1lbnRvfSA9IHJlcS5ib2R5ICAgICAgICBcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdkZWxldGVUaXBvRG9jdW1lbnRvJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFRpcG9Eb2N1bWVudG8nICwgbXNzcWwuSW50ICwgaWRUaXBvRG9jdW1lbnRvIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2RlbGV0ZVRpcG9Eb2N1bWVudG8nKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J1RpcG8gZGUgZG9jdW1lbnRvIGVsaW1pbmFkbyBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxuLy9UT0RPOiBMSVNUQSBERSBUSVBPUyBERSBQRVJTT05BXHJcbnJvdXRlci5nZXQoJy9saXN0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHthYnJpckNvbmV4aW9uUE9PTCxjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdMaXN0YVRpcG9zUGVyc29uYScpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlKCdwYV9saXN0YVRpcG9zUGVyc29uYScpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtsaXN0OnJlc3VsdC5yZWNvcmRzZXQsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamUgOiAnRXJyb3IgZW4gZWwgcmVzdWx0YWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamUgOiBlLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IElOU0VSVEEgVElQTyBERSBQRVJTT05BXHJcblxyXG5yb3V0ZXIucG9zdCAoJy9pbnNlcnQnICwgYXN5bmMgKHJlcSAsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7bm9tYnJlVGlwb1BlcnNvbmF9ID0gcmVxLmJvZHlcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdpbnNlcnRUaXBvUGVyc29uYScpXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZVRpcG9QZXJzb25hJyAsIFZhckNoYXIgLCBub21icmVUaXBvUGVyc29uYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9pbnNlcnRUaXBvUGVyc29uYScpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonVGlwbyBkZSBwZXJzb25hIGd1YXJkYWRhIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBVUERBVEUgVElQTyBERSBQRVJTT05BXHJcblxyXG5yb3V0ZXIucHV0KCcvdXBkYXRlJyxhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7bm9tYnJlVGlwb1BlcnNvbmEsaWRUaXBvUGVyc29uYX0gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgndXBkYXRlVGlwb1BlcnNvbmEnKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0IChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZVRpcG9QZXJzb25hJyAsIG1zc3FsLlZhckNoYXIgLCBub21icmVUaXBvUGVyc29uYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFRpcG9QZXJzb25hJyAsIG1zc3FsLkludCAsIGlkVGlwb1BlcnNvbmEgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfdXBkYXRlVGlwb1BlcnNvbmEnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J1RpcG8gZGUgcGVyc29uYSBtb2RpZmljYWRhIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBERUxFVEUgVElQTyBERSBQRVJTT05BXHJcblxyXG5yb3V0ZXIucG9zdCgnL2RlbGV0ZScsYXN5bmMocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge2lkVGlwb1BlcnNvbmF9ID0gcmVxLmJvZHkgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ2RlbGV0ZVRpcG9QZXJzb25hJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFRpcG9QZXJzb25hJyAsIG1zc3FsLkludCAsIGlkVGlwb1BlcnNvbmEgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfZGVsZXRlVGlwb1BlcnNvbmEnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J1RpcG8gZGUgcGVyc29uYSBlbGltaW5hZGEgZXhpdG9zYW1lbnRlJyxvcE9LOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgaW5lc3BlcmFkbycsb3BPSzpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTplLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbi8vVE9ETzogTElTVEEgREUgVU5JREFERVMgREUgTUVESURBXHJcbnJvdXRlci5nZXQoJy9saXN0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHthYnJpckNvbmV4aW9uUE9PTCxjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdMaXN0YVVuaWRhZGVzTWVkaWRhJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX2xpc3RhVW5pZGFkZXNNZWRpYScpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtsaXN0OnJlc3VsdC5yZWNvcmRzZXQsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamUgOiAnRXJyb3IgZW4gZWwgcmVzdWx0YWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamUgOiBlLm1lc3NhZ2Usb3BPSzpmYWxzZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL1RPRE86IElOU0VSVEEgVU5JREFEIERFIE1FRElEQVxyXG5cclxucm91dGVyLnBvc3QgKCcvaW5zZXJ0JyAsIGFzeW5jIChyZXEgLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBub21icmVVbmlkYWRNZWRpZGEgLCBkZXNjcmlwY2lvblVuaWRhZE1lZGlkYSB9ID0gcmVxLmJvZHlcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdpbnNlcnRVbmlkYWRNYWRpZGEnKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgfSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmVVbmlkYWRNZWRpZGEnICwgVmFyQ2hhciAsIG5vbWJyZVVuaWRhZE1lZGlkYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdkZXNjcmlwY2lvblVuaWRhZE1lZGlkYScgLCBWYXJDaGFyICwgZGVzY3JpcGNpb25VbmlkYWRNZWRpZGEgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfaW5zZXJ0VW5pZGFkTWVkaWRhJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOidVbmlkYWRlIGRlIG1lZGlkYSBndWFyZGFkYSBleGl0b3NhbWVudGUnLG9wT0s6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidFcnJvciBhbCBpbmVzcGVyYWRvJyxvcE9LOmZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOmUubWVzc2FnZSxvcE9LOmZhbHNlfSlcclxuICAgIH1cclxufSlcclxuXHJcbi8vVE9ETzogVVBEQVRFIFVOSURBRCBERSBNRURJREFcclxuXHJcbnJvdXRlci5wdXQoJy91cGRhdGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtub21icmVVbmlkYWRNZWRpZGEsZGVzY3JpcGNpb25VbmlkYWRNZWRpZGEsaWRVbmlkYWRNZWRpZGF9ID0gcmVxLmJvZHkgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ3VwZGF0ZVVuaWRhZE1lZGlkYScpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlVW5pZGFkTWVkaWRhJyAsIG1zc3FsLlZhckNoYXIgLCBub21icmVVbmlkYWRNZWRpZGEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZGVzY3JpcGNpb25VbmlkYWRNZWRpZGEnICwgbXNzcWwuVmFyQ2hhciAsIGRlc2NyaXBjaW9uVW5pZGFkTWVkaWRhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVW5pZGFkTWVkaWRhJyAsIG1zc3FsLkludCAsIGlkVW5pZGFkTWVkaWRhIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX3VwZGF0ZVVuaWRhZE1lZGlkYScpXHJcbiAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTonVW5pZGFkIGRlIG1lZGlkYSBtb2RpZmljYWRhIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9UT0RPOiBERUxFVEUgVU5JREFEIE1FRElEQVxyXG5cclxucm91dGVyLnBvc3QoJy9kZWxldGUnLGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtpZFVuaWRhZE1lZGlkYX0gPSByZXEuYm9keSAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnZGVsZXRlVW5pZGFkTWVkaWRhJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFVuaWRhZE1lZGlkYScgLCBtc3NxbC5JbnQgLCBpZFVuaWRhZE1lZGlkYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9kZWxldGVVbmlkYWRNZWRpZGEnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6J1VuaWRhZCBkZSBtZWRpZGEgZWxpbWluYWRhIGV4aXRvc2FtZW50ZScsb3BPSzp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGluZXNwZXJhZG8nLG9wT0s6ZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlLG9wT0s6ZmFsc2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBiY3J5cCA9IHJlcXVpcmUoJ2JjcnlwdCcpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxuLy8gVE9ETzogSU5TRVJUIFVTVUFSSU9cclxuXHJcbnJvdXRlci5wb3N0ICggJy9pbnNlcnQnICwgYXN5bmMgKHJlcSwgcmVzICkgPT4ge1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUgKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBjb25zdCB7IG5vbWJyZVVzdWFyaW8gLCBhcGVsbGlkb1VzdWFyaW8gLCB1c3VhcmlvICwgcHcgfSA9IHJlcS5ib2R5XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ2luc2VydFVzdWFyaW8nKVxyXG4gICAgICAgIGNvbnN0IHtSZXF1ZXN0ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSAoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICgnbm9tYnJlVXN1YXJpbycgLCBWYXJDaGFyICwgbm9tYnJlVXN1YXJpbylcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCdhcGVsbGlkb1VzdWFyaW8nICwgVmFyQ2hhciAsIGFwZWxsaWRvVXN1YXJpbylcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCd1c3VhcmlvJyAsIFZhckNoYXIgLCB1c3VhcmlvKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoJ3B3JyAsIFZhckNoYXIgLCBiY3J5cC5oYXNoU3luYyhwdyAsIDEwKSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoICdwYV9pbnNlcnRVc3VhcmlvJyApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKCB7IG1lbnNhamUgOiAnVXN1YXJpbyBpbnNlcnRhZG8gY29ycmVjdGFtZW50ZScsb3BPSzp0cnVlIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICxvcE9LOmZhbHNlfSApXHJcbiAgICB9XHJcbn0gKVxyXG5cclxuXHJcbi8vIC8vICEgbGlzdGFkbyBkZSB1c3Vhcmlvc1xyXG4vLyByb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuLy8gICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSAoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuLy8gICAgIHRyeXtcclxuLy8gICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCAnbGlhc3RhVXN1YXJpbycpXHJcbi8vICAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbi8vICAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QoY29uZXhpb24pXHJcbi8vICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX2xpc3RhVXN1YXJpb3MnKVxyXG4vLyAgICAgICAgIGlmKHJlc3VsdCl7XHJcbi8vICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbi8vICAgICAgICAgICAgIHJlcy5qc29uKHJlc3VsdC5yZWNvcmRzZXQpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGVsc2V7XHJcbi8vICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbi8vICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtzdGF0dXM6IDIwMCxtZW5zYWplOmUubWVzc2FnZX0pXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgY2F0Y2goZSl7XHJcbi8vICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7c3RhdHVzOiAyMDAsbWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG4vLyAvLyEgbGlzdGEgZGUgcGVyZmlsZXNcclxuLy8gcm91dGVyLmdldCgnL3BlcmZpbGVzJyxhc3luYyAocmVxLHJlcyk9PntcclxuLy8gICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSAoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuLy8gICAgIHRyeXtcclxuLy8gICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCAnbGlzdGFQZXJmaWxlcycpXHJcbi8vICAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbi8vICAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QoY29uZXhpb24pXHJcbi8vICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX2xpc3RhUGVyZmlsZXMnKVxyXG4vLyAgICAgICAgIGlmKHJlc3VsdCl7XHJcbi8vICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbi8vICAgICAgICAgICAgIHJlcy5qc29uKHJlc3VsdC5yZWNvcmRzZXQpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGVsc2V7XHJcbi8vICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbi8vICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtzdGF0dXM6IDIwMCxtZW5zYWplOmUubWVzc2FnZX0pXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgY2F0Y2goZSl7XHJcbi8vICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7c3RhdHVzOiAyMDAsbWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG4vLyAvLyEgY29uc3VsdGEgdXN1YXJpbyBwb3IgaWRcclxuLy8gcm91dGVyLmdldCgnLzppZCcsYXN5bmMgKHJlcSxyZXMpPT57XHJcbi8vICAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWRcclxuLy8gICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSAoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuLy8gICAgIHRyeXtcclxuLy8gICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCAnZ2V0VXNleElkJylcclxuLy8gICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuLy8gICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdChjb25leGlvbilcclxuLy8gICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVXN1YXJpbycgLCBtc3NxbC5JbnQgLCBpZClcclxuLy8gICAgICAgICBjb25zdCBxdWVyeSA9IGBzZWxlY3RcclxuLy8gICAgICAgICB1LmlkIGFzIGlkVXN1YXJpbyAsXHJcbi8vICAgICAgICAgdS51c2VyTmFtZSBhcyB1c2VyTmFtZSAsXHJcbi8vICAgICAgICAgdS5lbWFpbCBhcyBlbWFpbCAsXHJcbi8vICAgICAgICAgdS5ub21icmUgYXMgbm9tYnJlVXN1YXJpbyAsXHJcbi8vICAgICAgICAgdS5hcGVsbGlkbyBhcyBhcGVsbGlkb1VzdWFyaW8gLFxyXG4vLyAgICAgICAgIHAuaWQgYXMgaWRQZXJmaWwgLFxyXG4vLyAgICAgICAgIHAubm9tYnJlIGFzIG5vbWJyZVBlcmZpbFxyXG4vLyAgICAgICAgIGZyb20gdXN1YXJpb3MgdVxyXG4vLyAgICAgICAgIGpvaW4gcGVyZmlsZXMgcCBvbiBwLmlkID0gdS5pZF9wZXJmaWxcclxuLy8gICAgICAgICB3aGVyZSB1LmlkID0gQGlkVXN1YXJpb2BcclxuLy8gICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkocXVlcnkpXHJcbi8vICAgICAgICAgaWYocmVzdWx0KXtcclxuLy8gICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICAgICAgcmVzLmpzb24ocmVzdWx0LnJlY29yZHNldClcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgZWxzZXtcclxuLy8gICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oe3N0YXR1czogMjAwLG1lbnNhamU6ZS5tZXNzYWdlfSlcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICBjYXRjaChlKXtcclxuLy8gICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4vLyAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtzdGF0dXM6IDIwMCxtZW5zYWplOmUubWVzc2FnZX0pXHJcbi8vICAgICB9XHJcbi8vIH0pXHJcblxyXG4vLyAvLyFndWFyZGEgdXN1YXJpb1xyXG4vLyByb3V0ZXIucG9zdCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbi8vICAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4vLyAgICAgY29uc3QgIHt1c2VyTmFtZSxwYXNzd29yZCxlbWFpbCxub21icmUsYXBlbGxpZG8saWRQZXJmaWx9ID0gcmVxLmJvZHlcclxuLy8gICAgIHRyeXtcclxuLy8gICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdzYXZlVXNlcicpXHJcbi8vICAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlICgnbXNzcWwnKVxyXG4vLyAgICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0KGNvbmV4aW9uKVxyXG4vLyAgICAgICAgIGNvbnN0IHB3ID0gYmNyeXAuaGFzaFN5bmMocGFzc3dvcmQsMTApXHJcbi8vICAgICAgICAgY29uc29sZS5sb2cocHcpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCd1c2VyTmFtZScgLCBtc3NxbC5WYXJDaGFyICwgdXNlck5hbWUpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdwYXNzd29yZCcgLCBtc3NxbC5WYXJDaGFyICwgcHcpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdlbWFpbCcgLCBtc3NxbC5WYXJDaGFyICwgZW1haWwpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmUnICwgbXNzcWwuVmFyQ2hhciAsIG5vbWJyZSlcclxuLy8gICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2FwZWxsaWRvJyAsIG1zc3FsLlZhckNoYXIgLCBhcGVsbGlkbylcclxuLy8gICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkUGVyZmlsJyAsIG1zc3FsLkludCAsIGlkUGVyZmlsKVxyXG4vLyAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlKCdwYV9pbnNlcnRVc3VhcmlvcycpXHJcbi8vICAgICAgICAgaWYocmVzdWx0KXtcclxuLy8gICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4vLyAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lbnNhamU6ICd1c3VhcmlvIGluc2VydGFkbyBjb3JyZWN0YW1lbnRlICEnIH0pXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgY2F0Y2goZXJyKXtcclxuLy8gICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4vLyAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtlcnJvcjplcnIubWVzc2FnZX0pXHJcbi8vICAgICB9XHJcbi8vIH0pXHJcblxyXG4vLyByb3V0ZXIucHV0KCcvJywgYXN5bmMgKHJlcSxyZXMpPT57XHJcbi8vICAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4vLyAgICAgY29uc3QgIHt1c2VyTmFtZSxwYXNzd29yZCxlbWFpbCxub21icmUsYXBlbGxpZG8saWRQZXJmaWwgLCBpZFVzdWFyaW99ID0gcmVxLmJvZHlcclxuLy8gICAgIHRyeXtcclxuLy8gICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCd1cGRhdGVVc2VyJylcclxuLy8gICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUgKCdtc3NxbCcpXHJcbi8vICAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QoY29uZXhpb24pXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCd1c2VyTmFtZScgLCBtc3NxbC5WYXJDaGFyICwgdXNlck5hbWUpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdwYXNzd29yZCcgLCBtc3NxbC5WYXJDaGFyICwgYmNyeXAuaGFzaFN5bmMocGFzc3dvcmQpKVxyXG4vLyAgICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZW1haWwnICwgbXNzcWwuVmFyQ2hhciAsIGVtYWlsKVxyXG4vLyAgICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlJyAsIG1zc3FsLlZhckNoYXIgLCBub21icmUpXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdhcGVsbGlkbycgLCBtc3NxbC5WYXJDaGFyICwgYXBlbGxpZG8pXHJcbi8vICAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFBlcmZpbCcgLCBtc3NxbC5JbnQgLCBpZFBlcmZpbClcclxuLy8gICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVXN1YXJpbycgLCBtc3NxbC5JbnQgLCBpZFVzdWFyaW8pXHJcbi8vICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX3VwZGF0ZVVzdWFyaW9zJylcclxuLy8gICAgICAgICBpZihyZXN1bHQpe1xyXG4vLyAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbi8vICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTogJ3VzdWFyaW8gaW5zZXJ0YWRvIGNvcnJlY3RhbWVudGUgIScgfSlcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICBjYXRjaChlKXtcclxuLy8gICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4vLyAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtlcnJvcjplcnIubWVzc2FnZX0pXHJcbi8vICAgICB9XHJcbi8vIH0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhc3luY1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29sb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1zc3FsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=