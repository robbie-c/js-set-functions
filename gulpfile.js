'use strict';

var babelify = require("babelify");
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var merge = require('merge-stream');

gulp.task('javascript', function () {
  var b = browserify({
    entries: './src/set-functions.js',
    debug: true,
    standalone: 'SetFunctions',
    transform: [babelify]
  });

  return merge(
    b.bundle()
      .pipe(source('set-functions.min.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
      .on('error', gutil.log)
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/js/')),
    b.bundle()
      .pipe(source('set-functions.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .on('error', gutil.log)
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/js/'))
  );
});
