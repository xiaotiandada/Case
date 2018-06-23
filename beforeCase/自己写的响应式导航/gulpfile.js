var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify'); // js压缩
var imagemin = require('gulp-imagemin'); // image压缩
var jshint = require('gulp-jshint');  // js代码规范性检查
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
//var browserSync = require('browser-sync');
//var watch = require('gulp-watch');

// sass
gulp.task('build:sass', function () {
    gulp.src('./src/sass/*.scss')


      .pipe(sass().on('error', sass.logError))

      
      .pipe(rename({suffix: '.min.sass'}))   
      .pipe(minifycss())  // 压缩css
      .pipe(gulp.dest('dist/css'))
  });


// 3. 定义任务
// 定义css合并压缩任务
// gulp.task('build:css', function() {
//     gulp.src('./dist/css/*.css')
//         // .pipe(concat('base.min.css'))
//         .pipe(rename({suffix: '.min'}))   // 压缩代码  *.min.css
//         .pipe(minifycss())
//         .pipe(gulp.dest('dist/css/')); // 
// })



//定义js合并压缩任务
gulp.task('build:js', function() {
    gulp.src('src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))

        //.pipe(concat('main.min.js'))
        .pipe(rename({suffix: '.min'}))   //   *.min.js
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));
})

//定义图片压缩任务
gulp.task('build:image', function() {
    gulp.src('src/imgs/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/imgs'));
})

gulp.task('build', ['build:sass'/* ,'build:css' */, 'build:js', 'build:image']);


   
gulp.task('watch-sass', function () {
    gulp.watch(['./src/sass/*.scss','./src/js/*.js'], ['build:sass','build:js']);
  });
