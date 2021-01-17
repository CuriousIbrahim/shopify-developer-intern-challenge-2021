const path = require('path');
const express = require('express')
const router = express.Router()
const multer = require("multer");

const storage = multer.diskStorage({
    destination: `${__dirname}/../images/`,
    filename: (req, file, cb) => {
        const fileName = `${Date.now()}${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
})

const uploadImage = multer( { storage } ).single("photo");

router.post('/', uploadImage, (req, res, next) => {
    if (req.file || req.files) {
        res.sendStatus(200);
    } else {
        res.sendStatus(500);
    }
});

module.exports = router