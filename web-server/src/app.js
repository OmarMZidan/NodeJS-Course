const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and view location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Omar Zidan",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Omar Zidan",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    helpText: "This is sime helpful text",
    name: "Omar Zidan",
  });
});
app.get("/weather", (req, res) => {
  const address = req.query.address;
  if (!address) {
    return res.send({
      error: "You must provide an address",
    });
  }
  geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return res.send({ error });
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send({ error });
      }
      res.send({
        forecast: forecastData,
        location,
        address,
      });
    });
  });
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }
  console.log(req.query);
  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Omar Zidan",
    errorMessage: "Help article not found.",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Omar Zidan",
    errorMessage: "404 - Page not found!",
  });
});
// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
