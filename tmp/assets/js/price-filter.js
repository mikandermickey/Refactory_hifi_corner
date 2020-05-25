"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var priser = document.querySelectorAll('.shop_aside_left_bottom__price_range');
  fetch("https://hifi-corner.herokuapp.com/api/v1/products", {
    "method": "GET"
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    priser.forEach(function (pris) {
      pris.addEventListener("click", function (event) {
        event.preventDefault();
        var minprice = parseFloat(event.target.dataset.minprice);
        var maxprice = parseFloat(event.target.dataset.maxprice);
        var results = data.filter(function (products) {
          return +products.price <= maxprice && products.price >= minprice;
        });

        if (results) {
          var allelm = document.querySelectorAll('.thumbnail');
          allelm.forEach(function (element) {
            element.style.display = 'none';
            element.setAttribute("hidden", true);
          });
          results.forEach(function (element) {
            console.log(element.id);
            var selected = document.getElementById('p' + element.sku);
            selected.style.display = "block";
          });
        }
      });
    });
  });
});
//# sourceMappingURL=price-filter.js.map
