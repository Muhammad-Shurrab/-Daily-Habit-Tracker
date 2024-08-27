const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
// const router = require("./routes/habitRoutes");
const habitRoutes = require("./routes/habitRoutes");
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

mongoose.connect(
  "mongodb+srv://habit:mrPoCYIGpTTviVK5@cluster0.jhy0e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.use("/api/habits", habitRoutes);

app.listen(PORT, () => {
  console.log(`Your Server Running At ${PORT}`);
});
