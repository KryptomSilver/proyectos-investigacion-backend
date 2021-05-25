import express from "express";
import RoutesTeachers from "./routes/teachers.routes";
import RoutesAcademicBs from "./routes/academicbs.routes";
import RoutesProjects from "./routes/projects.routes";
import RoutesUsers from "./routes/users.routes";
import RoutesAuth from "./routes/auth.routes";
import RoutesParticipants from "./routes/participant.routes";
import morgan from "morgan";
import cors from "cors";

//--- Setings ---
//Crear servidor con express
const app = express();
//Declarar variable para el puerto del servidor(3000)
app.set("port", process.env.PORT || 4000);

//--- Middlewares
//Perimitir que otrso servidores se conecten
//Lista para poder configurar el cors
const configCors = {};
app.use(cors(configCors));
//Morgan para poder ver petciones
app.use(morgan("dev"));
//Permitir que la app pueda recivir json
app.use(express.json());
//Permitir que la aplicacion entienda formularios html
app.use(express.urlencoded({ extended: false }));

//--- Routs ---
app.get("/", (res, req) => {
    res.json({ mensaje: "Bienvenido a la API" });
});
//importar rutas de la aplicación para los maestros
app.use("/api/teachers", RoutesTeachers);
//importar rutas de la aplicación para los cuerpos académicos
app.use("/api/academicbs", RoutesAcademicBs);
//importar rutas de la aplicación para los maestros
app.use("/api/projects", RoutesProjects);
//importar rutas de la aplicación para los maestros
app.use("/api/users", RoutesUsers);
//importar rutas de la aplicación para los maestros
app.use("/api/auth", RoutesAuth);
//importar rutas de la aplicación para los maestros
app.use("/api/participants", RoutesAuth);

export default app;
