import express from 'express'
import {getServices} from "../controller/servicesController.js"

const router = express.Router()

router.get("/services", getServices)

export default router;