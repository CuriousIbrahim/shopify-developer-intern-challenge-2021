const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');


const add = require("./routes/add");
const get = require("./routes/get");

const app = express();

const port = process.env.PORT || 5000;

app.use(cors())

app.use(bodyParser.json())
app.use(session({secret: 'some secrety secret'}));

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/images', express.static('images'))

app.use("/add", add);
app.use("/get", get);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
