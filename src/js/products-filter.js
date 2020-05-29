document.addEventListener('DOMContentLoaded', function () {
    let amplifier = document.getElementById('amp');
    let speakers = document.getElementById('speak');
    let turntables = document.getElementById('turn');
    let cd_players = document.getElementById('cd');


    fetch("https://hifi-corner.herokuapp.com/api/v1/products", {
        "method": "GET"
    })
        .then(response => response.json())
        .then(data => {
            //henter alle amplifiers
            amplifier.addEventListener('click', function (event) {
                event.preventDefault();
                let results = data.filter(products => {
                    return products.category.includes("Amplifiers")

                })
                console.log(results)
                if (results) {
                    let allelm = document.querySelectorAll('.thumbnail')
                    allelm.forEach(element => {
                        element.style.display = 'none'
                    });
                    results.forEach(element => {
                        let selected = document.getElementById('p' + element.sku)
                        selected.style.display = 'block'
                    });
                }

            });
            //henter alle speakers
            speakers.addEventListener('click', function (event) {
                event.preventDefault();
                let results = data.filter(products => {
                    return products.category.includes('Speakers')
                })
                if (results) {
                    let allelm = document.querySelectorAll('.thumbnail')
                    allelm.forEach(element => {
                        element.style.display = 'none'
                    });
                    results.forEach(element => {
                        let selected = document.getElementById('p' + element.sku)
                        selected.style.display = 'block'
                    });
                }
            });

            //henter alle turntables
            turntables.addEventListener('click', function (event) {
                event.preventDefault();
                let results = data.filter(products => {
                    return products.category.includes('Turntables')
                })
                if (results) {
                    let allelm = document.querySelectorAll('.thumbnail')
                    allelm.forEach(element => {
                        element.style.display = 'none'
                    });
                    results.forEach(element => {
                        let selected = document.getElementById('p' + element.sku)
                        selected.style.display = 'block'
                    });
                }
            });

            //henter alle cd players
            cd_players.addEventListener('click', function (event) {
                event.preventDefault();
                let results = data.filter(products => {
                    return products.category.includes('CD')
                })
                if (results) {
                    let allelm = document.querySelectorAll('.thumbnail')
                    allelm.forEach(element => {
                        element.style.display = 'none'
                    });
                    results.forEach(element => {
                        let selected = document.getElementById('p' + element.sku)
                        selected.style.display = 'block'
                    });
                }
            })

        })
});















