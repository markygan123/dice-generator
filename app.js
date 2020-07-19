const side = document.querySelector(".side");
const btn = document.querySelector("button");
let dice = document.createElement("img");
let sound = new Audio("audio/rollsound.mp3");


let getRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
}

let showDice = () =>  {
    let randomNumber = getRandomNumber();
    dice.src = `images/${randomNumber}.gif`;
    side.appendChild(dice);
}

let diceRollSound = () => {
    sound.play();
}

let rollDice = btn.addEventListener("click", () => {
    let rollTime = setInterval(showDice, 100);
    sound.currentTime = 0;

    side.classList.remove("result", "result-one");
    diceRollSound();
    setTimeout(() => {
        clearTimeout(rollTime);
        if (dice.src.match("1.gif")) {
            dice.src = "images/1-result.jpg";
            side.classList.toggle("result-one");
        } else {
            side.classList.toggle("result");
        }
    }, 850);
});

rollDice();
