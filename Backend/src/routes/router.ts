import { Router } from "express";
import userRoutes from "./game";

const router = Router();

router.use("/users", userRoutes);

export default router;
