var gulp = require('gulp');
var concatCss = require('gulp-concat-css');

gulp.task('default', function () {
    return gulp.src('src/css/*.css')
        .pipe(concatCss("css/style.css"))
        .pipe(gulp.dest('dist/'));
});