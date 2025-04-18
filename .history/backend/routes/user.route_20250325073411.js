import express from "express"
import {deleteUser, signout, updateUser } from "../controllers/usercontroller.js";
import {verifyToken} from "../utils/verifyUser.js"
const router = express.Router()
router.put("/update/:userId", verifyToken,updateUser)
router.delete("/delete/:userId", verifyToken,deleteUser)
router.post("/signout",signout)
router.get("/getusers",verifyToken,getUsers)
export default router;
