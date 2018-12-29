//1.配置所需模块
const gulp = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const nano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
//2.发布相关任务
gulp.task('img',function(){
	gulp.src('src/img/*').pipe(imagemin()).pipe(gulp.dest('dist/img'));
})
// gulp.task('js',function(){
// 	gulp.src('src/js/*.js').pipe(uglify('index.min.js')).pipe(gulp.dest('dist/js'));
// })
gulp.task('sass',function(){
	gulp.src('src/sass/*.scss').pipe(sass()).pipe(nano()).pipe(rename({"suffix" : ".min"})).pipe(dest('dist/js'));
})
gulp.task('default',function(){
	// gulp.watch('src/js/*.js',['js']);
	gulp.watch('src/sass/*.scss',['sass']);
	gulp.watch('src/img/*',['img']);
})