import express from 'express';

const app = express();
const PORT = 3000;
const path = require('path');


app.use('/images', express.static(path.join(__dirname, 'images')))

app.get('/', (req, res) => {
  res.send('<img src="../images/me.jpg" alt="picture of me">' + '<p>' + __dirname + 'images' + '</p>');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
})