import { Router } from "express";
import { check } from "express-validator";
import * as ProjectCtrl from "../controllers/project.controller";
import auth from "../middleware/auth";

const router = Router();

//obtener proyectos
router.get("/", auth, ProjectCtrl.getProjects);
//crear proyecto
router.post("/", auth,[
    check("lider","El lider es requerido").not().isEmpty(),
    check("nom_proyecto","El nombre del proyecto es requerido").not().isEmpty(),
    check("tipo_financiamiento","El tipo de financiamiento es requerido").not().isEmpty(),
    check("programa","El programa es requerido").not().isEmpty(),
    check("fecha_inicio","La fecha inicio es requerida").not().isEmpty(),
    check("fecha_fin","La fecha fin es requerida").not().isEmpty(),
    check("no_participantes","El numero de participantes es requerido").not().isEmpty()
], ProjectCtrl.createProject);
//obtener proyecto
router.get("/:id", auth, ProjectCtrl.getProject);
//eliminar proyecto
router.delete("/:id", auth, ProjectCtrl.deleteProject);
//actualizar proyecto
router.put("/:id", auth, ProjectCtrl.updateProject);

export default router;
