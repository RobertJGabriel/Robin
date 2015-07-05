var gulp = require('gulp'),
    path = require('path'),
    concat = require('gulp-concat'),
    folders = require('gulp-folders'),
    rjs = require('gulp-requirejs'),
    clean = require('gulp-clean'),
    pathToFolder = 'assests/js/app/',
    NwBuilder = require('node-webkit-builder');
var gulp = require('gulp');
var gutil = require('gulp-util');


var filesToMove2 = [
        'node_modules/bootstrap/dist/js/*',
        'node_modules/bootstrap-material/dist/js/*',
        'node_modules/jquery/dist/*'
    ];


gulp.task('moveScripts', function () {
    // preserving the folder structure
    gulp.src(filesToMove2, {
            base: ''
        })
        .pipe(gulp.dest('dist/assests/js/lib/'));
});



var filesToMove = [
        'node_modules/bootstrap/dist/css/*',
        'node_modules/bootstrap-material/dist/css/*'
    ];

gulp.task('moveCss', function () {
    // the base option sets the relative root for the set of files,
    // preserving the folder structure
    gulp.src(filesToMove, {
            base: ''
        })
        .pipe(gulp.dest('dist/assests/css/'));
});


var filesToMove3 = [
        'node_modules/bootstrap-material/dist/fonts/*'
    ];


gulp.task('moveFonts', function () {
    // preserving the folder structure
    gulp.src(filesToMove3, {
            base: ''
        })
        .pipe(gulp.dest('dist/assests/fonts/'));
});





gulp.task('nw', function () {
    var nw = new NwBuilder({
        files: './path/to/nwfiles/**/**', // use the glob format
        platforms: ['osx32', 'osx64', 'win32', 'win64']
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
gulp.task('default', ['moveScripts']);
