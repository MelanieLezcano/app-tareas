
let listar = require('./funcionesDeTareas')
let process = require ('process')
let argv = process.argv

switch (argv[2]) {
    case 'listar':
        listar()
        break;

        case undefined :
        console.log(" \nAtención - Tienes que pasar una acción\nLas acciones disponibles son: listar\n--------------------------------------");
        break;

    default:
        console.log("------------------------------------\nNo entiendo qué quieres hacer\nLas acciones disponibles son: listar\n------------------------------------");
        break;
}


