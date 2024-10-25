const betuk = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const szamok = "0123456789";
const btn = document.getElementById("btn");
const coBtn = document.getElementById("cookiBtn");
const cookie = document.querySelector(".cookieWarning");
let uzenet = null;

if(localStorage.getItem("megnyomta") != "igen"){
    cookie.style.display = "flex";
}

coBtn.onclick = function(){
    cookie.style.display = "none";
    localStorage.setItem("megnyomta", "igen");
}

btn.onclick = function() {
    const input = document.getElementById("azon").value;

    uzenet = "Helyes az azonosító!";
    if(!input){
        uzenet = "Nem írtál be azonosítót!";
    }
    if(!input.match(/^[A-Z]{2}-[0-9]{3}$/)){
        uzenet = "Az azonosító formája nem megfelelő";
    }
    alert(uzenet);
}