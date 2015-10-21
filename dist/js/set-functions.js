(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.SetFunctions = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * JavaScript Set operations
 *
 * All functions expect an ES6 Set type or a compatible polyfill.
 */

/*
    It seems that all methods of iteration (forEach, for-of, iterator) were approximately equal in performance, so I
    used forEach as it is the most widely supported.

    See http://jsperf.com/set-iteration
 */

/**
 * The set of items in a and b
 *
 * @param {Set} a
 * @param {Set} b
 * @returns {Set}
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.intersection = intersection;
exports.union = union;
exports.difference = difference;

function intersection(a, b) {
    'use strict';

    var result = new Set();

    a.forEach(function (item) {
        if (b.has(item)) {
            result.add(item);
        }
    });

    return result;
}

/**
 * The set of items in a or b
 *
 * @param {Set} a
 * @param {Set} b
 * @returns {Set}
 */

function union(a, b) {
    'use strict';

    var result = new Set(a);

    b.forEach(function (item) {
        if (b.has(item)) {
            result.add(item);
        }
    });

    return result;
}

var add = union;

exports.add = add;
/**
 * The set of items in a but not in b
 *
 * @param {Set} a
 * @param {Set} b
 * @returns {Set}
 */

function difference(a, b) {
    'use strict';

    var result = new Set();

    a.forEach(function (item) {
        if (!b.has(item)) {
            result.add(item);
        }
    });

    return result;
}

/**
 * The set of items in a but not in b
 *
 * @param {Set} a
 * @param {Set} b
 * @returns {Set}
 */
var subtract = difference;
exports.subtract = subtract;

},{}]},{},[1])(1)
});


//# sourceMappingURL=set-functions.js.map
