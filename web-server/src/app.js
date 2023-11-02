const path = require("path");
const express = require("express");

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates");

// Setup handlebars engine and view location
app.set("view engine", "hbs");
app.set("views", viewsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Aida Hammad",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Aida Hammad",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is sime helpful text",
  });
});
app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is snowing",
    location: "Geneva",
  });
});
// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
