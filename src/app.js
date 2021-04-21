import express from "express";
import RoutesTeachers from "./routes/teachers.routes";

const app = express();
//Declarar variable para el puerto del servidor(3000)
app.set("port", process.env.PORT || 3000);

app.get("/", (res, req) => {
    res.json({ mensaje: "Bienvenido a la API" });
});
//importar rutas de la aplicación
app.use('/api/teachers',RoutesTeachers);

export default app;
