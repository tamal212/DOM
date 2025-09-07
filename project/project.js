//!  case one
/*
? function change1()
* { document.querySelector('.box').style.backgroundColor = '#1abc9c';
* document.querySelector('.box1').style.border = '1px solid #fff';
* document.querySelector('.box1').innerHTML = 'H'; }

? function change2() 
* { document.querySelector('.box').style.backgroundColor = '#f1c40f';
 * document.querySelector('.box2').style.border = '1px solid #fff';
 * document.querySelector('.box2').innerHTML = 'E'; }
? function change3() 
*{document.querySelector('.box').style.backgroundColor = '#d35400';
*  document.querySelector('.box3').style.border = '1px solid #fff';
*  document.querySelector('.box3').innerHTML = 'L'; }
? function change4() 
*  { document.querySelector('.box').style.backgroundColor = '#27ae60';
*  document.querySelector('.box4').style.border = '1px solid #fff';
*  document.querySelector('.box4').innerHTML = 'L'; }
? function change5()  
*{ document.querySelector('.box').style.backgroundColor = '#2980b9';
*  document.querySelector('.box5').style.border = '1px solid #fff'; }
*/
 
//! case two 

const body = document.getElementById('body');
const button = document.querySelectorAll('li');

button.forEach(function (value) {
  value.addEventListener('click', function () {
    let className = this.classList[0];//.value;
    let color = '';
    if (className === 'red') {
      color = '#c0392b';
    }
    if (className === 'blue') {
      color = '#2980b9';
    }
    if (className === 'green')
    {
      color = '#27ae60';
      
     }
    if (className === 'yellow')
    {
      color = '#f1c40f';
    }   
    if (className === 'orange') {
      color = '#e67e22';
    }
    body.style.backgroundColor = color;
     
  });
});






/*
const redColor = document.querySelector('.red');
redColor.addEventListener('click', function () {
  body.style.backgroundColor = "#c0392b";
})
const blueColor = document.querySelector('.blue');
blueColor.addEventListener('click', function () {
  body.style.backgroundColor = "#27ae60";
})
  */