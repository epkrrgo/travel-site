var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

var onError = function (err) {
    console.log(err);
};

var paths = {html: ['./app/index.html'], css: ['./app/assets/styles/**/*.css']};
var jspaths = {scripts: ['./app/assets/scripts/**/*.js']};

gulp.task('html', function (callback) {
    browserSync.reload();
    callback();
});

gulp.task('cssInject', function(callback) {
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
    callback();
});

gulp.task('scriptsRefresh', function(callback) {
    browserSync.reload();
    callback();
});

gulp.task('watch', function (callback) {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });
    gulp.watch(paths.css, gulp.series('styles', 'cssInject'));
    gulp.watch(paths.html, gulp.series('html'));
    gulp.watch(jspaths.scripts, gulp.series('scripts', 'scriptsRefresh'));
    callback();
});

