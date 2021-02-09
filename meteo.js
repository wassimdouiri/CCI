var Paris = document.getElementById("Parisbox");
var Guinéé = document.getElementById("Guinéébox");
var Tunisie = document.getElementById("Tunisiebox");

function showCity(){


var element = document.getElementById("City").value;

if ( element=="Tunisie"){
Paris.style.visibility = "hidden";
    Tunisie.style.visibility = "visible";
    Guinéé.style.visibility = "hidden";

}

else if ( element=="Guinéé"){
Paris.style.visibility = "hidden";
    Tunisie.style.visibility = "hidden";
    Guinéé.style.visibility = "visible";
}
else if  ( element=="Paris"){
Paris.style.visibility = "visible";
    Tunisie.style.visibility = "hidden";
    Guinéé.style.visibility = "hidden";
}
else if  ( element=="selectionner"){
    Paris.style.visibility = "hidden";
        Tunisie.style.visibility = "hidden";
        Guinéé.style.visibility = "hidden";
}
}
