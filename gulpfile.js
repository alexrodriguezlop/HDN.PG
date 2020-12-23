var gulp = require('gulp');
const mocha = require('gulp-mocha');
const shell = require('gulp-shell')
const { series } = require('gulp');

function build() {
    return gulp
        .src('*.js', { read: false })
        .pipe(shell(['ls','pwd']))
}

function install() {
    return gulp
        .src('*.js', { read: false })
        .pipe(shell(['npm install --no-optional --no-install-recommends', 
                     'npm update '
                    ]))
}

function test() {
    return gulp
        .src('./test/test.js')
        .pipe(mocha())
}

// Define que tarea será la tarea por defecto o agrupaciones bajo etiquetas
exports.default = series(build, install, test);
exports.test = test;
exports.install = install;
exports.build = build;

