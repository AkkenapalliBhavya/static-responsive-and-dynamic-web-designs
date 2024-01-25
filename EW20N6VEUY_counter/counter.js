let value = document.getElementById("p")

function increament() {
    let previousValue = value.textContent
    let updated = parseInt(previousValue) + 1
    value.textContent = updated
    if (updated > 1) {
        value.style.color = "green"
    } else if (updated < 0) {
        value.style.color = "black"
    }
}

function decreament() {
    let previousValue = value.textContent
    let updated = parseInt(previousValue) - 1
    value.textContent = updated
    if (updated > 1) {
        value.style.color = "green"
    } else if (updated < 0) {
        value.style.color = "red"
    }
}

function reset() {
    let previousValue = value.textContent
    let updated = 0
    value.textContent = updated
    value.style.color = "black"
}