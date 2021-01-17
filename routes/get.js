const express = require('express')
const fs = require("fs");
const path = require("path");

const router = express.Router()

const IMAGES_PATH = path.join(__dirname, "../images");

router.get('/', (req, res) => {
    const files = fs.readdirSync(IMAGES_PATH, []);
    console.log(IMAGES_PATH)
    return res.json(files);
});

module.exports = router