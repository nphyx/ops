"use strict";
var gulp = require("gulp");
var babel = require("gulp-babel");
var gulp_exec = require("gulp-exec");
var pug = require("gulp-pug");
var sass = require("gulp-sass");
var webpack = require("webpack");
var del = require("del");
var path = require("path");
var appcache = require("gulp-appcache");
var {exec, spawn} = require("child_process");

const webpackConfig = {
	entry:path.resolve(__dirname, "target/scripts/app.js"),
	devtool:"source-map",
	output:{
		filename:"app.js",
		path:path.resolve(__dirname, "dist/scripts")
	},
	plugins:[
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
  ]
}

gulp.task("manifest", ["webpack"], function() {
	var config = {
		relativePath:"./",
		hash:true,
		preferOnline:true,
		network:["http://*", "https://*", "*"],
		filename:"ops.manifest",
		exclude:"ops.manifest"
	}
	return gulp.src(["dist/**/*"])
		.pipe(appcache(config))
		.pipe(gulp.dest("dist"));
});

gulp.task("clean:scripts", function() {
	return del(["target/scripts/*", "dist/scripts/*"]);
});

gulp.task("clean:assets", function() {
	return del(["target/assets/*", "dist/assets/*"]);
});

gulp.task("clean:styles", function() {
	return del(["dist/styles/*"]);
});

gulp.task("clean:markup", function() {
	return del(["dist/*.html"]);
});

gulp.task("scripts", ["clean:scripts"], function() {
	return gulp.src(["src/scripts/*js","src/scripts/*/*js"])
	.pipe(babel())
	.pipe(gulp.dest("target/scripts/"));
});

gulp.task("markup", ["clean:markup"], function() {
	return gulp.src(["src/markup/*pug"])
	.pipe(pug())
	.pipe(gulp.dest("dist"))
});

gulp.task("styles", ["clean:styles"], function() {
	return gulp.src(["src/styles/*scss"])
	.pipe(sass().on("error", sass.logError))
	.pipe(gulp.dest("dist/styles/"))
});

gulp.task("assets", ["clean:assets"], function() {
	return gulp.src("src/assets/*.*")
	.pipe(gulp.dest("dist/assets/"));
});

gulp.task("webpack", ["scripts", "markup", "styles", "assets"], function(callback) {
	webpack(webpackConfig, function(err) {
		if(err) console.log(err);
		callback();
	});
});

gulp.task("deploy", function(cb) {
	exec("git subtree push --prefix dist hub gh-pages", function(err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});

gulp.task("local-server", function(cb) {
	const server = spawn("python", ["-m","http.server"], {
		cwd:"dist",
		detached:true
	});
	server.unref();
	cb();
});

gulp.task("default", ["manifest"]);
