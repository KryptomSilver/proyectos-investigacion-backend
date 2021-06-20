import { Router } from "express";
import { check } from "express-validator";
import * as CareerCtrl from "../controllers/career.controller";
import auth from "../middleware/auth";

const router = Router();

//obtener carreras
router.get("/", auth, CareerCtrl.getCareers);
//obtener carrera
router.get("/:id", auth, CareerCtrl.getCareer);
//crear carrera
router.post(
    "/",
    auth,
    [check("nombre", "El nombre es requerido").not().isEmpty()],
    CareerCtrl.createCareer
);
//eliminar carrera
router.delete("/:id", auth, CareerCtrl.deleteCareer);
//actualizar carrera
router.put(
    "/:id",
    auth,
    [check("nombre", "El nombre es requerido").not().isEmpty()],
    CareerCtrl.updateCareer
);

export default router;
