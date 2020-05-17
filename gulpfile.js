const connect = require("gulp-connect");
const { watchHTML } = require("./tasks/html");

function dev() {
    watchHTML();
    connect.server({
        livereload: true,
        port: 3000,
        root: "tmp"
    });
}

exports.default = dev;