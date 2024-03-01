"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatecompany_website_main"]("main",{

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ \"./node_modules/bootstrap/dist/js/bootstrap.esm.js\");\n/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery/dist/jquery */ \"./node_modules/jquery/dist/jquery.js?b90c\");\n/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all */ \"./node_modules/@fortawesome/fontawesome-free/js/all.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\n\n//acive booton\n$(document).ready(function() {\n  $(\".first-list-element\").addClass(\"active\");\n       \n\n\n  $(\".nav-item\").click(function() {\n       $(\".nav-item\").removeClass(\"active\");\n       $(this).addClass(\"active\");\n  });\n\n  // bars toggler \n  $(\"#toggler\").click(function(event){\n       $('#wrap').toggleClass('toggled');\n\n       // layer \n       let right = $('.sidbar').css(\"right\");\n       if (right == '0px')\n       {\n            $('.sidbar').css({'right': '-17rem'});\n            $('.layer').fadeOut();\n       }\n       else {\n            $('.sidbar').css({'right': '0'});\n            $('.layer').fadeIn();\n       }\n  });\n\n  //عند الضغط على layer\n\n  $('.layer').click(function () {\n       $('.sidbar').css({'right': '-17rem'});\n            $('.layer').fadeOut();\n  });\n\n  //search-input \n  $(\".search-icon\").click(function (){\n       $(\".search-input\").slideToggle(\"slow\")\n  });\n});\n\n//# sourceURL=webpack://company-website-main/./src/js/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d8f1597e8ecdba70484f")
/******/ })();
/******/ 
/******/ }
);