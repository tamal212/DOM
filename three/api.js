let textArea = document.querySelector('#load');
let hTag = document.getElementById('auto');
let button = document.getElementById('button');

const apiUrl = 'https://api.api-ninjas.com/v1/quotes?catagory=philosophy';
const keyApi = 'ovyiz0Np0RwQ/iHEz6TJGg==PCDVdNNqGfOFHmY3';
const getCode = () => {
  fetch(apiUrl, {
    headers: { 'X-Api-Key': keyApi },
  })
    .then(data => data.json())
    .then(item => {
      //console.log(item[0]);
      textArea.textContent = item[0].quote;
      hTag.textContent = item[0].author;
    }).catch(error => {
      console.warn('Error fetching quote:', error);
      
    });
};
button.addEventListener('click', getCode);
