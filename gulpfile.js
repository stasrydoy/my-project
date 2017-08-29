const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
	return gulp.src('1nanowork/sass/**/*.scss')
				.pipe(sass())
				.pipe(gulp.dest('1nanowork/css/style-css'))
});