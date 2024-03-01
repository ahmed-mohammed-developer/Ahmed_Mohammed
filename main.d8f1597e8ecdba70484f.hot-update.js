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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ \"./node_modules/bootstrap/dist/js/bootstrap.esm.js\");\n/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery/dist/jquery */ \"./node_modules/jquery/dist/jquery.js?b90c\");\n/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all */ \"./node_modules/@fortawesome/fontawesome-free/js/all.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\n\n$(function() {\n     $('.thumbanl').hover(\n          function() {\n          $(this).find('.project-category').hide();\n          $(this).find('.caption2').slideDown(250);\n      },\n      function(){\n          $(this).find('.caption2').slideUp(250);\n          $(this).find('.proj52555ect-category').show();    \n      }\n      );\n\n\n    var pathname = window.location.pathname;//إحضار المسار المتواجدين فيه\n    console.log(pathname);\n    $('.navbar-nav > li > a[href=\"'+pathname+'\"]').parent().addClass('active');\n    \n    //إضافة الصنف الفعال للصفحات المتعلقة بصفحة المدونة\n    if (pathname == \"/blog-detalis.html\" || pathname == \"/add.blog.html\") {\n      $('.navbar-nav > li > a[href=\"/blog.html\"]').parent().addClass('active');\n    }\n\n    //إضافة الصنف الفعال للصفحات المتعلقة بصفحة المشروع\n    if (pathname == \"/project-detalis.html\") {\n        $('.navbar-nav > li > a[href=\"/projects.html\"]').parent().addClass('active');\n    }\n    \n    //gallery\n    loadGallery(true, 'a.thumbnail');\n\n    //This function disables buttons when needed\n    function disableButtons(counter_max, counter_current) {\n      $('#show-previous-image, #show-next-image')\n        .show();\n      if (counter_max === counter_current) {\n        $('#show-next-image')\n          .hide();\n      } else if (counter_current === 1) {\n        $('#show-previous-image')\n          .hide();\n      }\n    }\n\n    function loadGallery(setIDs, setClickAttr) {\n      let current_image,\n        selector,\n        counter = 0;\n\n      $('#show-next-image, #show-previous-image')\n        .on('click', function () {\n          if ($(this)\n            .attr('id') === 'show-previous-image') {\n            current_image--;\n          } else {\n            current_image++;\n          }\n\n          selector = $('[data-image-id=\"' + current_image + '\"]');\n          updateGallery(selector);\n        });\n\n      function updateGallery(selector) {\n        let $sel = selector;\n        current_image = $sel.data('image-id');\n        $('#image-gallery-title')\n          .text($sel.data('title'));\n        $('#image-gallery-image')\n          .attr('src', $sel.data('image'));\n        disableButtons(counter, $sel.data('image-id'));\n      }\n\n      if (setIDs == true) {\n        $('[data-image-id]')\n          .each(function () {\n            counter++;\n            $(this)\n              .attr('data-image-id', counter);\n          });\n      }\n      $(setClickAttr)\n        .on('click', function () {\n          updateGallery($(this));\n        });\n    }\n});\n\n\n\nvar date = new Date();\nvar year = date.getFullYear();\ndocument.getElementById(\"date\").innerHTML = year;\n\n// Add the following code if you want the name of the file appear on select\n$(\".custom-file-input\").on(\"change\", function() {\n  var fileName = $(this).val().split(\"\\\\\").pop();\n  $(this).siblings(\".custom-file-label\").addClass(\"selected\").html(fileName);\n});\n\n\n//# sourceURL=webpack://company-website-main/./src/js/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a5c820110275d4ad168a")
/******/ })();
/******/ 
/******/ }
);