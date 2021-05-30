import mongoose from 'mongoose'
import chalk from 'chalk'

const connectToDB = async () => {
    let url = process.env.MONGO_URI
	try {
		const { connection } = await mongoose.connect( url, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		})
		if (process.env.NODE_ENV != "test") {
			console.log(
			  chalk.magenta(
				`connected to "${connection.name}" database at ${connection.host}:${connection.port}`
			  )
			)
		}	
	} catch (err) {
		console.log(
			"%s MongoDB connection error. Please make sure MongoDB is running.",
			chalk.red("✗")
		)
		console.log(err)
	
		process.exit(1)
	}
}

export default connectToDB