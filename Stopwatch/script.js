let hour = document.getElementById("hr");
let minute = document.getElementById("min");
let second = document.getElementById("sec");

let hr = 0;        //Initially the hr,min and sec will be 0
let min = 0;
let sec = 0;
let timer = true; //for stopping a watch

function start() {       //for starting the stopwatch
  timer = true;
  stopwatch();
}
function stop() {        //for stopping the stopwatch
  timer = false;
}
function reset() {     //For reset the stopwatch , the values of hr,min,and sec will become 0
  timer = false;
  hr = 0;
  min = 0;
  sec = 0;
  second.innerHTML = "0" + sec; 
  minute.innerHTML = "0" + min;
  hour.innerHTML = "0" + hr;
}
function stopwatch() {
  if (timer == true) {
    sec = sec + 1;
    if (sec == 60) {   //when 60 second is completed it converts into 1 minute then second=0
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {   //when 60 minute is completed it converts into 1 hour then minute=0 & second=0
      hr = hr + 1;
      min = 0;
      sec = 0;
    }
    let hrString = hr;
    let minString = min;
    let secString = sec;
    if (hrString < 10) {      //here if the value of hr,min,sec is less than 10 then the timer will be starting from 01...09.
      hrString = "0" + hrString;
    }
    if (minString < 10) {
      minString = "0" + minString;
    }
    if (secString < 10) {
      secString = "0" + secString;
    }

    second.innerHTML = secString;
    minute.innerHTML = minString;
    hour.innerHTML = hrString;

    setTimeout("stopwatch()", 1000); //for milisecond calculation: 1second = 1000 milisecond
  }
}
