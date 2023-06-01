export const getTareas = (req, res) =>{
    res.status(404).json("obtener las tareas")
};

export const createTareaNueva = (req, res) => {
    res.status(404).json("tarea creada");
};

export const UpdateTareaEditar = (req, res) => {
    const id = req.params.id
    console.log(id)
    res.status(404).json("se actualizo "+id)
};

export const deleteTarea = (req, res) => {
    const id = req.params.id
    console.log(id)
    res.status(404).json("eliminar tarea "+id);
}