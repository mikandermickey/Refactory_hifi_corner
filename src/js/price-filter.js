document.addEventListener('DOMContentLoaded', function () {
    let priser = document.querySelectorAll('.shop_aside_left_bottom__price_range');

    fetch("https://hifi-corner.herokuapp.com/api/v1/products", {
        "method": "GET"
    })
        .then(response => response.json())
        .then(data => {
            priser.forEach(pris => {
                pris.addEventListener("click", function (event) {
                    event.preventDefault();

                    let minprice = parseFloat(event.target.dataset.minprice);
                    let maxprice = parseFloat(event.target.dataset.maxprice);


                    let results = data.filter(products => {
                        return + products.price <= maxprice && products.price >= minprice


                    });

                    if (results) {

                        let allelm = document.querySelectorAll('.thumbnail')
                        allelm.forEach(element => {
                            element.style.display = 'none';
                            element.setAttribute("hidden", true);
                        });
                        results.forEach(element => {
                            console.log(element.id)
                            let selected = document.getElementById('p' + element.sku)
                            selected.style.display = "block";


                        });
                    }
                });
            });
        });
});