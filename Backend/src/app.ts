import express from "express";
import router from "./controllers/controller";
import errorMiddleware from "./middlewares/error";
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
