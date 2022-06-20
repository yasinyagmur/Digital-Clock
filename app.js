const hour =document.querySelector('.hour');
const date = document.querySelector('.date');

function digitalClock() {
    let dateTime = new Date();
    // console.log(dateTime);
    let clock = dateTime.toLocaleTimeString('en-US');
    // console.log(clock);
    hour.innerText = clock;
}
setInterval(digitalClock, 1000);

function getDate(){
    let showdate = new Date ();
    let showdateNow = showdate.toLocaleDateString();
    date.innerText = showdateNow;
}

getDate()