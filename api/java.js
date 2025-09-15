const imgItem = document.getElementById("img_container");
const API_url = 'https://picsum.photos/v2/list';
const getImg = () => {
  fetch(API_url)
    .then(data => data.json())
    .then(item => {
      //console.log(item);
      item.forEach(function (div) {
        const newDiv = document.createElement('div');
        newDiv.classList.add("img_item");

        const newImg = document.createElement("img");
        newImg.src = div.download_url;
        newDiv.appendChild(newImg);

        const newP = document.createElement("p");
        newP.innerText = div.author;
        newDiv.appendChild(newP);

        imgItem.appendChild(newDiv);
      })
     })
};
getImg();