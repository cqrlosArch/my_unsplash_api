const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const product = require("./routes/images.js");

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use("/api/images", product);
app.get("/api/*", (req, res) => {
  res.status(404).json({
    state: false,
    message: "Not found",
  });
});


//Setting
const PORT = process.env.PORT || 8080;

//Http listen
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

