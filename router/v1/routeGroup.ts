import { Router } from 'express'

const router = Router()

// Test route
router.get('/', (_, res) => {
  res.json({ message: 'Test route' })
})

export default router
