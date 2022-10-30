class Chronometer {
  constructor() {

    this.currentTime = 0;
    this.intervalId = null;

  }

  start(printTimeCallback) {

    this.intervalId = setInterval(() => {

      this.currentTime = this.currentTime + 1;

      if (!printTimeCallback){
        return
      }
      printTimeCallback();

    }, 1000);

  }

  getMinutes() {

    let minutes = Math.floor(this.currentTime / 60);
    return minutes;

  }

  getSeconds() {

    let seconds = this.currentTime % 60;
    return seconds;

  }

  computeTwoDigitNumber(value) {
    
    let digitString = value.toString();
		
    return digitString.length === 1 ? digitString = '0' + digitString : digitString;

  }

  stop() {
    
    clearInterval(this.intervalId);

  }

  reset() {

    this.currentTime = 0;

  }

  split() {

    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let minutes = this.computeTwoDigitNumber(this.getMinutes());

    return minutes + ':' + seconds;

  }
}
