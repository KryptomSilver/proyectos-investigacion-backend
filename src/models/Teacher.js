import { Schema, model } from "mongoose";
const mongoosePaginate = require("mongoose-paginate-v2");

// Tabla de maestros
const teacherSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true,
            //el trim es para eliminar los espacios en los strings
            trim: true,
        },
        nombramiento: {
            type: String,
            required: true,
        },
        sexo: {
            type: String,
            required: true,
        },
        ingreso_institucion: {
            type: Date,
            required: true,
        },
        antiguedad: {
            type: Date,
            required: true,
        },
        grado_max: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
//paginacion plugin
teacherSchema.plugin(mongoosePaginate);
export default model("Teacher", teacherSchema);
