import weather from "./modules/weather";
import display from "./modules/display";

const initialize = (() => {
    const location = '';
    let x = weather.getWeather();
    x.then(function (response) {
        convertVals(response);
        display.appendValues(response);
        return response;
    });


    function convertVals(obj, tempChoice = 'C') {
        const { temperature, maxTemp, minTemp, feelsLike } = obj;
        if (tempChoice === 'C') {
            for (let key in { temperature, maxTemp, minTemp, feelsLike }) {
                obj[key] = calcCelsius(obj[key]);
            }
        }
    }

    function calcCelsius(val) {
        val = roundHalf(parseFloat(val) - 273.15);
        return val;
    }

    function calcFahrenheit(val) {
        val = (((parseFloat(val) - 273.15) * (9 / 5)) + 32).toFixed(1); //toFixed turns it into a string
        return parseFloat(val);
    }

    function roundHalf(num) {
        return Math.round(num * 2) / 2;
    }
    return;
})();

export default initialize;