const express = require("express");
const router = express.Router();

router.get("/:locale", (req, res, next) => {
    const locale = req.params.locale;

    //cookie con el nuevo idioma
    res.cookie("nodepop-locale", locale, {
        maxAge: 1000 * 60 * 60 * 24 * 30, //caduca por inactividad en 30 días
    });

    //respondo con una redirección a la misma página de donde venía (que guarda la cabecera Referer)
    res.redirect(req.get("referer"));
});

module.exports = router;
