function afficher() {
  var name = document.getElementById("name").value;
  var level = document.getElementById("level").value;

  if ( level > 0 && level <= 6 ) {
    document.getElementById("name-level").innerHTML = "<h" + level + ">Bonjour " + name + " niveau=" + level + "</h" + level + ">";
    document.getElementById("name-level").style.color = "green";

  } else {
    document.getElementById("name-level").innerHTML = "Erreur le niveau doit être entre 1 et 6";
    document.getElementById("name-level").style.color = "red";
  }
}

function convertUnit(type) {
  var entry = document.getElementById("entry").value;

  if (type === "po-to-cm") {

    var pouce = entry * 2.5;
    var text = "pouces ===> " + pouce.toFixed(1) + " cm";

  } else if (type === "cm-to-po" ) {

    var cm = entry * 0.4;
    var text = "cm ===> " + cm.toFixed(1) + " pouces";

  } else if (type === "c-to-f") {

    var celcius = entry * 9/5 + 32;
    var text = "celcius ===> " + celcius.toFixed(1) + " Farenheit";

  } else if (type === "f-to-c") {

    var farenheit = (entry - 32) * 5/9;
    var text = "farenheit ===> " + farenheit.toFixed(1) + " Celsius";
  }

  document.getElementById("conversionResult").innerHTML = text;
}

$(document).ready(function(){
  
  $(".part-four h2").click(function(){
      $(".p-part-four").slideToggle();
  });
});
