(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./pkg/index.js":
/*!**********************!*\
  !*** ./pkg/index.js ***!
  \**********************/
/*! exports provided: FmOsc, __wbindgen_string_new, __wbg_destination_4e0e62ffaecd1c83, __wbg_new_6eaba19cdc17fc48, __wbg_close_e1daa82102421c11, __wbg_createGain_828403ec3397d7e7, __wbg_createOscillator_15571cad2ea6324c, __wbg_settype_fd40c7d13e5d1f04, __wbg_frequency_05ff7979f7cfcd97, __wbg_start_5eb23d5a51d13cae, __wbg_connect_c5a359ee4a1b07ea, __wbg_connect_5efba44b87a14af1, __wbg_value_8ce11c4762cc1729, __wbg_setvalue_ea0faa04cd65bde8, __wbg_gain_ddabaad61db634b8, __wbindgen_object_drop_ref, __wbindgen_throw, __wbindgen_rethrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ \"./pkg/index_bg.wasm\");\n/* harmony import */ var _index_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index_bg.js */ \"./pkg/index_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"FmOsc\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"FmOsc\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_string_new\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_destination_4e0e62ffaecd1c83\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_destination_4e0e62ffaecd1c83\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_6eaba19cdc17fc48\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_new_6eaba19cdc17fc48\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_close_e1daa82102421c11\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_close_e1daa82102421c11\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_createGain_828403ec3397d7e7\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_createGain_828403ec3397d7e7\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_createOscillator_15571cad2ea6324c\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_createOscillator_15571cad2ea6324c\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_settype_fd40c7d13e5d1f04\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_settype_fd40c7d13e5d1f04\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_frequency_05ff7979f7cfcd97\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_frequency_05ff7979f7cfcd97\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_start_5eb23d5a51d13cae\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_start_5eb23d5a51d13cae\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_connect_c5a359ee4a1b07ea\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_connect_c5a359ee4a1b07ea\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_connect_5efba44b87a14af1\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_connect_5efba44b87a14af1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_value_8ce11c4762cc1729\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_value_8ce11c4762cc1729\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setvalue_ea0faa04cd65bde8\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_setvalue_ea0faa04cd65bde8\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_gain_ddabaad61db634b8\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_gain_ddabaad61db634b8\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_drop_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_rethrow\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_rethrow\"]; });\n\n\n\n\n//# sourceURL=webpack:///./pkg/index.js?");

/***/ }),

/***/ "./pkg/index_bg.js":
/*!*************************!*\
  !*** ./pkg/index_bg.js ***!
  \*************************/
/*! exports provided: FmOsc, __wbindgen_string_new, __wbg_destination_4e0e62ffaecd1c83, __wbg_new_6eaba19cdc17fc48, __wbg_close_e1daa82102421c11, __wbg_createGain_828403ec3397d7e7, __wbg_createOscillator_15571cad2ea6324c, __wbg_settype_fd40c7d13e5d1f04, __wbg_frequency_05ff7979f7cfcd97, __wbg_start_5eb23d5a51d13cae, __wbg_connect_c5a359ee4a1b07ea, __wbg_connect_5efba44b87a14af1, __wbg_value_8ce11c4762cc1729, __wbg_setvalue_ea0faa04cd65bde8, __wbg_gain_ddabaad61db634b8, __wbindgen_object_drop_ref, __wbindgen_throw, __wbindgen_rethrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextDecoder, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FmOsc\", function() { return FmOsc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_destination_4e0e62ffaecd1c83\", function() { return __wbg_destination_4e0e62ffaecd1c83; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_6eaba19cdc17fc48\", function() { return __wbg_new_6eaba19cdc17fc48; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_close_e1daa82102421c11\", function() { return __wbg_close_e1daa82102421c11; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_createGain_828403ec3397d7e7\", function() { return __wbg_createGain_828403ec3397d7e7; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_createOscillator_15571cad2ea6324c\", function() { return __wbg_createOscillator_15571cad2ea6324c; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_settype_fd40c7d13e5d1f04\", function() { return __wbg_settype_fd40c7d13e5d1f04; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_frequency_05ff7979f7cfcd97\", function() { return __wbg_frequency_05ff7979f7cfcd97; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_start_5eb23d5a51d13cae\", function() { return __wbg_start_5eb23d5a51d13cae; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_connect_c5a359ee4a1b07ea\", function() { return __wbg_connect_c5a359ee4a1b07ea; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_connect_5efba44b87a14af1\", function() { return __wbg_connect_5efba44b87a14af1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_value_8ce11c4762cc1729\", function() { return __wbg_value_8ce11c4762cc1729; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setvalue_ea0faa04cd65bde8\", function() { return __wbg_setvalue_ea0faa04cd65bde8; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_gain_ddabaad61db634b8\", function() { return __wbg_gain_ddabaad61db634b8; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_rethrow\", function() { return __wbindgen_rethrow; });\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ \"./pkg/index_bg.wasm\");\n\n\nconst lAudioContext = (typeof AudioContext !== 'undefined' ? AudioContext : webkitAudioContext);\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction _assertNum(n) {\n    if (typeof(n) !== 'number') throw new Error('expected a number argument');\n}\n\nfunction logError(f) {\n    return function () {\n        try {\n            return f.apply(this, arguments);\n\n        } catch (e) {\n            let error = (function () {\n                try {\n                    return e instanceof Error ? `${e.message}\\n\\nStack:\\n${e.stack}` : e.toString();\n                } catch(_) {\n                    return \"<failed to stringify thrown value>\";\n                }\n            }());\n            console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", error);\n            throw e;\n        }\n    };\n}\n\nfunction handleError(f) {\n    return function () {\n        try {\n            return f.apply(this, arguments);\n\n        } catch (e) {\n            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_exn_store\"](addHeapObject(e));\n        }\n    };\n}\n/**\n*/\nclass FmOsc {\n\n    static __wrap(ptr) {\n        const obj = Object.create(FmOsc.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_fmosc_free\"](ptr);\n    }\n    /**\n    */\n    constructor() {\n        var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"fmosc_new\"]();\n        return FmOsc.__wrap(ret);\n    }\n    /**\n    * Sets the gain for this oscillator, between 0.0 and 1.0.\n    * @param {number} gain\n    */\n    set_gain(gain) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        _assertNum(this.ptr);\n        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"fmosc_set_gain\"](this.ptr, gain);\n    }\n    /**\n    * @param {number} freq\n    */\n    set_primary_frequency(freq) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        _assertNum(this.ptr);\n        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"fmosc_set_primary_frequency\"](this.ptr, freq);\n    }\n    /**\n    * @param {number} note\n    */\n    set_note(note) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        _assertNum(this.ptr);\n        _assertNum(note);\n        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"fmosc_set_note\"](this.ptr, note);\n    }\n    /**\n    * This should be between 0 and 1, though higher values are accepted.\n    * @param {number} amt\n    */\n    set_fm_amount(amt) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        _assertNum(this.ptr);\n        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"fmosc_set_fm_amount\"](this.ptr, amt);\n    }\n    /**\n    * This should be between 0 and 1, though higher values are accepted.\n    * @param {number} amt\n    */\n    set_fm_frequency(amt) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        _assertNum(this.ptr);\n        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"fmosc_set_fm_frequency\"](this.ptr, amt);\n    }\n}\n\nconst __wbindgen_string_new = function(arg0, arg1) {\n    var ret = getStringFromWasm0(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nconst __wbg_destination_4e0e62ffaecd1c83 = logError(function(arg0) {\n    var ret = getObject(arg0).destination;\n    return addHeapObject(ret);\n});\n\nconst __wbg_new_6eaba19cdc17fc48 = handleError(function() {\n    var ret = new lAudioContext();\n    return addHeapObject(ret);\n});\n\nconst __wbg_close_e1daa82102421c11 = handleError(function(arg0) {\n    var ret = getObject(arg0).close();\n    return addHeapObject(ret);\n});\n\nconst __wbg_createGain_828403ec3397d7e7 = handleError(function(arg0) {\n    var ret = getObject(arg0).createGain();\n    return addHeapObject(ret);\n});\n\nconst __wbg_createOscillator_15571cad2ea6324c = handleError(function(arg0) {\n    var ret = getObject(arg0).createOscillator();\n    return addHeapObject(ret);\n});\n\nconst __wbg_settype_fd40c7d13e5d1f04 = logError(function(arg0, arg1) {\n    getObject(arg0).type = takeObject(arg1);\n});\n\nconst __wbg_frequency_05ff7979f7cfcd97 = logError(function(arg0) {\n    var ret = getObject(arg0).frequency;\n    return addHeapObject(ret);\n});\n\nconst __wbg_start_5eb23d5a51d13cae = handleError(function(arg0) {\n    getObject(arg0).start();\n});\n\nconst __wbg_connect_c5a359ee4a1b07ea = handleError(function(arg0, arg1) {\n    var ret = getObject(arg0).connect(getObject(arg1));\n    return addHeapObject(ret);\n});\n\nconst __wbg_connect_5efba44b87a14af1 = handleError(function(arg0, arg1) {\n    getObject(arg0).connect(getObject(arg1));\n});\n\nconst __wbg_value_8ce11c4762cc1729 = logError(function(arg0) {\n    var ret = getObject(arg0).value;\n    return ret;\n});\n\nconst __wbg_setvalue_ea0faa04cd65bde8 = logError(function(arg0, arg1) {\n    getObject(arg0).value = arg1;\n});\n\nconst __wbg_gain_ddabaad61db634b8 = logError(function(arg0) {\n    var ret = getObject(arg0).gain;\n    return addHeapObject(ret);\n});\n\nconst __wbindgen_object_drop_ref = function(arg0) {\n    takeObject(arg0);\n};\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\nconst __wbindgen_rethrow = function(arg0) {\n    throw takeObject(arg0);\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextDecoder\"], __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./pkg/index_bg.js?");

/***/ }),

/***/ "./pkg/index_bg.wasm":
/*!***************************!*\
  !*** ./pkg/index_bg.wasm ***!
  \***************************/
/*! exports provided: memory, __wbg_fmosc_free, fmosc_new, fmosc_set_gain, fmosc_set_primary_frequency, fmosc_set_note, fmosc_set_fm_amount, fmosc_set_fm_frequency, __wbindgen_exn_store */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./index_bg.js */ \"./pkg/index_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./pkg/index_bg.wasm?");

/***/ })

}]);