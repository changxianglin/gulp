// 引入依赖
// gulp 建立且运行 gulpfile.js
// express 是另外两个插件使用
// browser-sync 监听文件变化且重启
// http-proxy-middleware 且中间地理服务器之用

const gulp = require('gulp')
const express = require('express')
const browserSync = require('browser-sync')
const httpProxyMiddleware = require('http-proxy-middleware')
