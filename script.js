var timer = 60;  
var hitting;
var scoreval = 0;

function increaseScore() {
    scoreval += 10;
    document.querySelector("#score").textContent = scoreval;
}

function makeBubble() {
    var save = "";

for (i = 1; i<= 160; i++) {
    let random = Math.floor(Math.random()*10);
    save += `<div id="circle">${random}</div>`;
}

document.querySelector(".center").innerHTML = save;
}

function createHit() { 
    hitting = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = hitting;
}

function runTimer() {
    let stop = setInterval(() => {
        if (timer > 0) { 
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(stop);
            document.querySelector(".center").textContent = `Game Over`;
        }
    }, 1000);
}

document.querySelector(".center")
.addEventListener("click", function (dets) {
    var getNum = Number(dets.target.textContent);
    if(getNum === hitting) { 
        increaseScore();
        makeBubble();
        createHit();
    }
})

createHit();
runTimer();
makeBubble();