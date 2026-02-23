import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import contactRouter from "./routes/contactRoute.js";

// APP CONFIG
const app = express();
const port = process.env.PORT || 8080;
connectDB();
// connectCloudinary();
// MIDDLE WARE
app.use(express.json());
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} request to: ${req.url}`);
  next();
});
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://127.0.0.1:5173",
  "http://127.0.0.1:5174",
  "https://jigmatdorjey.vercel.app",
  "https://tsedung.vercel.app",

];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "X-Requested-With", "Authorization"],
  })
);



app.use("/api", contactRouter);

app.get("/", (req, res) => {
  res.send("hello Server is Working");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


