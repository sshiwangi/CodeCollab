const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const projectRoutes = require("./routes/projectRoutes");
const connectDB = require("./config/db");
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("Backend is working");
});

const PORT = process.env.PORT || 8088;
const server = app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`.yellow.bold);
});

app.use("/api/user", userRoutes);
app.use("/api/projects", projectRoutes);
