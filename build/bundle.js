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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/express-http-proxy/app/steps/buildProxyReq.js":
/*!********************************************************************!*\
  !*** ./node_modules/express-http-proxy/app/steps/buildProxyReq.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar debug = __webpack_require__(/*! debug */ \"debug\")('express-http-proxy');\nvar requestOptions = __webpack_require__(/*! ../../lib/requestOptions */ \"./node_modules/express-http-proxy/lib/requestOptions.js\");\n\nfunction buildProxyReq(Container) {\n  var req = Container.user.req;\n  var res = Container.user.res;\n  var options = Container.options;\n  var host = Container.proxy.host;\n\n  var parseBody = (!options.parseReqBody) ? Promise.resolve(null) : requestOptions.bodyContent(req, res, options);\n  var createReqOptions = requestOptions.create(req, res, options, host);\n\n  return Promise\n    .all([parseBody, createReqOptions])\n    .then(function(responseArray) {\n      Container.proxy.bodyContent = responseArray[0];\n      Container.proxy.reqBuilder = responseArray[1];\n      debug('proxy request options:', Container.proxy.reqBuilder);\n      return Container;\n    });\n}\n\nmodule.exports = buildProxyReq;\n\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/app/steps/buildProxyReq.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/app/steps/copyProxyResHeadersToUserRes.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/express-http-proxy/app/steps/copyProxyResHeadersToUserRes.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction copyProxyResHeadersToUserRes(container) {\n  return new Promise(function(resolve) {\n    var res = container.user.res;\n    var rsp = container.proxy.res;\n\n    if (!res.headersSent) {\n        res.status(rsp.statusCode);\n        Object.keys(rsp.headers)\n        .filter(function(item) { return item !== 'transfer-encoding'; })\n        .forEach(function(item) {\n            res.set(item, rsp.headers[item]);\n        });\n    }\n\n    resolve(container);\n  });\n}\n\nmodule.exports = copyProxyResHeadersToUserRes;\n\n\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/app/steps/copyProxyResHeadersToUserRes.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/app/steps/decorateProxyReqBody.js":
/*!***************************************************************************!*\
  !*** ./node_modules/express-http-proxy/app/steps/decorateProxyReqBody.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar debug = __webpack_require__(/*! debug */ \"debug\")('express-http-proxy');\n\nfunction defaultDecorator(proxyReqOptBody/*, userReq */) {\n  return proxyReqOptBody;\n}\n\nfunction decorateProxyReqBody(container) {\n  var userDecorator = container.options.proxyReqBodyDecorator;\n  var resolverFn = userDecorator || defaultDecorator;\n\n  if (userDecorator) {\n    debug('using custom proxyReqBodyDecorator');\n  }\n\n  return Promise\n    .resolve(resolverFn(container.proxy.bodyContent, container.user.req))\n    .then(function(bodyContent) {\n      container.proxy.bodyContent = bodyContent;\n      return Promise.resolve(container);\n    });\n}\n\nmodule.exports = decorateProxyReqBody;\n\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/app/steps/decorateProxyReqBody.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/app/steps/decorateProxyReqOpts.js":
/*!***************************************************************************!*\
  !*** ./node_modules/express-http-proxy/app/steps/decorateProxyReqOpts.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction defaultDecorator(proxyReqOptBuilder /*, userReq */) {\n  return proxyReqOptBuilder;\n}\n\nfunction decorateProxyReqOpt(container) {\n  var resolverFn = container.options.proxyReqOptDecorator || defaultDecorator;\n\n  return Promise\n    .resolve(resolverFn(container.proxy.reqBuilder, container.user.req))\n    .then(function(processedReqOpts) {\n        delete processedReqOpts.params;\n        container.proxy.reqBuilder = processedReqOpts;\n        return Promise.resolve(container);\n    });\n}\n\nmodule.exports = decorateProxyReqOpt;\n\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/app/steps/decorateProxyReqOpts.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/app/steps/decorateUserRes.js":
/*!**********************************************************************!*\
  !*** ./node_modules/express-http-proxy/app/steps/decorateUserRes.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar as = __webpack_require__(/*! ../../lib/as.js */ \"./node_modules/express-http-proxy/lib/as.js\");\nvar debug = __webpack_require__(/*! debug */ \"debug\")('express-http-proxy');\nvar zlib = __webpack_require__(/*! zlib */ \"zlib\");\n\nfunction isResGzipped(res) {\n  return res.headers['content-encoding'] === 'gzip';\n}\n\nfunction zipOrUnzip(method) {\n  return function(rspData, res) {\n    return (isResGzipped(res) && rspData.length) ? zlib[method](rspData) : rspData;\n  };\n}\n\nvar maybeUnzipResponse = zipOrUnzip('gunzipSync');\nvar maybeZipResponse = zipOrUnzip('gzipSync');\n\nfunction verifyBuffer(rspd, reject) {\n  if (!Buffer.isBuffer(rspd)) {\n    return reject(new Error('userResDecorator should return string or buffer as data'));\n  }\n}\n\nfunction updateHeaders(res, rspdBefore, rspdAfter, reject) {\n  if (!res.headersSent) {\n      res.set('content-length', rspdAfter.length);\n  } else if (rspdAfter.length !== rspdBefore.length) {\n      var error = '\"Content-Length\" is already sent,' +\n          'the length of response data can not be changed';\n      return reject(new Error(error));\n  }\n}\n\nfunction decorateProxyResBody(container) {\n  var resolverFn = container.options.userResDecorator;\n\n  if (!resolverFn) {\n    return Promise.resolve(container);\n  }\n\n  var proxyResData = maybeUnzipResponse(container.proxy.resData, container.proxy.res);\n  var proxyRes = container.proxy.res;\n  var req = container.user.req;\n  var res = container.user.res;\n\n  if (res.statusCode === 304) {\n    debug('Skipping userResDecorator on response 304');\n    return Promise.resolve(container);\n  }\n\n  return Promise\n    .resolve(resolverFn(proxyRes, proxyResData, req, res))\n    .then(function(modifiedResData) {\n      return new Promise(function(resolve, reject) {\n        var rspd = as.buffer(modifiedResData, container.options);\n        verifyBuffer(rspd, reject);\n        updateHeaders(res, proxyResData, rspd, reject);\n        container.proxy.resData = maybeZipResponse(rspd, container.proxy.res);\n        resolve(container);\n      });\n    });\n}\n\nmodule.exports = decorateProxyResBody;\n\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/app/steps/decorateUserRes.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/app/steps/decorateUserResHeaders.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/express-http-proxy/app/steps/decorateUserResHeaders.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n\nfunction decorateUserResHeaders(container) {\n  var resolverFn = container.options.userResHeaderDecorator;\n  var headers = container.user.res._headers;\n\n  if (!resolverFn) {\n    return Promise.resolve(container);\n  }\n\n  return Promise\n    .resolve(resolverFn(headers, container.user.req, container.user.res, container.proxy.req, container.proxy.res))\n    .then(function(headers) {\n      return new Promise(function(resolve) {\n        container.user.res.set(headers);\n        resolve(container);\n      });\n    });\n}\n\nmodule.exports = decorateUserResHeaders;\n\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/app/steps/decorateUserResHeaders.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/app/steps/filterUserRequest.js":
/*!************************************************************************!*\
  !*** ./node_modules/express-http-proxy/app/steps/filterUserRequest.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// No-op version of filter.  Allows everything!\n\nfunction defaultFilter(proxyReqOptBuilder, userReq) { // eslint-disable-line\n  return true;\n}\n\nfunction filterUserRequest(container) {\n  var resolverFn = container.options.filter || defaultFilter;\n\n  return Promise\n    .resolve(resolverFn(container.proxy.reqBuilder, container.user.req))\n    .then(function (shouldIContinue) {\n      if (shouldIContinue) {\n        return Promise.resolve(container);\n      } else {\n        return Promise.reject(); // reject with no args should simply call next()\n      }\n    });\n}\n\nmodule.exports = filterUserRequest;\n\n\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/app/steps/filterUserRequest.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/app/steps/handleProxyErrors.js":
/*!************************************************************************!*\
  !*** ./node_modules/express-http-proxy/app/steps/handleProxyErrors.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar debug = __webpack_require__(/*! debug */ \"debug\")('express-http-proxy');\n\nfunction connectionResetHandler(err, res) {\n  if (err && err.code === 'ECONNRESET') {\n    debug('Error: Connection reset due to timeout.');\n    res.setHeader('X-Timeout-Reason', 'express-http-proxy reset the request.');\n    res.writeHead(504, {'Content-Type': 'text/plain'});\n    res.end();\n  }\n}\n\nfunction handleProxyErrors(err, res, next) {\n  switch (err && err.code) {\n    case 'ECONNRESET':  { return connectionResetHandler(err, res, next); }\n    default:            { next(err); }\n  }\n}\n\nmodule.exports = handleProxyErrors;\n\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/app/steps/handleProxyErrors.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/app/steps/maybeSkipToNextHandler.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/express-http-proxy/app/steps/maybeSkipToNextHandler.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction defaultSkipFilter(/* res */) {\n  return false;\n}\n\nfunction maybeSkipToNextHandler(container) {\n  var resolverFn = container.options.skipToNextHandlerFilter || defaultSkipFilter;\n\n  return Promise\n    .resolve(resolverFn(container.proxy.res))\n    .then(function(shouldSkipToNext) {\n      return (shouldSkipToNext) ? container.user.next() : Promise.resolve(container);\n    })\n    .catch(Promise.reject);\n}\n\nmodule.exports = maybeSkipToNextHandler;\n\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/app/steps/maybeSkipToNextHandler.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/app/steps/prepareProxyReq.js":
/*!**********************************************************************!*\
  !*** ./node_modules/express-http-proxy/app/steps/prepareProxyReq.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar as = __webpack_require__(/*! ../../lib/as */ \"./node_modules/express-http-proxy/lib/as.js\");\n\nfunction getContentLength(body) {\n\n  var result;\n  if (Buffer.isBuffer(body)) { // Buffer\n    result = body.length;\n  } else if (typeof body === 'string') {\n    result = Buffer.byteLength(body);\n  }\n  return result;\n}\n\n\nfunction prepareProxyReq(container) {\n  return new Promise(function(resolve) {\n    var bodyContent = container.proxy.bodyContent;\n    var reqOpt = container.proxy.reqBuilder;\n\n    if (bodyContent) {\n      bodyContent = container.options.reqAsBuffer ?\n        as.buffer(bodyContent, container.options) :\n        as.bufferOrString(bodyContent);\n\n      reqOpt.headers['content-length'] = getContentLength(bodyContent);\n\n      if (container.options.reqBodyEncoding) {\n        reqOpt.headers['Accept-Charset'] = container.options.reqBodyEncoding;\n      }\n    }\n\n    container.proxy.bodyContent = bodyContent;\n    resolve(container);\n  });\n}\n\nmodule.exports = prepareProxyReq;\n\n\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/app/steps/prepareProxyReq.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/app/steps/resolveProxyHost.js":
/*!***********************************************************************!*\
  !*** ./node_modules/express-http-proxy/app/steps/resolveProxyHost.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar requestOptions = __webpack_require__(/*! ../../lib/requestOptions */ \"./node_modules/express-http-proxy/lib/requestOptions.js\");\n\nfunction resolveProxyHost(container) {\n  var parsedHost;\n\n  if (container.options.memoizeHost && container.options.memoizedHost) {\n    parsedHost = container.options.memoizedHost;\n  } else {\n    parsedHost = requestOptions.parseHost(container);\n  }\n\n  container.proxy.reqBuilder.host = parsedHost.host;\n  container.proxy.reqBuilder.port = container.options.port || parsedHost.port;\n  container.proxy.requestModule = parsedHost.module;\n  return Promise.resolve(container);\n}\n\nmodule.exports = resolveProxyHost;\n\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/app/steps/resolveProxyHost.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/app/steps/resolveProxyReqPath.js":
/*!**************************************************************************!*\
  !*** ./node_modules/express-http-proxy/app/steps/resolveProxyReqPath.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar url = __webpack_require__(/*! url */ \"url\");\nvar debug = __webpack_require__(/*! debug */ \"debug\")('express-http-proxy');\n\nfunction defaultProxyReqPathResolver(req) {\n  return url.parse(req.url).path;\n}\n\nfunction resolveProxyReqPath(container) {\n  var resolverFn = container.options.proxyReqPathResolver || defaultProxyReqPathResolver;\n\n  return Promise\n    .resolve(resolverFn(container.user.req))\n    .then(function(resolvedPath) {\n      container.proxy.reqBuilder.path = resolvedPath;\n      debug('resolved proxy path:', resolvedPath);\n      return Promise.resolve(container);\n    });\n}\n\nmodule.exports = resolveProxyReqPath;\n\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/app/steps/resolveProxyReqPath.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/app/steps/sendProxyRequest.js":
/*!***********************************************************************!*\
  !*** ./node_modules/express-http-proxy/app/steps/sendProxyRequest.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar chunkLength = __webpack_require__(/*! ../../lib/chunkLength */ \"./node_modules/express-http-proxy/lib/chunkLength.js\");\n\nfunction sendProxyRequest(Container) {\n  var req = Container.user.req;\n  var bodyContent = Container.proxy.bodyContent;\n  var reqOpt = Container.proxy.reqBuilder;\n  var options = Container.options;\n\n  return new Promise(function(resolve, reject) {\n    var protocol = Container.proxy.requestModule;\n    var proxyReq = protocol.request(reqOpt, function(rsp) {\n      if (options.stream) {\n        Container.proxy.res = rsp;\n        return resolve(Container);\n      }\n\n      var chunks = [];\n      rsp.on('data', function(chunk) { chunks.push(chunk); });\n      rsp.on('end', function() {\n        Container.proxy.res = rsp;\n        Container.proxy.resData = Buffer.concat(chunks, chunkLength(chunks));\n        resolve(Container);\n      });\n      rsp.on('error', reject);\n    });\n\n    proxyReq.on('socket', function(socket) {\n      if (options.timeout) {\n        socket.setTimeout(options.timeout, function() {\n          proxyReq.abort();\n        });\n      }\n    });\n\n    proxyReq.on('error', reject);\n\n    // this guy should go elsewhere, down the chain\n    if (options.parseReqBody) {\n    // We are parsing the body ourselves so we need to write the body content\n    // and then manually end the request.\n\n      //if (bodyContent instanceof Object) {\n        //throw new Error\n        //debugger;\n        //bodyContent = JSON.stringify(bodyContent);\n      //}\n\n      if (bodyContent.length) {\n        var body = bodyContent;\n        var contentType = proxyReq.getHeader('Content-Type');\n        if (contentType === 'x-www-form-urlencoded' || contentType === 'application/x-www-form-urlencoded') {\n          try {\n            var params = JSON.parse(body);\n            body = Object.keys(params).map(function(k) { return k + '=' + params[k]; }).join('&');\n          } catch (e) {\n            // bodyContent is not json-format\n          }\n        }\n        proxyReq.setHeader('Content-Length', Buffer.byteLength(body));\n        proxyReq.write(body);\n      }\n      proxyReq.end();\n    } else {\n    // Pipe will call end when it has completely read from the request.\n      req.pipe(proxyReq);\n    }\n\n    req.on('aborted', function() {\n    // reject?\n      proxyReq.abort();\n    });\n  });\n}\n\n\nmodule.exports = sendProxyRequest;\n\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/app/steps/sendProxyRequest.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/app/steps/sendUserRes.js":
/*!******************************************************************!*\
  !*** ./node_modules/express-http-proxy/app/steps/sendUserRes.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction sendUserRes(Container) {\n  if (!Container.user.res.headersSent) {\n    if (Container.options.stream) {\n      Container.proxy.res.pipe(Container.user.res);\n    } else {\n      Container.user.res.send(Container.proxy.resData);\n    }\n  }\n  return Promise.resolve(Container);\n}\n\n\nmodule.exports = sendUserRes;\n\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/app/steps/sendUserRes.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/index.js":
/*!**************************************************!*\
  !*** ./node_modules/express-http-proxy/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// * Breaks proxying into a series of discrete steps, many of which can be swapped out by authors.\n// * Uses Promises to support async.\n// * Uses a quasi-Global called Container to tidy up the argument passing between the major work-flow steps.\n\nvar ScopeContainer = __webpack_require__(/*! ./lib/scopeContainer */ \"./node_modules/express-http-proxy/lib/scopeContainer.js\");\nvar assert = __webpack_require__(/*! assert */ \"assert\");\nvar debug = __webpack_require__(/*! debug */ \"debug\")('express-http-proxy');\n\nvar buildProxyReq                = __webpack_require__(/*! ./app/steps/buildProxyReq */ \"./node_modules/express-http-proxy/app/steps/buildProxyReq.js\");\nvar copyProxyResHeadersToUserRes = __webpack_require__(/*! ./app/steps/copyProxyResHeadersToUserRes */ \"./node_modules/express-http-proxy/app/steps/copyProxyResHeadersToUserRes.js\");\nvar decorateProxyReqBody         = __webpack_require__(/*! ./app/steps/decorateProxyReqBody */ \"./node_modules/express-http-proxy/app/steps/decorateProxyReqBody.js\");\nvar decorateProxyReqOpts         = __webpack_require__(/*! ./app/steps/decorateProxyReqOpts */ \"./node_modules/express-http-proxy/app/steps/decorateProxyReqOpts.js\");\nvar decorateUserRes              = __webpack_require__(/*! ./app/steps/decorateUserRes */ \"./node_modules/express-http-proxy/app/steps/decorateUserRes.js\");\nvar decorateUserResHeaders       = __webpack_require__(/*! ./app/steps/decorateUserResHeaders */ \"./node_modules/express-http-proxy/app/steps/decorateUserResHeaders.js\");\nvar filterUserRequest            = __webpack_require__(/*! ./app/steps/filterUserRequest */ \"./node_modules/express-http-proxy/app/steps/filterUserRequest.js\");\nvar handleProxyErrors            = __webpack_require__(/*! ./app/steps/handleProxyErrors */ \"./node_modules/express-http-proxy/app/steps/handleProxyErrors.js\");\nvar maybeSkipToNextHandler       = __webpack_require__(/*! ./app/steps/maybeSkipToNextHandler */ \"./node_modules/express-http-proxy/app/steps/maybeSkipToNextHandler.js\");\nvar prepareProxyReq              = __webpack_require__(/*! ./app/steps/prepareProxyReq */ \"./node_modules/express-http-proxy/app/steps/prepareProxyReq.js\");\nvar resolveProxyHost             = __webpack_require__(/*! ./app/steps/resolveProxyHost */ \"./node_modules/express-http-proxy/app/steps/resolveProxyHost.js\");\nvar resolveProxyReqPath          = __webpack_require__(/*! ./app/steps/resolveProxyReqPath */ \"./node_modules/express-http-proxy/app/steps/resolveProxyReqPath.js\");\nvar sendProxyRequest             = __webpack_require__(/*! ./app/steps/sendProxyRequest */ \"./node_modules/express-http-proxy/app/steps/sendProxyRequest.js\");\nvar sendUserRes                  = __webpack_require__(/*! ./app/steps/sendUserRes */ \"./node_modules/express-http-proxy/app/steps/sendUserRes.js\");\n\nmodule.exports = function proxy(host, userOptions) {\n  assert(host, 'Host should not be empty');\n\n  return function handleProxy(req, res, next) {\n    debug('[start proxy] ' + req.path);\n    var container = new ScopeContainer(req, res, next, host, userOptions);\n\n    // Skip proxy if filter is falsey.  Loose equality so filters can return\n    // false, null, undefined, etc.\n\n    //if (!container.options.filter(req, res)) { return next(); }\n\n    filterUserRequest(container)\n      .then(buildProxyReq)\n      .then(resolveProxyHost)\n      .then(decorateProxyReqOpts)\n      .then(resolveProxyReqPath)\n      .then(decorateProxyReqBody)\n      .then(prepareProxyReq)\n      .then(sendProxyRequest)\n      .then(maybeSkipToNextHandler)\n      .then(copyProxyResHeadersToUserRes)\n      .then(decorateUserResHeaders)\n      .then(decorateUserRes)\n      .then(sendUserRes)\n      .catch(function (err) {\n        // I sometimes reject without an error to shortcircuit the remaining\n        // steps and return control to the host application.\n\n        if (err) {\n          var resolver = (container.options.proxyErrorHandler) ?\n            container.options.proxyErrorHandler :\n            handleProxyErrors;\n          resolver(err, res, next);\n        } else {\n          next();\n        }\n      });\n  };\n};\n\n\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/index.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/lib/as.js":
/*!***************************************************!*\
  !*** ./node_modules/express-http-proxy/lib/as.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n * Trivial convenience methods for parsing Buffers\n */\n\nfunction asBuffer(body, options) {\n\n  var ret;\n  if (Buffer.isBuffer(body)) {\n    ret = body;\n  } else if (typeof body === 'object') {\n    ret = new Buffer(JSON.stringify(body), options.reqBodyEncoding);\n  } else if (typeof body === 'string') {\n    ret = new Buffer(body, options.reqBodyEncodeing);\n  }\n  return ret;\n}\n\nfunction asBufferOrString(body) {\n\n  var ret;\n  if (Buffer.isBuffer(body)) {\n    ret = body;\n  } else if (typeof body === 'object') {\n    ret = JSON.stringify(body);\n  } else if (typeof body === 'string') {\n    ret = body;\n  }\n  return ret;\n}\n\nmodule.exports = {\n  buffer: asBuffer,\n  bufferOrString: asBufferOrString\n};\n\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/lib/as.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/lib/chunkLength.js":
/*!************************************************************!*\
  !*** ./node_modules/express-http-proxy/lib/chunkLength.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction chunkLength(chunks) {\n  return chunks.reduce(function (len, buf) {\n    return len + buf.length;\n  }, 0);\n}\n\nmodule.exports = chunkLength;\n\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/lib/chunkLength.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/lib/isUnset.js":
/*!********************************************************!*\
  !*** ./node_modules/express-http-proxy/lib/isUnset.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (val) {\n  return (typeof val  ===  'undefined' || val === '' || val === null);\n};\n\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/lib/isUnset.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/lib/requestOptions.js":
/*!***************************************************************!*\
  !*** ./node_modules/express-http-proxy/lib/requestOptions.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar http = __webpack_require__(/*! http */ \"http\");\nvar https = __webpack_require__(/*! https */ \"https\");\nvar url = __webpack_require__(/*! url */ \"url\");\nvar getRawBody = __webpack_require__(/*! raw-body */ \"raw-body\");\nvar isUnset = __webpack_require__(/*! ./isUnset */ \"./node_modules/express-http-proxy/lib/isUnset.js\");\n\nfunction extend(obj, source, skips) {\n\n  if (!source) {\n    return obj;\n  }\n\n  for (var prop in source) {\n    if (!skips || skips.indexOf(prop) === -1) {\n      obj[prop] = source[prop];\n    }\n  }\n\n  return obj;\n}\n\nfunction parseHost(Container) {\n  var host = Container.params.host;\n  var req =  Container.user.req;\n  var options = Container.options;\n  host = (typeof host === 'function') ? host(req) : host.toString();\n\n  if (!host) {\n    return new Error('Empty host parameter');\n  }\n\n  if (!/http(s)?:\\/\\//.test(host)) {\n    host = 'http://' + host;\n  }\n\n  var parsed = url.parse(host);\n\n  if (!parsed.hostname) {\n    return new Error('Unable to parse hostname, possibly missing protocol://?');\n  }\n\n  var ishttps = options.https || parsed.protocol === 'https:';\n\n  return {\n    host: parsed.hostname,\n    port: parsed.port || (ishttps ? 443 : 80),\n    module: ishttps ? https : http,\n  };\n}\n\nfunction reqHeaders(req, options) {\n\n\n  var headers = options.headers || {};\n\n  var skipHdrs = [ 'connection', 'content-length' ];\n  if (!options.preserveHostHdr) {\n    skipHdrs.push('host');\n  }\n  var hds = extend(headers, req.headers, skipHdrs);\n  hds.connection = 'close';\n\n  return hds;\n}\n\nfunction createRequestOptions(req, res, options) {\n\n  // prepare proxyRequest\n\n  var reqOpt = {\n    headers: reqHeaders(req, options),\n    method: req.method,\n    path: req.path,\n    params: req.params,\n  };\n\n  if (options.preserveReqSession) {\n    reqOpt.session = req.session;\n  }\n\n  return Promise.resolve(reqOpt);\n}\n\n// extract to bodyContent object\n\nfunction bodyContent(req, res, options) {\n  var parseReqBody = isUnset(options.parseReqBody) ? true : options.parseReqBody;\n\n  function maybeParseBody(req, limit) {\n    if (req.body) {\n      return Promise.resolve(req.body);\n    } else {\n      // Returns a promise if no callback specified and global Promise exists.\n\n      return getRawBody(req, {\n        length: req.headers['content-length'],\n        limit: limit,\n      });\n    }\n  }\n\n  if (parseReqBody) {\n    return maybeParseBody(req, options.limit);\n  }\n}\n\n\nmodule.exports = {\n  create: createRequestOptions,\n  bodyContent: bodyContent,\n  parseHost: parseHost\n};\n\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/lib/requestOptions.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/lib/resolveOptions.js":
/*!***************************************************************!*\
  !*** ./node_modules/express-http-proxy/lib/resolveOptions.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar debug = __webpack_require__(/*! debug */ \"debug\")('express-http-proxy');\n\nvar isUnset = __webpack_require__(/*! ../lib/isUnset */ \"./node_modules/express-http-proxy/lib/isUnset.js\");\n\nfunction resolveBodyEncoding(reqBodyEncoding) {\n\n  /* For reqBodyEncoding, these is a meaningful difference between null and\n    * undefined.  null should be passed forward as the value of reqBodyEncoding,\n    * and undefined should result in utf-8.\n    */\n  return reqBodyEncoding !== undefined ? reqBodyEncoding : 'utf-8';\n}\n\n// parse client arguments\n\nfunction resolveOptions(options) {\n  options = options || {};\n  var resolved;\n\n  if (options.decorateRequest) {\n    throw new Error(\n      'decorateRequest is REMOVED; use proxyReqOptDecorator and' +\n      'proxyReqBodyDecorator instead.  see README.md'\n    );\n  }\n\n  if (options.forwardPath || options.forwardPathAsync) {\n    console.warn(\n      'forwardPath and forwardPathAsync are DEPRECATED' +\n      'and should be replaced with proxyReqPathResolver'\n    );\n  }\n\n  if (options.intercept) {\n    console.warn(\n      'DEPRECATED: intercept. Use decorateUseRes instead.' +\n      ' Please see README for more information.'\n    );\n  }\n\n  resolved = {\n    limit: options.limit || '1mb',\n    proxyReqPathResolver: options.proxyReqPathResolver\n        || options.forwardPathAsync\n        || options.forwardPath,\n    proxyReqOptDecorator: options.proxyReqOptDecorator,\n    proxyReqBodyDecorator: options.proxyReqBodyDecorator,\n    userResDecorator: options.userResDecorator || options.intercept,\n    userResHeaderDecorator: options.userResHeaderDecorator,\n    proxyErrorHandler: options.proxyErrorHandler,\n    filter: options.filter,\n    // For backwards compatability, we default to legacy behavior for newly added settings.\n\n    parseReqBody: isUnset(options.parseReqBody) ? true : options.parseReqBody,\n    preserveHostHdr: options.preserveHostHdr,\n    memoizeHost: isUnset(options.memoizeHost) ? true : options.memoizeHost,\n    reqBodyEncoding: resolveBodyEncoding(options.reqBodyEncoding),\n    skipToNextHandlerFilter: options.skipToNextHandlerFilter,\n    headers: options.headers,\n    preserveReqSession: options.preserveReqSession,\n    https: options.https,\n    port: options.port,\n    reqAsBuffer: options.reqAsBuffer,\n    timeout: options.timeout\n  };\n\n  // automatically opt into stream mode if no response modifiers are specified\n\n  resolved.stream = !resolved.skipToNextHandlerFilter &&\n                    !resolved.userResDecorator &&\n                    !resolved.userResHeaderDecorator;\n\n  debug(resolved);\n  return resolved;\n}\n\nmodule.exports = resolveOptions;\n\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/lib/resolveOptions.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/lib/scopeContainer.js":
/*!***************************************************************!*\
  !*** ./node_modules/express-http-proxy/lib/scopeContainer.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar resolveOptions = __webpack_require__(/*! ../lib/resolveOptions */ \"./node_modules/express-http-proxy/lib/resolveOptions.js\");\n\n// The Container object is passed down the chain of Promises, with each one\n// of them mutating and returning Container.  The goal is that (eventually)\n// author using this library // could hook into/override any of these\n// workflow steps with a Promise or simple function.\n// Container for scoped arguments in a promise chain.  Each promise recieves\n// this as its argument, and returns it.\n//\n// Do not expose the details of this to hooks/user functions.\n\nfunction Container(req, res, next, host, userOptions) {\n  return {\n    user: {\n      req: req,\n      res: res,\n      next: next,\n    },\n    proxy: {\n      req: {},\n      res: {},\n      resData: undefined, // from proxy res\n      bodyContent: undefined, // for proxy req\n      reqBuilder: {},  // reqOpt, intended as first arg to http(s)?.request\n    },\n    options: resolveOptions(userOptions),\n    params: {\n      host: host,\n      userOptions: userOptions\n    }\n  };\n}\n\nmodule.exports = Container;\n\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/lib/scopeContainer.js?");

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Home = __webpack_require__(/*! ./src/container/Home/ */ \"./src/container/Home/index.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _About = __webpack_require__(/*! ./src/container/About/ */ \"./src/container/About/index.js\");\n\nvar _About2 = _interopRequireDefault(_About);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [{\n  path: '/',\n  component: _Home2.default,\n  key: 'Home',\n  exact: true,\n  loadData: _Home2.default.loadData\n}, {\n  path: '/about',\n  component: _About2.default,\n  key: 'About',\n  exact: true\n}];\n\n//# sourceURL=webpack:///./routes.js?");

/***/ }),

/***/ "./src/client/request.js":
/*!*******************************!*\
  !*** ./src/client/request.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _axios2.default.create({\n  baseURL: '/api/'\n});\n\n//# sourceURL=webpack:///./src/client/request.js?");

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Header = function Header() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      _reactRouterDom.Link,\n      { to: '/' },\n      'Home'\n    ),\n    _react2.default.createElement(\n      _reactRouterDom.Link,\n      { to: '/about' },\n      'About'\n    )\n  );\n};\n\nexports.default = Header;\n\n//# sourceURL=webpack:///./src/components/Header/index.js?");

/***/ }),

/***/ "./src/container/About/index.js":
/*!**************************************!*\
  !*** ./src/container/About/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! ../../components/Header/ */ \"./src/components/Header/index.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar About = function About() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(_Header2.default, null),\n    _react2.default.createElement(\n      'div',\n      { onClick: function onClick() {\n          console.log('d');\n        } },\n      'about'\n    )\n  );\n};\n\nexports.default = About;\n\n//# sourceURL=webpack:///./src/container/About/index.js?");

/***/ }),

/***/ "./src/container/Home/index.js":
/*!*************************************!*\
  !*** ./src/container/Home/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _Header = __webpack_require__(/*! ../../components/Header/ */ \"./src/components/Header/index.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _actions = __webpack_require__(/*! ./store/actions */ \"./src/container/Home/store/actions.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Home = function (_Component) {\n  _inherits(Home, _Component);\n\n  function Home() {\n    _classCallCheck(this, Home);\n\n    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));\n  }\n\n  _createClass(Home, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_Header2.default, null),\n        _react2.default.createElement(\n          'div',\n          { onClick: function onClick() {\n              console.log('d');\n            } },\n          'home'\n        ),\n        _react2.default.createElement(\n          'div',\n          null,\n          this.getList()\n        )\n      );\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      // 解决重复加载资源问题\n      if (!this.props.blogList.length) {\n        this.props.getBlogList();\n      }\n    }\n  }, {\n    key: 'getList',\n    value: function getList() {\n      return this.props.blogList.map(function (item) {\n        return _react2.default.createElement(\n          'ul',\n          { key: item.id },\n          _react2.default.createElement(\n            'li',\n            null,\n            item.title\n          )\n        );\n      });\n    }\n  }]);\n\n  return Home;\n}(_react.Component);\n\nvar mapState = function mapState(state) {\n  return {\n    blogList: state.home.blogList\n  };\n};\nvar mapDispatch = function mapDispatch(dispatch) {\n  return {\n    getBlogList: function getBlogList() {\n      dispatch((0, _actions.getBlogList)());\n    }\n  };\n};\n\n// 手动挂载 loadData\nvar WrapperHome = (0, _reactRedux.connect)(mapState, mapDispatch)(Home);\nWrapperHome.loadData = function (store) {\n  return store.dispatch((0, _actions.getBlogList)());\n};\n\nexports.default = WrapperHome;\n\n//# sourceURL=webpack:///./src/container/Home/index.js?");

/***/ }),

/***/ "./src/container/Home/store/actions.js":
/*!*********************************************!*\
  !*** ./src/container/Home/store/actions.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getBlogList = undefined;\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/container/Home/store/constants.js\");\n\nvar changeList = function changeList(results) {\n  return {\n    type: _constants.CHANGE_BLOGLIST,\n    value: results\n  };\n};\n\nvar getBlogList = exports.getBlogList = function getBlogList() {\n  return function (dispatch, getState, axiosRequest) {\n    return axiosRequest.get('/blog', {\n      params: { limit: 15, page: 1, pagination: true }\n    }).then(function (d) {\n      d = d.data;\n      var results = d.results;\n      var meta = d.meta;\n      dispatch(changeList(results));\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/container/Home/store/actions.js?");

/***/ }),

/***/ "./src/container/Home/store/constants.js":
/*!***********************************************!*\
  !*** ./src/container/Home/store/constants.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar CHANGE_BLOGLIST = exports.CHANGE_BLOGLIST = 'HOME/CHANGE_BLOGLIST';\n\n//# sourceURL=webpack:///./src/container/Home/store/constants.js?");

/***/ }),

/***/ "./src/container/Home/store/index.js":
/*!*******************************************!*\
  !*** ./src/container/Home/store/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.reducer = undefined;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/container/Home/store/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.reducer = _reducer2.default;\n\n//# sourceURL=webpack:///./src/container/Home/store/index.js?");

/***/ }),

/***/ "./src/container/Home/store/reducer.js":
/*!*********************************************!*\
  !*** ./src/container/Home/store/reducer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/container/Home/store/constants.js\");\n\nvar defaultState = {\n  blogList: []\n};\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _constants.CHANGE_BLOGLIST:\n      return _extends({}, state, {\n        blogList: action.value\n      });\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/container/Home/store/reducer.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _expressHttpProxy = __webpack_require__(/*! express-http-proxy */ \"./node_modules/express-http-proxy/index.js\");\n\nvar _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);\n\nvar _store = __webpack_require__(/*! ../store/ */ \"./src/store/index.js\");\n\nvar _render = __webpack_require__(/*! ./utils/render */ \"./src/server/utils/render.js\");\n\nvar _render2 = _interopRequireDefault(_render);\n\nvar _routes = __webpack_require__(/*! ../../routes */ \"./routes.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n\napp.use(_express2.default.static('public'));\napp.use('/api', (0, _expressHttpProxy2.default)('hapiblog.oliyg.com', {\n  https: true,\n  proxyReqPathResolver: function proxyReqPathResolver(req) {\n    console.log(req.url, 'proxing...');\n    return '' + req.url;\n  }\n}));\napp.get('*', function (req, res) {\n  var store = (0, _store.getStore)();\n\n  // 服务端匹配路由并异步获取数据 start\n  var matchedRoutes = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.path);\n  var promises = [];\n  matchedRoutes.forEach(function (item) {\n    if (item.route.loadData) {\n      promises.push(item.route.loadData(store));\n    }\n  });\n  Promise.all(promises).then(function () {\n    res.send((0, _render2.default)(store, _routes2.default, req));\n  });\n  // 服务端匹配路由并异步获取数据 end\n});\n\nvar config = {\n  PORT: 3000,\n  HOST: 'localhost'\n\n};\n\napp.listen(config.PORT, config.HOST, function () {\n  console.log('server listening at ' + config.HOST + ':' + config.PORT);\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/request.js":
/*!*******************************!*\
  !*** ./src/server/request.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _axios2.default.create({\n  baseURL: 'https://hapiblog.oliyg.com'\n});\n\n//# sourceURL=webpack:///./src/server/request.js?");

/***/ }),

/***/ "./src/server/utils/render.js":
/*!************************************!*\
  !*** ./src/server/utils/render.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (store, routes, req) {\n  var content = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { location: req.path, context: {} },\n      _react2.default.createElement(\n        'div',\n        null,\n        // 遍历路由使用 Route 挂载\n        routes.map(function (route) {\n          return _react2.default.createElement(_reactRouterDom.Route, route);\n        })\n      )\n    )\n  ));\n  return '\\n  <!DOCTYPE html>\\n  <html lang=\"en\">\\n  <head>\\n      <meta charset=\"UTF-8\">\\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\\n      <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\\n  </head>\\n  <body>\\n      <div id=\"root\">' + content + '</div>\\n      <script>window.context = { state: ' + JSON.stringify(store.getState()) + ' }</script>\\n      <script src=\"/index.js\"></script>\\n  </body>\\n  </html>';\n};\n\n//# sourceURL=webpack:///./src/server/utils/render.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getClientStore = exports.getStore = undefined;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _store = __webpack_require__(/*! ../container/Home/store/ */ \"./src/container/Home/store/index.js\");\n\nvar _request = __webpack_require__(/*! ../client/request */ \"./src/client/request.js\");\n\nvar _request2 = _interopRequireDefault(_request);\n\nvar _request3 = __webpack_require__(/*! ../server/request */ \"./src/server/request.js\");\n\nvar _request4 = _interopRequireDefault(_request3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar reducer = (0, _redux.combineReducers)({\n  home: _store.reducer\n});\n\nvar getStore = function getStore() {\n  return (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(_request4.default)));\n};\nvar getClientStore = function getClientStore() {\n  // window 注水和脱水 客户端同步 state\n  var defaultState = window.context.state;\n  return (0, _redux.createStore)(reducer, defaultState, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(_request2.default)));\n};\n\nexports.getStore = getStore;\nexports.getClientStore = getClientStore;\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"assert\");\n\n//# sourceURL=webpack:///external_%22assert%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"debug\");\n\n//# sourceURL=webpack:///external_%22debug%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"https\");\n\n//# sourceURL=webpack:///external_%22https%22?");

/***/ }),

/***/ "raw-body":
/*!***************************!*\
  !*** external "raw-body" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"raw-body\");\n\n//# sourceURL=webpack:///external_%22raw-body%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"url\");\n\n//# sourceURL=webpack:///external_%22url%22?");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"zlib\");\n\n//# sourceURL=webpack:///external_%22zlib%22?");

/***/ })

/******/ });