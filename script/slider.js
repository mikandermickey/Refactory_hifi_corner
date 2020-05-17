document.addEventListener('DOMContentLoaded', function() {
    $(function() {
        let index = 0;
        let nyFoto;
        let fotoListe = ["amplifier", "harbeth", "Pro_ject"];

        let textListe = ["PRIMULUNA SOUNDS", "HARBETH SPEAKERS", "PROJECT TURNTABLE"];



        $("#next").click(function() {
            if (index < fotoListe.length - 1) {
                index++;
            } else {
                index = 0;
            }
            skift();
            nyFoto = "images/slider/" + fotoListe[index] + ".jpg";
            document.querySelector("#big_img").setAttribute("src", nyFoto);
            document.querySelector("#slider__text_name").textContent = textListe[index];
        });



        $("#back").click(function() {
            if (index > 0) {
                index--;
            } else {
                index = fotoListe.length - 1;
            }
            skift();
            nyFoto = "images/slider/" + fotoListe[index] + ".jpg";
            document.querySelector("#big_img").setAttribute("src", nyFoto);
            document.querySelector("#slider__text_name").textContent = textListe[index];
        });


        function skift() {
            $("#big_img").attr("src", "images/slider/" + fotoListe[index] + ".jpg");
            console.log(index);

        }

    });

    //function slide() {
    //fotoListe.setAttribute("src", fotoListe[index]);
    //index++;
    //if (index >= fotoListe.length) {
    //index = 0;
    // }
    //}
    //setInterval(slide, 2000);

});
