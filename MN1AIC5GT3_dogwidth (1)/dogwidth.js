let original = 200
document.getElementById("image").style.width = "200px"
Warning = document.getElementById("Mes")

function minus() {
    if (original <= 100) {
        document.getElementById("Mes").textContent = "to small increase the size."
        document.getElementById("Mes").style.color = "red"
        document.getElementById("Mes").style.fontSize = "30px"
    } else {
        original = original - 5
        Warning.textContent = ""
        document.getElementById("image").style.width = original + "px";
        document.getElementById("w").textContent = original
    }
}

function plus() {
    if (original >= 300) {
        Warning.textContent = "Too big,decrease the size.";
        Warning.style.color = "Red";
        Warning.style.width = "24px";
    } else {
        original = original + 5
        Warning.textContent = ""
        document.getElementById("image").style.width = original + "px"
        document.getElementById("w").textContent = original
    }
}