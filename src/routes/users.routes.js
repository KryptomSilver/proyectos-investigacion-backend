import { Router } from "express";
import { check } from "express-validator";
import * as UserCtrl from "../controllers/user.controller";
import auth from "../middleware/auth";

const router = Router();

router.post(
    "/",
    [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("email", "Agrega un email válido").isEmail(),
        check(
            "password",
            "El password debe ser minimo de 6 caracteres"
        ).isLength({ min: 6 }),
        check(
            "password",
            "El password es obligatorio"
        ).not().isEmpty()
    ],
    UserCtrl.createUser
);

export default router;
