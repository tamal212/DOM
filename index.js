
'use strict';
let boxes = document.querySelectorAll('.box');
//boxes[3].innerText = 'hi';
let num = 1;
for (let box of boxes) {
  box.innerText = `box ${num}`;
  num++;
} 

/*  let button = document.createElement('button');
button.innerText = 'Learn More';
let setuP = document.querySelector('.box-area');
setuP.append(button);*/


/*
* setuP.prepend(button);
* setuP.before(button);
* setuP.after(button);
* setuP.append(button);
*/
function click() {
  
  document.querySelector('.box-area').style.height = '500px';
  // document.querySelector('.box-area').innerText = `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totasitatibus molestiae similique!  `;
};
