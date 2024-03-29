//cargo librería
const i18n = require("i18n");
const path = require("node:path");

//configuro la librería
i18n.configure({
    locales: ["en", "es"],
    directory: path.join(__dirname, "..", "locales"),
    defaultLocale: "en",
    autoReload: true,
    syncFiles: true, //sincroniza info de locales entre todos los JSON
    cookie: "nodepop-locale", //mira si hay cookies que le indique que idoma debe utilizar, sino usa lo de la cabecera Accept-Language
});

//para usar en scripts
i18n.setLocale("en");

//exporto librería
module.exports = i18n;
