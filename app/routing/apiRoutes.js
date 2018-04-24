
var userData = require("../data/users");

module.exports = function(app) {
    
    app.get("/api/user_list", function (req, res) {
        return res.json(userData);
    });

    app.post("/api/user_list", function (req, res) {
        // console.log(req);
        console.log(req.body);
        
        userData.trainees.push(req.body);
        // userData.users.trainees.push(req.body);
        res.json(true);
    });
  
}


