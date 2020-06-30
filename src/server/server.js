const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static("./dist"));

const port = 8000;
const server = app.listen(port, listening);
// Callback to debug
function listening() {
	console.log("server is running");
	console.log(`running on localhost: ${port}`);
}
/* Routes */

app.get("/", function (req, res) {
	res.sendFile("./dist/index.html");
});

module.exports = app;
