const dotenv=require("dotenv");
const express = require('express');
const app = express();
const cors=require('cors');
const  connectDB = require("./config/db");




// middleware for passing jason
dotenv.config();
connectDB();
app.use(express.json());
// Cors enable

// app.use(cors({
//   origin: ['https://frontend-msmaid.onrender.com' , `http://localhost:3000`, 'https://backend-msmaid.onrender.com'],
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));
 
app.use("/api/users", require("./routes/userRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`
  )
);