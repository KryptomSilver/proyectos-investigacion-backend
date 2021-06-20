import Career from "../models/Career";
import { getPagination } from "../libs/getPagination";
import { validationResult } from "express-validator";

//Obtener carreras
export const getCareers = async (req, res) => {
    try {
        const { size, page } = req.query;
        const { limit, offset } = getPagination(page, size);
        const careers = await Career.paginate({}, { offset, limit });
        res.status(200).json(careers);
    } catch (error) {
        res.status(500).json({
            message: error.message || "Algo ocurrio mal",
        });
    }
};
//Obtener carrera
export const getCareer = async (req, res) => {
    try {
        const career = await Career.findById(req.params.id);
        res.status(200).json(career);
    } catch (error) {
        res.status(500).json({
            message: error.message || "Algo ocurrio mal",
        });
    }
};
//Crear carrera
export const createCareer = async (req, res) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }
    try {
        const newCareer = new Career(req.body);
        const saveCareer = await newCareer.save();
        res.status(200).json({ message: "Carrera Creada" });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Algo ocurrio mal",
        });
    }
};
//Eliminar carrera
export const deleteCareer = async (req, res) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }
    try {
        const career = await Career.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: `Se elimino la carrera` });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Algo ocurrio mal",
        });
    }
};
//Editar carrera
export const updateCareer = async (req, res) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }
    try {
        const career = await Career.findByIdAndUpdate(req.params.id, req.body);
        res.json({ message: "Carrera Actualizada" });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Algo ocurrio mal",
        });
    }
};
