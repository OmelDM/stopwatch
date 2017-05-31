class Timer {
  constructor() {
    this._time = 0;
    this._pauseTime = 0;
    this._intervalId = 0;
    this._timerDidUpdateCallback = null;
  }

  get time() {
    return this._time;
  }

  set timerDidUpdate(newCallback) {
    this._timerDidUpdateCallback = newCallback;
  }

  start() {
    const startTime = (new Date()).getTime();
    this._intervalId = setInterval(
      () => {
        const currentTime = new Date();
        const time = (currentTime.getTime() - startTime);
        this._time = time + this._pauseTime;
        this._timerDidUpdate();
      }, 10
    );
  }

  stop() {
    clearTimeout(this._intervalId);
    this._intervalId = 0;
    this._pauseTime = this._time;
  }

  reset() {
    this.stop();
    this._time = 0;
    this._pauseTime = 0;
    this._timerDidUpdate();
  }

  _timerDidUpdate() {
    if (this._timerDidUpdateCallback) {
      this._timerDidUpdateCallback();
    }
  }
}

export default Timer;
