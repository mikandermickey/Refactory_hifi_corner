document.addEventListener('DOMContentLoaded', function () {
    let amplifier = document.getElementById('amp');
    let speakers = document.getElementById('speak');
    let turntables = document.getElementById('turn');
    let cd_players = document.getElementById('cd');

   
    fetch('../data/produkts.json')
    .then(response => response.json())

    .then(data => {
       
       //henter alle amplifiers
amplifier.addEventListener('click', function (event) {
    event.preventDefault();
    let results = data.produkter.filter(produkt => {
        return produkt.product.includes('amplifier')
        
    })
    console.log(results)
    if(results) {
        let allelm = document.querySelectorAll('.thumbnail')
                    allelm.forEach(element => {
                        element.style.display = 'none'
                    });
                    results.forEach(element => {
                        let selected = document.getElementById('p'+element.id)
                        selected.style.display = 'block'
                    });
    }

});
//henter alle speakers
speakers.addEventListener('click', function (event) {
    event.preventDefault();
    let results = data.produkter.filter(produkt => {
        return produkt.product.includes('speakers')
    })
    if(results) {
        let allelm = document.querySelectorAll('.thumbnail')
                    allelm.forEach(element => {
                        element.style.display = 'none'
                    });
                    results.forEach(element => {
                        let selected = document.getElementById('p'+element.id)
                        selected.style.display = 'block'
                    });
    }
});

//henter alle turntables
turntables.addEventListener('click', function (event) {
    event.preventDefault();
    let results = data.produkter.filter(produkt => {
        return produkt.product.includes('turntables')
    })
    if(results) {
        let allelm = document.querySelectorAll('.thumbnail')
                    allelm.forEach(element => {
                        element.style.display = 'none'
                    });
                    results.forEach(element => {
                        let selected = document.getElementById('p'+element.id)
                        selected.style.display = 'block'
                    });
    }
});

//henter alle cd players
cd_players.addEventListener('click', function (event) {
    event.preventDefault();
    let results = data.produkter.filter(produkt => {
        return produkt.product.includes('CD Players')
    })
    if(results) {
        let allelm = document.querySelectorAll('.thumbnail')
                    allelm.forEach(element => {
                        element.style.display = 'none'
                    });
                    results.forEach(element => {
                        let selected = document.getElementById('p'+element.id)
                        selected.style.display = 'block'
                    });
    }
})

    })

   

 })















