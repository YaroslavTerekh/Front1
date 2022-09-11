const weatherInfo = document.querySelector(".weather")
const error = document.querySelector(".error");
const searchButton = document.querySelector(".main-search-button");
const searchField = document.querySelector(".main-search-field");

function toggle(result) {
    if (!result) {
        error.classList.add('active');
    } else {
        if (!weatherInfo.classList.contains('active'))
            weatherInfo.classList.add('active');
        error.classList.remove('active');
    }
}

searchButton.onclick = async function () {
    await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + searchField.value + "?unitGroup=metric&key=QZJK2E45D5TGGFM8N8KVZDPNL&contentType=json")
        .then(response => {
            if (response.status === 200) {
                toggle(true);
            } else {
                toggle(false);
            }
            response.json().then((data) => {
                console.log(data);
                document.querySelector(".w-deg-info > h3").innerHTML = data.currentConditions.temp;
                document.querySelector(".w-deg-info > p").innerHTML = data.currentConditions.conditions;
                document.querySelector(".w-rep-feelslike > .w-rep-content-info_item-info").innerHTML = data.currentConditions.feelslike;
                document.querySelector(".w-rep-sunrise > .w-rep-content-info_item-info").innerHTML = data.currentConditions.sunrise;
                document.querySelector(".w-rep-sunset > .w-rep-content-info_item-info").innerHTML = data.currentConditions.sunset;
                document.querySelector(".w-rep-humidity > .w-rep-content-info_item-info").innerHTML = data.currentConditions.humidity;
                document.querySelector(".w-rep-visibility > .w-rep-content-info_item-info").innerHTML = data.currentConditions.visibility;
                document.querySelector(".w-rep-pressure > .w-rep-content-info_item-info").innerHTML = data.currentConditions.pressure;
                document.querySelector(".w-title-info > h4").innerHTML = data.address;
                document.querySelector(".w-title-info-location").innerHTML = data.resolvedAddress;
                document.querySelector(".w-title-info-date").innerHTML = data.currentConditions.datetime;
                document.querySelector(".w-deg > img").setAttribute('src', 'assets/' + data.currentConditions.icon + '.png');
                document.querySelector(".w-title > img").setAttribute('src', 'assets/mini-' + data.currentConditions.icon + '.png');
                document.querySelector(".w-rep-content-time > img").setAttribute('src', 'assets/mini-' + data.currentConditions.icon + '.png');
            });
        })
        .then(data => data);

};

