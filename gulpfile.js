var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');

var onError = function (err) {
  console.log(err);
};

var paths = {html: ['./app/index.html'], css: ['./app/assets/styles/**/*.css']};

gulp.task('html', function (done) {
  console.log('Imagine something useful being done to your HTML ...');
  done();
});

gulp.task('styles', function () {
  return gulp.src('./app/assets/styles/styles.css')
      .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
      .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('default', function (done) {
  console.log('Hooray - we created a gulp task!');
  done();
});

gulp.task('watch', function () {
  gulp.watch(paths.css, gulp.series('styles'));
  gulp.watch(paths.html, gulp.series('html'));
});
