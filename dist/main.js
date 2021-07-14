(()=>{"use strict";const e=async function(e){let t="https://api.openweathermap.org/data/2.5/weather?q="+e+"&appid=aabf6a78df5059eed68efb2611dc411a";try{const n=await fetch(t,{mode:"cors"});if(!n.ok)throw new Error(`City ${e} not found`);return function(e){const{name:t,main:{temp:n,temp_max:r,temp_min:o,feels_like:c,humidity:i,pressure:a},wind:{speed:s},weather:[{main:u,description:l}],clouds:{all:d}}=e;return{cityName:t,temperature:n,maxTemp:r,minTemp:o,feelsLike:c,humidity:i,pressure:a,windSpeed:s,conditions:u,descript:l,cloudiness:d}}(await n.json())}catch(e){alert(e)}},t=(()=>{const e=document.querySelector(".temptoggle div");function t(e){let t="div."+e+" div";return document.querySelector(t)}function n(e){return"C"===e?o:c}function r(t,r){switch(t){case"temperature":return"C"===e.textContent?e.textContent="F":e.textContent="C",n(e.textContent)(r);case"maxTemp":case"minTemp":case"feelsLike":return n(e.textContent)(r);case"descript":return function(e){let t=e.split("");return t[0]=t[0].toUpperCase(),t.join("")}(r);default:return r}}function o(e){var t;return t=parseFloat(e)-273.15,Math.round(2*t)/2}function c(e){return e=(1.8*(parseFloat(e)-273.15)+32).toFixed(1),parseFloat(e)}function i(e){document.querySelector(".cityName").textContent=e}function a(t){switch(t){case"temperature":case"maxTemp":case"minTemp":case"feelsLike":return"°"+e.textContent;case"humidity":case"cloudiness":return"%";case"pressure":return"mb";case"windSpeed":return"km/h";default:return}}return{appendValues:function(e){for(let n in e){let o=e[n];if("cityName"===n){i(o);continue}o=r(n,o);const c=t(n),s=a(n);c&&(c.textContent=s?o+s:o)}},toggleForm:function(){const e=document.querySelector("form");"none"===e.style.display?e.style.display="flex":e.style.display="none"},toggleWidget:function(){const e=document.getElementById("weatherinfo");"none"!==e.style.display&&e.style.display?e.style.display="none":e.style.display="grid"},resetTempToggle:function(){e.textContent="F"}}})();(()=>{const n=document.querySelector("#search"),r=document.querySelector("#search + button"),o=document.getElementById("checkbox");let c;document.querySelector(".temptoggle").addEventListener("click",(function(){t.appendValues(c)})),r.addEventListener("click",(function(r){r.preventDefault(),function(n){e(n).then((function(e){try{if(!e)throw new Error;t.appendValues(e),t.toggleForm(),t.toggleWidget(),c=e}catch(e){}}))}(n.value),n.value=""})),o.addEventListener("change",(function(e){e.target.checked=!0,t.resetTempToggle(),t.toggleForm(),t.toggleWidget()}))})()})();