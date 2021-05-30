import dotenv from 'dotenv'
import fs from 'fs'
import chalk from 'chalk'
// import replies from './intent_reply_examples.json'
import Reply from './models/Reply.js'
import connectToDB from './config/db.js'

const replies = JSON.parse(fs.readFileSync('./intent_reply_examples.json'))

dotenv.config()

connectToDB()

const importData = async () => {
    try {
      await Reply.deleteMany()
     
      const createdReplys = await Reply.insertMany(replies)
  
        console.log(chalk.green('✓ Data Imported!'))
        process.exit()
    } catch (error) {
      console.error(chalk.red.bold(`${error}`))
      process.exit(1)
    }
}

const destroyData = async () => {
    try {
      await Reply.deleteMany()
  
      console.log(chalk.red('✗ Data Destroyed!'))
      process.exit()
    } catch (error) {
      console.error(chalk.redBright.bold(`${error}`))
      process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}