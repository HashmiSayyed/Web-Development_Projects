const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const email = req.body.mail;

    const data = {
        members:[
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }

    const jsonData = JSON.stringify(data);

    const url = "https://us20.api.mailchimp.com/3.0/lists/list-id_here"

    const option = {
        method: "POST",
        auth: "key:apikey_here"
    }

    const request = https.request(url, option, function(response) {
        if (response.statusCode == 200){
                res.sendFile(__dirname + "/success.html");
            } else {
                res.sendFile(__dirname + "/failure.html");
            }
        response.on("data", function(data){
            // console.log(JSON.parse(data));
        });
    });

    request.write(jsonData);
    request.end();

});

app.post("/fail", function(req, res){
    res.redirect("/");
});

app.listen(process.env.PORT || 3000, function(){
    console.log("server started");
});