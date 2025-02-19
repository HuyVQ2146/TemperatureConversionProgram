const textbox = document.getElementById('textbox');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const res = document.getElementById('res');
let temp;

function convert(){
    if (toFahrenheit.checked){
        temp = Number(textbox.value);
        temp = temp * 1.8 + 32;
        res.textContent = temp.toFixed(2) + ' *F'; // .toFixed(2) là lấy làm tròn 2 số sau dấu.
    }
    else if (toCelsius.checked){
        temp = Number(textbox.value);
        temp = (temp-32) / 1.8 ;
        res.textContent = temp.toFixed(2) + ' *C';
    }
    else{
        res.textContent = 'Select a unit.';
    }
}