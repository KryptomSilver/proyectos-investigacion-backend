import Project from "../models/Project";
import { getPagination } from "../libs/getPagination";
import { validationResult } from "express-validator";

//Listar proyectos
export const getProjects = async (req, res) => {
    try {
        const { size, page } = req.query;
        const { limit, offset } = getPagination(page, size);
        const projects = await Project.paginate({}, { offset, limit });
        res.json(projects);
    } catch (error) {
        res.status(500).json({
            message:
                error.message ||
                "Algo ocurrio mal mientras se obtenia el proyecto",
        });
    }
};
// Crear proyecto
export const createProject = async (req, res) => {
    // revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }
    try {
        const newProject = new Project(req.body);
        const saveProject = await newProject.save();
        res.json({ message: "Proyecto Creado" });
    } catch (error) {
        res.status(500).json({
            message:
                error.message || "Algo ocurrio mal mientras creaba el proyecto",
        });
    }
    
};
// Listar un proyecto
export const getProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        res.json(project);
    } catch (error) {
        res.status(500).json({
            message:
                error.message || "Algo ocurrio mal mientras listaba el proyecto",
        });
    }
};
// Eliminar un proyecto
export const deleteProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);
        res.json({ message: `Se elimino el proyecto` });
    } catch (error) {
        res.status(500).json({
            message:
                error.message ||
                "Algo ocurrio mal mientras se eliminaba el proyecto",
        });
    }
};
// Editar un proyecto
export const updateProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        res.json({ message: "Proyecto Actualizado" });
    } catch (error) {
        res.status(500).json({
            message:
                error.message ||
                "Algo ocurrio mal mientras se editaba el proyecto",
        });
    }
};
