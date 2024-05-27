import { Router } from 'express'
import testRouter from './routeGroup'

const router = Router()

// Route groups
router.use('/test', testRouter)

export default router
