const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name?"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name?"]
    },
    age: Number,
    favouriteFruit: fruitSchema
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const Person = mongoose.model("Person", personSchema);

// const person1 = new Person({
//     name: "Hashmi",
//     age: 24
// });

// person1.save();

// const mango = new Fruit({
//     name: "Mango",
//     rating: 10,
//     review: "Great fruit"
// });

// mango.save();

// Person.updateOne({name: "Hashmi"}, {favouriteFruit: mango}, function(err) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("Done");
//     }
// });

// const pineapple = new Fruit({
//     name: "Pineapple",
//     rating: 9,
//     review: "Great fruit"
// });

// pineapple.save();

// const person2 = new Person({
//     name: "Fiza",
//     age: 23,
//     favouriteFruit: pineapple
// });

// person2.save();

// const fruit = new Fruit({
//     name: "Apple",
//     rating: 9,
//     review: "Great fruit"
// });

//fruit.save();

// const kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 9,
//     review: "nice fruit"
// });

// const orange = new Fruit({
//     name: "Orange",
//     rating: 5,
//     review: "it's ok"
// });

// const banana = new Fruit({
//     name: "Banana",
//     rating: 7,
//     review: "nice fruit"
// });

// Fruit.insertMany([kiwi, orange, banana], function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Success"); 
//     }
// });

// Fruit.find(function(err, fruits) {
//     if (err) {
//         console.log(err);
//     } else {
//         mongoose.connection.close();

//         for(let i=0; i<fruits.length; i++) {
//             console.log(fruits[i].name);
//         }
//     }
// });

// Fruit.updateOne({_id: "61b482f48ecce45004de6c47"}, {name: "Peach"}, function(err) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("Done");
//     }
// });

// Fruit.deleteOne({name: "Mango"}, function(err) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("Done");
//     }
// });

// Fruit.deleteMany({rating: {$lt: 8}}, function(err) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("Done");
//     }
// });