const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//1- Esquema
const usuarioSchema = mongoose.Schema({
    email: { type: String, unique: true },
    password: String,
});

//2- Método estático que hace un hash de una password
usuarioSchema.statics.hashPassword = function (passwordEnClaro) {
    return bcrypt.hash(passwordEnClaro, 7);
};

usuarioSchema.methods.comparePassword = function (passwordEnClaro) {
    return bcrypt.compare(passwordEnClaro, this.password);
};

//3- Modelo (el modelo se define después para que pueda incluír el método antes definido)
const Usuario = mongoose.model("Usuario", usuarioSchema);

//Exporto
module.exports = Usuario;
