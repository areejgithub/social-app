const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute=require("./routes/users")
const authRoute=require("./routes/auth")
const postRoute=require("./routes/posts")
const multer=require("multer")
const path=require("path")

dotenv.config();

async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

connectToMongoDB(); // Call the function to connect to MongoDB

app.use("/images", express.static(path.join(__dirname, "public/images")));
//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))


//to upload file to the server


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    // Generate a unique filename to avoid conflicts.
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json("No file uploaded.");
    }

    // Handle the file upload logic here...

    return res.status(200).json("File uploaded successfully.");
  } catch (err) {
    console.error("Error uploading file:", err);
    return res.status(500).json("File upload failed.");
  }
});

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public/images");
//   },
//   filename: (req, file, cb) => {
//     cb(null, req.body.name);
//   },
// });

// const upload = multer();
// app.post("/api/upload", upload.single("file"), (req, res) => {
//   try {
//     return res.status(200).json("File uploded successfully");
//   } catch (error) {
//     console.error(error);
//   }
// });
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)


// app.get("/",(req,res)=>{
//     res.send("Welcome to homepage")
// })
// app.get("/users",(req,res)=>{
//     res.send("Welcome to user page")
// })
app.listen(8800, () => {
  console.log("Backend server is running!");
});
