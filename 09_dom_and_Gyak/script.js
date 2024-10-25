let oszlop = document.createElement("div");
oszlop.setAttribute("id", "oszlop")
document.body.appendChild(oszlop)

for (let i = 1; i <= 10; i++){
    let szoveg
    if (i < 10){
        szoveg = "0" + i.toString()
    }
    else{
        szoveg = i.toString()
    }
    let gomb = document.createElement("button");
    gomb.setAttribute("id", szoveg);
    gomb.setAttribute("class", "btn");
    gomb.innerHTML = szoveg;
    oszlop.appendChild(gomb);
}

var gombok = document.querySelectorAll(".btn")
//console.log(gombok)
//gombok.forEach(gomb => console.dir(gomb))

gombok.forEach(gomb => {
    gomb.onclick = function(){
        //console.log("Mükszik?")
        console.log(this.id)
    }
})