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
exports.id = "app/api/check-username-unique/route";
exports.ids = ["app/api/check-username-unique/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcheck-username-unique%2Froute&page=%2Fapi%2Fcheck-username-unique%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcheck-username-unique%2Froute.ts&appDir=C%3A%5CUsers%5CMian%20ahmer%5CDesktop%5CmystryMessage%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMian%20ahmer%5CDesktop%5CmystryMessage&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcheck-username-unique%2Froute&page=%2Fapi%2Fcheck-username-unique%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcheck-username-unique%2Froute.ts&appDir=C%3A%5CUsers%5CMian%20ahmer%5CDesktop%5CmystryMessage%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMian%20ahmer%5CDesktop%5CmystryMessage&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Mian_ahmer_Desktop_mystryMessage_src_app_api_check_username_unique_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/check-username-unique/route.ts */ \"(rsc)/./src/app/api/check-username-unique/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/check-username-unique/route\",\n        pathname: \"/api/check-username-unique\",\n        filename: \"route\",\n        bundlePath: \"app/api/check-username-unique/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Mian ahmer\\\\Desktop\\\\mystryMessage\\\\src\\\\app\\\\api\\\\check-username-unique\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Mian_ahmer_Desktop_mystryMessage_src_app_api_check_username_unique_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/check-username-unique/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjaGVjay11c2VybmFtZS11bmlxdWUlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmNoZWNrLXVzZXJuYW1lLXVuaXF1ZSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmNoZWNrLXVzZXJuYW1lLXVuaXF1ZSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNNaWFuJTIwYWhtZXIlNUNEZXNrdG9wJTVDbXlzdHJ5TWVzc2FnZSU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDTWlhbiUyMGFobWVyJTVDRGVza3RvcCU1Q215c3RyeU1lc3NhZ2UmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDNkM7QUFDMUg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYS8/ZDdlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxNaWFuIGFobWVyXFxcXERlc2t0b3BcXFxcbXlzdHJ5TWVzc2FnZVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxjaGVjay11c2VybmFtZS11bmlxdWVcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2NoZWNrLXVzZXJuYW1lLXVuaXF1ZS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2NoZWNrLXVzZXJuYW1lLXVuaXF1ZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvY2hlY2stdXNlcm5hbWUtdW5pcXVlL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcTWlhbiBhaG1lclxcXFxEZXNrdG9wXFxcXG15c3RyeU1lc3NhZ2VcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcY2hlY2stdXNlcm5hbWUtdW5pcXVlXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2NoZWNrLXVzZXJuYW1lLXVuaXF1ZS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcheck-username-unique%2Froute&page=%2Fapi%2Fcheck-username-unique%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcheck-username-unique%2Froute.ts&appDir=C%3A%5CUsers%5CMian%20ahmer%5CDesktop%5CmystryMessage%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMian%20ahmer%5CDesktop%5CmystryMessage&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/check-username-unique/route.ts":
/*!****************************************************!*\
  !*** ./src/app/api/check-username-unique/route.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _lib_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/dbConnect */ \"(rsc)/./src/lib/dbConnect.ts\");\n/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/model/User */ \"(rsc)/./src/model/User.ts\");\n/* harmony import */ var _schemas_signUpSchema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/schemas/signUpSchema */ \"(rsc)/./src/schemas/signUpSchema.ts\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/lib/index.mjs\");\n\n\n\n\nconst UsernameQuerySchema = zod__WEBPACK_IMPORTED_MODULE_3__.z.object({\n    username: _schemas_signUpSchema__WEBPACK_IMPORTED_MODULE_2__.usernameValidation\n});\nasync function GET(request) {\n    await (0,_lib_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    try {\n        const { searchParams } = new URL(request.url);\n        const queryParams = {\n            username: searchParams.get(\"username\")\n        };\n        const result = UsernameQuerySchema.safeParse(queryParams);\n        if (!result.success) {\n            const usernameErrors = result.error.format().username?._errors || [];\n            return Response.json({\n                success: false,\n                message: usernameErrors.length > 0 ? usernameErrors.join(\",\") : \"Invalid query parameters\"\n            }, {\n                status: 400\n            });\n        }\n        const { username } = result.data;\n        const existingVerifiedUser = await _model_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n            username,\n            isVerified: true\n        });\n        if (existingVerifiedUser) {\n            return Response.json({\n                success: false,\n                message: \"username is already taken\"\n            }, {\n                status: 400\n            });\n        }\n        return Response.json({\n            success: true,\n            message: \"Username is unique\"\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Error checking username\", error);\n        return Response.json({\n            success: false,\n            message: \"Error checking Username\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jaGVjay11c2VybmFtZS11bmlxdWUvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFDSDtBQUN1QjtBQUNwQztBQUt4QixNQUFNSSxzQkFBc0JELGtDQUFDQSxDQUFDRSxNQUFNLENBQUM7SUFDakNDLFVBQVVKLHFFQUFrQkE7QUFDaEM7QUFFTyxlQUFlSyxJQUFJQyxPQUFnQjtJQUN0QyxNQUFNUiwwREFBU0E7SUFDZixJQUFJO1FBRUEsTUFBTSxFQUFFUyxZQUFZLEVBQUUsR0FBRyxJQUFJQyxJQUFJRixRQUFRRyxHQUFHO1FBRTVDLE1BQU1DLGNBQWM7WUFDaEJOLFVBQVVHLGFBQWFJLEdBQUcsQ0FBQztRQUMvQjtRQUVBLE1BQU1DLFNBQVNWLG9CQUFvQlcsU0FBUyxDQUFDSDtRQUU3QyxJQUFJLENBQUNFLE9BQU9FLE9BQU8sRUFBRTtZQUNqQixNQUFNQyxpQkFBaUJILE9BQU9JLEtBQUssQ0FBQ0MsTUFBTSxHQUFHYixRQUFRLEVBQUVjLFdBQVcsRUFBRTtZQUVwRSxPQUFPQyxTQUFTQyxJQUFJLENBQUM7Z0JBQ2pCTixTQUFTO2dCQUNUTyxTQUFTTixlQUFlTyxNQUFNLEdBQUcsSUFBSVAsZUFBZVEsSUFBSSxDQUFDLE9BQU87WUFFcEUsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3JCO1FBRUEsTUFBTSxFQUFFcEIsUUFBUSxFQUFFLEdBQUdRLE9BQU9hLElBQUk7UUFFaEMsTUFBTUMsdUJBQXVCLE1BQU0zQixtREFBU0EsQ0FBQzRCLE9BQU8sQ0FBQztZQUFFdkI7WUFBVXdCLFlBQVk7UUFBSztRQUVsRixJQUFJRixzQkFBc0I7WUFDdEIsT0FBT1AsU0FBU0MsSUFBSSxDQUFDO2dCQUNqQk4sU0FBUztnQkFDVE8sU0FBUztZQUNiLEdBQUc7Z0JBQUVHLFFBQVE7WUFBSTtRQUNyQjtRQUVBLE9BQU9MLFNBQVNDLElBQUksQ0FBQztZQUNqQk4sU0FBUztZQUNUTyxTQUFTO1FBQ2IsR0FBRztZQUFFRyxRQUFRO1FBQUk7SUFDckIsRUFBRSxPQUFPUixPQUFPO1FBQ1phLFFBQVFiLEtBQUssQ0FBQywyQkFBMEJBO1FBQ3hDLE9BQU9HLFNBQVNDLElBQUksQ0FDaEI7WUFDSU4sU0FBUztZQUNUTyxTQUFTO1FBQ2IsR0FBRztZQUNIRyxRQUFRO1FBQ1o7SUFHSjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWEvLi9zcmMvYXBwL2FwaS9jaGVjay11c2VybmFtZS11bmlxdWUvcm91dGUudHM/OTA2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gXCJAL2xpYi9kYkNvbm5lY3RcIjtcclxuaW1wb3J0IHVzZXJNb2RlbCBmcm9tIFwiQC9tb2RlbC9Vc2VyXCI7XHJcbmltcG9ydCB7IHVzZXJuYW1lVmFsaWRhdGlvbiB9IGZyb20gXCJAL3NjaGVtYXMvc2lnblVwU2NoZW1hXCI7XHJcbmltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBVc2VybmFtZVF1ZXJ5U2NoZW1hID0gei5vYmplY3Qoe1xyXG4gICAgdXNlcm5hbWU6IHVzZXJuYW1lVmFsaWRhdGlvblxyXG59KVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XHJcbiAgICBhd2FpdCBkYkNvbm5lY3QoKVxyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgICAgY29uc3QgeyBzZWFyY2hQYXJhbXMgfSA9IG5ldyBVUkwocmVxdWVzdC51cmwpXHJcblxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0ge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogc2VhcmNoUGFyYW1zLmdldCgndXNlcm5hbWUnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gVXNlcm5hbWVRdWVyeVNjaGVtYS5zYWZlUGFyc2UocXVlcnlQYXJhbXMpXHJcblxyXG4gICAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgY29uc3QgdXNlcm5hbWVFcnJvcnMgPSByZXN1bHQuZXJyb3IuZm9ybWF0KCkudXNlcm5hbWU/Ll9lcnJvcnMgfHwgW11cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBSZXNwb25zZS5qc29uKHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogdXNlcm5hbWVFcnJvcnMubGVuZ3RoID4gMCA/IHVzZXJuYW1lRXJyb3JzLmpvaW4oJywnKSA6ICdJbnZhbGlkIHF1ZXJ5IHBhcmFtZXRlcnMnXHJcblxyXG4gICAgICAgICAgICB9LCB7IHN0YXR1czogNDAwIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB7IHVzZXJuYW1lIH0gPSByZXN1bHQuZGF0YVxyXG5cclxuICAgICAgICBjb25zdCBleGlzdGluZ1ZlcmlmaWVkVXNlciA9IGF3YWl0IHVzZXJNb2RlbC5maW5kT25lKHsgdXNlcm5hbWUsIGlzVmVyaWZpZWQ6IHRydWUgfSlcclxuXHJcbiAgICAgICAgaWYgKGV4aXN0aW5nVmVyaWZpZWRVc2VyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBSZXNwb25zZS5qc29uKHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ3VzZXJuYW1lIGlzIGFscmVhZHkgdGFrZW4nXHJcbiAgICAgICAgICAgIH0sIHsgc3RhdHVzOiA0MDAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBSZXNwb25zZS5qc29uKHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ1VzZXJuYW1lIGlzIHVuaXF1ZSdcclxuICAgICAgICB9LCB7IHN0YXR1czogMjAwIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNoZWNraW5nIHVzZXJuYW1lJyxlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm9yIGNoZWNraW5nIFVzZXJuYW1lJ1xyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHN0YXR1czogNTAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIClcclxuXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiZGJDb25uZWN0IiwidXNlck1vZGVsIiwidXNlcm5hbWVWYWxpZGF0aW9uIiwieiIsIlVzZXJuYW1lUXVlcnlTY2hlbWEiLCJvYmplY3QiLCJ1c2VybmFtZSIsIkdFVCIsInJlcXVlc3QiLCJzZWFyY2hQYXJhbXMiLCJVUkwiLCJ1cmwiLCJxdWVyeVBhcmFtcyIsImdldCIsInJlc3VsdCIsInNhZmVQYXJzZSIsInN1Y2Nlc3MiLCJ1c2VybmFtZUVycm9ycyIsImVycm9yIiwiZm9ybWF0IiwiX2Vycm9ycyIsIlJlc3BvbnNlIiwianNvbiIsIm1lc3NhZ2UiLCJsZW5ndGgiLCJqb2luIiwic3RhdHVzIiwiZGF0YSIsImV4aXN0aW5nVmVyaWZpZWRVc2VyIiwiZmluZE9uZSIsImlzVmVyaWZpZWQiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/check-username-unique/route.ts\n");

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

/***/ }),

/***/ "(rsc)/./src/schemas/signUpSchema.ts":
/*!*************************************!*\
  !*** ./src/schemas/signUpSchema.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   signUpSchema: () => (/* binding */ signUpSchema),\n/* harmony export */   usernameValidation: () => (/* binding */ usernameValidation)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/lib/index.mjs\");\n\nconst usernameValidation = zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(3, \"Username must be atleast 2 Character\").max(18, \"Username must be no more than 20 Character\").regex(/^[a-zA-Z0-9]+$/, \" Username must not contain special Character\");\nconst signUpSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n    username: usernameValidation,\n    password: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(6, \"Password must be atleast 6 Character\"),\n    email: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().email({\n        message: \"Invalid email address\"\n    })\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvc2NoZW1hcy9zaWduVXBTY2hlbWEudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVCO0FBSWhCLE1BQU1DLHFCQUFxQkQsa0NBQUNBLENBQUNFLE1BQU0sR0FDckNDLEdBQUcsQ0FBQyxHQUFHLHdDQUNQQyxHQUFHLENBQUMsSUFBSSw4Q0FDUkMsS0FBSyxDQUFDLGtCQUFrQixnREFBK0M7QUFLcEUsTUFBTUMsZUFBZU4sa0NBQUNBLENBQUNPLE1BQU0sQ0FBQztJQUNsQ0MsVUFBVVA7SUFDVlEsVUFBVVQsa0NBQUNBLENBQUNFLE1BQU0sR0FBR0MsR0FBRyxDQUFDLEdBQUc7SUFDNUJPLE9BQU9WLGtDQUFDQSxDQUFDRSxNQUFNLEdBQUdRLEtBQUssQ0FBQztRQUFFQyxTQUFTO0lBQXdCO0FBQy9ELEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYS8uL3NyYy9zY2hlbWFzL3NpZ25VcFNjaGVtYS50cz81ODEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHogfSBmcm9tICd6b2QnXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VybmFtZVZhbGlkYXRpb24gPSB6LnN0cmluZygpXHJcbiAgICAubWluKDMsICdVc2VybmFtZSBtdXN0IGJlIGF0bGVhc3QgMiBDaGFyYWN0ZXInKVxyXG4gICAgLm1heCgxOCwgJ1VzZXJuYW1lIG11c3QgYmUgbm8gbW9yZSB0aGFuIDIwIENoYXJhY3RlcicpXHJcbiAgICAucmVnZXgoL15bYS16QS1aMC05XSskLywgJyBVc2VybmFtZSBtdXN0IG5vdCBjb250YWluIHNwZWNpYWwgQ2hhcmFjdGVyJylcclxuXHJcblxyXG5cclxuXHJcbiBleHBvcnQgY29uc3Qgc2lnblVwU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gICAgdXNlcm5hbWU6IHVzZXJuYW1lVmFsaWRhdGlvbixcclxuICAgIHBhc3N3b3JkOiB6LnN0cmluZygpLm1pbig2LCAnUGFzc3dvcmQgbXVzdCBiZSBhdGxlYXN0IDYgQ2hhcmFjdGVyJyksXHJcbiAgICBlbWFpbDogei5zdHJpbmcoKS5lbWFpbCh7IG1lc3NhZ2U6ICdJbnZhbGlkIGVtYWlsIGFkZHJlc3MnIH0pLFxyXG59KSJdLCJuYW1lcyI6WyJ6IiwidXNlcm5hbWVWYWxpZGF0aW9uIiwic3RyaW5nIiwibWluIiwibWF4IiwicmVnZXgiLCJzaWduVXBTY2hlbWEiLCJvYmplY3QiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZW1haWwiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/schemas/signUpSchema.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/zod"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcheck-username-unique%2Froute&page=%2Fapi%2Fcheck-username-unique%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcheck-username-unique%2Froute.ts&appDir=C%3A%5CUsers%5CMian%20ahmer%5CDesktop%5CmystryMessage%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMian%20ahmer%5CDesktop%5CmystryMessage&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();