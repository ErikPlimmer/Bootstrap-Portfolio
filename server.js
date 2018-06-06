const express = require("express"); 
const path = require("path"); 

const app = express(); 

require("./routes/htmlRoutes")(app);

const port = process.env.Port || 3000;
app.listen(port, function() {
    console.log(`Started server on ${port}...`);
});