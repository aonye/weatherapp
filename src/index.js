import weather from "./modules/weather";
import display from "./modules/display";

const initialize = (() => {
    const input = document.querySelector('#search');
    const submitSearch = document.querySelector('#search + button');
    const checked = document.getElementById('checkbox');
    const temptoggle = document.querySelector('.temptoggle');
    let currentObjRef;
    // const test = document.querySelector('#test');

    // test.addEventListener('click', testHand);

    // function testHand() {
    //     display.toggleForm();
    // }

    function callAPI(input) {
        let promise = weather.getWeather(input);
        promise.then(function (result) {
            try {
                if (!result) {
                    throw new Error();
                }
                display.appendValues(result);
                display.toggleForm();
                display.toggleWidget();
                currentObjRef = result;
            } catch (error) {
            }
        });
    }

    function tempToggleHand() {
        display.appendValues(currentObjRef);
    }

    function xBtnEventHand(event) {
        event.target.checked = true;
        display.resetTempToggle();
        display.toggleForm();
        display.toggleWidget();
    }

    function submitHand(event) {
        event.preventDefault(); //prevent page from refreshing
        callAPI(input.value);
        input.value = '';
    }

    temptoggle.addEventListener('click', tempToggleHand);
    submitSearch.addEventListener('click', submitHand);
    checked.addEventListener('change', xBtnEventHand);
})();