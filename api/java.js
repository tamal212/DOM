const imgItem = document.querySelector('#img_item');
const API_url="https://picsum.photos/v2/list";
const getImg = () => {
  fetch(API_url)
    .then(data => data.json())
};