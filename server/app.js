const express = require("express")
const axios = require("axios")
const cors = require("cors")
require("dotenv").config()
const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main(data) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: data,
  });
  return response.text
}


const app = express()
app.use(cors())
app.use(express.json())


const initializationFunction = () => {
    try{
        app.listen(3000, () =>{
            console.log('Server is Running on PORT 3000')
        })
    } catch(error){
        console.log("Connection Error: ",error.message)
    }
}

app.post('/chat-bot', async(req, res) => {
    const {question} = await req.body
    try {
        response = await main(question)
        res.json({answer: response})
    } catch (e){
        res.json({error: e.message})
    }
    
})

initializationFunction()