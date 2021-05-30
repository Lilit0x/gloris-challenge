import axios from 'axios'
import Reply from '../models/reply.js'

export const getReply = async (req, res, next) => {
    try {
        const { botId, message } = req.body

        if(!botId || !message) {
            return res.status(400).json({
                err: {
                    msg: `invalid credentials, botID or message is missing`
                }
            })
        }

        const { data } = await axios.post(`https://chat.ultimate.ai/api/intents`, { botId, message }, {
            headers: {
                authorization: `825765d4-7f8d-4d83-bb03-9d45ac9c27c0`
            }
        })

        const { name } = data.intents.reduce((prev, current) => (prev.confidence > current.confidence) ? prev : current)


        const replies = await Reply.find()

        let reply 
        replies.forEach( r => {
            if(r.name === name) {
                reply = r.reply.text
            }
        })

        res.status(200).json({reply})


    } catch(err) {
        console.log(err)
    }
    
}