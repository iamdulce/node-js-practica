var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const i18n = require("./lib/i18nConfigure");
const LangController = require("./controllers/LangController");
const LoginController = require("./controllers/LoginController");

// Conecta a la bbdd al ejecutar
require("./lib/connectMongoose");
//Probando si funciona la api con promesas
// const Anuncio = require("./models/Anuncio");
// Anuncio.find()
//     .then(results => {
//         console.log(results);
//     })
//     .catch(err => console.log(err));

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.locals.title = "Nodepop";

// middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public"))); //Mira en public primero si está un index.

app.use(i18n.init); //Ubicarlo antes de donde uso __("")

// Rutas del API
app.use("/api/anuncios", require("./routes/api/anuncios"));

// Rutas del website
const langController = new LangController();
const loginController = new LoginController();

app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

app.get("/change-locale/:locale", langController.changeLocale);
app.get("login", loginController.index);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
