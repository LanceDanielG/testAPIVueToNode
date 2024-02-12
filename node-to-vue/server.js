const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const albumRoute =  require("./routes/routes.js");

const app = express();

var corsOptions = {
  origin: "http://localhost:5173"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});
  
app.use("/album", albumRoute);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});