import mongoose from 'mongoose'

const messageSchema = mongoose.Schema({
    id: mongoose.Schema.ObjectId,
    text: String
})

const Message = mongoose.model('Message', messageSchema)

const replySchema = mongoose.Schema({
    name: String,
    description: String,
    trainingData: {
        messages: [{
            text: String
        }]
    },
    reply: {
        text: String
    }
})

const Reply = mongoose.model('Reply', replySchema)
export default Reply