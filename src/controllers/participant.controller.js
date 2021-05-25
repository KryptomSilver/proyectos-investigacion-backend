import Participant from "../models/Participant";
import Project from "../models/Project";
import { getPagination } from "../libs/getPagination";
import { validationResult } from "express-validator";
import Teacher from "../models/Teacher";

//Obtener participantes con paginación
export const getParticipants = async (req, res) => {
    try {
        const { size, page } = req.query;
        const { limit, offset } = getPagination(page, size);
        const participants = await Participant.paginate({}, { offset, limit });
        //Enviamos los participantes
        res.json(participants);
    } catch (error) {
        res.status(500).json({
            message: error.message || "Ups... algo salio mal",
        });
    }
};
// Obtener participantes sin paginación
export const getallParticipants = async (req, res) => {
    try {
        const participants = await Participant.find();
        //Enviamos los participantes
        res.json(participants);
    } catch (error) {
        res.status(500).json({
            message: error.message || "Ups... algo salio mal",
        });
    }
};
// Eliminar participante
export const deleteParticipant = async (req, res) => {
    try {
        const participant = await Participant.findByIdAndDelete(re.params.id);
        //Enviar mensaje de confirmación
        res.json({ message: "Se elimino el participante" });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Ups... algo salio mal",
        });
    }
};
// Crear participante
export const createParticipant = async (req, res) => {
    // revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }
    try {
        const { proyecto, maestro } = req.body;
        // revisar el ID de proyecto
        proyecto = await Project.findById(proyecto);
        // revisar el ID de maestro
        teacher = await Teacher.findById(maestro);
        //Comprobar si existe el proyecto
        if (!proyecto) {
            return res.status(404).json({ message: "Proyecto no valido" });
        }
        //Comprobar si existe el maestro
        if (!teacher) {
            return res.status(404).json({ message: "Maestro no valido" });
        }
        const newParticipant = new Participant(req.body);
        const saveParticipant = await newParticipant.save();
        res.json({ message: "Participante Creado" });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Ups... algo salio mal",
        });
    }
};
//Actualizar participante
export const updateParticipant = async (req, res) => {
    try {
        // revisar el ID
        let participant = await Participant.findById(req.params.id);
        // si el participante existe o no
        if (!participant) {
            return res.status(404).json({ msg: "Participante no encontrado" });
        }
        const { proyecto, maestro } = req.body;
        // revisar el ID de proyecto
        proyecto = await Project.findById(proyecto);
        // revisar el ID de maestro
        teacher = await Teacher.findById(maestro);
        //Comprobar si existe el proyecto
        if (!proyecto) {
            return res.status(404).json({ message: "Proyecto no valido" });
        }
        //Comprobar si existe el maestro
        if (!teacher) {
            return res.status(404).json({ message: "Maestro no valido" });
        }
        //Actualizar el participante
        await Participant.findByIdAndUpdate(
            req.params.id,
            req.body
        );
    } catch (error) {
        res.status(500).json({
            message: error.message || "Ups... algo salio mal",
        });
    }
};
