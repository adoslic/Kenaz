var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var babel = require('gulp-babel');



gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});


gulp.task('watch', ['build'], function (){
  gulp.watch('scss/**/*.scss', ['sass','useref']).on('change', browserSync.reload); 
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('*.html', ['useref']).on('change', browserSync.reload); 
  gulp.watch('js/**/*.js', ['useref']).on('change', browserSync.reload);
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
  })
});

gulp.task('useref', function(){
  return gulp.src('*.html')
    .pipe(useref())
     //Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js',babel({
        presets: ['@babel/env']
    })))
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});


gulp.task('images', function(){
  return gulp.src('img/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('dist/img'))
});

gulp.task('fonts', function() {
  return gulp.src('fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
});

gulp.task('clean:dist', function() {
  return del.sync('dist');
});


gulp.task('build', function (callback) {
  runSequence('clean:dist', 'sass',
      ['useref', 'images', 'fonts'],'browserSync',
    callback
  )
});

gulp.task('default', ['watch']);