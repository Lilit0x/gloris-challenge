import app from './index.js'

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