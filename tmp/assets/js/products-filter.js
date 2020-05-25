"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var amplifier = document.getElementById('amp');
  var speakers = document.getElementById('speak');
  var turntables = document.getElementById('turn');
  var cd_players = document.getElementById('cd');
  fetch("https://hifi-corner.herokuapp.com/api/v1/products", {
    "method": "GET"
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    //henter alle amplifiers
    amplifier.addEventListener('click', function (event) {
      event.preventDefault();
      var results = data.filter(function (products) {
        return products.category.includes("Amplifiers");
      });
      console.log(results);

      if (results) {
        var allelm = document.querySelectorAll('.thumbnail');
        allelm.forEach(function (element) {
          element.style.display = 'none';
        });
        results.forEach(function (element) {
          var selected = document.getElementById('p' + element.sku);
          selected.style.display = 'block';
        });
      }
    }); //henter alle speakers

    speakers.addEventListener('click', function (event) {
      event.preventDefault();
      var results = data.filter(function (products) {
        return products.category.includes('Speakers');
      });

      if (results) {
        var allelm = document.querySelectorAll('.thumbnail');
        allelm.forEach(function (element) {
          element.style.display = 'none';
        });
        results.forEach(function (element) {
          var selected = document.getElementById('p' + element.sku);
          selected.style.display = 'block';
        });
      }
    }); //henter alle turntables

    turntables.addEventListener('click', function (event) {
      event.preventDefault();
      var results = data.filter(function (products) {
        return products.category.includes('Turntables');
      });

      if (results) {
        var allelm = document.querySelectorAll('.thumbnail');
        allelm.forEach(function (element) {
          element.style.display = 'none';
        });
        results.forEach(function (element) {
          var selected = document.getElementById('p' + element.sku);
          selected.style.display = 'block';
        });
      }
    }); //henter alle cd players

    cd_players.addEventListener('click', function (event) {
      event.preventDefault();
      var results = data.filter(function (products) {
        return products.category.includes('CD');
      });

      if (results) {
        var allelm = document.querySelectorAll('.thumbnail');
        allelm.forEach(function (element) {
          element.style.display = 'none';
        });
        results.forEach(function (element) {
          var selected = document.getElementById('p' + element.sku);
          selected.style.display = 'block';
        });
      }
    });
  });
});
//# sourceMappingURL=products-filter.js.map
