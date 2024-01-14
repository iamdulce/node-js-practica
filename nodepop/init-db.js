"use strict";

require("dotenv").config();
const readline = require("node:readline");
const connection = require("./lib/connectMongoose");
const Anuncio = require("./models/Anuncio");
const Usuario = require("./models/Usuario");
const defaultAnuncios = require("./db/anuncios.json");
const defaultUsuarios = require("./db/usuarios.json");

main().catch(err => console.log("Error en la inicialización", err));

async function main() {
    await new Promise(resolve => connection.once("open", resolve));

    const borrar = await pregunta(
        "¿Estás seguro de que quieres borrar la base de datos y cargar datos iniciales?"
    );
    if (!borrar) {
        process.exit;
    }

    await initUsuarios();
    await initAnuncios();

    connection.close();
}

async function initAnuncios() {
    //eliminar anuncios inciales
    const anunciosEliminados = await Anuncio.deleteMany();
    console.log(`Eliminados ${anunciosEliminados.deletedCount} anuncios`);

    //crear anuncios inciales
    const insertarAnuncios = await Anuncio.insertMany(defaultAnuncios.anuncios);
    console.log(`Creados ${insertarAnuncios.length} anuncios`);
}

async function initUsuarios() {
    const usuariosEliminados = await Usuario.deleteMany();
    console.log(`Eliminados ${usuariosEliminados.deletedCount} usuarios`);

    const usuariosData = await Promise.all(
        defaultUsuarios.usuarios.map(async usuario => ({
            email: usuario.email,
            password: await hashPassword(usuario.password),
        }))
    );

    const insertarUsuarios = await Usuario.insertMany(usuariosData);
    console.log(`Creados ${insertarUsuarios.length} usuarios`);
}

const hashPassword = async password => {
    return await Usuario.hashPassword(password);
};

function pregunta(texto) {
    return new Promise((resolve, reject) => {
        // conectar readline con la consola
        const ifc = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        ifc.question(texto, respuesta => {
            ifc.close();
            resolve(respuesta.toLowerCase() === "si");
        });
    });
}
