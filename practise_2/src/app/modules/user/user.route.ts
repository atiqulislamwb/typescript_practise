import express from "express";
import {
  createUserController,
  getUserController,
  getUserControllerById,
} from "./user.controller";
const router = express.Router();

router.post("/create-user", createUserController);
router.get("/all-users", getUserController);
router.get("/:id", getUserControllerById);
export default router;
