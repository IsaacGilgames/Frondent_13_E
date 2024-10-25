var bool = true;
var randomB = true;
function Start() {
    document.body.innerHTML = `<center style="font-size: xx-large; color:white;"><a onclick="Start()" style="cursor:pointer;">Számológép</a> - <a onclick='TicTacToe()' style="cursor:pointer;">Tic-Tac-Toe</a></center>`
    if (bool) {
        var MainDiv = document.createElement("div")
        var RowDiv = document.createElement("div")
        RowDiv.classList.add("RowDiv");
        var ResultDiv = document.createElement("div")
        ResultDiv.classList.add("ResultDiv");
        ResultDiv.setAttribute("id", "Result1")
        RowDiv.appendChild(ResultDiv)
        MainDiv.appendChild(RowDiv)

        var RowDiv = document.createElement("div")
        RowDiv.classList.add("RowDiv");
        var ResultDiv2 = document.createElement("input")
        ResultDiv2.type = "text"
        ResultDiv2.classList.add("ResultDiv");
        ResultDiv2.setAttribute("id", "Result2")
        ResultDiv2.setAttribute("readonly", true)
        ResultDiv2.style.width = 100 + "%"
        RowDiv.appendChild(ResultDiv2)
        MainDiv.appendChild(RowDiv)
        MainDiv.classList.add("MainDiv");

        //generálás
        for (var i = 0; i < 7; i++) {
            if (i == 0) {
                var RowDiv = document.createElement("div")
                RowDiv.classList.add("RowDiv");
                for (var j = 0; j < 6; j++) {
                    var ColDiv = document.createElement("div");
                    ColDiv.classList.add("ColDiv");
                    if (j == 0) {
                        var Button = document.createElement("button")
                        Button.innerHTML = "^("
                        Button.setAttribute("id", "vhat") //Tetszőleges hatványozás
                        ColDiv.appendChild(Button)
                    }

                    if (j == 1) {
                        var Button = document.createElement("button")
                        Button.innerText = "|x|"
                        Button.setAttribute("id", "abs") //ABS
                        ColDiv.appendChild(Button)
                    }

                    if (j == 2) {
                        var Button = document.createElement("button")
                        Button.innerText = "√"
                        Button.setAttribute("id", "gyok") //Gyök
                        ColDiv.appendChild(Button)
                    }

                    if (j == 3) {
                        var Button = document.createElement("button")
                        Button.innerText = "π"
                        Button.setAttribute("id", "pi") //Pi
                        ColDiv.appendChild(Button)
                    }

                    if (j == 4) {
                        var Button = document.createElement("button")
                        Button.innerHTML = "X<sup>2</sup>"
                        Button.setAttribute("id", "pow") //pow
                        ColDiv.appendChild(Button)
                    }

                    if (j == 5) {
                        var Button = document.createElement("button")
                        Button.innerHTML = "X<sup>3</sup>"
                        Button.setAttribute("id", "X3") //cos()
                        ColDiv.appendChild(Button)
                    }
                    RowDiv.appendChild(ColDiv)
                }
                MainDiv.appendChild(RowDiv)
            }

            if (i == 1) {
                var RowDiv = document.createElement("div")
                RowDiv.classList.add("RowDiv");
                for (var j = 0; j < 6; j++) {
                    var ColDiv = document.createElement("div");
                    ColDiv.classList.add("ColDiv");
                    if (j == 0) {
                        var Button = document.createElement("button")
                        Button.innerHTML = "("
                        Button.setAttribute("id", "(") //záró
                        ColDiv.appendChild(Button)
                    }

                    if (j == 1) {
                        var Button = document.createElement("button")
                        Button.innerText = ")"
                        Button.setAttribute("id", ")") //záró
                        ColDiv.appendChild(Button)
                    }

                    if (j == 2) {
                        var Button = document.createElement("button")
                        Button.innerText = "log("
                        Button.setAttribute("id", "log(") //log
                        ColDiv.appendChild(Button)
                    }

                    if (j == 3) {
                        var Button = document.createElement("button")
                        Button.innerText = "e"
                        Button.setAttribute("id", "e") //sin()
                        ColDiv.appendChild(Button)
                    }

                    if (j == 4) {
                        var Button = document.createElement("button")
                        Button.innerText = "n!"
                        Button.setAttribute("id", "n!") //cos()
                        ColDiv.appendChild(Button)
                    }

                    if (j == 5) {
                        var Button = document.createElement("button")
                        Button.innerHTML = "X<sup>-1</sup>"
                        Button.setAttribute("id", "x-1") //tang()
                        ColDiv.appendChild(Button)
                    }
                    RowDiv.appendChild(ColDiv)
                }
                MainDiv.appendChild(RowDiv)
            }


            if (i == 2) {
                var RowDiv = document.createElement("div")
                RowDiv.classList.add("RowDiv");
                for (var j = 0; j < 4; j++) {
                    var ColDiv = document.createElement("div");
                    ColDiv.classList.add("ColDiv")
                    if (j == 0) {
                        var Button = document.createElement("button")
                        Button.innerText = "7"
                        Button.setAttribute("id", "het")
                        ColDiv.appendChild(Button)
                    }

                    if (j == 1) {
                        var Button = document.createElement("button")
                        Button.innerText = "8"
                        Button.setAttribute("id", "nyoc")
                        ColDiv.appendChild(Button)
                    }

                    if (j == 2) {
                        var Button = document.createElement("button")
                        Button.innerText = "9"
                        Button.setAttribute("id", "kilenc")
                        ColDiv.appendChild(Button)
                    }
                    if (j == 3) {
                        var Button = document.createElement("button")
                        Button.innerText = "+"
                        Button.setAttribute("id", "plus")
                        ColDiv.appendChild(Button)
                    }
                    RowDiv.appendChild(ColDiv)
                }
                MainDiv.appendChild(RowDiv)
            }

            if (i == 3) {
                var RowDiv = document.createElement("div")
                RowDiv.classList.add("RowDiv");
                for (var j = 0; j < 4; j++) {
                    var ColDiv = document.createElement("div");
                    ColDiv.classList.add("ColDiv")
                    if (j == 0) {
                        var Button = document.createElement("button")
                        Button.innerText = "4"
                        Button.setAttribute("id", "negy")
                        ColDiv.appendChild(Button)
                    }

                    if (j == 1) {
                        var Button = document.createElement("button")
                        Button.innerText = "5"
                        Button.setAttribute("id", "ot")
                        ColDiv.appendChild(Button)
                    }

                    if (j == 2) {
                        var Button = document.createElement("button")
                        Button.innerText = "6"
                        Button.setAttribute("id", "hat")
                        ColDiv.appendChild(Button)
                    }
                    if (j == 3) {
                        var Button = document.createElement("button")
                        Button.innerText = "-"
                        Button.setAttribute("id", "minus")
                        ColDiv.appendChild(Button)
                    }
                    RowDiv.appendChild(ColDiv)
                }
                MainDiv.appendChild(RowDiv)
            }

            if (i == 4) {
                var RowDiv = document.createElement("div")
                RowDiv.classList.add("RowDiv");
                for (var j = 0; j < 4; j++) {
                    var ColDiv = document.createElement("div");
                    ColDiv.classList.add("ColDiv")
                    if (j == 0) {
                        var Button = document.createElement("button")
                        Button.innerText = "1"
                        Button.setAttribute("id", "egy")
                        ColDiv.appendChild(Button)
                    }

                    if (j == 1) {
                        var Button = document.createElement("button")
                        Button.innerText = "2"
                        Button.setAttribute("id", "ketto")
                        ColDiv.appendChild(Button)
                    }

                    if (j == 2) {
                        var Button = document.createElement("button")
                        Button.innerText = "3"
                        Button.setAttribute("id", "harom")
                        ColDiv.appendChild(Button)
                    }
                    if (j == 3) {
                        var Button = document.createElement("button")
                        Button.innerText = "*"
                        Button.setAttribute("id", "szor")
                        ColDiv.appendChild(Button)
                    }
                    RowDiv.appendChild(ColDiv)
                }
                MainDiv.appendChild(RowDiv)
            }

            if (i == 5) {
                var RowDiv = document.createElement("div")
                RowDiv.classList.add("RowDiv");
                for (var j = 0; j < 4; j++) {
                    var ColDiv = document.createElement("div");
                    ColDiv.classList.add("ColDiv")
                    if (j == 0) {
                        var Button = document.createElement("button")
                        Button.innerText = "."
                        Button.setAttribute("id", "pont")
                        ColDiv.appendChild(Button)
                    }

                    if (j == 1) {
                        var Button = document.createElement("button")
                        Button.innerText = "0"
                        Button.setAttribute("id", "nulla")
                        ColDiv.appendChild(Button)
                    }

                    if (j == 2) {
                        var Button = document.createElement("button")
                        Button.innerText = "="
                        Button.setAttribute("id", "egyenlo")
                        ColDiv.appendChild(Button)
                    }
                    if (j == 3) {
                        var Button = document.createElement("button")
                        Button.innerText = "/"
                        Button.setAttribute("id", "osztas")
                        ColDiv.appendChild(Button)
                    }
                    RowDiv.appendChild(ColDiv)
                }
                MainDiv.appendChild(RowDiv)
            }

            if (i == 6) {
                var RowDiv = document.createElement("div")
                RowDiv.classList.add("RowDiv");
                for (var j = 0; j < 3; j++) {
                    var ColDiv = document.createElement("div");
                    ColDiv.classList.add("ColDiv");
                    ColDiv.classList.add("ColDiv")
                    if (j == 0) {
                        var Button = document.createElement("button")
                        Button.innerText = "C"
                        Button.setAttribute("id", "C")
                        ColDiv.appendChild(Button)
                    }

                    if (j == 1) {
                        var Button = document.createElement("button")
                        Button.innerText = "⌫"
                        Button.setAttribute("id", "back")
                        ColDiv.appendChild(Button)
                    }

                    if (j == 2) {
                        var Button = document.createElement("button")
                        Button.innerText = "ans"
                        Button.setAttribute("id", "ans")
                        ColDiv.appendChild(Button)
                    }
                    ColDiv.style.width = 33 + "%"
                    RowDiv.appendChild(ColDiv)
                }
                MainDiv.appendChild(RowDiv)
            }
        }
        document.body.appendChild(MainDiv)

        //--------Működése-------------
        const mezo = document.getElementById('Result2')
        const buttons = document.getElementsByTagName('button')
        for (const b of buttons) {
            b.addEventListener('click', () => {
                if (b.innerText === '=') {
                    try {
                        var result = math.evaluate(mezo.value)
                        mezo.value = result
                    }
                    catch (error) {
                        var result = "Error"
                        mezo.value = "Error"
                    }
                    document.getElementById('Result1').innerText = result
                    localStorage.setItem("mentve", document.getElementById('Result1').innerText)

                    mezo.value = ""
                }
                else if (b.innerText === 'C') {
                    mezo.value = ""
                }
                else if (b.innerText === '⌫') {
                    mezo.value = mezo.value.slice(0, -1)
                }
                else if (b.innerText === 'ans') {
                    mezo.value += document.getElementById('Result1').innerText
                }
                //---------műveletek fent
                else if (b.innerText === "^(") {
                    mezo.value += "^("
                }
                else if (b.innerText === '|x|') {
                    mezo.value += "abs("
                }
                else if (b.innerText === '√') {
                    mezo.value += "sqrt("
                }
                else if (b.innerText === 'π') {
                    mezo.value += "pi"
                }
                else if (b.innerText === 'X2') {
                    mezo.value += "^(2)"
                }
                else if (b.innerText === 'X3') {
                    mezo.value += "^(3)"
                }
                //----------műveletek fent
                //----------műveletek lent
                else if (b.innerText === "(") {
                    mezo.value += "("
                }
                else if (b.innerText === ")") {
                    mezo.value += ")"
                }
                else if (b.innerText === "log(") {
                    mezo.value += "log("
                }
                else if (b.innerText === "e") {
                    mezo.value += "e"
                }
                else if (b.innerText === "n!") {
                    mezo.value += "!"
                }
                else if (b.innerText === "X-1") {
                    mezo.value += "^(-1)"
                }
                //----------műveletek lent
                else {
                    if (mezo.value == "Error") mezo.value = ""
                    if (mezo.value == "Infinity") mezo.value = ""
                    mezo.value += b.innerText
                }
            })
        }

        if (localStorage.getItem("mentve") != null) {

            eredmeny = Number(window.localStorage.getItem("mentve"));
            document.getElementById('Result1').innerText = eredmeny;
        }
        else document.getElementById('Result1').innerText = "0"

        bool = false;
    }
}
function TicTacToe() {
    



    document.body.innerHTML = ""
    document.body.innerHTML = `<center style="font-size: xx-large; color:white;"><a onclick="Start()" style="cursor:pointer;">Számológép</a> - <a onclick='TicTacToe()' style="cursor:pointer;">Tic-Tac-Toe</a></center>`
    bool = true

    var MainDiv = document.createElement("div")
    MainDiv.setAttribute("class", "TTMain")
    //generálás
    for (var i = 0; i < 4; i++) {
        var RowDiv = document.createElement("div")
        RowDiv.setAttribute("class", "TTRow")
        for (var j = 0; j < 3; j++) {
            var ColDiv = document.createElement("div")
            ColDiv.setAttribute("class", "TTCol")

            const button = document.createElement("button")
            if (i != 3) {
                button.setAttribute("class", "nyomogomb")
                button.setAttribute("id", `${i}${j}`)
                //----------------------------------------------------------------
                if (i == 0 && j == 0) button.name = "8"
                if (i == 0 && j == 1) button.name = "3"
                if (i == 0 && j == 2) button.name = "4"
                if (i == 1 && j == 0) button.name = "1"
                if (i == 1 && j == 1) button.name = "5"
                if (i == 1 && j == 2) button.name = "9"
                if (i == 2 && j == 0) button.name = "6"
                if (i == 2 && j == 1) button.name = "7"
                if (i == 2 && j == 2) button.name = "2"
                //----------------------------------------------------------------
            }
            if (i == 3) {
                RowDiv.style.border = "0px"
                ColDiv.style.border = "0px"
            }
            if (i == 3 && j == 2) {
                button.setAttribute("id", "ujrakezd")
            }
            if (i == 3 && j == 1) {
                ColDiv.setAttribute("id", "nyero")
                ColDiv.innerHTML = "Nyomj egy 🔳-re"
            }
            if (i == 3 && j == 0) {
                ColDiv.setAttribute("id", "kovi")
                ColDiv.innerHTML = "X Kezd"
            }
            if (i != 3 || j == 2) {
                ColDiv.appendChild(button)
            }

            RowDiv.appendChild(ColDiv)
        }
        MainDiv.appendChild(RowDiv)
    }
    document.body.appendChild(MainDiv)

    //---------mode
    const modeDiv = document.createElement("div")
    modeDiv.setAttribute("class", "ModeDiv")
    for (let i = 0; i < 2; i++) {
        const button = document.createElement("button")
        button.setAttribute("class", "Mode")
        if (i == 0) {
            button.innerText = "Man vs Man"
            button.setAttribute("id", "normal")
        }
        if (i == 1) {
            button.innerText = "Man vs Machine"
            button.setAttribute("id", "hard")
        }
        modeDiv.appendChild(button)
    }
    document.body.appendChild(modeDiv)

    var hardBtn = document.getElementById("hard")
    var normalBtn = document.getElementById("normal")
    
    normalBtn.disabled = true
    hardBtn.disabled = false
    normalBtn.style.cursor = "not-allowed"
    hardBtn.style.cursor = "pointer"
    hardBtn.style.backgroundColor="red"
    normalBtn.style.backgroundColor="green"

    var normal = true
    var hard = false

    var modeBtns = document.querySelectorAll(".Mode")
    modeBtns.forEach(gomb => gomb.onclick = function () {
        console.log(`normal ${normal} hard ${hard}`)
        if (gomb.id == "hard") {
            alert("LEHETETLEN NYERNED MUHAHAHAHAHHA")
            hard = true
            normal = false
            hardBtn.disabled = true
            normalBtn.disabled = false
            hardBtn.style.cursor = "not-allowed"
            normalBtn.style.cursor = "pointer"
            hardBtn.style.backgroundColor="green"
            normalBtn.style.backgroundColor="red"
            reset()
        }
        if (gomb.id == "normal") {
            normal = true
            hard = false
            normalBtn.disabled = true
            hardBtn.disabled = false
            normalBtn.style.cursor = "not-allowed"
            hardBtn.style.cursor = "pointer"
            hardBtn.style.backgroundColor="red"
            normalBtn.style.backgroundColor="green"
            reset()
        }
    })
    //--------mode
    var buttons = document.querySelectorAll(".nyomogomb")

    var kijon = true;

    var tomb = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    function CheckWin() {
        for (var i = 0; i < 3; i++) {
            if (tomb[i][0] == tomb[i][1] && tomb[i][1] == tomb[i][2] && tomb[i][0] != "") {
                return true;
            }
            if (tomb[0][i] == tomb[1][i] && tomb[1][i] == tomb[2][i] && tomb[0][i] != "") {
                return true;
            }
        }
        if (tomb[0][0] == tomb[1][1] && tomb[1][1] == tomb[2][2] && tomb[0][0] != "") {
            return true;
        }
        if (tomb[0][2] == tomb[1][1] && tomb[1][1] == tomb[2][0] && tomb[0][2] != "") {
            return true;
        }
        
    }

    function CheckDraw() {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (tomb[i][j] == "")
                    return false;
            }
        }
        return true;
    }

    var restart = document.querySelector("#ujrakezd")
    var winnerdiv = document.querySelector("#nyero")
    var nextmove = document.querySelector("#kovi")
    restart.innerText = "Újrakezd"
    var lepesek=0
    buttons.forEach(gomb => gomb.onclick = function () {
        if (gomb.innerHTML == "") {
            if (kijon) {
                gomb.innerHTML = "X"
                gomb.style.color = "red"
                gomb.style.borderColor = "red"
                gomb.style.borderWidth = "10px"
                nextmove.innerText = "O Lép"
                tomb[gomb.id.toString().substring(0, 1)][gomb.id.toString().substring(1, 2)] = "X"
                kijon = false
                lepesek++
                
                if(!CheckWin()){
                    if(hard){
                        if(lepesek==1){
                            if(tomb[1][1]=='X'){
                                document.getElementsByName(`${(Math.floor(Math.random() * 4) + 1) * 2}`)[0].click()
                            }
                            else if(edge()>0){ 
                                document.getElementsByName(edge())[0].click()
                            }
                            else document.getElementsByName("5")[0].click()
                        }
                        if(lepesek==2){
                            if(tomb[1][1]=='') document.getElementsByName("5")[0].click()
                            else if(tomb[1][1]=='O'){
                                if(tudenyerni("X")>0){
                                    document.getElementsByName(`${tudenyerni("X")}`)[0].click()
                                }
                                else{
                                    document.getElementsByName(`${randomures2()==0 ? randomures() : randomures2()}`)[0].click()
                                }
                            }
                            else{
                                if(tudenyerni("X")>0) document.getElementsByName(`${tudenyerni("X")}`)[0].click()
                                else document.getElementsByName(`${randomures()}`)[0].click()
                                
                            }
                        }
                        try {
                            if(lepesek>=3){
                                if(tudenyerni("O")>0){
                                    document.getElementsByName(`${tudenyerni("O")}`)[0].click()
                                    console.log("O")
                                }
                                else if(tudenyerni("X")>0){
                                    document.getElementsByName(`${tudenyerni("X")}`)[0].click()
                                    console.log("X")
                                }
                                else{
                                    document.getElementsByName(`${randomures()}`)[0].click()
                                }
                            }
                        } catch (error) {
                            
                        }
                }
            }  
                
            }
            else {
                gomb.innerHTML = "O"
                gomb.style.color = "green"
                gomb.style.borderColor = "green"
                gomb.style.borderWidth = "10px"
                nextmove.innerText = "X Lép"
                tomb[gomb.id.toString().substring(0, 1)][gomb.id.toString().substring(1, 2)] = "O"
                kijon = true
            }
            if (CheckWin()) {
                winnerdiv.innerText = `${kijon ? "O" : "X" } Nyert!`
                document.querySelectorAll(".nyomogomb").forEach(gomb => gomb.disabled = true)
                nextmove.innerText = ""
            }
            else if (CheckDraw()) {
                winnerdiv.innerText = "Döntetlen!"
                document.querySelectorAll(".nyomogomb").forEach(gomb => gomb.disabled = true)
                nextmove.innerText = ""
            }
        }
        console.log(tomb)
    })

    restart.onclick = function () {
        reset()
    }

    reset = function () {
        console.clear()
        var buttons = document.querySelectorAll(".nyomogomb")
        buttons.forEach(gomb => gomb.disabled = false)
        buttons.forEach(gomb => gomb.innerHTML = "")
        buttons.forEach(gomb => gomb.style.borderColor = "transparent")
        tomb = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ]
        kijon = true
        lepesek=0
        nextmove.innerText = "X Kezd"
        winnerdiv.innerText = "Kattints valahova"
    }

    function tudenyerni(ki){
        var szamok=[]
        var buttons = document.querySelectorAll(".nyomogomb")
        for (let db=0; db<buttons.length; db++){
            if(buttons[db].innerText==ki){
                szamok.push(parseInt(buttons[db].name))
            }
        }
        for(i=0; i<buttons.length; i++){
            for(var elem of szamok){
                for(var item of szamok){
                    if (elem!=item && (elem + item) < 15 && buttons[i].name == 15-(elem + item)){
                        if (buttons[i].innerText == "") {
                            return 15-(elem+item)
                        }
                    }
                }
            }
        }
        return 0
    }

    function randomures(){
        var joe=false
        var db=0
        var szam=(Math.floor(Math.random() * 4) + 1) * 2
        var buttons = document.querySelectorAll(".nyomogomb")        
        buttons.forEach(element => {
            if(element.innerText=="" && (element.id=="00" || element.id=="02" || element.id=="20" || element.id=="22")){
                joe=true
                szam=(Math.floor(Math.random() * 4) + 1) * 2
            }

            if(joe){
                while(document.getElementsByName(szam)[0].innerText!="" && joe){
                    szam=(Math.floor(Math.random() * 4) + 1) * 2
                    db++
                    console.log("unlucky"+randomB)
                    if(db>1000){
                        joe=false
                    }
                } 
            }
            if(element.innerText=="" && !joe){
                console.log("nocorner"+randomB)
                szam=element.name
            }   
        });
        
        if(document.getElementById("02").innerText=="X" && document.getElementById("10").innerText=="X" && document.getElementById("21").innerText=="X" && randomB){
            var random =Math.floor(Math.random() * 3) + 1;
            switch(random) {
                case 1:
                    randomB = false
                    return 8
                  break;
                case 2:
                    randomB = false
                    return 3
                  break;
                case 3:
                    randomB = false
                    return 6
                    break;
              }
        }
        return szam
    }

    function randomures2(){
        var szamok=[0]
        var buttons = document.querySelectorAll(".nyomogomb")       
        if(buttons[1].innerText=="" && buttons[7].innerText==""){
            szamok.unshift(parseInt(buttons[1].name))
            szamok.unshift(parseInt(buttons[7].name))
        }
        if(buttons[3].innerText=="" && buttons[5].innerText==""){
            szamok.unshift(parseInt(buttons[3].name))
            szamok.unshift(parseInt(buttons[5].name))
        }

        return szamok[0]
    }

    function edge(){
        szam=0
        var buttons = document.querySelectorAll(".nyomogomb")        
        if(buttons[1].innerText!="" || buttons[3].innerText!=""){
            szam= 8
        }
        if(buttons[5].innerText!="" && buttons[7].innerText!=""){
            szam= 2
        }
        return szam
    }
}