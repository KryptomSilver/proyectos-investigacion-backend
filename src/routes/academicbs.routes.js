import { Router } from "express";
import * as AcademicBCtrl from "../controllers/academicb.controller";
import auth from "../middleware/auth";
import { check } from "express-validator";
const router = Router();

//obtener cuerpos académicos
router.get("/", auth, AcademicBCtrl.getAcademicBs);
//crear cuerpo académico
router.post(
    "/",
    auth,
    [
        check("nombre", "El nombre del proyecto es obligatorio")
            .not()
            .isEmpty(),
        check("clave", "La clave es obligatoria").not().isEmpty(),
        check("fecha_fin", "La fecha fin es obligatoria").not().isEmpty(),
        check("fecha_inicio", "La fecha inicio es obligatoria").not().isEmpty(),
        check("lgac", "El lgac es obligatorio").not().isEmpty(),
    ],
    AcademicBCtrl.createAcademicB
);
//obtener cuerpo académico
router.get("/:id", auth, AcademicBCtrl.getAcademicB);
//eliminar cuerpo académico
router.delete("/:id", auth, AcademicBCtrl.deleteAcademicB);
//actualizar cuerpo académico
router.put("/:id", auth, AcademicBCtrl.updateAcademicB);

export default router;
