import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connect_db = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`,
    );
    console.log(
      `\n Mongodb Connected!! DB_HOST:${connectionInstance.connection.host}`,
    );
  } catch (error) {
    console.error("ERROR CONNECTING FAILED", error);
    process.exit(1);
  }
};

export default connect_db;
