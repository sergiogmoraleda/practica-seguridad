const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;
const userRoutes = require("./routes/user");

app.listen(port, () => { 
  console.log("Server is running on port 3000");
});

//middlewares 
app.use(express.json());
app.use('/api', userRoutes)

// routes
app.get("/", (req, res) => {
    res.send("Hello World");
    });

// mongodb connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch(err => console.log(err));

