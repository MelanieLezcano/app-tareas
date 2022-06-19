let tareas = require('./tareas.json')


let listar = () => {
    console.log("Listado de tareas");
    console.log("-----------------");

for (let i = 0; i < tareas.length; i++){
    console.log(i + ". " + tareas[i].estado + " - " + tareas[i].titulo);

}
}


module.exports = listar