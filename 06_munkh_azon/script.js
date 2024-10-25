//AB-123 --> ebben a formában szeretném 
//az azonosítót megkapni

const betuk = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const szamok = "0123456789";
const btn = document.getElementById("btn");
let uzenet = null

//console.log(btn)


btn.onclick = function() {
    const input = document.getElementById("azon").value;
    //console.log(input)
    uzenet = "Helyes az azonosító!";
    if(!input){
        uzenet = "Nem írtál be azonosítót!";
    }
    else if(input.length != 6){
        uzenet = "Nem megfelelő hosszúságú a beírt azonosító!";
    }
    else{
        for(let i = 0; i<=1; i++){
            if(!betuk.includes(input[i])){
                uzenet = "Az első két karaktere nem nagy betű!";
            }
        }
        /*
        if(!betuk.includes(input[0]) || !betuk.includes(input[1])){
            uzenet = "Az első két karaktere nem nagy betű!"
        }*/
        if(input[2] !== "-"){
            uzenet = "Nincs a megfelelő helyen kötőjel!";
        }
        for(let i = 3; i<=5; i++){
            if(!szamok.includes(input[i])){
                uzenet = "Az utolsó három karakter nem szám!";
            }
        }
        
    }
    //console.log(uzenet)
    alert(uzenet);



}
