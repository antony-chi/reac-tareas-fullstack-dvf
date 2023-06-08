import express from "express";
const app = express();
import errorHandler from "./middleware/errorMiddleware.js";
//---import router ---
import routerTareas from "./router/routes.tareas.js";
import routerUser from "./router/routes.user.js";

//---global setting --
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//----usamos routes ---
app.use("/api/tareas", routerTareas);
app.use("/api/users", routerUser);

app.use(errorHandler);

export default app;
