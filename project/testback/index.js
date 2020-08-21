const express = require("express");

const app = express();

const port = 8000;

app.get("/", (req, res) => {
  return res.send("Home page");
});

app.get("/login", (req, res) => {
  return res.send("You are visiting login route");
});

app.get('/logout', (req, res)=>{
    return res.send("you are logout");
})

app.get('/dheeraj', (req, res)=>{
    return res.send("hi man thanks for checking my routes");
})

app.listen(port, () => {
  console.log("Server is up and running...");
});