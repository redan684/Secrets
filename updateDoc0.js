const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', {
  useNewUrlParser: true
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is not provided for the fruit"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Peach",
  score: 10,
  review: "Great Fruit"
});


// const personSchema = new mongoose.Schema({
//   name: String,
//   age: Number
// });
// const Person = mongoose.model("Person", personSchema);
// const person = new Person({
//   name: "John",
//   age: 37
// });
//
// person.save();



// const orange = new Fruit({
//   name: "Orange",
//   score: 6,
//   review: "Kinda sour"
// });
// const banana = new Fruit({
//   name: "Banana",
//   score: 9,
//   review: "Great Stuff"
// });
// Fruit.insertMany([orange,banana], function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully saved to fruits DB");
//   }
// });

Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {
    // console.log(fruits);

    fruits.forEach(function(fruit) {
      console.log(fruit.name);
    });
  }
});

Fruit.updateOne({
  _id: "631fe0ac92c3d3e0cc1a06c0"
}, {
  name: "Apple"
}, function
  (err){
  if (err) {
    console.log(err);
  } else {
    // console.log(fruits);
    mongoose.connection.close();

    console.log("Document updated Successfully");
  }
});
