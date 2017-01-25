/* gulp file for moving static assets from app folder to dist folder...could do more later on... */

var gulp = require('gulp');

gulp.task('copy', function() {

  gulp.src('app/**/*.html')
  .pipe(gulp.dest('dist/app'));

  gulp.src('app/**/*.css')
  .pipe(gulp.dest('dist/app'));

  gulp.src('index.html')
  .pipe(gulp.dest('dist/app'));

  gulp.src('styles.css')
  .pipe(gulp.dest('dist/app'));
});


var gutil = require('gulp-util');

gulp.task('logStart', function(input) {
  gutil.log('== Starting Tasks ==')
});
gulp.task('logEnd', function(input) {
  gutil.log('== Ending Tasks ==')
});



gulp.task('watch', function() {
  gulp.watch('app/**/*.html', ['copy']);
  gulp.watch('app/**/*.css', ['copy']);
});


gulp.task('default', ['logStart', 'copy', 'watch', 'logEnd']);

/*
might want to uglify and concat all scripts together later...

var uglify = require('gulp-uglify'),
var concat = require('gulp-concat');

gulp.task('js', function() {
  gulp.src('sripts/*.js')
  .pipe(uglify())
  .pipe(concat('script.js'))
  .pipe(gulp.dest('assets'))
});

*/
