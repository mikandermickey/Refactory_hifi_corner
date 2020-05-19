"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var search = document.getElementById('search-input');
  var searchclick = document.querySelector('.fa-search');
  fetch('../data/produkts.json').then(function (response) {
    return response.json();
  }).then(function (data) {
    //console.log(data);
    searchclick.addEventListener("click", function (event) {
      var results = data.produkter.filter(function (produkt) {
        return produkt.title.toLowerCase().includes(search.value.toLowerCase());
      });

      if (results) {
        var allelm = document.querySelectorAll('.thumbnail');
        allelm.forEach(function (element) {
          element.style.display = 'none';
        });
        results.forEach(function (element) {
          //console.log(element.id)
          var selected = document.getElementById('p' + element.id);
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
