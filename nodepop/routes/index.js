var express = require("express");
var router = express.Router();
const axios = require("axios");

/* GET home page. */
router.get("/", async (req, res, next) => {
    try {
        const response = await axios.get("http://127.0.0.1:3000/api/anuncios");
        const anuncios = response.data;
        console.log("Esta es la lista ", anuncios);

        res.render("index", { anuncios });
    } catch (error) {
        console.error("Error al obtener los datos de la API:", error);
        res.status(500).send("Error al obtener los datos de la API");
    }
});

module.exports = router;
