function Calc() {
    let BA1 = BA.value
    let PT1 = PT.value
    let Bill = parseInt(BA1)
    let Perc = parseInt(PT1)
    if (BA1 = " ") {
        document.getElementById("p1").textContent = "enter a valid input"
        document.getElementById("p1").style.color = "red"
    } else if (PT1 = " ") {
        document.getElementById("p1").textContent = "enter a valid input"
        document.getElementById("p1").style.color = "red"
    }
    let tip = (Perc / 100) * Bill
    TA.value = tip
    let total = tip + Bill
    T.value = total
}