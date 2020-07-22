const gulp = require('gulp');
const ts = require('gulp-typescript');
const rimraf = require('rimraf');
const RESOURCES = ['src/*.env'];

const tsProject = ts.createProject('tsconfig.json');

gulp.task('clean', (cb) => {
  return rimraf('./dist', cb);
});

gulp.task('scripts', () => {
  const tsResult = tsProject.src()
  .pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('watch', gulp.series('scripts', () => {
  gulp.watch('src/**/*.ts', ['scripts']);
}));

gulp.task('resources', function() {
    return gulp.src(RESOURCES).pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('watch', 'resources'));

gulp.task('build', gulp.series('clean', 'scripts', 'resources'));