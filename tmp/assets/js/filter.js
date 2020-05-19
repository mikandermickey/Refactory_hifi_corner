"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var price1 = document.querySelector('.price_1');
  var price2 = document.querySelector(".price_2");
  fetch("https://hifi-corner.herokuapp.com/api/v1/products?minPrice=2000&maxPrice=3000", {
    "method": "GET"
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
    price1.addEventListener("click", function (event) {
      event.preventDefault();
      var results = data.filter(function (products) {
        return +products.price <= 799;
      });

      if (results) {
        var allelm = document.querySelectorAll('.thumbnail');
        allelm.forEach(function (element) {
          element.style.display = 'none';
          element.setAttribute("hidden", true);
        });
        results.forEach(function (element) {
          console.log(element.id);
          var selected = document.getElementById('p' + element.id);
          selected.style.display = 'block';
        });
      }
    });
  });
  fetch("https://hifi-corner.herokuapp.com/api/v1/products", {
    "method": "GET"
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    //console.log(data);
    price2.addEventListener("click", function (event) {
      event.preventDefault();
      var results = data.filter(function (products) {
        return +products.price >= 800 && +products.price <= 900;
      });

      if (results) {
        var allelm = document.querySelectorAll('.thumbnail');
        allelm.forEach(function (element) {
          element.style.display = 'none';
          element.setAttribute("hidden", true);
        });
        results.forEach(function (element) {
          console.log(element.id);
          var selected = document.getElementById('p' + element.id);
          selected.style.display = 'block';
        });
      }
    });
  });
});
//# sourceMappingURL=filter.js.map
