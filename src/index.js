import dotenv from "dotenv";
import connect_db from "./db/index.js";

dotenv.config({
  path: "./.env",
});
connect_db();

/* First approach to connect to database

import express from "express";
const app = express();

//we are using IIIFE to make sure we connect to database before we start the server in which we have to use ()() to invoke the function
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);

    app.on("error", (error) => {
      console.log("Error", error);
      throw error;
    });

    app.listen(process.env.port || 3000, () => {
      console.log(`App is listening on port ${process.env.port || 3000}`);
    });
  } catch (error) {
    console.error("ERROR CONNECTING TO DATABASE", error);
  }
})();
*/
