/*var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', async function() {
	gulp.src('*.scss')
		.pipe(sass())
		.pipe(gulp.dest('../MountainCss/'));
});

gulp.task('sass:watch', async function() {
	gulp.watch('*.scss', ['sass']);
});*/

var gulp = require('gulp'),
    sass = require('gulp-sass');

// ------------------------------------------------- configs
var paths = {
  sass: {
    src: 'styles/scss/**/*.scss',
    dest: 'styles/css',
    opts: {

    }
  }
};

// ---------------------------------------------- Gulp Tasks
gulp.task('sass', function () {
  return gulp.src(paths.sass.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.sass.dest))
});

// ------------------------------------ Gulp Testing Message
/*gulp.task('message', function(){
  console.log('It works!!');
});*/

// ---------------------------------------------- Gulp Watch
gulp.task('watch:styles', function () {
  gulp.watch(paths.sass.src, gulp.series('sass'));
});

gulp.task('watch', gulp.series('sass',
  gulp.parallel('watch:styles')
));


// -------------------------------------------- Default task
/*gulp.task('default', gulp.series('sass', 
  gulp.parallel('message', 'watch')
));*/