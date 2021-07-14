import weather from "./modules/weather";
import display from "./modules/display";

const initialize = (() => {
    const input = document.querySelector('#search');
    const submitSearch = document.querySelector('#search + button');
    // const test = document.querySelector('#test');

    // test.addEventListener('click', testHand);

    // function testHand() {
    //     display.toggleForm();
    // }



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

    function submitHand(event) {
        event.preventDefault();
        let x = weather.getWeather(input.value);
        x.then(function (response) {
            display.toggleForm();
            display.toggleWidget();
            convertVals(response);
            display.appendValues(response);
        });
    }

    submitSearch.addEventListener('click', submitHand);

    return;
})();

export default initialize;