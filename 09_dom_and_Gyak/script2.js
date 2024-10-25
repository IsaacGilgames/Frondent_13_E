let oszlop = document.createElement("div");
oszlop.setAttribute("id", "oszlop");


for (let i = 1; i <= 10; i++){
    let szoveg
    if(i < 10){
        szoveg = "0" + i.toString();
    }
    else{
        szoveg = i.toString();
    }
    let gomb = document.createElement("button");
    gomb.setAttribute("id", szoveg);
    gomb.setAttribute("class", "btn");
    gomb.innerHTML = szoveg
    oszlop.appendChild(gomb)
}

document.body.appendChild(oszlop);