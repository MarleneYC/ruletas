function ruleta(){
    var mensaje="";
    var nombre = document.getElementById("nom").value;
    var x1 = Math.trunc( Math.random()*10) +1;
    var x2 = Math.trunc( Math.random()*10) +1;
    var x3 = Math.trunc( Math.random()*10) +1;

    switch (x1) {

        case 1:
            document.getElementById("box1").innerHTML="<img src='perro.jpg'>";
        break;
            case 2:
            document.getElementById("box1").innerHTML="<img src='camaleon.png'>";
        break;
            case 3:
            document.getElementById("box1").innerHTML="<img src='pollito.jpg'>";
        break;
            case 4:
            document.getElementById("box1").innerHTML="<img src='gato.jpg'>";
        break;
            case 5:
            document.getElementById("box1").innerHTML="<img src='hamster.jpg'>";
        break;
            case 6:
            document.getElementById("box1").innerHTML="<img src='cuyo.jpg'>";
        break;
            case 7:
            document.getElementById("box1").innerHTML="<img src='conejo.jpg'>";
        break;
            case 8:
            document.getElementById("box1").innerHTML="<img src='pez.jpg'>";
        break;
            case 9:
            document.getElementById("box1").innerHTML="<img src='serpiente.jpg'>";
        break;
            case 10:
            document.getElementById("box1").innerHTML="<img src='mifoto.jpg'>";
        break;
    }
    switch (x2) {

        case 1:
            document.getElementById("box2").innerHTML="<img src='perro.jpg'>";
        break;
            case 2:
            document.getElementById("box2").innerHTML="<img src='camaleon.png'>";
        break;
            case 3:
            document.getElementById("box2").innerHTML="<img src='pollito.jpg'>";
        break;
            case 4:
            document.getElementById("box2").innerHTML="<img src='gato.jpg'>";
        break;
            case 5:
            document.getElementById("box2").innerHTML="<img src='hamster.jpg'>";
        break;
            case 6:
            document.getElementById("box2").innerHTML="<img src='cuyo.jpg'>";
        break;
            case 7:
            document.getElementById("box2").innerHTML="<img src='conejo.jpg'>";
        break;
            case 8:
            document.getElementById("box2").innerHTML="<img src='pez.jpg'>";
        break;
            case 9:
            document.getElementById("box2").innerHTML="<img src='serpiente.jpg'>";
        break;
            case 10:
            document.getElementById("box2").innerHTML="<img src='mifoto.jpg'>";
        break;
    }
    switch (x3) {

        case 1:
            document.getElementById("box3").innerHTML="<img src='perro.jpg'>";
        break;
            case 2:
            document.getElementById("box3").innerHTML="<img src='camaleon.png'>";
        break;
            case 3:
            document.getElementById("box3").innerHTML="<img src='pollito.jpg'>";
        break;
            case 4:
            document.getElementById("box3").innerHTML="<img src='gato.jpg'>";
        break;
            case 5:
            document.getElementById("box3").innerHTML="<img src='hamster.jpg'>";
        break;
            case 6:
            document.getElementById("box3").innerHTML="<img src='cuyo.jpg'>";
        break;
            case 7:
            document.getElementById("box3").innerHTML="<img src='conejo.jpg'>";
        break;
            case 8:
            document.getElementById("box3").innerHTML="<img src='pez.jpg'>";
        break;
            case 9:
            document.getElementById("box3").innerHTML="<img src='serpiente.jpg'>";
        break;
            case 10:
            document.getElementById("box3").innerHTML="<img src='mifoto.jpg'>";
        break;
    }
    if (x1==x2 && x1==x3)
    mensaje="TERCIAS!";
    else if (x1==x2 || x1==x3 || x2==x3)
    mensaje="PARES!";
    else
    mensaje="SIN IGUAL";

    document.getElementById("sal").innerHTML="Hola "+nombre+ ". El resultado es ";
    document.getElementById("res").innerHTML= mensaje;
}
function mouseOver() {
    document.getElementById("boton").style.color = "white";
    document.getElementById("boton").style.backgroundColor= "#7148FA";
  }
  
  function mouseOut() {
    document.getElementById("boton").style.backgroundColor= "#FA48A6 ";
    document.getElementById("boton").style.color="black";
  }