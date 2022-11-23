

const cityEl = document.querySelector('.city');
const countryEl = document.querySelector('.country');
const tempEl = document.querySelector('#temp');
const conditionEl = document.querySelector('.condition');
const descriptionEl = document.querySelector('.description');
const windEl = document.querySelector('.wind');
const humidityEl = document.querySelector('.humidity');
const searchBtn = document.querySelector('button');
const searchEl = document.querySelector('.search');
const apiKey = '4d8fb5b93d4af21d66a2948710284366';

function fetchTemp(value) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}&units=metric`)
        .then((response) => response.json())
        .then((data) => {
            let temp = data.main.temp;
            let humidity = data.main.humidity;
            let condition = data.weather[0].main;
            let description = data.weather[0].description;
            let country = data.sys.country;
            let wind = data.wind.speed;
            let city = data.name;


            tempEl.textContent = temp.toFixed(0);
            conditionEl.textContent = condition;
            descriptionEl.textContent = description;
            cityEl.textContent = city;
            countryEl.textContent = country;
            windEl.innerHTML = `${Math.ceil(wind * 3.6)}km/h`;
            humidityEl.textContent = `${humidity}%`;
        }).catch(err => console.log(err));
}

searchBtn.addEventListener('click', () => {
    let search = searchEl.value;
    fetchTemp(search);
    searchEl.value = '';
})


