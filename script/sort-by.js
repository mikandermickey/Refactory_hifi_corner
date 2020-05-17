document.addEventListener('DOMContentLoaded', function () {
    fetch("data/produkts.json")
        .then(response => response.json())
        .then(data => {
            let thumbnail_grid = document.querySelector(".thumbnail-grid");
            let sorting = document.querySelector("#sort");

            sorting.addEventListener("change", function (event) {
                var sortedArray;
                console.log("HER")
                //document.querySelector('.thumbnail').remove()

                console.log(sorting.value)
                if (sorting.value === "brand") {
                    console.log("test brand")
                    sortedArray = data.produkter.slice(0);
                    sortedArray.sort(function (a, b) {
                        var x = a.brand.toLowerCase();
                        var y = b.brand.toLowerCase();
                        return x < y ? -1 : x > y ? 1 : 0;
                    });
                    console.log(sortedArray)
                }


                if (sorting.value === "price") {
                    console.log("test price")
                    sortedArray = data.produkter.slice(0);
                    sortedArray.sort(function (a, b) {
                        var x = a["original-price"].toLowerCase();
                        var y = b["original-price"].toLowerCase();
                        return x < y ? -1 : x > y ? 1 : 0;
                    });
                    
                }
                
                sortedArray.forEach(produkt => {
                    let div = document.createElement("div");
                    div.className = "thumbnail";
                    div.setAttribute("data-id", produkt.id)
                    div.innerHTML = `
                    <img class="thumbnail__img" src="/images/Produktbilleder/${produkt.image}" alt="${produkt.title}">
    
                    <h2 class="thumbnail__overskrift">${produkt.title}</h2>
                    <p class="thumbnail__pris thumbnail__pris_tilbud">${produkt["original-price"]}</p>
                    <p class="thumbnail__pris">${produkt["original-price"]}</p>
                    <button class="thumbnail__button">add to cart</button>
                    <button class="thumbnail__button thumbnail__button_udsolgt">udsolgt</button>`;

                    thumbnail_grid.appendChild(div)

                });





  

          
            });
        });
});
    
    
 

