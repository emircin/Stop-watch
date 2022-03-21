const playButton = $(".play");
const allButton = $(".button-div");
const pauseButton = $(".pause");
const stopButton = $(".stop");
const timeParg = $(".clock-parg");
const pauseSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="bisque" class="bi bi-pause-fill" viewBox="0 0 16 16"><path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/></svg>'
const playSvg ='<svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="bisque" class="bi bi-play-fill" viewBox="0 0 16 16" > <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" /></svg>'
const timePart = {
  milliSeconds: 0,
  seconds: 0,
  minutes: 0,
  hours: 0,
};
var { milliSeconds, seconds, minutes, hours } = timePart;

const counter = () => {
  milliSeconds += 10;
  if (milliSeconds == 100) {
    milliSeconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours + 1;
      }
    }
  }

  let h = hours.toString().padStart(2, "0");
  let m = minutes.toString().padStart(2, "0");
  let s = seconds.toString().padStart(2, "0");
  let ms = milliSeconds.toString().padStart(2, "0");
  $(timeParg).text(h + " : " + m + " : " + s + " : " + ms);
};

$(playButton).on("click", () => {

  if ($(playButton).hasClass("play")) {

    int = setInterval(counter, 100);
    $(playButton).removeClass("play");
    $(playButton).html(pauseSvg)
    console.log($(playButton).hasClass("play"));

  }
  else if (($(playButton).hasClass("play")) == false) {
    clearInterval(int);
    $(playButton).html(playSvg)
    $(playButton).addClass("play");
  };
});

$(stopButton).on("click", ()=>{
  clearInterval(int);
  milliSeconds = 0;
  seconds= 0;
  minutes =0;
  hours = 0;
  $(timeParg).text("00 : 00 : 00 : 00");
  $(playButton).html(playSvg)
  $(playButton).addClass("play");


})
