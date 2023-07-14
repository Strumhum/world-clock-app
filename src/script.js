function updateTime() {
  // Madrid
  let madridElement = document.querySelector("#city-1");
  let madridDateElement = madridElement.querySelector(".date");
  let madridTimeElement = madridElement.querySelector(".time");
  let madridTime = moment().tz("Europe/Madrid");

  madridDateElement.innerHTML = madridTime.format("Do MMMM YYYY");
  madridTimeElement.innerHTML = madridTime.format(
    `h:mm:ss [<span class="meridian">]A[</span>]`
  );

  // New York
  let newYorkElement = document.querySelector("#city-2");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = newYorkTime.format("Do MMMM YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    `h:mm:ss [<span class="meridian">]A[</span>]`
  );

  // Sydney
  let sydneyElement = document.querySelector("#city-3");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("Do MMMM YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    `h:mm:ss [<span class="meridian">]A[</span>]`
  );

  // Istanbul
  let istanbulElement = document.querySelector("#city-4");
  let istanbulDateElement = istanbulElement.querySelector(".date");
  let istanbulTimeElement = istanbulElement.querySelector(".time");
  let istanbulTime = moment().tz("Asia/Istanbul");

  istanbulDateElement.innerHTML = istanbulTime.format("Do MMMM YYYY");
  istanbulTimeElement.innerHTML = istanbulTime.format(
    `h:mm:ss [<span class="meridian">]A[</span>]`
  );
}

updateTime();
setInterval(updateTime, 1000);
