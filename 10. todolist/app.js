const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
const date = require(__dirname + "/date.js");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

let day = date.getDate();

mongoose.connect("mongodb://localhost:27017/todolistDB");

const itemsSchema = new mongoose.Schema({
    name: String
});

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({
    name: "Apple"
});

const item2 = new Item({
    name: "Banana"
});

const item3 = new Item({
    name: "Cat"
});

const defaultItems = [item1, item2, item3];

const listSchema = new mongoose.Schema({
    name: String,
    item: [itemsSchema]
});

const List = mongoose.model("List", listSchema);

app.get("/", function(req, res){
    Item.find(function(err, items) {
        if(items.length == 0) {
            Item.insertMany(defaultItems, function(err){
                if(err) {
                     console.log(err);
                } else {
                    console.log("Done");
                }
            });
            res.redirect("/");
        } else {
	        res.render("index", {listTitle: day, newListItems: items});
        }
    });
});

app.get("/:customListName", function(req, res){
    let requestedTitle = _.capitalize(req.params.customListName);

        List.findOne({name: requestedTitle}, function(err, foundItem) {
            if(!err) {
                if(!foundItem) {
                    const list = new List({
                        name: requestedTitle,
                        item: defaultItems
                    });

                    list.save();
                    res.redirect("/" + requestedTitle);
                } else {
                    res.render("index", {listTitle: requestedTitle, newListItems: foundItem.item});
                }
            }
        });

});

app.get("/about", function(req, res){
    res.render("about");
});

app.post("/", function(req, res){
    let itemName = req.body.newItem;
    let listName = req.body.list;

    const itemNew = new Item({
        name: itemName
    });

    if(listName == day) {
        itemNew.save();
        res.redirect("/");
    } else {
        List.findOne({name: listName}, function(err, foundList) {
            foundList.item.push(itemNew);
            foundList.save();
            res.redirect("/" + listName);
        });
    }
    
});

app.post("/delete", function(req, res){
    const checkedItemId = req.body.checkbox;
    const listName = req.body.listName;

    if(listName == day) {
        Item.findByIdAndRemove(checkedItemId, function(err) {
            if(err) {
                console.log(err);
            } else {
                console.log("Done");
            }
        });
        res.redirect("/");
    } else {
        List.findOneAndUpdate({name: listName}, {$pull: {item: {_id: checkedItemId}}}, function(err, foundList) {
            if(!err) {
                res.redirect("/" + listName)
            }
        });
    }

});

app.listen(3000, function(){
    console.log("server started");
});