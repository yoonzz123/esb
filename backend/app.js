import express from "express";
import config from "./config/index.js";
import logger from "./loaders/logger.js";

const app = express();
const port = 80;

// router
import apiRouter from "./router/userRoutes.js";

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app
  .listen(port, () => {
    process.send(`ready`);
    logger.info(`
      🛡️  Server listening on port: ${port} 🛡️`);
  })
  .on("error", (err) => {
    logger.error(err);
    process.exit(1);
  });

//export default { server };
