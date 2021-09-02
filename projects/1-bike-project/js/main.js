
const jumbo = document.querySelector(".jumbotron");
const donateBikeBtn = document.querySelector(".btn-primary.btn-lrg");
const volunteerBtn = document.querySelector(".btn-secondary.btn-lrg");

const blueBtn = document.getElementById('blueBtn');
const orangeBtn = document.getElementById('orangeBtn');
const greenBtn = document.getElementById('greenBtn');

// ---- Blue zone ---
function changeToBlue() {
    jumbo.style.backgroundColor = "#588fbd";
    donateBikeBtn.style.backgroundColor = "#ffa500";
    volunteerBtn.style.backgroundColor = "black";
    volunteerBtn.style.color = "white";
};

blueBtn.addEventListener("click", changeToBlue);

// --- Orange zone ---

function changeToOrange() {
    jumbo.style.backgroundColor = "#f0ad4e";
    donateBikeBtn.style.backgroundColor = "#5751fd";
    volunteerBtn.style.backgroundColor = "#31b0d5";
    volunteerBtn.style.color = "white";
};

orangeBtn.addEventListener("click", changeToOrange);


// ---- Greeen Zone ----

function changeToGreen() {
    jumbo.style.backgroundColor = "#87ca8a";
    donateBikeBtn.style.backgroundColor = "black";
    volunteerBtn.style.backgroundColor = "#8c9c08";
    volunteerBtn.style.color = "white";
};

greenBtn.addEventListener("click", changeToGreen);


// --- Part 2 ----

// function isValid(e) {
//     e.preventDefault();
//     const

// }