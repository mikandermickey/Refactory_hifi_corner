"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var searchParams = new URLSearchParams(document.location.search);
  var sku = searchParams.get("id");
  fetch("https://hifi-corner.herokuapp.com/api/v1/products/".concat(sku), {}).then(function (response) {
    console.log(response);
    return response.json();
  }).then(function (data) {
    // PRODUKT BILLEDE SECTION
    var billedeSection = document.querySelector(".shop-produkt__billede");
    billedeSection.setAttribute("data-id", data.sku);
    billedeSection.id = 'p' + data.sku;
    billedeSection.innerHTML = "\n                <img src=\"".concat(data.images, "\" alt=\"\">\n\n                "); // PRODUKT INFO SECTION

    var produktOverskrift = document.querySelector(".specifikation__overskrift");
    produktOverskrift.setAttribute("data-id", data.sku);
    produktOverskrift.id = 'p' + data.sku;
    produktOverskrift.innerHTML = "".concat(data.make).concat(data.model);
    var productBrand = document.querySelector(".info__otherProducts_navn");
    productBrand.setAttribute("data-id", data.sku);
    productBrand.id = 'p' + data.sku;
    productBrand.innerHTML = "".concat(data.make, " ");
    var productlPrice = document.querySelector(".info__otherProducts_price");
    productlPrice.setAttribute("data-id", data.sku);
    productlPrice.id = 'p' + data.sku;
    productlPrice.innerHTML = "".concat(data.price, " kr");
    letproductText = document.querySelector(".info__produktTekst");
    productText.setAttribute("data-id", data.sku);
    productText.id = 'p' + data.sku;
    productText.innerHTML = "".concat(data.description);
  });
});
//# sourceMappingURL=shopProdukt-js.js.map
