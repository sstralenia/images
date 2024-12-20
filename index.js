const express = require("express");
const app = express();

app.get("/photo", (req, res) => {
  res.redirect('/download')
});

app.get("/download", (req, res) => {
  res.download("./photo.jpeg");
});

app.listen(3001, () => {
  console.log("Server is running on port 3000");
});