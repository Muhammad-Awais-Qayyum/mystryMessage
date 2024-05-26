"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/sign-up/route";
exports.ids = ["app/api/sign-up/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsign-up%2Froute&page=%2Fapi%2Fsign-up%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsign-up%2Froute.ts&appDir=C%3A%5CUsers%5CMian%20ahmer%5CDesktop%5CmystryMessage%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMian%20ahmer%5CDesktop%5CmystryMessage&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsign-up%2Froute&page=%2Fapi%2Fsign-up%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsign-up%2Froute.ts&appDir=C%3A%5CUsers%5CMian%20ahmer%5CDesktop%5CmystryMessage%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMian%20ahmer%5CDesktop%5CmystryMessage&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Mian_ahmer_Desktop_mystryMessage_src_app_api_sign_up_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/sign-up/route.ts */ \"(rsc)/./src/app/api/sign-up/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/sign-up/route\",\n        pathname: \"/api/sign-up\",\n        filename: \"route\",\n        bundlePath: \"app/api/sign-up/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Mian ahmer\\\\Desktop\\\\mystryMessage\\\\src\\\\app\\\\api\\\\sign-up\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Mian_ahmer_Desktop_mystryMessage_src_app_api_sign_up_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/sign-up/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzaWduLXVwJTJGcm91dGUmcGFnZT0lMkZhcGklMkZzaWduLXVwJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc2lnbi11cCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNNaWFuJTIwYWhtZXIlNUNEZXNrdG9wJTVDbXlzdHJ5TWVzc2FnZSU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDTWlhbiUyMGFobWVyJTVDRGVza3RvcCU1Q215c3RyeU1lc3NhZ2UmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDK0I7QUFDNUc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYS8/Y2Y0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxNaWFuIGFobWVyXFxcXERlc2t0b3BcXFxcbXlzdHJ5TWVzc2FnZVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxzaWduLXVwXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9zaWduLXVwL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvc2lnbi11cFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc2lnbi11cC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXE1pYW4gYWhtZXJcXFxcRGVza3RvcFxcXFxteXN0cnlNZXNzYWdlXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHNpZ24tdXBcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvc2lnbi11cC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsign-up%2Froute&page=%2Fapi%2Fsign-up%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsign-up%2Froute.ts&appDir=C%3A%5CUsers%5CMian%20ahmer%5CDesktop%5CmystryMessage%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMian%20ahmer%5CDesktop%5CmystryMessage&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/sign-up/route.ts":
/*!**************************************!*\
  !*** ./src/app/api/sign-up/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/model/User */ \"(rsc)/./src/model/User.ts\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_dbConnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/dbConnect */ \"(rsc)/./src/lib/dbConnect.ts\");\n/* harmony import */ var _lib_sendMail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/sendMail */ \"(rsc)/./src/lib/sendMail.ts\");\n\n\n\n\nasync function POST(request) {\n    await (0,_lib_dbConnect__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    try {\n        const { username, email, password } = await request.json();\n        const existingUserVerifiedByUsername = await _model_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n            username,\n            isVerified: true\n        });\n        if (existingUserVerifiedByUsername) {\n            return Response.json({\n                success: false,\n                message: \"Username is already taken\"\n            }, {\n                status: 400\n            });\n        }\n        const existingUserByEmail = await _model_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n            email\n        });\n        const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();\n        if (existingUserByEmail) {\n            if (existingUserByEmail.isVerified) {\n                return Response.json({\n                    success: false,\n                    message: \"User already exist with this email\"\n                }, {\n                    status: 404\n                });\n            } else {\n                const hashedPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().hash(password, 10);\n                const expiryDate = new Date();\n                expiryDate.setHours(expiryDate.getHours() + 1);\n                existingUserByEmail.password = hashedPassword;\n                existingUserByEmail.verifyCode = verifyCode;\n                existingUserByEmail.verifyCodeExpiry = expiryDate;\n                await existingUserByEmail.save();\n            }\n        } else {\n            const hashedPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().hash(password, 10);\n            const expiryDate = new Date();\n            expiryDate.setHours(expiryDate.getHours() + 1);\n            const newUser = new _model_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n                email,\n                username,\n                password: hashedPassword,\n                verifyCode,\n                verifyCodeExpiry: expiryDate,\n                messages: []\n            });\n            await newUser.save();\n        }\n        // Send verification email\n        try {\n            await (0,_lib_sendMail__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n                email: email || null,\n                subject: \"Activate your Account\",\n                template: \"activation-email.ejs\",\n                verifyCode\n            });\n        } catch (error) {\n            console.error(\"Error rendering email template:\", error);\n        }\n        return Response.json({\n            success: true,\n            message: \"User registered successfully.Please verify your email\"\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Error registering Error\", error);\n        return Response.json({\n            success: false,\n            message: \"Error registering User\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zaWduLXVwL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFxQztBQUNSO0FBQ1c7QUFDRjtBQUcvQixlQUFlSSxLQUFLQyxPQUFnQjtJQUN2QyxNQUFNSCwwREFBU0E7SUFDZixJQUFJO1FBRUEsTUFBTSxFQUFFSSxRQUFRLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQUcsTUFBTUgsUUFBUUksSUFBSTtRQUV4RCxNQUFNQyxpQ0FBaUMsTUFBTVYsbURBQVNBLENBQUNXLE9BQU8sQ0FBQztZQUMzREw7WUFDQU0sWUFBWTtRQUNoQjtRQUVBLElBQUlGLGdDQUFnQztZQUNoQyxPQUFPRyxTQUFTSixJQUFJLENBQUM7Z0JBQ2pCSyxTQUFTO2dCQUNUQyxTQUFTO1lBQ2IsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3JCO1FBRUEsTUFBTUMsc0JBQXNCLE1BQU1qQixtREFBU0EsQ0FBQ1csT0FBTyxDQUFDO1lBQ2hESjtRQUNKO1FBRUEsTUFBTVcsYUFBYUMsS0FBS0MsS0FBSyxDQUFDLFNBQVNELEtBQUtFLE1BQU0sS0FBSyxRQUFRQyxRQUFRO1FBRXZFLElBQUlMLHFCQUFxQjtZQUNyQixJQUFJQSxvQkFBb0JMLFVBQVUsRUFBRTtnQkFDaEMsT0FBT0MsU0FBU0osSUFBSSxDQUFDO29CQUNqQkssU0FBUztvQkFDVEMsU0FBUztnQkFDYixHQUFHO29CQUFFQyxRQUFRO2dCQUFJO1lBQ3JCLE9BQU87Z0JBQ0gsTUFBTU8saUJBQWlCLE1BQU10QixvREFBVyxDQUFDTyxVQUFVO2dCQUNuRCxNQUFNaUIsYUFBYSxJQUFJQztnQkFDdkJELFdBQVdFLFFBQVEsQ0FBQ0YsV0FBV0csUUFBUSxLQUFLO2dCQUU1Q1gsb0JBQW9CVCxRQUFRLEdBQUdlO2dCQUMvQk4sb0JBQW9CQyxVQUFVLEdBQUdBO2dCQUNqQ0Qsb0JBQW9CWSxnQkFBZ0IsR0FBR0o7Z0JBRXZDLE1BQU1SLG9CQUFvQmEsSUFBSTtZQUNsQztRQUNKLE9BQU87WUFDSCxNQUFNUCxpQkFBaUIsTUFBTXRCLG9EQUFXLENBQUNPLFVBQVU7WUFDbkQsTUFBTWlCLGFBQWEsSUFBSUM7WUFFdkJELFdBQVdFLFFBQVEsQ0FBQ0YsV0FBV0csUUFBUSxLQUFLO1lBRTVDLE1BQU1HLFVBQVUsSUFBSS9CLG1EQUFTQSxDQUFDO2dCQUMxQk87Z0JBQ0FEO2dCQUNBRSxVQUFVZTtnQkFDVkw7Z0JBQ0FXLGtCQUFrQko7Z0JBQ2xCTyxVQUFVLEVBQUU7WUFFaEI7WUFFQSxNQUFNRCxRQUFRRCxJQUFJO1FBQ3RCO1FBR0EsMEJBQTBCO1FBQzFCLElBQUk7WUFDQSxNQUFNM0IseURBQVFBLENBQUM7Z0JBQ2ZJLE9BQU9BLFNBQVM7Z0JBQ2hCMEIsU0FBUztnQkFDVEMsVUFBVTtnQkFDVmhCO1lBQ0o7UUFDQSxFQUFFLE9BQU9pQixPQUFPO1lBRVJDLFFBQVFELEtBQUssQ0FBQyxtQ0FBbUNBO1FBRXpEO1FBR0EsT0FBT3RCLFNBQVNKLElBQUksQ0FBQztZQUNqQkssU0FBUztZQUNUQyxTQUFTO1FBQ2IsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFHckIsRUFBRSxPQUFPbUIsT0FBTztRQUNaQyxRQUFRRCxLQUFLLENBQUMsMkJBQTJCQTtRQUV6QyxPQUFPdEIsU0FBU0osSUFBSSxDQUFDO1lBQ2pCSyxTQUFTO1lBQ1RDLFNBQVM7UUFDYixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNyQjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWEvLi9zcmMvYXBwL2FwaS9zaWduLXVwL3JvdXRlLnRzP2QzMzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZXJNb2RlbCBmcm9tIFwiQC9tb2RlbC9Vc2VyXCI7XHJcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnXHJcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIkAvbGliL2RiQ29ubmVjdFwiO1xyXG5pbXBvcnQgc2VuZE1haWwgZnJvbSBcIkAvbGliL3NlbmRNYWlsXCI7XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogUmVxdWVzdCkge1xyXG4gICAgYXdhaXQgZGJDb25uZWN0KClcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgdXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCB9ID0gYXdhaXQgcmVxdWVzdC5qc29uKClcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nVXNlclZlcmlmaWVkQnlVc2VybmFtZSA9IGF3YWl0IHVzZXJNb2RlbC5maW5kT25lKHtcclxuICAgICAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgICAgIGlzVmVyaWZpZWQ6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgICAgaWYgKGV4aXN0aW5nVXNlclZlcmlmaWVkQnlVc2VybmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gUmVzcG9uc2UuanNvbih7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdVc2VybmFtZSBpcyBhbHJlYWR5IHRha2VuJ1xyXG4gICAgICAgICAgICB9LCB7IHN0YXR1czogNDAwIH0pXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgZXhpc3RpbmdVc2VyQnlFbWFpbCA9IGF3YWl0IHVzZXJNb2RlbC5maW5kT25lKHtcclxuICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgfSlcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHZlcmlmeUNvZGUgPSBNYXRoLmZsb29yKDEwMDAwMCArIE1hdGgucmFuZG9tKCkgKiA5MDAwMDApLnRvU3RyaW5nKClcclxuICAgIFxyXG4gICAgICAgIGlmIChleGlzdGluZ1VzZXJCeUVtYWlsKSB7XHJcbiAgICAgICAgICAgIGlmIChleGlzdGluZ1VzZXJCeUVtYWlsLmlzVmVyaWZpZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBSZXNwb25zZS5qc29uKHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVXNlciBhbHJlYWR5IGV4aXN0IHdpdGggdGhpcyBlbWFpbCdcclxuICAgICAgICAgICAgICAgIH0sIHsgc3RhdHVzOiA0MDQgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDEwKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZXhwaXJ5RGF0ZSA9IG5ldyBEYXRlKClcclxuICAgICAgICAgICAgICAgIGV4cGlyeURhdGUuc2V0SG91cnMoZXhwaXJ5RGF0ZS5nZXRIb3VycygpICsgMSlcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgZXhpc3RpbmdVc2VyQnlFbWFpbC5wYXNzd29yZCA9IGhhc2hlZFBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICBleGlzdGluZ1VzZXJCeUVtYWlsLnZlcmlmeUNvZGUgPSB2ZXJpZnlDb2RlXHJcbiAgICAgICAgICAgICAgICBleGlzdGluZ1VzZXJCeUVtYWlsLnZlcmlmeUNvZGVFeHBpcnkgPSBleHBpcnlEYXRlXHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGF3YWl0IGV4aXN0aW5nVXNlckJ5RW1haWwuc2F2ZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMClcclxuICAgICAgICAgICAgY29uc3QgZXhwaXJ5RGF0ZSA9IG5ldyBEYXRlKClcclxuICAgIFxyXG4gICAgICAgICAgICBleHBpcnlEYXRlLnNldEhvdXJzKGV4cGlyeURhdGUuZ2V0SG91cnMoKSArIDEpXHJcbiAgICBcclxuICAgICAgICAgICAgY29uc3QgbmV3VXNlciA9IG5ldyB1c2VyTW9kZWwoe1xyXG4gICAgICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZCxcclxuICAgICAgICAgICAgICAgIHZlcmlmeUNvZGUsXHJcbiAgICAgICAgICAgICAgICB2ZXJpZnlDb2RlRXhwaXJ5OiBleHBpcnlEYXRlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IFtdXHJcbiAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgIFxyXG4gICAgICAgICAgICBhd2FpdCBuZXdVc2VyLnNhdmUoKVxyXG4gICAgICAgIH1cclxuICAgIFxyXG5cclxuICAgICAgICAvLyBTZW5kIHZlcmlmaWNhdGlvbiBlbWFpbFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHNlbmRNYWlsKHtcclxuICAgICAgICAgICAgZW1haWw6IGVtYWlsIHx8IG51bGwsXHJcbiAgICAgICAgICAgIHN1YmplY3Q6IFwiQWN0aXZhdGUgeW91ciBBY2NvdW50XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiBcImFjdGl2YXRpb24tZW1haWwuZWpzXCIsXHJcbiAgICAgICAgICAgIHZlcmlmeUNvZGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZW5kZXJpbmcgZW1haWwgdGVtcGxhdGU6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHJldHVybiBSZXNwb25zZS5qc29uKHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ1VzZXIgcmVnaXN0ZXJlZCBzdWNjZXNzZnVsbHkuUGxlYXNlIHZlcmlmeSB5b3VyIGVtYWlsJ1xyXG4gICAgICAgIH0sIHsgc3RhdHVzOiAyMDAgfSlcclxuICAgIFxyXG4gICAgXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJlZ2lzdGVyaW5nIEVycm9yJywgZXJyb3IpXHJcbiAgICBcclxuICAgICAgICByZXR1cm4gUmVzcG9uc2UuanNvbih7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnRXJyb3IgcmVnaXN0ZXJpbmcgVXNlcidcclxuICAgICAgICB9LCB7IHN0YXR1czogNTAwIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXSwibmFtZXMiOlsidXNlck1vZGVsIiwiYmNyeXB0IiwiZGJDb25uZWN0Iiwic2VuZE1haWwiLCJQT1NUIiwicmVxdWVzdCIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImpzb24iLCJleGlzdGluZ1VzZXJWZXJpZmllZEJ5VXNlcm5hbWUiLCJmaW5kT25lIiwiaXNWZXJpZmllZCIsIlJlc3BvbnNlIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJleGlzdGluZ1VzZXJCeUVtYWlsIiwidmVyaWZ5Q29kZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwiaGFzaGVkUGFzc3dvcmQiLCJoYXNoIiwiZXhwaXJ5RGF0ZSIsIkRhdGUiLCJzZXRIb3VycyIsImdldEhvdXJzIiwidmVyaWZ5Q29kZUV4cGlyeSIsInNhdmUiLCJuZXdVc2VyIiwibWVzc2FnZXMiLCJzdWJqZWN0IiwidGVtcGxhdGUiLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/sign-up/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/dbConnect.ts":
/*!******************************!*\
  !*** ./src/lib/dbConnect.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\nasync function dbConnect() {\n    if (connection.isConnected) {\n        console.log(\"Already connected to database\");\n        return;\n    }\n    try {\n        const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);\n        connection.isConnected = db.connections[0].readyState;\n        console.log(\"DB Connected Sucessfully\");\n    } catch (error) {\n        console.log(\"Database Connection  failed\", error);\n        process.exit(1);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiQ29ubmVjdC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFPaEMsTUFBTUMsYUFBK0IsQ0FBQztBQUV0QyxlQUFlQztJQUNYLElBQUlELFdBQVdFLFdBQVcsRUFBRTtRQUN4QkMsUUFBUUMsR0FBRyxDQUFDO1FBQ1o7SUFDSjtJQUVBLElBQUk7UUFFQSxNQUFNQyxLQUFLLE1BQU1OLHVEQUFnQixDQUFDUSxRQUFRQyxHQUFHLENBQUNDLFdBQVc7UUFFekRULFdBQVdFLFdBQVcsR0FBR0csR0FBR0ssV0FBVyxDQUFDLEVBQUUsQ0FBQ0MsVUFBVTtRQUVyRFIsUUFBUUMsR0FBRyxDQUFDO0lBRWhCLEVBQUUsT0FBT1EsT0FBTztRQUVaVCxRQUFRQyxHQUFHLENBQUMsK0JBQStCUTtRQUUzQ0wsUUFBUU0sSUFBSSxDQUFDO0lBQ2pCO0FBQ0o7QUFHQSxpRUFBZVosU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FhLy4vc3JjL2xpYi9kYkNvbm5lY3QudHM/NjBhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG50eXBlIENvbm5lY3Rpb25PYmplY3QgPSB7XHJcbiAgICBpc0Nvbm5lY3RlZD86IG51bWJlclxyXG59XHJcblxyXG5cclxuY29uc3QgY29ubmVjdGlvbjogQ29ubmVjdGlvbk9iamVjdCA9IHt9XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBbHJlYWR5IGNvbm5lY3RlZCB0byBkYXRhYmFzZScpO1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJISlcclxuXHJcbiAgICAgICAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IGRiLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGVcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RCIENvbm5lY3RlZCBTdWNlc3NmdWxseScpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdEYXRhYmFzZSBDb25uZWN0aW9uICBmYWlsZWQnLCBlcnJvcik7XHJcblxyXG4gICAgICAgIHByb2Nlc3MuZXhpdCgxKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdGlvbiIsImRiQ29ubmVjdCIsImlzQ29ubmVjdGVkIiwiY29uc29sZSIsImxvZyIsImRiIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImVycm9yIiwiZXhpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/dbConnect.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/sendMail.ts":
/*!*****************************!*\
  !*** ./src/lib/sendMail.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n(__webpack_require__(/*! dotenv */ \"(rsc)/./node_modules/dotenv/lib/main.js\").config)();\n\nconst sendMail = async (options)=>{\n    const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0__.createTransport({\n        host: process.env.SMTP_HOST,\n        port: parseInt(process.env.SMTP_PORT || \"587\"),\n        service: process.env.SMTP_SERVICE,\n        auth: {\n            user: process.env.SMTP_MAIL,\n            pass: process.env.SMTP_PASSWORD\n        }\n    });\n    const { email, subject, verifyCode } = options;\n    // template path for mail\n    try {\n        const html = `\r\n          <html>\r\n            <body>\r\n              <h1>Mystery Message Verification Code</h1>\r\n              <p>Your verification code is: ${verifyCode}</p>\r\n            </body>\r\n          </html>\r\n        `;\n        const mailOptions = {\n            from: process.env.SMTP_MAIL,\n            to: email,\n            subject,\n            html\n        };\n        await transporter.sendMail(mailOptions);\n    } catch (error) {\n        console.error(\"Error sending email:\", error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendMail);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3NlbmRNYWlsLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUFBLHFGQUF3QjtBQUM0QjtBQVdwRCxNQUFNRyxXQUFXLE9BQU9DO0lBQ3BCLE1BQU1DLGNBQTJCSCx1REFBMEIsQ0FBQztRQUN4REssTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxTQUFTO1FBQzNCQyxNQUFNQyxTQUFTSixRQUFRQyxHQUFHLENBQUNJLFNBQVMsSUFBSTtRQUN4Q0MsU0FBU04sUUFBUUMsR0FBRyxDQUFDTSxZQUFZO1FBQ2pDQyxNQUFNO1lBQ0ZDLE1BQU1ULFFBQVFDLEdBQUcsQ0FBQ1MsU0FBUztZQUMzQkMsTUFBTVgsUUFBUUMsR0FBRyxDQUFDVyxhQUFhO1FBQ25DO0lBQ0o7SUFFQSxNQUFNLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUUsR0FBR25CO0lBRXZDLHlCQUF5QjtJQUV6QixJQUFJO1FBQ0EsTUFBTW9CLE9BQU8sQ0FBQzs7Ozs0Q0FJc0IsRUFBRUQsV0FBVzs7O1FBR2pELENBQUM7UUFFRCxNQUFNRSxjQUFjO1lBQ2hCQyxNQUFNbEIsUUFBUUMsR0FBRyxDQUFDUyxTQUFTO1lBQzNCUyxJQUFJTjtZQUNKQztZQUNBRTtRQUNKO1FBRUEsTUFBTW5CLFlBQVlGLFFBQVEsQ0FBQ3NCO0lBQy9CLEVBQUUsT0FBT0csT0FBTztRQUNaQyxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtJQUMxQztBQUNKO0FBRUEsaUVBQWV6QixRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWEvLi9zcmMvbGliL3NlbmRNYWlsLnRzPzkyOWQiXSwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnZG90ZW52JykuY29uZmlnKClcclxuaW1wb3J0IG5vZGVNYWlsZXIsIHsgVHJhbnNwb3J0ZXIgfSBmcm9tICdub2RlbWFpbGVyJ1xyXG5cclxuXHJcbmludGVyZmFjZSBFbWFpbE9wdGlvbnMge1xyXG4gICAgZW1haWw6IHN0cmluZyxcclxuICAgIHN1YmplY3Q6IHN0cmluZyxcclxuICAgIHRlbXBsYXRlOiBzdHJpbmcsXHJcbiAgICB2ZXJpZnlDb2RlOiBzdHJpbmdcclxufVxyXG5cclxuXHJcbmNvbnN0IHNlbmRNYWlsID0gYXN5bmMgKG9wdGlvbnM6IEVtYWlsT3B0aW9ucyk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgY29uc3QgdHJhbnNwb3J0ZXI6IFRyYW5zcG9ydGVyID0gbm9kZU1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xyXG4gICAgICAgIGhvc3Q6IHByb2Nlc3MuZW52LlNNVFBfSE9TVCxcclxuICAgICAgICBwb3J0OiBwYXJzZUludChwcm9jZXNzLmVudi5TTVRQX1BPUlQgfHwgJzU4NycpLFxyXG4gICAgICAgIHNlcnZpY2U6IHByb2Nlc3MuZW52LlNNVFBfU0VSVklDRSxcclxuICAgICAgICBhdXRoOiB7XHJcbiAgICAgICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LlNNVFBfTUFJTCxcclxuICAgICAgICAgICAgcGFzczogcHJvY2Vzcy5lbnYuU01UUF9QQVNTV09SRFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgeyBlbWFpbCwgc3ViamVjdCwgdmVyaWZ5Q29kZSB9ID0gb3B0aW9ucztcclxuXHJcbiAgICAvLyB0ZW1wbGF0ZSBwYXRoIGZvciBtYWlsXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBodG1sID0gYFxyXG4gICAgICAgICAgPGh0bWw+XHJcbiAgICAgICAgICAgIDxib2R5PlxyXG4gICAgICAgICAgICAgIDxoMT5NeXN0ZXJ5IE1lc3NhZ2UgVmVyaWZpY2F0aW9uIENvZGU8L2gxPlxyXG4gICAgICAgICAgICAgIDxwPllvdXIgdmVyaWZpY2F0aW9uIGNvZGUgaXM6ICR7dmVyaWZ5Q29kZX08L3A+XHJcbiAgICAgICAgICAgIDwvYm9keT5cclxuICAgICAgICAgIDwvaHRtbD5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICBjb25zdCBtYWlsT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgZnJvbTogcHJvY2Vzcy5lbnYuU01UUF9NQUlMLFxyXG4gICAgICAgICAgICB0bzogZW1haWwsXHJcbiAgICAgICAgICAgIHN1YmplY3QsXHJcbiAgICAgICAgICAgIGh0bWxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhd2FpdCB0cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsT3B0aW9ucyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNlbmRpbmcgZW1haWw6JywgZXJyb3IpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VuZE1haWw7Il0sIm5hbWVzIjpbInJlcXVpcmUiLCJjb25maWciLCJub2RlTWFpbGVyIiwic2VuZE1haWwiLCJvcHRpb25zIiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJob3N0IiwicHJvY2VzcyIsImVudiIsIlNNVFBfSE9TVCIsInBvcnQiLCJwYXJzZUludCIsIlNNVFBfUE9SVCIsInNlcnZpY2UiLCJTTVRQX1NFUlZJQ0UiLCJhdXRoIiwidXNlciIsIlNNVFBfTUFJTCIsInBhc3MiLCJTTVRQX1BBU1NXT1JEIiwiZW1haWwiLCJzdWJqZWN0IiwidmVyaWZ5Q29kZSIsImh0bWwiLCJtYWlsT3B0aW9ucyIsImZyb20iLCJ0byIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/sendMail.ts\n");

/***/ }),

/***/ "(rsc)/./src/model/User.ts":
/*!***************************!*\
  !*** ./src/model/User.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst messageSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    content: {\n        type: String,\n        required: true\n    },\n    createdAt: {\n        type: Date,\n        required: true,\n        default: Date.now\n    }\n});\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    username: {\n        type: String,\n        required: [\n            true,\n            \"Please provide me  a username\"\n        ],\n        unique: true,\n        trim: true\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Please provide me  a email\"\n        ],\n        unique: true,\n        match: [\n            /^[\\w-]+(\\.[\\w-]+)*@([\\w-]+\\.)+[a-zA-Z]{2,7}$/,\n            \"Please provide me  a valid email address\"\n        ]\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Please provide me  a password\"\n        ],\n        unique: true\n    },\n    verifyCode: {\n        type: String\n    },\n    verifyCodeExpiry: {\n        type: Date\n    },\n    isVerified: {\n        type: Boolean,\n        default: false\n    },\n    isAcceptingMessage: {\n        type: Boolean,\n        default: true\n    },\n    messages: [\n        messageSchema\n    ]\n});\nconst userModel = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWwvVXNlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0Q7QUFPdEQsTUFBTUUsZ0JBQWlDLElBQUlELDRDQUFNQSxDQUFDO0lBQzlDRSxTQUFTO1FBQ0xDLE1BQU1DO1FBQ05DLFVBQVU7SUFDZDtJQUNBQyxXQUFXO1FBQ1BILE1BQU1JO1FBQ05GLFVBQVU7UUFDVkcsU0FBU0QsS0FBS0UsR0FBRztJQUNyQjtBQUNKO0FBZUEsTUFBTUMsYUFBMkIsSUFBSVYsNENBQU1BLENBQUM7SUFDeENXLFVBQVU7UUFDTlIsTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBZ0M7UUFDakRPLFFBQVE7UUFDUkMsTUFBTTtJQUNWO0lBQ0FDLE9BQU87UUFDSFgsTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBNkI7UUFDOUNPLFFBQVE7UUFDUkcsT0FBTztZQUFDO1lBQWdEO1NBQTJDO0lBQ3ZHO0lBQ0FDLFVBQVU7UUFDTmIsTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBZ0M7UUFDakRPLFFBQVE7SUFDWjtJQUNBSyxZQUFZO1FBQ1JkLE1BQU1DO0lBQ1Y7SUFDQWMsa0JBQWtCO1FBQ2RmLE1BQU1JO0lBQ1Y7SUFDQVksWUFBWTtRQUNSaEIsTUFBTWlCO1FBQ05aLFNBQVM7SUFDYjtJQUNBYSxvQkFBbUI7UUFDZmxCLE1BQU1pQjtRQUNOWixTQUFTO0lBQ2I7SUFDQWMsVUFBUztRQUFDckI7S0FBYztBQUM1QjtBQUdBLE1BQU1zQixZQUFVLHdEQUFnQixDQUFDRSxJQUFJLElBQTZCMUIscURBQWMsQ0FBTyxRQUFPVztBQUc5RixpRUFBZWEsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FhLy4vc3JjL21vZGVsL1VzZXIudHM/YTZjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hLCBEb2N1bWVudCB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlIGV4dGVuZHMgRG9jdW1lbnQge1xyXG4gICAgY29udGVudDogc3RyaW5nXHJcbiAgICBjcmVhdGVkQXQ6IERhdGVcclxufVxyXG5cclxuY29uc3QgbWVzc2FnZVNjaGVtYTogU2NoZW1hPE1lc3NhZ2U+ID0gbmV3IFNjaGVtYSh7XHJcbiAgICBjb250ZW50OiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZEF0OiB7XHJcbiAgICAgICAgdHlwZTogRGF0ZSxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICBkZWZhdWx0OiBEYXRlLm5vd1xyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlciBleHRlbmRzIERvY3VtZW50IHtcclxuICAgIHVzZXJuYW1lOiBzdHJpbmdcclxuICAgIGVtYWlsOiBzdHJpbmdcclxuICAgIHBhc3N3b3JkOiBzdHJpbmcsXHJcbiAgICB2ZXJpZnlDb2RlOiBzdHJpbmcsXHJcbiAgICB2ZXJpZnlDb2RlRXhwaXJ5OiBEYXRlLFxyXG4gICAgaXNBY2NlcHRpbmdNZXNzYWdlOiBib29sZWFuLFxyXG4gICAgaXNWZXJpZmllZDogYm9vbGVhbixcclxuICAgIG1lc3NhZ2VzOiBNZXNzYWdlW11cclxufVxyXG5cclxuXHJcbmNvbnN0IHVzZXJTY2hlbWE6IFNjaGVtYTxVc2VyPiA9IG5ldyBTY2hlbWEoe1xyXG4gICAgdXNlcm5hbWU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCAnUGxlYXNlIHByb3ZpZGUgbWUgIGEgdXNlcm5hbWUnXSxcclxuICAgICAgICB1bmlxdWU6IHRydWUsXHJcbiAgICAgICAgdHJpbTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGVtYWlsOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ1BsZWFzZSBwcm92aWRlIG1lICBhIGVtYWlsJ10sXHJcbiAgICAgICAgdW5pcXVlOiB0cnVlLFxyXG4gICAgICAgIG1hdGNoOiBbL15bXFx3LV0rKFxcLltcXHctXSspKkAoW1xcdy1dK1xcLikrW2EtekEtWl17Miw3fSQvLCAnUGxlYXNlIHByb3ZpZGUgbWUgIGEgdmFsaWQgZW1haWwgYWRkcmVzcyddXHJcbiAgICB9LFxyXG4gICAgcGFzc3dvcmQ6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCAnUGxlYXNlIHByb3ZpZGUgbWUgIGEgcGFzc3dvcmQnXSxcclxuICAgICAgICB1bmlxdWU6IHRydWVcclxuICAgIH0sXHJcbiAgICB2ZXJpZnlDb2RlOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgfSxcclxuICAgIHZlcmlmeUNvZGVFeHBpcnk6IHtcclxuICAgICAgICB0eXBlOiBEYXRlXHJcbiAgICB9LFxyXG4gICAgaXNWZXJpZmllZDoge1xyXG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBpc0FjY2VwdGluZ01lc3NhZ2U6e1xyXG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgZGVmYXVsdDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIG1lc3NhZ2VzOlttZXNzYWdlU2NoZW1hXVxyXG59KVxyXG5cclxuXHJcbmNvbnN0IHVzZXJNb2RlbD0obW9uZ29vc2UubW9kZWxzLlVzZXIgYXMgbW9uZ29vc2UuTW9kZWw8VXNlcj4pIHx8IG1vbmdvb3NlLm1vZGVsPFVzZXI+KFwiVXNlclwiLHVzZXJTY2hlbWEpXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlck1vZGVsIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwibWVzc2FnZVNjaGVtYSIsImNvbnRlbnQiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJjcmVhdGVkQXQiLCJEYXRlIiwiZGVmYXVsdCIsIm5vdyIsInVzZXJTY2hlbWEiLCJ1c2VybmFtZSIsInVuaXF1ZSIsInRyaW0iLCJlbWFpbCIsIm1hdGNoIiwicGFzc3dvcmQiLCJ2ZXJpZnlDb2RlIiwidmVyaWZ5Q29kZUV4cGlyeSIsImlzVmVyaWZpZWQiLCJCb29sZWFuIiwiaXNBY2NlcHRpbmdNZXNzYWdlIiwibWVzc2FnZXMiLCJ1c2VyTW9kZWwiLCJtb2RlbHMiLCJVc2VyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/model/User.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/nodemailer","vendor-chunks/dotenv","vendor-chunks/bcryptjs"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsign-up%2Froute&page=%2Fapi%2Fsign-up%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsign-up%2Froute.ts&appDir=C%3A%5CUsers%5CMian%20ahmer%5CDesktop%5CmystryMessage%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMian%20ahmer%5CDesktop%5CmystryMessage&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();