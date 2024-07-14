const mongoose = require('mongoose');
const Dish = require('./model/dishModel');



const dishes = [
    { dishId: "1", dishName: "Panner Tikka", imageUrl: "https://nosh-assignment.s3.ap-south-1.amazonaws.com/paneer-tikka.jpg", isPublished: true },
    { dishId: "2", dishName: "Jeera Rice", imageUrl: "https://nosh-assignment.s3.ap-south-1.amazonaws.com/jeera-rice.jpg", isPublished: false },
    { dishId: "3", dishName: "Rabdi", imageUrl: "https://nosh-assignment.s3.ap-south-1.amazonaws.com/rabdi.jpg", isPublished: true },
    { dishId: "4", dishName: "Chicken Biryani", imageUrl: "https://nosh-assignment.s3.ap-south-1.amazonaws.com/chicken-biryani.jpg", isPublished: false },
    { dishId: "5", dishName: "Alfredo Pasta", imageUrl: "https://nosh-assignment.s3.ap-south-1.amazonaws.com/alfredo-pasta.jpg", isPublished: true },
];

mongoose.connect('mongodb+srv://vyadav99x1:vyadav99x1@cluster0.rt4nk9c.mongodb.net/');

const connection = mongoose.connection;


connection.on('error', ()=>{
    console.log("error in database connection!");
})
connection.on('connected', ()=>{
    console.log("Database connection successful");
})
connection.on('disconnected', ()=>{
    console.log(" database disconnected!");
})




async function checker(){
    await Dish.deleteMany({});
        await Dish.insertMany(dishes);

const data = await Dish.find();

console.log(data);
}

// checker();

module.exports= mongoose;
