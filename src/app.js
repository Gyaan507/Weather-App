const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 80;

// public static path....
const static_path = (path.join(__dirname, "../public"));
// const static_path = path.join(__dirname, "../public");
const views_path = (path.join(__dirname, "../views"));
app.set('views', views_path);
app.set('view engine', 'hbs');
app.use(express.static(static_path));

// routing....
app.get("", (req, res) => {
  res.render('index');
})

app.get("/about", (req, res) => {
  res.render('about');
})

app.get("/weather", (req, res) => {
  res.render("Weather");
})

app.get("*", (req, res) => {
  res.render("404error");
})
app.listen(port, () => {
  console.log(`listening to ${port}`)
})