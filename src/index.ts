import express from 'express';

const app = express();
const PORT = 3000;
const path = require('path');


app.use('/images', express.static(path.join(__dirname, 'images')))

app.get('/', (req, res) => {
  res.send('<img src="../images/me.jpg" width="600" alt="picture of me">');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
})