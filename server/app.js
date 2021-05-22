require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const path = require("path")

const app = express();

app.enable('trust proxy')

app.use(cors())
app.use(express.json({extended: true}))

mongoose.connect(
    process.env.DB_URL,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
    () => console.log("DB connected")
  );

// Route imports  
const userRoutes = require("./routes/user.routes")

// Routes usage
app.use("/api/user", userRoutes)

// Serve frontend as static assets if in production
if (process.env.NODE_ENV === "production") {
  // Serve frontend files
  app.use(express.static("../client/build"));
  // Getting all the routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve("../client/build/index.html"));
  });
}


const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log("Server started at " + PORT)
})