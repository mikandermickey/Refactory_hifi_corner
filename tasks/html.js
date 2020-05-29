const gulp = require("gulp");
const rename = require("gulp-rename");
const connect = require("gulp-connect");
const ejs = require("gulp-ejs");


function html() {
    return gulp
        .src("./src/html/templates/*.ejs")
        .pipe(ejs())
        .pipe(rename(function (path) {
            if (path.basename != "index") {
                path.dirname = path.basename;
                path.basename = "index";
                path.extname = ".html";
            } else {
                path.extname = ".html"
            }
        }))
        .pipe(gulp.dest("./tmp"))
        .pipe(connect.reload());

}
function buildHTML() {
    return gulp
        .src("./src/html/templates/*.ejs")
        .pipe(ejs())
        .pipe(rename(function (path) {
            if (path.basename != "index") {
                path.dirname = path.basename;
                path.basename = "index";
                path.extname = ".html";
            } else {
                path.extname = ".html"
            }
        }))
        .pipe(gulp.dest("./dist"));

}



function watchHTML() {
    //watch har 3 argumenter.
    //1 string der beskriver mappen vi vil overvåge
    //2 object - indstillinger for hvordan den skal fungere
    //3 hvilken function skal køre

    return gulp.watch("./src/html/**/*.ejs", {
        ignoreInitial: false
    }, html);
}

module.exports = {
    watchHTML,
    buildHTML
}