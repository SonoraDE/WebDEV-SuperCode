const apiKey = "ec7595ef36b640888133347e482bfec6";

let contentContainer = document.querySelector(".content-container");

fetch(`https://newsapi.org/v2/everything?q=keyword&apiKey=${apiKey}`)
    .then((response) => response.json())
    .then((data) => getNews(data))
    .catch((error) => console.error("Es ist ein Fehler aufgetreten.", error));

const getNews = (data) => {
    console.log(data);
    data.articles.forEach(news => {
        contentContainer.innerHTML += `
            <div class="news-box">
            <div class="content-img">
                <img class="image" src="${news.urlToImage?.replace("%7D", "")}" alt="IMAGE" />
            </div>
            <div>
                <h2 id="title">${news.title}</h2>
            </div>
            <div>
                <h3 id="desc">${news.description}</h3>
            </div>
            <div>
            <a target="_blank" href="${news.url}"> <button id="btn">Zum Artikel</button> </a>
            </div>
            </div>`;
    });
};