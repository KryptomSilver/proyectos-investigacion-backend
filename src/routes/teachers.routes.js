import { Router } from "express";
import { check } from "express-validator";
import * as TeacherCtrl from "../controllers/teacher.controller";
import auth from "../middleware/auth";

const router = Router();

//obtener maestros paginacion
router.get("/", auth, TeacherCtrl.getTeachers);
//obtener todos maestros
router.get("/all", auth, TeacherCtrl.getallTeachers);
//Crear maestro
router.post(
    "/",
    auth,
    [
        check("nombre", "El nombre del proyecto es obligatorio")
            .not()
            .isEmpty(),
        check("nombramiento", "El nombramiento es obligatorio").not().isEmpty(),
        check("sexo", "El sexo es obligatorio").not().isEmpty(),
        check(
            "ingreso_institucion",
            "El ingreso a la institución es obligatorio"
        )
            .not()
            .isEmpty(),
        check("antiguedad", "La antiguedad es obligatoria").not().isEmpty(),
        check("grado_max", "Grado maximo").not().isEmpty(),
    ],
    TeacherCtrl.createTeacher
);
//obtener maestro
router.get("/:id", auth, TeacherCtrl.getTeacher);
//eliminar maestro
router.delete("/:id", auth, TeacherCtrl.deleteTeacher);
//actualizar maestro
router.put("/:id", auth, TeacherCtrl.updateTeacher);

export default router;
