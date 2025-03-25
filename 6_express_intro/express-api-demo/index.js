const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 8000;
const app = express();
const router = express.Router();
// app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log('====>> MiddldeWare Running',)
  next()
})

app.use('/api', require("./routes/index.js"))

app.listen(PORT, () => {
  console.log(`Application Running on port ${PORT}..`)
})

module.exports = router;
