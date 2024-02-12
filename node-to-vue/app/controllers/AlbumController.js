const db =  require("../config/db.config.js");

async function getAlbums(req, res) {
    db.query("SELECT * FROM ref", (err, results) => {
        res.json(results);
    });
}

module.exports = {
    getAlbums
}