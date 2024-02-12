const express = require("express");

const albumController =  require("../app/controllers/AlbumController.js");

const router = express.Router();

router.get('/getAlbums', albumController.getAlbums);

module.exports = router;