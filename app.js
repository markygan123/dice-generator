const side = document.querySelector(".side");
const btn = document.querySelector("button");


function roll() {
    side.innerHTML = Math.floor(Math.random() * 6) + 1;
}

btn.addEventListener("click", function () {
    let rollTime = setInterval(roll, 80);
    setTimeout(() => {
        clearTimeout(rollTime);
    }, 2000);
});