var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
var browserSync = require('browser-sync').create();

var onError = function (err) {
  console.log(err);
};

var paths = {html: ['./app/index.html'], css: ['./app/assets/styles/**/*.css']};

gulp.task('html', function (done) {
  browserSync.reload();
  done();
});

gulp.task('styles', function () {
  return gulp.src('./app/assets/styles/styles.css')
      .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
      .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('default', function (done) {
  console.log('Default gulp task!');
  done();
});

gulp.task('watch', function () {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });
  gulp.watch(paths.css, gulp.series('styles', 'cssInject'));
  gulp.watch(paths.html, gulp.series('html'));
});

gulp.task('cssInject', function() {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});
