const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import the CORS middleware

// Import your routes
const referenceRoute = require("./routes/reference.route");
const socialMediaRoute = require("./routes/social-media.route");
const interviewRoute = require("./routes/interview.route");
const problemRoute = require("./routes/problem.route");

const app = express();

// Middleware
// app.use(cors()); // Allow requests from any origin
app.use(cors({
  origin: ['http://localhost:3000', 'thelostcandidate.netlify.app'], 
}));
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies

// Routes
app.get("/", (req, res) => {
  res.send("Hello from server node js");
});

app.use("/api/reference", referenceRoute);
app.use("/api/social-media", socialMediaRoute);
app.use("/api/interview", interviewRoute);
app.use("/api/problem", problemRoute);

// Connect to MongoDB and start the server
mongoose
  .connect(
    "mongodb+srv://tphourac:TwGCkkg6PPk1BbmV@backenddb.tpfkn.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to MongoDB!");
    app.listen(8000, () => {
      console.log("Server is running on port 8000");
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
