import express from 'express'
import { verifyToken } from '../utils/verifyUser'

const router = express.Router()

router.post("/create",verifyToken,cretae)

export default router

