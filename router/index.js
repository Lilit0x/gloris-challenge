import { Router } from 'express'
import { getReply } from '../controllers/botReply.js'

const router = Router()

router.post('/', getReply)

export default router