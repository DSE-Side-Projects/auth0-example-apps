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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/callback.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/callback.ts":
/*!*******************************!*\
  !*** ./pages/api/callback.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return callback; });\n/* harmony import */ var _utils_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/auth0 */ \"./utils/auth0.ts\");\n\nasync function callback(req, res) {\n  try {\n    await _utils_auth0__WEBPACK_IMPORTED_MODULE_0__[\"default\"].handleCallback(req, res, {\n      redirectTo: '/'\n    });\n  } catch (error) {\n    console.error(error);\n    res.status(error.status || 400).end(error.message);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY2FsbGJhY2sudHM/NWEwMiJdLCJuYW1lcyI6WyJjYWxsYmFjayIsInJlcSIsInJlcyIsImF1dGgwIiwiaGFuZGxlQ2FsbGJhY2siLCJyZWRpcmVjdFRvIiwiZXJyb3IiLCJjb25zb2xlIiwic3RhdHVzIiwiZW5kIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZSxlQUFlQSxRQUFmLENBQXdCQyxHQUF4QixFQUE2QkMsR0FBN0IsRUFBa0M7QUFDL0MsTUFBSTtBQUNGLFVBQU1DLG9EQUFLLENBQUNDLGNBQU4sQ0FBcUJILEdBQXJCLEVBQTBCQyxHQUExQixFQUErQjtBQUFFRyxnQkFBVSxFQUFFO0FBQWQsS0FBL0IsQ0FBTjtBQUNELEdBRkQsQ0FFRSxPQUFPQyxLQUFQLEVBQWM7QUFDZEMsV0FBTyxDQUFDRCxLQUFSLENBQWNBLEtBQWQ7QUFDQUosT0FBRyxDQUFDTSxNQUFKLENBQVdGLEtBQUssQ0FBQ0UsTUFBTixJQUFnQixHQUEzQixFQUFnQ0MsR0FBaEMsQ0FBb0NILEtBQUssQ0FBQ0ksT0FBMUM7QUFDRDtBQUNGIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2NhbGxiYWNrLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF1dGgwIGZyb20gJy4uLy4uL3V0aWxzL2F1dGgwJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY2FsbGJhY2socmVxLCByZXMpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBhdXRoMC5oYW5kbGVDYWxsYmFjayhyZXEsIHJlcywgeyByZWRpcmVjdFRvOiAnLycgfSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXMuc3RhdHVzKGVycm9yLnN0YXR1cyB8fCA0MDApLmVuZChlcnJvci5tZXNzYWdlKTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/callback.ts\n");

/***/ }),

/***/ "./utils/auth0.ts":
/*!************************!*\
  !*** ./utils/auth0.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"@auth0/nextjs-auth0\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);\n // import config from './config';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__[\"initAuth0\"])({\n  domain: 'auth.dseapps.dev',\n  clientId: process.env.AUTH0_CLIENT_ID,\n  clientSecret: process.env.AUTH0_CLIENT_SECRET,\n  scope: 'openid profile',\n  redirectUri: 'http://192.168.7.46:3000/api/callback',\n  postLogoutRedirectUri: 'http://192.168.7.46:3000/',\n  session: {\n    // The secret used to encrypt the cookie.\n    cookieSecret: 'DC6cP0TilntxWDL4I+pSaAenkqUctR5gyVyFeOW8/Kw=',\n    // The cookie lifetime (expiration) in seconds. Set to 8 hours by default.\n    cookieLifetime: 60 * 60 * 8,\n    // (Optional) The cookie domain this should run on. Leave it blank to restrict it to your domain.\n    cookieDomain: '',\n    // (Optional) SameSite configuration for the session cookie. Defaults to 'lax', but can be changed to 'strict' or 'none'. Set it to false if you want to disable the SameSite setting.\n    cookieSameSite: 'lax',\n    // (Optional) Store the id_token in the session. Defaults to false.\n    storeIdToken: true,\n    // (Optional) Store the access_token in the session. Defaults to false.\n    storeAccessToken: true,\n    // (Optional) Store the refresh_token in the session. Defaults to false.\n    storeRefreshToken: false\n  },\n  oidcClient: {\n    // (Optional) Configure the timeout in milliseconds for HTTP requests to Auth0.\n    httpTimeout: 2500,\n    // (Optional) Configure the clock tolerance in milliseconds, if the time on your server is running behind.\n    clockTolerance: 10000\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9hdXRoMC50cz8yNjJhIl0sIm5hbWVzIjpbImluaXRBdXRoMCIsImRvbWFpbiIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkFVVEgwX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkFVVEgwX0NMSUVOVF9TRUNSRVQiLCJzY29wZSIsInJlZGlyZWN0VXJpIiwicG9zdExvZ291dFJlZGlyZWN0VXJpIiwic2Vzc2lvbiIsImNvb2tpZVNlY3JldCIsImNvb2tpZUxpZmV0aW1lIiwiY29va2llRG9tYWluIiwiY29va2llU2FtZVNpdGUiLCJzdG9yZUlkVG9rZW4iLCJzdG9yZUFjY2Vzc1Rva2VuIiwic3RvcmVSZWZyZXNoVG9rZW4iLCJvaWRjQ2xpZW50IiwiaHR0cFRpbWVvdXQiLCJjbG9ja1RvbGVyYW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0NBQ0E7O0FBRWVBLG9JQUFTLENBQUM7QUFDdkJDLFFBQU0sRUFBRSxrQkFEZTtBQUV2QkMsVUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZUFGQztBQUd2QkMsY0FBWSxFQUFFSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsbUJBSEg7QUFJdkJDLE9BQUssRUFBRSxnQkFKZ0I7QUFLdkJDLGFBQVcsRUFBRSx1Q0FMVTtBQU12QkMsdUJBQXFCLEVBQUUsMkJBTkE7QUFPdkJDLFNBQU8sRUFBRTtBQUNQO0FBQ0FDLGdCQUFZLEVBQUUsOENBRlA7QUFHUDtBQUNBQyxrQkFBYyxFQUFFLEtBQUssRUFBTCxHQUFVLENBSm5CO0FBS1A7QUFDQUMsZ0JBQVksRUFBRSxFQU5QO0FBT1A7QUFDQUMsa0JBQWMsRUFBRSxLQVJUO0FBU1A7QUFDQUMsZ0JBQVksRUFBRSxJQVZQO0FBV1A7QUFDQUMsb0JBQWdCLEVBQUUsSUFaWDtBQWFQO0FBQ0FDLHFCQUFpQixFQUFFO0FBZFosR0FQYztBQXVCdkJDLFlBQVUsRUFBRTtBQUNWO0FBQ0FDLGVBQVcsRUFBRSxJQUZIO0FBR1Y7QUFDQUMsa0JBQWMsRUFBRTtBQUpOO0FBdkJXLENBQUQsQ0FBeEIiLCJmaWxlIjoiLi91dGlscy9hdXRoMC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRBdXRoMCB9IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAnO1xuLy8gaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRBdXRoMCh7XG4gIGRvbWFpbjogJ2F1dGguZHNlYXBwcy5kZXYnLFxuICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuQVVUSDBfQ0xJRU5UX0lELFxuICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkFVVEgwX0NMSUVOVF9TRUNSRVQsXG4gIHNjb3BlOiAnb3BlbmlkIHByb2ZpbGUnLFxuICByZWRpcmVjdFVyaTogJ2h0dHA6Ly8xOTIuMTY4LjcuNDY6MzAwMC9hcGkvY2FsbGJhY2snLFxuICBwb3N0TG9nb3V0UmVkaXJlY3RVcmk6ICdodHRwOi8vMTkyLjE2OC43LjQ2OjMwMDAvJyxcbiAgc2Vzc2lvbjoge1xuICAgIC8vIFRoZSBzZWNyZXQgdXNlZCB0byBlbmNyeXB0IHRoZSBjb29raWUuXG4gICAgY29va2llU2VjcmV0OiAnREM2Y1AwVGlsbnR4V0RMNEkrcFNhQWVua3FVY3RSNWd5VnlGZU9XOC9Ldz0nLFxuICAgIC8vIFRoZSBjb29raWUgbGlmZXRpbWUgKGV4cGlyYXRpb24pIGluIHNlY29uZHMuIFNldCB0byA4IGhvdXJzIGJ5IGRlZmF1bHQuXG4gICAgY29va2llTGlmZXRpbWU6IDYwICogNjAgKiA4LFxuICAgIC8vIChPcHRpb25hbCkgVGhlIGNvb2tpZSBkb21haW4gdGhpcyBzaG91bGQgcnVuIG9uLiBMZWF2ZSBpdCBibGFuayB0byByZXN0cmljdCBpdCB0byB5b3VyIGRvbWFpbi5cbiAgICBjb29raWVEb21haW46ICcnLFxuICAgIC8vIChPcHRpb25hbCkgU2FtZVNpdGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIHNlc3Npb24gY29va2llLiBEZWZhdWx0cyB0byAnbGF4JywgYnV0IGNhbiBiZSBjaGFuZ2VkIHRvICdzdHJpY3QnIG9yICdub25lJy4gU2V0IGl0IHRvIGZhbHNlIGlmIHlvdSB3YW50IHRvIGRpc2FibGUgdGhlIFNhbWVTaXRlIHNldHRpbmcuXG4gICAgY29va2llU2FtZVNpdGU6ICdsYXgnLFxuICAgIC8vIChPcHRpb25hbCkgU3RvcmUgdGhlIGlkX3Rva2VuIGluIHRoZSBzZXNzaW9uLiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICBzdG9yZUlkVG9rZW46IHRydWUsXG4gICAgLy8gKE9wdGlvbmFsKSBTdG9yZSB0aGUgYWNjZXNzX3Rva2VuIGluIHRoZSBzZXNzaW9uLiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICBzdG9yZUFjY2Vzc1Rva2VuOiB0cnVlLFxuICAgIC8vIChPcHRpb25hbCkgU3RvcmUgdGhlIHJlZnJlc2hfdG9rZW4gaW4gdGhlIHNlc3Npb24uIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgIHN0b3JlUmVmcmVzaFRva2VuOiBmYWxzZVxuICB9LFxuICBvaWRjQ2xpZW50OiB7XG4gICAgLy8gKE9wdGlvbmFsKSBDb25maWd1cmUgdGhlIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIGZvciBIVFRQIHJlcXVlc3RzIHRvIEF1dGgwLlxuICAgIGh0dHBUaW1lb3V0OiAyNTAwLFxuICAgIC8vIChPcHRpb25hbCkgQ29uZmlndXJlIHRoZSBjbG9jayB0b2xlcmFuY2UgaW4gbWlsbGlzZWNvbmRzLCBpZiB0aGUgdGltZSBvbiB5b3VyIHNlcnZlciBpcyBydW5uaW5nIGJlaGluZC5cbiAgICBjbG9ja1RvbGVyYW5jZTogMTAwMDBcbiAgfVxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/auth0.ts\n");

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