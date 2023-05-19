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
