import axios from 'axios'
import Reply from '../models/reply.js'

export const getReply = async (req, res, next) => {
    try {
        const { botId } = req.body

        if(!botId ) {
            return res.status(400).json({
                err: {
                    msg: `invalid credentials, botID is missing`
                }
            })
        }

        const reply = Reply.findById(botId)
        res.status(200).json({
            reply: reply?.reply?.text || `Sorry, reply not found`
        })


    } catch(err) {
        console.log(err)
    }
    
}