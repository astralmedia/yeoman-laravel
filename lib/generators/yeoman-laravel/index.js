var util   = require('util'),
    yeoman = require('yeoman');

module.exports = Generator;

function Generator() {
    yeoman.generators.Base.apply(this, arguments);
}

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.getLaravel = function() {
    var cb   = this.async(),
        self = this;
    
    this.log.writeln('');
    this.log.writeln('Trying to get the latest stable version of Laravel');
    
    this.tarball('https://github.com/laravel/laravel/tarball/master', '.', function() {
        cb();
        self.log.ok('Got Laravel!');
    });
};
