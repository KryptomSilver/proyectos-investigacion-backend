import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import User from "../models/User";
export const authUser = async (req, res) => {
    // extraer el email y password
    const { email, password } = req.body;

    try {
        // Revisar que sea un user registrado
        let usuario = await User.findOne({ email });
        if (!usuario) {
            return res.status(400).json({ msg: "El usuario no existe" });
        }

        // Revisar el password
        const passCorrecto = await bcryptjs.compare(password, usuario.password);
        if (!passCorrecto) {
            return res.status(400).json({ msg: "Password Incorrecto" });
        }

        // Si todo es correcto Crear y firmar el JWT
        const payload = {
            usuario: {
                id: usuario.id,
            },
        };

        // firmar el JWT
        jwt.sign(
            payload,
            process.env.SECRETA,
            {
                expiresIn: 7200, // 2 horas
            },
            (error, token) => {
                if (error) throw error;

                // Mensaje de confirmación
                res.json({ token });
            }
        );
    } catch (error) {
        console.log(error);
    }
};
export const authenticatedUser = async (req, res) => {
    try {
        const usuario = await User.findById(req.usuario.id).select("-password");
        res.json({ usuario });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Hubo un error" });
    }
};
