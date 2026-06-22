import express from 'express'
import { getDevelopmentWorks } from '../controller/developmentWorksController.js'

const router = express.Router()

router.get("/developmentWorks", getDevelopmentWorks)

export default router;