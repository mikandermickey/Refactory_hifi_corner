document.addEventListener('DOMContentLoaded', function () {
    let price1 = document.querySelector('.price_1');
    let price2 = document.querySelector(".price_2");

    fetch("https://hifi-corner.herokuapp.com/api/v1/products?minPrice=2000&maxPrice=3000", {
        "method": "GET"
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            price1.addEventListener("click", function (event) {
                event.preventDefault();
                let results = data.filter(products => {
                    return +products.price <= 799
                });

                if (results) {

                    let allelm = document.querySelectorAll('.thumbnail')
                    allelm.forEach(element => {
                        element.style.display = 'none';
                        element.setAttribute("hidden", true);
                    });
                    results.forEach(element => {
                        console.log(element.id)
                        let selected = document.getElementById('p' + element.id)
                        selected.style.display = 'block';


                    });
                }
            });
        });

    fetch("https://hifi-corner.herokuapp.com/api/v1/products", {
        "method": "GET"
    })
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            price2.addEventListener("click", function (event) {
                event.preventDefault();
                let results = data.filter(products => {
                    return +products.price >= 800 && +products.price <= 900
                });

                if (results) {

                    let allelm = document.querySelectorAll('.thumbnail')
                    allelm.forEach(element => {
                        element.style.display = 'none';
                        element.setAttribute("hidden", true);
                    });
                    results.forEach(element => {
                        console.log(element.id)
                        let selected = document.getElementById('p' + element.id)
                        selected.style.display = 'block';


                    });
                }

            });




        });

});