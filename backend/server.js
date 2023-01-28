const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();

const { connectDB } = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
const userRouter = require("./routes/userRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.status(200).json({ message: "Welcome to the Support Desk API" });
});

// ROUTES
app.use("/api/users", userRouter);

// ERROR HANDLER
app.use(errorHandler);

// Connect to database
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
