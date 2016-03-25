'use strict';

var versions;

if (typeof require !== 'undefined') {
  var expect = require('expect.js');
  versions = [
    {name: "src", lib: require("..")},
    {name: "prebuilt", lib: require("../dist/js/set-functions.js")},
    {name: "prebuilt min", lib: require("../dist/js/set-functions.min.js")}
  ];
} else {
  versions = [
    {name: "prebuilt min", lib: SetFunctions}
  ];
}

versions.forEach(function(version) {
  var SetFunctions = version.lib;

  describe('set-functions ' + version.name, function () {

    describe('equals', function () {
      it('should do basic equality', function () {
        var a = new Set([1, 2, 3]);
        var b = new Set([1, 2, 3]);

        expect(SetFunctions.isEqual(a, b)).to.be.ok();

        expect(SetFunctions.isEqual(a, a)).to.be.ok();
        expect(SetFunctions.isEqual(b, b)).to.be.ok();
      });

      it('should do inequality for same size', function () {
        var a = new Set([1, 2, 3]);
        var b = new Set([1, 2, 4]);

        expect(SetFunctions.isEqual(a, b)).to.not.be.ok();
        expect(SetFunctions.isEqual(b, a)).to.not.be.ok();
      });

      it('should do inequality for different size', function () {
        var a = new Set([1, 2, 3]);
        var b = new Set([1, 2, 3, 4]);

        expect(SetFunctions.isEqual(a, b)).to.not.be.ok();
        expect(SetFunctions.isEqual(b, a)).to.not.be.ok();
      });

      it('should do set equality for arrays', function () {
        var a = [1, 2, 3];
        var b = [1, 2, 3, 3, 3];

        expect(SetFunctions.isEqual(a, b)).to.be.ok();

        expect(SetFunctions.isEqual(a, a)).to.be.ok();
        expect(SetFunctions.isEqual(b, b)).to.be.ok();
      });

      it('should do set inequality for arrays', function () {
        var a = [1, 2, 3];
        var b = [1, 2, 4];

        expect(SetFunctions.isEqual(a, b)).to.not.be.ok();
        expect(SetFunctions.isEqual(b, a)).to.not.be.ok();
      });
    });

    describe('intersection', function () {
      it('should do basic intersection', function () {
        var a = new Set([1, 2]);
        var b = new Set([1, 3, 4]);
        var result = SetFunctions.intersection(a, b);
        var expected = new Set([1]);

        expect(SetFunctions.isEqual(result, expected)).to.be.ok();
      });

      it('should work with arrays', function () {
        var a = [1, 2];
        var b = [1, 3, 4];
        var result = SetFunctions.intersection(a, b);
        var expected = new Set([1]);

        expect(SetFunctions.isEqual(result, expected)).to.be.ok();
      });

      it('should handle undefined for the first argument', function () {
        var a = undefined;
        var b = new Set([1, 3, 4]);
        var result = SetFunctions.intersection(a, b);
        var expected = new Set();

        expect(SetFunctions.isEqual(result, expected)).to.be.ok();
      });

      it('should handle undefined for the second argument', function () {
        var a = [1, 2];
        var b = undefined;
        var result = SetFunctions.intersection(a, b);
        var expected = new Set();

        expect(SetFunctions.isEqual(result, expected)).to.be.ok();
      });
    });

    describe('union', function () {
      it('should do basic union', function () {
        var a = new Set([1, 2]);
        var b = new Set([1, 3, 4]);
        var result = SetFunctions.union(a, b);
        var expected = new Set([1, 2, 3, 4]);

        expect(SetFunctions.isEqual(result, expected)).to.be.ok();
      });

      it('should work with arrays', function () {
        var a = [1, 2];
        var b = [1, 3, 4];
        var result = SetFunctions.union(a, b);
        var expected = new Set([1, 2, 3, 4]);

        expect(SetFunctions.isEqual(result, expected)).to.be.ok();
      });

      it('should handle undefined for the first argument', function () {
        var a = undefined;
        var b = new Set([1, 3, 4]);
        var result = SetFunctions.union(a, b);
        var expected = new Set([1, 3, 4]);

        expect(SetFunctions.isEqual(result, expected)).to.be.ok();
      });

      it('should handle undefined for the second argument', function () {
        var a = [1, 2];
        var b = undefined;
        var result = SetFunctions.union(a, b);
        var expected = new Set([1, 2]);

        expect(SetFunctions.isEqual(result, expected)).to.be.ok();
      });
    });

    describe('difference', function () {
      it('should do basic difference', function () {
        var a = new Set([1, 2]);
        var b = new Set([1, 3, 4]);
        var result = SetFunctions.difference(a, b);
        var expected = new Set([2]);

        expect(SetFunctions.isEqual(result, expected)).to.be.ok();
      });

      it('should work with arrays', function () {
        var a = [1, 2];
        var b = [1, 3, 4];
        var result = SetFunctions.difference(a, b);
        var expected = new Set([2]);

        expect(SetFunctions.isEqual(result, expected)).to.be.ok();
      });

      it('should handle undefined for the first argument', function () {
        var a = undefined;
        var b = new Set([1, 3, 4]);
        var result = SetFunctions.difference(a, b);
        var expected = new Set([]);

        expect(SetFunctions.isEqual(result, expected)).to.be.ok();
      });

      it('should handle undefined for the second argument', function () {
        var a = [1, 2];
        var b = undefined;
        var result = SetFunctions.difference(a, b);
        var expected = new Set([1, 2]);

        expect(SetFunctions.isEqual(result, expected)).to.be.ok();
      });
    });
  });
});
