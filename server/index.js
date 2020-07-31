const express = require("express");
const data = require("./data");

const app = express();

app.get("/api/students", (req, res) => {
  res.status(200).send(data);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Server running at port ", PORT);
});
