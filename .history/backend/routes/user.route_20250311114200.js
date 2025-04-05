import express from "express"
import { updateUser } from "../controllers/usercontroller";
const router = express.Router()
router.put("/update/:userId", updateUser)

export default router;