import User from "../models/User";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken'
import { validationResult } from "express-validator";

export const createUser = async (req, res) => {
    // revisar si hay errores
    const errores = validationResult(req);
    if( !errores.isEmpty() ) {
        return res.status(400).json({errores: errores.array() })
    }
    // extraer email y password
    const { email, password } = req.body;

    try {
        // Revisar que el user registrado sea unico
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ msg: "El usuario ya existe" });
        }

        // crea el nuevo user
        user = new User(req.body);

        // Hashear el password
        const salt = await bcryptjs.genSalt(10);
        user.password = await bcryptjs.hash(password, salt);

        // guardar user
        await user.save();

        // Crear y firmar el JWT
        const payload = {
            user: {
                id: user.id,
            },
        };

        // firmar el JWT
        jwt.sign(
            payload,
            process.env.SECRETA,
            {
                expiresIn: 3600, // 1 hora
            },
            (error, token) => {
                if (error) throw error;

                // Mensaje de confirmación
                res.json({ token });
            }
        );
    } catch (error) {
        console.log(error);
        res.status(400).send("Hubo un error");
    }
};
