const side = document.querySelector(".side");
const btn = document.querySelector("button");
let dice = document.createElement("img");


function roll() {
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    if (diceRoll === 2) {
        dice.src = "images/2.gif";
        side.appendChild(dice);
    } else if (diceRoll === 3) {
        dice.src = "images/3.gif";
        side.appendChild(dice);
    } else if (diceRoll === 4) {
        dice.src = "images/4.gif";
        side.appendChild(dice);
    } else if (diceRoll === 5) {
        dice.src = "images/5.gif";
        side.appendChild(dice);
    } else if (diceRoll === 6) {
        dice.src = "images/6.gif";
        side.appendChild(dice);
    } else {
        dice.src = "images/1.gif";
        side.appendChild(dice);
    }
}

btn.addEventListener("click", function () {
    let rollTime = setInterval(roll, 100);
    setTimeout(() => {
        clearTimeout(rollTime);
        side.classList.toggle("result");
    }, 1500);
    side.classList.remove("result");
});

