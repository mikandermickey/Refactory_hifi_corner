const connect = require("gulp-connect");
const { watchHTML } = require("./tasks/html");

function dev(done) {
    watchHTML();
    connect.server({
        livereload: true,
        port: 3000,
        root: "tmp"
    });
    done();
}

exports.default = dev;