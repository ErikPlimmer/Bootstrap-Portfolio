const express = require("express"); 
const path = require("path"); 
const bodyParser = require("body-parser"); 

const app = express(); 

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./routes/htmlRoutes")(app);

const port = process.env.Port || 3000;
app.listen(port, function() {
    console.log(`Started server on ${port}...`);
});