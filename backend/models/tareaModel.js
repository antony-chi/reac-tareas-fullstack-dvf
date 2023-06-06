import { Schema, model } from "mongoose";

const tareaShema = Schema(
  {
    title: {
      type: String,
      required: [true, "por favor escribe el texto de la tarea"],
    },
    description: String,
  },
  {
    timetamps: true,
  }
);

export default model("tarea", tareaShema);
