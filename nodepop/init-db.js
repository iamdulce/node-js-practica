"use strict";

const connection = require("./lib/connectMongoose");
const Anuncio = require("./models/Anuncio");

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
    const insertarAnuncios = await Anuncio.insertMany([
        {
            nombre: "Bicicleta",
            venta: true,
            precio: 230.15,
            foto: "bici.jpg",
            tags: ["lifestyle", "motor"],
        },
        {
            nombre: "Iphone 3GS",
            venta: false,
            precio: 50.0,
            foto: "iphone.jpg",
            tags: ["lifestyle", "mobile"],
        },
    ]);
    console.log(`Creados ${insertarAnuncios.lenght} anuncios`);
}
