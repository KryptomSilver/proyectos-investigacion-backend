import { Router } from "express";
import * as ProjectCtrl from "../controllers/project.controller";

const router = Router();

//obtener proyectos
router.get("/", ProjectCtrl.getProjects);
//crear proyecto
router.post("/", ProjectCtrl.createProject);
//obtener proyecto
router.get("/:id", ProjectCtrl.getProject);
//eliminar proyecto
router.delete("/:id", ProjectCtrl.deleteProject);
//actualizar proyecto
router.put("/:id", ProjectCtrl.updateProject);

export default router;
