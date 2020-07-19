const side = document.querySelector(".side");
const btn = document.querySelector("button");
let dice = document.createElement("img");


let getRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
}

let showDice = () =>  {
    let randomNumber = getRandomNumber();
    dice.src = `images/${randomNumber}.gif`;
    side.appendChild(dice);
}

let rollDice = btn.addEventListener("click", () => {
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

rollDice();
