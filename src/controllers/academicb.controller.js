import AcademicB from "../models/AcademicB";
import { getPagination } from "../libs/getPagination";
import { validationResult } from "express-validator";

//Listar Cuerpo academico
export const getAcademicBs = async (req, res) => {
    try {
        const { size, page } = req.query;
        const { limit, offset } = getPagination(page, size);
        const academicsb = await AcademicB.paginate({}, { offset, limit });
        res.status(200).json(academicsb);
    } catch (error) {
        res.status(500).json({
            message: error.message || "Algo salió mal...",
        });
    }
};
// Crear Cuerpo academico
export const createAcademicB = async (req, res) => {
    // revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }
    try {
        const newAcademicB = new AcademicB(req.body);
        const saveAcademicB = await newAcademicB.save();
        res.status(201).json({ message: "Cuerpo Académico Creado" });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Algo salió mal...",
        });
    }
};
// Listar un Cuerpo academico
export const getAcademicB = async (req, res) => {
    try {
        //Verificar si el id es valido
        if (req.params.id.length > 24 || req.params.id.length < 24) {
            return res.status(400).json({ message: "El id no es valido" });
        }
        const academicb = await AcademicB.findById(req.params.id);
        //Comprobar si existe el proyecto
        if (!academicb) {
            return res
                .status(404)
                .json({ message: "No se encuentra el cuerpo académico" });
        }
        res.status(200).json(academicb);
    } catch (error) {
        res.status(500).json({
            message: error.message || "Algo salió mal...",
        });
    }
};
// Eliminar un Cuerpo academico
export const deleteAcademicB = async (req, res) => {
    try {
        //Verificar si el id es valido
        if (req.params.id.length > 24 || req.params.id.length < 24) {
            return res.status(400).json({ message: "El id no es valido" });
        }
        const academicb = await AcademicB.findByIdAndDelete(req.params.id);
        //Comprobar si existe el cuerpo académico
        if (!academicb) {
            return res
                .status(404)
                .json({ message: "No se encuentra el cuerpo académico" });
        }
        res.status(200).json({ message: `Se elimino el cuerpo académico` });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Algo salió mal...",
        });
    }
};
// Editar un Cuerpo academico
export const updateAcademicB = async (req, res) => {
    
    try {
        //Verificar si el id es valido
        if (req.params.id.length > 24 || req.params.id.length < 24) {
            return res.status(400).json({ message: "El id no es valido" });
        }
        const academicb = await AcademicB.findById(req.params.id);
        //Comprobar si existe el cuerpo académico
        if (!academicb) {
            return res
                .status(404)
                .json({ message: "No se encuentra el cuerpo académico" });
        }
        const academicbNew = await AcademicB.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        res.status(200).json({ message: "Cuerpo Académico Actualizado" });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Algo salió mal...",
        });
    }
};
