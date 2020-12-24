module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/me.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/me.ts":
/*!*************************!*\
  !*** ./pages/api/me.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return me; });\n/* harmony import */ var _utils_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/auth0 */ \"./utils/auth0.ts\");\n\nasync function me(req, res) {\n  try {\n    await _utils_auth0__WEBPACK_IMPORTED_MODULE_0__[\"default\"].handleProfile(req, res, {\n      refetch: true\n    });\n  } catch (error) {\n    console.error(error);\n    res.status(error.status || 500).end(error.message);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbWUudHM/MDZiYyJdLCJuYW1lcyI6WyJtZSIsInJlcSIsInJlcyIsImF1dGgwIiwiaGFuZGxlUHJvZmlsZSIsInJlZmV0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJzdGF0dXMiLCJlbmQiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVlLGVBQWVBLEVBQWYsQ0FBa0JDLEdBQWxCLEVBQXVCQyxHQUF2QixFQUE0QjtBQUN6QyxNQUFJO0FBQ0YsVUFBTUMsb0RBQUssQ0FBQ0MsYUFBTixDQUFvQkgsR0FBcEIsRUFBeUJDLEdBQXpCLEVBQThCO0FBQUVHLGFBQU8sRUFBRTtBQUFYLEtBQTlCLENBQU47QUFDRCxHQUZELENBRUUsT0FBT0MsS0FBUCxFQUFjO0FBQ2RDLFdBQU8sQ0FBQ0QsS0FBUixDQUFjQSxLQUFkO0FBQ0FKLE9BQUcsQ0FBQ00sTUFBSixDQUFXRixLQUFLLENBQUNFLE1BQU4sSUFBZ0IsR0FBM0IsRUFBZ0NDLEdBQWhDLENBQW9DSCxLQUFLLENBQUNJLE9BQTFDO0FBQ0Q7QUFDRiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9tZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhdXRoMCBmcm9tICcuLi8uLi91dGlscy9hdXRoMCc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIG1lKHJlcSwgcmVzKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXV0aDAuaGFuZGxlUHJvZmlsZShyZXEsIHJlcywgeyByZWZldGNoOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJlcy5zdGF0dXMoZXJyb3Iuc3RhdHVzIHx8IDUwMCkuZW5kKGVycm9yLm1lc3NhZ2UpO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/me.ts\n");

/***/ }),

/***/ "./utils/auth0.ts":
/*!************************!*\
  !*** ./utils/auth0.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"@auth0/nextjs-auth0\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);\n // import config from './config';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__[\"initAuth0\"])({\n  domain: 'auth.dseapps.dev',\n  clientId: 'vwsI9UiL0Q7LXSOe2imitZvPg1ffRm4C',\n  clientSecret: '1JZa4zcHudpLBCQ3eqSnbHWc0s8WKuNvGRnuHjdDHJA8XddxAx-G254y4xOfJ-9C',\n  scope: 'openid profile',\n  redirectUri: 'http://192.168.7.46:3000/api/callback',\n  postLogoutRedirectUri: 'http://192.168.7.46:3000/',\n  session: {\n    // The secret used to encrypt the cookie.\n    cookieSecret: 'DC6cP0TilntxWDL4I+pSaAenkqUctR5gyVyFeOW8/Kw=',\n    // The cookie lifetime (expiration) in seconds. Set to 8 hours by default.\n    cookieLifetime: 60 * 60 * 8,\n    // (Optional) The cookie domain this should run on. Leave it blank to restrict it to your domain.\n    cookieDomain: '',\n    // (Optional) SameSite configuration for the session cookie. Defaults to 'lax', but can be changed to 'strict' or 'none'. Set it to false if you want to disable the SameSite setting.\n    cookieSameSite: 'lax',\n    // (Optional) Store the id_token in the session. Defaults to false.\n    storeIdToken: true,\n    // (Optional) Store the access_token in the session. Defaults to false.\n    storeAccessToken: true,\n    // (Optional) Store the refresh_token in the session. Defaults to false.\n    storeRefreshToken: false\n  },\n  oidcClient: {\n    // (Optional) Configure the timeout in milliseconds for HTTP requests to Auth0.\n    httpTimeout: 2500,\n    // (Optional) Configure the clock tolerance in milliseconds, if the time on your server is running behind.\n    clockTolerance: 10000\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9hdXRoMC50cz8yNjJhIl0sIm5hbWVzIjpbImluaXRBdXRoMCIsImRvbWFpbiIsImNsaWVudElkIiwiY2xpZW50U2VjcmV0Iiwic2NvcGUiLCJyZWRpcmVjdFVyaSIsInBvc3RMb2dvdXRSZWRpcmVjdFVyaSIsInNlc3Npb24iLCJjb29raWVTZWNyZXQiLCJjb29raWVMaWZldGltZSIsImNvb2tpZURvbWFpbiIsImNvb2tpZVNhbWVTaXRlIiwic3RvcmVJZFRva2VuIiwic3RvcmVBY2Nlc3NUb2tlbiIsInN0b3JlUmVmcmVzaFRva2VuIiwib2lkY0NsaWVudCIsImh0dHBUaW1lb3V0IiwiY2xvY2tUb2xlcmFuY2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtDQUNBOztBQUVlQSxvSUFBUyxDQUFDO0FBQ3ZCQyxRQUFNLEVBQUUsa0JBRGU7QUFFdkJDLFVBQVEsRUFBRSxrQ0FGYTtBQUd2QkMsY0FBWSxFQUFFLGtFQUhTO0FBSXZCQyxPQUFLLEVBQUUsZ0JBSmdCO0FBS3ZCQyxhQUFXLEVBQUUsdUNBTFU7QUFNdkJDLHVCQUFxQixFQUFFLDJCQU5BO0FBT3ZCQyxTQUFPLEVBQUU7QUFDUDtBQUNBQyxnQkFBWSxFQUFFLDhDQUZQO0FBR1A7QUFDQUMsa0JBQWMsRUFBRSxLQUFLLEVBQUwsR0FBVSxDQUpuQjtBQUtQO0FBQ0FDLGdCQUFZLEVBQUUsRUFOUDtBQU9QO0FBQ0FDLGtCQUFjLEVBQUUsS0FSVDtBQVNQO0FBQ0FDLGdCQUFZLEVBQUUsSUFWUDtBQVdQO0FBQ0FDLG9CQUFnQixFQUFFLElBWlg7QUFhUDtBQUNBQyxxQkFBaUIsRUFBRTtBQWRaLEdBUGM7QUF1QnZCQyxZQUFVLEVBQUU7QUFDVjtBQUNBQyxlQUFXLEVBQUUsSUFGSDtBQUdWO0FBQ0FDLGtCQUFjLEVBQUU7QUFKTjtBQXZCVyxDQUFELENBQXhCIiwiZmlsZSI6Ii4vdXRpbHMvYXV0aDAudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0QXV0aDAgfSBmcm9tICdAYXV0aDAvbmV4dGpzLWF1dGgwJztcbi8vIGltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgZGVmYXVsdCBpbml0QXV0aDAoe1xuICBkb21haW46ICdhdXRoLmRzZWFwcHMuZGV2JyxcbiAgY2xpZW50SWQ6ICd2d3NJOVVpTDBRN0xYU09lMmltaXRadlBnMWZmUm00QycsXG4gIGNsaWVudFNlY3JldDogJzFKWmE0emNIdWRwTEJDUTNlcVNuYkhXYzBzOFdLdU52R1JudUhqZERISkE4WGRkeEF4LUcyNTR5NHhPZkotOUMnLFxuICBzY29wZTogJ29wZW5pZCBwcm9maWxlJyxcbiAgcmVkaXJlY3RVcmk6ICdodHRwOi8vMTkyLjE2OC43LjQ2OjMwMDAvYXBpL2NhbGxiYWNrJyxcbiAgcG9zdExvZ291dFJlZGlyZWN0VXJpOiAnaHR0cDovLzE5Mi4xNjguNy40NjozMDAwLycsXG4gIHNlc3Npb246IHtcbiAgICAvLyBUaGUgc2VjcmV0IHVzZWQgdG8gZW5jcnlwdCB0aGUgY29va2llLlxuICAgIGNvb2tpZVNlY3JldDogJ0RDNmNQMFRpbG50eFdETDRJK3BTYUFlbmtxVWN0UjVneVZ5RmVPVzgvS3c9JyxcbiAgICAvLyBUaGUgY29va2llIGxpZmV0aW1lIChleHBpcmF0aW9uKSBpbiBzZWNvbmRzLiBTZXQgdG8gOCBob3VycyBieSBkZWZhdWx0LlxuICAgIGNvb2tpZUxpZmV0aW1lOiA2MCAqIDYwICogOCxcbiAgICAvLyAoT3B0aW9uYWwpIFRoZSBjb29raWUgZG9tYWluIHRoaXMgc2hvdWxkIHJ1biBvbi4gTGVhdmUgaXQgYmxhbmsgdG8gcmVzdHJpY3QgaXQgdG8geW91ciBkb21haW4uXG4gICAgY29va2llRG9tYWluOiAnJyxcbiAgICAvLyAoT3B0aW9uYWwpIFNhbWVTaXRlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBzZXNzaW9uIGNvb2tpZS4gRGVmYXVsdHMgdG8gJ2xheCcsIGJ1dCBjYW4gYmUgY2hhbmdlZCB0byAnc3RyaWN0JyBvciAnbm9uZScuIFNldCBpdCB0byBmYWxzZSBpZiB5b3Ugd2FudCB0byBkaXNhYmxlIHRoZSBTYW1lU2l0ZSBzZXR0aW5nLlxuICAgIGNvb2tpZVNhbWVTaXRlOiAnbGF4JyxcbiAgICAvLyAoT3B0aW9uYWwpIFN0b3JlIHRoZSBpZF90b2tlbiBpbiB0aGUgc2Vzc2lvbi4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgc3RvcmVJZFRva2VuOiB0cnVlLFxuICAgIC8vIChPcHRpb25hbCkgU3RvcmUgdGhlIGFjY2Vzc190b2tlbiBpbiB0aGUgc2Vzc2lvbi4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgc3RvcmVBY2Nlc3NUb2tlbjogdHJ1ZSxcbiAgICAvLyAoT3B0aW9uYWwpIFN0b3JlIHRoZSByZWZyZXNoX3Rva2VuIGluIHRoZSBzZXNzaW9uLiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICBzdG9yZVJlZnJlc2hUb2tlbjogZmFsc2VcbiAgfSxcbiAgb2lkY0NsaWVudDoge1xuICAgIC8vIChPcHRpb25hbCkgQ29uZmlndXJlIHRoZSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyBmb3IgSFRUUCByZXF1ZXN0cyB0byBBdXRoMC5cbiAgICBodHRwVGltZW91dDogMjUwMCxcbiAgICAvLyAoT3B0aW9uYWwpIENvbmZpZ3VyZSB0aGUgY2xvY2sgdG9sZXJhbmNlIGluIG1pbGxpc2Vjb25kcywgaWYgdGhlIHRpbWUgb24geW91ciBzZXJ2ZXIgaXMgcnVubmluZyBiZWhpbmQuXG4gICAgY2xvY2tUb2xlcmFuY2U6IDEwMDAwXG4gIH1cbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/auth0.ts\n");

/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@auth0/nextjs-auth0\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXV0aDAvbmV4dGpzLWF1dGgwXCI/N2RhOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAYXV0aDAvbmV4dGpzLWF1dGgwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGF1dGgwL25leHRqcy1hdXRoMFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@auth0/nextjs-auth0\n");

/***/ })

/******/ });