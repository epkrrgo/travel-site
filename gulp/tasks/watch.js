var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

var onError = function (err) {
  console.log(err);
};

var paths = {html: ['./app/index.html'], css: ['./app/assets/styles/**/*.css']};

gulp.task('html', function (done) {
  browserSync.reload();
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
