const weatherInfo = document.querySelector(".weather")
const error = document.querySelector(".error");
const searchButton = document.querySelector(".main-search-button");
const searchField = document.querySelector(".main-search-field");

class search {
    constructor(valid, path) {
        this.isValid = valid;
        this.requestPath = path;
    }
}

function toggleClass(window) {
    if(!window.classList.contains('active')) {
        window.classList.add('active');
    } else {
        window.classList.remove('active');
    }
}

function toggle(result) {
    if (!result.isValid) {
        error.classList.add('active');
    } else {
        if(!weatherInfo.classList.contains('active'))
            weatherInfo.classList.add('active');
        error.classList.remove('active');
    }
}

searchButton.onclick = function () {
    let result = new search(true, "chrome//com");
    if(searchField.value == 'abc') {
        result.isValid = false;
    }
    toggle(result);
};