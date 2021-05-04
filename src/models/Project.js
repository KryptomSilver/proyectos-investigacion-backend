import { model, Schema } from "mongoose";
const mongoosePaginate = require("mongoose-paginate-v2");

//Tabla de proyectos
const projectSchema = new Schema(
    {
        lider: {
            type: String,
            required: true,
            trim: true,
        },
        nom_proyecto: {
            type: String,
            required: true,
            trim: true,
        },
        tipo_financiamiento: {
            type: String,
            required: true,
            trim: true,
        },
        programa: {
            type: String,
            required: true,
            trim: true,
        },
        fecha_inicio: {
            type: Date,
            required: true,
        },
        fecha_fin: {
            type: Date,
            required: true,
        },
        no_participantes: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
//paginacion plugin
projectSchema.plugin(mongoosePaginate);
export default model("Project", projectSchema);
