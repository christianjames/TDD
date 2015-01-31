'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var uglify = require('gulp-uglifyjs');

// ---------- server ----------

gulp.task('connect', function() {
	connect.server({
		livereload: true
	});
});

// ---------- watch ----------

gulp.task('js', function () {
	gulp.src(['./modulos/**/*.js', './modulos/**/js/*.js'])
		.pipe(connect.reload());
});

gulp.task('html', function () {
	gulp.src('./modulos/**/view/*.html')
		.pipe(connect.reload());
});

gulp.task('watch', function () {
	gulp.watch(['./modulos/**/view/*.html'], ['html']);
	gulp.watch(['./modulos/**/*.js', './modulos/**/js/*.js'], ['js']);
});

// ---------- minification ----------

gulp.task('Minificar', function() {
  gulp.src(['./public/app.js', './public/modulos.js', './modulos/**/js/*.js', './modulos/**/*.config.js'])
    .pipe(concat('concatenado.js'))
    .pipe(gulp.dest('./public/'));

  gulp.src('./public/concatenado.js')
    .pipe(uglify('app.min.js'))
    .pipe(gulp.dest('./public/'))
});

// ---------- register task ----------

gulp.task('default', ['connect', 'watch', 'Minificar']);
gulp.task('minificar', ['Minificar']);