import express from "express";
import { connectDb } from "./config/dbConenction.js";
import cors from "cors"
// *********** All-Routes *************
import auth from "./routes/auth.routes.js";
import user from "./routes/user.routes.js";
import product from "./routes/product.routes.js";
import cart from "./routes/cart.routes.js";
// *********** All-Routes *************

import cookieParser from "cookie-parser";
const app = express();
// Use cors middleware
app.use(cors());

app.use(
  cors({
    origin: "*", // Replace with the frontend's URL (React app)
    methods: "GET,POST,PUT,DELETE,PATCH", // Allowed methods
  })
);

//middle wares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// *********** All-Routes *************

app.get("/", (req, res) => {
  res.json("I'm coming from backend");
});

app.use("/api/auth/", auth);
app.use("/api/user/", user);
app.use("/api/product/", product);
app.use("/api/cart/", cart);

// for wrong apis
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found. Please check the URL and try again.",
  });
});

// Error handling middleware (optional, for other server errors)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    success: false,
    message: "Internal server error.",
    error: err.message,
  });
});

connectDb().then(() => {
  app.listen(7000, () => {
    console.log(`Server running on port 7000`);
  });
}).catch(error => {
  console.error("Failed to connect to the database. Server not started.", error);
});