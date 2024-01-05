"use strict";

const connection = require("./lib/connectMongoose");
const Anuncio = require("./models/Anuncio");
const Usuario = require("./models/Usuario");
const defaultAnuncios = require("./anuncios.json");

main().catch(err => console.log("Error en la inicialización", err));

async function main() {
    await new Promise(resolve => connection.once("open", resolve));

    const borrar = await pregunta(
        "¿Estás seguro de que quieres borrar la base de datos y cargar datos iniciales?"
    );
    if (!borrar) {
        process.exit;
    }

    await initAnuncios();
    await initusuarios();

    connection.close();
}

async function initAnuncios() {
    //eliminar anuncios inciales
    const anunciosEliminados = await Anuncio.deleteMany();
    console.log(`Eliminados ${anunciosEliminados.lenght} anuncios`);

    //crear anuncios inciales
    const insertarAnuncios = await Anuncio.insertMany(defaultAnuncios.anuncios);
    console.log(`Creados ${insertarAnuncios.lenght} anuncios`);
}

async function initusuarios() {
    const usuariosEliminados = await Usuario.deleteMany();
    console.log(`Eliminados ${usuariosEliminados.lenght} usuarios`);

    const insertarUsuarios = await Usuario.insertMany({
        email: "user@example.com",
        password: "1234",
    });
    console.log(`Creados ${insertarUsuarios.lenght} usuarios`);
}
