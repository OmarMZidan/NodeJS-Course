const request = require("request");

const geocode = (address, callback) => {
  const url =
    "http://api.positionstack.com/v1/forward?access_key=9246f429a364503c60676a15172f2f57&query=" +
    address +
    "&limit=1";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services!", "");
    } else if (!body.data) {
      callback("Unable to find location! Try another search", "");
    } else {
      callback("", {
        latitude: body.data[0].latitude,
        longitude: body.data[0].longitude,
        location: body.data[0].region,
      });
    }
  });
};

module.exports = geocode;
