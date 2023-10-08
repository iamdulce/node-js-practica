const express = require("express");
const router = express.Router();
const Anuncio = require("../../models/Anuncio");

//GET /api/anuncios
router.get("/", async (req, res, next) => {
    try {
        //filtros
        const filtroPorNombre = req.query.nombre;
        const filtroPorVenta = req.query.venta;
        const filtroPorPrecio = req.query.precio;
        const filtroPorTag = req.query.tags;
        const filtroPorFoto = req.query.foto;
        //paginación
        const skip = req.query.skip;
        const limit = req.query.limit;
        //ordenacion
        const sort = req.query.sort;
        //field selection
        const fields = req.query.fields;

        const filtro = {};
        if (filtroPorNombre) {
            filtro.nombre = filtroPorNombre;
        }
        if (filtroPorVenta) {
            filtro.venta = filtroPorVenta;
        }
        if (filtroPorPrecio) {
            filtro.precio = filtroPorPrecio;
        }
        if (filtroPorTag) {
            filtro.tags = filtroPorTag;
        }
        if (filtroPorFoto) {
            filtro.foto = filtroPorFoto;
        }

        const listaDeAnuncios = await Anuncio.lista(
            filtro,
            skip,
            limit,
            sort,
            fields
        );

        res.render("index", {
            title: "Nodepop",
            listaDeAnuncios,
        });
    } catch (err) {
        next(err); //llamada al posible error en caso de darse
    }
});

//POST /api/agentes/
//Crea un anuncio
router.post("/", async (req, res, next) => {
    try {
        const anuncioData = req.body;

        //Creo instancia de agente en memoria
        const anuncio = new Anuncio(anuncioData);

        //Persistencia(que se guarde) en BBDD
        const anuncioGuardado = await anuncio.save();

        res.json({
            results: anuncioGuardado,
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
