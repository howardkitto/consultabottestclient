const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post('/', (req, res) => {
  res.json({ 
    message: `ok from ${PORT}`,
    openAIKey: process.env.OPENAI_API_KEY || "No Key Found"
 });
});



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
