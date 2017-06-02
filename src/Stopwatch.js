import React, { Component } from 'react';
import Timer from './Timer';
import Button from './Button';
import Display from './Display';
import LapContainer from './LapContainer';
import './App.css';

class App extends Component {
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
    const MainButton = Button;
    const AdditionalButton = Button;
    const MainTimerDisplay = Display;
    const LapTimerDisplay = Display;

    return (
      <div className="red">
        <MainTimerDisplay time={this.state.mainTime} />
        <AdditionalButton
          onClick={this._handleAdditionalButtonClick}
          disabled={!this.state.isStarted && this.state.isResetted}
        >
          {(!this.state.isStarted && !this.state.isResetted) ? 'Reset' : 'Lap'}
        </AdditionalButton>
        <MainButton onClick={this._handleMainButtonClick}>
          {(this.state.isStarted) ? 'Stop' : 'Start'}
        </MainButton>
        <LapTimerDisplay time={this.state.lapTime} />
      <LapContainer laps={this.state.laps} />
      </div>
    );
  }
}

export default App;
