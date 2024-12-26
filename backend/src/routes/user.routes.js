import express from "express";
// import verifyToken from "../middlewares/verifyToken.js";
import {getAllUser} from "../controllers/user.controller.js"
const router = express.Router();

router.get("/get-users", getAllUser);


export default router;
