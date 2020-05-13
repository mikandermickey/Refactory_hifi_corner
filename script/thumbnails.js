document.addEventListener('DOMContentLoaded', function () {
 fetch("data/produkts.json")
 .then(response => response.json())
 .then(data => {
 let thumbnail_grid = document.querySelector(".thumbnail-grid");
 
 data.produkter.forEach(produkt => {
 
 let div = document.createElement("div");
 div.className = "thumbnail";
 div.setAttribute("data-id", produkt.id)
 div.id = 'p' + produkt.id
 
 div.innerHTML = `
 <img class="thumbnail__img" src="/images/Produktbilleder/${produkt.image}" alt="${produkt.title}">
 
 <h2 class="thumbnail__overskrift">${produkt.title}</h2>
 <p class="thumbnail__pris thumbnail__pris_tilbud">${produkt["original-price"]}</p>
 <p class="thumbnail__pris">${produkt["original-price"]}</p>
 <a class="thumbnail__button" href="shop-produkt.html?id=${produkt.id}"> SHOW </a>
 <button class="thumbnail__button thumbnail__button_udsolgt">udsolgt</button>`;

 thumbnail_grid.appendChild(div)
});
 });
});

