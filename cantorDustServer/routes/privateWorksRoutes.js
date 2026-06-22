import express from 'express'
import { getPrivateWorks } from '../controller/privateWorksController.js'

const router = express.Router()

router.get("/privateWorks", getPrivateWorks)

export default router;