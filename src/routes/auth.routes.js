// Rutas para autenticar usuarios
import { Router } from "express";
import  * as authController from "../controllers/auth.controller";
import auth from "../middleware/auth";

const router = Router();
// Iniciar sesión
// api/auth
router.post("/", authController.authUser);

// Obtiene el usuario autenticado
router.get("/", auth, authController.authenticatedUser);
module.exports = router;
