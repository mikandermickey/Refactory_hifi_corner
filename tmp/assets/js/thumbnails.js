"use strict";

document.addEventListener('DOMContentLoaded', function () {
  fetch("https://hifi-corner.herokuapp.com/api/v1/products", {
    "method": "GET"
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    var thumbnail_grid = document.querySelector(".thumbnail-grid");
    data.forEach(function (products) {
      var div = document.createElement("div");
      div.className = "thumbnail";
      div.setAttribute("data-id", products.sku);
      div.id = 'p' + products.sku;
      div.innerHTML = "\n                    <img class=\"thumbnail__img\" src=\"".concat(products.images[0], "\" alt=\"\">\n                    <h2 class=\"thumbnail__overskrift\">").concat(products.make, " <br> ").concat(products.model, "</h2>\n                    <p class=\"thumbnail__pris\">").concat(products.price, " \xA3</p>\n                    <a class=\"thumbnail__button\" href=\"../shop-produkt/?id=").concat(products.sku, "\"> SHOW </a>\n                    <button class=\"thumbnail__button thumbnail__button_udsolgt\">udsolgt</button>");
      thumbnail_grid.appendChild(div);
    });
  });
});
//# sourceMappingURL=thumbnails.js.map
