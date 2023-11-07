const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

messageOne.textContent = "";
messageTwo.textContent = "";

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  const apiUrl = `http://localhost:3000/weather?address=${location}`;
  fetch(apiUrl).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });
  });
});

// weatherForm.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const location = search.value;
//   const apiUrl = `/weather?address=${location}`;
//   const weatherInfo = document.querySelector("#weather-info");

//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();

//     if (data.error) {
//       weatherInfo.innerHTML = `<p class="error">${data.error}</p>`;
//     } else {
//       weatherInfo.innerHTML = `<p>Location: ${data.location}</p><p>Forecast: ${data.forecast}</p>`;
//     }
//   } catch (error) {
//     weatherInfo.innerHTML = `<p class="error">An error occurred: ${error.message}</p>`;
//   }
// });
