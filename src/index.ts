import express from 'express';
const fs = require('fs');

const app = express();
const PORT = 3000;
const path = require('path');


app.use('/images', express.static(path.join(__dirname, 'public/images')))

app.get('/', (req, res) => {
  fs.readFile(__dirname + '/index.html', 'utf-8', (err: unknown, data: string) => {
    if (err) {
      console.error('Error reading HTML file:', err);
      res.status(500).send('<h1>Internal Server Error</h1>');
    } else {
      res.send(data);
    }
  })
  // res.send('<img src="../../images/me.jpg" width="600" alt="picture of me">');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
})