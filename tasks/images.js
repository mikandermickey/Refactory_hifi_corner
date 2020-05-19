const gulp = require("gulp");
const connect = require("gulp-connect");
const imagemin = require("gulp-imagemin");

function image() {
    return gulp.src("src/images/**/*")
        .pipe(imagemin([
            imagemin.mozjpeg({ quality: 75, progressive: true }),
        ]))
        .pipe(gulp.dest("tmp/assets/images"))
        .pipe(connect.reload());
}

function watchIMAGES() {
    return gulp.watch("./src/images/**/*", {
        ignoreInitial: false
    }, image);
}

module.exports = {
    watchIMAGES
}

