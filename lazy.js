function Lazy() {
  this.functions = [];
}

Lazy.prototype.add = function() {

  var fn = { fn: arguments[0] };

  if(arguments.length > 1) {
    fn.params = Array.prototype.slice.call(arguments, 1);
  }

  this.functions.push(fn);

  return this;
};

Lazy.prototype.evaluate = function(targets) {

  var that = this;

  return targets.map(function(target) {

    that.functions.forEach(function(f) {

      var params = f.params || [];
      params = params.concat(target);

      target = f.fn.apply(f, params);

    });

    return target;

  });
};

module.exports = Lazy;