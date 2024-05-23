// console.log("Hey Good Morning ");

const express = require('express')
const mongoose=require('mongoose')
const Product =require('./models/productModel.js')
const productRoute=require('./routes/productRoute')
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//routes
app.use('/api/products' , productRoute)

// app.get('/' , (req , res)=>{
//     res.send("Hello from Node API")
// })


mongoose.connect("mongodb+srv://nimishakesarwani98:Nimisha@api.jzmvnmh.mongodb.net/API?retryWrites=true&w=majority&appName=API")
.then(() =>{
    console.log("Connected with database")
    app.listen(3000 , () =>{
        console.log("Server is running on port 3000");
    });
})
.catch(() =>{
    console.log("Error in connecting with the database")
});
