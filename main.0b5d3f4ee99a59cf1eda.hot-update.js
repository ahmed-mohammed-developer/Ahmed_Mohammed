/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatecompany_website_main"]("main",{

/***/ "./node_modules/jquery/dist/jquery.js?b90c":
/*!****************************************************!*\
  !*** ./node_modules/jquery/dist/jquery-exposed.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var ___EXPOSE_LOADER_IMPORT___ = __webpack_require__(/*! -!./jquery.js */ \"./node_modules/jquery/dist/jquery.js?1157\");\nvar ___EXPOSE_LOADER_GET_GLOBAL_THIS___ = __webpack_require__(/*! ../../expose-loader/dist/runtime/getGlobalThis.js */ \"./node_modules/expose-loader/dist/runtime/getGlobalThis.js\");\nvar ___EXPOSE_LOADER_GLOBAL_THIS___ = ___EXPOSE_LOADER_GET_GLOBAL_THIS___;\nif (typeof ___EXPOSE_LOADER_GLOBAL_THIS___[\"$\"] === 'undefined') ___EXPOSE_LOADER_GLOBAL_THIS___[\"$\"] = ___EXPOSE_LOADER_IMPORT___;\nelse throw new Error('[exposes-loader] The \"$\" value exists in the global scope, it may not be safe to overwrite it, use the \"override\" option')\nif (typeof ___EXPOSE_LOADER_GLOBAL_THIS___[\"jQuery\"] === 'undefined') ___EXPOSE_LOADER_GLOBAL_THIS___[\"jQuery\"] = ___EXPOSE_LOADER_IMPORT___;\nelse throw new Error('[exposes-loader] The \"jQuery\" value exists in the global scope, it may not be safe to overwrite it, use the \"override\" option')\nmodule.exports = ___EXPOSE_LOADER_IMPORT___;\n\n\n//# sourceURL=webpack://company-website-main/./node_modules/jquery/dist/jquery.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ \"./node_modules/bootstrap/dist/js/bootstrap.esm.js\");\n/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery/dist/jquery */ \"./node_modules/jquery/dist/jquery.js?b90c\");\n/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all */ \"./node_modules/@fortawesome/fontawesome-free/js/all.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\nvar date = new Date();\nvar current_date = date.getFullYear()+\"-\"+(date.getMonth()+1)+\"-\"+ date.getDate();\nvar current_time = date.getHours()+\":\"+date.getMinutes()+\":\"+ date.getSeconds();\nvar date_time = current_date+\" \"+current_time+\"\";\t\ndocument.getElementById(\"p1\").innerHTML = date_time;\n\n\n//# sourceURL=webpack://company-website-main/./src/js/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("23b38bc1cd4f3834331b")
/******/ })();
/******/ 
/******/ }
);