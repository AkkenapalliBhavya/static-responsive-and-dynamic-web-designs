let num1 = document.getElementById("firstNumber").textContent = parseInt(Math.ceil(Math.random() * 100))
let num2 = document.getElementById("secondNumber").textContent = parseInt(Math.ceil(Math.random() * 100))
let total = num1 + num2
console.log(total)
let inputE = document.getElementById("userinput")
let result = document.getElementById("gameResult")
let buttonR = document.getElementById("restart")

function check() {
    if (total === parseInt(inputE.value)) {
        result.textContent = "congatulations you got it right";
        result.classList.add("message")
    } else {
        result.textContent = "Please Try Again"
        result.classList.add("ErrorMessage")
    }
}
buttonR.onclick = function() {
    result.textContent = ""
    inputE.value = ""
}