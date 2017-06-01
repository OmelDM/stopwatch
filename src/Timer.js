class Timer {
  constructor() {
    this._time = 0;
    this._pauseTime = 0;
    this._intervalId = 0;
  }

  get time() {
    return this._time;
  }

  start() {
    const startTime = (new Date()).getTime();
    this._intervalId = setInterval(
      () => {
        const currentTime = new Date();
        const time = (currentTime.getTime() - startTime);
        this._time = time + this._pauseTime;
        this._updateObservers();
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
    this._updateObservers();
  }

  // Observer pattern from GoF
  // Every Observer should implement timerDidUpdate() function to be notified
  // timerDidUpdate(timer)
  //  timer - reference to current timer
  addObserver(observer) {
    if (!this._observerList) {
      this._observerList = [];
    }
    this._observerList.push(observer);
  }

  removeObserver(observer) {
    const deletedIndex = this._observerList.indexOf(observer);
    if (-1 !== deletedIndex) {
      this._observerList.splice(deletedIndex, 1);
    }
  }

  _updateObservers() {
    this._observerList.forEach((observer) => {
      if (observer.timerDidUpdate) {
        observer.timerDidUpdate(this);
      }
    });
  }
}

export default Timer;
