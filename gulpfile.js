const connect = require("gulp-connect");
const { watchHTML } = require("./tasks/html");
const { watchSCSS } = require("./tasks/scss");
const { watchIMAGES } = require("./tasks/images")
const { watchJS } = require("./tasks/js");

function dev(done) {
    watchHTML();
    watchSCSS();
    watchIMAGES();
    watchJS();
    connect.server({
        livereload: true,
        port: 3000,
        root: "tmp"
    });
    done();
}

exports.default = dev;