'use strict';
require('babel/register');

var expect = require('expect.js');

var setFunctions = require('..');

describe('set-functions', function () {

  describe('intersection', function () {
    it('should do basic intersection', function () {
      var a = new Set([1, 2]);
      var b = new Set([1, 3, 4]);

      expect(setFunctions.intersection(a, b)).to.eql(new Set([1]));
    });
  });

  describe('union', function () {
    it('should do basic union', function () {
      var a = new Set([1, 2]);
      var b = new Set([1, 3, 4]);

      expect(setFunctions.intersection(a, b)).to.eql(new Set([1, 2, 3, 4]));
    });
  });

  describe('difference', function () {
    it('should do basic difference', function () {
      var a = new Set([1, 2]);
      var b = new Set([1, 3, 4]);

      expect(setFunctions.intersection(a, b)).to.eql(new Set([2]));
    });
  });
});


