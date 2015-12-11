var gulp = require('gulp');

gulp.task('build_dep_js', function() {
  gulp.src([
    'node_modules/angular/*.min.js',
    'node_modules/angular-material/*.min.js',
    'node_modules/angular-aria/*.min.js',
    'node_modules/angular-animate/*.min.js',
    'node_modules/angular-resource/*.min.js',
    'node_modules/angular-route/*.min.js',
    'node_modules/angular-sanitize/*.min.js',
    'node_modules/angular-translate/dist/*.min.js'
  ], { base: 'node_modules' })
    .pipe(gulp.dest('public/static'));
});

gulp.task('build_dep_requirejs', function() {
  gulp.src([
    'node_modules/requirejs/*.js'
  ], { base: 'node_modules' })
    .pipe(gulp.dest('public/static'));
});

gulp.task('build_dep_css', function() {
  gulp.src([
    'node_modules/angular-material/*.min.css'
  ], { base: 'node_modules' })
    .pipe(gulp.dest('public/static'));
});

gulp.task('build_dependence', [
  'build_dep_js',
  'build_dep_requirejs',
  'build_dep_css'
]);

gulp.task('default', ['build_dependence']);
