const db =  require("../config/db.config.js");

async function getAlbums(req, res) {
    db.query("SELECT * FROM test LIMIT 0,10", (err, results) => {
        res.json(results);
    });
}

async function getAlbumById(req, res) {   
    const id = req.params.id; 
    try {
        const [rows] = await db.promise().query("SELECT * FROM test WHERE id = ?", [id]);
        if (rows.length > 0) {
            res.json(rows[0]); 
        } else {
            res.status(404).json({ error: "Album not found" });
        }
    } catch (error) {
        console.error("Error fetching album:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

async function storeAlbum(req, res) {
    const { album, artist, id } = req.body; 
    try {
        const result = await db.promise().query("CALL storeAlbums(?, ?, ?)", [id, artist, album]);
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

async function deleteAlbum(req, res) {
    const id = req.params.id; 
    try {
        const result = await db.promise().query("DELETE FROM test WHERE id = ?", [id]);
        if (result[0].affectedRows === 1) {
            res.status(201).json({ message: "Album Deleted successfully" });
        } else {
            res.status(500).json({ error: "Failed to Deleted album" });
        }
    } catch (error) {
        console.error("Error deleting album:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    getAlbums,
    getAlbumById,
    storeAlbum,
    deleteAlbum
}