require('dotenv').config();
const express = require('express');
const OpenAI = require("openai");
const cors = require('cors');

const app = express();
const port = 3001; // Define the port for localhost

app.use(cors()); // This will allow all domains to access your server
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Access API key securely
});

app.get('/', (req, res) => {
  res.send('Welcome to the Travel App Backend!');
});

app.post('/api/chat', async (req, res) => {
  try {
    const userInput = req.body.message; // Assuming the front-end sends {"message": "user's question"}
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "user",
          content: userInput
        }
      ],
      max_tokens: 100
    });
    res.json(response.choices[0].message.content); // Send the AI response back to the client
  } catch (error) {
    console.error("Error during API call:", error);
    res.status(500).send("Failed to get response from OpenAI");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
