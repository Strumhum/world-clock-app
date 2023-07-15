function updateTime() {
  // Madrid
  let madridElement = document.querySelector("#city-1");
  if (madridElement) {
    let madridDateElement = madridElement.querySelector(".date");
    let madridTimeElement = madridElement.querySelector(".time");
    let madridTime = moment().tz("Europe/Madrid");

    madridDateElement.innerHTML = madridTime.format("Do MMMM YYYY");
    madridTimeElement.innerHTML = madridTime.format(
      `h:mm:ss [<span class="meridian">]A[</span>]`
    );
  }

  // New York
  let newYorkElement = document.querySelector("#city-2");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = newYorkTime.format("Do MMMM YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format(
      `h:mm:ss [<span class="meridian">]A[</span>]`
    );
  }

  // Sydney
  let sydneyElement = document.querySelector("#city-3");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("Do MMMM YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      `h:mm:ss [<span class="meridian">]A[</span>]`
    );
  }

  // Phnom Penh
  let phnomPenhElement = document.querySelector("#city-4");
  if (phnomPenhElement) {
    let phnomPenhDateElement = phnomPenhElement.querySelector(".date");
    let phnomPenhTimeElement = phnomPenhElement.querySelector(".time");
    let phnomPenhTime = moment().tz("Asia/Phnom_Penh");

    phnomPenhDateElement.innerHTML = phnomPenhTime.format("Do MMMM YYYY");
    phnomPenhTimeElement.innerHTML = phnomPenhTime.format(
      `h:mm:ss [<span class="meridian">]A[</span>]`
    );
  }

  // Istanbul
  let istanbulElement = document.querySelector("#city-5");
  if (istanbulElement) {
    let istanbulDateElement = istanbulElement.querySelector(".date");
    let istanbulTimeElement = istanbulElement.querySelector(".time");
    let istanbulTime = moment().tz("Asia/Istanbul");

    istanbulDateElement.innerHTML = istanbulTime.format("Do MMMM YYYY");
    istanbulTimeElement.innerHTML = istanbulTime.format(
      `h:mm:ss [<span class="meridian">]A[</span>]`
    );
  }

  // Los Angeles
  let losAngelesElement = document.querySelector("#city-6");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("Do MMMM YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      `h:mm:ss [<span class="meridian">]A[</span>]`
    );
  }
}

// dropdown city selector
function updateCities(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h3>${cityName}</h3>
            <h4 class="date">${cityTime.format("Do MMMM YYYY")}</h4>
          </div>
          <div>
            <h2 class="time">${cityTime.format(
              "h:mm:ss"
            )} <span class="meridian">${cityTime.format("A")}</span></h2>
          </div>
        </div>
        <a href="index.html" id="back-link">Back to default city view</a>
        `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city-select");
citiesSelectElement.addEventListener("change", updateCities);
