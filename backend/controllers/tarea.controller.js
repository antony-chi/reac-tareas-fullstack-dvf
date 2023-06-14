import asyncHandler from "express-async-handler"; //mejor que try
import Tareas from "../models/tareaModel.js";

export const getTareas = asyncHandler(async (req, res) => {
  const tareas = await Tareas.find({ user: req.user.id });//user: toma el valor que propiedo de protec en "req.user.id"

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
    user: req.user.id//este user.id viene del middlewera de auth por medio del token
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
  //verificamos que el id sea igual al id proveniente del token
  if(IdFound.user.toString() !== req.user.id){
    res.status(400)
    throw new Error("accesses no authorized")
  }

  const tareaUpdate = await Tareas.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  console.log(tareaUpdate);
  res.json(tareaUpdate);
});

export const deleteTarea = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const idDelete = await Tareas.findById(id);
  console.log(idDelete);

  if (!idDelete) {
    res.status(404);
    throw new Error("Id no found, can not deleted");
  }

  //verificamos que el id sea igual al id proveniente del token
  if(idDelete.user.toString() !== req.user.id){
    res.status(400)
    throw new Error("accesses no authorized")
  }

  await Tareas.findByIdAndDelete(id);

  res.status(200).json(`Id ${id} deleted successfully`);
});
