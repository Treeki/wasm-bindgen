/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".index.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"./pkg/index_bg.wasm": function() {
/******/ 			return {
/******/ 				"./index_bg.js": {
/******/ 					"__wbindgen_cb_forget": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_cb_forget"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_cb_drop": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_cb_drop"](p0i32);
/******/ 					},
/******/ 					"__wbg_appendChild_5a186a381c8fff5b": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_appendChild_5a186a381c8fff5b"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_body_ca5c7fc933a74206": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_body_ca5c7fc933a74206"](p0i32);
/******/ 					},
/******/ 					"__wbg_createElement_2a0e776394ab0fae": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_createElement_2a0e776394ab0fae"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_offsetX_20f962f277606001": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_offsetX_20f962f277606001"](p0i32);
/******/ 					},
/******/ 					"__wbg_offsetY_b6efdc5aa43ee15a": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_offsetY_b6efdc5aa43ee15a"](p0i32);
/******/ 					},
/******/ 					"__wbg_style_08224ec396c218e8": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_style_08224ec396c218e8"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlCanvasElement_0d5b3d4264830667": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_HtmlCanvasElement_0d5b3d4264830667"](p0i32);
/******/ 					},
/******/ 					"__wbg_setwidth_f14d289597bfbc0c": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_setwidth_f14d289597bfbc0c"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setheight_560464c89bcf1ef6": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_setheight_560464c89bcf1ef6"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_getContext_36ec9e6a6037ed40": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_getContext_36ec9e6a6037ed40"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_addEventListener_e26664ded96802d6": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_addEventListener_e26664ded96802d6"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_instanceof_CanvasRenderingContext2d_6bf0f9fa0f58a81b": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_CanvasRenderingContext2d_6bf0f9fa0f58a81b"](p0i32);
/******/ 					},
/******/ 					"__wbg_beginPath_1840aab9dd36e9f3": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_beginPath_1840aab9dd36e9f3"](p0i32);
/******/ 					},
/******/ 					"__wbg_stroke_6e1599f8382fdd31": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_stroke_6e1599f8382fdd31"](p0i32);
/******/ 					},
/******/ 					"__wbg_lineTo_d4a2537ab479e4ef": function(p0i32,p1f64,p2f64) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_lineTo_d4a2537ab479e4ef"](p0i32,p1f64,p2f64);
/******/ 					},
/******/ 					"__wbg_moveTo_efde3360093e2ccd": function(p0i32,p1f64,p2f64) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_moveTo_efde3360093e2ccd"](p0i32,p1f64,p2f64);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_0e8decd0a6179699": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_Window_0e8decd0a6179699"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_76c349f54c28c8fa": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_document_76c349f54c28c8fa"](p0i32);
/******/ 					},
/******/ 					"__wbg_setProperty_3090dd7650e67dd9": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_setProperty_3090dd7650e67dd9"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_db0587fa712f9acc": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_newnoargs_db0587fa712f9acc"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_79ca0d435495a83a": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_call_79ca0d435495a83a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_globalThis_68afcb0d98f0112d": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_globalThis_68afcb0d98f0112d"]();
/******/ 					},
/******/ 					"__wbg_self_d1b58dbab69d5bb1": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_self_d1b58dbab69d5bb1"]();
/******/ 					},
/******/ 					"__wbg_window_de445cb18819ad4b": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_window_de445cb18819ad4b"]();
/******/ 					},
/******/ 					"__wbg_global_baed4e4fa850c0d0": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_global_baed4e4fa850c0d0"]();
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_rethrow": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_rethrow"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper45": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_closure_wrapper45"](p0i32,p1i32,p2i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"1":["./pkg/index_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"./pkg/index_bg.wasm":"20d9fd7d50e16e83ffdf"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// For more comments about what's going on here, check out the `hello_world`\n// example.\nPromise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./pkg */ \"./pkg/index.js\"))\n  .catch(console.error);\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });