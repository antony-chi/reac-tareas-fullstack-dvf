import asyncHandler from "express-async-handler"; //mejor que try
import Tareas from "../models/tareaModel.js";

export const getTareas = asyncHandler(async (req, res) => {
  const tareas = await Tareas.find();
  res.status(200).json(tareas);
});

export const createTareaNueva = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    res.status(400);
    throw new Error("Please insert title and description");
  }

  const newTarea = {
    title: title,
    description: description,
  };
  const tareaSave = Tareas(newTarea); //pasamos al modelo
  const tareaSaved = await tareaSave.save(); //guarda en la db

  res.status(201).json(tareaSaved);
});

export const UpdateTareaEditar = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const IdFound = await Tareas.findById(id);
  if (!IdFound) {
    res.status(404);
    throw new Error("Id not Found");
  }
  const tareaUpdate = await Tareas.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  console.log(tareaUpdate);
  res.json(tareaUpdate);
});

export const deleteTarea = asyncHandler(async (req, res) => {
  const id = req.params.id;

  
  const idDelete = await Tareas.findById(id)
  console.log(idDelete)
  
  if (!idDelete) {
    res.status(404);
    throw new Error("Id no found, can not deleted");
  }
  await Tareas.findByIdAndDelete(id);
  
  res.status(200).json(`Id ${id} deleted successfully`);
});
