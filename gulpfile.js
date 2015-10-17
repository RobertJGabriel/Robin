var gulp = require('gulp'),
    path = require('path'),
    concat = require('gulp-concat'),
    folders = require('gulp-folders'),
    rjs = require('gulp-requirejs'),
    clean = require('gulp-clean'),
    NwBuilder = require('nw-builder'),
    gutil = require('gulp-util'),
    say = require('say'),
    less = require('gulp-less'),
    minifyCSS  = require('gulp-minify-css');


gulp.task('build', function() {
    var nw = new NwBuilder({
        files: ['*', 'assets/css/**', 'assets/js/**', 'assets/img/**','assets/fonts/**'], // use the glob format
        macIcns: "assets/img/icons/logo.icns",
        platforms: ['osx32', 'osx64'],
        version: "0.12.0"
    });
    //Log stuff you want
    nw.on('log', console.log);
    // Build returns a promise
    nw.build().then(function() {
        console.log('all done!');
    }).catch(function(error) {
        console.error(error);
    });
});



gulp.task('less', function () {
    gulp.src('./assets/css/styles.less')
        .pipe(less()
            .on('error', gutil.log)
            .on('error', gutil.beep)
            .on('error', function (err) {
                console.log('err', err);
                var pathToFile = err.fileName.split('\\');
                    file = pathToFile[pathToFile.length -1];
                say.speak('Albert', 'Less is fucked---' + file + '--- Line ' + err.lineNumber);
            })
        )
        .pipe(minifyCSS({keepSpecialComments: 1}))
        .pipe(gulp.dest('./assets/css/'));
});


// Default Task
gulp.task('default', ['build']);
