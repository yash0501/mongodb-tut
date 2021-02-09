// 1. add new car to db
// 2. get all cars from db

const config = require("./config");

const mongoose = require('mongoose');
mongoose.connect(config.db.connection, {useNewUrlParser: true, useUnifiedTopology: true});

const carSchema = new mongoose.Schema({
    make: String,
    model: String,
    year: Number,
    color: String,
    mileage: Number,
    needsRepair: Boolean
})

const Car = mongoose.model("Car", carSchema);
// make myTruck const from using CCar class
const myTruck = new Car({
    make: "Mahindra",
    model: "Bolero",
    year: 2008,
    color: "Black",
    mileage: 120000,
    needsRepair: false
})

// Method 1
/*myTruck.save((err, car)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(car);
    }
})*/

// Method 2
/*Car.create(myTruck, (err, car)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(car);
    }
})*/

// Method 3
Car.create(myTruck)
.then((err, car)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(car);
    }
})

console.log(config.db.connection);