import express from 'express';
const router = express.Router();
import {Signup} from "../controller/auth.controller.js"
import {signin} from "../controller/auth.controller.js"


router.post('/signup',Signup);
router.post('/signin',signin);
export default  router;