import { Schema, model } from "mongoose";

const tareaShema = Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      requiere: true,
      ref: "User"
    },

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
