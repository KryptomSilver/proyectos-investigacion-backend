import { Schema, model } from "mongoose";

// Tabla de maestros
const userSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true,
            //el trim es para eliminar los espacios en los strings
            trim: true,
        },
        email: {
            type: String,
            require: true,
            trim: true,
            unique: true,
        },
        password: {
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

export default model("User", userSchema);
