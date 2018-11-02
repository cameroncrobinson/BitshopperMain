const {series, parallel} = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass');
const sassPartialsImported = require('gulp-sass-partials-imported');
const cached = require('gulp-cached');
sass.compiler = require('node-sass');

let scss_dir = 'css/main.scss';
let includePaths = ['css/sass'];


function defaultTask(cb) {
  // place code for your default task here
  cb();
}

function scssPile(cb){
  return gulp.src('css/main.scss')
  .pipe( sassPartialsImported(scss_dir, includePaths))
  .pipe(sass({ includePaths: scss_dir }).on('error', sass.logError))
  .pipe(gulp.dest('css/main.css'));
cb();
};


gulp.task('watch', function () {

    gulp.watch('css/main.scss', ['sass'])

});

exports.default = series(defaultTask, scssPile);
