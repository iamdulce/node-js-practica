const mongoose = require("mongoose");

//Se ejecuta cuando hay un evento error
mongoose.connection.on("error", err => {
    console.log("Error de conexión", err);
});

//Al ejecutarse el evento open, se ejecuta la función
mongoose.connection.once("open", () => {
    console.log("Conectado a MongoDB en", mongoose.connection.name);
});

//mongoose.connect("mongodb://127.0.0.1/nodepop");
mongoose.connect(process.env.MONGODB_URI);

module.exports = mongoose.connection;
