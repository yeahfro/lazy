var expect = require('expect');
var Lazy = require('./lazy');

describe('Lazy', function() {

  describe('#evaluate()', function() {

    it('should evaluate a function to multiple by two', function() {

      const lazy = new Lazy();
      var actual = lazy
        .add(function timesTwo(a) { return a * 2; })
        .evaluate([ 1 ]);

      expect(actual[0]).toEqual(2);
      expect(actual.length).toEqual(1);

    });

    it('should evaluate a function to add numbers', function() {

      const lazy = new Lazy();
      var actual = lazy
        .add(function plus(a, b) { return a + b; }, 1)
        .evaluate([ 2 ]);

      expect(actual[0]).toEqual(3);
      expect(actual.length).toEqual(1);

    });

    it('should evaluate a function with an arbitrary number of arguments', function() {

      const lazy = new Lazy();
      var actual = lazy
        .add(function plus(a, b, c, d) { return a + b + c + d; }, 1, 1, 1)
        .evaluate([ 2 ]);

      expect(actual[0]).toEqual(5);
      expect(actual.length).toEqual(1);

    });

    it('should evaluate multiple added functions', function() {

      const lazy = new Lazy();
      var actual = lazy
        .add(function timesTwo(a) { return a * 2; })
        .add(function plus(a, b) { return a + b; }, 1)
        .evaluate([ 1, 2, 3 ]);

      expect(actual[0]).toEqual(3);
      expect(actual[1]).toEqual(5);
      expect(actual[2]).toEqual(7);
      expect(actual.length).toEqual(3);

    });


  });

});