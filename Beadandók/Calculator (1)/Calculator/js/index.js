var output = "";
var basic = "0123456789+-*/()."

var buttons = document.querySelectorAll('button')
var screen = document.getElementsByClassName('screen')

document.cookie = "last_result="

buttons.forEach((btn) => {
    try {
        btn.addEventListener('click', () => {
            if (basic.includes(btn.innerText)) {
                output += btn.innerText
                screen[0].innerText = output
            }
            if (btn.innerText == "sin") {
                output += "Math.sin("
                screen[0].innerText = output
            }
            if (btn.innerText == "tan") {
                output += "Math.tan("
                screen[0].innerText = output
            }
            if (btn.innerText == "cos") {
                output += "Math.cos("
                screen[0].innerText = output
            }
            if (btn.innerText == "√") {
                output += "Math.sqrt("
                screen[0].innerText = output
            }
            if (btn.innerText == "π") {
                output += "Math.PI("
                screen[0].innerText = output
            }
            if (btn.innerText == "CE") {
                output = ""
                screen[0].innerText = ""
            }
            if (btn.innerText == "=") {
                console.log(eval(output))
                screen[0].innerText = eval(output)
                document.cookie = `last_result=${eval(output)}`
            }
            if (btn.innerHTML == "↶") {
                console.log("Hi")
                screen[0].innerText = document.cookie.split('=')[1]
                console.log("By")
            }
        })
    }
    catch {
        alert("Hibásan megadott egyenlet")
    }

})

