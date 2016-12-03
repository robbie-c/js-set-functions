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

/**
 * The set of items in a and b but not in their intersection.
 *
 * @param {Set} a
 * @param {Set} b
 * @returns {Set}
 */
module.exports.symmetricDifference = function symmetricDifference(a, b) {
  'use strict';

  if (!b) {
    return new Set(a);
  }

  var result = new Set();

  if (a) {
    if (!b.has) {
      b = new Set(b);
    }

    if (!a.has) {
      a = new Set(a);
    }

    a.forEach(function (item) {
      if (!b.has(item)) {
        result.add(item);
      }
    });

    b.forEach(function (item) {
      if (!a.has(item)) {
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
 * @returns {boolean}
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

  if (a.size !== b.size) {
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
    }
    // pass on any exceptions that we didn't generate
    throw e;
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

/**
 * Alias for symmetric difference
 *
 * @param {Set} a
 * @param {Set} b
 * @returns {Set}
 */
module.exports.disjunction = module.exports.symmetricDifference;
