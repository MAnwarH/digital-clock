function showTime() {
  //getting hours, minute, seconds
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();

  let seconds = date.getSeconds();

  //get elements

  let h = document.querySelector("span.hour");
  let m = document.querySelector("span.minutes");
  let s = document.querySelector("span.seconds");
  let amPm = document.querySelector("span.pm");

  //conditions

  if (hour > 12) {
    hour = hour - 12;
    amPm = amPm.innerHTML = "PM";
  }
  if (hour === 0) {
    hour = 12;
  }
  if (hour > 12) {
  }

  if (hour < 12) {
    hour = "0" + hour;
  }
  if (minute < 12) {
    minute = "0" + minute;
  }
  if (seconds < 12) {
    seconds = "0" + seconds;
  }

  //pass data to elements
  h.innerHTML = hour;
  m.innerHTML = minute;
  s.innerHTML = seconds;

  setInterval(() => {
    showTime();
  }, 1000);
}

showTime();
