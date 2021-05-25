import { Router } from "express";
import { check } from "express-validator";
import * as ParticipantCtl from "../controllers/participant.controller";
import auth from "../middleware/auth";
//Creamos el router
const router = Router();

//Obtener participantes
router.get("/", auth, ParticipantCtl.getParticipants);
//Agregar participante
router.post(
    "/",
    auth,
    [
        check("proyecto", "El proyecto es obligatorio").not().isEmpty(),
        check("maestro", "El maestro es obligatorio").not().isEmpty(),
    ],
    ParticipantCtl.createParticipant
);
//Eliminar participante
router.delete("/:id", auth, ParticipantCtl.deleteParticipant);
//Actualizar participante
router.put("/:id", auth, ParticipantCtl.updateParticipant);

export default router;
