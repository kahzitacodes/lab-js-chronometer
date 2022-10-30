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

    }, 10);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 6000);
    return minutes;
  }

  getSeconds() {
    let seconds = Math.floor((this.currentTime / 100) % 60);
    return seconds;
  }

  getCentiseconds() {
    let cetiseconds = this.currentTime % 100;
    return cetiseconds;
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
    let centiseconds = this.computeTwoDigitNumber(this.getCentiseconds())
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let minutes = this.computeTwoDigitNumber(this.getMinutes());

    return minutes + ':' + seconds + '.' + centiseconds;
  }
}
