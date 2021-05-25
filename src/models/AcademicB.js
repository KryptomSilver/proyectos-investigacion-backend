import { Schema, model } from "mongoose";
const mongoosePaginate = require("mongoose-paginate-v2");

//Tabla Cuerpos Academicos
const AcademicBShema = new Schema(
    {
        nombre: {
            type: String,
            required: true,
            //el trim es para eliminar los espacios en los strings
            trim: true,
        },
        clave: {
            type: String,
            required: true,
        },
        fecha_fin: {
            type: Date,
            required: true,
        },
        fecha_inicio: {
            type: Date,
            required: true,
        },
        lgac: {
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
AcademicBShema.plugin(mongoosePaginate);
export default model("AcademicB", AcademicBShema);
