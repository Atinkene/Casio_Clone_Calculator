"use strict";
(function() {
    window.addEventListener("load",init)
    function init(){
        //id("beuss").addEventListener("click",couleur);
         setTimeout(increase,3000);
         id("beuss").addEventListener("click",increase);

    }
    //let touche = id("touche");
    function couleur() {
        let saisir=document.getElementById("saisi");
        saisir.style.backgroundColor="blue";
    }
    
    function increase() {
        let valeur = id("saisi");
        let float = parseFloat("valeur");
        let save;
       for (let i = 0; i < 10; i++) {
        save+=float;
       }
        valeur.innerHTML=save;
    }

    function id(elem){return document.getElementById(elem);
    }
})();