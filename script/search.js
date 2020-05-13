document.addEventListener('DOMContentLoaded', function () {
    let search = document.getElementById('search-input')
  let searchclick = document.querySelector('.fa-search')
  
     fetch('../data/produkts.json')
         .then(response => response.json())
         .then(data => {
             //console.log(data);
             searchclick.addEventListener("click", function(event) {
                 
                let results =  data.produkter.filter(produkt => {
                   return  produkt.title.toLowerCase().includes(search.value.toLowerCase())  
                 });

                if(results) {

                    let allelm = document.querySelectorAll('.thumbnail')
                    allelm.forEach(element => {
                        element.style.display = 'none'
                    });
                    results.forEach(element => {
                        //console.log(element.id)
                        let selected = document.getElementById('p'+element.id)
                        selected.style.display = 'block'
                        
                    });
                    
                    window.setInterval(function () {
                        if(search.value == ''){
                            allelm.forEach( elm => {
                                elm.style.display = 'block'
                            })
                        }

                    },500)

                }
                
             });
         });

        
 });