let height = document.getElementById('height');
let weight = document.getElementById('weight');
let button = document.getElementById('button');
let score = document.getElementById('score');
let result = document.querySelector('.result');




button.addEventListener('click', function () {
  let storedHeight =parseFloat( height.value);
  let storedWeight =parseFloat( weight.value);
  storedHeight = storedHeight / 100;
  let sqrHeight = storedHeight * storedHeight;
  let bmi = storedWeight / sqrHeight;
  '#EA2027';
score.textContent = bmi.toFixed(2);
  result.style.display = 'block';



  if (score.textContent < 18.6) {
  score.style.backgroundColor = '#FFC312';
  } else if  (score.textContent <24.9) {
  score.style.backgroundColor = '#009432';
  } else { score.style.backgroundColor = '#EA2027'; }}
  

);


let form = document.getElementById('form');
form.addEventListener('submit', function (a) {
  a.preventDefault();
 
});


function reset() {
  height.value = '';
  weight.value = '';
  result.style.display = 'none';
}