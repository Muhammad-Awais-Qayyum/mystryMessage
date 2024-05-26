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
exports.id = "app/api/get-messages/route";
exports.ids = ["app/api/get-messages/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

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

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fget-messages%2Froute&page=%2Fapi%2Fget-messages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fget-messages%2Froute.ts&appDir=C%3A%5CUsers%5CMian%20ahmer%5CDesktop%5CmystryMessage%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMian%20ahmer%5CDesktop%5CmystryMessage&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fget-messages%2Froute&page=%2Fapi%2Fget-messages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fget-messages%2Froute.ts&appDir=C%3A%5CUsers%5CMian%20ahmer%5CDesktop%5CmystryMessage%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMian%20ahmer%5CDesktop%5CmystryMessage&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Mian_ahmer_Desktop_mystryMessage_src_app_api_get_messages_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/get-messages/route.ts */ \"(rsc)/./src/app/api/get-messages/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/get-messages/route\",\n        pathname: \"/api/get-messages\",\n        filename: \"route\",\n        bundlePath: \"app/api/get-messages/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Mian ahmer\\\\Desktop\\\\mystryMessage\\\\src\\\\app\\\\api\\\\get-messages\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Mian_ahmer_Desktop_mystryMessage_src_app_api_get_messages_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/get-messages/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZnZXQtbWVzc2FnZXMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmdldC1tZXNzYWdlcyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmdldC1tZXNzYWdlcyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNNaWFuJTIwYWhtZXIlNUNEZXNrdG9wJTVDbXlzdHJ5TWVzc2FnZSU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDTWlhbiUyMGFobWVyJTVDRGVza3RvcCU1Q215c3RyeU1lc3NhZ2UmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDb0M7QUFDakg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYS8/ZDNlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxNaWFuIGFobWVyXFxcXERlc2t0b3BcXFxcbXlzdHJ5TWVzc2FnZVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxnZXQtbWVzc2FnZXNcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2dldC1tZXNzYWdlcy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2dldC1tZXNzYWdlc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZ2V0LW1lc3NhZ2VzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcTWlhbiBhaG1lclxcXFxEZXNrdG9wXFxcXG15c3RyeU1lc3NhZ2VcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcZ2V0LW1lc3NhZ2VzXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2dldC1tZXNzYWdlcy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fget-messages%2Froute&page=%2Fapi%2Fget-messages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fget-messages%2Froute.ts&appDir=C%3A%5CUsers%5CMian%20ahmer%5CDesktop%5CmystryMessage%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMian%20ahmer%5CDesktop%5CmystryMessage&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/options.ts":
/*!***************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/options.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_dbConnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/dbConnect */ \"(rsc)/./src/lib/dbConnect.ts\");\n/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/model/User */ \"(rsc)/./src/model/User.ts\");\n\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            id: \"credentials\",\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                await (0,_lib_dbConnect__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n                try {\n                    const user = await _model_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n                        $or: [\n                            {\n                                email: credentials.identifier\n                            },\n                            {\n                                username: credentials.identifier\n                            }\n                        ]\n                    });\n                    if (!user) {\n                        throw new Error(\"No user found with this email\");\n                    }\n                    if (!user.isVerified) {\n                        throw new Error(\"Please Verify your account before login\");\n                    }\n                    const isPasswordCorrect = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(credentials.password, user.password);\n                    if (isPasswordCorrect) {\n                        return user;\n                    } else {\n                        throw new Error(\"Incorrect Password\");\n                    }\n                } catch (error) {\n                    throw new Error(error);\n                }\n            }\n        })\n    ],\n    callbacks: {\n        async session ({ session, token }) {\n            if (token) {\n                session.user._id = token._id;\n                session.user.isVerified = token.isVerified;\n                session.user.isAcceptingMessage = token.isAcceptingMessage;\n                session.user.username = token.username;\n            }\n            return session;\n        },\n        async jwt ({ token, user }) {\n            if (user) {\n                token._id = user._id?.toString();\n                token.isVerified = user.isVerified;\n                token.isAcceptingMessage = user.isAcceptingMessage;\n                token.username = user.username;\n            }\n            return token;\n        }\n    },\n    pages: {\n        signIn: \"/sign-in\"\n    },\n    session: {\n        strategy: \"jwt\"\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vb3B0aW9ucy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDa0U7QUFDckM7QUFDVztBQUNIO0FBSTlCLE1BQU1JLGNBQStCO0lBQ3hDQyxXQUFXO1FBQ1BMLDJFQUFtQkEsQ0FBQztZQUNoQk0sSUFBSTtZQUNKQyxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1RDLE9BQU87b0JBQUVDLE9BQU87b0JBQVNDLE1BQU07Z0JBQVE7Z0JBQ3ZDQyxVQUFVO29CQUFFRixPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ3BEO1lBQ0EsTUFBTUUsV0FBVUwsV0FBZ0I7Z0JBQzVCLE1BQU1OLDBEQUFTQTtnQkFDZixJQUFJO29CQUNBLE1BQU1ZLE9BQU8sTUFBTVgsbURBQVNBLENBQUNZLE9BQU8sQ0FBQzt3QkFDakNDLEtBQUs7NEJBQ0Q7Z0NBQ0lQLE9BQU9ELFlBQVlTLFVBQVU7NEJBQ2pDOzRCQUNBO2dDQUNJQyxVQUFVVixZQUFZUyxVQUFVOzRCQUNwQzt5QkFDSDtvQkFDTDtvQkFFQSxJQUFJLENBQUNILE1BQU07d0JBQ1AsTUFBTSxJQUFJSyxNQUFNO29CQUNwQjtvQkFDQSxJQUFJLENBQUNMLEtBQUtNLFVBQVUsRUFBRTt3QkFDbEIsTUFBTSxJQUFJRCxNQUFNO29CQUVwQjtvQkFFQSxNQUFNRSxvQkFBb0IsTUFBTXBCLHVEQUFjLENBQUNPLFlBQVlJLFFBQVEsRUFBRUUsS0FBS0YsUUFBUTtvQkFFbEYsSUFBSVMsbUJBQW1CO3dCQUNuQixPQUFPUDtvQkFDWCxPQUNLO3dCQUNELE1BQU0sSUFBSUssTUFBTTtvQkFDcEI7Z0JBQ0osRUFBRSxPQUFPSSxPQUFZO29CQUNqQixNQUFNLElBQUlKLE1BQU1JO2dCQUNwQjtZQUNKO1FBQ0o7S0FDSDtJQUNEQyxXQUFXO1FBQ1AsTUFBTUMsU0FBUSxFQUFFQSxPQUFPLEVBQUVDLEtBQUssRUFBRTtZQUM1QixJQUFJQSxPQUFPO2dCQUNQRCxRQUFRWCxJQUFJLENBQUNhLEdBQUcsR0FBR0QsTUFBTUMsR0FBRztnQkFDNUJGLFFBQVFYLElBQUksQ0FBQ00sVUFBVSxHQUFDTSxNQUFNTixVQUFVO2dCQUN4Q0ssUUFBUVgsSUFBSSxDQUFDYyxrQkFBa0IsR0FBQ0YsTUFBTUUsa0JBQWtCO2dCQUN4REgsUUFBUVgsSUFBSSxDQUFDSSxRQUFRLEdBQUNRLE1BQU1SLFFBQVE7WUFDeEM7WUFDQSxPQUFPTztRQUNYO1FBQ0EsTUFBTUksS0FBSSxFQUFFSCxLQUFLLEVBQUVaLElBQUksRUFBRTtZQUNyQixJQUFJQSxNQUFNO2dCQUNOWSxNQUFNQyxHQUFHLEdBQUdiLEtBQUthLEdBQUcsRUFBRUc7Z0JBQ3RCSixNQUFNTixVQUFVLEdBQUdOLEtBQUtNLFVBQVU7Z0JBQ2xDTSxNQUFNRSxrQkFBa0IsR0FBR2QsS0FBS2Msa0JBQWtCO2dCQUNsREYsTUFBTVIsUUFBUSxHQUFHSixLQUFLSSxRQUFRO1lBRWxDO1lBQ0EsT0FBT1E7UUFDWDtJQUNKO0lBQ0FLLE9BQU87UUFDSEMsUUFBUTtJQUNaO0lBQ0FQLFNBQVM7UUFDTFEsVUFBVTtJQUNkO0lBQ0FDLFFBQU9DLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtBQUV0QyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWEvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vb3B0aW9ucy50cz9hMmM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcclxuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcydcclxuaW1wb3J0IGRiQ29ubmVjdCBmcm9tIFwiQC9saWIvZGJDb25uZWN0XCI7XHJcbmltcG9ydCB1c2VyTW9kZWwgZnJvbSBcIkAvbW9kZWwvVXNlclwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICAgICAgICBpZDogJ2NyZWRlbnRpYWxzJyxcclxuICAgICAgICAgICAgbmFtZTogJ0NyZWRlbnRpYWxzJyxcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM6IHtcclxuICAgICAgICAgICAgICAgIGVtYWlsOiB7IGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwidGV4dFwiLCB9LFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgZGJDb25uZWN0KClcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJNb2RlbC5maW5kT25lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJG9yOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IGNyZWRlbnRpYWxzLmlkZW50aWZpZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IGNyZWRlbnRpYWxzLmlkZW50aWZpZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHVzZXIgZm91bmQgd2l0aCB0aGlzIGVtYWlsJylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF1c2VyLmlzVmVyaWZpZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgVmVyaWZ5IHlvdXIgYWNjb3VudCBiZWZvcmUgbG9naW4nKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzUGFzc3dvcmRDb3JyZWN0ID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUoY3JlZGVudGlhbHMucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1Bhc3N3b3JkQ29ycmVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXNlclxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmNvcnJlY3QgUGFzc3dvcmQnKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgXSxcclxuICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XHJcbiAgICAgICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICAgICAgc2Vzc2lvbi51c2VyLl9pZCA9IHRva2VuLl9pZFxyXG4gICAgICAgICAgICAgICAgc2Vzc2lvbi51c2VyLmlzVmVyaWZpZWQ9dG9rZW4uaXNWZXJpZmllZFxyXG4gICAgICAgICAgICAgICAgc2Vzc2lvbi51c2VyLmlzQWNjZXB0aW5nTWVzc2FnZT10b2tlbi5pc0FjY2VwdGluZ01lc3NhZ2VcclxuICAgICAgICAgICAgICAgIHNlc3Npb24udXNlci51c2VybmFtZT10b2tlbi51c2VybmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzZXNzaW9uXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICB0b2tlbi5faWQgPSB1c2VyLl9pZD8udG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgdG9rZW4uaXNWZXJpZmllZCA9IHVzZXIuaXNWZXJpZmllZFxyXG4gICAgICAgICAgICAgICAgdG9rZW4uaXNBY2NlcHRpbmdNZXNzYWdlID0gdXNlci5pc0FjY2VwdGluZ01lc3NhZ2VcclxuICAgICAgICAgICAgICAgIHRva2VuLnVzZXJuYW1lID0gdXNlci51c2VybmFtZVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcGFnZXM6IHtcclxuICAgICAgICBzaWduSW46ICcvc2lnbi1pbidcclxuICAgIH0sXHJcbiAgICBzZXNzaW9uOiB7XHJcbiAgICAgICAgc3RyYXRlZ3k6ICdqd3QnXHJcbiAgICB9LFxyXG4gICAgc2VjcmV0OnByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVFxyXG5cclxufSJdLCJuYW1lcyI6WyJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYmNyeXB0IiwiZGJDb25uZWN0IiwidXNlck1vZGVsIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJpZCIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJ1c2VyIiwiZmluZE9uZSIsIiRvciIsImlkZW50aWZpZXIiLCJ1c2VybmFtZSIsIkVycm9yIiwiaXNWZXJpZmllZCIsImlzUGFzc3dvcmRDb3JyZWN0IiwiY29tcGFyZSIsImVycm9yIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInRva2VuIiwiX2lkIiwiaXNBY2NlcHRpbmdNZXNzYWdlIiwiand0IiwidG9TdHJpbmciLCJwYWdlcyIsInNpZ25JbiIsInN0cmF0ZWd5Iiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/options.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/get-messages/route.ts":
/*!*******************************************!*\
  !*** ./src/app/api/get-messages/route.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth_nextauth_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/[...nextauth]/options */ \"(rsc)/./src/app/api/auth/[...nextauth]/options.ts\");\n/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/model/User */ \"(rsc)/./src/model/User.ts\");\n/* harmony import */ var _lib_dbConnect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/dbConnect */ \"(rsc)/./src/lib/dbConnect.ts\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nasync function GET(requset) {\n    await (0,_lib_dbConnect__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(_auth_nextauth_options__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n    const user = session?.user;\n    if (!session || !session.user) {\n        return Response.json({\n            success: false,\n            message: \"Not Authenticated\"\n        }, {\n            status: 500\n        });\n    }\n    const userId = new (mongoose__WEBPACK_IMPORTED_MODULE_4___default().Types).ObjectId(user._id);\n    try {\n        const user = await _model_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].aggregate([\n            {\n                $match: {\n                    _id: userId\n                }\n            },\n            {\n                $unwind: \"$messages\"\n            },\n            {\n                $sort: {\n                    \"messages.createdAt\": -1\n                }\n            },\n            {\n                $group: {\n                    _id: \"$_id\",\n                    messages: {\n                        $push: \"$messages\"\n                    }\n                }\n            }\n        ]);\n        if (!user) {\n            return Response.json({\n                success: false,\n                message: \"User not Found\"\n            }, {\n                status: 500\n            });\n        }\n        if (user.length === 0) {\n            return Response.json({\n                success: false,\n                message: \"You have no message recieved\"\n            }, {\n                status: 500\n            });\n        }\n        return Response.json({\n            success: true,\n            messages: user[0].messages\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.log(\"Get message Error\", error);\n        return Response.json({\n            success: false,\n            message: \"Get message not found\"\n        }, {\n            status: 403\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9nZXQtbWVzc2FnZXMvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDUztBQUN2QjtBQUNHO0FBQ1I7QUFJekIsZUFBZUssSUFBSUMsT0FBZ0I7SUFDdEMsTUFBTUgsMERBQVNBO0lBRWYsTUFBTUksVUFBVSxNQUFNUCwyREFBZ0JBLENBQUNDLCtEQUFXQTtJQUVsRCxNQUFNTyxPQUFhRCxTQUFTQztJQUU1QixJQUFJLENBQUNELFdBQVcsQ0FBQ0EsUUFBUUMsSUFBSSxFQUFFO1FBQzNCLE9BQU9DLFNBQVNDLElBQUksQ0FBQztZQUNqQkMsU0FBUztZQUNUQyxTQUFTO1FBQ2IsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDckI7SUFFQSxNQUFNQyxTQUFTLElBQUlWLHVEQUFjLENBQUNZLFFBQVEsQ0FBQ1IsS0FBS1MsR0FBRztJQUluRCxJQUFJO1FBQ0EsTUFBTVQsT0FBTyxNQUFNTixtREFBU0EsQ0FBQ2dCLFNBQVMsQ0FBQztZQUNuQztnQkFBRUMsUUFBUTtvQkFBRUYsS0FBS0g7Z0JBQU87WUFBRTtZQUMxQjtnQkFBRU0sU0FBUztZQUFZO1lBQ3ZCO2dCQUFFQyxPQUFPO29CQUFFLHNCQUFzQixDQUFDO2dCQUFFO1lBQUU7WUFDdEM7Z0JBQUVDLFFBQVE7b0JBQUVMLEtBQUs7b0JBQVFNLFVBQVU7d0JBQUVDLE9BQU87b0JBQVk7Z0JBQUU7WUFBRTtTQUMvRDtRQUNELElBQUksQ0FBQ2hCLE1BQU07WUFDUCxPQUFPQyxTQUFTQyxJQUFJLENBQUM7Z0JBQ2pCQyxTQUFTO2dCQUNUQyxTQUFTO1lBQ2IsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3JCO1FBRUEsSUFBSUwsS0FBS2lCLE1BQU0sS0FBSyxHQUFHO1lBQ25CLE9BQU9oQixTQUFTQyxJQUFJLENBQUM7Z0JBQ2pCQyxTQUFTO2dCQUNUQyxTQUFTO1lBQ2IsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3JCO1FBSUEsT0FBT0osU0FBU0MsSUFBSSxDQUFDO1lBQ2pCQyxTQUFTO1lBQ1RZLFVBQVVmLElBQUksQ0FBQyxFQUFFLENBQUNlLFFBQVE7UUFDOUIsR0FBRztZQUFFVixRQUFRO1FBQUk7SUFDckIsRUFBRSxPQUFPYSxPQUFPO1FBQ1pDLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJGO1FBQ2pDLE9BQU9qQixTQUFTQyxJQUFJLENBQUM7WUFDakJDLFNBQVM7WUFDVEMsU0FBUztRQUNiLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3JCO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYS8uL3NyYy9hcHAvYXBpL2dldC1tZXNzYWdlcy9yb3V0ZS50cz8zOTNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXIsIGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIi4uL2F1dGgvWy4uLm5leHRhdXRoXS9vcHRpb25zXCI7XHJcbmltcG9ydCB1c2VyTW9kZWwgZnJvbSBcIkAvbW9kZWwvVXNlclwiO1xyXG5pbXBvcnQgZGJDb25uZWN0IGZyb20gXCJAL2xpYi9kYkNvbm5lY3RcIjtcclxuaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVzZXQ6IFJlcXVlc3QpIHtcclxuICAgIGF3YWl0IGRiQ29ubmVjdCgpXHJcblxyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpXHJcblxyXG4gICAgY29uc3QgdXNlcjogVXNlciA9IHNlc3Npb24/LnVzZXIgYXMgVXNlclxyXG5cclxuICAgIGlmICghc2Vzc2lvbiB8fCAhc2Vzc2lvbi51c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ05vdCBBdXRoZW50aWNhdGVkJ1xyXG4gICAgICAgIH0sIHsgc3RhdHVzOiA1MDAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1c2VySWQgPSBuZXcgbW9uZ29vc2UuVHlwZXMuT2JqZWN0SWQodXNlci5faWQpXHJcblxyXG5cclxuICAgIFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgdXNlck1vZGVsLmFnZ3JlZ2F0ZShbXHJcbiAgICAgICAgICAgIHsgJG1hdGNoOiB7IF9pZDogdXNlcklkIH0gfSxcclxuICAgICAgICAgICAgeyAkdW53aW5kOiAnJG1lc3NhZ2VzJyB9LFxyXG4gICAgICAgICAgICB7ICRzb3J0OiB7ICdtZXNzYWdlcy5jcmVhdGVkQXQnOiAtMSB9IH0sXHJcbiAgICAgICAgICAgIHsgJGdyb3VwOiB7IF9pZDogJyRfaWQnLCBtZXNzYWdlczogeyAkcHVzaDogJyRtZXNzYWdlcycgfSB9IH1cclxuICAgICAgICBdKVxyXG4gICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gUmVzcG9uc2UuanNvbih7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdVc2VyIG5vdCBGb3VuZCdcclxuICAgICAgICAgICAgfSwgeyBzdGF0dXM6IDUwMCB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVzZXIubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBSZXNwb25zZS5qc29uKHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1lvdSBoYXZlIG5vIG1lc3NhZ2UgcmVjaWV2ZWQnXHJcbiAgICAgICAgICAgIH0sIHsgc3RhdHVzOiA1MDAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICBcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gUmVzcG9uc2UuanNvbih7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VzOiB1c2VyWzBdLm1lc3NhZ2VzXHJcbiAgICAgICAgfSwgeyBzdGF0dXM6IDIwMCB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnR2V0IG1lc3NhZ2UgRXJyb3InLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ0dldCBtZXNzYWdlIG5vdCBmb3VuZCdcclxuICAgICAgICB9LCB7IHN0YXR1czogNDAzIH0pXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb25zIiwidXNlck1vZGVsIiwiZGJDb25uZWN0IiwibW9uZ29vc2UiLCJHRVQiLCJyZXF1c2V0Iiwic2Vzc2lvbiIsInVzZXIiLCJSZXNwb25zZSIsImpzb24iLCJzdWNjZXNzIiwibWVzc2FnZSIsInN0YXR1cyIsInVzZXJJZCIsIlR5cGVzIiwiT2JqZWN0SWQiLCJfaWQiLCJhZ2dyZWdhdGUiLCIkbWF0Y2giLCIkdW53aW5kIiwiJHNvcnQiLCIkZ3JvdXAiLCJtZXNzYWdlcyIsIiRwdXNoIiwibGVuZ3RoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/get-messages/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/dbConnect.ts":
/*!******************************!*\
  !*** ./src/lib/dbConnect.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\nasync function dbConnect() {\n    if (connection.isConnected) {\n        console.log(\"Already connected to database\");\n        return;\n    }\n    try {\n        const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);\n        connection.isConnected = db.connections[0].readyState;\n        console.log(\"DB Connected Sucessfully\");\n    } catch (error) {\n        console.log(\"Database Connection  failed\", error);\n        process.exit(1);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiQ29ubmVjdC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFPaEMsTUFBTUMsYUFBK0IsQ0FBQztBQUV0QyxlQUFlQztJQUNYLElBQUlELFdBQVdFLFdBQVcsRUFBRTtRQUN4QkMsUUFBUUMsR0FBRyxDQUFDO1FBQ1o7SUFDSjtJQUVBLElBQUk7UUFFQSxNQUFNQyxLQUFLLE1BQU1OLHVEQUFnQixDQUFDUSxRQUFRQyxHQUFHLENBQUNDLFdBQVc7UUFFekRULFdBQVdFLFdBQVcsR0FBR0csR0FBR0ssV0FBVyxDQUFDLEVBQUUsQ0FBQ0MsVUFBVTtRQUVyRFIsUUFBUUMsR0FBRyxDQUFDO0lBRWhCLEVBQUUsT0FBT1EsT0FBTztRQUVaVCxRQUFRQyxHQUFHLENBQUMsK0JBQStCUTtRQUUzQ0wsUUFBUU0sSUFBSSxDQUFDO0lBQ2pCO0FBQ0o7QUFHQSxpRUFBZVosU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FhLy4vc3JjL2xpYi9kYkNvbm5lY3QudHM/NjBhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG50eXBlIENvbm5lY3Rpb25PYmplY3QgPSB7XHJcbiAgICBpc0Nvbm5lY3RlZD86IG51bWJlclxyXG59XHJcblxyXG5cclxuY29uc3QgY29ubmVjdGlvbjogQ29ubmVjdGlvbk9iamVjdCA9IHt9XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBbHJlYWR5IGNvbm5lY3RlZCB0byBkYXRhYmFzZScpO1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJISlcclxuXHJcbiAgICAgICAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IGRiLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGVcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RCIENvbm5lY3RlZCBTdWNlc3NmdWxseScpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdEYXRhYmFzZSBDb25uZWN0aW9uICBmYWlsZWQnLCBlcnJvcik7XHJcblxyXG4gICAgICAgIHByb2Nlc3MuZXhpdCgxKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdGlvbiIsImRiQ29ubmVjdCIsImlzQ29ubmVjdGVkIiwiY29uc29sZSIsImxvZyIsImRiIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImVycm9yIiwiZXhpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/dbConnect.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fget-messages%2Froute&page=%2Fapi%2Fget-messages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fget-messages%2Froute.ts&appDir=C%3A%5CUsers%5CMian%20ahmer%5CDesktop%5CmystryMessage%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMian%20ahmer%5CDesktop%5CmystryMessage&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();