const display = (() => {

    function getChildDiv(key) {
        let selector = 'div.' + key + ' div';
        let div = document.querySelector(selector);
        return div;
    }

    // function getSpan(key) {
    //     let childSpan = document.querySelector('div.' + key + ' span');
    //     return childSpan;
    // }

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
        console.log(weatherdiv.style.display);
        if (weatherdiv.style.display === 'none' || !(weatherdiv.style.display)) {
            weatherdiv.style.display = 'grid';
        } else {
            weatherdiv.style.display = 'none';
        }
    }

    function appendValues(obj) {
        for (let key in obj) {
            let val = obj[key];
            if (key === 'descript') {
                val = capitalizeFirst(val);
            }
            const div = getChildDiv(key);
            const unit = getUnit(key);
            if (div) {
                if (unit) {
                    div.textContent = val + unit;
                } else {
                    div.textContent = val;
                }
            } else {
                setCity(val);
            }
        }
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

    function getUnit(key) {
        switch (key) {
            case 'temperature':
            case 'maxTemp':
            case 'minTemp':
            case 'feelsLike': {
                return '\u00B0' + 'C';
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

    return { appendValues, toggleForm, toggleWidget };
})();

export default display;