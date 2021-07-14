const display = (() => {
    const toggleDivText = document.querySelector('.temptoggle div');

    function getChildDiv(key) {
        let selector = 'div.' + key + ' div';
        let div = document.querySelector(selector);
        return div;
    }

    function toggleTempUnit() {
        if (toggleDivText.textContent === 'C') {
            toggleDivText.textContent = 'F';
        } else {
            toggleDivText.textContent = 'C';
        }
    }

    function selectTempFn(tempSign) {
        if (tempSign === 'C') {
            return calcCelsius;
        }
        else {
            return calcFahrenheit;
        }
    }

    function resetTempToggle() {
        toggleDivText.textContent = 'F';
    }

    function toggleForm() {
        const form = document.querySelector('form');
        if (form.style.display === 'none') {
            form.style.display = 'flex';
        } else {
            form.style.display = 'none';
        }
    }

    function toggleWidget() {
        const weatherdiv = document.getElementById('weatherinfo');
        if (weatherdiv.style.display === 'none' || !(weatherdiv.style.display)) {
            weatherdiv.style.display = 'grid';
        } else {
            weatherdiv.style.display = 'none';
        }
    }

    function appendValues(obj) {
        for (let key in obj) {
            let val = obj[key];
            if (key === 'cityName') {
                setCity(val);
                continue;
            }
            val = modifyVal(key, val);
            const div = getChildDiv(key);
            const units = getUnits(key);
            if (div) {
                if (units) {
                    div.textContent = val + units;
                } else {
                    div.textContent = val;
                }
            }
        }
    }

    function modifyVal(key, val) {
        switch (key) {
            case 'temperature': {
                toggleTempUnit();
                let tempfxn = selectTempFn(toggleDivText.textContent);
                return tempfxn(val);
            }
            case 'maxTemp':
            case 'minTemp':
            case 'feelsLike': {
                let tempfxn = selectTempFn(toggleDivText.textContent);
                return tempfxn(val);
            }
            case 'descript': {
                return capitalizeFirst(val);
            }
            default: {
                return val;
            }
        }
    }

    function calcCelsius(val) {
        val = roundHalf(parseFloat(val) - 273.15);
        return val;

        function roundHalf(num) { //helper fxn
            return Math.round(num * 2) / 2;
        }
    }

    function calcFahrenheit(val) {
        val = (((parseFloat(val) - 273.15) * (9 / 5)) + 32).toFixed(1); //toFixed turns int into str
        return parseFloat(val);
    }

    function capitalizeFirst(val) {
        let arr = val.split('');
        arr[0] = arr[0].toUpperCase();
        val = arr.join('');
        return val;
    }

    function setCity(val) {
        const city = document.querySelector('.cityName');
        city.textContent = val;
    }

    function getUnits(key) {
        switch (key) {
            case 'temperature':
            case 'maxTemp':
            case 'minTemp':
            case 'feelsLike': {
                return '\u00B0' + toggleDivText.textContent;
            }
            case 'humidity':
            case 'cloudiness': {
                return '%';
            }
            case 'pressure': {
                return 'mb';
            }
            case 'windSpeed': {
                return 'km/h';
            }
            default: {
                return;
            }
        }
    }

    return { appendValues, toggleForm, toggleWidget, resetTempToggle };
})();

export default display;