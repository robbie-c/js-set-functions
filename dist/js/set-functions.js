(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.SetFunctions = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/**
 * JavaScript Set operations
 *
 * All functions expect an ES6 Set type or a compatible polyfill to be available
 * in the global namespace.
 * @module set-functions
 */

/*
 It seems that all methods of iteration (forEach, for-of, iterator) were
 approximately equal in performance, so I used forEach as it is the most
 widely supported.

 There are some platforms that provide Set but do not have all ES6 features
 (e.g. Set might be provided through a polyfill) so we do want to limit ES6
 features.

 Babel requires Symbol to transform for-of.

 Using ES6 modules is fine as browserify will handle this.

 See http://jsperf.com/set-iteration
 */

/**
 * The set of items in a and b
 *
 * @param {Set} a
 * @param {Set} b
 * @returns {Set}
 */
module.exports.intersection = function intersection(a, b) {
  'use strict';

  var result = new Set();

  if (a && b) {
    // should support b being an array
    if (!b.has) {
      b = new Set(b);
    }

    a.forEach(function (item) {
      if (b.has(item)) {
        result.add(item);
      }
    });
  }

  return result;
};

/**
 * The set of items in a or b
 *
 * @param {Set} a
 * @param {Set} b
 * @returns {Set}
 */
module.exports.union = function union(a, b) {
  'use strict';

  var result = new Set(a);

  if (b) {
    b.forEach(function (item) {
      result.add(item);
    });
  }

  return result;
};

/**
 * The set of items in a but not in b
 *
 * @param {Set} a
 * @param {Set} b
 * @returns {Set}
 */
module.exports.difference = function difference(a, b) {
  'use strict';

  if (!b) {
    return new Set(a);
  }

  var result = new Set();

  if (a) {

    if (!b.has) {
      b = new Set(b);
    }

    a.forEach(function (item) {
      if (!b.has(item)) {
        result.add(item);
      }
    });
  }

  return result;
};

var BreakException = {};

/**
 * Check set equality
 *
 * @param {Set} a
 * @param {Set} b
 * @returns {bool}
 */
module.exports.isEqual = function isEqual(a, b) {
  'use strict';

  if (a === b) {
    return true;
  }
  if (!a && !b) {
    return true;
  }
  if (!a || !b) {
    return false;
  }
  if (!a.has) {
    a = new Set(a);
  }
  if (!b.has) {
    b = new Set(b);
  }

  if (a.size != b.size) {
    return false;
  }

  try {
    a.forEach(function (item) {
      if (!b.has(item)) {
        // short-circuit by throwing on first difference
        throw BreakException;
      }
    });
  } catch (e) {
    if (e === BreakException) {
      return false;
    } else {
      // pass on any exceptions that we didn't generate
      throw e;
    }
  }
  return true;
};

/**
 * Alias for union
 *
 * @param {Set} a
 * @param {Set} b
 * @returns {Set}
 */
module.exports.add = module.exports.union;

/**
 * Alias for difference
 *
 * @param {Set} a
 * @param {Set} b
 * @returns {Set}
 */
module.exports.subtract = module.exports.difference;

},{}]},{},[1])(1)
});


//# sourceMappingURL=set-functions.js.map
