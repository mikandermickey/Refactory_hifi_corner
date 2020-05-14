const gulp = require("gulp");
const rename = require("gulp-rename");
const connect = require("gulp-connect");
const ejs = require("gulp-ejs");


function html() {
    return gulp
        .src("./src/html/*.ejs")
        .pipe(ejs())
        .pipe(rename(function () {
            path.extname = ".html"
        }))
        .pipe(gulp.dest("./tmp"))
        .pipe(connect.reload());

}



function watchHTML() {
    //watch har 3 argumenter.
    //1 string der beskriver mappen vi vil overvåge
    //2 object - indstillinger for hvordan den skal fungere
    //3 hvilken function skal køre

    return gulp.watch("./src/html/*.ejs", {
        ignoreInitial: false
    }, html);
}



gulp.task("dev", function (done) {
    // Noget her
    watchHTML();
    connect.server({
        livereload: true,
        root: "tmp"
    });
    done();
})