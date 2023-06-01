import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const DBUSER = process.env.MONGO_USER
const DBPASS = process.env.MONGO_PASSW
const DB_URI = process.env.MONGO_URI

const connectDB = async () => {
    try {
        const db = await mongoose.connect(`mongodb+srv://${DBUSER}:${DBPASS}${DB_URI}`,{useNewUrlParser: true});
        return console.log("database connected");
    } catch (error) {
        console.error("error conexion database ", error)
    }

}

export default connectDB;