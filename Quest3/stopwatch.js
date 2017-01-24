function startTimerdown(duration, display) {
  var timer = duration,
    minutes, seconds;
  setInterval(function() {
    days = parseInt(3)
    hours = parseInt(1)
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);

    days = days < 10 ? "0" + days : days;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = days + " days" + " | " + hours + " hours" + " | " + minutes + " minutes" + " | " + seconds + " seconds";

    if (--timer < 0) {
      timer = 0;
      document.getElementById("start2").disabled = true;
    }
  }, 1000);
}



function startTimerup(duration, display) {
  var timer = duration,
    minutes, seconds;
  setInterval(function() {
    days = parseInt(3)
    hours = parseInt(1)
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);


    days = days < 10 ? "0" + days : days;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = days + " days" + " | " + hours + " hours" + " | " + minutes + " minutes" + " | " + seconds + " seconds";

    var target = document.getElementById("countTarget").value;
    if (++timer > 0) {
      timer = duration++;
      if (timer == target * 60) {
        duration = target * 60;
        document.getElementById("start1").disabled = true;
      }
    }
  }, 1000);
}


function resettime1(duration, display) {
  var timer = duration,
    minutes, seconds;
  setInterval(function() {
    minutes = 0
    seconds = 0;
    for (timer = 0; timer < 100000; timer++) {
      window.clearTimeout(timer);
      display.textContent = "00" + " days" + " | " + "00" + " hours" + " | " + "00" + " minutes" + " | " + "00" + " seconds";
      document.getElementById("start1").disabled = false;
    }

  }, 1000);
}

function resettime2(duration, display) {
  var timer = duration,
    minutes, seconds;
  setInterval(function() {
    minutes = 0
    seconds = 0;
    for (timer = 0; timer < 100000; timer++) {
      window.clearTimeout(timer);
      display.textContent = "00" + " days" + " | " + "00" + " hours" + " | " + "00" + " minutes" + " | " + "00" + " seconds";
      document.getElementById("start2").disabled = false;
    }

  }, 1000);
}



window.startdown = function() {
  var target = document.getElementById("countTarget").value;
  var time = 60 * target,
    display = document.querySelector('#timedown');
  startTimerdown(time, display);
};


window.startup = function() {
  var target = document.getElementById("countTarget").value;
   var time = 0,
    display = document.querySelector('#timeup');
  startTimerup(time, display);
};





window.reset1 = function() {
  var time = 0,
    display = document.querySelector('#timeup');
  resettime1(time, display);
};


window.reset2 = function() {
  var time = 0,
    display = document.querySelector('#timedown');
  resettime2(time, display);
};


