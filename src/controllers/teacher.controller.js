import Teacher from "../models/Teacher";
import { getPaginationTeachers } from "../libs/getPaginationTeachers";

//Listar maestros
export const getTeachers = async (req, res) => {
    try {
        const { size, page } = req.query;
        const { limit, offset } = getPaginationTeachers(page, size);
        const teachers = await Teacher.paginate({}, { offset, limit });
        res.json(teachers);
    } catch (error) {
        res.status(500).json({
            message:
                error.message ||
                "Algo ocurrio mal mientras se obtenia el maestro",
        });
    }
};
//Listar todos maestros
export const getallTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find()
        res.json(teachers);
    } catch (error) {
        res.status(500).json({
            message:
                error.message ||
                "Algo ocurrio mal mientras se obtenia el maestro",
        });
    }
};
// Crear maestro
export const createTeacher = async (req, res) => {
    try {
        const newTeacher = new Teacher(req.body);
        const saveTecher = await newTeacher.save();
        res.json({ message: "Maestro Creado" });
    } catch (error) {
        res.status(500).json({
            message:
                error.message || "Algo ocurrio mal mientras creaba el maestro",
        });
    }
    
};
// Listar un maestro
export const getTeacher = async (req, res) => {
    try {
        const teacher = await Teacher.findById(req.params.id);
        res.json(teacher);
    } catch (error) {
        res.status(500).json({
            message:
                error.message || "Algo ocurrio mal mientras listaba el maestro",
        });
    }
};
// Eliminar un maestro
export const deleteTeacher = async (req, res) => {
    try {
        const teacher = await Teacher.findByIdAndDelete(req.params.id);
        res.json({ message: `Se elimino el maestro` });
    } catch (error) {
        res.status(500).json({
            message:
                error.message ||
                "Algo ocurrio mal mientras se eliminaba el maestro",
        });
    }
};
// Editar un maestro
export const updateTeacher = async (req, res) => {
    try {
        const teacher = await Teacher.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        res.json({ message: "Maestro Actualizado" });
    } catch (error) {
        res.status(500).json({
            message:
                error.message ||
                "Algo ocurrio mal mientras se editaba el maestro",
        });
    }
};
