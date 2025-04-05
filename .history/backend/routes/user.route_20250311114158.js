import express from "express"
import {up}
const router = express.Router()
router.put("/update/:userId", updateUser)

export default router;