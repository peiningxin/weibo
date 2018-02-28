var gulp = require('gulp');
var uglifyJs = require('gulp-uglify');
var connect  = require('gulp-connect');
var rubySass = require('gulp-ruby-sass');
var concat = require('gulp-concat');

// 压缩JS
// gulp.task('minifyjs', function () {
//     return gulp.src('./js/*.js')
//         .pipe(uglifyJs())
//         .pipe(concat('all.js'))
//         .pipe(gulp.dest('./js/dist/'));
// });

// 编译Sass
gulp.task('sass', function () {
     rubySass('scss/*.scss', {
        sourcemap: false,
        style: 'expanded',
    }).pipe(gulp.dest('css/'))
    .pipe(gulp.dest('D:/phpStudy/WWW/project/vivo/css/'));
});

//复制js
gulp.task('copyJs', function () {
     gulp.src('js/*.js')
        .pipe(gulp.dest('D:/phpStudy/WWW/project/vivo/js/'));
});
//复制php
gulp.task('copyPhp', function () {
     gulp.src('php/*.php')
        .pipe(gulp.dest('D:/phpStudy/WWW/project/vivo/php/'));
                         
});
//复制图片
gulp.task('copyImg', function () {
     gulp.src('img/**/*')
        .pipe(gulp.dest('D:/phpStudy/WWW/project/vivo/img/'));
});

// 监听Html
gulp.task('html', function () {
     gulp.src('*.html')
    .pipe(gulp.dest("D:/phpStudy/WWW/project/vivo/"));
});


// 监听
gulp.task('all', ['sass','copyJs','copyPhp','copyImg','html'],function () {
    gulp.watch('scss/*.scss', ['sass']); 
    gulp.watch('js/*.js', ['copyJs']);
    gulp.watch('*.html', ['html']);
    gulp.watch('img/**/*', ['copyImg']);
    gulp.watch('php/*.php', ['copyPhp']);
});




