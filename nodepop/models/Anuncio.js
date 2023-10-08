const mongoose = require("mongoose");

//Se define Schema de Anuncio
const anuncioSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [String],
});

// Métodos
anuncioSchema.statics.lista = function (filtro, skip, limit, sort, fields) {
    const query = Anuncio.find(filtro);
    query.skip(skip);
    query.limit(limit);
    query.sort(sort);
    query.select(fields);
    return query.exec();
};

//Se crea el modelo de anuncio
const Anuncio = mongoose.model("Anuncio", anuncioSchema);

// Exportar el modelo de agente (opcional)
module.exports = Anuncio;
