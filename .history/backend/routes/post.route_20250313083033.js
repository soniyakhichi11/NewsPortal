import express from "express"
import { verifyToken } from "../utils/verifyUser"
import

const router = express.Router()

router.post("/create",verifyToken,create)

export default router