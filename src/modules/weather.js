const weather = (() => {

    function processInfo(info) {
        const {
            name: cityName,
            main: { temp: temperature, temp_max: maxTemp, temp_min: minTemp, feels_like: feelsLike, humidity, pressure },
            wind: { speed: windSpeed },
            weather: [{ main: conditions, description: descript }],
            clouds: { all: cloudiness }
        } = info;

        return { cityName, temperature, maxTemp, minTemp, feelsLike, humidity, pressure, windSpeed, conditions, descript, cloudiness };
    }

    async function getWeather(location = 'Tokyo') {
        let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=aabf6a78df5059eed68efb2611dc411a';
        try {
            const response = await fetch(url, { mode: 'cors' });
            //throw error here
            const weatherData = await response.json();
            const weatherObj = processInfo(weatherData);
            return weatherObj;
        } catch (error) {
            alert(error);
        }
    }
    return { getWeather };

})();

export default weather;