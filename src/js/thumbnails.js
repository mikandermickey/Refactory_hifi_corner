document.addEventListener('DOMContentLoaded', function () {
    fetch("https://hifi-corner.herokuapp.com/api/v1/products", {
        "method": "GET"
    })
        .then(response => response.json())
        .then(data => {
            let thumbnail_grid = document.querySelector(".thumbnail-grid");

            data.forEach(products => {

                let div = document.createElement("div");
                div.className = "thumbnail";
                div.setAttribute("data-id", products.sku)
                div.id = 'p' + products.sku

                div.innerHTML = `
                    <img class="thumbnail__img" src="${products.images[0]}" alt="">
                    <h2 class="thumbnail__overskrift">${products.make} <br> ${products.model}</h2>
                    <p class="thumbnail__pris">${products.price} £</p>
                    <a class="thumbnail__button" href="shop-produkt.html?id=${products.sku}"> SHOW </a>
                    <button class="thumbnail__button thumbnail__button_udsolgt">udsolgt</button>`;
                thumbnail_grid.appendChild(div)
            });
        });
});


