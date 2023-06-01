
import app from "./app.js";
import {config} from "dotenv";
config();
const port = process.env.PORT|| 3000//metodo de dotenv variable de entonrno
//---importamos la conexion a la base
import connectDB from "./database.js";
connectDB();//llamamos a la funcion de la base
//llamamos la conecion
app.listen(port);
console.log("server listen port ", port)