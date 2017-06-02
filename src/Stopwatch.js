import React, { Component } from 'react';
import Timer from './Timer';
import AdditionalButton from './AdditionalButton';
import MainButton from './MainButton';
import DisplayContainer from './DisplayContainer';
import LapContainer from './LapContainer';
import './Stopwatch.css';

class Stopwatch extends Component {
  constructor(props) {
    super(props);

    this._handleMainButtonClick = this._handleMainButtonClick.bind(this);
    this._handleAdditionalButtonClick = this._handleAdditionalButtonClick.bind(this);

    this.state = {
      mainTime: 0,
      lapTime: 0,
      isStarted: false,
      isResetted: true,
      laps: [],
    };

    this._mainTimer = new Timer();
    this._mainTimer.addObserver(this);
    this._lapTimer = new Timer();
    this._lapTimer.addObserver(this);
  }

  timerDidUpdate(timer) {
    if (timer === this._mainTimer) {
      this.setState({
        mainTime: this._mainTimer.time
      });
    } else if (timer === this._lapTimer) {
      this.setState({
        lapTime: this._lapTimer.time
      });
    }
  }

  _handleMainButtonClick() {
    const isStarted = !this.state.isStarted;

    if (isStarted) {
      // Handle 'Start' click
        this._mainTimer.start();
        this._lapTimer.start();
    } else {
      // Handle 'Stop' click
      this._mainTimer.stop();
      this._lapTimer.stop();
    }

    this.setState({
      isStarted: isStarted,
      isResetted: false,
    });
  }

  _handleAdditionalButtonClick() {
    if (this.state.isStarted) {
      // Handle 'Lap' click
      const laps = this.state.laps.slice();
      laps.push(this._lapTimer.time);
      this.setState({
        laps: laps
      });
      this._lapTimer.reset();
      this._lapTimer.start();
    } else if (!this.state.isResetted) {
      // Handle 'Reset' click
      this._mainTimer.reset();
      this._lapTimer.reset();
      this.setState({
        isStarted: false,
        isResetted: true,
        laps: [],
      });
    }
  }

  render() {
    return (
      <div className="stopwatch">
        <div className='stopwatch__controls'>
          <AdditionalButton
            onClick={this._handleAdditionalButtonClick}
            isStarted={this.state.isStarted}
            isResetted={this.state.isResetted}
          />
          <DisplayContainer
            mainTime={this.state.mainTime}
            lapTime={this.state.lapTime}
          />
          <MainButton
            onClick={this._handleMainButtonClick}
            isStarted={this.state.isStarted}
          />
        </div>
        <LapContainer laps={this.state.laps} />
      </div>
    );
  }
}

export default Stopwatch;
