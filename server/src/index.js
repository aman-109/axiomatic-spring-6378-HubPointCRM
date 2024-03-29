const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connect = require("../src/config/db");
const PORT = process.env.PORT || 8080;
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({origin:true,credentials:true}));
app.use(require("./view/routes"));

app.listen(PORT, async () => {
  await connect();
  console.log(`Listening to http://localhost:${PORT}`);
});
