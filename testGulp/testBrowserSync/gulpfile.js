const gulp = require('gulp')
const express = require('express')
const browserSync = require('browser-sync').create()
const httpProxyMiddleware = require('http-proxy-middleware')


gulp.task('server', function() {
  var middleware = httpProxyMiddleware('/api', {
    target: 'http://127.0.0.0:1337/',
    changOrigin: true
  })
  browserSync.init({
    server: {
      baseDir: './',
      middleware: middleware
    }
  })
})



gulp.task('default', ['server'])
