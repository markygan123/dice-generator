const side = document.querySelector(".side");
const btn = document.querySelector("button");
let dice = document.createElement("img");


function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
    // if (diceRoll === 2) {
    //     dice.src = "images/2.gif";
    //     side.appendChild(dice);
    // } else if (diceRoll === 3) {
    //     dice.src = "images/3.gif";
    //     side.appendChild(dice);
    // } else if (diceRoll === 4) {
    //     dice.src = "images/4.gif";
    //     side.appendChild(dice);
    // } else if (diceRoll === 5) {
    //     dice.src = "images/5.gif";
    //     side.appendChild(dice);
    // } else if (diceRoll === 6) {
    //     dice.src = "images/6.gif";
    //     side.appendChild(dice);
    // } else {
    //     dice.src = "images/1.gif";
    //     side.appendChild(dice);
    // }
}

function showDice() {
    let randomNumber = getRandomNumber();
    dice.src = `images/${randomNumber}.gif`;
    side.appendChild(dice);
}

btn.addEventListener("click", function () {
    side.classList.remove("result", "result-one");
    let rollTime = setInterval(showDice, 100);
    setTimeout(() => {
        clearTimeout(rollTime);
        if (dice.src.match("1.gif")) {
            dice.src = "images/1-result.jpg";
            side.classList.toggle("result-one");
        } else {
            side.classList.toggle("result");
        }
    }, 1500);
});

