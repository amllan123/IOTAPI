const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

let isLocked = true; // Initial state is locked
const correctPassword = '123'; // Replace with your actual password
app.get('/', (req, res) =>{
    res.send("Hello")
})
app.get('/lock/state', (req, res) => {
  res.json({ isLocked });
});

app.post('/lock/unlock', (req, res) => {
  const { password } = req.body;

  if (password === correctPassword) {
    isLocked = false;
    res.json({ success: true, isLocked });
  } else {
    res.status(401).json({ success: false, message: 'Incorrect password' });
  }
});

app.post('/lock/lock', (req, res) => {
  isLocked = true;
  res.json({ success: true, isLocked });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
