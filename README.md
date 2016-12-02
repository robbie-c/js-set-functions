# Set Functions
The [ES6 Set Class]
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
does not provide functions to union or intersect Sets, so I created this library
so that it was no longer necessary to keep rewriting these functions for every
project.

These functions do not modify their arguments, and when a Set is returned it
will be a new one.

# Usage Example

```JavaScript
var SetFunctions = require('set-functions');

var set1 = new Set([1,2,3]);
var set2 = new Set([2,3,4]);

SetFunctions.intersection(set1, set2); // Set [ 2, 3 ]

SetFunctions.union(set1, set2); // Set [ 1, 2, 3, 4 ]
SetFunctions.add(set1, set2); // alias for union

SetFunctions.difference(set1, set2); // Set [ 1 ]
SetFunctions.subtract(set1, set2); // alias for difference

SetFunctions.symmetricDifference(set1, set2); // Set [1, 4]
SetFunctions.disjunction(set1, set2); // alias for symmetricDifference

SetFunctions.isEqual(set1, set2); // false
SetFunctions.isEqual(set1, new Set([1, 2, 3])); // true
(new Set([1,2,3])) == (new Set([1,2,3])); // false, same with ===

// these functions can also take Arrays, and will treat them as Sets
SetFunctions.isEqual([1, 1, 2], [2, 1])); // true
```
