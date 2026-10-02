let hour = 0;
let min = 0;
let sec = 0;
let timer;
let running = false;

function updateDisplay() {
    let h = hour < 10 ? "0" + hour : hour;
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;
    document.querySelector("#display").innerHTML = h + ":" + m + ":" + s;
}

function startTime() {
    // Timer sirf tabhi shuru ho jab running 'false' ho
    if (running == false) {
        running = true;
        
        timer = setInterval(() => {
            sec++; // Pehle second badhayein
            
            if (sec == 60) {
                min++;
                sec = 0;
            }
            if (min == 60) {
                hour++;
                min = 0;
            }
            
            updateDisplay(); // Phir display update karein
        }, 1000);
    }
}

function stopTime() {
    running = false;
    clearInterval(timer);
}

function resetTime() {
    running = false;       // Reset karne par background process false karein
    clearInterval(timer);  // Chalta hua timer clear karein
    hour = 0;
    min = 0;
    sec = 0;
    updateDisplay();
}