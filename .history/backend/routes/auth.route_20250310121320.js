 import express from 'express';
 import {signup} from '../controllers/auth.controller.js';
import {signin} from '../controllers/auth.controller.js'
import {google} from "../"
 const router = express.Router();
 router.post("/signup",signup);
 router.post("/signin",signin);
 router.post("/google",google);

 export default router;
