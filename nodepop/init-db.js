"use strict";

const connection = require("./lib/connectMongoose");
const Anuncio = require("./models/Anuncio");
const defaultAnuncios = require("./anuncios.json");

main().catch(err => console.log("Error en la inicialización", err));

async function main() {
    await new Promise(resolve => connection.once("open", resolve));

    await initAnuncios();

    connection.close();
}

async function initAnuncios() {
    const anunciosEliminados = await Anuncio.deleteMany();
    console.log(`Eliminados ${anunciosEliminados.lenght} anuncios`);

    //crear anuncios inciales
    const insertarAnuncios = await Anuncio.insertMany(defaultAnuncios.anuncios);
    console.log(`Creados ${insertarAnuncios.lenght} anuncios`);
}
