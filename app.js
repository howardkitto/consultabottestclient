const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post('/', (req, res) => {
  res.json({ message: `ok from ${PORT}` });
});



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
