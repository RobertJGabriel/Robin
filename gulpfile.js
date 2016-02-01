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



gulp.task('build', function () {
    var nw = new NwBuilder({
        files: ['*', 'assets/css/**', 'assets/js/**', 'assets/img/**', 'assets/fonts/**'], // use the glob format
        macIcns: "assets/img/icons/logo.icns",
        platforms: ['osx32', 'osx64'],
        version: "0.12.0"
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
    gulp.src('./assets/css/styles.les').pipe(minifyCSS({
        keepSpecialComments: 0
    })).pipe(logger({
        before: 'Compressing Css ',
        after: 'Compressing finished!',
        extname: '.min.css',
        showChange: true
    })).pipe(rename({
        suffix: '.min'
    })).pipe(gulp.dest('./assets/css/'));
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
