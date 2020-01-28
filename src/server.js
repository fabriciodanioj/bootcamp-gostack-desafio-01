const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const server = express();

server.use(express.json());

server.use(routes);

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }
);

server.listen(3333);
