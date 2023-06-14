import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import asynchandler from "express-async-handler";
import Users from "../models/userModel.js";

export const createUser = asynchandler(async (req, res) => {
  const { name, email, password } = req.body;
    //validamos que existe los datos necesarios
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Faltan datos");
  }

  //validamos el usuro existe
  const userFound = await Users.findOne({ email });
  //console.log(userFound)
  if (userFound) {
    res.status(400);
    throw new Error("email registered");
  }
  //generamos el salt
  const salt = await bcrypt.genSalt(10);
  //generamos el hash
  const hashedPassword = await bcrypt.hash(password, salt);

  const userNew = {
    name: name,
    email: email,
    password: hashedPassword,
  };
  const userSave = await Users(userNew); //pasamos al modelo
  const userSaved = await userSave.save(); //giradamos en la DB

  if (userSaved) {
    res.status(201).json({
      id: userSaved._id,
      name: userSaved.name,
      email: userSaved.email,
    });
  } else {
    res.st(404)
    throw new Error("Data incorrect, no created the user")
  }
});

export const loginUser = asynchandler(async (req, res) => {
    const {email, password} = req.body

    const userFound = await Users.findOne({email: email})
    //console.log(userFound)
    if(userFound && (await bcrypt.compare(password, userFound.password))){
        res.status(200).json({
            id: userFound._id,
            name: userFound.name,
            email: userFound.email,
            menssage: "successfull",
            token: generateToken(userFound._id)
        })
    }else{
        res.status(400)
        throw new Error("incorrect email or password")

    }

});

const generateToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn: 1080//segundos = 30 minutos
    })
}

export const misDatos = asynchandler(async (req, res) => {
  res.json(req.user);
});
