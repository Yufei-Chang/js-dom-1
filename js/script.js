const lampadina = document.getElementsById('lampadinaSpenta');
const btn = document.getElementById('btn');

const imgLamp = document.getElementById('lampadinaSpenta');
imgLamp.src = "./img/white_lamp.png";
imgLamp.alt = "foto della lampadina spenta";

const imgLamp = document.getElementById('lampadinaAccesa');
imgLamp.src = "./img/yellow_lamp.png";

btn.addEventListener("click", function() {
if (lampadina.classList.contains("lampadinaAccesa")) {
imgLamp.classList.remove("lampadinaAccesa");
} else {
    imgLamp.classList.add("lampadinaAccesa");
}
})