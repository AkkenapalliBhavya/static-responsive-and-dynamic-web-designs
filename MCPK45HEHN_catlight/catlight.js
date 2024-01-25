function switchOf() {
    document.getElementById("bulb").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("cat").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("action").textContent = "Switched Off";
    document.getElementById("off").style.backgroundColor = "#cbd2d9";
    document.getElementById("on").style.backgroundColor = "#22c55e";

}

function switchOn() {
    document.getElementById("bulb").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("cat").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("action").textContent = "Switched On";
    document.getElementById("on").style.backgroundColor = "#cbd2d9";
    document.getElementById("off").style.backgroundColor = "#e12d39";
}