const request = require("request");

const forecast = (lat, long, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=de9086eec0ffeadd152eafc086c3e27e&query=" +
    lat +
    "," +
    long +
    "&units=m";
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

// const url =
//   "http://api.weatherstack.com/current?access_key=de9086eec0ffeadd152eafc086c3e27e&query=37.8267,-122.4233&units=f";

// request({ url: url, json: true }, (error, response) => {
//   // console.error("error:", error); // Print the error if one occurred
//   // console.log(
//   //   "🚀 ~ file: app.js:9 ~ request ~ response:",
//   //   response.body.current
//   // );
//   if (error) {
//     console.log("Unable to connect!");
//   } else if (response.body.error) {
//     console.log("Unable to find location!");
//   } else {
//     const { temperature, feelslike, weather_descriptions } =
//       response.body.current;
//     console.log(response.statusCode);
//     console.log(
//       `${weather_descriptions[0]}. It is currently ${temperature} degress out. It feels like ${feelslike} degrees out.`
//     );
//   }
// });
