document.addEventListener('DOMContentLoaded', function () {
    let price1 = document.querySelector('.price_1');
    let price2 = document.querySelector(".price_2");

    fetch('../data/produkts.json')
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            price1.addEventListener("click", function (event) {
                event.preventDefault();
                let results = data.produkter.filter(produkt => {
                    return +produkt['original-price'].replace("£", "") <= 799
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

    fetch('../data/produkts.json')
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            price2.addEventListener("click", function (event) {
                event.preventDefault();
                let results = data.produkter.filter(produkt => {
                    return +produkt['original-price'].replace("£", "") >= 800 && +produkt['original-price'].replace("£", "") <= 900
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