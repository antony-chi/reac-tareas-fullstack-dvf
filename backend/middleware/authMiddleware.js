import jwt from "jsonwebtoken";
import asyncHandlrer from "express-async-handler";
import User from "../models/userModel.js";

export const protect = asyncHandlrer(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //obtnemos el token del encabezado authorization
      token = req.headers.authorization.split(" ")[1];

      //verificamos el token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //obtenemos el user del token
      console.log(decoded);
      req.user = await User.findById(decoded.id).select("-password")
      console.log(req.user)


      next()

    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Access no authorization");
    }
}

if(!token){
    res.status(401)
    throw new Error("Access no authorization, no token provided");

  }
});
