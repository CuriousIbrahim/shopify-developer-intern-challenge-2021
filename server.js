const express = require("express");
// const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const _ = require('lodash');
const session = require('express-session');
const companion = require('@uppy/companion');
const multer = require("multer");


const add = require("./routes/add");
const get = require("./routes/get");

const app = express();

const port = process.env.PORT || 5000;

app.use(cors())

app.use(bodyParser.json())
app.use(session({secret: 'some secrety secret'}));

const options = {
    providerOptions: {
      drive: {
        key: "***",
        secret: "***"
      },
      dropbox: {
        key: "***",
        secret: "***"
      },
      instagram: {
        key: "***",
        secret: "***"
      },
      facebook: {
        key: "***",
        secret: "***"
      },
      onedrive: {
        key: "***",
        secret: "***"
      },
    },
    server: {
      host: "localhost:5000", // or yourdomain.com
      protocol: "http"
    },
    filePath: "./images/",
    sendSelfEndpoint: "localhost:3020",
    secret: 'mysecret',
    uploadUrls: ['https://myuploadurl.com', 'http://myuploadurl2.com'],
    debug: true
  }

// app.use("upload", companion.app(options))

// app.use(fileUpload({
//     createParentPath: true
// }));

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/images', express.static('images'))

const upload = multer ( { dest: "./images/"} );

// const uploadImage = multer( { storage } ).single("photo");


// upload.fields([{name: "photo", maxCount: 100}])

app.post('/upload', upload.single("photo"), (req, res, next) => {
    console.log("request:", req.body, req.file);
});

app.use("/add", add);
app.use("/get", get);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
