(()=>{"use strict";const e=async function(e="Tokyo"){let t="https://api.openweathermap.org/data/2.5/weather?q="+e+"&appid=aabf6a78df5059eed68efb2611dc411a";try{const e=await fetch(t,{mode:"cors"});return function(e){const{name:t,main:{temp:n,temp_max:r,temp_min:i,feels_like:a,humidity:s,pressure:c},wind:{speed:u},weather:[{main:o,description:m}],clouds:{all:p}}=e;return{cityName:t,temperature:n,maxTemp:r,minTemp:i,feelsLike:a,humidity:s,pressure:c,windSpeed:u,conditions:o,descript:m,cloudiness:p}}(await e.json())}catch(e){alert(e)}},t=(()=>{function e(e){let t="div."+e+" div";return document.querySelector(t)}function t(e){let t=e.split("");return t[0]=t[0].toUpperCase(),t.join("")}function n(e){document.querySelector(".cityName").textContent=e}function r(e){switch(e){case"temperature":case"maxTemp":case"minTemp":case"feelsLike":return"°C";case"humidity":case"cloudiness":return"%";case"pressure":return"mb";case"windSpeed":return"km/h";default:return}}return document.getElementById("weatherinfo"),{appendValues:function(i){for(let a in i){let s=i[a];"descript"===a&&(s=t(s));const c=e(a),u=r(a);c?c.textContent=u?s+u:s:n(s)}}}})();e().then((function(e){return function(e,t="C"){const{temperature:n,maxTemp:r,minTemp:i,feelsLike:a}=e;if("C"===t)for(let t in{temperature:n,maxTemp:r,minTemp:i,feelsLike:a})e[t]=(s=e[t],c=void 0,c=parseFloat(s)-273.15,Math.round(2*c)/2);var s,c}(e),t.appendValues(e),e}))})();