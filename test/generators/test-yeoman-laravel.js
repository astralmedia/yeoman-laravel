var path    = require('path'),
    helpers = require('yeoman-generators').test;

describe('Yeoman-Laravel generator test', function() {
    before(helpers.before(path.join(__dirname, './temp')));

    it('runs sucessfully', function(done) {
        helpers.runGenerator('yeoman-laravel', done);
    });

    it('creates expected files', function() {

        // Use helpers.assertFile() to help you test the output of your generator
        //
        // Example:
        //
        //    // check file exists
        //    helpers.assertFile('app/model/post.js');
        //    // Check content
        //    helpers.assertFile('app/model/post.js', /Backbone\.model/);
        it('should create expected files');

    });
});
