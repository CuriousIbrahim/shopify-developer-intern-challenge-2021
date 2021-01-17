const express = require('express')
const fs = require("fs");
const path = require("path");
const crypto = require('crypto');

const router = express.Router()

const IMAGES_PATH = path.join(__dirname, "../images");

router.get('/', (req, res) => {
    const files = fs.readdirSync(IMAGES_PATH, []);
    const hash = crypto.createHash("md5").update(JSON.stringify(files)).digest("hex");

    return res.json({
        hash: hash,
        files: files,
    });
});

module.exports = router