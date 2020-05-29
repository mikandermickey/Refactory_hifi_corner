const connect = require("gulp-connect");
const { watchHTML, buildHTML } = require("./tasks/html");
const { watchSCSS, buildSCSS } = require("./tasks/scss");
const { watchIMAGES, buildIMAGE } = require("./tasks/images")
const { watchJS, buildJS } = require("./tasks/js");

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
function build(done) {
    buildHTML();
    buildIMAGE();
    buildJS();
    buildSCSS();
}

exports.default = dev;
exports.build = build;