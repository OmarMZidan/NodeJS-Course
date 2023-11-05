const request = require("request");

const forecast = (lat, long, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=de9086eec0ffeadd152eafc086c3e27e&query=" +
    lat +
    "," +
    long +
    "&units=f";
  // console.log(url, lat, long);

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services!", "");
    } else if (body.error) {
      callback("Unable to find location! Try another search", "");
    } else {
      const { temperature, feelslike, weather_descriptions } = body.current;
      callback(
        "",
        `${weather_descriptions[0]}. It is currently ${temperature} degress out. It feels like ${feelslike} degrees out.`
      );
    }
  });
};

module.exports = forecast;
