//  gulp 是数据流
//  可读性高
//  Gulp 基于数据流 .pipe
const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
// gulp.task('first', function() {
//   return console.log('first Gulp')
// })

//  常用方法
// gulp.task -- 定义任务
//  gulp.src -- 找到需要执行任务的文件
//  gulp.dest -- 执行任务的文件的去向
//  gulp.watch -- 观察文件是否发生变化

gulp.task('message', function() {
  return console.log('test message')
})



// 拷贝文件
gulp.task('copyHtml', function() {
  gulp.src('src/*.html')
      .pipe(gulp.dest('dist'))
})

// 图片压缩
gulp.task('imageMin', function() {
  gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
})

// 压缩 js
gulp.task('minify', function() {
  gulp.src('src/js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'))
})

 sass 转行 css
gulp.task('sass', function() {
  gulp.src('src/sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('dist/sass'))
})

// 代码合并
gulp.task('script', function() {
  gulp.src('scr/js/*.js')
      .pipe(concat('main.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'))
})

//监听文件是否发生变化
gulp.task('watch', function() {
  gulp.watch('src/js/*.js', ['script'])
  gulp.watch('scr/iamges/*', ['imageMin'])
  gulp.watch('src/sass/*.scss', ['sass'])
  gulp.watch('scr/*.html', ['copyHtml'])
})
//
gulp.task('default', ['message', 'copyHtml', 'imageMin', 'minify'])
