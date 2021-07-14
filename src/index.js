import weather from "./modules/weather";
import display from "./modules/display";

const initialize = (() => {
    const input = document.querySelector('#search');
    const submitSearch = document.querySelector('#search + button');
    const checked = document.getElementById('checkbox');
    // const test = document.querySelector('#test');

    // test.addEventListener('click', testHand);

    // function testHand() {
    //     display.toggleForm();
    // }

    function xBtnEventHand(event) {
        console.log(event.target.checked);
        event.target.checked = true;
        display.toggleForm();
        display.toggleWidget();
    }


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
        event.preventDefault(); //prevent page from refreshing
        const city = input.value;
        input.value = '';
        let x = weather.getWeather(city);
        x.then(function (response) {
            display.toggleForm();
            display.toggleWidget();
            convertVals(response);
            display.appendValues(response);
        });
    }

    submitSearch.addEventListener('click', submitHand);
    checked.addEventListener('change', xBtnEventHand);

    return;
})();

export default initialize;