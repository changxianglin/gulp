const gulp = require('gulp')
const browserSync = require('browser-sync')
const httpProxyMiddle = require('http-proxy-middleware')

gulp.task('msg', function() {
    console.log('first msg')
})

gulp.task('server', function() {
    var middleware = httpProxyMiddle(['/user'], {
        target: 'http://127.0.0.1:8080'
    })
    browserSync.init({
        server: {
            baseDir: './',
            middleware: middleware
        }
    })
})
gulp.task('default', ['msg', 'server'])