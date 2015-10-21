/**
 * JavaScript Set operations
 *
 * All functions expect an ES6 Set type or a compatible polyfill.
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
export function intersection(a, b) {
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
export function union(a, b) {
  'use strict';

  var result = new Set(a);

  b.forEach(function (item) {
    if (b.has(item)) {
      result.add(item);
    }
  });

  return result;
}

/**
 * Alias for union
 *
 * @param {Set} a
 * @param {Set} b
 * @returns {Set}
 */
export var add = union;

/**
 * The set of items in a but not in b
 *
 * @param {Set} a
 * @param {Set} b
 * @returns {Set}
 */
export function difference(a, b) {
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
 * Alias for difference
 *
 * @param {Set} a
 * @param {Set} b
 * @returns {Set}
 */
export var subtract = difference;
