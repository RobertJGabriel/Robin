var gulp = require('gulp');
var less = require('gulp-less');
var gutil = require('gulp-util');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var chalk = require('chalk');
var logger = require('gulp-logger');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var runSequence = require('run-sequence');
var htmlmin = require('gulp-html-minifier');
var rename = require("gulp-rename");
var psi = require('psi');
var gulpgo = require('gulp-go');
var shell = require('gulp-shell');
var NwBuilder = require('nw-builder');
var clean = require('gulp-clean');



gulp.task('build', ['less','clean','scripts'], function () {
    var nw = new NwBuilder({
        files: ['*', 'assets/css/**', 'assets/js/**', 'assets/img/**', 'assets/fonts/**'], // use the glob format
        macIcns: "assets/img/icons/logo.icns",
        platforms: ['osx32', 'osx64', 'win32', 'win64'],
        version: "0.12.3"
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

gulp.task('less', function() {
   gulp.src('./assets/css/styles.less')
        .pipe(less()
            .on('error', gutil.log)
            .on('error', gutil.beep)
            .on('error', function (err) {
                console.log('err', err);
                var pathToFile = err.fileName.split('\\');
                    file = pathToFile[pathToFile.length -1];
            })
        )
        .pipe(minifyCSS({keepSpecialComments: 1}))
        .pipe(gulp.dest('./assets/css/'));
});


gulp.task('clean', function () {
  return gulp.src(['build'], {read: false})
    .pipe(clean());
});

gulp.task('scripts', function() {
    gulp.src('./assets/js/*.*').pipe(uglify()).pipe(logger({
        before: 'Starting Compressing Javascript',
        after: 'Compressing complete!',
        extname: '.js',
        showChange: false
    })).pipe(rename({
        suffix: '.min'
    })).pipe(gulp.dest('./dist/desk/assets/js'));
});



// Default Task
gulp.task('default', ['build']);
