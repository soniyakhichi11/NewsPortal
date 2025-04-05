import express from "express"
import { updateUser } from "../controllers/usercontroller";
import {verifyToken} from "../"
const router = express.Router()
router.put("/update/:userId", verifyToken,updateUser)

export default router;