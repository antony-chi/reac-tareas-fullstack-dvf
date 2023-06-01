import express from "express";
const app = express();
import errorHandler from "./middleware/errorMiddleware.js";
//---import router ---
import  routerTareas from "./router/routes.tareas.js";

//---global setting --
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use("/api/",routerTareas)

app.use(errorHandler)

export default app;



