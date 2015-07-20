var gulp = require('gulp'),
    path = require('path'),
    concat = require('gulp-concat'),
    folders = require('gulp-folders'),
    rjs = require('gulp-requirejs'),
        clean = require('gulp-clean'),
    pathToFolder = 'assests/js/app/',
    NwBuilder = require('node-webkit-builder'),
    gutil = require('gulp-util');








gulp.task('nw', function () {

    var nw = new NwBuilder({
    files: ['*','assests/css/**','assests/js/**','assests/img/**','assests/fonts/**'], // use the glob format
        macIcns:  "assests/img/icons/logo.icns",
        platforms: ['osx32', 'osx64']
    });

    //Log stuff you want

    nw.on('log', console.log);

    // Build returns a promise
    nw.build().then(function () {
        console.log('all done!');
    }).catch(function (error) {
        console.error(error);
    });


});









gulp.task('requirejsBuild', function () {
    rjs({
            baseUrl: 'path/to/your/base/file.js',
            out: 'FILENAME\_TO\_BE\_OUTPUTTED',
            shim: {
                // standard require.js shim options
            },
            // ... more require.js options
        })
        .pipe(gulp.dest('dist/assests/js/app/')); // pipe it to the output DIR
});





// Default Task
gulp.task('default', ['nw']);
