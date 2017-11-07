var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
	uglify = require('gulp-uglify');
 
// 压缩css
gulp.task('minifycss', function () {
    gulp.src('./style.css') 		// 需要压缩的文件
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css')) 	// 输出文件夹
});

// 压缩js
gulp.task('minifyjs',function(){
	gulp.src('./app.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
});
