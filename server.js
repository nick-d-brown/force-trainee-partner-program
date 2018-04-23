var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000; // allows for either port from Heroku(or c9) or port 3000


// ===========User List==============

var users = 
    {
        mentors: 
            [
                {
                    name: "Yoda",
                    picture: "https://cdn.images.express.co.uk/img/dynamic/36/750x445/837201.jpg",
                    listOfScores: [],
                    totalScore: 0,
                    catchPhrases: 
                        [
                            "Train yourself to let go of everything you fear to lose.",
                            "Fear is the path to the dark side.",
                            "You will know (the good from the bad) when you are calm, at peace.",
                            "Yes, a Jedi's strength flows from the Force."
                        ]
                } ,
                {
                    name: "Luke",
                    picture: "http://www.lynkformer.com/template/blog/2012/08/hasbros-star-wars-luke-skywalker-force-fx-lightsaber-collectable-with-removable-blade.jpg",
                    listOfScores: [],
                    totalScore: 3,
                    catchPhrases:
                        [
                            "But I was going into Tosche Station to pick up some power converters!",
                            "I'm Luke Skywalker and I'm here to rescue you!"
                        ]
                } ,
                {
                    name: "Han Solo",
                    picture: "http://ksassets.timeincuk.net/wp/uploads/sites/55/2017/07/han-solo-black-glynn-turman-920x598.jpg",
                    listOfScores: [],
                    totalScore: 5,
                    catchPhrases:
                        [
                            "Great, kid. Don't get cocky",
                            "I still get a funny feeling about that old man and the kid. I'm not sure what it is about them, but they're trouble.",
                            "Look, I ain't in this for your revolution, and I'm not in it for you, princess. I expect to be well paid. I'm in it for the money.",
                            "Hokey religions and ancient weapons are no match for a good blaster at your side, kid."
                        ]
                } ,
                {
                    name: "Darth Vader",
                    picture: "http://s3.crackedcdn.com/phpimages/article/9/8/8/637988_v3.jpg",
                    listOfScores: [],
                    totalScore: 7,
                    catchPhrases:
                        [
                            "I find your lack of faith disturbing.",
                            "When I left you I was but the learner. Now I am the master.",
                            "The Force is strong with this one.",
                            "No, I am your father!",
                            "Impressive. Most impressive. Obi-Wan has taught you well. You have controlled your fear. Now, release your anger. Only your hatred can destroy me."
                        ]
                } ,
                {
                    name: "Darth Sidius",
                    picture: "https://vignette.wikia.nocookie.net/bioniclecrossovers/images/7/70/Sidious.jpg/revision/latest?cb=20100605193647",
                    listOfScores: [],
                    totalScore: 10,
                    catchPhrases:
                        [
                            "There is a great disturbance in the Force.",
                            "There is no civility, only politics..",
                            "Are you threatening me, Master Jedi?",
                            "No... no... no! YOU WILL DIE!"
                        ]
                } ,
               
            ],
        trainees: 
            [
                {},
            ]
    }

// ===========ROUTES=================

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});

app.get("/api/friend_list", function (req, res) {
    return res.json(friendList);
});

app.get("*", function (req, res) {
    console.log("Someone made a request to an undefined route"); // will only appear in the node console
    res.send("Something went wrong!")
});


// ===========server listening=================

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
})


// ============================