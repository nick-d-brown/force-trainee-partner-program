
var user = require("../data.friends");

module.exports = function (app) {
    
    app.get("/api/friend_list", function (req, res) {
        return res.json(friendList);
    });

    app.post("/api/friend_list", function (req, res) {
        return res.json(friendList);
    });
  
}


