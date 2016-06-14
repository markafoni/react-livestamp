var gulp  = require('gulp');
var babel = require('gulp-babel');

gulp.task('build', function () {
  return gulp.src('./livestamp.jsx').pipe(babel()).pipe(gulp.dest('./dist'));
});

gulp.task('default', ['build']);
