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

  score.textContent = bmi.toFixed(2);
  result.style.display = 'block';
})




let form = document.getElementById('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
});
