"use strict";

document.addEventListener('DOMContentLoaded', function () {
  fetch("data/produkts.json").then(function (response) {
    return response.json();
  }).then(function (data) {
    var thumbnail_grid = document.querySelector(".thumbnail-grid");
    var sorting = document.querySelector("#sort");
    sorting.addEventListener("change", function (event) {
      var sortedArray;
      console.log("HER"); //document.querySelector('.thumbnail').remove()

      console.log(sorting.value);

      if (sorting.value === "brand") {
        console.log("test brand");
        sortedArray = data.produkter.slice(0);
        sortedArray.sort(function (a, b) {
          var x = a.brand.toLowerCase();
          var y = b.brand.toLowerCase();
          return x < y ? -1 : x > y ? 1 : 0;
        });
        console.log(sortedArray);
      }

      if (sorting.value === "price") {
        console.log("test price");
        sortedArray = data.produkter.slice(0);
        sortedArray.sort(function (a, b) {
          var x = a["original-price"].toLowerCase();
          var y = b["original-price"].toLowerCase();
          return x < y ? -1 : x > y ? 1 : 0;
        });
      }

      sortedArray.forEach(function (produkt) {
        var div = document.createElement("div");
        div.className = "thumbnail";
        div.setAttribute("data-id", produkt.id);
        div.innerHTML = "\n                    <img class=\"thumbnail__img\" src=\"/images/Produktbilleder/".concat(produkt.image, "\" alt=\"").concat(produkt.title, "\">\n    \n                    <h2 class=\"thumbnail__overskrift\">").concat(produkt.title, "</h2>\n                    <p class=\"thumbnail__pris thumbnail__pris_tilbud\">").concat(produkt["original-price"], "</p>\n                    <p class=\"thumbnail__pris\">").concat(produkt["original-price"], "</p>\n                    <button class=\"thumbnail__button\">add to cart</button>\n                    <button class=\"thumbnail__button thumbnail__button_udsolgt\">udsolgt</button>");
        thumbnail_grid.appendChild(div);
      });
    });
  });
});
//# sourceMappingURL=sort-by.js.map
