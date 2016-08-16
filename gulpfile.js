//Include Gulp
var gulp =require('gulp');

//Get Plugins

var jshint =require('gulp-jshint');
var sass =require('gulp-sass');
var concat =require('gulp-concat');
var uglify =require('gulp-uglify');
var rename =require('gulp-rename');

//Lint Task
gulp.task('lint',function () {
    return gulp.src('public/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));

});

//Compile our Sass files
gulp.task('sass',function () {
   return gulp.src('public/*.scss')
       .pipe(sass())
       .pipe(gulp.dest('build/css'))
});

//Concatinate and minify JS
gulp.task('scripts',function () {
    return gulp.src('public/*.js')
        .pipe(concat('smartapp.js'))
        .pipe(gulp.dest('build/js'))
        .pipe(rename('smartapp.min.js'))
        .pipe(uglify())
});
