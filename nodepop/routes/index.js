var express = require("express");
var router = express.Router();
const Anuncio = require("../models/Anuncio");

/* GET home page. */
router.get("/", function (req, res, next) {
    // res.render("index", { title: "Express" });
    res.redirect("/api/anuncios");
});

module.exports = router;
