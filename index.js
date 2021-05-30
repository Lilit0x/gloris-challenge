import chalk from 'chalk'
import express from 'express'
import dotenv from 'dotenv'
// import connectToDB from './config/db.js'
import intentRouter from './router/index.js'

dotenv.config()

const app = express()
app.use(express.json())
// connect to DB
// connectToDB()

// Mount Routers
app.use('/', intentRouter)


export default app