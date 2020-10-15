function defaultTask(cb) {
    // Tareas previas a la llamada a función
    cb();
}

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
exports.default = defaultTask
exports.default = series(clean, build);