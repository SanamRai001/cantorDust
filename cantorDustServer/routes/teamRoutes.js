import express from 'express'
import { getTeam } from '../controller/teamController.js'

const router = express.Router()

router.get("/team", getTeam);

export default router;