import express from "express";
import logger from "./loaders/logger.js";
import history from "connect-history-api-fallback";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const __filename = fileURLToPath(import.meta.url);
const app = express();
const port = 80;

app.use(express.json());

// router
//import apiRouter from "./router/userRoutes.js";
import router from "./router/index.js";

//app.use("/api", apiRouter);
app.use(history());
app.use(express.static(path.join(__dirname, "public")));
// 이 부분이 없으면 아래코드에서 index.html을 로드하지 못한다.
app.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "public/index.html")); //클라이언트 html 라우터 연결
});

//app.use("/", router);

app
  .listen(port, () => {
    logger.info(`
      🛡️  Server listening on port: ${port} 🛡️`);
  })
  .on("error", (err) => {
    logger.error(err);
    process.exit(1);
  });

//export default { server };
