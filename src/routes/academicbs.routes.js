import { Router } from "express";
import * as AcademicBCtrl from "../controllers/academicb.controller";

const router = Router();

//obtener cuerpos académicos
router.get("/", AcademicBCtrl.getAcademicBs);
//crear cuerpo académico
router.post("/", AcademicBCtrl.createAcademicB);
//obtener cuerpo académico
router.get("/:id", AcademicBCtrl.getAcademicB);
//eliminar cuerpo académico
router.delete("/:id", AcademicBCtrl.deleteAcademicB);
//actualizar cuerpo académico
router.put("/:id", AcademicBCtrl.updateAcademicB);

export default router;
