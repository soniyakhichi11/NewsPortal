import express from "express"
import {getUserById,
    getUsers,updateUser } from "../controllers/usercontroller.js";
import {verifyToken} from "../utils/verifyUser.js"
const router = express.Router()
router.put("/update/:userId", verifyToken,updateUser)

export default router;