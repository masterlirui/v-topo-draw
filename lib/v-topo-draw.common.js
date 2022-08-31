module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0917":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_884c752a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ad2b");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_884c752a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_884c752a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "258b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RightDrawer_vue_vue_type_style_index_0_id_36eee498_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("34d2");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RightDrawer_vue_vue_type_style_index_0_id_36eee498_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RightDrawer_vue_vue_type_style_index_0_id_36eee498_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "34d2":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("a618");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("29ba199d", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "7123":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#topo-container,.topo-draw-wrap{width:100%;height:100%;position:relative}#topo-container{width:auto;margin-left:220px}#stencil{width:220px;left:0;bottom:0}#stencil,.tools{position:absolute;top:0}.tools{left:220px;background:#fff;z-index:1;padding:10px 20px;display:flex;justify-content:space-around;align-items:center}.tools>div{margin:0 10px}.topo-draw-wrap .el-drawer__header{margin-bottom:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "a618":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".drawer_container[data-v-36eee498]{width:100%;height:100%;padding:10px}.drawer_container .drawer_title[data-v-36eee498]{border-bottom:1px solid #e8eaec;box-sizing:border-box;padding-bottom:12px;color:#333;font-weight:600;font-size:16px}.drawer_container .drawer_wrap[data-v-36eee498]{box-sizing:border-box;padding:20px 10px 20px 20px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "ad2b":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("7123");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("633783f2", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "d15b":
/***/ (function(module, exports) {

module.exports = require("@antv/x6");

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7aabd4fa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/src/index.vue?vue&type=template&id=884c752a&
var render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"topo-draw-wrap"},[_c('div',{staticClass:"tools"},[_c('el-radio-group',{attrs:{"size":"mini"},on:{"change":_vm.changeEdgeType},model:{value:(_vm.lineType),callback:function ($$v) {_vm.lineType=$$v},expression:"lineType"}},[_c('el-radio-button',{attrs:{"label":1}},[_vm._v("直线")]),_c('el-radio-button',{attrs:{"label":2}},[_vm._v("曲线")]),_c('el-radio-button',{attrs:{"label":3}},[_vm._v("直角")])],1),_c('div',[_c('el-button',{attrs:{"type":"default","size":"mini"},on:{"click":_vm.centerGraph}},[_vm._v("居中显示")]),_c('el-button',{attrs:{"type":"default","size":"mini"},on:{"click":_vm.clearGraph}},[_vm._v("清除所有图元")]),_c('el-button',{attrs:{"type":"primary","size":"mini"},on:{"click":_vm.saveGraphData}},[_vm._v("保存数据")])],1)],1),_c('div',{attrs:{"id":"topo-container"}}),(_vm.graph)?_c('ShapeType',_vm._b({attrs:{"graph":_vm.graph}},'ShapeType',_vm.$attrs,false)):_vm._e(),_c('el-drawer',{attrs:{"visible":_vm.drawer,"direction":"rtl","modal":false},on:{"update:visible":function($event){_vm.drawer=$event}}},[(_vm.drawer)?_c('RightDrawer',{staticClass:"right_drawer",attrs:{"drawerType":_vm.type,"nodeType":_vm.nodeType,"selectCell":_vm.selectCell,"graph":_vm.graph},on:{"changeGridType":_vm.changeGridType}}):_vm._e()],1)],1)
}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/src/index.vue?vue&type=template&id=884c752a&

// EXTERNAL MODULE: external "@antv/x6"
var x6_ = __webpack_require__("d15b");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7aabd4fa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/src/RightDrawer.vue?vue&type=template&id=36eee498&scoped=true&
var RightDrawervue_type_template_id_36eee498_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"drawer_container"},[(_vm.drawerType === 'node')?_c('div',[_c('div',{staticClass:"drawer_title"},[_vm._v("节点设置")]),_c('div',{staticClass:"drawer_wrap"},[_c('el-form',{attrs:{"label-width":"110px","label-suffix":"："}},[_c('el-form-item',{directives:[{name:"show",rawName:"v-show",value:(_vm.nodeType !== 'image' && _vm.nodeType !== 'path' && _vm.nodeType !== 'text-block'),expression:"nodeType !== 'image' && nodeType !== 'path' && nodeType !== 'text-block'"}],attrs:{"label":"节点背景"}},[_c('el-color-picker',{attrs:{"show-alpha":""},on:{"change":_vm.changeFill},model:{value:(_vm.drawerNode.fill),callback:function ($$v) {_vm.$set(_vm.drawerNode, "fill", $$v)},expression:"drawerNode.fill"}})],1),_c('el-form-item',{attrs:{"label":"节点文本"}},[_c('el-input',{on:{"change":_vm.changeNodeText},model:{value:(_vm.drawerNode.nodeText),callback:function ($$v) {_vm.$set(_vm.drawerNode, "nodeText", $$v)},expression:"drawerNode.nodeText"}})],1),_c('el-form-item',{directives:[{name:"show",rawName:"v-show",value:(_vm.nodeType !== 'text-block'),expression:"nodeType !== 'text-block'"}],attrs:{"label":"文本X轴"}},[_c('el-input',{attrs:{"placeholder":"文本X轴位置"},on:{"change":val => _vm.changeLabelPosition(val, 'X')},model:{value:(_vm.drawerNode.labelRefX),callback:function ($$v) {_vm.$set(_vm.drawerNode, "labelRefX", $$v)},expression:"drawerNode.labelRefX"}})],1),_c('el-form-item',{directives:[{name:"show",rawName:"v-show",value:(_vm.nodeType !== 'text-block'),expression:"nodeType !== 'text-block'"}],attrs:{"label":"文本Y轴"}},[_c('el-input',{attrs:{"placeholder":"文本y轴位置"},on:{"change":val => _vm.changeLabelPosition(val, 'Y')},model:{value:(_vm.drawerNode.labelRefY),callback:function ($$v) {_vm.$set(_vm.drawerNode, "labelRefY", $$v)},expression:"drawerNode.labelRefY"}})],1),_c('el-form-item',{directives:[{name:"show",rawName:"v-show",value:(_vm.nodeType !== 'text-block'),expression:"nodeType !== 'text-block'"}],attrs:{"label":"文本整体旋转"}},[_c('el-input',{attrs:{"placeholder":"文本整体旋转角度"},on:{"change":_vm.changeLabelTransform},model:{value:(_vm.drawerNode.labelTransform),callback:function ($$v) {_vm.$set(_vm.drawerNode, "labelTransform", $$v)},expression:"drawerNode.labelTransform"}})],1),_c('el-form-item',{directives:[{name:"show",rawName:"v-show",value:(_vm.nodeType !== 'text-block'),expression:"nodeType !== 'text-block'"}],attrs:{"label":"文本独立旋转"}},[_c('el-input',{attrs:{"placeholder":"文本独立旋转角度"},on:{"change":_vm.changeLabelRotate},model:{value:(_vm.drawerNode.labelRotate),callback:function ($$v) {_vm.$set(_vm.drawerNode, "labelRotate", $$v)},expression:"drawerNode.labelRotate"}})],1),_c('el-form-item',{attrs:{"label":"字体大小"}},[_c('el-slider',{attrs:{"min":0,"max":60},on:{"change":_vm.changefontSize},model:{value:(_vm.drawerNode.fontSize),callback:function ($$v) {_vm.$set(_vm.drawerNode, "fontSize", $$v)},expression:"drawerNode.fontSize"}})],1),_c('el-form-item',{attrs:{"label":"字体加粗"}},[_c('el-switch',{on:{"change":_vm.changeFontWeight},model:{value:(_vm.drawerNode.fontWeight),callback:function ($$v) {_vm.$set(_vm.drawerNode, "fontWeight", $$v)},expression:"drawerNode.fontWeight"}})],1),_c('el-form-item',{attrs:{"label":"字体颜色"}},[_c('el-color-picker',{attrs:{"show-alpha":""},on:{"change":_vm.changeFontFill},model:{value:(_vm.drawerNode.fontFill),callback:function ($$v) {_vm.$set(_vm.drawerNode, "fontFill", $$v)},expression:"drawerNode.fontFill"}})],1),_c('el-form-item',{directives:[{name:"show",rawName:"v-show",value:(_vm.nodeType !== 'text-block' && _vm.nodeType !== 'image' && _vm.nodeType !== 'path'),expression:"nodeType !== 'text-block' && nodeType !== 'image' && nodeType !== 'path'"}],attrs:{"label":"边框宽度"}},[_c('el-slider',{attrs:{"min":1,"max":10},on:{"change":_vm.changeStrokeWidth},model:{value:(_vm.drawerNode.strokeWidth),callback:function ($$v) {_vm.$set(_vm.drawerNode, "strokeWidth", $$v)},expression:"drawerNode.strokeWidth"}})],1),_c('el-form-item',{directives:[{name:"show",rawName:"v-show",value:(_vm.nodeType !== 'text-block' && _vm.nodeType !== 'image'),expression:"nodeType !== 'text-block' && nodeType !== 'image'"}],attrs:{"label":"边框颜色"}},[_c('el-color-picker',{attrs:{"show-alpha":""},on:{"change":_vm.changeStroke},model:{value:(_vm.drawerNode.stroke),callback:function ($$v) {_vm.$set(_vm.drawerNode, "stroke", $$v)},expression:"drawerNode.stroke"}})],1),_c('el-form-item',{attrs:{"label":"设备绑定"}},[_c('el-select',{attrs:{"placeholder":"请选择绑定设备"},on:{"change":_vm.bindDevice},model:{value:(_vm.drawerNode.bindDevice),callback:function ($$v) {_vm.$set(_vm.drawerNode, "bindDevice", $$v)},expression:"drawerNode.bindDevice"}},[_c('el-option',{attrs:{"label":"设备1","value":"1"}}),_c('el-option',{attrs:{"label":"设备2","value":"2"}})],1)],1),_c('el-form-item',{attrs:{"label":"采集项"}},[_c('el-select',{attrs:{"placeholder":"请选择绑定设备"},on:{"change":_vm.bindCollectItem},model:{value:(_vm.drawerNode.collectItem),callback:function ($$v) {_vm.$set(_vm.drawerNode, "collectItem", $$v)},expression:"drawerNode.collectItem"}},[_c('el-option',{attrs:{"label":"A相电压","value":"1"}}),_c('el-option',{attrs:{"label":"B相电压","value":"2"}}),_c('el-option',{attrs:{"label":"C相电压","value":"3"}})],1)],1),_c('el-form-item',{attrs:{"label":"功能"}},[_c('el-button',{attrs:{"type":"primary","icon":"md-trending-up","size":"small"},on:{"click":_vm.toTopZIndex}},[_vm._v("置顶")]),_c('el-button',{attrs:{"type":"primary","icon":"md-trending-up","size":"small"},on:{"click":_vm.toBackZIndex}},[_vm._v("置底")]),_c('el-button',{staticClass:"margin-left-10",attrs:{"type":"error","icon":"md-trash","size":"small"},on:{"click":_vm.deleteNode}},[_vm._v("删除")])],1)],1)],1)]):_vm._e(),(_vm.drawerType === 'edge')?_c('div',[_c('div',{staticClass:"drawer_title"},[_vm._v("线条设置")]),_c('div',{staticClass:"drawer_wrap"},[_c('el-form',{attrs:{"label-width":"100px","label-suffix":"："}},[_c('el-form-item',{attrs:{"label":"线条文本"}},[_c('el-input',{on:{"change":_vm.changeEdgeText},model:{value:(_vm.drawerEdge.edgeText),callback:function ($$v) {_vm.$set(_vm.drawerEdge, "edgeText", $$v)},expression:"drawerEdge.edgeText"}})],1),_c('el-form-item',{attrs:{"label":"线条宽度"}},[_c('el-slider',{attrs:{"min":1,"max":10},on:{"change":_vm.changeEdgeWidth},model:{value:(_vm.drawerEdge.edgeWidth),callback:function ($$v) {_vm.$set(_vm.drawerEdge, "edgeWidth", $$v)},expression:"drawerEdge.edgeWidth"}})],1),_c('el-form-item',{attrs:{"label":"线条样式"}},[_c('el-select',{on:{"change":_vm.changeEdgeStyle},model:{value:(_vm.drawerEdge.edgeStyle),callback:function ($$v) {_vm.$set(_vm.drawerEdge, "edgeStyle", $$v)},expression:"drawerEdge.edgeStyle"}},[_c('el-option',{attrs:{"value":1,"label":"实线"}}),_c('el-option',{attrs:{"value":2,"label":"虚线"}})],1)],1),_c('el-form-item',{attrs:{"label":"线条颜色"}},[_c('el-color-picker',{attrs:{"show-alpha":""},on:{"change":_vm.changeEdgeColor},model:{value:(_vm.drawerEdge.edgeColor),callback:function ($$v) {_vm.$set(_vm.drawerEdge, "edgeColor", $$v)},expression:"drawerEdge.edgeColor"}})],1),_c('el-form-item',{attrs:{"label":"文本大小"}},[_c('el-slider',{attrs:{"min":12,"max":60},on:{"change":_vm.changeEdgeTextSize},model:{value:(_vm.drawerEdge.edgeTextSize),callback:function ($$v) {_vm.$set(_vm.drawerEdge, "edgeTextSize", $$v)},expression:"drawerEdge.edgeTextSize"}})],1),_c('el-form-item',{attrs:{"label":"文本颜色"}},[_c('el-color-picker',{attrs:{"show-alpha":""},on:{"change":_vm.changeEdgeTextColor},model:{value:(_vm.drawerEdge.edgeTextColor),callback:function ($$v) {_vm.$set(_vm.drawerEdge, "edgeTextColor", $$v)},expression:"drawerEdge.edgeTextColor"}})],1),_c('el-form-item',{attrs:{"label":"文本角度"}},[_c('el-slider',{attrs:{"min":0,"max":360},on:{"change":_vm.changeEdgeTextAngle},model:{value:(_vm.drawerEdge.edgeTextAngle),callback:function ($$v) {_vm.$set(_vm.drawerEdge, "edgeTextAngle", $$v)},expression:"drawerEdge.edgeTextAngle"}})],1),_c('el-form-item',{attrs:{"label":"功能"}},[_c('el-button',{attrs:{"type":"primary","icon":"md-trending-up","size":"small"},on:{"click":_vm.toTopZIndex}},[_vm._v("置顶")]),_c('el-button',{attrs:{"type":"primary","icon":"md-trending-up","size":"small"},on:{"click":_vm.toBackZIndex}},[_vm._v("置底")]),_c('el-button',{staticClass:"margin-left-10",attrs:{"type":"error","icon":"md-trash","size":"small"},on:{"click":_vm.deleteNode}},[_vm._v("删除")])],1)],1)],1)]):_vm._e()])
}
var RightDrawervue_type_template_id_36eee498_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/src/RightDrawer.vue?vue&type=template&id=36eee498&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/src/RightDrawer.vue?vue&type=script&lang=js&

/* harmony default export */ var RightDrawervue_type_script_lang_js_ = ({
    props: {
        drawerType: {
            type: String,
        },
        selectCell: {},
        graph: {},
        nodeType: {
            type: String,
            default: () => '',
        },
    },
    data() {
        return {
            drawerNode: {
                fill: '',
                nodeText: '',
                fontSize: null,
                fontFill: '',
                strokeWidth: null,
                stroke: '',
                labelRefX: 0,
                labelRefY: 0,
                fontWeight: 0,
                bindDevice: null,
                collectItem: null,
                // nodePositionX: '',
                // nodePositionY: '',
                labelRotate: '',
                labelTransform: '',
            },
            drawerEdge: {
                edgeText: '',
                edgeWidth: null,
                edgeStyle: 1,
                edgeColor: '',
                edgeTextSize: 0,
                edgeTextColor: '',
                edgeTextAngle: 0,
            },
        }
    },
    created() {},
    mounted() {},
    watch: {
        selectCell: {
            handler(cell) {
                if (cell) {
                    if (cell.isNode()) {
                        /* 如果是节点 可能是内置节点 也可能是image和text-block 可能属性值设置不一样，这里需要兼容处理 */
                        this.handleNodeTypeAttrs(cell)
                    } else {
                        /* 如果是边 进行赋值处理 */
                        this.handleEdgeAttrs(cell)
                    }
                }
            },
            immediate: true,
            deep: false,
        },
    },
    methods: {
        // 节点设置
        changeStrokeWidth(val) {
            this.selectCell.attr('body/strokeWidth', val)
        },
        changefontSize(val) {
            this.selectCell.attr('label/fontSize', val)
            this.selectCell.attr('label/style/fontSize', val)
        },
        changeNodeText() {
            this.selectCell.attr('label/text', this.drawerNode.nodeText)
        },
        // changeNodePosition(val, type) {
        //     const offset = parseFloat(val)
        //     const { x, y } = this.selectCell.position()
        //     if (type === 'x') {
        //         this.selectCell.position(offset, y, { deep: true })
        //     } else if (type === 'y') {
        //         this.selectCell.position(x, offset, { deep: true })
        //     }
        // },
        changeStroke(val) {
            this.drawerNode.stroke = val
            if (this.selectCell.shape === 'path') {
                this.selectCell.attr('body/fill', this.drawerNode.stroke)
            } else {
                this.selectCell.attr('body/stroke', this.drawerNode.stroke)
            }
        },
        changeFontFill(val) {
            this.drawerNode.fontFill = val
            this.selectCell.attr('label/fill', this.drawerNode.fontFill)
            this.selectCell.attr('label/style/color', this.drawerNode.fontFill)
        },
        changeFill(val) {
            this.drawerNode.fill = val
            this.selectCell.attr('body/fill', val)
        },
        changeFontWeight(val) {
            this.drawerNode.fontWeight = val
            this.selectCell.attr('label/fontWeight', val ? 'bold' : 'normal')
            this.selectCell.attr(
                'label/style/fontWeight',
                val ? 'bold' : 'normal'
            )
        },
        changeLabelPosition(val, type) {
            this.selectCell.attr(`label/ref${type}`, val)
        },
        /* 文本整体旋转 */
        changeLabelTransform(val) {
            this.selectCell.attr(`label/transform`, `rotate(${val})`)
        },
        /* 文本单个字体独立旋转 */
        changeLabelRotate(val) {
            this.selectCell.attr(`label/rotate`, val)
        },
        // 边设置
        changeEdgeWidth(val) {
            this.drawerEdge.edgeWidth = val
            this.selectCell.attr('line/strokeWidth', this.drawerEdge.edgeWidth)
        },
        changeEdgeStyle(val) {
            this.drawerEdge.edgeStyle = val
            this.selectCell.attr(
                'line/strokeDasharray',
                this.drawerEdge.edgeStyle === 1 ? 0 : 8
            )
        },
        changeEdgeColor(val) {
            this.drawerEdge.stroke = val
            this.selectCell.attr('line/stroke', this.drawerEdge.stroke)
        },

        changeEdgeText(val) {
            this.drawerEdge.edgeText = val
            this.selectCell.setLabels([
                {
                    attrs: {
                        label: {
                            fontSize: this.drawerEdge.edgeTextSize,
                            fill: this.drawerEdge.edgeTextColor,
                            text: val,
                        },
                        body: {
                            fill: this.graph.background.options.background
                                .color,
                        },
                    },
                    position: {
                        angle: this.drawerEdge.edgeTextAngle,
                    },
                },
            ])
        },
        changeEdgeTextSize(val) {
            this.drawerEdge.edgeTextSize = val
            this.selectCell.setLabels([
                {
                    attrs: {
                        label: {
                            fontSize: val,
                            fill: this.drawerEdge.edgeTextColor,
                            text: this.drawerEdge.edgeText,
                        },
                        body: {
                            fill: this.graph.background.options.background
                                .color,
                        },
                    },
                    position: {
                        angle: this.drawerEdge.edgeTextAngle,
                    },
                },
            ])
        },
        changeEdgeTextColor(val) {
            this.drawerEdge.edgeTextColor = val
            this.selectCell.setLabels([
                {
                    attrs: {
                        label: {
                            fontSize: this.drawerEdge.edgeTextSize,
                            fill: val,
                            text: this.drawerEdge.edgeText,
                        },
                        body: {
                            fill: this.graph.background.options.background
                                .color,
                        },
                    },
                    position: {
                        angle: this.drawerEdge.edgeTextAngle,
                    },
                },
            ])
        },
        changeEdgeTextAngle(val) {
            this.selectCell.setLabels([
                {
                    attrs: {
                        label: {
                            fontSize: this.drawerEdge.edgeTextSize,
                            fill: this.drawerEdge.edgeTextColor,
                            text: this.drawerEdge.edgeText,
                        },
                        body: {
                            fill: this.graph.background.options.background
                                .color,
                        },
                    },
                    position: {
                        angle: val,
                    },
                },
            ])
        },
        /* 绑定设备 */
        bindDevice(val) {
            this.selectCell.setData({ id: val })
        },
        /* 绑定采集项 */
        bindCollectItem(val) {
            this.selectCell.setData({ collectItem: val })
        },
        // 置顶
        toTopZIndex() {
            this.selectCell.toFront()
        },
        toBackZIndex() {
            this.selectCell.toBack()
        },
        /* 设置节点层级 */
        setZIndex(index) {
            this.selectCell.setZIndex(index)
        },
        // 删除
        deleteNode() {
            const cell = this.graph.getSelectedCells()
            this.graph.removeCells(cell)
        },
        handleNodeTypeAttrs(cell) {
            /* 节点颜色 */
            if (cell.attrs.body) {
                this.drawerNode.fill =
                    cell.attrs.body.fill === 'transparent'
                        ? null
                        : cell.attrs.body.fill
            } else if (cell.attrs.label) {
                this.drawerNode.fill = cell.attrs.label.fill
            }

            if (this.nodeType !== 'text-block') {
                this.drawerNode.labelRefY =
                    cell.attrs.label && cell.attrs.label.refY
                this.drawerNode.labelRefX =
                    cell.attrs.label && cell.attrs.label.refX
                this.drawerNode.labelRotate =
                    cell.attrs.label && cell.attrs.label.rotate

                if (cell.attrs.label && cell.attrs.label.transform) {
                    const transform = cell.attrs.label.transform
                    const deg = transform.substring(
                        7,
                        transform.lastIndexOf(')')
                    )

                    this.drawerNode.labelTransform = deg
                }
            }
            if (this.nodeType === 'text-block') {
                this.drawerNode.fontFill =
                    cell.attrs.label.style && cell.attrs.label.style.color
            } else {
                this.drawerNode.fontFill =
                    cell.attrs.label && cell.attrs.label.fill
            }

            this.drawerNode.fontWeight =
                cell.attrs.label && cell.attrs.label.fontWeight

            this.drawerNode.nodeText = cell.attrs.label && cell.attrs.label.text

            this.drawerNode.fontSize = Number(
                cell.attrs.label && cell.attrs.label.fontSize
            )
            this.drawerNode.strokeWidth = Number(
                cell.attrs.body && cell.attrs.body.strokeWidth
            )

            if (cell.shape === 'path') {
                this.drawerNode.stroke = cell.attrs.body && cell.attrs.body.fill
            } else {
                this.drawerNode.stroke =
                    cell.attrs.body && cell.attrs.body.stroke
            }

            /* 节点位置回显 */
            // const { x, y } = cell.position()
            // this.drawerNode.nodePositionX = x
            // this.drawerNode.nodePositionY = y

            /* data业务数据 回显 */
            let { id, collectItem } = cell.data
            this.drawerNode.bindDevice = id
            this.drawerNode.collectItem = collectItem
        },
        handleEdgeAttrs(cell) {
            this.drawerEdge.edgeText =
                cell.labels[0] &&
                cell.labels[0].attrs &&
                cell.labels[0].attrs.label.text

            this.drawerEdge.edgeWidth =
                cell.attrs.line && Number(cell.attrs.line.strokeWidth)

            this.drawerEdge.edgeStyle =
                cell.attrs.line && Number(cell.attrs.line.strokeDasharray)
                    ? 2
                    : 1

            this.drawerEdge.edgeColor =
                cell.attrs.line && cell.attrs.line.stroke

            this.drawerEdge.edgeTextSize =
                cell.labels[0] &&
                cell.labels[0].attrs &&
                cell.labels[0].attrs.label.fontSize

            this.drawerEdge.edgeTextColor =
                cell.labels[0] &&
                cell.labels[0].attrs &&
                cell.labels[0].attrs.label.fill

            this.drawerEdge.edgeTextAngle =
                cell.labels[0] &&
                cell.labels[0].position &&
                cell.labels[0].position.angle
        },
    },
});

// CONCATENATED MODULE: ./packages/src/RightDrawer.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_RightDrawervue_type_script_lang_js_ = (RightDrawervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/src/RightDrawer.vue?vue&type=style&index=0&id=36eee498&prod&lang=scss&scoped=true&
var RightDrawervue_type_style_index_0_id_36eee498_prod_lang_scss_scoped_true_ = __webpack_require__("258b");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/src/RightDrawer.vue






/* normalize component */

var component = normalizeComponent(
  src_RightDrawervue_type_script_lang_js_,
  RightDrawervue_type_template_id_36eee498_scoped_true_render,
  RightDrawervue_type_template_id_36eee498_scoped_true_staticRenderFns,
  false,
  null,
  "36eee498",
  null
  
)

/* harmony default export */ var RightDrawer = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7aabd4fa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/src/ShapeType.vue?vue&type=template&id=ca5054e0&
var ShapeTypevue_type_template_id_ca5054e0_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{attrs:{"id":"stencil"}})
}
var ShapeTypevue_type_template_id_ca5054e0_staticRenderFns = []


// CONCATENATED MODULE: ./packages/src/ShapeType.vue?vue&type=template&id=ca5054e0&

// CONCATENATED MODULE: ./packages/src/shape.js


const portAttrs = {
    circle: {
        r: 3,
        magnet: true,
        stroke: '#2D8CF0',
        strokeWidth: 2,
        fill: '#fff',
    },
}

const portGroups = {
    top: {
        position: {
            name: 'absolute',
            args: {
                x: '50%',
                y: 1
            }
        },
        attrs: portAttrs,
    },
    bottom: {
        position: 'bottom',
        attrs: portAttrs,
    },
    left: {
        position: 'left',
        attrs: portAttrs,
    },
    right: {
        position: 'right',
        attrs: portAttrs,
    },
}

const portItems = [
    {
        id: 'portTop',
        group: 'top',
    },
    // {
    //   id: 'portTop2',
    //   group: 'top'
    // },
    // {
    //   id: 'portTop3',
    //   group: 'top'
    // },
    {
        id: 'portBot',
        group: 'bottom',
    },
    // {
    //   id: 'portBot2',
    //   group: 'bottom'
    // },
    // {
    //   id: 'portBot3',
    //   group: 'bottom'
    // },
    {
        id: 'portLeft',
        group: 'left',
    },
    // {
    //   id: 'portLeft2',
    //   group: 'left'
    // },
    // {
    //   id: 'portLeft3',
    //   group: 'left'
    // },
    {
        id: 'portRight',
        group: 'right',
    },
    // {
    //   id: 'portRight2',
    //   group: 'right'
    // },
    // {
    //   id: 'portRight3',
    //   group: 'right'
    // }
]

const ports = {
    groups: portGroups,
    items: portItems,
}

const shapeList = [
    {
        shape: x6_["Shape"].Rect,
        options: {
            width: 50,
            height: 10,
            attrs: {
                label: {
                    text: '母线',
                    fill: '#888',
                    fontSize: 12,
                    fontWeight: 600,
                    refY: '150%',
                    textVerticalAnchor: 'top'
                },
                body: {
                    stroke: '#ff0000',
                    strokeWidth: 1,
                    fill: '#ff0000',
                },
            },
            data: {},
        },
        type: 'comm'
    },
    {
        shape: x6_["Shape"].TextBlock,
        options: {
            width: 80,
            height: 50,
            attrs: {
                label: {
                    text: '自定义文本',
                    fontSize: 16,
                    fontWeight: 'noraml',
                    style: {
                        color: '#ff0000',
                    },
                },
                body: {
                    fill: 'transparent',
                    stroke: 'transparent',
                },
            },
            // ports: ports,
            data: {},
        },
        type: 'comm'
    },
    /* 场站开关 */
    {
        shape: x6_["Shape"].Path,
        options: {
            width: 10,
            height: 50,
            attrs: {
                body: {
                    fill: '#ff0000',
                    stroke: 'none',
                    refD: `M25,43.5 L25,50 L24.5,50 L24.5,43.5 L25,43.5 Z M24.75,41 C25.4403559,41 26,41.5596441 26,42.25 C26,42.9403559 25.4403559,43.5 24.75,43.5 C24.0596441,43.5 23.5,42.9403559 23.5,42.25 C23.5,41.5596441 24.0596441,41 24.75,41 Z M24.75,41.4166667 C24.2897627,41.4166667 23.9166667,41.7897627 23.9166667,42.25 C23.9166667,42.7102373 24.2897627,43.0833333 24.75,43.0833333 C25.2102373,43.0833333 25.5833333,42.7102373 25.5833333,42.25 C25.5833333,41.7897627 25.2102373,41.4166667 24.75,41.4166667 Z M25,35 L25,36 L26,36 L26,36.5 L25,36.5 L25,41 L24.5,41 L24.5,36.5 L23.5,36.5 L23.5,36 L24.5,36 L24.5,35 L25,35 Z M25,20 L25,22 L26.5,22 L26.5,32 L25,32 L25,34 L24.5,34 L24.5,32 L23,32 L23,22 L24.5,22 L24.5,20 L25,20 Z M24.75,10 C25.4403559,10 26,10.5596441 26,11.25 C26,11.8544094 25.5710287,12.3586272 25.0009341,12.4748055 L25,19 L24.5,19 L24.5000506,12.4750057 C23.9294653,12.3592077 23.5,11.8547574 23.5,11.25 C23.5,10.5596441 24.0596441,10 24.75,10 Z M24.75,10.5 C24.3357864,10.5 24,10.8357864 24,11.25 C24,11.6642136 24.3357864,12 24.75,12 C25.1642136,12 25.5,11.6642136 25.5,11.25 C25.5,10.8357864 25.1642136,10.5 24.75,10.5 Z M25,5 L25,6 L26,6 L26,6.5 L25,6.5 L25,10 L24.5,10 L24.5,6.5 L23.5,6.5 L23.5,6 L24.5,6 L24.5,5 L25,5 Z M25,0 L25,4 L24.5,4 L24.5,0 L25,0 Z`
                },
                label: {
                    text: '场站开关',
                    fill: '#888',
                    fontSize: 12,
                    fontWeight: 600,
                    refY: '110%',
                    textVerticalAnchor: 'top'
                },
            },
            ports: ports,
            data: {}
        },
        type: 'comm'
    },
    /* 电表 */
    {
        shape: x6_["Shape"].Path,
        options: {
            width: 50,
            height: 50,
            attrs: {
                body: {
                    fill: '#ff0000',
                    stroke: 'none',
                    refD: `M46,0 C48.209139,-4.05812251e-16 50,1.790861 50,4 L50,46 C50,48.209139 48.209139,50 46,50 L4,50 C1.790861,50 2.705415e-16,48.209139 0,46 L0,4 C-2.705415e-16,1.790861 1.790861,4.05812251e-16 4,0 L46,0 Z M45,2 L5,2 C3.40231912,2 2.09633912,3.24891996 2.00509269,4.82372721 L2,5 L2,45 C2,46.5976809 3.24891996,47.9036609 4.82372721,47.9949073 L5,48 L45,48 C46.5976809,48 47.9036609,46.75108 47.9949073,45.1762728 L48,45 L48,5 C48,3.34314575 46.6568542,2 45,2 Z M44.5,35 C45.6045695,35 46.5,35.8954305 46.5,37 L46.5,43 C46.5,44.1045695 45.6045695,45 44.5,45 L5.5,45 C4.3954305,45 3.5,44.1045695 3.5,43 L3.5,37 C3.5,35.8954305 4.3954305,35 5.5,35 L44.5,35 Z M44.4761905,36 L5.52380952,36 C5.01097368,36 4.58830236,36.3860402 4.53053726,36.8833789 L4.52380952,37 L4.52380952,43 C4.52380952,43.5128358 4.90984971,43.9355072 5.4071884,43.9932723 L5.52380952,44 L44.4761905,44 C44.9890263,44 45.4116976,43.6139598 45.4694627,43.1166211 L45.4761905,43 L45.4761905,37 C45.4761905,36.4477153 45.0284752,36 44.4761905,36 Z M7.1,37 L7.1,43 L6.6,43 L6.6,37 L7.1,37 Z M8.5,37 L8.5,43 L8,43 L8,37 L8.5,37 Z M21.7,37 L21.7,43 L20.7,43 L20.7,37 L21.7,37 Z M25.5,37 L25.5,43 L24,43 L24,37 L25.5,37 Z M15,37 L15,43 L14,43 L14,37 L15,37 Z M27.2,37 L27.2,43 L26.7,43 L26.7,37 L27.2,37 Z M26.5,37 L26.5,43 L26,43 L26,37 L26.5,37 Z M20.5,37 L20.5,43 L20,43 L20,37 L20.5,37 Z M16.5,37 L16.5,43 L16,43 L16,37 L16.5,37 Z M17.5,37 L17.5,43 L17,43 L17,37 L17.5,37 Z M18.5,37 L18.5,43 L18,43 L18,37 L18.5,37 Z M13.5,37 L13.5,43 L13,43 L13,37 L13.5,37 Z M11.7,37 L11.7,43 L10.7,43 L10.7,37 L11.7,37 Z M10.5,37 L10.5,43 L10,43 L10,37 L10.5,37 Z M7.7,37 L7.7,43 L7.2,43 L7.2,37 L7.7,37 Z M6.5,37 L6.5,43 L6,43 L6,37 L6.5,37 Z M30.75,41 C31.1642136,41 31.5,41.3357864 31.5,41.75 C31.5,42.1642136 31.1642136,42.5 30.75,42.5 C30.3357864,42.5 30,42.1642136 30,41.75 C30,41.3357864 30.3357864,41 30.75,41 Z M33.75,41 C34.1642136,41 34.5,41.3357864 34.5,41.75 C34.5,42.1642136 34.1642136,42.5 33.75,42.5 C33.3357864,42.5 33,42.1642136 33,41.75 C33,41.3357864 33.3357864,41 33.75,41 Z M36.75,41 C37.1642136,41 37.5,41.3357864 37.5,41.75 C37.5,42.1642136 37.1642136,42.5 36.75,42.5 C36.3357864,42.5 36,42.1642136 36,41.75 C36,41.3357864 36.3357864,41 36.75,41 Z M42.75,41 C43.1642136,41 43.5,41.3357864 43.5,41.75 C43.5,42.1642136 43.1642136,42.5 42.75,42.5 C42.3357864,42.5 42,42.1642136 42,41.75 C42,41.3357864 42.3357864,41 42.75,41 Z M39.75,41 C40.1642136,41 40.5,41.3357864 40.5,41.75 C40.5,42.1642136 40.1642136,42.5 39.75,42.5 C39.3357864,42.5 39,42.1642136 39,41.75 C39,41.3357864 39.3357864,41 39.75,41 Z M30.75,37 C31.1642136,37 31.5,37.3357864 31.5,37.75 C31.5,38.1642136 31.1642136,38.5 30.75,38.5 C30.3357864,38.5 30,38.1642136 30,37.75 C30,37.3357864 30.3357864,37 30.75,37 Z M39.75,37 C40.1642136,37 40.5,37.3357864 40.5,37.75 C40.5,38.1642136 40.1642136,38.5 39.75,38.5 C39.3357864,38.5 39,38.1642136 39,37.75 C39,37.3357864 39.3357864,37 39.75,37 Z M42.75,37 C43.1642136,37 43.5,37.3357864 43.5,37.75 C43.5,38.1642136 43.1642136,38.5 42.75,38.5 C42.3357864,38.5 42,38.1642136 42,37.75 C42,37.3357864 42.3357864,37 42.75,37 Z M36.75,37 C37.1642136,37 37.5,37.3357864 37.5,37.75 C37.5,38.1642136 37.1642136,38.5 36.75,38.5 C36.3357864,38.5 36,38.1642136 36,37.75 C36,37.3357864 36.3357864,37 36.75,37 Z M33.75,37 C34.1642136,37 34.5,37.3357864 34.5,37.75 C34.5,38.1642136 34.1642136,38.5 33.75,38.5 C33.3357864,38.5 33,38.1642136 33,37.75 C33,37.3357864 33.3357864,37 33.75,37 Z M46.5113269,30.1851852 L46.5113269,32.7037037 L3.48867314,32.7037037 L3.48867314,30.1851852 L46.5113269,30.1851852 Z M25,4 C26.1045695,4 27,4.8954305 27,6 L27,27 C27,28.1045695 26.1045695,29 25,29 L7,29 C5.8954305,29 5,28.1045695 5,27 L5,6 C5,4.8954305 5.8954305,4 7,4 L25,4 Z M24.5,5.5 L7.5,5.5 C6.98716416,5.5 6.56449284,5.88604019 6.50672773,6.38337887 L6.5,6.5 L6.5,26.5 C6.5,27.0128358 6.88604019,27.4355072 7.38337887,27.4932723 L7.5,27.5 L24.5,27.5 C25.0128358,27.5 25.4355072,27.1139598 25.4932723,26.6166211 L25.5,26.5 L25.5,6.5 C25.5,5.94771525 25.0522847,5.5 24.5,5.5 Z M41,19 C43.209139,19 45,20.790861 45,23 C45,25.209139 43.209139,27 41,27 C38.790861,27 37,25.209139 37,23 C37,20.790861 38.790861,19 41,19 Z M40.964,23.635 L39.2001435,25.4003275 C39.7015153,25.7768757 40.3247009,26 41,26 C41.6572309,26 42.2650997,25.7886557 42.7593523,25.4302213 L40.964,23.635 Z M22,7 C23.1045695,7 24,7.8954305 24,9 L24,24 C24,25.1045695 23.1045695,26 22,26 L10,26 C8.8954305,26 8,25.1045695 8,24 L8,9 C8,7.8954305 8.8954305,7 10,7 L22,7 Z M30,24 C30.5522847,24 31,24.4477153 31,25 C31,25.5522847 30.5522847,26 30,26 C29.4477153,26 29,25.5522847 29,25 C29,24.4477153 29.4477153,24 30,24 Z M34,24 C34.5522847,24 35,24.4477153 35,25 C35,25.5522847 34.5522847,26 34,26 C33.4477153,26 33,25.5522847 33,25 C33,24.4477153 33.4477153,24 34,24 Z M22,8 L10,8 C9.48716416,8 9.06449284,8.38604019 9.00672773,8.88337887 L9,9 L9,24 C9,24.5128358 9.38604019,24.9355072 9.88337887,24.9932723 L10,25 L22,25 C22.5128358,25 22.9355072,24.6139598 22.9932723,24.1166211 L23,24 L23,9 C23,8.44771525 22.5522847,8 22,8 Z M43.4003275,21.2001435 L41.564,23.035 L43.3697748,24.8398374 C43.7647762,24.3317951 44,23.6933673 44,23 C44,22.3247009 43.7768757,21.7015153 43.4003275,21.2001435 Z M38.5697787,21.2406477 C38.2113443,21.7349003 38,22.3427691 38,23 C38,23.6752991 38.2231243,24.2984847 38.5996725,24.7998565 L40.364,23.035 L38.5697787,21.2406477 Z M41,20 C40.3066327,20 39.6682049,20.2352238 39.1601626,20.6302252 L40.964,22.435 L42.7998565,20.5996725 C42.2984847,20.2231243 41.6752991,20 41,20 Z M30,20 C30.5522847,20 31,20.4477153 31,21 C31,21.5522847 30.5522847,22 30,22 C29.4477153,22 29,21.5522847 29,21 C29,20.4477153 29.4477153,20 30,20 Z M34,20 C34.5522847,20 35,20.4477153 35,21 C35,21.5522847 34.5522847,22 34,22 C33.4477153,22 33,21.5522847 33,21 C33,20.4477153 33.4477153,20 34,20 Z M45,5 C45.5522847,5 46,5.44771525 46,6 L46,14 C46,14.5522847 45.5522847,15 45,15 L42,15 C41.4477153,15 41,14.5522847 41,14 L41,6 C41,5.44771525 41.4477153,5 42,5 L45,5 Z M39,5 C39.5522847,5 40,5.44771525 40,6 L40,14 C40,14.5522847 39.5522847,15 39,15 L36,15 C35.4477153,15 35,14.5522847 35,14 L35,6 C35,5.44771525 35.4477153,5 36,5 L39,5 Z M33,5 C33.5522847,5 34,5.44771525 34,6 L34,14 C34,14.5522847 33.5522847,15 33,15 L30,15 C29.4477153,15 29,14.5522847 29,14 L29,6 C29,5.44771525 29.4477153,5 30,5 L33,5 Z M44.5,6 L42.5,6 C42.2545401,6 42.0503916,6.17687516 42.0080557,6.41012437 L42,6.5 L42,13.5 C42,13.7454599 42.1768752,13.9496084 42.4101244,13.9919443 L42.5,14 L44.5,14 C44.7454599,14 44.9496084,13.8231248 44.9919443,13.5898756 L45,13.5 L45,6.5 C45,6.22385763 44.7761424,6 44.5,6 Z M38.5,6 L36.5,6 C36.2545401,6 36.0503916,6.17687516 36.0080557,6.41012437 L36,6.5 L36,13.5 C36,13.7454599 36.1768752,13.9496084 36.4101244,13.9919443 L36.5,14 L38.5,14 C38.7454599,14 38.9496084,13.8231248 38.9919443,13.5898756 L39,13.5 L39,6.5 C39,6.22385763 38.7761424,6 38.5,6 Z M32.5,6 L30.5,6 C30.2545401,6 30.0503916,6.17687516 30.0080557,6.41012437 L30,6.5 L30,13.5 C30,13.7454599 30.1768752,13.9496084 30.4101244,13.9919443 L30.5,14 L32.5,14 C32.7454599,14 32.9496084,13.8231248 32.9919443,13.5898756 L33,13.5 L33,6.5 C33,6.22385763 32.7761424,6 32.5,6 Z`
                },
                label: {
                    text: '电表',
                    fill: '#888',
                    fontSize: 12,
                    fontWeight: 600,
                    refY: '110%',
                    textVerticalAnchor: 'top'
                },
            },
            ports: ports,
            data: {}
        },
        type: 'comm'
    },
    /* 主变 */
    {
        shape: x6_["Shape"].Path,
        options: {
            width: 50,
            height: 50,
            attrs: {
                body: {
                    fill: '#ff0000',
                    stroke: 'none',
                    refD: `M25.5,0 L25.5,4 L25.5,4 C32.7968396,4 38.7415606,9.82809135 38.9917982,17.1126675 L47.8156986,12.0179492 L49.8156986,15.4820508 L38.2091726,22.1852178 C37.5618782,23.9997683 36.5420545,25.6355417 35.2425431,26.9990712 C37.5693751,29.4418875 39,32.757294 39,36.4090909 C39,43.9151427 32.9558441,50 25.5,50 C18.3413676,50 12.4841186,44.3905939 12.02852,37.2996598 L2.1843014,42.9820508 L0.184301396,39.5179492 L12.6153953,32.3402829 C13.2457339,30.3151836 14.3341401,28.4940566 15.75842,26.9999184 C13.4302303,24.5571981 12,21.2422024 12,17.5909091 C12,10.4235867 17.5109494,4.5520831 24.4996595,4.03674668 L24.5,0 L25.5,0 Z M34.4941811,27.7257506 L34.4161055,27.7961164 C32.0379712,29.9035756 28.9172619,31.1818182 25.5,31.1818182 C24.6534581,31.1818182 23.825115,31.1033753 23.0217513,30.9533157 L13.0413014,36.714 C13.2052957,43.5041683 18.7204035,48.9545455 25.5,48.9545455 C32.3823177,48.9545455 37.9615385,43.3377541 37.9615385,36.4090909 C37.9615385,33.039223 36.6417619,29.9796812 34.4941811,27.7257506 Z M25.5,31.2272727 L33.8076923,44.2272727 L17.1923077,44.2272727 L25.5,31.2272727 Z M25.4621978,33 L19.2692308,43.0454545 L31.7307692,43.0454545 L25.4621978,33 Z M16.5063705,27.7268857 C15.4611022,28.8230823 14.6119669,30.1102953 14.0155822,31.5313307 L18.2745761,29.0734056 C17.6483148,28.6731658 17.0570288,28.222429 16.5063705,27.7268857 Z M32.0541136,25.7375869 L24.5056756,30.0970079 C24.8337075,30.1230806 25.1653129,30.1363636 25.5,30.1363636 C28.6599895,30.1363636 31.5452664,28.9522588 33.7419235,27.0007438 C33.2167898,26.5338582 32.6523015,26.110915 32.0541136,25.7375869 Z M25.5,23.8636364 C22.3400105,23.8636364 19.4547336,25.0477412 17.2580765,26.9992562 C17.8873583,27.5587378 18.5731527,28.0551185 19.3057289,28.4786371 L27.1152775,23.9680709 C26.5865291,23.8991673 26.0473862,23.8636364 25.5,23.8636364 Z M25.5,5.04545455 C18.6176823,5.04545455 13.0384615,10.6622459 13.0384615,17.5909091 C13.0384615,20.960777 14.3582381,24.0203188 16.5058189,26.2742494 C18.7589997,24.2459491 21.6915149,22.9686039 24.9169723,22.8306281 L24.9163077,17.6436364 L17.1923077,13.2690266 L17.7250492,12.3636364 L25.4993077,16.7676364 L33.2749508,12.3636364 L33.8076923,13.2690266 L25.9823077,17.7006364 L25.9831147,22.8267223 C26.8511454,22.8574596 27.6983267,22.9706992 28.5171584,23.1588907 L37.9610077,17.7079178 C37.9613613,17.6689571 37.9615385,17.6299539 37.9615385,17.5909091 C37.9615385,10.6622459 32.3823177,5.04545455 25.5,5.04545455 Z M36.7275213,23.0402352 L33.067169,25.152372 C33.5676722,25.4940409 34.0441835,25.868653 34.4936295,26.2731143 C35.3969043,25.3258295 36.1537138,24.2359003 36.7275213,23.0402352 Z`
                },
                label: {
                    text: '主变',
                    fill: '#888',
                    fontSize: 12,
                    fontWeight: 600,
                    refY: '110%',
                    textVerticalAnchor: 'top'
                },
            },
            ports: ports,
            data: {}
        },
        type: 'comm'
    },
    /* 台变 */
    {
        shape: x6_["Shape"].Path,
        options: {
            width: 30,
            height: 50,
            attrs: {
                body: {
                    fill: '#ff0000',
                    stroke: 'none',
                    refD: `M25,6 C32.1797017,6 38,11.8202983 38,19 C38,22.4928143 36.622526,25.6639023 34.3811829,27.999659 C36.6221294,30.3351848 38,33.5066829 38,37 C38,44.1797017 32.1797017,50 25,50 C17.8202983,50 12,44.1797017 12,37 C12,33.5071857 13.377474,30.3360977 15.6188171,28.000341 C13.3778706,25.6648152 12,22.4933171 12,19 C12,11.8202983 17.8202983,6 25,6 Z M33.6609007,28.6940268 L33.5680203,28.7771944 C31.2802112,30.7836764 28.2821494,32 25,32 C21.6733403,32 18.6385257,30.7504628 16.3392955,28.6951278 C14.2709625,30.8499765 13,33.7765636 13,37 C13,43.627417 18.372583,49 25,49 C31.627417,49 37,43.627417 37,37 C37,33.7765636 35.7290375,30.8499765 33.6609007,28.6940268 Z M25,25 C21.956915,25 19.178391,26.1327204 17.0630574,27.9995318 C19.178391,29.8672796 21.956915,31 25,31 C28.043085,31 30.821609,29.8672796 32.9369426,28.0004682 C30.821609,26.1327204 28.043085,25 25,25 Z M25,7 C18.372583,7 13,12.372583 13,19 C13,22.2234364 14.2709625,25.1500235 16.3390993,27.3059732 C18.6385257,25.2495372 21.6733403,24 25,24 C28.3266597,24 31.3614743,25.2495372 33.6607045,27.3048722 C35.7290375,25.1500235 37,22.2234364 37,19 C37,12.372583 31.627417,7 25,7 Z M25.5,0 L25.5,6 L24.5,6 L24.5,0 L25.5,0 Z`
                },
                label: {
                    text: '台变',
                    transform: 'rotate(0)',
                    fill: '#888',
                    fontSize: 12,
                    fontWeight: 600,
                    refY: '110%',
                    textVerticalAnchor: 'top',
                },
            },
            ports: ports,
            data: {}
        },
        type: 'comm'
    },
    /* 避雷器 */
    {
        shape: x6_["Shape"].Path,
        options: {
            width: 20,
            height: 50,
            attrs: {
                body: {
                    fill: '#ff0000',
                    stroke: 'none',
                    refD: `M30,48 L30,50 L21.0002381,50 L21,48 L30,48 Z M32,41 L32,42 L19,42 L19,41 L32,41 Z M22,29 L22,10 L25,10 L25,0 L26,0 L26,10 L29,10 L29,29 L26,29 L26,36 L36,36 L36,36.9995457 L15,36.9995457 L15,36 L25,36 L25,29 L22,29 Z M25,11 L23,11 L23,28 L28,28 L28,11 L26,11 L26,16 L26.5,16 L25.5,21 L24.5,16 L25,16 L25,11 Z`
                },
                label: {
                    text: '避雷器',
                    fill: '#888',
                    fontSize: 12,
                    fontWeight: 600,
                    refY: '110%',
                    textVerticalAnchor: 'top'
                },
            },
            ports: ports,
            data: {}
        },
        type: 'comm'
    },
    /* 电容 */
    {
        shape: x6_["Shape"].Path,
        options: {
            width: 30,
            height: 50,
            attrs: {
                body: {
                    fill: '#ff0000',
                    stroke: 'none',
                    refD: `M42,33 L42,33.01 L42.0104911,33 L49,39.9893895 L47.9895089,41 L41.99,35 L8.01,35 L2.0105213,41 L1,39.9894637 L7.9894787,33 L8,33.011 L8,33 L42,33 Z M26,9 L26,20 L50,20 L50,24 L0.000586847572,24 L0,20 L24,20 L24,9 L26,9 Z`
                },
                label: {
                    text: '电容',
                    fill: '#888',
                    fontSize: 12,
                    fontWeight: 600,
                    refY: '110%',
                    textVerticalAnchor: 'top'
                },
            },
            ports: ports,
            data: {}
        },
        type: 'comm'
    },
    /* 跌落熔断器 */
    {
        shape: x6_["Shape"].Path,
        options: {
            width: 15,
            height: 50,
            attrs: {
                body: {
                    fill: '#ff0000',
                    stroke: 'none',
                    refD: `M26.0520201,17.6697022 L35.7674211,38.5044469 L25.9976344,43.06 L25.9981303,50 L25,50 L25,41.5 L25.0266344,41.5 L16.0826344,22.3185031 L20.5949707,20.2139217 L19.7454992,18.3911438 L20.6501125,17.9693157 L21.4994659,19.7921487 L26.0520201,17.6697022 Z M21.0171663,21.1193232 L17.411351,22.8017433 L26.2819345,41.8247711 L29.8879237,40.1427237 L21.0171663,21.1193232 Z M25.568121,18.9981789 L21.9216615,20.6975502 L30.7924188,39.7209506 L34.4387046,38.0212067 L25.568121,18.9981789 Z M26,0 L26,13 L31,13.0002082 L31,13.9997918 L20,13.9997918 L20,13.0002082 L25,13 L25,0 L26,0 Z`
                },
                label: {
                    text: '跌落熔断器',
                    fill: '#888',
                    fontSize: 12,
                    fontWeight: 600,
                    refY: '110%',
                    textVerticalAnchor: 'top'
                },
            },
            ports: {
                groups: {
                    top: {
                        position: {
                            name: 'absolute',
                            args: {
                                x: '47.8%',
                                y: 0
                            }
                        },
                        attrs: portAttrs,
                    },
                    bottom: {
                        position: {
                            name: 'absolute',
                            args: {
                                x: '48%',
                                y: '100%'
                            }
                        },
                        attrs: portAttrs,
                    },
                    left: {
                        position: {
                            name: 'absolute',
                            args: {
                                x: 0,
                                y: '51.5%'
                            }
                        },
                        attrs: portAttrs,
                    },
                    right: {
                        position: {
                            name: 'absolute',
                            args: {
                                x: '100%',
                                y: '51.5%'
                            }
                        },
                        attrs: portAttrs,
                    },
                },
                items: portItems,
            },
            data: {}
        },
        type: 'comm'
    },
    /* 杆塔 */
    {
        shape: x6_["Shape"].Path,
        options: {
            width: 50,
            height: 30,
            attrs: {
                body: {
                    fill: '#ff0000',
                    stroke: 'none',
                    refD: `M26,35 L26,40 L25,40 L25,35 L26,35 Z M25.5,10 C32.4035594,10 38,15.5964406 38,22.5 C38,23.3565272 37.9138514,24.1929333 37.7497464,25.0010262 L50,25 L50,26 L37.5030672,26.0010897 C35.9890326,31.2005714 31.1882183,35 25.5,35 C19.8117817,35 15.0109674,31.2005714 13.4969328,26.0010897 L0,26 L0,25 L13.2502536,25.0010262 C13.0861486,24.1929333 13,23.3565272 13,22.5 C13,15.5964406 18.5964406,10 25.5,10 Z M25.5,11 C19.1487254,11 14,16.1487254 14,22.5 C14,28.8512746 19.1487254,34 25.5,34 C31.8512746,34 37,28.8512746 37,22.5 C37,16.1487254 31.8512746,11 25.5,11 Z`
                },
                label: {
                    text: '杆塔',
                    fill: '#888',
                    fontSize: 12,
                    fontWeight: 600,
                    refY: '150%',
                    textVerticalAnchor: 'top'
                },
            },
            ports: {
                groups: {
                    top: {
                        position: {
                            name: 'absolute',
                            args: {
                                x: '51%',
                                y: 0
                            }
                        },
                        attrs: portAttrs,
                    },
                    bottom: {
                        position: {
                            name: 'absolute',
                            args: {
                                x: '51%',
                                y: '100%'
                            }
                        },
                        attrs: portAttrs,
                    },
                    left: {
                        position: {
                            name: 'absolute',
                            args: {
                                x: 0,
                                y: '51.5%'
                            }
                        },
                        attrs: portAttrs,
                    },
                    right: {
                        position: {
                            name: 'absolute',
                            args: {
                                x: '100%',
                                y: '51.5%'
                            }
                        },
                        attrs: portAttrs,
                    },
                },
                items: portItems,
            },
            data: {}
        },
        type: 'comm'
    },
    /* 接地刀闸 */
    {
        shape: x6_["Shape"].Path,
        options: {
            width: 30,
            height: 50,
            attrs: {
                body: {
                    fill: '#ff0000',
                    stroke: 'none',
                    refD: `M32,48 L32,50 L19.0003439,50 L19,48 L32,48 Z M35,41 L35,42 L16,42 L16,41 L35,41 Z M26,25 L26,33 L39,33 L39,33.9995457 L12,33.9995457 L12,33 L25,33 L25,25 L26,25 Z M25.6933962,0 L25.6934374,5.61292081 C27.5052647,5.74569449 28.9339623,7.25772628 28.9339623,9.10344828 C28.9339623,10.358001 28.273899,11.4583877 27.2821097,12.0762711 L36.8033009,21.5961941 L36.0961941,22.3033009 L26.2900083,12.4980046 C26.0160575,12.5668728 25.7292812,12.6034483 25.4339623,12.6034483 C23.5009656,12.6034483 21.9339623,11.0364449 21.9339623,9.10344828 C21.9339623,7.42466359 23.1159085,6.02193726 24.6930481,5.68202221 L24.6933962,0 L25.6933962,0 Z M25.4339623,6.60344828 C24.0532504,6.60344828 22.9339623,7.7227364 22.9339623,9.10344828 C22.9339623,10.4841602 24.0532504,11.6034483 25.4339623,11.6034483 C26.8146741,11.6034483 27.9339623,10.4841602 27.9339623,9.10344828 C27.9339623,7.7227364 26.8146741,6.60344828 25.4339623,6.60344828 Z`
                },
                label: {
                    text: '接地刀闸',
                    fill: '#888',
                    fontSize: 12,
                    fontWeight: 600,
                    refY: '110%',
                    textVerticalAnchor: 'top'
                },
            },
            ports: ports,
            data: {}
        },
        type: 'comm'
    },
    /* PT */
    {
        shape: x6_["Shape"].Path,
        options: {
            width: 25,
            height: 50,
            attrs: {
                body: {
                    fill: '#ff0000',
                    stroke: 'none',
                    refD: `M25.25,28 C28.7017797,28 31.5,30.7982203 31.5,34.25 C31.5,35.444605 31.164846,36.5609306 30.5834381,37.5100766 C33.8796548,37.6814775 36.5,40.4097316 36.5,43.75 C36.5,47.2017797 33.7017797,50 30.25,50 C28.2051025,50 26.3895779,49.0179382 25.2493329,47.4997212 C24.1104221,49.0179382 22.2948975,50 20.25,50 C16.7982203,50 14,47.2017797 14,43.75 C14,40.4097316 16.6203452,37.6814775 19.9175848,37.5086887 C19.335154,36.5609306 19,35.444605 19,34.25 C19,30.7982203 21.7982203,28 25.25,28 Z M20.2350274,37.980598 L20.25,37.9807692 C17.0637418,37.9807692 14.4807692,40.5637418 14.4807692,43.75 C14.4807692,46.9362582 17.0637418,49.5192308 20.25,49.5192308 C22.1954283,49.5192308 23.9159556,48.5563149 24.9609733,47.0810917 C24.3520609,46.1165024 24,44.9743653 24,43.75 C24,42.555395 24.335154,41.4390694 24.9165619,40.4899234 C23.0006416,40.3908556 21.3124891,39.4266512 20.2350274,37.980598 Z M30.2640782,37.980786 L30.1648995,38.1112919 C29.0845318,39.4845474 27.4410109,40.3939133 25.5824152,40.4913113 C26.164846,41.4390694 26.5,42.555395 26.5,43.75 C26.5,44.9743653 26.1479391,46.1165024 25.5395284,47.0807001 C26.5840444,48.5563149 28.3045717,49.5192308 30.25,49.5192308 C33.4362582,49.5192308 36.0192308,46.9362582 36.0192308,43.75 C36.0192308,40.5684359 33.4438631,37.9883811 30.2640782,37.980786 Z M25.2500025,40.8698701 L25.2338553,40.8980159 C24.7545727,41.7391775 24.4807692,42.7126136 24.4807692,43.75 C24.4807692,44.7989773 24.7607254,45.7825673 25.2499975,46.6301299 C25.7392746,45.7825673 26.0192308,44.7989773 26.0192308,43.75 C26.0192308,42.7010227 25.7392746,41.7174327 25.2500025,40.8698701 Z M25.25,28.4807692 C22.0637418,28.4807692 19.4807692,31.0637418 19.4807692,34.25 C19.4807692,35.4575072 19.851738,36.5783701 20.4859242,37.5048371 C22.4342923,37.5767499 24.1545128,38.5407679 25.2506671,40.0002788 C26.3454872,38.5407679 28.0657077,37.5767499 30.0138398,37.5043793 C30.648262,36.5783701 31.0192308,35.4575072 31.0192308,34.25 C31.0192308,31.0637418 28.4362582,28.4807692 25.25,28.4807692 Z M20.8795506,38.0147231 L20.9579208,38.1052134 C21.8822147,39.1335683 23.1707498,39.8279484 24.6204494,39.9852769 C23.6923326,38.9071285 22.3712621,38.1766109 20.8795506,38.0147231 Z M29.6215138,38.0149726 L29.5925905,38.0178148 C28.1122933,38.1857263 26.8018788,38.9138435 25.8784862,39.9850274 C27.3712621,39.8233891 28.6923326,39.0928715 29.6215138,38.0149726 Z M25.5,17 L25.5,28 L25,28 L25,17 L25.5,17 Z M25.25,6 C26.2164983,6 27,6.78350169 27,7.75 C27,8.63123935 26.3486334,9.36034388 25.5010925,9.48212116 L25.5,14 L27,14 L27,14.5 L25.5,14.5 L25.5,16 L25,16 L25,14.5 L23.5,14.5 L23.5,14 L25,14 L24.9999035,9.48226398 C24.151877,9.36091503 23.5,8.63158453 23.5,7.75 C23.5,6.78350169 24.2835017,6 25.25,6 Z M25.25,6.58333333 C24.6056678,6.58333333 24.0833333,7.10566779 24.0833333,7.75 C24.0833333,8.39433221 24.6056678,8.91666667 25.25,8.91666667 C25.8943322,8.91666667 26.4166667,8.39433221 26.4166667,7.75 C26.4166667,7.10566779 25.8943322,6.58333333 25.25,6.58333333 Z M25.5,0 L25.5,6 L25,6 L25,0 L25.5,0 Z`
                },
                label: {
                    text: 'PT',
                    fill: '#888',
                    fontSize: 12,
                    fontWeight: 600,
                    refY: '110%',
                    textVerticalAnchor: 'top'
                },
            },
            ports: ports,
            data: {}
        },
        type: 'comm'
    },
    /* 小车开关 */
    {
        shape: x6_["Shape"].Path,
        options: {
            width: 15,
            height: 50,
            attrs: {
                body: {
                    fill: '#ff0000',
                    stroke: 'none',
                    refD: `M28.6010167,46 L29,46.3636364 L25.0101674,50 L25,49.99 L24.9898326,50 L21,46.3636364 L21.3989833,46 L25,49.283 L28.6010167,46 Z M24.75,4.445 L21.3989833,7.5 L21,7.13636364 L24.9898326,3.5 L25,3.51 L25.0101674,3.5 L29,7.13636364 L28.6010167,7.5 L25.25,4.445 L25.25,16 L28.75,16 L28.75,34 L25.25,34 L25.25,45.555 L28.6010167,42.5 L29,42.8636364 L25.0101674,46.5 L25,46.49 L24.9898326,46.5 L21,42.8636364 L21.3989833,42.5 L24.75,45.555 L24.75,34 L21.25,34 L21.25,16 L24.75,16 L24.75,4.445 Z M28,16.75 L22,16.75 L22,33.25 L28,33.25 L28,16.75 Z M25.0101674,1.80244708e-13 L29,3.63636364 L28.6010167,4 L25,0.717 L21.3989833,4 L21,3.63636364 L24.9898326,3.21964677e-14 L25,0.01 L25.0101674,1.80244708e-13 Z`
                },
                label: {
                    text: '小车开关',
                    fill: '#888',
                    fontSize: 12,
                    fontWeight: 600,
                    refY: '110%',
                    textVerticalAnchor: 'top'
                },
            },
            ports: ports,
            data: {}
        },
        type: 'comm'
    },
    /* 逆变器 */
    {
        shape: x6_["Shape"].Path,
        options: {
            width: 50,
            height: 15,
            attrs: {
                body: {
                    fill: '#ff0000',
                    stroke: 'none',
                    refD: `M37,14 L37,31 L13,31 L13,14 L37,14 Z M36,15.521 L15.325,30 L36,30 L36,15.521 Z M35.183,15 L14,15 L14,29.835 L35.183,15 Z M27.898547,24.9121622 L27.8981354,24.9351622 L30.6151354,28.2221622 L31.8291354,28.2221622 L33.197209,26.5673346 L33.6001354,27.0549897 L32.0689468,28.9080932 L32.0689468,28.9121622 L30.3418126,28.9121622 L30.3411354,28.8591622 L30.3383178,28.8634035 L27.5291354,25.4631622 L26.4811354,25.4631622 L25.0030618,27.2529208 L24.6001354,26.7652656 L26.1271354,24.9171622 L26.1278083,24.9121622 L27.898547,24.9121622 Z M12.997051,22 L13,22.9085237 L0.0027305188,23 L0,22.0914763 L12.997051,22 Z M49.997051,22 L50,22.9085237 L37.0027305,23 L37,22.0914763 L49.997051,22 Z M24.2682129,19.2837838 L24.2682129,20.2837838 L17.2682129,20.2837838 L17.2682129,19.2837838 L24.2682129,19.2837838 Z`
                },
                label: {
                    text: '逆变器',
                    fill: '#888',
                    fontSize: 12,
                    fontWeight: 600,
                    refY: '250%',
                    textVerticalAnchor: 'top'
                },
            },
            ports: {
                groups: {
                    top: {
                        position: {
                            name: 'absolute',
                            args: {
                                x: '50%',
                                y: 0
                            }
                        },
                        attrs: portAttrs,
                    },
                    bottom: {
                        position: {
                            name: 'absolute',
                            args: {
                                x: '50%',
                                y: '100%'
                            }
                        },
                        attrs: portAttrs,
                    },
                    left: {
                        position: {
                            name: 'absolute',
                            args: {
                                x: 0,
                                y: '49.9%'
                            }
                        },
                        attrs: portAttrs,
                    },
                    right: {
                        position: {
                            name: 'absolute',
                            args: {
                                x: '100%',
                                y: '49%'
                            }
                        },
                        attrs: portAttrs,
                    },
                },
                items: portItems,
            },
            data: {}
        },
        type: 'comm'
    },
    {
        shape: x6_["Shape"].Rect,
        options: {
            width: 50,
            height: 50,
            attrs: {
                label: {
                    text: '普通矩形',
                    fill: '#888',
                    fontSize: 12,
                    fontWeight: 600,
                    refY: '110%',
                    textVerticalAnchor: 'top'
                },
                body: {
                    stroke: '#ff0000',
                    strokeWidth: 1,
                    fill: 'transparent',
                },
            },
            ports: ports,
            data: {},
        },
        type: 'comm'
    },
    {
        shape: x6_["Shape"].Circle,
        options: {
            width: 50,
            height: 50,
            attrs: {
                label: {
                    text: '普通圆形',
                    fill: '#888',
                    fontSize: 12,
                    fontWeight: 600,
                    refY: '110%',
                    textVerticalAnchor: 'top'
                },
                body: {
                    stroke: '#ff0000',
                    strokeWidth: 1,
                    fill: 'transparent',
                },
            },
            ports: ports,
            data: {},
        },
        type: 'comm'
    },
]
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/src/ShapeType.vue?vue&type=script&lang=js&




/* harmony default export */ var ShapeTypevue_type_script_lang_js_ = ({
    components: {},
    props: {
        graph: {
            type: x6_["Graph"],
            required: true,
        },
        // shapeList: {
        //     type: Array,
        //     default: () => [],
        // },
    },
    data() {
        return {
            stencil: null,
            shapes380V: [],
            shapes10kV: [],
            shapes35kV: [],
            shapesComm: [],
            shapes: [],
            shapeMap: {
                Rect: x6_["Shape"].Rect,
            },
        }
    },
    mounted() {
        this.initStencil()
        this.hidePorts()
    },
    computed: {
        stencilGraphHeight() {
            return document.getElementById('stencil').clientHeight - 113
        },
    },
    methods: {
        /* 初始化 Stencil */
        initStencil() {
            this.stencil = new x6_["Addon"].Stencil({
                title: '图元选择',
                target: this.graph,
                search: (cell, keyword) => {
                    if (keyword) {
                        return cell.attr('label/text').includes(keyword)
                    }
                    return true
                },
                placeholder: '输入图元形状',
                notFoundText: '找不到该图元',
                collapsable: true,
                stencilGraphWidth: 220,
                // stencilGraphHeight: this.stencilGraphHeight,
                // stencilGraphHeight: 800,
                groups: [
                    {
                        name: 'comm',
                        title: '图元库',
                        graphHeight: shapeList.length * 60,
                        collapsed: false,
                    },
                    // {
                    //     name: '380V',
                    //     title: '380V图元',
                    //     graphHeight: 240,
                    //     collapsed: false,
                    // },
                    // {
                    //     name: '10kV',
                    //     title: '10kV图元',
                    //     graphHeight: 240,
                    //     collapsed: false,
                    // },
                    // {
                    //     name: '35kV',
                    //     title: '35kV图元',
                    //     graphHeight: 550,
                    //     collapsed: false,
                    // },
                ],
                layoutOptions: {
                    resizeToFit: false,
                    marginY: 0,
                    rowHeight: 100,
                },
            })
            this.renderNodeForStencil()

            document
                .getElementById('stencil')
                .appendChild(this.stencil.container)
        },
        /* 自定义Node节点放入 Stencil */
        renderNodeForStencil() {
            let shapeArray = []
            if (this.$attrs.shapeList) {
                shapeArray = this.$attrs.shapeList
            } else {
                shapeArray = shapeList
            }

            const shapeListLength = shapeArray.length
            for (let index = 0; index < shapeListLength; index++) {
                const currentShape = shapeArray[index]
                /* 判断是外界传入的图元 */
                let Shape = null
                if (this.$attrs.shapeList) {
                    Shape = this.shapeMap[currentShape.shape]
                } else {
                    Shape = currentShape.shape
                }
                const options = currentShape.options
                const shape = new Shape(options)
                this.shapes.push(shape)
            }

            this.stencil.load(this.shapes, 'comm')
        },
        hidePorts() {
            const stencil = document.getElementById('stencil')
            const ports = stencil && stencil.querySelectorAll('.x6-port-body')
            for (let i = 0, len = ports.length; i < len; i = i + 1) {
                ports[i].style.visibility = 'hidden'
            }
        },
    },
});

// CONCATENATED MODULE: ./packages/src/ShapeType.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_ShapeTypevue_type_script_lang_js_ = (ShapeTypevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/src/ShapeType.vue





/* normalize component */

var ShapeType_component = normalizeComponent(
  src_ShapeTypevue_type_script_lang_js_,
  ShapeTypevue_type_template_id_ca5054e0_render,
  ShapeTypevue_type_template_id_ca5054e0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ShapeType = (ShapeType_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/src/index.vue?vue&type=script&lang=js&




/* harmony default export */ var srcvue_type_script_lang_js_ = ({
    name: 'VTopoDraw',
    components: { RightDrawer: RightDrawer, ShapeType: ShapeType },
    props: {
        graphData: { type: Array, default: () => [] },
    },
    data() {
        return {
            graph: null,
            drawer: false,
            type: 'grid',
            selectCell: '',
            connectEdgeType: {
                // 连线方式
                connector: 'normal',
                router: {
                    name: '',
                },
            },
            nodeType: '',
            lineType: 1,
            timer: null,
            powerStationList: [],
            currentStation: {},
            /* 需要外部传入的自定义图元 */
            shapeList: [],
        }
    },
    watch: {
        graphData: {
            handler: function () {
                this.initGraphData()
            },
            deep: true,
        },
    },
    mounted() {
        /* 初始化画布环境 */
        this.initGrap()

        /* 绑定画布事件 */
        this.bindGrapEvent()

        /* 初始化画布数据 */
        this.initGraphData()

        /* 每间隔一段时间 就自动对图元数据进行保存 */
        this.timer = setInterval(() => {
            /* 保存缓存的数据 */
            this.saveCacheGraphData()
        }, 10000)

        this.$once('hook:beforeDestory', () => {
            this.timer && clearInterval(this.timer)
            this.graph.dispose()
        })
    },
    methods: {
        initGrap() {
            const _that = this
            this.graph = new x6_["Graph"]({
                container: document.getElementById('topo-container'),
                width: '100%',
                height: '100%',
                background: {
                    color: '#000000', // 设置画布背景颜色
                },
                /* 开启对齐线 */
                snapline: {
                    enabled: true,
                    // sharp: true,
                    tolerance: 1,
                },
                /* 网格设置 */
                grid: {
                    size: 8, // 网格大小 10px
                    visible: true, // 渲染网格背景
                },
                /* 控制拖拽 */
                panning: {
                    enabled: true,
                },
                /* 控制滚轮 */
                mousewheel: {
                    enabled: true,
                },
                /* 缩放节点 */
                resizing: {
                    // 调整节点宽高
                    enabled: true,
                    /* 等比例调整 */
                    // preserveAspectRatio: true,
                },
                /* 设置节点的角度调整 */
                rotating: {
                    enabled: true,
                },
                /* 开启撤销 */
                history: true,
                /* 开启点选和框选 */
                selecting: {
                    enabled: true,
                    rubberband: true, // 启用框选
                    modifiers: ['ctrl'],
                    strict: true,
                },
                /* 定制节点和边的交互行为 */
                interacting: {
                    edgeLabelMovable: true,
                },
                /* 开启剪贴板 */
                clipboard: true,
                /* 开启键盘快捷键监听 */
                keyboard: true,
                /* 配置全局的连线规则 */
                connecting: {
                    /* 连线时距离节点或者连接桩 50px 时会触发自动吸附 */
                    snap: true,
                    /* 是否允许连接到画布空白位置的点 */
                    allowBlank: true,
                    /* 链接在不同的链接桩上可以创建多条边 */
                    allowMulti: true,
                    allowLoop: false,
                    /* 拖动边时，是否高亮显示所有可用的连接桩或节点 */
                    highlight: true,
                    /* 链接到锚点，而不是节点外框 */
                    connectionPoint: {
                        name: 'anchor',
                    },
                    createEdge() {
                        return new x6_["Shape"].Edge({
                            attrs: {
                                line: {
                                    stroke: '#ff0000',
                                    strokeWidth: 1,
                                    sourceMarker: null,
                                    targetMarker: null,
                                    strokeDasharray: 0,
                                    // style: {
                                    //   animation: 'ant-line 30s infinite linear'
                                    // }
                                },
                            },
                            labels: [
                                {
                                    attrs: {
                                        label: {
                                            text: '',
                                            fill: '#ff0000',
                                        },
                                        body: { fill: '#000000' },
                                    },
                                    // position: {
                                    //   distance: 0.5,
                                    //   offset: 0,
                                    //   angle: 0
                                    // }
                                },
                            ],
                            connector: _that.connectEdgeType.connector,
                            router: {
                                name: _that.connectEdgeType.router.name || '',
                            },
                            // zIndex: 0
                        })
                    },
                },
                highlighting: {
                    magnetAvailable: {
                        name: 'stroke',
                        args: {
                            padding: 4,
                            attrs: {
                                strokeWidth: 4,
                                stroke: '#6a6c8a',
                            },
                        },
                    },
                },
            })
            this.graph.zoom(0.75)
        },
        bindGrapEvent() {
            this.graph.on(
                'node:mouseenter',
                x6_["FunctionExt"].debounce(() => {
                    this.showPorts(true)
                }),
                500
            )
            this.graph.on(
                'node:mouseleave',
                x6_["FunctionExt"].debounce(() => {
                    this.showPorts(false)
                }),
                500
            )
            this.graph.on('node:mouseleave', () => {
                const container = document.getElementById('topo-container')
                const ports = container.querySelectorAll('.x6-port-body')
                this.showPorts(ports, false)
            })
            this.graph.on('blank:click', () => {
                this.type = 'grid'
            })
            this.graph.on('cell:dblclick', ({ cell }) => {
                this.type = cell.isNode() ? 'node' : 'edge'
                this.nodeType = cell.shape
                if (cell) this.selectCell = cell
                this.drawer = true
            })
            this.graph.on('selection:changed', (args) => {
                // const strokeColor = ''
                args.added.forEach((cell) => {
                    this.selectCell = cell
                    if (cell.isEdge()) {
                        this.type = 'edge'
                        this.drawer = true
                        // strokeColor = cell.attrs.line.stroke
                        // cell.isEdge() && cell.attr('line/stroke', '#fff') // 虚线蚂蚁线
                        // cell.isEdge() && cell.attr('line/strokeDasharray', 5) // 虚线蚂蚁线
                        cell.addTools([
                            {
                                name: 'vertices',
                                args: {
                                    padding: 4,
                                    attrs: {
                                        strokeWidth: 0.1,
                                        stroke: '#2d8cf0',
                                        fill: '#ffffff',
                                    },
                                },
                            },
                        ])
                    }
                })
                args.removed.forEach((cell) => {
                    // cell.isEdge() && cell.attr('line/strokeDasharray', 0) // 正常线
                    // cell.isEdge() && cell.attr('line/stroke', strokeColor) // 正常线
                    cell.removeTools()
                })
            })

            this.graph.bindKey('ctrl+c', () => {
                const cells = this.graph.getSelectedCells()
                if (cells.length) {
                    this.graph.copy(cells)
                }
                return false
            })

            this.graph.bindKey('ctrl+v', () => {
                if (!this.graph.isClipboardEmpty()) {
                    const cells = this.graph.paste({ offset: 100 })
                    this.graph.cleanSelection()
                    this.graph.select(cells)
                }
                return false
            })

            this.graph.bindKey('up', () => {
                const cells = this.graph.getSelectedCells()
                if (cells.length) {
                    cells.map((cell) => {
                        const { x, y } = cell.position()
                        cell.position(x, y - 1, { deep: true })
                    })
                }
                return false
            })

            this.graph.bindKey('down', () => {
                const cells = this.graph.getSelectedCells()
                if (cells.length) {
                    cells.map((cell) => {
                        const { x, y } = cell.position()
                        cell.position(x, y + 1, { deep: true })
                    })
                }
                return false
            })

            this.graph.bindKey('left', () => {
                const cells = this.graph.getSelectedCells()
                if (cells.length) {
                    cells.map((cell) => {
                        const { x, y } = cell.position()
                        cell.position(x - 1, y, { deep: true })
                    })
                }
                return false
            })

            this.graph.bindKey('right', () => {
                const cells = this.graph.getSelectedCells()
                if (cells.length) {
                    cells.map((cell) => {
                        const { x, y } = cell.position()
                        cell.position(x + 1, y, { deep: true })
                    })
                }
                return false
            })

            this.graph.bindKey('delete', () => {
                const cells = this.graph.getSelectedCells()
                if (cells.length) {
                    this.graph.removeCells(cells)
                }
                return false
            })

            this.graph.bindKey('ctrl+z', () => {
                if (this.graph.canUndo()) {
                    this.graph.history.undo()
                }
                return false
            })
        },
        initGraphData() {
            this.graph.fromJSON(this.graphData)
            this.showPorts(false)
            this.graph.scaleContentToFit()
        },
        showPorts(show) {
            const container = document.getElementById('topo-container')
            const ports = container.querySelectorAll('.x6-port-body')
            for (let i = 0, len = ports.length; i < len; i = i + 1) {
                ports[i].style.visibility = show ? 'visible' : 'hidden'
            }
        },
        // 删除节点
        deleteNode() {
            const cell = this.graph.getSelectedCells()
            this.graph.removeCells(cell)
            this.type = 'grid'
        },
        // 改变边形状
        changeEdgeType(e) {
            this.lineType = e
            if (e === 1) {
                this.connectEdgeType = {
                    connector: 'normal',
                    router: { name: '' },
                }
            } else if (e === 2) {
                this.connectEdgeType = {
                    connector: 'smooth',
                    router: { name: '' },
                }
            } else {
                this.connectEdgeType = {
                    connector: 'normal',
                    router: { name: 'manhattan' },
                }
            }
        },
        changeGridType(type) {
            this.$set(this.grid, 'type', type)
            // this.grid.type = type
        },
        /* 图元居中展示 */
        centerGraph() {
            this.graph.scaleContentToFit()
        },
        /* 清楚画布所有图元 */
        clearGraph() {
            this.$confirm('您确认销毁所有图元?', '销毁提示', {
                confirmButtonText: '确认',
                cancelButtonText: '取消',
                type: 'success',
            })
                .then(() => {
                    this.graph.clearCells()
                    this.$message.success('已清除画布!')
                })
                .catch(() => {})
        },
        saveGraphData() {
            const jsonData = this.graph.toJSON()
            this.$emit('saveGraphData', jsonData)
        },
        saveCacheGraphData() {
            const jsonData = this.graph.toJSON()
            this.$emit('saveCacheGraphData', jsonData)
        },
    },
});

// CONCATENATED MODULE: ./packages/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/src/index.vue?vue&type=style&index=0&id=884c752a&prod&lang=scss&
var srcvue_type_style_index_0_id_884c752a_prod_lang_scss_ = __webpack_require__("0917");

// CONCATENATED MODULE: ./packages/src/index.vue






/* normalize component */

var src_component = normalizeComponent(
  packages_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var packages_src = (src_component.exports);
// CONCATENATED MODULE: ./packages/index.js


const install = function (Vue) {
    Vue.component(packages_src.name, packages_src)
}

/* harmony default export */ var packages_0 = (install);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });