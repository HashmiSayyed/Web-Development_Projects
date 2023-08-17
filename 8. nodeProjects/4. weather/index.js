const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    const appid = "appid_here";
    var q = req.body.city;
    var units = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + q + "&units=" + units + "&appid=" + appid;
    https.get(url, function(response){
        console.log(response.statusCode);

            response.on("data", function(data) {
                const weatherData = JSON.parse(data);
                const temp = weatherData.main.temp;
                const weatherDescription = weatherData.weather[0].description;
                const icon = weatherData.weather[0].icon;
                const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
                
                res.write("<h1>The temperature in " + q + " is " + temp + " degrees Celsius.</h1>");
                res.write("<h2>The weather is currently " + weatherDescription + ".</h2>")
                res.write("<img src=" + imageURL + ">");
                res.send();
            });

    });
});

app.listen(3000, function() {
    console.log("server started");
});