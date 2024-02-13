const db =  require("../config/db.config.js");

async function getAlbums(req, res) {
    db.query("SELECT * FROM ref	LIMIT 0,10", (err, results) => {
        res.json(results);
    });
}

module.exports = {
    getAlbums
}