import mongoose from "mongoose";
 import dotenv from 'dotenv';

  dotenv.config();

 const USERNAME = process.env.DB_USERNAME;
 const PASSWORD = process.env.DB_PASSWORD;


 const connection = () => {

   const MONGODB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@todo.t3czdzh.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URL, {useNewUrlParser: true});

    mongoose.connection.on('connected', () => {
        console.log('Database connected successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database is not connected');
    })

    mongoose.connection.on('error', () => {
        console.log('error while connecting with your database', error.message);
    })
}


export default connection;