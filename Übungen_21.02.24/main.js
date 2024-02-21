fetch("https://picsum.photos/v2/list")
.then((response) => response.json())
.then((images) => generateImages(images));

const generateImages = (images) => {
    let generateContainer = document.querySelector("#wrap");
    images.forEach(singleItem => {
        generateContainer.innerHTML += `<div class="container">
        <img src="${singleItem.download_url}" alt="image" />
        <h1 class="author">${singleItem.author}</h1>
        <a href="${singleItem.url}"><button type="button">See more</button></a>
        </div>`
    });
};

let scrollButton = document.querySelector(".scrollTo");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}