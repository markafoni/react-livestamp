var gulp = require('gulp'),
    browserify = require('browserify'),
    less = require('gulp-less'),
    cssmin = require('gulp-minify-css'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    babelify = require('babelify');

gulp.task('js', () => {
  var bundler = browserify({
    entries: './static/js/app.jsx',
    extensions: ['.jsx'],
    debug: true
  });

  return bundler.transform(babelify).bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./static/build'));
});

gulp.task('less', function() {
  return gulp.src('./static/less/styles.less')
  .pipe(less())
  .pipe(cssmin())
  .pipe(gulp.dest('./static/build'));
})

gulp.task('watch', ['js', 'less'], function () {
  gulp.watch('./static/js/app.jsx', ['js']);
  gulp.watch('./static/less/styles.less', ['less']);
});

gulp.task('default', ['watch']);
