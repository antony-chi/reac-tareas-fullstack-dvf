export const getTareas = (req, res) =>{
    res.status(404).json("obtener las tareas")
};

export const createTareaNueva = (req, res) => {
    const text = req.body.texto
    console.log(text)
    if(!text){
        return res.status(400).json("please insert text")
    }else{
        return res.json("se creo la tarea")
    }

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