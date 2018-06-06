const path = require('path'); 

module.exports = function(app){ 

    // Routes for navigation 
    app.get("/", function(req,res){
        res.sendfile(path,join(__dirname + '../index.html'));
    });

    app.get("/contact", function(req,res) {
         res.sendfile(path.join(__dirname + '../contact.html'));
    });

    app.get("/portfolio", function(req,res) {
         res.sendfile(path.join(__dirname + '../portfolio.html'));
    });
};