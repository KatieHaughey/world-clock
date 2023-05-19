//Los Angeles
function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");

  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");

  let losAngelesTime = moment().tz("America/Los_Angeles");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;

  //Paris
  let ParisElement = document.querySelector("#paris");

  let ParisDateElement = ParisElement.querySelector(".date");
  ParisDateElement.innerHTML = moment().format("MMMM Do YYYY");

  let ParisTime = moment().tz("Europe/Paris");
  let ParisTimeElement = ParisElement.querySelector(".time");
  ParisTimeElement.innerHTML = `${ParisTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
        <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>
`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
