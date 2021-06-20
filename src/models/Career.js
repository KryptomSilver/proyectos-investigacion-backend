import { Schema, model } from "mongoose";
const mongoosePaginate = require("mongoose-paginate-v2");

// Tabla de carreras
const careerSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
//paginacion plugin
careerSchema.plugin(mongoosePaginate);
export default model("Carrer", careerSchema);
