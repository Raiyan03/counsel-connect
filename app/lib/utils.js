import { config } from "dotenv";
import { User } from "./model";
config();

const connection = {};

export const connectToDB = async () => {
  if (connection.isConnected){
    console.log("Using existing connection");
    return;
  }
  try{
    const db = await mongoose.connect(process.env.MONGODB_URI);
    connection.isConnected = db.connections[0].readyState;
    console.log("Database connected successfully!");
  } catch(error){
    console.log("DB Connection Error", error);
  }
}