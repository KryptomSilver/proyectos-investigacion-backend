import { Router } from "express";
import * as TeacherCtrl from "../controllers/teacher.controller";

const router = Router();

//obtener maestros paginacion
router.get("/", TeacherCtrl.getTeachers);
//obtener todos maestros
router.get("/all", TeacherCtrl.getallTeachers);
//crear maestro
router.post("/", TeacherCtrl.createTeacher);
//obtener maestro
router.get("/:id", TeacherCtrl.getTeacher);
//eliminar maestro
router.delete("/:id", TeacherCtrl.deleteTeacher);
//actualizar maestro
router.put("/:id", TeacherCtrl.updateTeacher);

export default router;
