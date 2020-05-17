document.addEventListener('DOMContentLoaded', function () {

    fetch("data/produkts.json")
        .then(response => response.json())
        .then(data => {

            let searchParams = new URLSearchParams(document.location.search);
            // -------- denne linje under her bruges ikke mere???? --------------
            // let produkt_grid = document.querySelector(".shop-produkt");
            let paramsId = parseInt(searchParams.get("id"));
            let current = data.produkter.find(produkt => produkt.id == paramsId)

            // PRODUKT BILLEDE SECTION
            let billedeSection = document.querySelector(".shop-produkt__billede")
            billedeSection.setAttribute("data-id", current.id)
            billedeSection.id = 'p' + current.id

            billedeSection.innerHTML = `
                <img src="/images/Produktbilleder/${current.image}" alt="">
                
                `;

            // THUMBNAIL SECTION
            let thumbnailSection = document.querySelector(".shop-produkt__thumbnail")
            thumbnailSection.setAttribute("data-id", current.id)
            thumbnailSection.id = 'p' + current.id

            if (current.more_views.length) {

                current.more_views.forEach(element => {

                    thumbnailSection.innerHTML += `
                    <img class="thumbnail__small-pictures" src="/images/Produktbilleder/${element}" alt="">
                    `
                });
            }

            // DESCRIPTION SECTION
            let powerSection = document.querySelector(".specifikation__power")
            powerSection.setAttribute("data-id", current.id)
            powerSection.id = 'p' + current.id
            powerSection.innerText = current.description["Power-Output"]

            let frequencySection = document.querySelector(".specifikation__frequency")
            frequencySection.setAttribute("data-id", current.id)
            frequencySection.id = 'p' + current.id
            frequencySection.innerText = current.description["Frequency-Response"]

            let totalSection = document.querySelector(".specifikation__total")
            totalSection.setAttribute("data-id", current.id)
            totalSection.id = 'p' + current.id
            totalSection.innerText = current.description["Total-Harmonic-Distortion"]

            let dampingSection = document.querySelector(".specifikation__damping")
            dampingSection.setAttribute("data-id", current.id)
            dampingSection.id = 'p' + current.id
            dampingSection.innerText = current.description["Damping-Factor"]

            let inputMMSection = document.querySelector(".specifikation__inputMM")
            inputMMSection.setAttribute("data-id", current.id)
            inputMMSection.id = 'p' + current.id
            inputMMSection.innerText = current.description["Input-Sensitivity:MM"]

            let inputMCSection = document.querySelector(".specifikation__inputMC")
            inputMCSection.setAttribute("data-id", current.id)
            inputMCSection.id = 'p' + current.id
            inputMCSection.innerText = current.description["Input-Sensitivity:MC"]

            let signalSection = document.querySelector(".specifikation__signal")
            signalSection.setAttribute("data-id", current.id)
            signalSection.id = 'p' + current.id
            signalSection.innerText = current.description["Signal-to-Noise-Ratio: MM / MC"]

            let input1Section = document.querySelector(".specifikation__input1")
            input1Section.setAttribute("data-id", current.id)
            input1Section.id = 'p' + current.id
            input1Section.innerText = current.description["Input-Sensitivity: High level"]

            let inputBalancedSection = document.querySelector(".specifikation__inputBalanced")
            inputBalancedSection.setAttribute("data-id", current.id)
            inputBalancedSection.id = 'p' + current.id
            inputBalancedSection.innerText = current.description["Input-Sensitivity: Balanced High Level"]

            let signalHighSection = document.querySelector(".specifikation__signalHigh")
            signalHighSection.setAttribute("data-id", current.id)
            signalHighSection.id = 'p' + current.id
            signalHighSection.innerText = current.description["Signal-to-Noise-Ratio: High level"]

            let inputPowerSection = document.querySelector(".specifikation__inputPower")
            inputPowerSection.setAttribute("data-id", current.id)
            inputPowerSection.id = 'p' + current.id
            inputPowerSection.innerText = current.description["Input-Sensitivity: Power Amp Direct IN"]

            let signalPowerSection = document.querySelector(".specifikation__signalPower")
            signalPowerSection.setAttribute("data-id", current.id)
            signalPowerSection.id = 'p' + current.id
            signalPowerSection.innerText = current.description["Signal-to-Noise-Ratio: Power Amp Direct IN"]

            // PRODUKT INFO SECTION
            let produktOverskrift = document.querySelector(".info__overskrift")
            produktOverskrift.setAttribute("data-id", current.id)
            produktOverskrift.id = 'p' + current.id
            produktOverskrift.innerHTML = `${current.title}`;

            let productBrand = document.querySelector(".info__otherProducts_brand")
            productBrand.setAttribute("data-id", current.id)
            productBrand.id = 'p' + current.id
            productBrand.innerHTML = `${current.subtitle}`;

            let productDiscountPrice = document.querySelector(".info__otherProducts_discount")
            productDiscountPrice.setAttribute("data-id", current.id)
            productDiscountPrice.id = 'p' + current.id
            productDiscountPrice.innerHTML = `${current["discount-price"]}`;

            // FEJL manglelr en if no discount price show normal price only

            let productlPrice = document.querySelector(".info__otherProducts_price")
            productlPrice.setAttribute("data-id", current.id)
            productlPrice.id = 'p' + current.id
            productlPrice.innerHTML = `${current["original-price"]}`;

            let productText = document.querySelector(".info__produktTekst")
            productText.setAttribute("data-id", current.id)
            productText.id = 'p' + current.id
            productText.innerHTML = `${current.text}`;

            // PRODUKT EKSTRA INFORMATION SECTION
            let info__brand = document.querySelector(".info__brand")
            info__brand.setAttribute("data-id", current.id)
            info__brand.id = 'p' + current.id
            info__brand.innerText = current.description["additional-information"].MANUFACTURER

            let info__link = document.querySelector(".info__link")
            info__link.setAttribute("data-id", current.id)
            info__link.id = 'p' + current.id
            info__link.innerText = current.description["additional-information"]["MANUFACTURER LINK"]

            let info__warranty = document.querySelector(".info__warranty")
            info__warranty.setAttribute("data-id", current.id)
            info__warranty.id = 'p' + current.id
            info__warranty.innerText = current.description["additional-information"]["FREE WARRIANTY"]
            
            let info__charge = document.querySelector(".info__charge")
            info__charge.setAttribute("data-id", current.id)
            info__charge.id = 'p' + current.id
            info__charge.innerText = current.description["additional-information"]["DELIVERY CHARGE"]

            let info__time = document.querySelector(".info__time")
            info__time.setAttribute("data-id", current.id)
            info__time.id = 'p' + current.id
            info__time.innerText = current.description["additional-information"]["DELIVERY TIME"]

            let info__card = document.querySelector(".info__card")
            info__card.setAttribute("data-id", current.id)
            info__card.id = 'p' + current.id
            info__card.innerText = current.description["additional-information"]["CARD SURCHARGES"]
        });
});