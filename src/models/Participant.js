import mongoose from "mongoose";
const mongoosePaginate = require("mongoose-paginate-v2");

//Tabla de proyectos
const participantSchema = new mongoose.Schema(
    {
        proyecto: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project",
        },
        maestro: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Teacher",
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
//paginacion plugin
participantSchema.plugin(mongoosePaginate);
export default mongoose.model("Participant", participantSchema);
