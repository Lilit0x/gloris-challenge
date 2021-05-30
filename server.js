import chalk from 'chalk'
import express from 'express'
import dotenv from 'dotenv'
import connectToDB from './config/db.js'
import intentRouter from './router/index.js'

dotenv.config()

const app = express()
app.use(express.json())
// connect to DB
connectToDB()

// Mount Routers
app.use('/', intentRouter)

const port = process.env.PORT || 3000

// listen for requests
app.listen(port, async () => {
	const appName = chalk.magenta(process.env.APP_NAME)
	const mark = chalk.green("✓")
	const url = chalk.blue(`http://localhost:${port}`)
	const env = chalk.yellow(process.env.NODE_ENV)
	process.env.API_ADDRESS = `http://localhost:${port}`
	if (process.env.NODE_ENV != "test") {
		console.log(chalk.bold(`${mark} ${appName} is running at ${url} in ${env} mode`))
		console.log(chalk.blue.bold("✗ Press CTRL-C to stop\n"))
	}
})