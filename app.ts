import cors from 'cors'
import helmet from 'helmet'
import express from 'express'
import router from './router/router'
import compression from 'compression'
import { Borgen, Logger } from 'borgen'
import { StatusCodes } from 'http-status-codes'

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(helmet())
app.use(Borgen({}))
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.get('/ping', (_, res) => {
  res.status(StatusCodes.OK).json({ message: 'pong', alive: true })
})

app.use('/', router)

app.listen(PORT, () => {
  Logger.info({ message: `Server is running on port ${PORT}` })
})
