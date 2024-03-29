const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("combined"));

const albumController =  require("../app/controllers/AlbumController.js");

const router = express.Router();

router.get('/getAlbums', albumController.getAlbums);

router.post('/storeAlbum', albumController.storeAlbum);

router.get(`/getAlbumById/:id`, albumController.getAlbumById);

router.delete(`/deleteAlbum/:id`, albumController.deleteAlbum);

module.exports = router;