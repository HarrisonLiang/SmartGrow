var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin');
    
// Scripts Tasks
// Uglifies
gulp.task('scripts', function(){
    gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'source/js/*.js'])
    .pipe(concat('main.js'))        
    .pipe(uglify())
    .pipe(gulp.dest('app/scripts'));
});

//Styles Tasks
gulp.task('styles', function(){
    console.log('runs styles');
});

//SCSS Tasks
gulp.task('sass', function(){
    return gulp.src([
        'node_modules/bootstrap/scss/bootstrap.scss',
        'Source/scss/main.scss'])
    //.pipe(sass().on('error', sass.logError))
    .pipe(sass({
        outputStyle: 'compressed'
        }).on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('app/styles'));
});

gulp.task('images', function() {
    return gulp.src('source/images/**')
        .pipe(imagemin())
        .pipe(gulp.dest('app/images'))
})

gulp.task('sass:watch', function () {
  gulp.watch('source/scss/*.scss', ['sass']);
});

gulp.task('watch', function() {
    gulp.watch('source/js/*.js', ['scripts']);
    gulp.watch('source/scss/**/*.scss', ['sass']);
    gulp.watch('source/images/**', ['images']);
});

// Default Runs Everything
gulp.task('default', ['scripts', 'styles', 'sass', 'images']);

