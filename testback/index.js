const express = require("express");

const app = express();

const port = 8000;

app.get("/", (req, res) => {
  return res.send("Home page");
});

const admin = (req, res) => {
  return res.send("this is admin dashboard");
};

const isAdmin = (req, res, next) => {
  console.log("isAdmin is running");
  next();
};

const isLoggedin = (req, res, next) => {
  console.log("isLoggedin is running");
  next();
};

app.get("/admin", isLoggedin, isAdmin, admin);

app.get("/login", (req, res) => {
  return res.send("You are visiting login route");
});

app.get("/signout", (req, res) => {
  return res.send("You are signed out");
});

app.get("/signup", (req, res) => {
  return res.send("You are visiting signup route");
});

app.get("/hitesh", (req, res) => {
  return res.send("Hey there! hitesh");
});

app.listen(port, () => {
  console.log("Server is up and running...");
});

// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
