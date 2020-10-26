
var gulp = require('gulp');
const { series } = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('test', done => {
    gulp
        .src('./test/test.js')
        .pipe(mocha())
        .on('error', function () {
            this.emit('end');   
        })
        ;done();
});

function clean(cb) {
    cb();
}

function build(cb) {
    cb();
}

function install(cb) {
cb();
}

// Define que tarea será la tarea por defecto o agrupaciones bajo etiquetas
//exports.default = defaultTask
exports.default = series(clean, build);