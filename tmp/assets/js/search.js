"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var search = document.getElementById('search-input');
  var searchclick = document.querySelector('.fa-search');
  fetch("https://hifi-corner.herokuapp.com/api/v1/products", {
    "method": "GET"
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    //console.log(data);
    searchclick.addEventListener("click", function (event) {
      var results = data.filter(function (produkt) {
        return produkt.make.toLowerCase().includes(search.value.toLowerCase());
      });

      if (results) {
        var allelm = document.querySelectorAll('.thumbnail');
        allelm.forEach(function (element) {
          element.style.display = 'none';
        });
        results.forEach(function (element) {
          //console.log(element.id)
          var selected = document.getElementById('p' + element.sku);
          selected.style.display = 'block';
        });
        window.setInterval(function () {
          if (search.value == '') {
            allelm.forEach(function (elm) {
              elm.style.display = 'block';
            });
          }
        }, 500);
      }
    });
  });
});
//# sourceMappingURL=search.js.map
