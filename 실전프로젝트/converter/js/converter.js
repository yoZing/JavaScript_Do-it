const s_value = document.getElementById('s-value');
const t_value = document.getElementById('t-value');
const s_unit = document.getElementById('s-unit');
const t_unit = document.getElementById('t-unit');

const exchange = document.getElementById('exchange');

let check = true;

exchange.addEventListener("click", function () {
  if (check == true) {
    check = false;
  } else {
    check = true;
  }
  
  let imsi = s_unit.textContent;
  s_unit.textContent = t_unit.textContent;
  t_unit.textContent = imsi;
});

s_value.addEventListener("keyup", convert);

function convert() {
  console.log("convert");

  if (check == true) {
    let convertCToF = (s_value.value * 1.8) + 32;
    t_value.value = convertCToF.toFixed(2);
  } else {
    let convertFToC = (s_value.value - 32) / 1.8;
    t_value.value = convertFToC.toFixed(2);
  }
}