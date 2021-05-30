import request from 'supertest'
import app from '../index.js'
import Reply from '../models/reply.js'
import mongoose from 'mongoose'

beforeEach((done) => {
    mongoose.connect(process.env.MONGO_URI,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => done())
})

afterEach((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(() => done())
    })
})

describe("POST /", () => {
    test("It returns a new created reply", async () => {
        const reply = Reply.create({
            "id": "34d7831e137a4016a55f98926800a643",
            "name": "Greeting",
            "description": "The visitor says hello.",
            "trainingData": {
                "messages": [
                {
                    "id": "6399fd6989984c7b871c6301744b0af5",
                    "text": "Hello"
                },
                {
                    "id": "68bafebc2a2e4843a56a221c2ceb12ed",
                    "text": "Hi"
                },
                {
                    "id": "b2a3208dc801432992812638368e0668",
                    "text": "Good morning!"
                }
                ]
            },
            "reply": {
                "id": "f35d7e0936a44102bac9cb96c81eec3b",
                "text": "Hello :) How can I help you?"
            }
        })

        const response = await request(app).post('/').send({
            botId: `yyeu773722`
        })

        expect(response.body).toHaveProperty("reply")
        expect(response.body.name).toBe("Sorry, reply not found")
        expect(response.statusCode).toBe(200);
    })
})