import express from "express";
const app = express()

app.get("/",() =>{
    console.log("holaraiz")
    return res.json("hola bienvenido")
});

export default app;