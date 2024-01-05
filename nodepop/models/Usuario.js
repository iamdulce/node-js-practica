const mongoose = require("mongoose");

//Esquema
const usuarioSchema = mongoose.Schema({
    email: String,
    password: String,
});

//Modelo
const Usuario = mongoose.model("Usuario", usuarioSchema);

//Exporto
module.exports = Usuario;
