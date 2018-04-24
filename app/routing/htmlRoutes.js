
var path = require("path")

module.exports = function(app) {
    
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "./app/public/home.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "./app/public/survey.html"));
    });  

    app.get("*", function (req, res) {
        console.log("Someone made a request to an undefined route"); // will only appear in the node console
        res.send("Something went wrong!")
    });

}

