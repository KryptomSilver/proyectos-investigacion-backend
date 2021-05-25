import AcademicB from "../models/AcademicB";
import { getPagination } from "../libs/getPagination";

//Listar Cuerpo academico
export const getAcademicBs = async (req, res) => {
    try {
        const { size, page } = req.query;
        const { limit, offset } = getPagination(page, size);
        const academicsb = await AcademicB.paginate({}, { offset, limit });
        res.json(academicsb);
    } catch (error) {
        res.status(500).json({
            message:
                error.message ||
                "Algo ocurrio mal mientras se obtenia el cuerpo académico",
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
        res.json({ message: "Cuerpo Académico Creado" });
    } catch (error) {
        res.status(500).json({
            message:
                error.message ||
                "Algo ocurrio mal mientras creaba el cuerpo académico",
        });
    }
};
// Listar un Cuerpo academico
export const getAcademicB = async (req, res) => {
    try {
        const academicb = await AcademicB.findById(req.params.id);
        res.json(academicb);
    } catch (error) {
        res.status(500).json({
            message:
                error.message ||
                "Algo ocurrio mal mientras listaba el cuerpo académico",
        });
    }
};
// Eliminar un Cuerpo academico
export const deleteAcademicB = async (req, res) => {
    try {
        const academicb = await AcademicB.findByIdAndDelete(req.params.id);
        res.json({ message: `Se elimino el cuerpo académico` });
    } catch (error) {
        res.status(500).json({
            message:
                error.message ||
                "Algo ocurrio mal mientras se eliminaba el cuerpo académico",
        });
    }
};
// Editar un Cuerpo academico
export const updateAcademicB = async (req, res) => {
    try {
        const academicb = await AcademicB.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        res.json({ message: "Cuerpo Académico Actualizado" });
    } catch (error) {
        res.status(500).json({
            message:
                error.message ||
                "Algo ocurrio mal mientras se editaba el cuerpo académico",
        });
    }
};
