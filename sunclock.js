function pollTime() {    
    let now = new Date();
    let timeString = `The current time is ${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`;
    let timeEl = document.querySelector(".timeEl");
    timeEl.textContent = timeString;
}

let clearInterval = setInterval(pollTime, 20);
