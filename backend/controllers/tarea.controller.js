import asyncHandler from "express-async-handler"; //mejor que try
import Tareas from "../models/tareaModel.js";

export const getTareas = asyncHandler(async (req, res) => {
  const tareas = await Tareas.find();
  res.status(200).json(tareas);
});

export const createTareaNueva = asyncHandler(async (req, res) => {
  const {title, description} = req.body
  if(!title || !description){ return res.json({mensage: "missinng info"})}
  

  const newTarea = {
    title: title,
    description: description
  }
  const tareaSave = Tareas(newTarea)//pasamos al modelo
  //const tareaDb = await tareaSave.save()
  console.log(tareaSave)

  res.status(201).json(tareaSave)
  }
);

export const UpdateTareaEditar = asyncHandler(async (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.status(404).json("se actualizo " + id);
});

export const deleteTarea = asyncHandler(async (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.status(404).json("eliminar tarea " + id);
});
