import express from "express";
import router from "./routes/router";
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use("/api", router);
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
