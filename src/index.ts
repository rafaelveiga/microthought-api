import dotenv from "dotenv";

const runServer = async () => {
  try {
    dotenv.config();
  } catch (err) {
    console.error(err);
  }
};

runServer();
