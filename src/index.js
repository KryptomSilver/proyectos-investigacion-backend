import express from "express";

const app = express();
//Declarar variable para el puerto del servidor(3000)
app.set("port", process.env.PORT || 3000);
//Iniciar el servidor con express
app.listen(app.get("port"));
console.log("Server on port", app.get("port"));
