# CRUD API with Mongoose and Express

This project implements a simple CRUD (Create, Read, Update, Delete) API using Node.js, Express.js, and Mongoose for MongoDB integration.

## Prerequisites

Before running this project locally, ensure you have the following installed:
- Node.js
- MongoDB (running locally or accessible via a URL)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your/repository.git
   cd repository

 2.Install dependencies:

 ```bash
npm install

 ## Schema
The project uses the following Mongoose schema for products:
const mongoose = require('mongoose');


const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter the product name"],
        },
        quantity: {
            type: Number,
            required: true,
            default: 0,
        },
        price: {
            type: Number,
            required: true,
            default: 0,
        },
        image: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;


3. Use API endpoints:

'GET /products': Retrieve all products.
'GET /products/': Retrieve a single product by ID.
'POST /products': Create a new product.
'PUT /products/': Update a product by ID.
'DELETE /products/': Delete a product by ID.


