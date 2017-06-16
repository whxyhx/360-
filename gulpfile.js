//引入功能
var gulp = require("gulp"),
    sass = require("gulp-sass"),
    webserver = require("gulp-webserver"),
    htmlmin = require("gulp-htmlmin");


//注册任务
gulp.task('sass', function () {
	gulp.src('src/sass/*.scss')
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
});

gulp.task('webserver', function () {
	gulp.src('./dist/')
	.pipe(webserver({
		livereload:true,
		open:true
	}));
});

gulp.task("htmlmin", function () {
	gulp.src('src/**/*.html')
	.pipe(htmlmin())
	.pipe(gulp.dest('dist'))
});

gulp.task('watch', function () {
	gulp.watch('src/**/*.html',["htmlmin"]);
    gulp.watch('src/sass/*.scss',["sass"]);
})


//执行任务
gulp.task('default', ['sass','webserver','htmlmin','watch'])