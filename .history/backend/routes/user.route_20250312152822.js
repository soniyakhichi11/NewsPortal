import express from "express"
import {deleteUser, updateUser } from "../controllers/usercontroller.js";
import {verifyToken} from "../utils/verifyUser.js"
const router = express.Router()
router.put("/update/:userId", verifyToken,updateUser)
router.delete("/delete/:userId", verifyToken,deleteUser)
router.post()
export default router;
