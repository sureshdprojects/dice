var randomNumber1 = Math.floor((Math.random()*6 + 1));

var randomNumber2 = Math.floor((Math.random()*6 + 1));

var imgSource1 = "images/dice" + randomNumber1 + ".png";

var imgSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",imgSource1);

document.querySelectorAll("img")[1].setAttribute("src",imgSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="player 1 wins";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="player 2 wins";
}else{
    document.querySelector("h1").innerHTML="draw!";
}

function refreshPage(){
    window.location.reload();
} 