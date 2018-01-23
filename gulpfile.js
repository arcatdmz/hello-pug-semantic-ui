const gulp = require('gulp');
const pug = require('gulp-pug');
const packageJson = require('./package.json');

gulp.task('semantic', require('./semantic/tasks/build'));

gulp.task('pug', function(){
  return gulp.src('pug/**/*.pug')
    .pipe(pug({
      locals: { package: packageJson },
      verbose: true,
      pretty: true
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['semantic', 'pug']);
