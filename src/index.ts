import dotenv from "dotenv";
import App from "./app";

const runServer = async () => {
  try {
    dotenv.config();
    const app = new App();

    await app.start();
  } catch (err) {
    console.error(err);
  }
};

runServer();
