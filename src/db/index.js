import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connect_db = async () => {
  try {
  } catch (error) {
    console.error("ERROR CONNECTING TO DATABASE", error);
    process.exit(1);
  }
};
