import mongoose from "mongoose";
import { config } from "dotenv";
config();

const DB_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    //const db = await mongoose.connect(`mongodb+srv://${DBUSER}:${DBPASS}${DB_URI}`,{useNewUrlParser: true});
    const db = await mongoose.connect(DB_URI, { useNewUrlParser: true });
    return console.log("database connected " + db.connection.host);
  } catch (error) {
    console.error("error conexion database ", error);
  }
};

export default connectDB;
