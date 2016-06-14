var gulp  = require('gulp');
var babel = require('gulp-babel');

gulp.task('build', function () {
  return gulp.src('./livestamp.jsx').pipe(babel()).pipe(gulp.dest('./dist'));
});

gulp.task('watch', ['build'], function () {

  // watch jsx.
  gulp.watch('./livestamp.jsx', ['build']);
});

gulp.task('default', ['watch']);
