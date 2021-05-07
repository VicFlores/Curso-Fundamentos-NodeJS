const gulp = require('gulp');

gulp.task('build', (cb) => {
  console.log('Construyendo el sitio');
  setTimeout(cb, 1200);
  cb();
});
