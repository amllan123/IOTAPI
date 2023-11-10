const express = require('express');
const app = express();
const port = 3000;

let isLightOn = false;
app.get('/', (req, res) => {

    res.send("Heloo ji")
})
app.get('/light/on', (req, res) => {
  isLightOn = true;
  res.send('Light is now on');
});

app.get('/light/off', (req, res) => {
  isLightOn = false;
  res.send('Light is now off');
});

app.get('/status', (req, res) => {
  res.send({ isLightOn });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
