document.addEventListener('DOMContentLoaded', function () {

    let searchParams = new URLSearchParams(document.location.search);
    let sku = (searchParams.get("id"));

    fetch(`https://hifi-corner.herokuapp.com/api/v1/products/${sku}`, {
    })
        .then(response => {
            console.log(response);
            return response.json()
        })
        .then(data => {

            // PRODUKT BILLEDE SECTION
            let billedeSection = document.querySelector(".shop-produkt__billede")
            billedeSection.setAttribute("data-id", data.sku)
            billedeSection.id = 'p' + data.sku

            billedeSection.innerHTML = `
                <img src="${data.images}" alt="">

                `;

            // PRODUKT INFO SECTION
            let produktOverskrift = document.querySelector(".specifikation__overskrift")
            produktOverskrift.setAttribute("data-id", data.sku)
            produktOverskrift.id = 'p' + data.sku
            produktOverskrift.innerHTML = `${data.make}${data.model}`;

            let productBrand = document.querySelector(".info__otherProducts_navn")
            productBrand.setAttribute("data-id", data.sku)
            productBrand.id = 'p' + data.sku
            productBrand.innerHTML = `${data.make} `;

            let productlPrice = document.querySelector(".info__otherProducts_price")
            productlPrice.setAttribute("data-id", data.sku)
            productlPrice.id = 'p' + data.sku
            productlPrice.innerHTML = `${data.price} kr`;

            letproductText = document.querySelector(".info__produktTekst")
            productText.setAttribute("data-id", data.sku)
            productText.id = 'p' + data.sku
            productText.innerHTML = `${data.description}`;


        });
});

