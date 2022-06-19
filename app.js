const hour =document.querySelector('.hour');

function digitalClock() {
    let dateTime = new Date();
    // console.log(dateTime);
    let clock = dateTime.toLocaleTimeString('en-US');
    // console.log(clock);
    hour.innerText = clock;
}
setInterval(digitalClock, 1000);
