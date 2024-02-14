const db =  require("../config/db.config.js");

async function getAlbums(req, res) {
    db.query("SELECT * FROM test LIMIT 0,10", (err, results) => {
        res.json(results);
    });
}

async function getAlbumById(req, res) {   
    console.log(req.body)
    try {
        // console.log(req.body)
    } catch (error) {
        console.error("Error:", error);
    }
    // const result = db.promise().query("SELECT * FROM test WHERE id = ?", id);
    // res.json(result)
}

async function storeAlbum(req, res) {
    const { album, artist } = req.body; 
    try {
        const result = await db.promise().query("INSERT INTO test (artist, album) VALUES (?, ?)", [artist, album]);
        if (result[0].affectedRows === 1) {
            res.status(201).json({ message: "Album stored successfully" });
        } else {
            res.status(500).json({ error: "Failed to store album" });
        }
    } catch (error) {
        console.error("Error storing album:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    getAlbums,
    getAlbumById,
    storeAlbum
}