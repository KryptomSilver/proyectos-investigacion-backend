import mongoose from "mongoose";
import config  from "./config";

//Función anonima para la conexion de base de datos
(async () => {
    const db = await mongoose.connect(config.mongodbURL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
    console.log("Database is connected to:", db.connection.name);
})();
