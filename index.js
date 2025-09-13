
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

function press() {
  document.getElementById('text').innerHTML = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perspiciatis assumenda maiores perferendis? Veritatis incidunt perferendis et beatae asperiores hic.`;
  document.querySelector('.box-area').style.height = 'auto';
}

// *  Add element

function addLi(fruit) {
  const li = document.createElement('li');
  //*  li.innerHTML = `${fruit}`;
  li.appendChild(document.createTextNode(fruit));
  document.querySelector('ul').appendChild(li);
} 
addLi('mango');
/*
function addLi2() {
  const li = document.createElement('li');
  li.innerText = 'grape';
  const setUp = document.querySelector('ul').appendChild(li);
  //*  setUp.append(li);
}
addLi2();
*/
//?    Edit item
let editLi = document.querySelector('li:first-child');
/*
* editLi.innerText = 'jackfruit';
* editLi.textContent = 'jackfruit';
* const editLi2 = document.createElement('li');editLi2.textContent = 'orange'; editLi.replaceWith(editLi2);
*/
/*
? const editTag = document.querySelector('li:last-child');
? editTag.outerHTML = '<p>mango</p>';
*/



