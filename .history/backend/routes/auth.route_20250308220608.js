 import express from 'express';
 import {signup} from '../controllers/auth.controller.js';
import {}
 const router = express.Router();
 router.post("/signup",signup);
 router.post("/signin",signin);

 export default router;
