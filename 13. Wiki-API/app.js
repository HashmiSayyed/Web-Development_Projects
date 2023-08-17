const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true});

const articleSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Article = mongoose.model("Article", articleSchema);

______________________________________________________________________________________________________________________________________
app.route("/articles")
.get(function(req, res) {
    Article.find(function(err, foundItem) {
        if(!err) {
            res.send(foundItem);
        } else {
            res.send(err);
        }
    });
})

.post(function(req, res) {
    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    });
    newArticle.save(function(err) {
        if(!err) {
            res.send("Done");
        } else {
            res.send(err);
        }
    });
})

.delete(function(req, res) {
    Article.deleteMany(function(err) {
        if(!err) {
            res.send("Done");
        } else {
            res.send(err);
        }
    });
});
______________________________________________________________________________________________________________________________________

app.route("/articles/:articleTitle")
.get(function(req, res) {
    Article.findOne({title: req.params.articleTitle}, function(err, foundArticle) {
        if(foundArticle) {
            res.send(foundArticle);
        } else {
            res.send("No article");
        }
    });
})

.put(function(req, res) {
    Article.update(
        {title: req.params.articleTitle},
        {title: req.body.title, content: req.body.content},
        {overwrite: true},
        function(err) {
            if(!err) {
                res.send("Done");
            }
        }
    );
})

.patch(function(req, res) {
    Article.update(
        {title: req.params.articleTitle},
        {$set: req.body},
        function(err) {
            if(!err) {
                res.send("Done");
            }
        }
    );
})

.delete(function(req, res) {
    Article.deleteOne({title: req.params.articleTitle}, function(err) {
        if(!err) {
            res.send("Done");
        }
    });
});
______________________________________________________________________________________________________________________________________

app.listen(3000, function()  {
    console.log("Server Started");
});