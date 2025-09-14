const randomCodes = [
  {
    code: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    author: 'John Doe'
  },
  {
    code: 'Dolor ut non voluptas quas aperiam inventore',
    author: 'Jane Doe'
  },
  {
    code: 'consequuntur laudantium deleniti aspernatur',
    author: 'Alice'
  },
  {
    code: 'fugiat modi eaque. Mollitia dolore dolor accusantium',
    author: 'Bob'
  },
  {
    code: 'corpor i no option in your hands',
    author: 'Charlic'
  }
];

let textArea = document.querySelector('#load');
let hTag = document.getElementById('auto');
let button = document.getElementById('button');



button.addEventListener('click', function() {
  let randomIndex = Math.floor(Math.random() * randomCodes.length);
  // console.log(randomIndex);
  textArea.textContent = randomCodes[randomIndex].code;
  hTag.textContent = randomCodes[randomIndex].author;
});



 

/*
function start() {
  let randomIndex = Math.floor(Math.random() * randomCodes.length);
 // console.log(randomIndex);
  textArea.textContent = randomCodes[randomIndex].code;
  hTag.textContent = randomCodes[randomIndex].author;
}
start();
button.addEventListener('click', start);
*/