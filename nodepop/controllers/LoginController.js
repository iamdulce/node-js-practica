const Usuario = require("../models/Usuario");

class LoginController {
    index(req, res, next) {
        res.render("login");
    }

    async post(req, res, next) {
        try {
            const { email, password } = req.body;

            //Busca usuario en bbdd
            const usuario = await Usuario.findOne({ email: email });

            // si no lo encuentro o la contraseña no coincide --> error
            if (!usuario || !(await usuario.comparePassword(password))) {
                res.locals.error = req.__("Invalid credentials");
                res.locals.email = email;
                res.render("login");
                return;
            }

            res.redirect("/private");
        } catch (err) {
            next(err);
        }
    }
}

module.exports = LoginController;
