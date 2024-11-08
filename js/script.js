const lampElem = document.getElementById('lamp-img');
console.log(lampElem);
const btnElem = document.getElementById('btn');
console.log(btnElem);


btnElem.addEventListener("click", function() {
    if (lampElem.src.includes("white_lamp")) {
    lampElem.src = "./img/yellow_lamp.png";
    btnElem.innerHTML = "Spegni";
    } else {
        lampElem.src = "./img/white_lamp.png"
        btnElem.innerHTML = "Accendi";
    }
});