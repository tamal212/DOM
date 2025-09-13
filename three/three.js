const random =
  ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Dolor ut non voluptas quas aperiam inventore',
  'consequuntur laudantium deleniti aspernatur', 'fugiat modi eaque. Mollitia dolore dolor accusantium', 'corpor i no option in your hands',
  ];
let textArea = document.querySelector('#load');
let hTag = document.getElementById('auto');
let button = document.getElementById('button');
 /*
*    textArea.textContent = random[3];
 */

button.addEventListener('click', function () {
  let randomIndex = Math.floor(Math.random() * 5);
 // console.log(randomIndex);
textArea.textContent = random[randomIndex];
})