import express from "express"

const router = express.Router()
router.put("/update/:userId", updateUser)

export default router;