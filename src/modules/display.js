import weather from "./weather";

const display = (() => {
    const weatherdiv = document.getElementById('weatherinfo');

    function getChildDiv(key) {
        let selector = 'div.' + key + ' div';
        let div = document.querySelector(selector);
        return div;
    }

    // function getSpan(key) {
    //     let childSpan = document.querySelector('div.' + key + ' span');
    //     return childSpan;
    // }

    function appendValues(obj) {
        for (let key in obj) {
            const val = obj[key];
            let div = getChildDiv(key);
            if (div) {
                div.textContent = val;
            } else {
                setCity(val);
            }
        }
    }

    function setCity(val) {
        const city = document.querySelector('.cityName');
        city.textContent = val;
    }

    function processTitle(key) {
        switch (key) {
            case 'cityName': {
                return '';
            }
            case 'temperature': {
                return 'Temperature: ';
            }
            case 'maxTemp': {
                return 'Max temp: ';
            }
            case 'minTemp': {
                return 'Min temp: ';
            }
            case 'feelsLike': {
                return 'Feels like: ';
            }
            case 'humidity': {
                return 'Humidity: ';
            }
            case 'pressure': {
                return 'Pressure: ';
            }
            case 'windSpeed': {
                return 'Wind speed: ';
            }
            case 'conditions': {
                return 'Weather: ';
            }
            case 'descript': {
                return 'Description: ';
            }
            case 'cloudiness': {
                return 'Cloudiness: ';
            }
        }
    }

    function addUnits(key) {

    }

    return { appendValues };
})();

export default display;