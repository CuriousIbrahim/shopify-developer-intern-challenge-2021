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

// const upload = multer ( { dest: "../images/"} );

const uploadImage = multer( { storage } ).single("photo");


// upload.fields([{name: "photo", maxCount: 100}])

router.post('/', uploadImage, (req, res, next) => {
    console.log("request:", req.body, req.file);
});

module.exports = router